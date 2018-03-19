<template>
<div>
  <h1>Laundromat</h1>
  <section class="laundry-machines">
    <laundry-machine class="LaundryMachine" v-for="n in 4" :key="n"/>
  </section>
  <router-link to="/">Leave</router-link>
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

 