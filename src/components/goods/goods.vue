<template>
  <div>
    <h1>goods</h1>
    <input v-model="num">
    <button @click="addNumber()">+</button>
    <button @click="save()">提交</button>
  </div>
</template>
<script>
export default {
  props: ['goods'],
  data() {
    return {
      num: 0
    }
  },
  created() {
    console.log(this.goods)
  },
  methods: {
    addNumber() {
      this.num++
    },
    save() {
      this.$emit('goodsNumber', this.num)
    }
  }
}
</script>
