import {createRouter, createWebHashHistory} from 'vue-router'
import { createDynamicRouter, staticRouter } from './routes'
import useAuthStore from "@/plugins/store/auth.js";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: staticRouter,
})

router.beforeEach(async (to, from, next) => {
  const authStore = useAuthStore()


  if (router.getRoutes().length > 3) {
    next()
    return
  }
  await authStore.getMenus()
  if (!authStore.menus.length) {
    authStore.clearStore()
    await router.replace('/login')
  }
  await createDynamicRouter(router, authStore.menus)
  next({ ...to, replace: true })
})



export default function (app) {
  app.use(router)
}
export { router }
