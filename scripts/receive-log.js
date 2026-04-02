/* to-do soon: 
    BACKEND: connect input from sender to logData */
    
// hardcoded data for now, can be updated to fetch from backend when it exists
const logData = [
    { date: '02/03/25', time: '2:40 PM',  houseID: '#00001', status: 'unknown'   },
    { date: '',         time: '12:00 PM', houseID: '#00002', status: 'immediate' },
    { date: '',         time: '11:25 AM', houseID: '#00002', status: 'safe'      },
    { date: '02/02/25', time: '3:25 PM', houseID: '#00003', status: 'safe'      },
    { date: '',         time: '2:40 PM',  houseID: '#00001', status: 'unknown'   },
    { date: '',         time: '12:00 PM', houseID: '#00002', status: 'immediate' },
    { date: '',         time: '11:25 AM', houseID: '#00002', status: 'evacuated' },
];

// UPDATE LOG TABLE
function buildUpdateLogTable() {
    const tbody = document.getElementById('log-body');

    logData.forEach(entry => {
        const row = document.createElement('tr');

        row.innerHTML = `
            <td>${entry.date}</td>
            <td>${entry.time}</td>
            <td>${entry.houseID}</td>
            <td><span class="status-dot ${entry.status}"></span></td>
            <td>${entry.status === 'immediate'
                ? `<button type="button" id="dispatch-btn">DISPATCH</button>`
                : ''
            }</td>
        `;

        tbody.appendChild(row);
    });
}

buildUpdateLogTable();
