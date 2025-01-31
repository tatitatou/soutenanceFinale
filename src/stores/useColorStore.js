import { defineStore } from 'pinia'

export const useColorStore = defineStore('color', {

  state: () => ({ 
    color: 'blue'

  }),
  actions: {
    changeColor() {
      let tmpColors = ['red', 'green', 'blue', 'pink', 'orange', 'purple','white','black','yellow','aqua']
      this.color = tmpColors[Math.floor(Math.random() * tmpColors.length)]
      console.log(this.color)
    },
  }
})