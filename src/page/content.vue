<template>
  <div>
    <div @click="goback()" style="cursor: pointer;">
      返回
    </div>
    <div @click="gobackReload()" style="cursor: pointer;">
      返回刷新
    </div>
    <h2>{{obj.title}}</h2>
    <span>作者：</span>{{obj.author.loginname}} <span style="margin-left: 50px">发表于：</span>
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
    mounted() {
        this.$utils.on('getNumber', this.getNumberData)
        this.$utils.on('getString', this.getString)
    },
    methods: {
        getNumberData(num) {
            console.log(num)
        },
        getString(obj) {
            console.log(obj.str)
        }
    }
}
</script>
