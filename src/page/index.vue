<template>
    <div>
        <myHeader></myHeader>
        <List></List>
        <myFooter></myFooter>
    </div>
</template>
<script>
import myHeader from '../modules/header'
import myFooter from '../modules/footer'
import List from '../page/list'
export default {
    components: {myHeader, myFooter, List}
}
</script>
<style lang="less" scope>
</style>
