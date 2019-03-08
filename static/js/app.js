// from data.js, test to see if exists
// console.log(data);

// loop thru data and create row & cell tag and populate with data
appendData(data); 
// data.forEach((site) => {
//     // select body tag
//     var tbody = d3.select("tbody")  

//     // create row tag by referencing body tag
//     tbody.append("tr");

//     // loop thru each site items, create cell and append value to it
//     Object.entries(site).forEach(([id, value]) => {
//         tbody.append("td").text(value);
//     });

// });

// Format table with border, stripe, hover, and condensed
// d3.select("table").attr("class", "table table-striped table-bordered table-hover table-condensed");

// Get button
submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // console.log("working");

    // Get date from field

    // console.log(result);

    clearTbody();

    d3.select("table").append("tbody");

    appendData(result);
});

// This function empty table's data
function clearTbody() {
    d3.select("tbody").remove();
}

function appendData(_data) {
    // loop thru data and create row & cell tag and populate with data
    _data.forEach((site) => {
        // select body tag
        var tbody = d3.select("tbody")  

        // create row tag by referencing body tag
        tbody.append("tr");

        // loop thru each site items, create cell and append value to it
        Object.entries(site).forEach(([id, value]) => {
            tbody.append("td").text(value);
        });

    });
}

function filterResult() {

    var inputDate = d3.select("#datetime").property("value");
    var inputShape = d3.select("#shape").property("value");

    

    
    var result = data.filter(site => site.datetime === inputDate && site.shape === inputShape);

}

function isEmpty(str) {
    return (!str || 0 === str.length);
}