// from data.js, test to see if exists
// console.log(data);

// loop thru data and create row & cell tag and populate with data
appendData(data); 

// Get button
submit = d3.select("#filter-btn");

submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();
    // console.log("working");

    // Clear table by removing the tbody
    d3.select("tbody").remove();

    // Append tbody back to table
    d3.select("table").append("tbody");

    // Get input filter items
    filterList = getInputs()
   
    // Filter data & append result to table
    appendData(filterData(filterList));
 
});

// This function gathers all the input item for filtering dataset
function getInputs() {  
    // Initialize dictionary to hold form's input values
    const inputList = {}  

    // Loop thru each input and store into list if not empty
    $('#search input, #search select').each(function(key, field) {
        if (field.value) {
            if (field.id === "datetime") {
                inputList[field.id] = formatDate(field.value);
            }else{
                inputList[field.id] = field.value;
            }
        }
    });

    // console.log(inputList);
    return inputList;
}

// This function populate data into table based on dataset passed
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

// This function filter the dataset based on the input list
function filterData(_inputList) {
    // Loop thru each dataset item, compare to each input in the list
    // Return record if criteria met
    result = data.filter(item => {
        for (key in _inputList) {
                if(key === "datetime") {
                    // console.log(item[key]);
                    // console.log(_inputList[key]);
                    if (item[key] === undefined || item[key] != _inputList[key]){
                        return false;}
                }else{
                    if (item[key] === undefined || item[key] != _inputList[key].toLowerCase()){
                        return false;}
                }
            }

        return true;
    });

    return result;
}

// Format input date to correct data date for filtering
function formatDate(_date) {
    var d = _date.split("-");
    d[1].indexOf( '0' ) == 0? d[1] = d[1].replace( '0', '' ) : d[1];
    d[2].indexOf( '0' ) == 0? d[2] = d[2].replace( '0', '' ) : d[2];
    return d[1] + "/" + d[2] + "/" + d[0];  
}
  
