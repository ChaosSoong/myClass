<template>
    <div class="container">
    <img class="pic1" src="static/images/8H5F4790.jpg">
    <img class="pic2" src="static/images/8H5F4797.jpg">
    <img class="pic3" src="static/images/8H5F4799.jpg">
    <img class="pic4" src="static/images/8H5F4801.jpg">
    <img class="pic5" src="static/images/8H5F4809.jpg">
    <img class="pic6" src="static/images/8H5F4812.jpg">
    <img class="pic7" src="static/images/8H5F4815.jpg">
    <img class="pic8" src="static/images/8H5F4817.jpg">
    <img class="pic9" src="static/images/8H5F4828.jpg">
    <img class="pic10" src="static/images/8H5F4829.jpg">
  </div>
</template>

<script>
export default {
  data () {
    return {
      
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
  position: relative;
    left: 300px;
    width: 76%;
    height: 600px;
    box-shadow: 0 0 10px #2A769A;
    border-radius: 10px;
}

.container img{
  width: 200px;
  height: auto;
  padding:10px 10px 15px; 
  background:white; 
  border:1px solid #ddd; 
  box-shadow:2px 2px 3px rgba(50, 50, 50, 0.4);
  -webkit-transition:all 0.5s ease-in;
  -moz-transition:all 0.5s ease-in;
  transition:all 0.5s ease-in; 
  position:absolute; 
  z-index:1;
}

.container img:hover{
  box-shadow:15px 15px 20px rgba(50, 50, 50, 0.4); 
  -webkit-transform:rotate(0deg) scale(1.5); 
  -moz-transform:rotate(0deg) scale(1.5); 
  transform:rotate(0deg) scale(1.5); 
  z-index:2;
}

.pic1{
  left: 400px; 
  top:50; 
  -webkit-transform: rotate(-5deg); 
  -moz-transform: rotate(-5deg); 
  transform: rotate(-5deg);
}

.pic2{
  top:50; 
  left: 600px; 
  -webkit-transform: rotate(-20deg); 
  -moz-transform: rotate(-20deg); 
  transform: rotate(-20deg);
}

.pic3
{
  bottom:50px; 
  right: 0; 
  -webkit-transform: rotate(5deg); 
  -moz-transform: rotate(5deg); 
  transform: rotate(5deg);
}
  
.pic4
{
  bottom:50px;
  left:350px; 
  -webkit-transform: rotate(-10deg); 
  -moz-transform: rotate(-10deg); 
  transform: rotate(-10deg);
}

.pic5
{
  bottom:50px; 
  left: 0; 
  -webkit-transform: rotate(-10deg); 
  -moz-transform: rotate(-10deg); 
  transform: rotate(-10deg);
}

.pic6
{
  top:50; 
  left:0; 
  -webkit-transform: rotate(10deg); 
  -moz-transform: rotate(10deg); 
  transform: rotate(10deg);
}

.pic7
{
  top:50; 
  left: 850px; 
  -webkit-transform: rotate(20deg); 
  -moz-transform: rotate(20deg); 
  transform: rotate(20deg);
}

.pic8
{
  bottom:50px;
  right: 650px; 
  -webkit-transform: rotate(5deg); 
  -moz-transform: rotate(5deg); 
  transform: rotate(5deg);
}

.pic9
{
  bottom:50px; 
  left: 580px; 
  -webkit-transform: rotate(15deg); 
  -moz-transform: rotate(15deg); 
  transform: rotate(15deg);
}

.pic10
{
  left:180px; 
  top:50px; 
  -webkit-transform: rotate(-10deg); 
  -moz-transform: rotate(-10deg); 
  transform: rotate(-10deg);
}
</style>
