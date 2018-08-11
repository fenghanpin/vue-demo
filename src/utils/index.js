export default {
  // 全局暴露
  goodTime(str) {
    let now = new Date().getTime()
    let old = new Date(str).getTime()
    let difference = now - old
    let minutes = 1000 * 60
    let hour = minutes * 60
    let day = hour * 24
    let week = day * 7
    let month = day * 30
    let year = month * 12

    let _your = difference / year
    let _month = difference / month
    let _week = difference / week
    let _day = difference / day
    let _hour = difference / hour
    let _min = difference / minutes
    let result = ''

    if (_your > 1) {
      result = Math.floor(_your) + '年前'
    } else if (_month > 1) {
      result = Math.floor(_month) + '月前'
    } else if (_week > 1) {
      result = Math.floor(_week) + '周前'
    } else if (_day > 1) {
      result = Math.floor(_day) + '天前'
    } else if (_hour > 1) {
      result = Math.floor(_hour) + '小时前'
    } else if (_min > 1) {
      result = Math.floor(_min) + '分钟前'
    }

    return result
  }
}
