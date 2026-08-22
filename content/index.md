---
title: " "
---
<!-- <div class="home-header">
<div style="
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #161618;
  border-radius: 12px;
  padding: 20px;
">
  <div style="text-align: left;">

> Hi.
> 
> I don't know what else to type here.
> 
> There's buttons on the left.
> 
> Maybe you should click them?
  </div>
  
</div>
  <img src="https://aubard7475.github.io/quartz/images/leaf.jpg" class="home-image">
</div>





<style>
.home-header {
  display: flex;
  align-items: auto;
  justify-content: center;
  text-align: center;
  gap: 10%;
}
.home-image {
  width: 300px;
  height: 300px;
  aspect-ratio: 1 / 1;
  object-fit: cover;
  border-radius: 50%;
}
</style>

<br>

<div style="text-align: center; font-size: 1.5em; text-decoration: underline;">
Reference Pages
</div>
<div style="text-align: center;">

[[x86registers|x86 Registers]]

[[x86commands|x86 Commands]]

[[mips| MIPS Registers & Commands]]
</div>


<br><br>
<div style="text-align: center;">

p.s. this site may look weird at some resolutions & aspect ratios, let me know if you have any issues <3
</div> -->

<div id="image"></div>

<script>
    let data = [];

    fetch("characters.json?t=" + Date.now())
        .then(response => response.json())
        .then(file => {
            data = file;
            loadChar();
        });

    const results = document.getElementById("image");

    function loadChar() {
        const today = new Date();

        const month = today.getMonth() + 1; // +1 because months start at 0 for some reaosn
        const day = today.getDate();

        const matches = data.filter(character => {
            const date = character.birthdaymmdd; //gets the characters birthday
            const parts = date.split("/");
            const dateMonth = Number(parts[0]);
            const dateDay = Number(parts[1]);
            return month === dateMonth && day === dateDay;
        });

        const character = matches[0];

        results.innerHTML = `<h2>Happy birthday ${character.name}</h2><img src="${character.images?.cover1 ?? character.images?.cover2 ?? character.images?.hoyowiki_icon ?? character.images?.mihoyo_icon}"><p>${character.birthday}</p>`;
        
    }
</script>
<style>
    #image {
        text-align: center;
    }
    #image img {
        max-width: 50%;
    }
</style>