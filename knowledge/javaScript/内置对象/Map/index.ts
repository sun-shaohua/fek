// 创建Map

const map = new Map([[
    "q", 1
], ["w", 2]]);

// 属性size
const len = map.size;
// delete用于移除map中指定的元素
map.delete('q')
// 添加元素
map.set('a',2);
//获取某个元素的值
map.get("w");
// 获取所有的keys
map.keys();
//获取所有的value
map.values();
