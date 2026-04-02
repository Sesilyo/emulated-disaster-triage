/* SEND UPDATES */

const houseIDDropdown = document.getElementById('house-id-dropdown');

// store all status entries
const entries = [];

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

    // display in receiver panel
    const list = document.getElementById("updates-list");

    const li = document.createElement("li");
    li.textContent = message;

    list.prepend(li); //latest update goes first
}