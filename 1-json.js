 const fs = require('fs')


const dataBuffer = fs.readFileSync('1-json.json') // there is file which is read into bytes or numbers using dataBuffer
const dataJson = dataBuffer.toString()//the databuffer will be converted to string and be allocated into dataJson

const user = JSON.parse(dataJson)//parsing of the words of dataJson will be stored in the user all the attributes

user.title = 'The girl with the dragon tatoo'
user.author = 'some swedish old guy'

const userJson = JSON.stringify(user)//collaborates all the attirbutes under one name
fs.writeFileSync('1-json.json',userJson)//write into the file