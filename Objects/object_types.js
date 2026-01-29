//object inside function as a property
let series = {
    name: "strangerthings",
    year: 2016,
    director: "Duffer Brothers",
    oneline: function () {
        return "This is science fiction dramatic,investigation,horror concept series"
    }

}
console.log(series);

//Eg:2 object inside an array
let strangerthings = {
    season: 5,
    power: ["vecna", "Jane", "will", "eight"],
    vecna_is_alive: false,
    story_timing: 1983,
    superpower: function (one, eleven) {
        console.log(one, eleven + " powers are created by hawkings lab");
    }
}
strangerthings.superpower("Henry", "Jane");
console.log(strangerthings.power.slice(0, 2));

//Eg:3 object inside an object =>nested object

let series_list = {
    list: {
        netflix: ["strangerthings", "Moneyheist", "Breaking Bad"],
        business: {
            production: "strangerthings",
            price: 8000000000,
            revenue: 'gaming platform',
            year: 1997

        }

    }
}
console.log(series_list.list.business)


//using this keyword
let flight = {
    category: "International",
    type: "AirbusA350",
    capactiy: 600,
    price: 60000,
    feature: function (category, type) {
        return `This is  ${this.category}  and its type is   ${this.type}`;
    }
}
console.log(flight.feature())