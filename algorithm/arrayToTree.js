const arr = [{
    id: 2, name: '部门B', parentId: 0
}, {
    id: 3, name: '部门C', parentId: 1
}, {
    id: 1, name: '部门A', parentId: 2
}, {
    id: 4, name: '部门D', parentId: 1
}, {
    id: 5, name: '部门E', parentId: 2
}, {
    id: 6, name: '部门F', parentId: 3
}, {
    id: 7, name: '部门G', parentId: 2
}, {
    id: 8, name: '部门H', parentId: 4
}]
const arrayToTree = (array, root) => {
    return array.filter(item => item.parentId === root)
        .map(item => ({...item, children: arrayToTree(array, item.id)}));
}
const arrayToTree1 = (array, root) => {
    const result = [];
    const map = {};
    for (let item of array) {
        map[item.id] = {...item}
    }
    for (let item of array) {
        const {id, parentId} = item;
        if (item.parentId === root) {
            result.push(map[id]);
        } else {
            map[parentId].children ? map[parentId].children.push(map[id]) : map[parentId].children = [map[id]]
        }

    }
    return result;
}
const arrayToTree2 = (array, root) => {
    const loop = (pid) => {
        let res = [];
        let i = 0;
        while (i < array.length) {
            let item = array[i];
            i++;
            if (item.parentId !== root) continue;
            item.children = loop(item.id)
            res.push(item);
            return res;
        }
    }
}

const arrayToTree3 = (array, root) => {
    const loop = (pid) => {
        return array.reduce((pre, cur) => {
            if (cur.parentId === pid) {
                cur.children = loop(cur.id);
                pre.push(cur);
            }
            return pre;
        }, [])
    }
    return loop(root);
}

console.log(arrayToTree3(arr, 0));

