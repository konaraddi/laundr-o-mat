<template>
<div>

  <h1 v-if="inUse">{{ duration }} min left</h1> <h1 v-else>open</h1>
  <button @click="() => makingSelection =! makingSelection" :disabled="inUse" class="machine">
    <img v-if="inUse" src="../assets/laundry_machine_running.png" alt="">
    <img v-else src="../assets/laundry_machine_empty.png" alt="">
  </button>

  <section :class="[makingSelection ? 'visible' : 'hidden']">
    
    <div class="duration-settings">
      <button @click="() => duration--" :disabled="duration < 2"> - </button>
      <h3>{{duration}} min</h3>
      <button @click="() => duration++"> + </button>
    </div>
    
    <h3>{{cost}}¢</h3>

    <button @click="start"> okay </button>
    <button @click="() => makingSelection = false"> cancel </button>
  
  </section>
  
</div>
</template>

<script>

const defaultTime = 10

export default {
  name: 'LaundryMachine',
  data(){
    return {
      duration: defaultTime,
      inUse: false,
      rate: 25,
      makingSelection: false
    }
  },
  computed: {
    cost(){
      return this.rate * this.duration
    }
  },
  methods: {
    start(){
      this.makingSelection = false
      this.inUse = true
      const countDownTimer = setInterval( () => {
        this.duration--
        if(this.duration == 0){
          this.reset()
          clearInterval(countDownTimer)
        }
      }, 1000)
    },
    reset(){
        this.duration = defaultTime
        this.inUse = false
    }
  }
}
</script>

<style lang="scss" scoped>

img {
  width: 100%;
}
button.machine {
  width: 100%;
}

.visible {
  visibility: visible;
  @media screen and (max-width: 768px){
    display: block;
  }
}

.hidden {
  visibility: hidden;
  @media screen and (max-width: 768px){
    visibility: visible;
    display: none;
  }
}

.duration-settings {
  display: flex;
  padding: 16px;
  h3, button {
    margin: auto;
  }
}
</style>
