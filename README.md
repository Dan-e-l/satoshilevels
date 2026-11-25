# Satoshi Levels
A small phone web app that shows how cheap or expensive Bitcoin, Ethereum and Solana are compared with their own history, and at which price levels they have found support before.

**Open the app:** https://dan-e-l.github.io/satoshilevels/

## What it shows

- **Score and zone.** Each coin gets a score from 0 to 100, built from valuation, momentum, on-chain and sentiment indicators. The score falls into one of six zones, each with a suggested size for a recurring buy (see below).
- **Buy-level ladder.** Price levels below today's price, such as the 200-week average or the realized price, with their distance from the current price.
- **Chart.** Price against the main support lines, from 3 months to 8 years.
- **Signals.** Every indicator behind the score, with today's reading and a short explanation.
- **Side by side.** The three coins in one table: score, zone, buy size, sell option and the main readings.
- **Since your last visit.** A note when a coin has changed zone or crossed a ladder level since you last opened the app.
- **Alerts.** A note when Bitcoin falls below or climbs back above its realized price (the on-chain confirmation, see below), and a banner when the US spot Bitcoin ETFs see unusually large outflows.

Prices can be shown in USD or CHF, in dark or light mode.

## Zones and buy sizes

The buy size is a multiple of your normal recurring buy. Bitcoin and the other two coins have different sizes because their history is different: for Ethereum, buying at fair value or higher paid off less than half the time.

| Score | Zone | Bitcoin | Ethereum, Solana |
| --- | --- | --- | --- |
| 85–100 | Generational buy | 3× | 3× |
| 70–84 | Strong accumulate | 2× | 2× |
| 55–69 | Accumulate | 1.5× | 1× |
| 35–54 | Fair value | 0.5× | pause |
| 20–34 | Expensive | pause | pause |
| 0–19 | Overheated | pause | pause |

**Sell option.** In Expensive you can sell 2% of your holdings per month, in Overheated 5%, keep the cash and buy back from Strong accumulate (70+). This is optional.

**Pi Cycle Top.** When this Bitcoin top signal fires, the Bitcoin score is capped at 20.

**On-chain confirmation.** Every past Bitcoin cycle bottom went below the realized price (the average price at which all coins last moved). While Bitcoin is in Generational buy but still above that level, the app says it is not yet confirmed on-chain, and it raises an alert when the price crosses the level. It doesn't change the zone.

## How well it worked in the past

Backtest of the Bitcoin model on daily data since 2015 (funding rates left out, as their history wasn't available). The figures show the share of days in each zone after which the price was higher one and two years later.

| Zone | Up after 1 year | Up after 2 years |
| --- | --- | --- |
| Generational buy | 100% | 100% |
| Strong accumulate | 96% | 100% |
| Accumulate | 94% | 100% |
| Fair value | 66% | 84% |
| Expensive | 32% | 45% |
| Overheated | 49% | 42% |

Generational buy covered about 10% of days: 2015, December 2018, March 2020, mid-2022 to early 2023, and 2026. Over 4-year periods the buy sizes lowered the average cost by about a quarter compared with buying the same amount every week. Ethereum data goes back to 2018 and gives weaker but similar results.

## Install on your phone

Open https://dan-e-l.github.io/satoshilevels/ in your phone's browser and add it to the home screen. It then opens full screen like a normal app.

**Android (Chrome):** tap the ⋮ menu, then **Install app** (or **Add to Home screen**).

**iPhone (Safari):** tap the Share button, then **Add to Home Screen**.

The app then opens full screen from its own icon and keeps the last data available offline. After an update, close the app fully and reopen it to get the new version.

## How it works

The app is a single HTML file with no build step, no server, no account and no API keys. Your browser fetches public market data directly from free sources and works out the score on your phone. Nothing is collected or sent anywhere; settings are stored only on your device.

## Data sources

| Source | Used for |
| --- | --- |
| Kraken (Binance and Bitstamp as fallbacks) | Prices and daily candles |
| bitcoin-data.com | Bitcoin MVRV Z-score, realized price and US spot ETF flows |
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

© 2026 Dan-e-l
