const moment = require('moment')
moment.locale('zh-cn')
console.log(moment.months())
console.log(moment().get('day'))