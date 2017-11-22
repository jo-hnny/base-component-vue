<template>
  <div class="v-tree">
    <div class="input">
      <input placeholder="请输入关键字搜索" class="search-input" type="text" v-model="searchKey">
    </div>
    <Tree :treeData="treeData" :typeMap="typeMap" :searchKey="searchKey" :multiple="multiple" @child-click="clicked"/>
  </div>
</template>

<script>
import './iconfont/iconfont.css'
import Tree from './Tree'
export default {
  name: 'VTree',
  components: { Tree },
  props: {
    treeData: {
      type: Array,
      required: true
    },
    typeMap: {
      type: Object,
      required: true
    },
    multiple: {
      type: Boolean,
      default: false
    }
  },
  data() {
    return {
      searchKey: '',
      lastClickd: {}
    }
  },
  methods: {
    clicked(target) {
      if (this.multiple) return this.$emit('selecte-change', this.getCheckedTree(this.treeData), this.getTreeChecked(this.treeData))
      this.lastClickd.checked = false
      this.lastClickd = target
      target.checked = true
      this.$emit('selected', target)
    },
    getCheckedTree(treeData) {
      return treeData
        .filter(({ checked }) => checked !== false)
        .map(item => ({ ...item, child: this.getCheckedTree(item.child) }))
    },
    getTreeChecked(treeData) {
      const arr = []
      this.getChecked(treeData, arr)
      return arr
    },
    getChecked(treeData, arr) {
      treeData
        .filter(({ checked }) => checked !== false)
        .forEach(item => {
          if (!item.child.length) return arr.push(item)
          this.getChecked(item.child, arr)
        })
    }
  }
}
</script>

<style scoped>
.v-tree {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
}

.v-tree .input {
  margin-bottom: 10px;
  padding-left: 10px;
  width: 100%;
}
.v-tree .input .search-input {
  width: 100%;
  outline: none;
  height: 20px;
  font-size: 9px;
  line-height: 20px;
}
</style>


