const STATUS = {
  INSUFFICIENT: "INSUFFICIENT_FUNDS",
  CLOSED: "CLOSED",
  OPEN: "OPEN",
};

const CURRENTCY = {
  ONE_HUNDRED: 100,
  TWENTY: 20,
  TEN: 10,
  FIVE: 5,
  ONE: 1,
  QUARTER: 0.25,
  DIME: 0.1,
  NICKEL: 0.05,
  PENNY: 0.01,
};

function round2Decimal(num) {
  return Math.round(num * 100) / 100;
}

function checkCashRegister(price, cash, cidArray) {
  // change cid 2d array to object (easy to coding)
  const cid = {};
  for (let arr of cidArray) {
    cid[arr[0]] = arr[1];
  }

  let change = cash - price;
  const result = {};
  if (change < 0) {
    // NOT ENOUGH MONEY TO PAY CASE :/
  } else {
    result.change = [];
    // find able currency to change
    const ableChanges = Object.keys(CURRENTCY).filter(
      (key) => CURRENTCY[key] <= change
    );

    for (let currency of ableChanges) {
      while (
        change - CURRENTCY[currency] >= 0 &&
        cid[currency] >= CURRENTCY[currency]
      ) {
        // remove from cid
        cid[currency] -= CURRENTCY[currency];
        cid[currency] = round2Decimal(cid[currency]);
        // remove from change
        change -= CURRENTCY[currency];
        change = round2Decimal(change);

        // add to result.change
        if (result.change.some((arr) => arr[0] === currency)) {
          let currencyArr = result.change.find((arr) => arr[0] === currency);
          currencyArr[1] += CURRENTCY[currency];
          currencyArr[1] = round2Decimal(currencyArr[1]);
        } else {
          result.change.push([currency, round2Decimal(CURRENTCY[currency])]);
        }
      }
    }

    if (change === 0) {
      // check if cid is empty
      if (Object.values(cid).every((value) => value === 0)) {
        result.change = cidArray;
        result.status = STATUS.CLOSED;
      } else {
        result.status = STATUS.OPEN;
      }
    } else if (change > 0) {
      result.change = [];
      result.status = STATUS.INSUFFICIENT;
    }
  }

  return result;
}

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

// console.log(
//   checkCashRegister(3.26, 100, [
//     ["PENNY", 1.01],
//     ["NICKEL", 2.05],
//     ["DIME", 3.1],
//     ["QUARTER", 4.25],
//     ["ONE", 90],
//     ["FIVE", 55],
//     ["TEN", 20],
//     ["TWENTY", 60],
//     ["ONE HUNDRED", 100],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.01],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );

// console.log(
//   checkCashRegister(19.5, 20, [
//     ["PENNY", 0.5],
//     ["NICKEL", 0],
//     ["DIME", 0],
//     ["QUARTER", 0],
//     ["ONE", 0],
//     ["FIVE", 0],
//     ["TEN", 0],
//     ["TWENTY", 0],
//     ["ONE HUNDRED", 0],
//   ])
// );
