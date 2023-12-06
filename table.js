// const apiKey="Vr3IkzCcm1Qyvd4fDsDPnEdj7WirQ6dt";
const apiURL = "https://hub.dummyapis.com/products?noofRecords=10&idStarts=1001&currency=usd"

async function displayTable() {
    const response = await fetch(apiURL)
    const data = await response.json();

    console.log(data)
    var tableBody = document.getElementById('tableBody');
    data.forEach(user => {
        row = document.createElement('tr')
        row.innerHTML = `<td>${user.id}</td>
                               <td>${user.name}</td>
                         
                               <td>${user.price}</td>`
                tableBody.appendChild(row);
      

    });
}
    //   <td>${user.description}</td>
window.onload = displayTable;