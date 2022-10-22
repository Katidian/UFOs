// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// Clear the table of data to start with a clean slate
function buildTable(data) {

    tbody.html("");

// Now we do the following:
// Loop through each object in the array
// Append a row to the HTML table
// Add each value from the object into a cell

    data.forEach((dataRow) => {

        // We're telling JS to find the tbody tag in the HTML and add a table row.
        let row = tbody.append("tr");

        // Loop through each field in the dataRow (location, shape, duration in the case of this UFO sighting data)
        // Reference one object from the array of UFO sightings
        Object.values(dataRow).forEach((val) => {

            let cell = row.append("td");
        
            cell.text(val);

            }
        );

    });

}