<template>
<div>
  <h3>{{ timeRemaining }} minutes</h3>
  <button @click="startTime" :disabled="inUse">{{inUse ? 'Wait' : 'Ready'}}</button>
  <h3>${{cost}}</h3>
</div>
</template>

<script>

const defaultTime = 5

export default {
  name: 'LaundryMachine',
  data(){
    return {
      timeRemaining: defaultTime,
      inUse: false,
      cost: 12
    }
  },
  methods: {
    startTime(){
      this.inUse = true
      const countDownTimer = setInterval( () => {
        this.timeRemaining--
        if(this.timeRemaining == 0){
          this.resetLaundryMachine()
          clearInterval(countDownTimer)
        }
      }, 1000)
    },
    resetLaundryMachine(){
        this.timeRemaining = defaultTime
        this.inUse = false
    }
  }
}
</script>
