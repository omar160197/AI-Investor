// ── Mock data for the InvestWhat homepage ─────────────────────────────
// All values are fabricated for demo purposes only.

export type Trend = "up" | "down"

function spark(seed: number, points = 24, trend: Trend = "up"): number[] {
  const out: number[] = []
  let v = 50 + (seed % 30)
  for (let i = 0; i < points; i++) {
    const drift = trend === "up" ? 0.4 : -0.4
    const noise = Math.sin(i * 1.3 + seed) * 3 + Math.cos(i * 0.6 + seed) * 2
    v = Math.max(8, v + drift + noise)
    out.push(Number(v.toFixed(2)))
  }
  return out
}

export interface MarketIndex {
  symbol: string
  name: string
  value: string
  change: number
  data: number[]
}

export const marketIndices: MarketIndex[] = [
  { symbol: "S&P 500", name: "S&P 500", value: "7,499.36", change: 0.79, data: spark(3, 24, "up") },
  { symbol: "NASDAQ", name: "Nasdaq", value: "26,213.71", change: 1.52, data: spark(7, 24, "up") },
  { symbol: "DOW", name: "Dow Jones", value: "52,319.20", change: 0.26, data: spark(11, 24, "up") },
  { symbol: "BTC", name: "Bitcoin", value: "58,604.60", change: -2.75, data: spark(5, 24, "down") },
  { symbol: "GOLD", name: "Gold", value: "4,021.80", change: -0.41, data: spark(9, 24, "down") },
  { symbol: "ETH", name: "Ethereum", value: "3,118.42", change: 1.18, data: spark(13, 24, "up") },
  { symbol: "OIL", name: "Crude Oil", value: "84.12", change: 2.04, data: spark(15, 24, "up") },
  { symbol: "VIX", name: "Volatility", value: "13.92", change: -3.6, data: spark(17, 24, "down") },
]

export interface PortfolioPoint {
  label: string
  value: number
}

export const portfolioHistory: PortfolioPoint[] = Array.from({ length: 30 }, (_, i) => {
  const base = 612000
  const v = base + i * 2400 + Math.sin(i * 0.7) * 9000 + Math.cos(i * 0.3) * 5000
  return { label: `D${i + 1}`, value: Math.round(v) }
})

export const portfolioSummary = {
  user: "bahaa133",
  totalValue: 688030,
  todayChange: 12480,
  todayChangePct: 1.85,
  allTimeReturnPct: 1416.7,
  bestPerformer: "Savings",
}

export interface QuickAction {
  title: string
  description: string
  icon: string
  accent: boolean
  cta: string
}

export const quickActions: QuickAction[] = [
  {
    title: "Browse portfolios",
    description: "See what top investors and the community are buying right now.",
    icon: "compass",
    accent: false,
    cta: "Explore",
  },
  {
    title: "Try a fantasy portfolio",
    description: "Practice your strategy with zero real dollars on the line.",
    icon: "gamepad",
    accent: false,
    cta: "Play",
  },
  {
    title: "Build your own",
    description: "Hand-pick the stocks, ETFs and funds you believe in.",
    icon: "blocks",
    accent: false,
    cta: "Start building",
  },
  {
    title: "Build with AI",
    description: "Describe your goals in plain English, get a tailored portfolio.",
    icon: "sparkles",
    accent: true,
    cta: "Generate",
  },
]

export const marketSentiment = {
  score: 50,
  label: "Neutral",
  advancing: 248,
  declining: 252,
  unchanged: 41,
}

export interface Earning {
  symbol: string
  name: string
  date: string
  session: "BMO" | "AMC"
  epsEstimate: string
}

export const earnings: Earning[] = [
  { symbol: "TSM", name: "Taiwan Semi", date: "Jul 16", session: "AMC", epsEstimate: "1.92" },
  { symbol: "GOOGL", name: "Alphabet A", date: "Jul 23", session: "AMC", epsEstimate: "1.84" },
  { symbol: "MSFT", name: "Microsoft", date: "Jul 29", session: "AMC", epsEstimate: "3.10" },
  { symbol: "AAPL", name: "Apple", date: "Jul 30", session: "AMC", epsEstimate: "1.41" },
  { symbol: "AMZN", name: "Amazon", date: "Aug 01", session: "AMC", epsEstimate: "1.03" },
]

