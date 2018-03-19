<template>
<div>

  <h1 v-if="inUse">{{ duration }} min left</h1> <h1 v-else>Not in use</h1>
  <button @click="() => makingSelection =! makingSelection" :disabled="inUse" :class="[inUse ? 'running' : 'empty', 'machine']"></button>

  <section :class="[makingSelection ? 'visible' : 'hidden']">
    
    <button @click="() => duration--" :disabled="duration < 2"> - </button>
    <h3>{{duration}}</h3>
    <button @click="() => duration++"> + </button>
    
    <h3>{{cost}}¢</h3>

    <button @click="start"> <h3>okay</h3> </button>
    <button @click="() => makingSelection = false"> <h3>cancel</h3> </button>
  
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

$length: 300px;

button.machine {
  height: $length;
  width: $length;
}

.running {
  background-image: url('../assets/laundry_machine_running.png');
  background-size: $length $length;
}

.empty {
  background-image: url('../assets/laundry_machine_empty.png');
  background-size: $length $length;
}

.visible {
  visibility: visible;
}

.hidden {
  visibility: hidden;
}
</style>
