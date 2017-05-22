<template>
  <div id="app">
    <my-header></my-header>  
    <my-nav></my-nav>
    <router-view></router-view>
    <my-foot></my-foot>
  </div>
</template>

<script>
import myNav from '@/components/nav'
import myFoot from '@/components/foot'
import myHeader from '@/components/header'
export default {
  name: 'app',
  components:{
    myNav,
    myFoot,
    myHeader
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif
}
</style>
