//  area of calculation table function

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

//   multi-color background function

  function multiColor() {
    let color = [];
    for (let i = 0; i < 3; i++) {
      color.push(Math.floor(Math.random() * 251));
    }
    return "rgb(" + color.join(", ") + ")";
  }
  
  function multiBackgroundColor(cardId) {
    document.getElementById(cardId).addEventListener("mouseover", function () {
      const backGround = document.getElementById(cardId);
      backGround.style.backgroundColor = multiColor();
    });
    document.getElementById(cardId).addEventListener("mouseout", function () {
      const backGround = document.getElementById(cardId);
      backGround.style.backgroundColor = "#ffffff";
    });
  }