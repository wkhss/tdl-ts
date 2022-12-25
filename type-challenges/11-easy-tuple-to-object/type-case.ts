
import type { Equal, Expect } from '@type-challenges/utils'

const tuple = ['tesla', 'model 3', 'model X', 'model Y'] as const
// const tuple=['',''] 表示 tuple是一个字面量类型
// const tuple=['',''] as const 表示 tuple 数组中的元素也是 字面量类型 的

let str='123'
type r=typeof str;// string

const strConst='234'
type sc=typeof strConst;// '234' -> 不可修改类型

type cases = [
  Expect<Equal<TupleToObject<typeof tuple>, { 
        tesla: 'tesla'; 
        'model 3': 'model 3'; 
        'model X': 'model X'; 
        'model Y': 'model Y'
    }>>,
]

// // @ts-expect-error
type error = TupleToObject<[[1, 2], {}]>

// typeof https://www.typescriptlang.org/docs/handbook/2/typeof-types.html
// const let js 世界
// type interface type类型 世界
// typeof => js 世界 转换为 type 世界
