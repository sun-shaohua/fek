//encodeURI()  函数通过将特定字符的每个实例替换为一个、两个、三或四转义序列来对统一资源标识符 (URI) 进行编码 
//(该字符的 UTF-8 编码仅为四转义序列)由两个 "代理" 字符组成)。

//decodeURI() 函数能解码由encodeURI 创建或其它流程得到的统一资源标识符（URI）。

const uri = 'https://mozilla.org/?x=шеллы';
const encoded = encodeURI(uri);
console.log(encoded);
// expected output: "https://mozilla.org/?x=%D1%88%D0%B5%D0%BB%D0%BB%D1%8B"

try {
  console.log(decodeURI(encoded));
  // expected output: "https://mozilla.org/?x=шеллы"
} catch (e) { // catches a malformed URI
  console.error(e);
}