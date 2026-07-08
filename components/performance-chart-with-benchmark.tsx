'use client'

import { Area, AreaChart, Line, ComposedChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from 'recharts'
import { useId } from 'react'

interface PerformanceChartProps {
  portfolioData: number[]
  benchmarkData?: number[]
  height?: number
  benchmarkLabel?: string
}

export function PerformanceChartWithBenchmark({
  portfolioData,
  benchmarkData,
  height = 48,
  benchmarkLabel = 'S&P 500',
}: PerformanceChartProps) {
  const id = useId().replace(/:/g, '')

  // Generate benchmark data if not provided (showing lower performance)
  const benchmark = benchmarkData || portfolioData.map((val, i) => {
    const growth = 1 + 0.11 / portfolioData.length // 11% total growth spread
    return 50 * Math.pow(growth, i)
  })

  // Create chart data combining both series
  const chartData = portfolioData.map((value, i) => ({
    i,
    portfolio: value,
    benchmark: benchmark[i] || value * 0.65,
  }))

  return (
    <div style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <ComposedChart data={chartData} margin={{ top: 4, right: 0, bottom: 0, left: 0 }}>
          <defs>
            {/* Portfolio gradient */}
            <linearGradient id={`perf-portfolio-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(34, 197, 94)" stopOpacity={0.4} />
              <stop offset="100%" stopColor="rgb(34, 197, 94)" stopOpacity={0} />
            </linearGradient>
            {/* Benchmark gradient */}
            <linearGradient id={`perf-benchmark-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor="rgb(156, 163, 175)" stopOpacity={0.2} />
              <stop offset="100%" stopColor="rgb(156, 163, 175)" stopOpacity={0} />
            </linearGradient>
          </defs>

          {/* Benchmark line (shown first, underneath) */}
          <Area
            type="monotone"
            dataKey="benchmark"
            stroke="rgb(156, 163, 175)"
            strokeWidth={1}
            fill={`url(#perf-benchmark-${id})`}
            isAnimationActive={false}
            dot={false}
            opacity={0.5}
          />

          {/* Portfolio line (shown on top) */}
          <Area
            type="monotone"
            dataKey="portfolio"
            stroke="rgb(34, 197, 94)"
            strokeWidth={2}
            fill={`url(#perf-portfolio-${id})`}
            isAnimationActive={false}
            dot={false}
          />

          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(0, 0, 0, 0.8)',
              border: '1px solid rgba(255, 255, 255, 0.1)',
              borderRadius: '6px',
              padding: '8px',
            }}
            labelStyle={{ color: '#fff' }}
            formatter={(value: number) => {
              if (typeof value === 'number') {
                return [value.toFixed(2), '']
              }
              return value
            }}
          />
        </ComposedChart>
      </ResponsiveContainer>
    </div>
  )
}
