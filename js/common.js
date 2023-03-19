


function displayData(tName, area) {
    const container = document.getElementById('table-container');
    const tr = document.createElement('tr');
    tr.innerHTML = `
        <td>${serial}</td>
        <td>${tName}</td>
        <td>${area + " cm²"}</td>
        <td><button class="py-1.5 px-2 bg-sky-600 rounded-lg text-white mt-1.5">${"Covert to m²"}</button></td>
        `;
    container.appendChild(tr);
  }