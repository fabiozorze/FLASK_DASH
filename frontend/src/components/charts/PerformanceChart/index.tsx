import { ResponsiveContainer, LineChart, Line } from "recharts"
import { ContainerChart } from "./styles"
import { useTheme } from "styled-components"

const data = [
    { date: "10/12", revenue: 1200 },
    { date: "11/12", revenue: 1500 },
    { date: "12/12", revenue: 400 },
    { date: "13/12", revenue: 1800 },
    { date: "14/12", revenue: 300 },
    { date: "15/12", revenue: 1000 },
]
export function PerformanceChart() {
    const theme = useTheme()
    return (
        <ContainerChart>
            <ResponsiveContainer width="100%" height="100%">
                <LineChart data={data}>
                    <Line type="linear" strokeWidth={3} dataKey="revenue" dot={false} stroke={theme.colors["green"]} />
                </LineChart>
            </ResponsiveContainer>
        </ContainerChart>
    )
}