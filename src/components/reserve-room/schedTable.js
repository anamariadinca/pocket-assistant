
function addTable(data) {
    let headers = ["Ora", "Disponibilitate"];
    let myTableDiv = document.getElementById("myTable");
    myTableDiv.innerHTML = "";

    let table = document.createElement('table');
    table.id = 'scheduletable'

    let tableHeader = document.createElement('thead');
    table.appendChild(tableHeader);

    let tableBody = document.createElement('tbody');
    tableBody.id = 'tbody'
    table.appendChild(tableBody);

    let th = document.createElement('tr');
    let td1 = createTH(headers[0])
    let td2 = createTH(headers[1])
    th.appendChild(td1)
    th.appendChild(td2)
    tableHeader.appendChild(th);

    data.map((schedule, index) => {
        let tr = document.createElement('tr');
        const {hour, free} = schedule //destructuring
        let td1 = createTD(hour)
        let td2 = createTD(free)
        tr.appendChild(td1)
        tr.appendChild(td2)
        if (free === "DA") {
            tr.style.backgroundColor = 'rgba(122,222,176,0.42)'
        } else {
            tr.style.backgroundColor = 'rgba(234,81,81,0.49)'
        }
        tr.onclick = function () {
            resetTableColors()
            document.getElementById("buttonreserve").style.backgroundColor='var(--bg)'
            this.style.backgroundColor = 'rgba(39,176,255,0.25)'
        };
        tableBody.appendChild(tr);

    })
    myTableDiv.appendChild(table);

}

function createTD(text) {
    let td = document.createElement('td');
    td.innerText = text
    return td
}

function createTH(text) {
    let td = document.createElement('th');
    td.innerText = text
    return td
}

function resetTableColors() {
    let trs = document.getElementsByTagName('tr');
    for (let i = 1; i < trs.length; i++) {
        if (trs[i].cells[1].innerText === "DA") {
            trs[i].style.backgroundColor = 'rgba(122,222,176,0.42)'
        } else {
            trs[i].style.backgroundColor = 'rgba(234,81,81,0.49)'
        }
    }
}

export {addTable}