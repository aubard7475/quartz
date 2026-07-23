---
title: " "
---






<div class="home-header">

  <img src="/images/leaf.png" class="home-image">

  <div class="home-text">
  Hi.

  I don't know what else to put here.

  There's buttons on the left, you should click on them maybe.
  </div>

</div>




<style>
.home-header {
  display: flex;
  align-items: center;
  gap: 20px;
}

.home-image {
  width: 256px;
}

.home-text {
  flex: 1;
  text-align: left;
}

@media (max-width: 600px) {
  .home-header {
    flex-direction: column;
    text-align: center;
  }

  .home-image {
    width: 50%;
    max-width: 256px;
  }

  .home-text {
    text-align: center;
  }
}
</style>
<!-- 
<div class="bar">
  <div id="progress"></div>
</div>

<p id="text"></p>

<style>
.bar {
  width: 300px;
  height: 20px;
  border: 1px solid;
  border-radius: 10px;
  overflow: hidden;
}

#progress {
  height: 100%;
  width: 0%;
  background: gray;
  transition: width 1s;
}
</style>

<script>
const start = new Date("2026-05-15");
const end = new Date("2026-08-24");
const today = new Date();

const total = end - start;
const elapsed = today - start;

const percent = Math.min(Math.max((elapsed / total) * 100, 0), 100);

document.getElementById("progress").style.width = percent + "%";
document.getElementById("text").textContent =
  Math.floor(percent) + "% of summer complete";
</script>

 -->
