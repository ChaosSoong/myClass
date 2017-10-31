<template>
  <header>
    <p> <span>2012</span> 相聚  <span>2016</span> 分别 </p>
    <audio src="static/images/Shane Filan - Beautiful In White.mp3" controls="controls" autoplay="autoplay"></audio>
  </header>
</template>

<style scoped>
  header {
    position: fixed;
    top: 0;
    width: 100%;
    border-top: solid 1px rgba(16, 16, 16, 0.1);
    box-shadow: 0 0 10px #eee;
    text-align: center;
    background-color: rgba(238, 238, 238, 0.6);
    color: #777;
  }
  p {
    margin-left: 24px;
    line-height: 30px;
    font-size: 20px;
  }
  span {
    font-weight: 700;
    color: rgba(0, 0, 0, 0.9);
  }
  audio{
    display: inline;
  }
</style>