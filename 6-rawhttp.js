const http = require('http')

const url ='http://api.weatherstack.com/current?access_key=dff5e6f279a67deaa92e84a4fe62a1dc&query=45,-75&units=m'

const request = http.request(url,(response)=>{
    let data = ''
    response.on('data',(chunk)=>{
       data= data + chunk.toString()
        
    })
    response.on('end',()=>{
        const body = JSON.parse(data)
        console.log(body)
    })
    response.on('error',(error)=>{
        console.log('an error',error)
    })
})
request.end()