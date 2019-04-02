<template>
    <div>
        <ul>
            <li v-for="a in list" :key="a.id">
                <time v-text="a.create_at"></time>
                <router-link :to="{'name':'content','params':{'id':a.id}}">
                  {{a.title}}
                </router-link>
            </li>
        </ul>
    </div>
</template>
<script>
import api from '../config/interceptors'
export default {
    data() {
        return {
            list: []
        }
    },
    created() {
        this.getData()
    },
    methods: {
        getData() {
            let result = api.getMainData({type: 2})
            result.then((res) => {
                this.list = res.data.data
                this.$utils.emit('getNumber', res.data.data.length)
                this.$utils.emit('getString', {str: '234'})
            }).catch((err) => {
                console.log(err)
                result = null
            })
        }
    }
}
</script>
