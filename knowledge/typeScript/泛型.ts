/*泛型工具*/
/* 把泛型中的所有类型变成可选类型*/
type _Partial<T> = { [P in keyof T]?: T[P] }
/* 把K中的所有属性转化成T类型*/
type _Record<K extends keyof any, T> = { [key in K]: T }
/*把T中的K提取出来，生成新的键值对类型*/
type _Pick<T, K extends keyof T> = { [P in K]: T[P] }
/*在T类型中，去除T类型和U类型的交集*/
type _Exclude<T, U> = T extends U ? never : T
/*适用于键值对对象中，去除T中包含K的键值对*/
type _Omit<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
/*将T中的所有属性变成必须的*/
type _Required<T> = { [P in keyof T]-?: T[P] }
/*函数参数类型*/
type _Parameter<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
/*函数返回值类型*/
type _ReturnType<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;

type Pick_<T, K extends keyof T> = { [P in K]: T[P]; }
type Partial_<T> = { [P in keyof T]?: T[P]; }
type Record_<K extends keyof any, T> = { [P in K]: T }
type Exclude_<T, U> = T extends U ? never : T;
type Omit_<T, K extends keyof any> = Pick<T, Exclude<keyof T, K>>
type Required_<T> = { [P in keyof T]-?: T[P] }
type Parameter_<T extends (...args: any) => any> = T extends (...args: infer P) => any ? P : never;
type ReturnType_<T extends (...args: any) => any> = T extends (...args: any) => infer R ? R : never;
