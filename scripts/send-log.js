/* SEND UPDATES */

const houseIDDropdown = document.getElementById('house-id-dropdown');

// HOUSE ID CONSTANTS
const HOUSEID = {
    ID1 : "id here 1",
    ID2 : "id here 2"
}

// set HOUSE ID constants into the dropdown in HTML
Object.values(HOUSEID).forEach(element => {
    let opt = document.createElement('option');
    opt.value = element.toLowerCase().replace(/\s+/g, '-');   // slugify value
    opt.innerHTML = element;
    houseIDDropdown.appendChild(opt);
});