# Satoshi Levels
A small phone web app that shows how cheap or expensive Bitcoin, Ethereum and Solana are compared with their own history, and at which price levels they have found support before.

**Open the app:** https://dan-e-l.github.io/satoshilevels/

## What it shows

- **Score and zone.** Each coin gets a score from 0 to 100, built from valuation, momentum, on-chain and sentiment indicators. The score falls into one of six zones, from Overheated to Generational buy, each with a suggested size for a recurring buy.
- **Buy-level ladder.** Price levels below today's price, such as the 200-week average or the realized price, with their distance from the current price.
- **Chart.** Price against the main support lines, from 3 months to 4 years.
- **Signals.** Every indicator behind the score, with today's reading and a short explanation.
- **Since your last visit.** A note when a coin has changed zone or reached a ladder level since you last opened the app.

Prices can be shown in USD or CHF, in dark or light mode.

## Install on your phone

Open https://dan-e-l.github.io/satoshilevels/ in your phone's browser and add it to the home screen. It then opens full screen like a normal app.

**Android (Chrome):** tap the ⋮ menu, then **Install app** (or **Add to Home screen**).

**iPhone (Safari):** tap the Share button, then **Add to Home Screen**.

The app then opens full screen from its own icon and keeps the last data available offline.

## How it works

The app is a single HTML file with no build step, no server, no account and no API keys. Your browser fetches public market data directly from free sources and works out the score on your phone. Nothing is collected or sent anywhere; settings are stored only on your device.

## Data sources

| Source | Used for |
| --- | --- |
| Kraken (Binance and Bitstamp as fallbacks) | Prices and daily candles |
| bitcoin-data.com | Bitcoin MVRV Z-score and realized price |
| Coin Metrics (community API) | Ethereum MVRV and realized price; fee data as a fallback |
| blockchain.com | Bitcoin miner revenue (Puell Multiple) and thermocap |
| mempool.space | Bitcoin hashrate |
| DefiLlama | Ethereum fee income; value locked on Ethereum and Solana |
| Binance, Bybit and OKX | Perpetual funding rates (the first one that answers is used) |
| alternative.me | Fear & Greed Index |
| CoinGecko | Bitcoin dominance |
| Frankfurter and open.er-api.com | USD to CHF exchange rate |

These are free public services, so some run a few days behind or are slow now and then. The app tries a fallback where one exists, keeps the last good reading on your device, and says on screen when a reading is not from today.

## Disclaimer

Past behaviour doesn't guarantee future behaviour. This is a decision aid, not financial advice.
