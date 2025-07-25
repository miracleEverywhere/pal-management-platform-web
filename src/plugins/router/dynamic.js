import useAuthStore from "@/plugins/pinia/auth.js"

// 接收 router 作为参数
export const createDynamicRouter = async (router) => {
  const authStore = useAuthStore()
  let modules = import.meta.glob("@/views/**/*.vue")
  try {
    await authStore.getMenus()

    if (authStore.menus === null || authStore.menus.length === 0) {
      authStore.setToken("")
      router.replace('/login')
      return
    }

    authStore.menus.forEach((item) => {
      let links = item
      if (item.type !== 'link') {
        links = item.links
      }

      if (Array.isArray(links)) {
        for (let link of links) {
          router.addRoute('default', {
            path: link.path,
            name: link.name,
            component: modules[`/src/views/${link.component}.vue`],
          })
        }
      } else {
        router.addRoute('default', {
          path: links.path,
          component: modules[`/src/views/${links.component}.vue`],
          name: links.name,
        })
      }
    })
  } catch (error) {
    console.log(error)
    authStore.setToken("")
    router.replace('/login')
    return Promise.reject(error)
  }
}