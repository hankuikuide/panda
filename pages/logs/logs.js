// logs.js
const util = require('../../utils/util.js')

Page({
  data: {
    show: false,
  },

  showPopup() {
    this.setData({ show: true });
  },

  onClose() {
    this.setData({ show: false });
  },
})
