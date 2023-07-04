<template>
  <div class="app">
    <div class="main-container">
      <router-view />
    </div>
  </div>
</template>

<style lang="scss">
@import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@300;400;500;600;700&display=swap");

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Quicksand", sans-serif;
}

.app {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-container {
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
}

.background {
  display: none;
  flex: 2;
  background-size: auto;
  // background-size: cover;
  background-image: url(./assets/entain-bg.jpg);
  background-position: right;
  width: 100%;
  height: 100%;
  filter: opacity(10%);
  @media (min-width: 900px) {
    display: initial;
  }
}
.icon {
  &:hover {
    color: purple;
  }
}
button.rounded-blk {
  background-color: #262626eb;
  color: #fff;
  text-transform: uppercase;
  padding: 10px 15px;
  border-radius: 50px;
  font-size: 14px;

  &:hover {
    background-color: #000;
  }
}
button.rounded-red {
  background-color: rgb(235, 192, 0);
  color: #fff;
  text-transform: uppercase;
  padding: 10px 15px;
  border-radius: 50px;
  font-size: 14px;

  &:hover {
    background-color: rgb(189, 154, 0);
  }
}
a {
  transition: 0.5s ease all;

  &:hover {
    border-color: #303030;
  }
}
a.auth-link {
  text-decoration: none;
  color: #000;
  cursor: pointer;
  margin: 16px 0 32px;
  border-bottom: 1px solid transparent;
}
</style>
