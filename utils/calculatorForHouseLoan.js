'use strict';

/**
 * 等额本金、等额本息还款方式详细对比
 * 带有Ai后缀为等额本息还款方式，即average interest
 * 带有Ap后缀为等额本金还款方式，即average principal
 */

// 格式化金额，保留两位小数
const formatFloat = function (input, decimals) {
  let formatFloatNumb = Math.round(input * Math.pow(10, decimals)) / Math.pow(10, decimals);
  return formatFloatNumb.toFixed(decimals);
};

// 涉及计算公式
const loanFormula = {
  // 等额本息每月还款金额
  getRepayPerMouPriceAi: function (loanTotal, interestRatePerMou, totalMouths) {
    /**
     * @param loanTotal         总贷款
     * @param interestRatePerMou   月利率
     * @param totalMouths            总月数
     * 每月还款金额 = [总贷款 × 月利率 × (1 + 月利率)^总月数] ÷ [(1 + 月利率)^总月数 - 1]
     */

    // 简化公式，创建变量x
    let x = Math.pow((1 + interestRatePerMou), totalMouths);

    return (loanTotal * interestRatePerMou * x / (x - 1));
  },

  // 等额本息第i个月还款中利息部分
  getRepayInterestPerMouAi: function (i, loanTotal, interestRatePerMou, totalMouths) {
    /**
     * @param i   第(i + 1)个月
     * 第i个月还款中利息部分 = 总贷款 × 月利率 × {(1 + 月利率)^i - (1 + 月利率)^总月数 * [(1 + 月利率)^i - 1] ÷ [(1 + 月利率)^总月数 - 1]}
     */

    // 简化公式，创建变量x、y
    let [x, y] = [Math.pow((1 + interestRatePerMou), i), Math.pow((1 + interestRatePerMou), totalMouths)];

    return (loanTotal * interestRatePerMou * (x - y * (x - 1) / (y - 1)));
  }
};

