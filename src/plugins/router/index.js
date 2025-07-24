import { createRouter, createWebHashHistory } from 'vue-router'
import { routes } from './routes'
import { staticRoutes } from "@/plugins/router/static.js";

const router = createRouter({
  history: createWebHashHistory(import.meta.env.BASE_URL),
  routes: [...staticRoutes],
  strict: false,
  // 滚动行为
  scrollBehavior() {
    return {
      left: 0,
      top: 0
    };
  }
})

export default function (app) {
  app.use(router)
}
export { router }
