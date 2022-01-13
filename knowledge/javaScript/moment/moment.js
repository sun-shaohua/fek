//moment 的startOf和endOf的使用
import moment from 'moment'


const year = moment().startOf('year');
const _year = moment().endOf('year');
console.log(year);
console.log(_year);
const data = moment().startOf('day');
const _data =moment().endOf('day');
console.log(data);
console.log(_data);


//地址：http://momentjs.cn/
