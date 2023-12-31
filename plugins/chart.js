import { use } from 'echarts/core'
import { CanvasRenderer } from 'echarts/renderers'
import { BarChart } from 'echarts/charts'
import { GridComponent, TooltipComponent } from 'echarts/components'

export default defineNuxtPlugin(() => {
  use([CanvasRenderer, BarChart, GridComponent, TooltipComponent])
})
