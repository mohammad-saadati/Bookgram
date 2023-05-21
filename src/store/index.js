import { defineStore } from 'pinia'

export const useModalStore = defineStore('modal', {
  state: () => ({ activeModalName:"sadf" }),
  getters: {
    doubleCount: (state) => state.count * 2,
  },
  actions: {
    increment() {
      this.count++
    },
  },
})