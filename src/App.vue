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

html {
  font-family: 'Patrick Hand SC', cursive;
  font-size: 18px;
}

#app {
  text-align: center;
}
</style>
