<template>
  <div>
    <div :title="'工作计划'" :style="'background:#999;width:300px'">
      <input type="text" v-model="works.content" @keydown.enter="addWork()" placeholder="请输入每日计划">
      <div>
        <ul>
          <li v-for="(item, index) in list" v-bind:key="item.id">
            <input type="checkbox" :checked="item.finish" @click="lineThorugh(index, item.finish)">
            <span :class="{'line-through': item.finish}">{{item.content}}</span>
            <button @click="delWork(index)">删除</button>
          </li>
        </ul>
      </div>
      <p v-show="list.length == 0">暂无计划</p>
    </div>
    <div :title="'watch监听'" :style="'background:#666;width:300px'" :class="'w400'">
      <span>姓: <input type="text" v-model="watchSex"></span>
      <p>名字: <input type="text" v-model="watchName"></p>
      <p>我的名字： {{myName}} </p>
    </div>
  </div>
</template>
<style>
  .line-through{
    text-decoration:line-through;
  }
  .w400{
    width: 400px !important;
  }
</style>
<script>
export default{
  name: 'workPlan',
  data() {
    return {
      id: this.$route.params.id,
      list: [],
      works: {
        content: '',
        finish: false
      },
      watchSex: '',
      watchName: '',
      myName: ''
    }
  },
  created() {

  },
  methods: {
    addWork() {
      this.list.push(this.works)
      this.works = {
        content: '',
        finish: false
      }
    },
    delWork(index) {
      // delete this.list[index]
      this.list.splice(index, 1)
    },
    lineThorugh(index, worksCheck) {
      if (worksCheck) {
        this.list[index].finish = false
      } else {
        this.list[index].finish = true
      }
    }
  },
  watch: {
    watchSex(cur, old) {
      this.myName = cur + ' ' + this.watchName
    },
    watchName(cur, old) {
      this.myName = this.watchSex + ' ' + cur
    }
  }
}
</script>
