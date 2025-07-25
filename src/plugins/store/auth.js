// 定义全局主题配置小仓库[选择式Api写法]
import {defineStore} from "pinia";
import {PINIA_PREFIX} from "@/config/index.js"

// defineStore方法执行会返回一个函数，函数的作用就是让组件可以获取到仓库数据
const authStore = defineStore("auth", {
  // 开启数据持久化
  persist: {
    // enabled: true, // true 表示开启持久化保存
    key: PINIA_PREFIX + "auth", // 默认会以 store 的 id 作为 key
    storage: localStorage
  },
  // 存储数据state
  state: () => {
    return {
      menus: [],
      userInfo: {
        username: '',
        nickname: '',
        role: ''
      },
      token: '',
    };
  },
  actions: {
    async getMenus() {
      this.menus = [
        {
          id: 1,
          type: 'link',
          section: "Hello World",
          title: '首页',
          component: 'home/index',
          icon: 'ri-table-alt-line',
          to: '/home',
          href: '',
          target: '',
          badgeContent: '',
        },
        {
          id: 2,
          type: 'group',
          section: "",
          title: '设置',
          badgeContent: '',
          badgeClass: '',
          icon: 'ri-home-smile-line',
          links: [
            {
              id: 20001,
              title: 'Player',
              component: 'settings/player',
              icon: 'ri-home-smile-line',
              to: '/settings/player',
              href: '',
              target: '',
              badgeContent: '',
            },
            {
              id: 20002,
              title: 'Room',
              component: 'settings/room',
              icon: 'ri-home-smile-line',
              to: '/settings/room',
              href: '',
              target: '',
              badgeContent: '',
            },
          ],
        },
        {
          id: 3,
          type: 'link',
          section: "Hello World",
          title: '帮助',
          component: 'help/index',
          icon: 'ri-table-alt-line',
          to: '/help',
          href: '',
          target: '',
          badgeContent: '',
        },
      ]
    },
    clearStore() {
      this.menus = []
      this.userInfo = {
        username: '',
        nickname: '',
        role: ''
      }
      this.token = ''
    }
  },
  // 计算属性，和vuex是使用一样，getters里面不是方法，是计算返回的结果值
  getters: {}
});

// 对外暴露方法
export default authStore;