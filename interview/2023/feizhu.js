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
            let map = {};
            while (this.data.length) {
                let current = this.data.pop();
                map[current[key]] = map[current[key]] || [];
                map[current[key]].push(current);
            }
            const res = Object.keys(map).map((key) => map[key]);
            this.data = res;
        };
        this.task.push(groupFun);
        return this;
    };
    execute = () => {
        this.task.forEach((it) => it());
        return this.data;
    };
}

const data = [
    { name: 'foo', age: 16, city: 'shanghai' },
    { name: 'bar', age: 24, city: 'hangzhou' },
    { name: 'fiz', age: 22, city: 'shanghai' },
    { name: 'baz', age: 19, city: 'hangzhou' }
];
query(data)
    .where((item) => item.age > 18)
    .orderBy('age')
    .groupBy('city')
    .execute();