export const aiSuggestions: string[] = [
  "Give me a fundamentals overview for AAPL",
  "What are the support and resistance levels for TSLA?",
  "Show my portfolios",
  "Best semiconductor plays right now",
  "Latest news and sentiment for NVDA",
  "Compare AAPL to its top 3 peers",
]

export interface MyPortfolio {
  name: string
  holdings: number
  value: number
  change: number
  tag: string
  data: number[]
}

export const myPortfolios: MyPortfolio[] = [
  { name: "Online Safety", holdings: 3, value: 15693, change: 4.2, tag: "Cybersecurity", data: spark(2, 20, "up") },
  { name: "ONE FOR ALL", holdings: 6, value: 222962, change: 1.1, tag: "Diversified", data: spark(8, 20, "up") },
  { name: "Savings", holdings: 10, value: 383840, change: -0.6, tag: "Long term", data: spark(4, 20, "down") },
  { name: "Moonshots", holdings: 5, value: 65535, change: 7.8, tag: "High risk", data: spark(6, 20, "up") },
]

export interface CommunityPortfolio {
  name: string
  description: string
  returnPct: number
  score: number
  curated: boolean
  data: number[]
}

export const communityPortfolios: CommunityPortfolio[] = [
  {
    name: "Nancy Pelosi Political Portfolio",
    description: "High-profile public disclosure portfolio reconstructed from filings.",
    returnPct: 245.6,
    score: 64,
    curated: true,
    data: spark(21, 24, "up"),
  },
  {
    name: "Wasserman Schultz Portfolio",
    description: "Public disclosure portfolio tracking congressional trades.",
    returnPct: 162.9,
    score: 60,
    curated: true,
    data: spark(23, 24, "up"),
  },
  {
    name: "AI & The Future",
    description: "Medium-to-high risk. The chips and software powering the AI era.",
    returnPct: 88.6,
    score: 57,
    curated: true,
    data: spark(25, 24, "up"),
  },
]

export interface Trending {
  symbol: string
  price: string
  change: number
}

export const trending: Trending[] = [
  { symbol: "NKE", price: "76.40", change: 3.1 },
  { symbol: "BTC-USD", price: "58,604", change: -2.75 },
  { symbol: "CRCL", price: "31.08", change: 5.6 },
  { symbol: "AMD", price: "182.55", change: 2.2 },
  { symbol: "STZ", price: "242.18", change: -1.1 },
  { symbol: "AMBA", price: "64.92", change: 8.4 },
  { symbol: "RZLV", price: "5.33", change: 12.7 },
  { symbol: "PRGS", price: "58.71", change: 0.9 },
  { symbol: "ETH-USD", price: "3,118", change: 1.18 },
  { symbol: "XRP-USD", price: "0.62", change: -0.4 },
  { symbol: "NVDA", price: "128.44", change: 4.3 },
  { symbol: "TSLA", price: "249.10", change: -1.8 },
]

export interface NewsArticle {
  category: string
  title: string
  summary: string
  time: string
  region: string
  sentiment: "Bullish" | "Bearish" | "Neutral"
  impact: number
}

export const news: NewsArticle[] = [
  {
    category: "Fintech",
    title: "Klarna Integrates Flexible Payments into Google's AI Platforms",
    summary:
      "Klarna is embedding its buy-now-pay-later infrastructure into Google's AI ecosystem, offering flexible payment options inside the Gemini app and Google Search.",
    time: "2h ago",
    region: "North America",
    sentiment: "Bullish",
    impact: 72,
  },
  {
    category: "Retail",
    title: "Sycamore Partners Aims to Double Walgreens' Profitability to $4B",
    summary:
      "The private equity firm plans to double Walgreens' EBITDA to $4 billion over the next several years following its take-private acquisition.",
    time: "4h ago",
    region: "North America",
    sentiment: "Neutral",
    impact: 58,
  },
  {
    category: "Oil",
    title: "Red Sea Oil Route at Risk Amid Houthi Threats, Iran Conflict Escalates",
    summary:
      "Escalating Middle East tensions threaten to tighten global oil supply as the Strait of Hormuz remains contested with no clear timeline for resolution.",
    time: "6h ago",
    region: "Middle-East",
    sentiment: "Bearish",
    impact: 81,
  },
  {
    category: "Earnings",
    title: "Nvidia Beats on Data-Center Revenue as AI Demand Stays Hot",
    summary:
      "Nvidia posted record data-center revenue, reinforcing its dominance in AI accelerators and lifting the broader semiconductor complex in after-hours trading.",
    time: "8h ago",
    region: "North America",
    sentiment: "Bullish",
    impact: 88,
  },
]

