<template>
  <div id="app">
    <!--
    <img src="./assets/logo.png">
    -->
    <keep-alive>
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Patrick+Hand+SC');

html, button {
  font-family: 'Patrick Hand SC', cursive;
  font-size: 18px;
}

button {
  background-color: transparent;
  border: 4px solid black;
  overflow: hidden;
  outline:none;
  cursor:pointer;
}

button:hover {
    border: 4px solid gold;
}

button:disabled {
  cursor: not-allowed;
  border: none;
}

#app {
  text-align: center;
}
</style>
