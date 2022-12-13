// K => 联合类型
type MyPick<T, K extends keyof T> = {// extends => 约束K存在于T中 | keyof => 用于获取T接口中的key
    // [P in K] => 用于遍历 联合类型 其中 P 为类型的 值
    [P in K]:T[P]
}

// js 实现方式

/* 
function myPick(todo,keys){// todo(T) => todo接口 keys(K) => 理解为数组
    let obj={}
    // keys => ['title','completed','description']
    // todo => { title:string, description:string, completed:boolean }
    keys.forEach(key=>{
        if(key in todo){
            obj[key]=todo[key]
        }
    })
    return obj
} */

/* 
    1.返回一个obj
    2.forEach循环 mapped
         - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
    3.todo[key]取值 indexed
         - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
    4.判断key是否在todo中
        1. keyof  lookup
              - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
        2. extends 条件约束
              - https://www.typescriptlang.org/docs/handbook/2/generics.html#generic-constraints
*/
