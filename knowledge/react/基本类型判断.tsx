const isObject = (value: unknown): value is Record<any, any> => value !== null && typeof value === 'object';
const isString = (value: unknown): value is string => typeof value === 'string';
const isUndefined = (value: unknown): value is undefined => typeof value === 'undefined';
const isBoolean = (value: unknown): value is boolean => typeof value === 'boolean'
const isNumber = (value: unknown): value is number => typeof value === 'number';
const isFunction = (value: unknown): value is Function => typeof value === 'function';
