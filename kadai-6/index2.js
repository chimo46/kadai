const str1 = "abc"
const str2 = "'abc'"
const str3 = '"abc"'
const str4 = '{"a": undefined}'
const str5 = '{"a": 123}'
const str6 = '{a: 123}'

try {
    console.log(JSON.parse(str1))
} catch (error) {
    console.log(error)
  //文字列がabcだと正しいJSONじゃないから
  //正しくは"abc"
}