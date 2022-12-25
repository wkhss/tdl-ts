
type TupleToObject<T extends readonly any[]> = {
    [P in T[number]]:P
}

// js 
// function tupleToObject(array){
//     const obj={}
//     array.forEach(val=>{
//         obj[val]=val
//     })
//     return obj
// }

// 1. 返回一个对象
// 2. 遍历 array  T[number]
