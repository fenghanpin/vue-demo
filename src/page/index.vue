<template>
  <div>
    <myHeader></myHeader>
    <List></List>
    <!-- <div style="height: 30px">
      <span style="float: left">购物车：</span> <input type="text" v-bind:disabled="'disabled'" v-model="number" style="float: right;width: 30px">
    </div>
    <div style="height:200px" id="content">
      <div class="tab">
        <div class="tab_item">
          <span @click="trans('goods')">商品</span>
        </div>
        <div class="tab_item" style="border-left: 1px solid #ccc">
          <span @click="trans('marks')">描述</span>
        </div>
      </div>
      <goods v-show="ISgoods" v-bind:goods="post" v-on:goodsNumber="viewNumber"></goods>
      <marks v-show="ISmarks"></marks>
    </div> -->
    <myFooter></myFooter>
  </div>
</template>
<script>
import myHeader from '../components/header'
import myFooter from '../components/footer'
import List from '../page/list'
import Goods from '../components/goods/goods'
import Marks from '../components/marks/marks'
export default {
  components: {myHeader, myFooter, List, Goods, Marks},
  data() {
    return {
      list: [],
      ISgoods: true,
      ISmarks: false,
      number: 0,
      post: {
        apple: 2,
        banane: 3
      },
      $id: this.$route.query.id
    }
  },
  methods: {
    trans(name) {
      if (name === 'goods') {
        this.ISmarks = false
        this.ISgoods = true
      } else if (name === 'marks') {
        this.ISgoods = false
        this.ISmarks = true
      }
    },
    viewNumber(data) {
      this.number = data
    }
  },
  beforeRouteLeave(to, from, next) {
    from.meta.ISKeep = true
    next()
  }
}
</script>
<style lang="less">
  .tab{
    display: flex;
    background: #f2f2f2;
    height: 40px;
    line-height: 40px;
    .tab_item{
      flex:1;
      text-align: center;
      span{
        display: block;
        text-decoration: none
      }
    }
  }
</style>
