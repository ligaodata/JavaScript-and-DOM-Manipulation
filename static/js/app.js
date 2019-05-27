// ***********************
//  Show the whole table data 

// Add one row to table
var entry ={
    datetime: "1/28/1996",
    city: "dallas",
    state: "tx",
    country: "us",
    shape: "star",
    durationMinutes: "5 mins.",
    comments: "Cowboys win a superbowl, that's alien!."
    };


var tbody = d3.select("tbody");
var row = tbody.append("tr");
Object.values(entry).forEach((value) => {
    row.append("td").text(value);
    });



// from data.js
tableData = data;

var tbody = d3.select("tbody");
tableData.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([_, value]) => {
      var cell = row.append("td").text(value);
    });
});


// ***********************
//  Filter the whole table

// Select the submit button
var submit = d3.select("#filter-btn"); 

submit.on("click", function() {

  //  Delete the previous html table rows 
  d3.select("tbody")
    .selectAll("tr")
    .remove(); 

  // Prevent the page from refreshing
  d3.event.preventDefault();

  // Select the five filter input elements and get the values property of the input elements
  var inputValueDate = d3.select("#datetime").property("value");
  var inputValueCountry = d3.select("#country").property("value").toLowerCase();
  var inputValueState = d3.select("#state").property("value").toLowerCase();
  var inputValueCity = d3.select("#city").property("value").toLowerCase();
  var inputValueShape = d3.select("#shape").property("value").toLowerCase();

  console.log(inputValueDate);
  
  //   Filte the table by different filters
  var filteredData = tableData;
  if (inputValueDate && filteredData){
    filteredData = filteredData.filter(filteredData => filteredData.datetime === inputValueDate);
    }
  if (inputValueCountry && filteredData){
    filteredData = filteredData.filter(filteredData => filteredData.country === inputValueCountry);
    }
  if (inputValueState && filteredData){
    filteredData = filteredData.filter(filteredData => filteredData.state === inputValueState);
    }
  if (inputValueCity && filteredData){
    filteredData = filteredData.filter(filteredData => filteredData.city === inputValueCity);
    }
  if (inputValueShape && filteredData){
    filteredData = filteredData.filter(filteredData => filteredData.shape === inputValueShape);
  }
 
 
 var tbody = d3.select("tbody");
 filteredData.forEach((datum) => {
    var row = tbody.append("tr");
    Object.entries(datum).forEach(([_, value]) => {
    var cell = row.append("td").text(value);
        });
    });
  
    
});
   






