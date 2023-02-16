const myMap = new Map<string, string>([])


// 1
const mapToObj = (map: Map<string, string>) => {
    return [...map.entries()].reduce((obj, [key, value]) => (obj[key] = value, obj), {})
}
// 2
const mapToObj2 = (map: Map<string, string>) => {
    return Array.from(map).reduce((obj, [key, value]) => (obj[key] = value, obj), {})
}

// 3
const mapToObj3 = (map: Map<string, string>) => {
    return Array.from(map.entries()).reduce((obj, [key, value]) => (Object.assign(obj, {[key]: value})), {})
}
