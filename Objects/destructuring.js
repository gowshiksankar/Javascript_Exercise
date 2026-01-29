let series={
    name:"stranger Things",
    season:5,
    episode:42,
    director:"Duffer Brothers",
    year:2016,
    ott:"Netflix"
}

//without Destructuring

var name=series.name;
var season=series.season;
var episode=series.episode;
var director=series.director;
var year=series.year;
var ott=series.ott;

console.log(name,season,episode,director,year,ott);

//Wtih destructuring

var {name,season,episode,director,year,ott}=series;

console.log(name,season,episode,director,year,ott);

