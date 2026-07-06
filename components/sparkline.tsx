"use client"

import { Area, AreaChart, ResponsiveContainer } from "recharts"
import { useId } from "react"

interface SparklineProps {
  data: number[]
  positive?: boolean
  height?: number
  className?: string
}

export function Sparkline({ data, positive = true, height = 40, className }: SparklineProps) {
  const id = useId().replace(/:/g, "")
  const color = positive ? "var(--color-positive)" : "var(--color-negative)"
  const chartData = data.map((value, i) => ({ i, value }))

  return (
    <div className={className} style={{ height }}>
      <ResponsiveContainer width="100%" height="100%">
        <AreaChart data={chartData} margin={{ top: 2, right: 0, bottom: 0, left: 0 }}>
          <defs>
            <linearGradient id={`spark-${id}`} x1="0" y1="0" x2="0" y2="1">
              <stop offset="0%" stopColor={color} stopOpacity={0.35} />
              <stop offset="100%" stopColor={color} stopOpacity={0} />
            </linearGradient>
          </defs>
          <Area
            type="monotone"
            dataKey="value"
            stroke={color}
            strokeWidth={1.75}
            fill={`url(#spark-${id})`}
            isAnimationActive={false}
            dot={false}
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  )
}
