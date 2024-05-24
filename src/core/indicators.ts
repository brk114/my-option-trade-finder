export interface CPR {
  top: number;
  pivot: number;
  bottom: number;
}

const getCPR = (high: number, low: number, close: number): CPR => {
  let cpr = {} as CPR;
  cpr.pivot = (high + low + close) / 3;

  // Calculate BottomCentral
  cpr.bottom = (high + low) / 2;

  //    Calculate TC
  cpr.top = cpr.pivot - cpr.bottom + cpr.pivot;

  return cpr;
};

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
