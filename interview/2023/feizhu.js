function query(data) {
    return new Query(data);
}

class Query {
    constructor(data) {
        this.data = data;
        this.task = [];
    }

    where = function (predicate) {
        this.task.push(() => {
            const res = this.data.filter(predicate);
            this.data = res;
        });
        return this;
    };
    orderBy = function (key, desc) {
        const sorter = () => {
            const sortCallback = (a, b) => {
                return desc ? b[key] - a[key] : a[key] - b[key];
            };
            const res = this.data.sort(sortCallback);
            this.data = res;
        };
        this.task.push(sorter);
        return this;
    };
    groupBy = (key) => {
        const groupFun = () => {
            const map = {};
            while (this.data.length > 0) {
                const cur = this.data.pop();
                if (map[cur[key]]) {
                    map[cur[key]].push(cur)
                } else {
                    map[cur[key]] = [cur]
                }
            }
            return Object.keys(map).map((key) => {
                return map[key]
            })
        };
        this.task.push(groupFun);
        return this;
    };
    execute = () => {
        this.task.forEach((it) => it());
        return this.data;
    };
}

const data = [{name: 'foo', age: 16, city: 'shanghai'}, {name: 'bar', age: 24, city: 'hangzhou'}, {
    name: 'fiz',
    age: 22,
    city: 'shanghai'
}, {name: 'baz', age: 19, city: 'hangzhou'}];
query(data)
    .where((item) => item.age > 18) // 筛选
    .orderBy('age') // 排序（key,order） 第二个参数默认正序
    .groupBy('city') //分组
    .execute(); //调用execute的时候在执行
