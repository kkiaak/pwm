const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 5000;

// static files
app.use(express.static('public'));
app.use('/css', express.static(__dirname + 'public/css'));
app.use('/img', express.static(__dirname + 'public/img'));
app.use('/js', express.static(__dirname + 'public/js'));

// Templating engine
app.set('views', './src/views');
app.set('view engine', 'ejs');

//app.use(bodyParser.urlencoded({extended: true}))

// routes
const mzRouter = require('./src/routes/agescimz');

app.use('/', mzRouter);

//twitter

const update = async() => {
    twit.getTweet()
    try {
        twitAPI = JSON.parse(await fs.readFile(__dirname + '/script/json/twitt.json', 'utf8', (err,data) => {
                if (err) {
                    console.error(err)
                }
                return data
            }));       
    } catch(err) {
        console.error('Error: ', err)
    }
}

const renderHome = async (req, res) => {
    await update() //aspetto che tutti i file vengano scaricati
    
    try {
        res.render('home', { twit:twitAPI.statuses})
    } catch (err) {
        res.render('/', { twit:null })
        console.error('Error: ', err)
    }
}

//gestisco monza.ejs
app.get('/', renderHome);


//Listen on port 5000
app.listen(port, () => console.log('Listening on port 5000'));