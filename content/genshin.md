---
title: Genshin Ascension Costs
order: -1
unlisted: true
---

<br>

<input id="search" type="text" placeholder="Type here to filter">

<div id="results"></div>

<script>
    // cannot use normal read file so uses fetch
    let data = [];
    fetch("/characters.json?t=" + Date.now())
        .then(response => response.json())
        .then(file => {
            data = file;
            searchCharacters();
        });

    // updates everytime u type a letter
    document.getElementById("search").addEventListener("input", searchCharacters);

    // function to search for the characters
    function searchCharacters() {
        const search = document.getElementById("search").value.toLowerCase(); // holds the input the user types
        const results = document.getElementById("results"); // holds the output

        let matches;
        let extraEnd="";
        // when the search bar is empty
        if (search === "") {
            results.innerHTML=`<br><small>Data and images are from <a href="https://github.com/theBowja/genshin-db/tree/main" target="_blank">genshin-db</a></small>`
            return;
        // when the search bar is not empty
        } else {
            matches = data.filter(character =>
                character.name.toLowerCase().includes(search)
            );
        }

        if (matches.length===0){
            extraEnd = "No results found";
        }

        // displays the results
        results.innerHTML = matches.map(character => `
            <div class="character">
                <br>
                <div class="character-header">
                    <img src="${character.images?.hoyowiki_icon ?? character.images?.mihoyo_icon}">
                    <h2>${character.name}</h2>
                </div>
                
                <div class="character-details">
                    <table>
                        <tr>
                            <th>I</th>
                            <th>x${character.costs.ascend1[1].count} ${character.costs.ascend1[1].name}</th>
                            <th></th>
                            <th>x${character.costs.ascend1[2].count} ${character.costs.ascend1[2].name}</th>
                            <th>x${character.costs.ascend1[3].count} ${character.costs.ascend1[3].name}</th>
                        </tr>
                        <tr>
                            <th>II</th>
                            <th>x${character.costs.ascend2[1].count} ${character.costs.ascend2[1].name}</th>
                            <th>x${character.costs.ascend2[2].count} ${character.costs.ascend2[2].name}</th>
                            <th>x${character.costs.ascend2[3].count} ${character.costs.ascend2[3].name}</th>
                            <th>x${character.costs.ascend2[4].count} ${character.costs.ascend2[4].name}</th>
                        </tr>
                        <tr>
                            <th>III</th>
                            <th>x${character.costs.ascend3[1].count} ${character.costs.ascend3[1].name}</th>
                            <th>x${character.costs.ascend3[2].count} ${character.costs.ascend3[2].name}</th>
                            <th>x${character.costs.ascend3[3].count} ${character.costs.ascend3[3].name}</th>
                            <th>x${character.costs.ascend3[4].count} ${character.costs.ascend3[4].name}</th>
                        </tr>
                        <tr>
                            <th>IV</th>
                            <th>x${character.costs.ascend4[1].count} ${character.costs.ascend4[1].name}</th>
                            <th>x${character.costs.ascend4[2].count} ${character.costs.ascend4[2].name}</th>
                            <th>x${character.costs.ascend4[3].count} ${character.costs.ascend4[3].name}</th>
                            <th>x${character.costs.ascend4[4].count} ${character.costs.ascend4[4].name}</th>
                        </tr>
                        <tr>
                            <th>V</th>
                            <th>x${character.costs.ascend5[1].count} ${character.costs.ascend5[1].name}</th>
                            <th>x${character.costs.ascend5[2].count} ${character.costs.ascend5[2].name}</th>
                            <th>x${character.costs.ascend5[3].count} ${character.costs.ascend5[3].name}</th>
                            <th>x${character.costs.ascend5[4].count} ${character.costs.ascend5[4].name}</th>
                        </tr>
                        <tr>
                            <th>VI</th>
                            <th>x${character.costs.ascend6[1].count} ${character.costs.ascend6[1].name}</th>
                            <th>x${character.costs.ascend6[2].count} ${character.costs.ascend6[2].name}</th>
                            <th>x${character.costs.ascend6[3].count} ${character.costs.ascend6[3].name}</th>
                            <th>x${character.costs.ascend6[4].count} ${character.costs.ascend6[4].name}</th>
                        </tr>
                    </table>
                    
                    <div class="right">
                        <p></p>
                    </div>
                </div>
            </div>
        `).join("") + `<p>${extraEnd}</p><br><small>Data and images are from <a href="https://github.com/theBowja/genshin-db/tree/main" target="_blank">genshin-db</a></small>`;
    }
</script>

<style>
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

<style>
    table {
        border-collapse: collapse;
        width: 100%;
    }

    th, td {
        border: 1px solid #393639;
        padding: 8px;
        text-align: center;
    }
    .character-details {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .character-details table {
        width: fit-content;
        flex-shrink: 0;
        border-collapse: collapse;
    }

    .character .right {
        flex: 1;
    }

    .character-header {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .character-header img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }

    .character-header h2 {
        margin: 0;
    }
</style>