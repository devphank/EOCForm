document.getElementById("checkinForm").addEventListener("submit", function(event) {
    event.preventDefault();
    saveData();
});

function addRow() {
    let table = document.getElementById("checkinTable");
    let newRow = table.insertRow();
    
    for (let i = 0; i < 5; i++) {
        let cell = newRow.insertCell(i);
        let input = document.createElement("input");
        input.type = "text";
        cell.appendChild(input);
    }

    let actionCell = newRow.insertCell(5);
    let removeBtn = document.createElement("button");
    removeBtn.innerText = "❌";
    removeBtn.onclick = function () {
        removeRow(this);
    };
    actionCell.appendChild(removeBtn);
}

function removeRow(button) {
    let row = button.parentNode.parentNode;
    row.parentNode.removeChild(row);
}

function saveData() {
    let table = document.getElementById("checkinTable");
    let data = [];
    
    for (let row of table.rows) {
        let entry = {
            position: row.cells[0].children[0].value,
            name: row.cells[1].children[0].value,
            signature: row.cells[2].children[0].value,
            packet: row.cells[3].children[0].value,
            hangtag: row.cells[4].children[0].value
        };
        data.push(entry);
    }

    localStorage.setItem("eocCheckinData", JSON.stringify(data));

    document.getElementById("confirmation").innerText = "✅ Data saved successfully!";
}
