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

    console.log(inputValue);

    var filteredData = sightings.filter(dates => dates.datetime === inputValue);

    console.log(filteredData);


    //past here is just messing around, haven't got anywhere


    var table = d3.select("#myTable");

    console.log(table);

    var tr = d3.select("tr");

    console.log(tr);

    var td = tr.d3.select("td")[0];

    console.log(td);

    for (var i=0; i < Object.keys(tr).length; i++) {
        var td = tr[i].d3.selectAll("td")[0];
        if (td) {
            Value = d3.select("td").text();
            console.log(Value);
            // if (Value === inputValue) {
            //     console.log(tr[i]);
            // } else {
            //     console.log("none");
            // }
        }
    }

};