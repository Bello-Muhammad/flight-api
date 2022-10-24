const express = require('express');
const flight = require('./flight')

const app = express();
const port = 3000;

app.use(express.json())

app.post('/addflight', (req, res) => {

    const title = req.body.title, price = req.body.price, time = req.body.time;
    const date = new Date().toLocaleDateString();

     const _a_ = flight.addFlight(title, time, price, date);
     
     console.log(_a_);

});

app.get('/allflight', (req, res) => {

    const _a_ = flight.getAllFlight()
    console.log(_a_)
    

})

app.get('/flight', (req, res) => {

    const title = req.body.title;
    const _a_ = flight.getFlight(title);

    console.log(_a_)

})

app.patch('/updateflight', (req, res) => {

    // console.log(req.body)
    const title = req.body.title;
    const update = {...req.body.update}
    // console.log(updates)
    const _a_ = flight.updateFlight(title, update)

    console.log(_a_)

})

app.delete('/removeflight', (req, res) => {

    const title = req.body.title;
    const _a_ = flight.removeFlight(title)

    console.log(_a_);

})



app.listen(port, () => {
    console.log('Listening on port: '+ port)
})