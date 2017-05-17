<template>
  <div id="nav-list">
    <ul class="nav-left">
      <li class="nav-item" v-for="(item, index) in items">
        <router-link :to="'/' + item.ad">{{item.name}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {name: '软件相册', ad: 'photo'},
        {name: '家乡分布', ad: 'hometown'},
        {name: '婚姻状况', ad: 'marry'}
      ]
    };
  }
}
</script>

<style scoped>
  #nav-list {
    position: fixed;
    top: 50px;
    bottom: 0;
    left: 0;
    padding: 20px 40px;
    line-height: 40px;
    background-color: #293c55;
    overflow-y: auto;
    z-index: 15;
  }
  .nav-left {
    width: 140px;
    font-family: "Microsoft Yahei", sans-serif;
  }
  .nav-item a {
    size: 14px;
    color: #b2b2b2;
  }
  .nav-item a:hover {
    color: rgba(255, 255, 255, 0.8);
  }
  a.router-link-active {
    color: rgba(255, 255, 255, 0.9);
  }
  
</style>