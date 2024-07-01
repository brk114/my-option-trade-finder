export interface CPR {
  top: number;
  pivot: number;
  bottom: number;
}

/**
 * Calculates and returns the CPR values for a given Symbol.
 * If the values are from last session, return the CPR for next session.
 * If the values are from last week, return the CPR for next week.  
 * @param previousHigh Previous high value of the Symbol
 * @param previousLow Previous low value of the Symbol
 * @param previousClose Previous close value of the Symbol
 * @returns CPR range value (pivot: Central Pivot, top: Central Top Pivot and bottom: Central Bottom Pivot)
 */
const getCPR = (
  previousHigh: number,
  previousLow: number,
  previousClose: number
): CPR => {
  let cpr = {} as CPR;
  cpr.pivot = (previousHigh + previousLow + previousClose) / 3;

  // Calculate BottomCentral
  cpr.bottom = (previousHigh + previousLow) / 2;

  //    Calculate TC
  cpr.top = cpr.pivot - cpr.bottom + cpr.pivot;

  return cpr;
};

/**
 *
 * @param prices
 * @param period
 * @returns
 */
const getEMA = (prices: number[], period: number): number => {
  const k = 2 / (period + 1);
  let ema = prices[0];

  for (let i = 1; i < prices.length; i++) {
    ema = prices[i] * k + ema * (1 - k);
  }

  return ema;
};

export const indicators = {
  getCPR,
  getEMA21: (prices: number[]) => getEMA(prices, 21),
  getEMA50: (prices: number[]) => getEMA(prices, 50),
  getEMA100: (prices: number[]) => getEMA(prices, 100),
  getEMA200: (prices: number[]) => getEMA(prices, 200),
};
