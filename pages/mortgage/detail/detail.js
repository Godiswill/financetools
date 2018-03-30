// pages/mortgage/detail/detail.js
var CFHL = require("../../../utils/calculatorForHouseLoan.js");
var sliderWidth = 96; // 需要设置slider的宽度，用于计算中间位置
Page({

  /**
   * 页面的初始数据
   */
  data: {
    tabs: ["等额本息", "等额本金", "本息/本金"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,

    hiddenDetail: true,

    parentActiveIndex: 0,
    commercialTotal: 0,
    gjjTotal: 0,
    interestRatePerMou0: 0,
    interestRatePerMou1: 0,
    totalMouths: 0,

    loanTotal: 0, //贷款总额
    totalInterestAi: 0, //等额本息总还款利息
    totalRepayAi: 0, //总还本带息
    repayPerMouAi: 0, //等额本息月均还本带息
    totalInterestAp: 0, //等额本金总还款利息
    totalRepayPriceAp: 0, //等额本金总还款金额
    //等额本金第一个月还款
    repayPerMouthAp: 0,
    //之后每个月递减额
    decreasePerMouAp: 0,
    //等额本息详情
    repayPerMouObjAi: {},
    //等额本金详情
    repayPerMouObjAp: {}

  },
  showDetail: function() {
    this.data.hiddenDetail = !this.data.hiddenDetail;
    this.setData({
      hiddenDetail: this.data.hiddenDetail
    });
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (e) {
    wx.showLoading({
      title: "数据加载中...",
      mask: true
    })

    var detail;
    if (e.parentActiveIndex == 0) {
      detail = CFHL.calculate(+e.commercialTotal, +e.interestRatePerMou0 / 12, +e.totalMouths);
    } else if (e.parentActiveIndex == 1) {
      detail = CFHL.calculate(+e.gjjTotal, +e.interestRatePerMou1 / 12, +e.totalMouths);
    } else {
      var tmp = CFHL.calculate(+e.commercialTotal, +e.interestRatePerMou0 / 12, +e.totalMouths);
      detail = CFHL.calculate(+e.gjjTotal, +e.interestRatePerMou1 / 12, +e.totalMouths);
      for(let key in detail) {
        if (detail.hasOwnProperty(key)) {
          if (typeof detail[key] === "string") {
            detail[key] = (+detail[key] + +tmp[key]).toFixed(2);
          }
          else {
            for(let arr in detail[key]) {
              if (detail[key].hasOwnProperty(arr)) {
                for (let i = 0; i < detail[key][arr].length; i++) {
                  detail[key][arr][i] = (+detail[key][arr][i] + +tmp[key][arr][i]).toFixed(2);
                }
              }
            }
          }
        }
      }
    }
    console.log(detail);
    this.setData({ ...e, ...detail }, () => { wx.hideLoading() });
    var that = this;
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          sliderLeft: (res.windowWidth / that.data.tabs.length - sliderWidth) / 2,
          sliderOffset: res.windowWidth / that.data.tabs.length * that.data.activeIndex
        });
      }
    });
  },
  tabClick: function (e) {
    this.setData({
      sliderOffset: e.currentTarget.offsetLeft,
      activeIndex: e.currentTarget.id
    });
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  /*onShareAppMessage: function () {
    return {
      title: '房贷计算',
      path: '/pages/mortgage/mortgage',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }*/
})