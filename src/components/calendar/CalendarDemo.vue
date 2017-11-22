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
  </div>
</template>

<script>
import Calendar from './Calendar'
export default {
  name: 'CalendarDemo',
  components: { Calendar },
  data() {
    return {
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