const calculate = function (loanTotal, interestRatePerMou, totalMouths) {

  // 每月需还利息、本金、剩余待还本金、已还总金额
  let repayPerMouObj = {
    // 等额本息
    repayPerMouObjAi: {
      repayInterestPerMouArrAi: [],
      repayPrincipalPerMouArrAi: [],
      balanceArrAi: [],
      totalRepaidArrAi: [],
      totalRepayPerMouArrAi: []
    },

    // 等额本金
    repayPerMouObjAp: {
      repayInterestPerMouArrAp: [],
      repayPerMouPriceArrAp: [],
      balanceArrAp: [],
      totalRepaidArrAp: [],
      totalRepayPerMouArrAp: []
    }
  };

  // 等额本息月均还本带息
  let repayPerMouAi = loanFormula.getRepayPerMouPriceAi(loanTotal, interestRatePerMou, totalMouths);

  // 等额本息初始化剩余待还本金
  let balancePerMouAi = loanTotal;

  // 等额本息初始化已还总金额
  let totalRepaidPerMouAi = 0;

  // 等额本金每月还款本金
  let repayPrincipalPerMouAp = loanTotal / totalMouths;

  // 等额本金每月还款递减金额
  let decreasePerMouAp = repayPrincipalPerMouAp * interestRatePerMou;

  // 等额本金初始化剩余待还本金
  let balancePerMouAp = loanTotal;

  // 等额本金初始化已还总金额
  let totalRepaidPerMouAp = 0;

  const getRepayPerMouObj = function () {
    for (let i = 0; i < totalMouths; i++) {
      // 等额本息第(i+1)个月需还利息
      let repayInterestPerMouAi = loanFormula.getRepayInterestPerMouAi(i, loanTotal, interestRatePerMou, totalMouths);

      // 等额本息第(i+1)个月需还本金：月均还本带息 - 利息部分
      let repayPrincipalPerMouAi = repayPerMouAi - repayInterestPerMouAi;

      // 等额本息第(i+1)个月待还本金：第i个月剩余待还本金 - 第(i + 1)个月所还本金，即上月剩余待还本金 - 当月已还本金
      balancePerMouAi = balancePerMouAi - repayPrincipalPerMouAi;

      // 等额本息第(i+1)个月已还总金额
      totalRepaidPerMouAi = totalRepaidPerMouAi + repayPerMouAi;

      // 等额本金第(i+1)个月若提前还款实际支付
      let totalRepayPerMouAi = balancePerMouAi + totalRepaidPerMouAi;

      // 拼接等额本息数组，包括各月份需还利息、本金及剩余待还本金
      repayPerMouObj.repayPerMouObjAi.repayInterestPerMouArrAi.push(formatFloat(repayInterestPerMouAi, 2));
      repayPerMouObj.repayPerMouObjAi.repayPrincipalPerMouArrAi.push(formatFloat(repayPrincipalPerMouAi, 2));
      repayPerMouObj.repayPerMouObjAi.balanceArrAi.push(formatFloat(balancePerMouAi, 2));
      repayPerMouObj.repayPerMouObjAi.totalRepaidArrAi.push(formatFloat(totalRepaidPerMouAi, 2));
      repayPerMouObj.repayPerMouObjAi.totalRepayPerMouArrAi.push(formatFloat(totalRepayPerMouAi, 2));

      // 等额本金第(i+1)个月需还利息
      let repayInterestPerMouAp = loanTotal * interestRatePerMou * (1 - (i - 1) / totalMouths);

      // 等额本金第(i+1)个月还本带息
      let repayPerMouPriceAp = repayPrincipalPerMouAp + repayInterestPerMouAp;

      // 等额本金第(i+1)个月剩余待还本金
      balancePerMouAp = balancePerMouAp - repayPrincipalPerMouAp;

      // 等额本金第(i+1)个月总还本带息
      totalRepaidPerMouAp = totalRepaidPerMouAp + repayPerMouPriceAp;

      // 等额本金第(i+1)个月若提前还款实际支付
      let totalRepayPerMouAp = balancePerMouAp + totalRepaidPerMouAp;

      // 拼接等额本金数组，包括各月份需还利息、本金及剩余待还本金
      repayPerMouObj.repayPerMouObjAp.repayInterestPerMouArrAp.push(formatFloat(repayInterestPerMouAp, 2));
      repayPerMouObj.repayPerMouObjAp.repayPerMouPriceArrAp.push(formatFloat(repayPerMouPriceAp, 2));
      repayPerMouObj.repayPerMouObjAp.balanceArrAp.push(formatFloat(balancePerMouAp, 2));
      repayPerMouObj.repayPerMouObjAp.totalRepaidArrAp.push(formatFloat(totalRepaidPerMouAp, 2));
      repayPerMouObj.repayPerMouObjAp.totalRepayPerMouArrAp.push(formatFloat(totalRepayPerMouAp, 2));
    }
    return repayPerMouObj;
  };
  getRepayPerMouObj();

  // 等额本息总还本带息： 月均还本带息 × 总月数
  let totalRepayAi = repayPerMouAi * totalMouths;

  // 等额本息总还款利息： 总还本带息 - 总贷款额
  let totalInterestAi = totalRepayAi - loanTotal;

  // 等额本金总还款金额（直接从等额本金数组中获取）
  const totalRepayPriceAp = repayPerMouObj.repayPerMouObjAp.totalRepaidArrAp[repayPerMouObj.repayPerMouObjAp.totalRepaidArrAp.length - 1];

  // 等额本金总还款利息： 总还本带息 - 总贷款额
  const totalInterestAp = totalRepayPriceAp - loanTotal;

  return {
    loanTotal: formatFloat(loanTotal, 2), //贷款总额
    totalInterestAi: formatFloat(totalInterestAi, 2), //等额本息总还款利息
    totalRepayAi: formatFloat(totalRepayAi, 2), //总还本带息
    repayPerMouAi: formatFloat(repayPerMouAi, 2), //等额本息月均还本带息
    totalInterestAp: formatFloat(totalInterestAp, 2), //等额本金总还款利息
    totalRepayPriceAp: formatFloat(totalRepayPriceAp, 2), //等额本金总还款金额
    //等额本金每月所还本金
    repayPrincipalPerMouAp: formatFloat(repayPrincipalPerMouAp, 2),
    //等额本金第一个月还款
    repayPerMouthAp: formatFloat(repayPerMouObj.repayPerMouObjAp.repayPerMouPriceArrAp[0], 2),
    //之后每个月递减额
    decreasePerMouAp: formatFloat(decreasePerMouAp, 2),
    //等额本息详情
    repayPerMouObjAi: repayPerMouObj.repayPerMouObjAi,
    //等额本金详情
    repayPerMouObjAp: repayPerMouObj.repayPerMouObjAp
  }

};

module.exports = {
  calculate: calculate
};
