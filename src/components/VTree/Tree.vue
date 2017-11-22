<template>
  <div class="tree">
    <div v-for="item in treeData" :key="item.title" v-show="getShowState(item)">
      <div class="item">
        <div class="item-left">
          <div class="trangle" v-if="item.child.length" :class="{'trangle-up': item.open}" @click.stop="item.open = !item.open"></div>
          <div v-if="multiple" class="iconfont" :class="{'icon-checkbox': item.checked === true, 'icon-banxuanzhong': item.checked === 0, 'icon-check-box': item.checked === false}" @click="handlerClick(item)"></div>
          <div class="iconfont title" :class="[typeMap[item.type].icon, {'single-check': item.checked}]" @click="handlerClick(item)">{{item.title}}</div>
        </div>
        <ul class="item-right">
          <li v-for="btn in typeMap[item.type].buttons" :title="btn.title" :key="btn.icon" class="iconfont btn" :class="[btn.icon]" @click.stop="btn.cb(item)"></li>
        </ul>
      </div>
      <Tree v-if="item.child.length" v-show="item.open" :treeData="item.child" :typeMap="typeMap" :searchKey="searchKey" :multiple="multiple"  @child-click="target => revewState(target, item)" />
    </div>
  </div>
</template>
<script>
/*
  1.三角符号展不展示？getShowState返回三种状态可以解决
*/
export default {
  name: 'Tree',
  props: {
    treeData: {
      type: Array,
      required: true
    },
    typeMap: {
      type: Object,
      required: true
    },
    searchKey: {
      type: String
    },
    multiple: {
      type: Boolean
    }
  },
  methods: {
    getShowState(item) {
      return item.title.indexOf(this.searchKey) !== -1 || this.getStateFromArray(item.child, this.searchKey)
    },
    getStateFromArray(array, key) {
      for (const item of array) {
        if (item.title.indexOf(key) !== -1) return true
        if (this.getStateFromArray(item.child, key)) return true
      }
      return false
    },
    handlerClick(item) {
      if (!this.multiple && item.child.length) return
      if (this.multiple) this.loopSetChecke(item, !item.checked)
      this.$emit('child-click', item)
    },
    loopSetChecke(item, checke) {
      item.checked = checke
      item.child.forEach(item => this.loopSetChecke(item, checke))
    },
    revewState(target, item) {
      if (!this.multiple) return this.$emit('child-click', target)
      const childLength = item.child.length
      const checkedLength = item.child.filter(({ checked }) => checked === true).length
      if (checkedLength === childLength) {
        item.checked = true
        return this.$emit('child-click', target)
      }
      const noCheckedLength = item.child.filter(({ checked }) => checked === false).length
      if (noCheckedLength === childLength) {
        item.checked = false
        return this.$emit('child-click', target)
      }
      item.checked = 0
      this.$emit('child-click', target)
    }
  }
}
</script>


<style scoped>
* {
  padding: 0;
  margin: 0;
  user-select: none;
}

ul,
li {
  list-style: none;
}

.tree {
  width: 100%;
  padding-left: 10px;
}

.tree .item {
  cursor: pointer;
  margin-bottom: 10px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.tree .trangle {
  width: 0;
  height: 0;
  border: 12.5px solid transparent;
  border-left-color: black;
}

.tree .trangle-up {
  border-left-color: transparent;
  border-top-color: black;
  transform: translateY(25%);
}

.tree .single-check {
  color: blue;
}

.tree .item .item-left {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}
</style>

