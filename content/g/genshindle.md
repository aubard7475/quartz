---
title: Genshindle remake
order: 0
---
<p>A pretty bad remake of <a href="https://us.genshindle.com/" target="_blank">Genshindle</a>. Refresh the page to restart.</p>
<p>Note: Due to weirdness that idk how to fix, reload the page if u see the wrong content</p>
<input id="search" type="text" placeholder="Type here">
<br><br>
<div id="results"></div>
<br>
<div id="grid"></div>

<script>
// creates boxes
const grid = document.getElementById("grid");
for (let i = 0; i < 100; i++) {
    const box = document.createElement("div");
    box.className = "box";
    box.id = `box${i + 1}`;
    grid.appendChild(box);
}
// fetches json file
let characters = [];
fetch("characters.json?t=" + Date.now())
    .then(response => response.json())
    .then(file => {
        characters = file;
        startGame();
    });
// when user presses enter
// target char
let targetChar
function startGame() {
    
    targetChar = characters[Math.floor(Math.random() * characters.length)];
    console.log(targetChar.name);
}

document.getElementById("search").addEventListener("keydown", (event) => {
    if (event.key != "Enter") return;
    const search = document.getElementById("search").value.toLowerCase(); //gets the string the user typed
    // gets the character the user typed
    let matches;
    matches = characters.filter(character =>
        character.name.toLowerCase().includes(search)
    );
    if (matches.length===0) return;
    const character = matches[0];
    document.getElementById("search").value = ""; //resets search bar text
    // determines which row to use
    let row;
    for (let i=1; i<100; i+=6) {
        if (document.getElementById(`box${i}`).textContent) continue;
        row = i;
        break;
    }
    // shows how many guesses you have made
    document.getElementById("results").innerHTML = `Guesses made: ${(row+4)/5}`;
    const properties = [`name`, `weaponText`,`elementText`,`region`,`rarity`,`version`];
    for (let j=0; j<properties.length; j++) {
        const selected = properties[j];
        document.getElementById(`box${row+j}`).textContent = character[selected]; // fills in data for current char
        if (character[selected]===targetChar[selected])
            document.getElementById(`box${row+j}`).style.background = "green";
        else
            document.getElementById(`box${row+j}`).style.background = "red";
        if (j===5) {
            if (Number(character[selected]) > Number(targetChar[selected]))
                document.getElementById(`box${row+j}`).textContent 
                = `${character[selected]} (too recent)`;
            else if (Number(character.version) < Number(targetChar[selected]))
                document.getElementById(`box${row+j}`).textContent 
                = `${character[selected]} (too old)`;
        }
        if (j===4) {
            document.getElementById(`box${row+j}`).textContent = `${character[selected]}*`;
        }

        
    }
});
</script>

<style>
#grid {
    display: grid;
    grid-template-columns: repeat(6, 100px);
    grid-template-rows: repeat(6, 100px);
    width: 600px;
}

.box {
    width: 100px;
    height: 100px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
}
#search {
    width: fit-content;
    padding: 10px 15px;
    font-size: 16px;
    border: 0.5px solid #393639;
    border-radius: 10px;
    box-sizing: border-box;
    background: #161618;
    color: white;
}

#search::placeholder {
    color: #888;
}

#search:focus {
    outline: none;
    border-color: #ED7014;
}
</style>