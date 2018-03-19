<template>
  <div>
    <h1>Laundr-o-Mat</h1> 
    <router-link to="/laundromat"><button><img src="../assets/storefront.png" alt=""></button></router-link>
    <p><em>pssst...click the above to enter</em></p>
    <h1>FAQs</h1>
    <h3>"Why is it called Laundr-o-mat?"</h3>
    <p>Honestly, I didn't put much thought into the name of it</p>
    <h3>"Why did you make this?"</h3>
    <p>Because it was <a href="https://tinyletter.com/cassidoo" target="_blank">this</a> weekly newsletter's interview question of the week</p>
    <h3>"Where's the source code?"</h3>
    <a href="//github.com/konaraddio/laundr-o-mat" target="_blank">On Github</a>
  </div>
</template>

<script>
export default {
  name: 'StoreFront'
}
</script>

<style scoped>
@media screen and (min-width: 769px){
  img, button {
    width: 75%;
  }
}
@media screen and (max-width: 768px){
  img, button {
    width: 90%;
  }
}
</style>
