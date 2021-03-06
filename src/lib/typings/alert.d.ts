import { PluginObject } from 'vue'

export interface YPPAlertConfig extends Object {
  isShow: boolean
  
  title: string

  icon: string

  text: object

  explain: object

  btn: string

  hasClose: boolean
}

export interface YPPAlert extends PluginObject<YPPAlertConfig> {}
