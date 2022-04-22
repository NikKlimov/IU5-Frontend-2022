/**
 * Доп задание, делать не обязательно, но мы запомним тех кто не сделал ;D
 * Напишите функцию makeRoute([{from: string, to: string}]),
 * на вход подается массив, состоящий из объектов с полями to from
 * необходимо вернуть отсортированный массив объектов по правильному пути
 * Примеры:
 * [
    { from: 'L', to: 'M' },
    { from: 'M', to: 'N' },
    { from: 'A', to: 'L' },
    { from: 'B', to: 'A' },
    { from: 'N', to: 'Z' },
]
-->
[
    {"from": "B", "to": "A"},
    {"from": "A", "to": "L"},
    {"from": "L", "to": "M"},
    {"from": "M", "to": "N"},
    {"from": "N", "to": "Z"}
]
 */

function makeRoute(arr) {
    //code here
    let arrTo= arr.map(item => item.to);
    let arrFrom= arr.map(item => item.from);
    let newArr=[]
    let x=0
    for (let key of arrFrom) {
        if (!arrTo.includes(key)) {
            for (let i = 0; i < arrFrom.length; ++i) {
                x=arrFrom.indexOf(key)
                newArr.push({ 'from': key, 'to':arrTo[x]  })
                key = arrTo[x]
            }
            break
        }
    }
    return newArr

}

module.exports = makeRoute;
