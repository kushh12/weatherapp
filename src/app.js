const path = require('path')
const express = require('express')
const hbs = require('hbs',)


const app = express()


// define paths for express config
const publicDirPath = path.join(__dirname, '../public')

const viewsPath = path.join(__dirname, '../templates/views')

const partialsPath = path.join(__dirname, '../templates/partials')

// setup handlebars engine and views location
app.set('views', viewsPath)
app.set('view engine', 'hbs')
hbs.registerPartials(partialsPath)


// setup static directory to serve
app.use(express.static(publicDirPath))

app.get('', (req, res) => {
    res.render('index', {
        title: 'Weather',
        name: 'Kaushal Luffa'
    })
})
app.get('/about', (req, res) => {
    res.render('about', {
        title: 'About',
        name: 'Kaushal Luffa'
    })
})
app.get('/help', (req, res) => {
    res.render('help', {
        title: 'help',
        name: 'Kaushal Luffa',
        message: 'This is the help page'
    })
})

app.get('/weather', (req, res) => {
    res.send({
        location: 'Brampton',
        forecast: 'clear'
    })
})

app.get('/help/*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Help article not found',
        name: 'Kaushal Luffa'
    })
})

app.get('*', (req, res) => {
    res.render('404', {
        title: '404',
        errorMessage: 'Page not found',
        name: 'Kaushal Luffa'
    })
})

app.listen(3000, () => {
    console.log('Server is up on port 3000')
})