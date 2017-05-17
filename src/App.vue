<template>
  <div id="app">
    <my-nav></my-nav>
    <router-view></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myNav from '@/components/nav'
import myFoot from '@/components/foot'
export default {
  name: 'app',
  components:{
    myNav,
    myFoot
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
}
</style>
