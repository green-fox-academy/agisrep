const express = require('express');
const path = require('path');

const app = express();
//app.use('./assets',express.static('assets'));
const PORT = 8080;


app.use(express.static('assets'));
app.use(express.json());


app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/doubling/', (req, res) => {
    if (req.query.input !== undefined) {
        res.send({
            received: req.query.input,
            result: req.query.input * 2
        })
    } else {
        res.send('error: Please provide an input!')
    }
    res.status(200);
})

app.get('/greeter', (req, res) => {
    if (req.query.name !== undefined && req.query.title !== undefined) {
        res.send({ welcome_message: `Oh, hi there ${req.query.name}, my dear ${req.query.title}!` })
    } else if (req.query.title == undefined && req.query.input == undefined) {
        res.send({ error: `Please provide a name and a title!` })
    } else if (req.query.name == undefined) {
        res.send({ error: `Please provide a name!` })
    } else {
        res.send({ error: `Please provide a name and a title!` })
    }
    res.status(200);
})

app.get('/appenda/:text', (req, res) => {
    if (req.params.text !== undefined) {
        res.send({ appended: `${req.params.text}a` })
    }
})


function numSum(upto) {
    let total = 0;
    for (let i = 1; i <= upto; i++) {
        total += i;
    }
    return total
}

//console.log(numSum(5));

function numFact(uptil) {
    let total = 1;
    for (let i = 1; i <= uptil; i++) {
        total = total * i;
    }
    return total
}
//console.log(numFact(5));

app.post('/dountil/:action', (req, res) => {
    if (req.params.action == sum) {
        res.send({ until: `${req.params.numSum}` })
    } else if (req.params.action == factor){
        res.send({until: `${req.params.numFact}`})
    } else {
        
    }
})

app.listen(PORT, () => {
    console.log(`Listening on port ${PORT}`);
});