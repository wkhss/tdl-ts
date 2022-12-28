// type First<T extends any[]> = T extends [] ? never : T[0];// 1.extends
// type First<T extends any[]> = T['length'] extends 0 ? never : T[0]// 2.length
// type First<T extends any[]> = T[0] extends T[number] ? T[0] : never;// 3.union
type First<T extends any[]> = T extends [infer First,... infer Rest] ? First : never// infer

// 4.infer
/* const first=(arr)=>{
    const [first,...rest]=arr
    return first ? first
} */

// js 3.union
/* type age=[1,2,3]
type count=[]
type t1=age[number]// t1 -> 3 | 1 | 2
// 1 extends 1 1 extends 2 1 extends 3
type t2=1 extends age[number] ? 'true' : 'false'
type t3=age[0] extends age[number] ? 'true' : 'false'
type t4=count[0] extends count[number] ? 'true' : 'false' */

// js 2.length
/* const first=(arr)=>{
    if(arr.length===0)return 'never'
    return arr[0]
} */

// js 1.extends
/* const first=(arr)=>{
    // arr 是否是空数组 如果是 则返回never
    // 在js中 T === [] 不相等 为false
    return arr[0]
} */

// 知识点
// 1. extends 类型条件判断
// 2. 获取 tuple 的 length 属性  indexed
// 3. extends union  判断的规则
// 4. infer 的使用(推断)
