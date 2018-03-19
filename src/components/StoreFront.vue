<template>
  <div>
    <h1>Laundr-o-Mat</h1> 
    <router-link to="/laundromat"><button><img src="../assets/storefront.png" alt=""></button></router-link>
    <p><em>pssst...click the above to enter</em></p>
  </div>
</template>

<script>
export default {
  name: 'StoreFront'
}
</script>

<style lang="scss" scoped>
img {
  width: 80%;
}
button {
  width: 80%;
}
</style>
