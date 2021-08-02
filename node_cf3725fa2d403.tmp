const express = require('express')
const faker = require('faker')
const expressLayouts = require('express-ejs-layouts')
const app = express()
const port = process.env.PORT || 5000

//configurando server

app.set('view engine', 'ejs')     // Setamos que nossa engine será o ejs
app.use(expressLayouts)           // Definimos que vamos utilizar o express-ejs-layouts na nossa aplicação
app.use(express.urlencoded({
    extended: true
})) // Com essa configuração, vamos conseguir parsear o corpo das requisições

app.use(express.static(__dirname + '/public'))
app.listen(port, () => {
    console.log(`A mágica acontece em http://localhost:${port}`)
})

//rotas
    //get /home
    app.get('/', (req, res) => {
        res.render('pages/home')
    })

    //get /about
    app.get('/guia', (req, res) => {
        var users = [{
            id:'1',
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/300/300'
        }, {
            id: '2',
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/400/300'
        }, {
            id: '3',
            name: faker.name.findName(),
            email: faker.internet.email(),
            avatar: 'http://placebear.com/500/300'
        }]

        res.render('pages/guia', {
            //usuarios vai receber o vetor user
            usuarios: users
        })
    })

    //get / contact
    app.get('/contact', (req, res) => {
        res.render('pages/contact')
      })

    //post /contact
    app.post('/', (req, res) => {
        res.send('Obrigado por entrar em contato conosco, ' + req.body.name + '! Responderemos em breve!')
      })