<template>
  <div>
      <ul>
        <li v-for="a in list" :key="a.id">
          <time v-text="a.create_at"></time>
          <router-link :to="{'name':'content','params':{'id':a.id}}">
            {{a.title}}
          </router-link>
          <!-- <router-link :to="{'name':'workPlan','params':{'id':a.id}}">
            {{a.title}}
          </router-link> -->
        </li>
      </ul>
    </div>
</template>
<script>
export default {
  data() {
    return {
      list: []
    }
  },
  beforeCreate() {
    // 创建实例
  },
  created() {
    debugger
    // 创建实例之后
    // vuex
    // if (this.$store.state.reload) {
    //   debugger
    //   this.getData()
    // },
    var listState = this.$route.query.flagReload
    if (listState !== 'false') {
      console.log('刷新')
      this.getData()
    }
  },
  beforeMount() {
    // 绑定html之前
  },
  mounted() {
    // 绑定html之后
  },
  beforeUpdate() {
    // 更新数据之后
  },
  updated() {
    // 更新数据之后
  },
  methods: {
    getData() {
      this.$api.get('topics', null, r => {
        this.list = r.data
      })
    }
  }
}
</script>
