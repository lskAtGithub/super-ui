import type { App } from 'vue'

import Button from '@super-ui/button'
import Icon from '@super-ui/icon'

const components = [Button, Icon]

const install = (app: App) => {
  components.forEach((component) => {
    app.component(component.name, component)
  })
}

export default {
  install,
}