export const newsCategories = ["Latest", "Markets", "Economics", "Crypto", "Fintech", "Earnings"]
export const newsRegions = [
  "All Regions",
  "North America",
  "European Union",
  "Asia Pacific",
  "Latin America",
  "Middle-East",
]

export const learnArticles: NewsArticle[] = news.slice(0, 3)

// ── Market movers (gainers / losers / most active) ────────────────────
export interface Mover {
  symbol: string
  name: string
  price: string
  change: number
  volume: string
  data: number[]
}

export const movers: Record<"gainers" | "losers" | "active", Mover[]> = {
  gainers: [
    { symbol: "RZLV", name: "Rezolve AI", price: "5.33", change: 12.7, volume: "48.2M", data: spark(31, 20, "up") },
    { symbol: "AMBA", name: "Ambarella", price: "64.92", change: 8.4, volume: "12.1M", data: spark(33, 20, "up") },
    { symbol: "CRCL", name: "Circle Internet", price: "31.08", change: 5.6, volume: "22.7M", data: spark(35, 20, "up") },
    { symbol: "NVDA", name: "NVIDIA", price: "128.44", change: 4.3, volume: "212M", data: spark(37, 20, "up") },
    { symbol: "NKE", name: "Nike", price: "76.40", change: 3.1, volume: "18.9M", data: spark(39, 20, "up") },
  ],
  losers: [
    { symbol: "BTC-USD", name: "Bitcoin", price: "58,604", change: -2.75, volume: "31.4B", data: spark(41, 20, "down") },
    { symbol: "TSLA", name: "Tesla", price: "249.10", change: -1.8, volume: "98.3M", data: spark(43, 20, "down") },
    { symbol: "STZ", name: "Constellation", price: "242.18", change: -1.1, volume: "3.2M", data: spark(45, 20, "down") },
    { symbol: "GOLD", name: "Gold Spot", price: "4,021", change: -0.41, volume: "—", data: spark(47, 20, "down") },
    { symbol: "XRP-USD", name: "XRP", price: "0.62", change: -0.4, volume: "1.8B", data: spark(49, 20, "down") },
  ],
  active: [
    { symbol: "NVDA", name: "NVIDIA", price: "128.44", change: 4.3, volume: "212M", data: spark(51, 20, "up") },
    { symbol: "TSLA", name: "Tesla", price: "249.10", change: -1.8, volume: "98.3M", data: spark(53, 20, "down") },
    { symbol: "AAPL", name: "Apple", price: "231.40", change: 0.9, volume: "61.5M", data: spark(55, 20, "up") },
    { symbol: "AMD", name: "Adv. Micro", price: "182.55", change: 2.2, volume: "54.7M", data: spark(57, 20, "up") },
    { symbol: "F", name: "Ford Motor", price: "11.82", change: -0.6, volume: "52.1M", data: spark(59, 20, "down") },
  ],
}

// ── Sector heatmap ────────────────────────────────────────────────────
export interface Sector {
  name: string
  change: number
  weight: number
}

export const sectors: Sector[] = [
  { name: "Technology", change: 2.4, weight: 30 },
  { name: "Financials", change: 0.8, weight: 14 },
  { name: "Healthcare", change: -0.6, weight: 13 },
  { name: "Cons. Disc.", change: 1.2, weight: 11 },
  { name: "Communication", change: 1.9, weight: 9 },
  { name: "Industrials", change: 0.3, weight: 8 },
  { name: "Energy", change: -1.4, weight: 5 },
  { name: "Cons. Staples", change: -0.2, weight: 5 },
  { name: "Utilities", change: 0.5, weight: 3 },
  { name: "Materials", change: -0.9, weight: 2 },
]

