Page({
  data: {
    grids: [
      { key: 0, abbr: "0-AM", name: "Amortization" },
      { key: 1, abbr: "1-CAGR", name: "Compound Annual Growth Rate" },
      { key: 2, abbr: "2-CI", name: "Compound Interest" },
      { key: 3, abbr: "3-DF", name: "Discount Factor" },
      { key: 4, abbr: "4-FV", name: "Future Value" },
      { key: 5, abbr: "5-IRR", name: "Internal Rate of Return" },
      { key: 6, abbr: "6-XIRR", name: "..." },
      { key: 7, abbr: "7-LR", name: "Leverage Ratio" },
      { key: 8, abbr: "8-NPV", name: "Net Present Value" },
      { key: 9, abbr: "9-PP", name: "Payback Period" },
      { key: 10, abbr: "10-PV", name: "Present Value" },
      { key: 11, abbr: "11-PI", name: "Profitability Index" },
      { key: 12, abbr: "12-ROI", name: "Return on Investment" },
      { key: 13, abbr: "13-R72", name: "Rule of 72" },
      { key: 14, abbr: "14-WACC", name: "Weighted Average Cost of Capital" },
      { key: 15, abbr: "15-PMT", name: "Loan Payment Per Period" },
      { key: 16, abbr: "16-IAR", name: "Inflation-adjusted Return" },
      { key: 17, abbr: "17-RATE", name: "RATE" }
    ]
  },
  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
    return {
      title: '金融公式',
      path: '/pages/finance/finance',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
});