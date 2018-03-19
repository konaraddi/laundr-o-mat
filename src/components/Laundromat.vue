<template>
<div>
  <h1>Inside the Laundr-o-Mat</h1>
  <p>click on an open laundry machine</p>
  <router-link to="/"><button>EXIT</button></router-link>
  <section class="laundry-machines">
    <laundry-machine class="LaundryMachine" v-for="n in 5" :key="n"/>
  </section>
</div>
</template>

<script>
import LaundryMachine from './LaundryMachine'

export default {
  name: 'Laundromat',
  components: {
    LaundryMachine
  }
}
</script>

<style lang="scss" scoped>

.laundry-machines {

  @media screen and (min-width: 769px){
    display: flex;
    padding: 16px; 
    .LaundryMachine {
      margin: auto;
      padding: 16px;
    }
  }

  @media screen and (max-width: 768px){
    padding: 8px; 
    .LaundryMachine {
      padding: 8px;
    }
  }

}
</style>

 