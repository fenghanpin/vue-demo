<template>
  <div>
    <div @click="goback()" style="cursor: pointer;">
      返回
    </div>
    <div @click="gobackReload()" style="cursor: pointer;">
      返回刷新
    </div>
    <h2>{{obj.title}}</h2>
    <span>作者：</span>{{obj.author.loginname}} <span style="margin-left: 50px">发表于：</span>{{$utils.goodTime(obj.create_at)}}
    <article v-html="obj.content"></article>
    <ul>
      <li v-for="i in list" v-bind:key="i.id" style="margin-bottom: 10px;border-bottom: 1px #ccc solid">
        <p style="display: inline-block;width: 100px">
          <span>评论者</span>{{i.reply_count}}
        </p>
        <span style="margin-left: 50px">评论于：</span>{{$utils.goodTime(i.last_reply_at)}}
        <p>{{i.title}}</p>
      </li>
    </ul>
  </div>
</template>
<script>
import {mapGetters, mapActions} from 'vuex'
export default {
  data() {
    return {
      id: this.$route.params.id,
      obj: {
        author: {
          loginname: 'dd'
        }
      },
      list: []
    }
  },
  created() {
    this.$api.get('topics', {id: this.id}, r => {
      for (var i = 0; i < r.data.length; i++) {
        if (r.data[i].id === this.id) {
          this.obj = r.data[i]
        }
      }
      this.list = r.data
    })
  },
  computed: mapGetters([]),
  methods: {
    ...mapActions(['gobackReload', 'goback']),
    beforeBack() {
      debugger
      // 处理状态之后
      this.$router.push({'path': '/', 'query': {'id': this.id}})
    },
    goback() {
      this.$router.push({'path': '/', 'query': {'flagReload': 'false'}})
    },
    gobackReload() {
      this.$router.push({'path': '/', 'query': {'flagReload': 'true'}})
    }
  }
  // methods: mapActions(['gobackReload', 'goback'])
}
</script>
