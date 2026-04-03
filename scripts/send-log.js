/* SEND UPDATES */

const houseIDDropdown = document.getElementById('house-id-dropdown');

const entryBody = document.getElementById('entry-body');
// store all status entries
const entries = [];

const houseLogs = {
    ID1: [],
    ID2: []
};
// senders info
const senders = {
    ID1: {
        name: "Ariel",
        address: null,
        latitude: 123.456,
        longitude: 456.789
    },
    ID2: {
        name: "Elsa",
        address: "Ice Castle, Arendelle",
        latitude: 987.654,
        longitude: 654.321
    }
};

// set HOUSE ID constants into the dropdown in HTML
Object.keys(senders).forEach(houseid => {
    let opt = document.createElement('option');
    opt.value = houseid;             
    opt.innerHTML = houseid;
    houseIDDropdown.appendChild(opt);
});


// send status update
function status(statusValue) {

    const selectedHouseID = houseIDDropdown.value;

    // alert if no house selected
    if (!selectedHouseID) {
        alert("Select a House ID first!");
        return;
    }

    const sender = senders[selectedHouseID];

    //choose location string if one is unavailable
    const location = sender.address
        ? sender.address
        : `${sender.latitude},${sender.longitude}`;

    const timestamp = new Date().toLocaleString();
    const justTime = new Date().toLocaleTimeString();

    // message format
    const message =
        `${statusValue} | ${selectedHouseID} | ${sender.name} | ${location} | ${timestamp}`;

    // create message object
    const messageObj = {
        timestamp: timestamp,
        status: statusValue,
        house_id: selectedHouseID,
        sender_name: sender.name,
        location: location,
        
    };

    // save to entries array
    entries.push(messageObj)

    //save to house logs array
    houseLogs[selectedHouseID].push(messageObj);
   
    //display
    // clear table
    entryBody.innerHTML = "";

    // show only selected house logs
    houseLogs[selectedHouseID].reverse().forEach(entry => {
        const row = document.createElement("tr");

        row.innerHTML = `
            <td>${justTime}</td>
            <td>${entry.status}</td>
            <td>${entry.sender_name}</td>
        `;

        entryBody.appendChild(row);
    });

    // display in receiver panel
    const list = document.getElementById("updates-list");

    const li = document.createElement("li");
    li.textContent = message;

    list.prepend(li); //latest update goes first
}