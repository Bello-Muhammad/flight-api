const fs = require('fs')


const addFlight = (title, time, price, date ) => {
    
    const flights = loadFlight()
    const duplicateFlight = flights.find((flight) => flight.title === title)

    if(!duplicateFlight) {
        flights.push({
            title,
            price,
            time,
            date
        })
        saveFlights(flights)

        return flights;
    }else{
        return 'flight booked already';
    }
}

const getFlight = (title) => {

    const flights = loadFlight();
    const flight = flights.filter((flight) => flight.title === title)


    if (flight) {
        
        return flight;
    }else{
        return "Flight not found";
    }

}

const getAllFlight = () => {

    let allFlight = []
    const flights = loadFlight();

    flights.forEach( (flight) => {
        allFlight.push(flight)
    });

    return allFlight;
}

const removeFlight = (title) => {

    const flights = loadFlight();
    const remainBooked = flights.filter((flight) => flight.title !== title)
    const removeBooked = flights.filter((flight) => flight.title === title)


    if (flights.length > remainBooked.length) {
        saveFlights(remainBooked)
        return removeBooked;
    }else{
        return "No flight to remove!";
    }
}

const updateFlight = (title, update) => {

    const flights = loadFlight();
    const flight = flights.filter((flight) => flight.title === title);
    const _b_ = flight.pop()
    let a = _b_
    

    for(let key in a) {
        
        for(let prop in update) {

            if(key == prop){
                a[key] = update[prop]
                
            }continue;
        }
    }
    

    saveFlights(a);
    return a;
}


const saveFlights = (flights) => {
    const dataJSON = JSON.stringify(flights);
    fs.writeFileSync('flight.json', dataJSON)
}

const loadFlight = () => {
    try {
        const dataBuffer = fs.readFileSync('flight.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    addFlight,
    getAllFlight,
    getFlight,
    updateFlight,
    removeFlight,
    
}