import { ViteSSG } from 'vite-ssg'
import { createHead } from '@vueuse/head'
import App from './App.vue'
import { routes } from './router'
import './index.css'

export const createApp = ViteSSG(
  App,
  { routes },
  ({ app, router, isClient }) => {
    const head = createHead()
    app.use(head)

    // Only update title on client-side
    if (isClient) {
      router.beforeEach((to, from, next) => {
        if (to.meta?.title) {
          document.title = to.meta.title
        }
        next()
      })
    }
  }
)