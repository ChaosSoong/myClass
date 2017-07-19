<template>
    <div class="container" id="container"></div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init (){
      var map = new BMap.Map("container");          // 创建地图实例  
      var point = new BMap.Point(115.30, 38.511);  // 创建点坐标  
      map.centerAndZoom(point, 6);
      map.addControl(new BMap.NavigationControl());
      map.addControl(new BMap.NavigationControl());    
      map.addControl(new BMap.ScaleControl());  

      axios.get("static/data.json").then((data)=>{
        console.log(typeof data.data)
      });
      var MAX = 1000;
      var markers = [];
      var ptpt = null;
      for (var i = 0; i < MAX; i++) {
          ptpt = new BMap.Point(Math.random() * 10 + 100, Math.random() * 10 + 30);
          let marker = new BMap.Marker(ptpt, {
              title: i
          });
          markers.push(marker);
          // marker.hide();//隐藏标注
      }
      // 最简单的用法，生成一个marker数组，然后调用markerClusterer类即可。
      var markerClusterer = new BMapLib.MarkerClusterer(map, {
          markers: markers
      });
      // markerClusterer.clearMarkers();//清除标记
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.container{
    position: fixed;
    top:50px;
    left: 300px;
    width: 76%;
    height: 550px;
    box-shadow: 0 0 10px #2A769A;
    border-radius: 10px;
}
</style>
