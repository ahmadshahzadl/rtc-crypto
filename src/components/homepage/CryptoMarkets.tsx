import React, { useRef, useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Activity, DollarSign, Globe, Star } from "lucide-react";
import InteractiveCard from "../common/InteractiveCard";
import ForexChart from "../ForexChart";

const CryptoMarkets: React.FC = () => {
  const marketsRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: marketsRef,
    offset: ["start end", "end start"],
  });

  // Parallax transforms (simplified)
  const backgroundY = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);

  // CoinMarketCap API key from .env
  const API_KEY = import.meta.env.VITE_CRYPTO_LIVE;

  // State for live data and price history for graph
  const [livePairs, setLivePairs] = useState([
    {
      pair: "BTC/USD",
      price: "0",
      change: "0",
      changePercent: "0%",
      volume: "-",
      gradient: "linear-gradient(135deg, #f7931a, #ffcc80)",
      icon: DollarSign,
      symbol: "BTC",
      history: [] as number[],
    },
    {
      pair: "XAU/USD",
      price: "0",
      change: "0",
      changePercent: "0%",
      volume: "-",
      gradient: "linear-gradient(135deg, #ffd700, #fffbe6)",
      icon: Star,
      symbol: "XAU",
      history: [] as number[],
    },
    {
      pair: "EUR/USD",
      price: "0",
      change: "0",
      changePercent: "0%",
      volume: "-",
      gradient: "linear-gradient(135deg, #6366f1, #8b5cf6)",
      icon: DollarSign,
      symbol: "EUR",
      history: [] as number[],
    },
    {
      pair: "US30",
      price: "0",
      change: "0",
      changePercent: "0%",
      volume: "-",
      gradient: "linear-gradient(135deg, #10b981, #06d6a0)",
      icon: Globe,
      symbol: "US30",
      history: [] as number[],
    },
  ]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    let isMounted = true;
    async function fetchMarketData() {
      setLoading(true);
      setError("");
      let errorMessages: string[] = [];
      let btcInfo: { price: any; percent_change_24h: any; volume_24h: any; } | undefined,
        xauInfo: { price: any; change: any; changesPercentage: any; volume: any; } | undefined,
        eurInfo: { price: any; change: any; changesPercentage: any; volume: any; } | undefined,
        us30Info: { price: any; change: any; changesPercentage: any; volume: any; } | undefined;
      try {
        // 1. Fetch BTC/USD from CoinMarketCap
        const cmcUrl = `https://pro-api.coinmarketcap.com/v1/cryptocurrency/quotes/latest?symbol=BTC&convert=USD`;
        const cmcRes = await fetch(cmcUrl, {
          headers: {
            "X-CMC_PRO_API_KEY": API_KEY,
          },
        });
        if (!cmcRes.ok) errorMessages.push("BTC/USD: CoinMarketCap API error");
        else {
          const cmcData = await cmcRes.json();
          btcInfo = cmcData?.data?.BTC?.quote?.USD;
        }
      } catch (err) {
        errorMessages.push("BTC/USD: Network error");
      }
      try {
        // XAU/USD (Gold)
        const xauUrl = `https://financialmodelingprep.com/api/v3/quotes/commodity?symbol=XAUUSD`;
        const xauRes = await fetch(xauUrl);
        if (!xauRes.ok) errorMessages.push("XAU/USD: FMP API error");
        else {
          const xauData = await xauRes.json();
          xauInfo = Array.isArray(xauData) ? xauData.find((d) => d.symbol === "XAUUSD") : null;
        }
      } catch (err) {
        errorMessages.push("XAU/USD: Network error");
      }
      try {
        // EUR/USD (Forex)
        const eurUrl = `https://financialmodelingprep.com/api/v3/quotes/forex?symbol=EURUSD`;
        const eurRes = await fetch(eurUrl);
        if (!eurRes.ok) errorMessages.push("EUR/USD: FMP API error");
        else {
          const eurData = await eurRes.json();
          eurInfo = Array.isArray(eurData) ? eurData.find((d) => d.symbol === "EURUSD") : null;
        }
      } catch (err) {
        errorMessages.push("EUR/USD: Network error");
      }
      try {
        // US30 (Dow Jones)
        const us30Url = `https://financialmodelingprep.com/api/v3/quotes/index?symbol=^DJI`;
        const us30Res = await fetch(us30Url);
        if (!us30Res.ok) errorMessages.push("US30: FMP API error");
        else {
          const us30Data = await us30Res.json();
          us30Info = Array.isArray(us30Data) ? us30Data.find((d) => d.symbol === "^DJI") : null;
        }
      } catch (err) {
        errorMessages.push("US30: Network error");
      }

      if (window && window.console) {
        console.log('BTC:', btcInfo, 'XAU:', xauInfo, 'EUR:', eurInfo, 'US30:', us30Info);
      }

      if (isMounted) {
        setLivePairs((prev) =>
          prev.map((pair) => {
            let price = "0", change = "0", changePercent = "0%", volume = "-";
            let history = pair.history || [];
            switch (pair.symbol) {
              case "BTC":
                if (btcInfo) {
                  price = Number(btcInfo.price).toFixed(2);
                  change = Number(btcInfo.percent_change_24h).toFixed(2);
                  changePercent = (Number(btcInfo.percent_change_24h) >= 0 ? "+" : "") + change + "%";
                  volume = Number(btcInfo.volume_24h).toLocaleString();
                  history = [...history, parseFloat(price)].slice(-30);
                }
                break;
              case "XAU":
                if (xauInfo) {
                  price = Number(xauInfo.price).toFixed(2);
                  // FMP: changesPercentage is percent change, change is absolute change
                  change = Number(xauInfo.change).toFixed(2);
                  changePercent = (Number(xauInfo.changesPercentage) >= 0 ? "+" : "") + Number(xauInfo.changesPercentage).toFixed(2) + "%";
                  volume = xauInfo.volume ? Number(xauInfo.volume).toLocaleString() : "-";
                  history = [...history, parseFloat(price)].slice(-30);
                }
                break;
              case "EUR":
                if (eurInfo) {
                  price = Number(eurInfo.price).toFixed(5);
                  change = Number(eurInfo.change).toFixed(5);
                  changePercent = (Number(eurInfo.changesPercentage) >= 0 ? "+" : "") + Number(eurInfo.changesPercentage).toFixed(2) + "%";
                  volume = eurInfo.volume ? Number(eurInfo.volume).toLocaleString() : "-";
                  history = [...history, parseFloat(price)].slice(-30);
                }
                break;
              case "US30":
                if (us30Info) {
                  price = Number(us30Info.price).toFixed(2);
                  change = Number(us30Info.change).toFixed(2);
                  changePercent = (Number(us30Info.changesPercentage) >= 0 ? "+" : "") + Number(us30Info.changesPercentage).toFixed(2) + "%";
                  volume = us30Info.volume ? Number(us30Info.volume).toLocaleString() : "-";
                  history = [...history, parseFloat(price)].slice(-30);
                }
                break;
              default:
                break;
            }
            return {
              ...pair,
              price,
              change,
              changePercent,
              volume,
              history,
            };
          })
        );
        // Show error only if all failed
        if (
          !btcInfo && !xauInfo && !eurInfo && !us30Info
        ) {
          setError(errorMessages.length ? errorMessages.join(' | ') : 'Failed to fetch market data');
        } else if (errorMessages.length) {
          setError(errorMessages.join(' | '));
        } else {
          setError("");
        }
      }
      if (isMounted) setLoading(false);
    }
    fetchMarketData();
    // Real-time polling every 5 seconds
    const interval = setInterval(fetchMarketData, 5000);
    return () => {
      isMounted = false;
      clearInterval(interval);
    };
  }, [API_KEY]);

  return (
    <section id="markets" ref={marketsRef} className="markets-section-3d">
      {/* 3D Background Elements */}
      <motion.div className="markets-3d-background" style={{ y: backgroundY }}>
        {/* Floating Geometric Shapes */}
        <div className="markets-floating-shapes">
          {Array.from({ length: 12 }).map((_, i) => (
            <motion.div
              key={i}
              className={`markets-shape markets-shape-${i}`}
              animate={{
                y: [0, -40, 0],
                rotateZ: [0, 360],
                rotateX: [0, 180, 0],
              }}
              transition={{
                duration: 8 + i * 0.3,
                repeat: Infinity,
                ease: "easeInOut",
                delay: i * 0.2,
              }}
            />
          ))}
        </div>

        {/* Grid Pattern */}
        <div className="markets-grid-pattern">
          {Array.from({ length: 30 }).map((_, i) => (
            <motion.div
              key={i}
              className="markets-grid-dot"
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0.2, 0.6, 0.2],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                delay: i * 0.1,
              }}
            />
          ))}
        </div>
      </motion.div>

      <div
        className="markets-container-3d flex flex-col"
        // style={{paddingTop: '4rem', paddingBottom: '4rem'}}
      >
        {/* Section Header */}
        <motion.div
          className="markets-header-3d"
          initial={{ opacity: 0, y: 50, rotateX: -30 }}
          whileInView={{ opacity: 1, y: 0, rotateX: 0 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <motion.div
            className="markets-badge-3d"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.1, rotateY: 5 }}
          >
            <div className="badge-3d-glow" />
            <Activity className="badge-3d-icon" />
            <span className="badge-3d-text">LIVE TRADING</span>
            <div className="badge-3d-indicator" />
          </motion.div>

          <motion.h2
            className="markets-title-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <motion.span
              className="markets-title-line-1"
              animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
              }}
              transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
            >
              Forex Trading
            </motion.span>
            <motion.span
              className="markets-title-line-2"
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
              viewport={{ once: true }}
            >
              Signals
            </motion.span>
          </motion.h2>

          <motion.p
            className="markets-description-3d"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.8 }}
            viewport={{ once: true }}
          >
            Get professional forex signals directly from Rao Umer's analysis.
            Track live market data and make informed trading decisions.
          </motion.p>
        </motion.div>

        {/* 3D Trading Pairs Grid */}
        <motion.div
          className="markets-pairs-3d"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="markets-pairs-grid-3d">
            {livePairs.map((pair, index) => (
              <InteractiveCard
                key={index}
                className="pair-card-3d"
                delay={index * 0.2}
              >
                <div className="pair-card-3d-glow" />

                {/* Pair Header */}
                <div className="pair-header-3d">
                  <div
                    className="pair-icon-3d"
                    style={{ background: pair.gradient }}
                  >
                    <pair.icon className="pair-icon-3d-svg" />
                  </div>

                  <div className="pair-info-3d">
                    <h3 className="pair-name-3d">{pair.pair}</h3>
                    <p className="pair-volume-3d">Vol: {pair.volume}</p>
                  </div>
                </div>

                {/* Price Data */}
                <div className="pair-price-3d">
                  <div className="pair-price-main-3d">
                    {loading ? "..." : pair.price}
                  </div>
                  <div
                    className={`pair-change-3d ${
                      pair.change.startsWith("+") ? "positive" : "negative"
                    }`}
                  >
                    <span className="pair-change-value-3d">
                      {loading ? "" : pair.change}
                    </span>
                    <span className="pair-change-percent-3d">
                      {loading ? "" : pair.changePercent}
                    </span>
                  </div>
                </div>

                {/* Real-Time Chart */}
                <div className="pair-chart-3d">
                  <ForexChart
                    pair={pair.pair}
                    currentPrice={pair.price}
                    changePercent={pair.changePercent}
                    history={pair.history}
                    className="forex-chart-mini"
                  />
                </div>

                {/* Card Border */}
                <div className="pair-card-3d-border" />
              </InteractiveCard>
            ))}
          </div>
        </motion.div>
      </div>
      {error && (
        <div className="markets-error-3d">
          <span>{error}</span>
        </div>
      )}
    </section>
  );
};

export default CryptoMarkets;
