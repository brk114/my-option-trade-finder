# Getting started Auto trade setup, Feature to build next: Basic Trending Stock Analysis

## Description

Develop a web application feature that fetches real-time data from the NSE (National Stock Exchange of India) for a predefined list of stocks. This feature will calculate and display stocks trending upwards or downwards based on their closing prices over the last five days. It will present a simple central pivotal range (CPR) for each stock, calculated from the previous day's high, low, and close prices.

## Acceptance Criteria

Fetch real-time stock data from an NSE API for a predefined list of stocks.
Calculate the trending direction (upward or downward) based on the closing price movement over the past five days.
Calculate and display the CPR for each stock using the formula (High + Low + Close) / 3 from the previous day's data.
Present the list of stocks, their trending direction, and their CPR on a simple web interface.

## Notes

The list of stocks can initially be a small, fixed set, allowing for expansion in the future.
Real-time data fetching may depend on the availability/accessibility of an NSE data API.
This feature sets the groundwork for more complex analyses and a more interactive user interface in future iterations.
Does this foundational feature align with your vision for the app, and shall we proceed with this as our starting point?"

## CPR

1. Calculate Central Pivotal (CPR) Range for the Day
2. Central Pivot =  (Previous day’s High + Previous day’s Low + Previous day’s Close)/3
3. Bottom pivot = (high + low) / 2
4. Top pivot = (pivot - bp) + pivot

`
def calculate_cpr(high, low, close):
    # Calculate Pivot
    pivot = (high + low + close) / 3

    # Calculate BC
    bc = (high + low) / 2

    # Calculate TC
    tc = (pivot - bc) + pivot

    return pivot, bc, tc
`

### Example usage

`
previous_high = 150.0
previous_low = 140.0
previous_close = 145.0

pivot, bc, tc = calculate_cpr(previous_high, previous_low, previous_close)
`

## EMA 21

EMA = (Current Price - Previous EMA) × Multiplier + Previous EMA

## Requirements

## NSE APIs

### Equity Historical Price

    1. Normal : https://www.nseindia.com/api/historical/cm/equity?symbol=INFY 
    2. Filtered : 
        https://www.nseindia.com/api/historical/cm/equity?symbol=INFY&series=[%22EQ%22]&from=18-05-2024&to=18-05-2024
        https://www.nseindia.com/api/historical/cm/equity?symbol=HCLTECH&series=["EQ"]&from=18-05-2024&to=18-05-2024

### Index Option chain

    1. Normal: https://www.nseindia.com/api/option-chain-indices?symbol=BANKNIFTY

### Equity Option chian

    https://www.nseindia.com/api/option-chain-equities?symbol=HCLTECH

### Specific option chat data(per second)

    https://www.nseindia.com/api/chart-databyindex?index=OPTSTKHAL30-05-2024PE4000.00 

    ```  js
    fetch("https://www.nseindia.com/api/chart-databyindex?index=OPTSTKHAL30-05-2024PE4000.00").then(x=> x.json()).then(x=> result = x.grapthData)
    result.forEach(sd=> {let dt = new Date(sd[0]); console.log(`${dt.getDate()} ${dt.getHours()}:${dt.getMinutes()}:${dt.getSeconds()} - ${sd[1]}`);})

    ```