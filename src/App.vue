<template>
  <div id="app">
    <CalendarDemo/>
    <VTreeDemo/>
  </div>
</template>

<script>
import CalendarDemo from './components/calendar/CalendarDemo'
import VTreeDemo from './components/VTree/VTreeDemo'
export default {
  name: 'app',
  components: {
    CalendarDemo,
    VTreeDemo
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
