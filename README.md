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

## Install on an iPhone

1. Open the link above in Safari.
2. Tap the Share button, then "Add to Home Screen".

The app then opens full screen from its own icon and keeps the last data available offline.

## How it works

The app is a single HTML file with no build step and no server. Your browser fetches public market data directly from the sources (Kraken, with Binance and Bitstamp as fallbacks, plus mempool.space, blockchain.com, bitcoin-data.com, Coin Metrics, DefiLlama, CoinGecko, alternative.me and OKX). Nothing is collected or sent anywhere; settings are stored only on your device.

## Disclaimer

Past behaviour doesn't guarantee future behaviour. This is a decision aid, not financial advice.
