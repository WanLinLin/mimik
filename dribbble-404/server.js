const express = require('express')

const app = express()

app.use(express.static('public'))
app.use('/mimik/dribbble-404', express.static('public'))

app.listen(5000)
