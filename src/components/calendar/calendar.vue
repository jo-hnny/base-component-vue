<template>
  <div class="calendar" :style="{backgroundColor: theme.mainColor, color: theme.textColor}">
    <div class="year-month-content">
      <div class="left-arrow arrow" @click="leftArrowClick">&lt;</div>
      <div class="middle-content">
        <div class="year" @click="showWhat === 2 ? showWhat = 0 : showWhat = 2">{{year}}</div>
        <div class="month" @click="showWhat === 1 ?showWhat = 0 : showWhat = 1">{{month}}</div>
      </div>
      <div class="right-arrow arrow" @click="rightArrowClick">&gt;</div>
    </div>
    <div v-show="showWhat === 0" class="week-day-content">
      <div class="weeks" >
        <div class="week" v-for="week in weeks" :key="week">{{week}}</div>
      </div>
      <div class="days" >
        <div class="day gray" :style="{color: theme.darkeTextColor}" v-for="date in days.last" :key="'last' + date" @click="selectLastMonthDay(date)">{{date}}</div>
        <div class="day" :class="{highlight: date == day}" :style="date == day ? {backgroundColor:  theme.highlightColor} : {}" v-for="date in days.now" :key="'now' + date" @click="selectToMonthDay(date)">
         <div class="text">{{date}}</div>
          <div class="markes">
            <div class="marke" v-for="mark in checkMarked(date)" :title="mark.title" :key="mark.timestamp" :style="{backgroundColor: mark.color}"></div>
          </div>
          </div>
        <div class="day gray" :style="{color: theme.darkeTextColor}" v-for="date in days.next" :key="'next' + date" @click="selectNextMonthDay(date)">{{date}}</div>
      </div>
    </div>
    <div class="month-box"  v-show="showWhat === 1">
      <div class="month-item" v-for="m in months" :key="m" :style="month === m ? {backgroundColor:  theme.highlightColor} : {}"  :class="{highlight: month === m}" @click="selectMonth(m)">{{m}}</div>
    </div>
    <div class="year-box"  v-show="showWhat === 2">
      <div class="year-item" v-for="y in years" :key="y" :style="year === y ? {backgroundColor:  theme.highlightColor} : {}" :class="{highlight: year === y}" @click="selectYear(y)">{{y}}</div>
    </div>
  </div>
</template>

