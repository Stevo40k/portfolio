const express = require('express');
const bodyParser = require('body-parser');
const exphbs  = require('express-handlebars');

const app = express();

//Handlebars Middleware
app.engine('handlebars', exphbs({defaultLayout: 'main'}));
app.set('view engine', 'handlebars');
 
// HOME PAGE
app.get('/', (req, res) => {
    const title = 'Welcome'
    res.render('index', { title: title});
});
// ABOUT PAGE
app.get('/about', (req, res) => {
    res.render('about');
});
// MY WORK
app.get('/mywork', (req, res) => {
    res.render('mywork');
});
// EXPERIENCE
app.get('/experience', (req, res) => {
    res.render('experience');
});

// BOOTSTRAP
app.use('/js', express.static(__dirname + '/node_modules/bootstrap/dist/js')); // redirect bootstrap JS
app.use('/js', express.static(__dirname + '/node_modules/jquery/dist')); // redirect JS jQuery
app.use('/css', express.static(__dirname + '/node_modules/bootstrap/dist/css')); // redirect CSS bootstrap



const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`)
});