# 代码示例
```html
<template>
  <div class="calendar-demo">
    <div class="demo">
       <div>
      <Calendar v-model="date"/>
    </div>
    <div>
      <Calendar v-model="date" :marks="marks" local="en" :theme="theme"/>
    </div>
    </div>
    <div v-html="md"></div>
  </div>
</template>

<script>
import Calendar from './Calendar'
import md from './read.calendar.md'
export default {
  name: 'CalendarDemo',
  components: { Calendar },
  data() {
    return {
      md,
      date: new Date().getTime(),
      marks: [
        {
          title: '报警录像',
          timestamp: new Date().getTime() - 24 * 60 * 60 * 1000 * 3,
          color: 'yellow'
        },
        {
          title: '事件录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
          color: 'blue'
        },
        {
          title: '报警录像',
          timestamp: new Date().getTime() + 24 * 60 * 60 * 1000 * 3,
          color: 'yellow'
        },
      ],
      theme: {
        mainColor: '#212121',
        textColor: '#0D7377',
        darkTextColor: '#323232',
        highlightColor: '#14FFEC'
      }
    }
  }
}
</script>

<style scoped>
.demo {
  display: flex;
  justify-content: space-around;
}

.demo div {
  width: 500px;
}
</style>
```
# props
属性名称|描述|类型|默认值
--|--|--|--
v-model|选中的时间戳|Number|当前时间的时间戳
marks|需要标记的日期|Array|[]
local|语言模式|String|'zh-cn'
theme|主题|Object|{}
### marks属性列表
属性名称|描述|类型
--|--|--
title|标记说明|String
timestamp|毫秒时间戳|Number
color|标记颜色|String
### theme属性列表
属性名称|描述|类型|默认值
--|--|--|--
mainColor|主体背景色|String|#0b90aa
textColor|字体颜色|String|#fff
darkTextColor|灰显字体颜色|String|#999
highlightColor|选中项的背景色|String|#fd367e