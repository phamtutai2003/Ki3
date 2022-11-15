const express = require('express')
const expressHandlebars = require('express-handlebars')
const app = express()

app.engine('handlebars', expressHandlebars.engine({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

app.get('/bad-bad-not-good', (req, res) => {
    throw new Error("that did not go well!")
})

app.get('*', (req, res) => res.render('08-click-here'))

app.use((err, req, res, next) => {
    console.error('** SERVER ERROR:' + err.message)
    res.status(500).render('08-error', { message: "you should not have clicked that!" })
})

const port = process.env.PORT || 3000

app.listen(port, () => console.log(`\nnavigate to http://localhost:${port}\n`))