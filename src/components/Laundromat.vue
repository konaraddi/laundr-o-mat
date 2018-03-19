<template>
<div>
  <h1>Laundr-o-Mat</h1>
  <router-link to="/"><button>LEAVE</button></router-link>
  <section class="laundry-machines">
    <laundry-machine class="LaundryMachine" v-for="n in 4" :key="n"/>
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

  display: flex;
  padding: 16px;

  .LaundryMachine {
    margin: auto;
    padding: 16px;
  }

}
</style>

 