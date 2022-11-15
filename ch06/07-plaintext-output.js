const express = require('express')
const app = express()

app.get('/text',(req,res)=>{
    res.type('ext/plain')
    res.send('this is a test')
})
app.get('*', (req,res) =>res.send('check out our "<a herf="/text">plain text</a>" page!'))
const port = process.env.PORT || 3000

app.listen(port,()=> console.log(`\nnavigate to http://localhost:${port}/text\n`))