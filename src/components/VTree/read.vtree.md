# 代码示例
```html
<template>
  <div id="vtree-demo">
   <div class="trees">
      <div class="tree-box">
      <VTree :treeData="treeData1" :typeMap="typeMap" @selected="print"/>
    </div>
    <div class="tree-box">
      <VTree :treeData="treeData2" :typeMap="typeMap" :multiple="true" @selecte-change="lookSelected"/>
    </div>
   </div>
    <div v-html="md"></div>
  </div>
</template>

<script>
import md from './read.vtree.md'
import VTree from './VTree'
export default {
  name: 'VTree-demo',
  components: {
    VTree
  },
  data() {
    return {
      md,
      typeMap: {
        1: {    // 类型1对应的按钮
          icon: 'icon-icecream-1',  // 标题对应的图标
          buttons: [
            {   //  按钮一
              icon: 'icon-emoji-1',   // 按钮对应的图标
              title: '打印',    // 按钮对应的提示文字
              cb: this.print    // 点击按钮对应的方法
            },
            {
              icon: 'icon-emoji-4',
              title: '弹出',
              cb: this.alert
            }
          ],
        },
        2: {
          icon: 'icon-icecream-2',
          buttons: [
            {
              icon: 'icon-emoji-1',
              title: '打印',
              cb: this.print
            },
            {
              icon: 'icon-emoji-4',
              title: '弹出',
              cb: this.alert
            }
          ],
        },
        3: {
          icon: 'icon-icecream-3',
          buttons: [
            {
              icon: 'icon-emoji-1',
              title: '打印',
              cb: this.print
            },
            {
              icon: 'icon-emoji-4',
              title: '弹出',
              cb: this.alert
            }
          ],
        }
      },
      treeData1: [
        {
          title: '一级-01', // 标题
          type: 1,    // 类型
          open: false,    // 是否展开
          checked: false,   // 是否选中
          child: [    // 包含的子集
            {
              title: '二级-01',
              type: 1,
              open: false,
              checked: false,
              child: [
                {
                  title: '三级-01',
                  type: 1,
                  open: false,
                  checked: false,
                  child: []
                }
              ]
            },
            {
              title: '二级-02',
              type: 1,
              open: false,
              checked: false,
              child: []
            }
          ]
        },
        {
          title: '一级-02',
          type: 1,
          open: false,
          checked: false,
          child: []
        }
      ],
      treeData2: [
        {
          title: '一级-01',
          type: 1,
          open: false,
          checked: false,
          child: [
            {
              title: '二级-01',
              type: 1,
              open: false,
              checked: false,
              child: [
                {
                  title: '三级-01',
                  type: 1,
                  open: false,
                  checked: false,
                  child: []
                }
              ]
            },
            {
              title: '二级-02',
              type: 1,
              open: false,
              checked: false,
              child: []
            }
          ]
        },
        {
          title: '一级-02',
          type: 1,
          open: false,
          checked: false,
          child: []
        }
      ]
    }
  },
  computed: {
  },
  methods: {
    print(target) {
      console.log('你点击的是：', target)
    },
    alert(target) {
      alert('你点击的是：' + target.title)
    },
    lookSelected(dataType1, dataType2) {
      console.log(dataType1, dataType2)
    }
  }
}
</script>

<style scoped>
.trees {
  display: flex;
  justify-content: space-between;
}

.tree-box {
  width: 500px;
}
</style>
```
# props
属性名称|描述|默认值
--|--|--
treeData|组件接受的树形数据|无
typeMap|数据的类别和按钮的映射关系|无
multiple|是否多选模式|false

# events
事件名称|描述|参数
--|--|--
select-change|选中的值发生改变|args1:树形选中数据，完整上下级,args2:数组型选中数据，只有最底级的数据
