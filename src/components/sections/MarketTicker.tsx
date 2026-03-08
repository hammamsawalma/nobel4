"use client";

const TICKERS = [
    { symbol: "S&P 500", value: "5,842.31", change: "+0.67%" },
    { symbol: "FTSE 100", value: "8,147.22", change: "+0.34%" },
    { symbol: "Gold", value: "$2,648.50", change: "+1.12%" },
    { symbol: "USD/EUR", value: "0.9214", change: "-0.08%" },
    { symbol: "10Y Gilt", value: "4.28%", change: "+0.03%" },
    { symbol: "ASX 200", value: "7,965.40", change: "+0.52%" },
    { symbol: "Nikkei 225", value: "38,912.70", change: "+1.04%" },
    { symbol: "Brent Crude", value: "$78.41", change: "-0.22%" },
];

export function MarketTicker() {
    const items = [...TICKERS, ...TICKERS]; // duplicate for seamless loop

    return (
        <div className="bg-forest-light/50 border-y border-copper/10 overflow-hidden py-3">
            <div className="market-ticker-scroll flex whitespace-nowrap">
                {items.map((ticker, i) => (
                    <span key={i} className="inline-flex items-center gap-2 mx-6 text-sm">
                        <span className="text-parchment-light/60 font-medium">
                            {ticker.symbol}
                        </span>
                        <span className="text-parchment-light">{ticker.value}</span>
                        <span
                            className={
                                ticker.change.startsWith("+")
                                    ? "text-emerald-400"
                                    : "text-rose-400"
                            }
                        >
                            {ticker.change}
                        </span>
                        <span className="text-copper/30 ml-4">|</span>
                    </span>
                ))}
            </div>

            <style jsx>{`
        .market-ticker-scroll {
          animation: ticker-scroll 40s linear infinite;
        }
        @keyframes ticker-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .market-ticker-scroll:hover {
          animation-play-state: paused;
        }
      `}</style>
        </div>
    );
}
