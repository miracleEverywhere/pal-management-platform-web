// 定义全局主题配置小仓库[选择式Api写法]
import {defineStore} from "pinia";
import {PINIA_PREFIX} from "@/config/index.js"

// defineStore方法执行会返回一个函数，函数的作用就是让组件可以获取到仓库数据
const globalStore = defineStore("auth", {
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
        role: '',
      },
      token: '',
    };
  },
  actions: {
    login() {

    },
    getMenus() {
      this.menus = [
        {
          id: 1,
          type: 'link',
          section: "Hello World",
          title: 'Home',
          icon: 'ri-table-alt-line',
          to: '/home',
          href: '',
          target: '',
          badgeContent: '',
        },
        {
          id: 2,
          type: 'group',
          section: "Fuck World",
          title: 'tables',
          badgeContent: '',
          badgeClass: '',
          icon: 'ri-home-smile-line',
          links: [
            {
              id: 20001,
              title: 'Analytics',
              icon: 'ri-home-smile-line',
              to: '/tables',
              href: '',
              target: '',
              badgeContent: '',
            },
          ],
        },
        {
          id: 3,
          type: 'group',
          section: "",
          title: 'Love',
          badgeContent: '',
          badgeClass: '',
          icon: 'ri-home-smile-line',
          links: [
            {
              id: 30001,
              title: 'LoveWorld',
              icon: 'ri-home-smile-line',
              to: '/cards',
              href: '',
              target: '',
              badgeContent: '',
            },
          ],
        },
      ]
    },
    getUserInfo() {

    },
    setToken(token) {
      this.token = token
    }
  },
  // 计算属性，和vuex是使用一样，getters里面不是方法，是计算返回的结果值
  getters: {
    getToken(state) {
      return state.token
    }
  }
});

// 对外暴露方法
export default globalStore;
