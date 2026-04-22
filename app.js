
let content = document.getElementById("content");

function setPage(page){
  if(page === "builder"){
    content.innerHTML = `
      <h2>Modpack Builder</h2>
      <p>Search mods, add items, export packs (.zip / .mrpack)</p>
      <ul>
        <li>Sodium</li>
        <li>Lithium</li>
        <li>Create</li>
      </ul>
    `;
  } else {
    content.innerHTML = "<p>Welcome to Neptune Mods</p>";
  }
}
