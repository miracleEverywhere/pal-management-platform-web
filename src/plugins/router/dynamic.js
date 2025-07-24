import router from "@/plugins/router"
import useAuthStore from "@/plugins/pinia/auth.js"


export const initDynamicRouter = async () => {
  const authStore = useAuthStore()

  try {
    await authStore.getMenus()

    if (authStore.menus === null || authStore.menus.length === 0) {
      authStore.setToken("")
      router.replace('/login')
      return
    }
    authStore.menus.forEach((item) => {
      router.addRoute("layout", item)
    })
  } catch (error) {
    console.log(error)
    // 当菜单请求出错时，重定向到登陆页
    authStore.setToken("")
    router.replace('/login')
    return Promise.reject(error)
  }
}