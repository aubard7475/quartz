---
title: " "
---

<div class="home-header">

  <img src="/images/leaf.png" class="home-image">

  <div class="home-text">
    <p>Hi.</p>
    <p>
      I don't know what else to put here.
    </p>
    <p>
      There's buttons on the left, you should click on them maybe.
    </p>
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