import type { App } from 'vue'

import Button from '@super-ui/button'

const components = [Button]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
