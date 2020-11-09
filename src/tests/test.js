const assert = require('assert');
import { loanTypeCalculator } from '../util/loanTypeCalculator';
import { houseLoan } from '../util/loanCalculators';

const mockHouse = {
  type: {
    id: 0,
    name: 'House',
    interest: 3.5,
  },
  amount: 3000,
  years: 0.25,
}

const mockHouseResult = [
    {
      instalment: 1,
      interestPayment: 8.75,
      principalLeft: 2000,
      principalPayment: 1000,
      totalPayment: 1008.75
    },
    {
      instalment: 2,
      interestPayment: 5.833333333333334,
      principalLeft: 1000,
      principalPayment: 1000,
      totalPayment: 1005.8333333333334
    },
    {
      instalment: 3,
      interestPayment: 2.916666666666667,
      principalLeft: 0,
      principalPayment: 1000,
      totalPayment: 1002.9166666666666
    }
  ]

describe('validating', () => {
  it('exported functions', () => {
    assert.strictEqual(typeof loanTypeCalculator, 'function', 'loanTypeCalculator is not exported' );
    assert.strictEqual(typeof houseLoan, 'function', 'houseLoan is not exported' );
  });
});

describe('loanTypeCalculator function', () => {
  it('House loan type', () => assert.deepStrictEqual(loanTypeCalculator(mockHouse), houseLoan(mockHouse.amount, mockHouse.years)));
});
describe('houseLoan function', () => {
  it('House loan type', () => assert.deepStrictEqual(houseLoan(mockHouse.amount, mockHouse.years), mockHouseResult));
});