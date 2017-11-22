<template>
  <div id="vtree-demo">
   <div class="trees">
      <div class="tree-box">
      <VTree :treeData="treeData1" :typeMap="typeMap" :multiple="false" @selected="print"/>
    </div>
    <div class="tree-box">
      <VTree :treeData="treeData2" :typeMap="typeMap" :multiple="true" @selecte-change="lookSelected"/>
    </div>
   </div>
  </div>
</template>

<script>
import VTree from './VTree'
export default {
  name: 'VTree-demo',
  components: {
    VTree
  },
  data() {
    return {
      typeMap: {
        1: {
          icon: 'icon-icecream-1',
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
