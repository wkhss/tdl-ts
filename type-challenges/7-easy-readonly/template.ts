type MyReadonly<T> = {
    readonly [P in keyof T]:T[P]
}

// js
/* function myReadonly(objs){
    const result={}
    for(key in objs){
        result['readonly'+key]=objs[key]
    }
    return result
} */

// 1.返回一个对象
// 2.遍历obj (js对象 ts接口)
// 3.添加readonly关键字
// 4.通过key获取 obj/接口 中的值

// 涉及到的知识点
// 1. 返回一个对象
// 2. 遍历foreach 接口 lookup mapped   
//    - keyof  lookup
//      - https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#keyof-and-lookup-types
//    - mapped
//      - https://www.typescriptlang.org/docs/handbook/2/mapped-types.html
// 3. 加上 readonly 关键字  新的知识点
//    - https://www.typescriptlang.org/docs/handbook/utility-types.html#readonlytype
// 4. todo[key] 取值 indexed
//    - https://www.typescriptlang.org/docs/handbook/2/indexed-access-types.html
