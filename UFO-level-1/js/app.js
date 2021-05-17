//store all data in a variable
var sightings = data;


//reference table body
window.onload = function startUp(){
    var tbody = d3.select("tbody");

    console.log(sightings);

    sightings.forEach(alienTable => {
        var row = tbody.append("tr");

        Object.values(alienTable).forEach(value => {
            row.append("td").text(value);
        });
    });

};
//---------------------------------------------


// select button and form with id

var button = d3.select("#button");

var  form = d3.select("#form");

// event handlers for hitting enter and clicking the button
button.on("click", runAlien);
form.on("submit", runAlien);

// create a function that runs clicking the button and hitting 

function runAlien() {

    d3.event.preventDefault();

    var inputElement = d3.select("#date-form-input");

    console.log(inputElement);

    var inputValue = inputElement.property("value");

    console.log(inputValue); //type is string

    //convert the inputvalue from forma (YYY-MM-DD) to a string format similar to data

    var parts =inputValue.split('-');
    
    var mydate = new Date(parts[0], parts[1] - 1, parts[2]); 
    
    console.log(typeof mydate);
    console.log(mydate);

    var myDateStr = mydate.toLocaleDateString("en-US", { month: 'numeric' }) + "/" + mydate.toLocaleDateString("en-US", { day: 'numeric' }) + "/" + mydate.toLocaleDateString("en-US", { year: 'numeric' });

    console.log(typeof myDateStr);
    console.log(myDateStr);

    
    var filteredData = sightings.filter(dates => dates.datetime === myDateStr);

    console.log(filteredData);

    var tbody = d3.select("tbody");

    tbody.html("")

    filteredData.forEach(filterTable => {
        var filRow = tbody.append("tr");

        Object.values(filterTable).forEach(value => {
            filRow.append("td").text(value);
        });
    });
};