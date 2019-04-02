<template>
  <div class="echart" ref="echart"></div>
</template>

<script>
  import echarts from 'echarts'

  export default {
    name: 'echart',
    props: {
      // 渲染器
      renderer: {
        type: String,
        default: () => 'canvas'
      },
      // 图表配置
      option: {
        type: Object,
        required: true,
        default() {
          return {}
        }
      },
      // 重绘图表
      repaint: {
        type: Boolean
      }
    },
    data() {
      return {
        chart: null
      }
    },
    mounted() {
      this.chart = echarts.init(this.$el, null, {renderer: this.renderer})
      this.setEchartOption()
      this.$nextTick(() => {
        this.chart.resize()
      })
    },
    beforeDestroy() {
      // 销毁
      this.chart && !this.chart.isDisposed() && this.chart.dispose()
    },
    methods: {
      setEchartOption() {
        /**
         * @param option
         * @param lazyUpdate
         * @param silent
         */
        this.chart.setOption(this.option, false, false)
      },
      setChartRepaint() {
        this.chart.showLoading('default', {
          text: 'loading',
          color: '#c23531',
          textColor: '#000',
          maskColor: 'rgba(255, 255, 255, 0.8)',
          zlevel: 0
        })
        this.chart.clear()
        this.setEchartOption()
        this.chart.hideLoading()
      }
    },
    watch: {
      repaint() {
        this.setChartRepaint()
      }
    }
  }
</script>

<style lang='less' scoped>
  .echart {
    height: 100%;
    width: 100%;
  }
</style>
