---
title: " "
unlisted: true
---

<div class="center-wrapper">
    <input id="search" type="text" placeholder="Type here to search">

</div>



<script>
    document.getElementById("search").addEventListener("keydown", function(event) {
        if (event.key === "Enter") {
            const search = this.value;
            window.location.href = "https://www.google.com/search?q=" + encodeURIComponent(search);
        }
    });
</script>

<style>
    #search {
        width: 50%;
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
    .center-wrapper {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        margin-top: -500px;
    }
    .page-header {
        display: none;
    }
    .left {
        display: none;
    }
    footer {
        display: none;
    }
    .center {
        grid-column: 1 / -1;
        width: 100%;
        margin: 0 auto;
        padding-top: 0;
    }
    hr {
        display: none;
    }
</style>