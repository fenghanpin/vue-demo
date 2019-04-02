import axios from 'axios'
import api from './api'

function postMethod(url, params) {
    return axios({
        url,
        method: 'post',
        // json情况下使用
        // dataType: 'json',
        // headers: {
        //     'Content-Type': 'application/json; charset=UTF-8'
        // },
        data: {...params},
        transformRequest: [ function (data) {
            let ret = ''
            for (let it in data) {
                ret += encodeURIComponent(it) + '=' + encodeURIComponent(data[it]) + '&'
            }
            return ret
        }],
        headers: {
            'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
        }
    })
}

// function getMethod(url, params) {
//     return axios.get(url, {...params})
// }

// 上传文件公用方法
// function upLoadMethod(url, params) {
//     return axios({
//         url,
//         method: 'post',
//         data: params,
//         headers: {
//             'Content-Type': 'multipart/form-data'
//         }
//     })
// }

const getMainData = (params) => {
    return postMethod(api.getMainData.url, {...params})
}
/*
  组件上传文件写法
  file 上传的文件
  standandId 参数
*/
// let formUpData = new FormData()
// formUpData.append('file', this.file)
// formUpData.append('dataId', this.standardId)
// upLoadMethod(formUpData)

// 下载文件时候，直接在组件中，用localtion.origin获取ip和端口

export default {
    getMainData
}
