// pages/finance/func/func.js
var finance = require("../../../utils/finance.js");
Page({

  /**
   * 页面的初始数据
   */
  data: {
    id: "",
    result: "",
    irr: 4.88,
    IRRArr: [
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [2.61, 0, 2.61],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, -3, -3],
      [0, -3, -3],
      [0, -3, -3],
      [0, -3, -3],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, -15, -15],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, -20, -20],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, -80, -80],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, 0, 0],
      [0, -200, -200],
      [0, -26.1, -26.1]
    ],
    datas: [
      {
        key: 0, abbr: "AM", name: "Amortization",
        principal: 20000,
        rate: 7.5,
        totalNumberOfPayments: 60
      },
      {
        key: 1, abbr: "CAGR", name: "Compound Annual Growth Rate",
        beginningValue: 10000,
        endingValue: 19500,
        numberOfPeriods: 3
      },
      {
        key: 2, abbr: "CI", name: "Compound Interest",
        rate: 4.3,
        compoundingsPerPeriod: 4,
        principal: 1500,
        numberOfPeriods: 6
      },
      {
        key: 3, abbr: "DF", name: "Discount Factor",
        rate: 10,
        numberOfPeriods: 5
      },
      {
        key: 4, abbr: "FV", name: "Future Value",
        rate: 12,
        cashFlow: 10000,
        numberOfPeriods: 10
      },
      {
        key: 5, abbr: "IRR", name: "Internal Rate of Return",
        // initialInvestment: 500000,
        cashFlows: [-500000, 200000, 300000, 200000]
      },
      {
        key: 6, abbr: "XIRR", name: "..."
      },
      {
        key: 7, abbr: "LR", name: "Leverage Ratio",
        liabilities: 25,
        debts: 10,
        income: 20
      },
      {
        key: 8, abbr: "NPV", name: "Net Present Value",
        rate: 10,
        initialInvestment: 500000,
        cashFlows: [200000, 300000, 200000]
      },
      {
        key: 9, abbr: "PP", name: "Payback Period",
        numberOfPeriods: 5,
        cashFlows: [-50, 10, 13, 16, 19, 22]
      },
      {
        key: 10, abbr: "PV", name: "Present Value",
        rate: 12,
        cashFlow: 10000,
        numberOfPeriods: 5
      },
      {
        key: 11, abbr: "PI", name: "Profitability Index",
        rate: 10,
        initialInvestment: 40000,
        cashFlows: [18000, 12000, 10000, 9000, 6000]
      },
      {
        key: 12, abbr: "ROI", name: "Return on Investment",
        initialInvestment: 55000,
        earnings: 60000
      },
      {
        key: 13, abbr: "R72", name: "Rule of 72",
        rate: 10
      },
      {
        key: 14, abbr: "WACC", name: "Weighted Average Cost of Capital",
        marketValueOfEquity: 600000,
        marketValueOfDebt: 400000,
        costOfEquity: 6,
        costOfDebt: 5,
        taxRate: 35
      },
      {
        key: 15, abbr: "PMT", name: "Loan Payment Per Period",
        rate: 2,
        numberOfPayments: 36,
        principal: 1000000
      },
      {
        key: 16, abbr: "IAR", name: "Inflation-adjusted Return",
        investmentReturn: 18,
        inflationRate: 12
      },
      {
        key: 17, abbr: "RATE", name: "RATE",
        periods: 12,
        payment: 330,
        present: 2700
      }
    ]
  },
  dataChange(e) {
    var value = +e.detail.value;
    var tmp = e.currentTarget.dataset.key.split("_");
    var index = tmp[1];
    var key = tmp[0];
    if (value !== value) {
      value = e.detail.value;
      value = value.trim().split(/[^\d.+-]+/)
      for (let i = 0; i < value.length; i++) {
        value[i] = +value[i];
      }
    }
    if (!Array.isArray(value) && /\.$/.test(e.detail.value)) {
      value += '.';
    }
    this.data.datas[index][key] = value;
    if ( e.detail.value.trim().match(/^(0|[1-9]\d*)\.0+$/) ) {
      this.data.datas[index][key] = e.detail.value.trim();
    }
    this.setData({
      datas: this.data.datas
    });
  },
  AM() {
    var params = this.data.datas[0];
    this.data.result = finance.AM(params.principal, params.rate, params.totalNumberOfPayments, 1);
    this.setData({
      result: this.data.result
    })
  },
  CAGR() {
    var params = this.data.datas[1];
    this.data.result = finance.CAGR(params.beginningValue, params.endingValue, params.numberOfPeriods);
    this.setData({
      result: this.data.result
    })
  },
  CI() {
    var params = this.data.datas[2];
    this.data.result = finance.CI(params.rate, params.compoundingsPerPeriod, params.principal, params.numberOfPeriods);
    this.setData({
      result: this.data.result
    })
  },
  DF() {
    var params = this.data.datas[3];
    this.data.result = finance.DF(params.rate, params.numberOfPeriods).join(", ");
    this.setData({
      result: this.data.result
    })
  },
  FV() {
    var params = this.data.datas[4];
    this.data.result = finance.FV(params.rate, params.cashFlow, params.numberOfPeriods);
    this.setData({
      result: this.data.result
    })
  },
  IRR() {
    var params = this.data.datas[5];
    this.data.result = finance.IRR2([/*-params.initialInvestment, */...params.cashFlows]);
    this.setData({
      result: this.data.result
    })
  },
  LR() {
    var params = this.data.datas[7];
    this.data.result = finance.LR(params.liabilities, params.debts, params.income);
    this.setData({
      result: this.data.result
    })
  },
  NPV() {
    var params = this.data.datas[8];
    this.data.result = finance.NPV(params.rate, -params.initialInvestment, ...params.cashFlows);
    this.setData({
      result: this.data.result
    })
  },
  PP() {
    var params = this.data.datas[9];
    this.data.result = finance.PP(params.numberOfPeriods, ...params.cashFlows);
    this.setData({
      result: this.data.result
    })
  },
  PV() {
    var params = this.data.datas[10];
    this.data.result = finance.PV(params.rate, params.cashFlow, params.numberOfPeriods);
    this.setData({
      result: this.data.result
    })
  },
  PI() {
    var params = this.data.datas[11];
    this.data.result = finance.PI(params.rate, -params.initialInvestment, ...params.cashFlows);
    this.setData({
      result: this.data.result
    })
  },
  ROI() {
    var params = this.data.datas[12];
    this.data.result = finance.ROI(params.initialInvestment, params.earnings);
    this.setData({
      result: this.data.result
    })
  },
  R72() {
    var params = this.data.datas[13];
    this.data.result = finance.R72(params.rate).toFixed(2);
    this.setData({
      result: this.data.result
    })
  },
  WACC() {
    var params = this.data.datas[14];
    this.data.result = finance.WACC(params.marketValueOfEquity, params.marketValueOfDebt, params.costOfEquity, params.costOfDebt, params.taxRate);
    this.setData({
      result: this.data.result
    })
  },
  PMT() {
    var params = this.data.datas[15];
    this.data.result = finance.PMT(params.rate, params.numberOfPayments, -params.principal);
    this.setData({
      result: this.data.result
    })
  },
  IAR() {
    var params = this.data.datas[16];
    this.data.result = finance.IAR(params.investmentReturn, params.inflationRate);
    this.setData({
      result: this.data.result
    })
  },
  RATE() {
    var params = this.data.datas[17];
    this.data.result = finance.RATE(params.periods, params.payment, params.present);
    this.setData({
      result: this.data.result,
      result12: (this.data.result*12).toFixed(2)
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    wx.setNavigationBarTitle({
      title: this.data.datas[options.id].name,
    })
    if (options.id == 5) {
      var irr = [];
      for (let i = 0; i < this.data.IRRArr.length; i++) {
        irr.push(this.data.IRRArr[i][2])
      }
      this.data.irr = finance.IRR2(irr);
      // console.log(irr.toString())
      this.setData({
        irr: this.data.irr
      });
    }
    this.setData({
      id: options.id
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
  onShareAppMessage: function () {
    return {
      title: '金融公式',
      path: '/pages/finance/func/func?id=' + this.data.id,
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})