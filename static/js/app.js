// from data.js, test to see if exists
// console.log(data);

// select body tag
var tbody = d3.select("tbody")

// loop thru data and create row & cell tag and populate with data
data.forEach((site) => {
    // create row tag by referencing body tag
    tbody.append("tr");

    // loop thru each site items, create cell and append value to it
    Object.entries(site).forEach(([id, value]) => {
        tbody.append("td").text(value);
    });

});

// Format table with border, stripe, hover, and condensed
d3.select("table").attr("class", "table table-striped table-bordered table-hover table-condensed");

// Get button
submit = d3.select("#filter-bt");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    console.log("working");

    // Get date from field
    var adate = d3.select("#datetime").property("value");
    console.log(adate);

    // var result = data.filter(site => site.datetime === adate);

    // console.log(result);
});