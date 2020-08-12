<template>
  <div class="confirm">
    <button @click="changeVal">{{msgOfp}}</button>
  </div>
</template>

<script>
    export default {
        name: "confirm",
      props:['msgOfp'],
      data(){
          return{
          }
      },
      methods:{
        changeVal(){
            this.$emit('changeTitle','确认')
          }
      },
    }
</script>

<style scoped>

</style>
