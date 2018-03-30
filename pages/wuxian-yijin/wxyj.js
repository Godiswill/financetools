Page({
  data: {
    cities: ["北京", "上海", "深圳", "杭州", "南昌", "抚州"],
    cityIndex: 0,

    types: ["城镇", "五险", "深户一档", "城镇", "五险", "不限"],
    // typeIndex: 0,
    shebao: 3082,
    gjj: 2148,
    personTotal: '-',
    companyTotal: '-',
    total: '-',
    datas: [
      {
        city: "北京",
        shebao: { min: 3082, max: 23118 },
        gjj: { min: 2148, max: 23118 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .19,
            companyTip: "19%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .1,
            companyTip: "10%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .002,
            personTip: "0.2%",
            company: '',
            companyRate: .008,
            companyTip: "0.8%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .004,
            companyTip: "0.4%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .008,
            companyTip: "0.8%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .12,
            personTip: "12%",
            company: '',
            companyRate: .12,
            companyTip: "12%",
            total: '-'
          }
        ]
      },
      {
        city: "上海",
        shebao: { min: 3902, max: 19512 },
        gjj: { min: 2190, max: 19512 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .2,
            companyTip: "20%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .095,
            companyTip: "9.5%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .005,
            personTip: "0.5%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .0032,
            companyTip: "0.32%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .01,
            companyTip: "1%",
            total: '-'
          },
          {
            name: "残疾人保障金",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .016,
            companyTip: "1.6%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .07,
            personTip: "7%",
            company: '',
            companyRate: .07,
            companyTip: "7%",
            total: '-'
          }
        ]

      },
      {
        city: "深圳",
        shebao: { min: 2130, max: 20259 },
        gjj: { min: 2130, max: 33765 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .14,
            companyTip: "14%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .062,
            companyTip: "6.2%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: 0.005,
            personTip: "0.5",
            company: '',
            companyRate: .01,
            companyTip: "1%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .0028,
            companyTip: "0.28%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "残疾人保障金",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .004,
            companyTip: "0.4%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .05,
            personTip: "5%",
            company: '',
            companyRate: .05,
            companyTip: "5%",
            total: '-'
          }
        ]
      },
      {
        city: "杭州",
        shebao: { min: 2819.25, max: 14096.25 },
        gjj: { min: 2010, max: 19717 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .14,
            companyTip: "14%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .105,
            companyTip: "10.5%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .005,
            personTip: "0.5%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .012,
            companyTip: "1.2%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .12,
            personTip: "12%",
            company: '',
            companyRate: .12,
            companyTip: "12%",
            total: '-'
          }
        ]
      },
      {
        city: "南昌",
        shebao: { min: 2807, max: 15774 },
        gjj: { min: 1083, max: 14433 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .19,
            companyTip: "19%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .06,
            companyTip: "6%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .005,
            personTip: "0.5%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .004,
            companyTip: "0.4%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .12,
            personTip: "12%",
            company: '',
            companyRate: .12,
            companyTip: "12%",
            total: '-'
          }
        ]
      },
      {
        city: "抚州",
        shebao: { min: 2547, max: 12732 },
        gjj: { min: 1510, max: 10023 },
        detail: [
          {
            name: "养老保险",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .19,
            companyTip: "19%",
            total: '-'
          },
          {
            name: "医疗保险",
            person: '',
            personRate: .02,
            personTip: "2%",
            company: '',
            companyRate: .075,
            companyTip: "7.5%",
            total: '-'
          },
          {
            name: "失业保险",
            person: '',
            personRate: .005,
            personTip: "0.5%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "工伤保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .006,
            companyTip: "0.6%",
            total: '-'
          },
          {
            name: "生育保险",
            person: '',
            personRate: 0,
            personTip: "0%",
            company: '',
            companyRate: .005,
            companyTip: "0.5%",
            total: '-'
          },
          {
            name: "公积金",
            person: '',
            personRate: .08,
            personTip: "8%",
            company: '',
            companyRate: .08,
            companyTip: "8%",
            total: '-'
          }
        ]
      }
    ]
  },
  bindCityChange: function (e) {
    console.log('picker country 发生选择改变，携带值为', e.detail.value);
    for (let i = 0; i < this.data.datas[e.detail.value].detail.length; i++) {
      this.data.datas[e.detail.value].detail[i].person = '';
      this.data.datas[e.detail.value].detail[i].company = '';
      this.data.datas[e.detail.value].detail[i].total = '-';
    }
    this.setData({
      cityIndex: e.detail.value,
      shebao: this.data.datas[e.detail.value].shebao.min,
      gjj: this.data.datas[e.detail.value].gjj.min,
      datas: this.data.datas,
      personTotal: '-',
      companyTotal: '-',
      total: '-'
    })
  },
  calculate () {
    var o = this.data.datas[this.data.cityIndex].detail;
    var len = o.length;
    this.data.personTotal = 0;
    this.data.companyTotal = 0;
    for(let i = 0; i < len; i++) {
      var tmp = i === len-1? this.data.gjj: this.data.shebao;
      o[i].person = (tmp * o[i].personRate).toFixed(2);
      this.data.personTotal += tmp * o[i].personRate;
      o[i].company = (tmp * o[i].companyRate).toFixed(2);
      this.data.companyTotal += tmp * o[i].companyRate;
      o[i].total = (tmp * o[i].personRate + tmp * o[i].companyRate).toFixed(2);
    }
    this.data.total = (this.data.personTotal + this.data.companyTotal).toFixed(2);
    this.data.personTotal = this.data.personTotal.toFixed(2);
    this.data.companyTotal = this.data.companyTotal.toFixed(2);
    this.setData({
      datas: this.data.datas,
      personTotal: this.data.personTotal,
      companyTotal: this.data.companyTotal,
      total: this.data.total
    });
  },
  changeShebao (e) {
    var shebao = Number(e.detail.value);
    var min = this.data.datas[this.data.cityIndex].shebao.min;
    var max = this.data.datas[this.data.cityIndex].shebao.max;
    shebao = shebao !== shebao ? min: shebao;
    if( shebao < min ) shebao = min;
    else if (shebao > max) shebao = max;
    this.setData({ shebao: shebao })
  },
  changeGjj (e) {
    var gjj = Number(e.detail.value);
    var min = this.data.datas[this.data.cityIndex].gjj.min;
    var max = this.data.datas[this.data.cityIndex].gjj.max;
    gjj = gjj !== gjj ? this.data.datas[this.data.cityIndex].gjj.min: gjj;
    if (gjj < min) gjj = min;
    else if (gjj > max) gjj = max;
    this.setData({ gjj: gjj });
  },
  onShareAppMessage: function () {
    return {
      title: '五险一金',
      path: '/pages/wuxian-yijin/wxyje',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
});