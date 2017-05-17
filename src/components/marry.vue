<template>
    <div id="container"></div>
</template>

<script>
import echarts from "echarts"
export default {
  data () {
    return {
      myChart: null
    }
  },
  mounted(){
    this.init();
  },
  methods:{
    init(){
      // 基于准备好的dom，初始化echarts实例
      var myChart = echarts.init(document.getElementById('container'));
      var option = {
          backgroundColor: '#2c343c',

          title: {
              text: '婚姻状况',
              left: 'center',
              top: 20,
              textStyle: {
                  color: '#ccc'
              }
          },

          tooltip : {
              trigger: 'item',
              formatter: "{b} : {c} ({d}%)"
          },

          visualMap: {
              show: false,
              min: 5,
              max: 18,
              inRange: {
                  colorLightness: [0, 1]
              }
          },
          series : [
              {
                  type:'pie',
                  radius : '50%',
                  center: ['50%', '50%'],
                  data:[
                      {value:15, name:'单身狗'},
                      {value:5, name:'恋爱中'},
                      {value:7, name:'有追求'}
                  ].sort(function (a, b) { return a.value - b.value; }),
                  roseType: 'radius',
                  label: {
                      normal: {
                          textStyle: {
                              color: 'rgba(255, 255, 255, 0.3)'
                          }
                      }
                  },
                  labelLine: {
                      normal: {
                          lineStyle: {
                              color: 'rgba(255, 255, 255, 0.3)'
                          },
                          smooth: 0.2,
                          length: 10,
                          length2: 20
                      }
                  },
                  itemStyle: {
                      normal: {
                          color: '#c25531',
                          shadowBlur: 200,
                          shadowColor: 'rgba(0, 0, 0, 0.5)'
                      }
                  },

                  animationType: 'scale',
                  animationEasing: 'elasticOut',
                  animationDelay: function (idx) {
                      return Math.random() * 200;
                  }
              }
          ]
      };
      // 绘制图表
      myChart.setOption(option);
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
#container{
    position: fixed;
    top:50px;
    left: 300px;
    width: 76%;
    height: 550px;
    box-shadow: 0 0 10px #2A769A;
    border-radius: 10px;
}
</style>
