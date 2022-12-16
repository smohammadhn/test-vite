import {numberWithCommas} from "./numberWithCommas";

export function savingMoneyCalculator(initialAmount, percent = 18, duration = 1, extraAdditionPerMonth = 0) {
  let totalMonth = parseInt(duration) * 12
  let result = initialAmount

  for(let i = 1; i <= totalMonth; i++ ) {
    let profit = (result * percent) / 1200

    result += profit + extraAdditionPerMonth

    console.log(`${i}:>> `, numberWithCommas(parseInt(result)))
  }

  console.log('---- total ----')
  console.log(numberWithCommas(parseInt(result)))

}