<script>
import moment from 'moment'
export default {
  name: 'Calendar',
  props: {
    local: {
      type: String,
      default: 'zh-cn'
    },
    value: {
      type: Number,
      default: new Date().getTime()
    },
    theme: {
      type: Object,
      default() {
        return {
          // mainColor: '#0b90aa',
          // textColor: '#fff',
          // darkTextColor: '#999',
          // highlightColor: '#fd367e'
        }
      }
    },
    marks: {
      type: Array,
      default() {
        return [
          // {
          //   color: 'green',
          // title: '',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   color: 'green',
          // title: '',
          //   timestamp: new Date().getTime()
          // },
          // {
          //   color: 'green',
          // title: '',
          //   timestamp: new Date().getTime()
          // }
        ]
      }
    }
  },
  data() {
    return {
      showWhat: 0,
      timestamp: this.value,
      oneDayLength: 24 * 60 * 60 * 1000
    }
  },
  created() {
    moment.locale(this.local)
  },
  computed: {
    weeks() {
      return moment.weekdaysShort()
    },
    months() {
      return moment.monthsShort()
    },
    years() {
      const last12 = new Array(12).fill(0).map((_, index) => this.year - index - 1).reverse()
      const next12 = new Array(12).fill(0).map((_, index) => this.year + index + 1)
      return last12.concat([this.year]).concat(next12)
    },
    time: {
      get() {
        return moment(this.timestamp)
      },
      set(mn) {
        this.timestamp = parseInt(mn.format('x'))
      }
    },
    year() {
      return this.time.get('year')
    },
    month() {
      return this.months[this.time.get('month')]
    },
    day() {
      return this.time.get('date')
    },
    days() {
      // 最多6行 42天
      const toMonthDays = this.time.daysInMonth()
      let lastMonthDays = moment(this.time).subtract(1, 'M').daysInMonth()
      const nextMonthDays = moment(this.time).add(1, 'M').daysInMonth()
      const startWeek = moment(this.time).startOf('month').day()
      const endWeek = moment(this.time).endOf('month').day()
      return {
        last: new Array(startWeek).fill(0).map(() => lastMonthDays--).reverse(),
        now: new Array(toMonthDays).fill(0).map((_, index) => ++index),
        next: new Array(42 - startWeek - toMonthDays).fill(0).map((_, index) => ++index)
      }
    }
  },
  watch: {
    value(newTime) {
      this.timestamp = newTime
    },
    timestamp(newTime) {
      this.$emit('input', newTime)
    }
  },
  methods: {
    checkMarked(day) {
      const start = parseInt(moment(`${this.year}-${this.months.findIndex(item => item === this.month) + 1}-${day}`).format('x'))
      const end = start + this.oneDayLength
      return this.marks.filter(({ timestamp }) => timestamp >= start && timestamp <= end)
    },
    subtractMonth() {
      this.time = this.time.subtract(1, 'M')
    },
    addMonth() {
      this.time = this.time.add(1, 'M')
    },
    addYear() {
      this.time = this.time.add(1, 'Y')
    },
    subtractYear() {
      this.time = this.time.subtract(1, 'Y')
    },
    selectToMonthDay(date) {
      this.time = this.time.set('date', date)
    },
    selectLastMonthDay(date) {
      this.time = this.time.subtract(1, 'M').set('date', date)
    },
    selectNextMonthDay(date) {
      this.time = this.time.add(1, 'M').set('date', date)
    },
    selectMonth(mString) {
      const m = this.months.findIndex(item => item === mString)
      this.time = this.time.set('month', m)
      this.showWhat = 0
    },
    selectYear(y) {
      this.time = this.time.set('year', y)
      this.showWhat = 0
    },
    leftArrowClick() {
      switch (this.showWhat) {
        case 2:
          this.subtractYear()
          break
        default:
          this.subtractMonth()
      }
    },
    rightArrowClick() {
      switch (this.showWhat) {
        case 2:
          this.addYear()
          break
        default:
          this.addMonth()
      }
    }
  }

}
</script>

<style lang="less" scoped>
@mainColor: #0b90aa;
@textColor: #fff;
@darkTextColor: #999;
@highlightColor: #fd367e;
@topHeight: 50px;
@bottomHeight: 200px;

.calendar {
  color: @textColor;
  background-color: @mainColor;
  text-align: center;
  user-select: none;
  .highlight {
    background-color: @highlightColor;
  }
  .month-box {
    height: @bottomHeight;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    .month-item {
      width: 33%;
      height: 25%;
      line-height: 50px;
      cursor: pointer;
    }
  }
  .year-box {
    height: @bottomHeight;
    flex-wrap: wrap;
    display: flex;
    align-items: center;
    .year-item {
      width: 20%;
      height: 20%;
      line-height: 40px;
      cursor: pointer;
    }
  }
  .year-month-content {
    height: @topHeight;
    display: flex;
    align-items: center;
    .arrow {
      height: 100%;
      line-height: @topHeight;
      width: 25%;
      font-size: 32px;
      cursor: pointer;
    }
    .middle-content {
      cursor: pointer;
      display: flex;
      align-items: center;
      height: 100%;
      width: 50%;
      .year {
        line-height: @topHeight;
        width: 50%;
        height: 100%;
      }
      .month {
        line-height: @topHeight;
        height: 100%;
        width: 50%;
      }
    }
  }
  .week-day-content {
    height: @bottomHeight;
    .weeks {
      height: 10%;
      display: flex;
      justify-content: space-between;
      .week {
        flex-grow: 1;
        width: 14%;
      }
    }
    .days {
      height: 90%;
      display: flex;
      flex-wrap: wrap;
      justify-content: space-between;
      align-items: center;
      .day {
        height: 16%;
        flex-grow: 1;
        width: 14%;
        cursor: pointer;
        display: flex;
        flex-direction: column;
        .text {
          height: 80%;
          line-height: 23px;
        }
        .markes {
          height: 20%;
          display: flex;
          justify-content: space-around;
          .marke {
            width: 10%;
            height: 100%;
            border-radius: 50%;
          }
        }
      }
      .gray {
        color: @darkTextColor;
      }
    }
  }
}
</style>