// ── Watchlist ─────────────────────────────────────────────────────────
export interface WatchItem {
  symbol: string
  name: string
  price: string
  change: number
  data: number[]
}

export const watchlist: WatchItem[] = [
  { symbol: "AAPL", name: "Apple Inc.", price: "231.40", change: 0.9, data: spark(61, 16, "up") },
  { symbol: "NVDA", name: "NVIDIA", price: "128.44", change: 4.3, data: spark(63, 16, "up") },
  { symbol: "TSLA", name: "Tesla", price: "249.10", change: -1.8, data: spark(65, 16, "down") },
  { symbol: "MSFT", name: "Microsoft", price: "451.22", change: 1.4, data: spark(67, 16, "up") },
  { symbol: "AMZN", name: "Amazon", price: "201.88", change: -0.3, data: spark(69, 16, "down") },
]

// ── Smart money: congressional & insider trades ───────────────────────
export interface SmartTrade {
  person: string
  role: string
  symbol: string
  action: "Buy" | "Sell"
  amount: string
  date: string
}

export const smartMoney: SmartTrade[] = [
  { person: "Nancy Pelosi", role: "House Rep.", symbol: "NVDA", action: "Buy", amount: "$1M–5M", date: "Jul 12" },
  { person: "M. McCaul", role: "House Rep.", symbol: "MSFT", action: "Buy", amount: "$250K–500K", date: "Jul 10" },
  { person: "T. Carper", role: "Senator", symbol: "AAPL", action: "Sell", amount: "$100K–250K", date: "Jul 09" },
  { person: "J. Huizenga", role: "House Rep.", symbol: "AMD", action: "Buy", amount: "$50K–100K", date: "Jul 08" },
  { person: "D. Crenshaw", role: "House Rep.", symbol: "META", action: "Buy", amount: "$15K–50K", date: "Jul 05" },
]

// ── Prediction markets (Polymarket-style) ─────────────────────────────
export interface PredictionMarket {
  question: string
  category: string
  yes: number
  volume: string
}

export const predictionMarkets: PredictionMarket[] = [
  { question: "Fed cuts rates at next FOMC meeting?", category: "Macro", yes: 68, volume: "$4.2M" },
  { question: "S&P 500 closes above 7,600 this month?", category: "Markets", yes: 41, volume: "$2.8M" },
  { question: "Bitcoin above $65K by quarter end?", category: "Crypto", yes: 33, volume: "$6.1M" },
  { question: "Nvidia beats earnings next quarter?", category: "Earnings", yes: 79, volume: "$3.5M" },
]

// ── AI scanner themes ─────────────────────────────────────────────────
export interface ScannerTheme {
  name: string
  icon: string
  matches: number
  top: string
  blurb: string
}

export const scannerThemes: ScannerTheme[] = [
  { name: "Value", icon: "gem", matches: 42, top: "BAC", blurb: "Undervalued vs. fundamentals" },
  { name: "Growth", icon: "trending-up", matches: 38, top: "NVDA", blurb: "Accelerating revenue & EPS" },
  { name: "Technical", icon: "activity", matches: 27, top: "AMD", blurb: "Bullish chart setups" },
  { name: "Income", icon: "coins", matches: 31, top: "VZ", blurb: "High, durable dividends" },
  { name: "Quality", icon: "shield-check", matches: 24, top: "MSFT", blurb: "Strong balance sheets" },
  { name: "Catalyst", icon: "zap", matches: 19, top: "TSM", blurb: "Near-term event drivers" },
]

// ── Net worth / open banking ──────────────────────────────────────────
export const netWorth = {
  total: 924680,
  changePct: 2.1,
  investable: 142300,
  savingsRate: 28,
  accounts: [
    { name: "Investments", value: 688030, color: "var(--chart-1)" },
    { name: "Cash & Banking", value: 142300, color: "var(--chart-2)" },
    { name: "Real Estate", value: 94350, color: "var(--chart-3)" },
  ],
}
