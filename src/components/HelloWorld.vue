<template>
  <div class="hello">
    {{msg}}
    <confirm v-bind:msgOfp="msgOfp" v-on:changeTitle="zidingy($event)"></confirm>
  </div>
</template>

<script>
  import confirm from './sub/confirm.vue'
  export default {
    name: 'HelloWorld',
    components:{
      confirm
    },
    data() {
      return {
        msg:'父组件',
        msgOfp:'注册'
      }
    },
    methods: {
      zidingy(val){
       this.msgOfp= val
      }
    },
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  h1, h2 {
    font-weight: normal;
  }

  ul {
    list-style-type: none;
    padding: 0;
  }

  li {
    display: inline-block;
    margin: 0 10px;
  }

  a {
    color: #42b983;
  }

  .transition-box {
    margin-bottom: 10px;
    width: 200px;
    height: 100px;
    border-radius: 4px;
    background-color: #409EFF;
    text-align: center;
    color: #fff;
    padding: 40px 20px;
    box-sizing: border-box;
    margin-right: 20px;
  }
</style>
