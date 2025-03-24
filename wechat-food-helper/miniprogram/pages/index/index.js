const app = getApp()

Page({
  data: {
    selectedFood: null,
    isAnimating: false
  },

  randomFood() {
    if (this.data.isAnimating) return

    this.setData({ isAnimating: true })

    const foodTypes = app.globalData.foodTypes
    const randomCategoryIndex = Math.floor(Math.random() * foodTypes.length)
    const category = foodTypes[randomCategoryIndex]
    const randomItemIndex = Math.floor(Math.random() * category.items.length)
    const item = category.items[randomItemIndex]

    this.setData({
      selectedFood: {
        category: category.category,
        item: item
      }
    })

    setTimeout(() => {
      this.setData({ isAnimating: false })
    }, 500)
  }
})