---
title: HoloCure Collabs
order: -1
unlisted: false
---

<br>

<input id="search" type="text" placeholder="Type here to filter">

<div id="results"></div>

<script>
    // cannot use normal read file so uses fetch
    let data = [];
    fetch("holocure-collabs.csv?t=" + Date.now())
        .then(response => response.text())
        .then(file => {
            data = file.trim().split("\n").map(row => row.split(","));
            searchCollabs();
        });
    // updates everytime u type a letter
    document.getElementById("search").addEventListener("input", searchCollabs);
    // function to search for the toons
    function searchCollabs() {
        const search = document.getElementById("search").value.toLowerCase(); // holds the input the user types
        const results = document.getElementById("results"); // holds the output

        // data holds out csv
        // .slice(1) gets rid of header row
        // .filter(row => . . .) iterates thru the data by row
        // row[0] is what holds the collab names
        // .includes(search) makes sure it is the collab we are looking for
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
                || row[1].toLowerCase().includes(search)
                || row[2].toLowerCase().includes(search)
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
                    <img src="https://holocure.wiki.gg/images/${row[0].replace(/['"]/g, "").replace(/ /g, "_")}_Icon.png">
                    <h2>${String(row[0]).replace(/['"]/g, "")}</h2>
                    <span style="margin-left: 40px;">(${row[3].replace(/['"]/g, "")})</span>
                </div>
                
                <div class="toon-details">
                    
                    <table>
                        <tr>
                            <th> <img style="height: 2em; width: auto; vertical-align: middle; padding: 0px;" src="https://holocure.wiki.gg/images/${row[1].replace(/['"]/g, "").replace(/ /g, "_")}_Icon.png" onerror="this.style.display='none'">${String(row[1]).replace(/['"]/g, "")} </th>
                            <th> <img style="height: 2em; width: auto; vertical-align: middle; padding: 0px;" src="https://holocure.wiki.gg/images/${row[2].replace(/['"]/g, "").replace(/ /g, "_")}_Icon.png" onerror="this.style.display='none'">${String(row[2]).replace(/['"]/g, "")} </th>
                        </tr>
                        <tr>
                            
                        </tr>
                             
                    </table>
                    <div class="right">
                        
                    </div>
                    
                </div>
                <p>${row[4].replace(/['"]/g, "")}</p>
            </div>
            <br>
        `).join("") + `<p>${extraEnd}</p><br><small>Data and images are from <a href="https://holocure.wiki.gg/" target="_blank">holocure.wiki.gg</a></small>`;
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
        width: 50%;
        padding: 0px 4px 0px 4px;
    }

    th, td {
        border: 1px solid #393639;
        padding: 0px 4px 0px 4px;
        text-align: left;
    }
    .toon-details {
        display: flex;
        gap: 20px;
        align-items: flex-start;
    }

    .toon-details table {
        width: 50%;
        flex-shrink: 0;
        border-collapse: collapse;
        padding: 0px 4px 0px 4px;
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