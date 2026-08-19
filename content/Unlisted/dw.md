---
title: Dandy's World Toons
order: -1
unlisted: true
---

<br>

<input id="search" type="text" placeholder="Type here to filter">

<div id="results"></div>

<script>
    // cannot use normal read file so uses fetch
    let data = [];
    fetch("dandy.csv?t=" + Date.now())
        .then(response => response.text())
        .then(file => {
            data = file.trim().split("\n").map(row => row.split(","));
            searchToons();
        });
    // updates everytime u type a letter
    document.getElementById("search").addEventListener("input", searchToons);
    // function to search for the toons
    function searchToons() {
        const search = document.getElementById("search").value.toLowerCase(); // holds the input the user types
        const results = document.getElementById("results"); // holds the output

        // data holds out csv
        // .slice(1) gets rid of header row
        // .filter(row => . . .) iterates thru the data by row
        // row[0] is what holds the toon names
        // .includes(search) makes sure it is the toon we are looking for
        let matches;
        let extra = "";
        // when the search bar is empty
        if (search === "") {
            matches = data.slice(1).filter(row =>
                row[0].toLowerCase()
            );
            extra = "";
        // when the serach bar is not empty
        } else {
            matches = data.slice(1).filter(row =>
                row[0].toLowerCase().includes(search)
            );
        }
        
        let extraEnd = "";
        if (matches.length===0){
            extraEnd = "No results found";
        }

        // converts data to look nice, css below
        results.innerHTML = extra + matches.map(row => `
            <div class="toon">
                <div class="toon-header">
                    <img src="https://dandysworld.miraheze.org/wiki/Special:Redirect/file/${row[0]}_Render.webp">
                    <h2>${row[0]}</h2>
                </div>
                
                <div class="toon-details">
                    <table>
                        <tr>
                            <th> ${data[0][1]} </th>
                            <th> ${row[1]} </th>
                        </tr>
                        <tr>
                            <th> ${data[0][2]} </th>
                            <th> ${row[2]} </th>
                        </tr>
                        <tr>
                            <th> ${data[0][3]} </th>
                            <th> ${row[3]} </th>
                        </tr>
                        <tr>
                            <th> ${data[0][4]} </th>
                            <th> ${row[4]} </th>
                        </tr>
                        <tr>
                            <th> ${data[0][5]} </th>
                            <th> ${row[5]} </th>
                        </tr>
                        <tr>
                            <th> ${data[0][6]} </th>
                            <th> ${row[6]} </th>
                        </tr>                    
                    </table>

                    <div class="right">
                        <p>${row[9].replace(/^"|"$/g, "")}</p>
                        <br>
                        <p>${row[10]}</p>
                    </div>
                </div>
            </div>
        `).join("") + `<p>${extraEnd}</p><br><small>Data and images are from <a href="https://dandysworld.miraheze.org/" target="_blank">dandysworld.miraheze.org</a></small>`;
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
        width: fit-content;
    }

    th, td {
        border: 1px solid #393639;
        padding: 8px;
        text-align: left;
    }
    .toon-details {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .toon-details table {
        width: fit-content;
        flex-shrink: 0;
        border-collapse: collapse;
    }

    .toon .right {
        flex: 1;
    }

    .toon-header {
        display: flex;
        align-items: center;
        gap: 10px;
    }

    .toon-header img {
        width: 50px;
        height: 50px;
        object-fit: contain;
    }

    .toon-header h2 {
        margin: 0;
    }
</style>