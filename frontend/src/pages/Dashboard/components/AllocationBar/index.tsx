
import { Wrap, Legend, LegendItem, Dot } from "./styles";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis } from "recharts"

/** One asset inside the allocation */
type AssetAllocationSlice = {
  key: string; //BTC
  label: string; // asset name: Bitcoin
  color: string; // assest color
  value: number // assest amount
};

/** Shape Recharts expects: one row with multiple numeric fields */
type AllocationChartRow = { name: string } & Record<string, number>;

export function AllocationBar({ slices }: { slices: AssetAllocationSlice[] }) {

  // 1) Sum raw values (protect against 0 to avoid division-by-zero)
  const totalValue = Math.max(1, slices.reduce((sum, slice) => sum + slice.value, 0));

  // 2) Attach percentage to each slice
  const slicesWithPercentages = slices.map(slice => ({
    ...slice,
    percent: (slice.value / totalValue) * 100,
  }));

  // 3) Build the single data row Recharts needs
  const chartRow: AllocationChartRow = slicesWithPercentages.reduce<AllocationChartRow>(
    (row, slice) => {
      row[slice.key] = slice.percent;
      return row;
    },
    { name: "allocation" } as AllocationChartRow
  );
  const chartData: AllocationChartRow[] = [chartRow];

  // Constant used to make the ends fully rounded (a “pill”)
  const PILL_RADIUS = 999;

  return (
    <Wrap>
      <Legend>
        {slicesWithPercentages.map(slice => (
          <LegendItem key={slice.key}>
            <Dot style={{ background: slice.color }}/>
            <p>{slice.label}</p>
            <p>{Math.round(slice.percent)}%</p>
          </LegendItem>
        ))}
      </Legend>

        <ResponsiveContainer width="100%" height={12}>
          <BarChart
            data={chartData}
            layout="vertical"
            barCategoryGap={0}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            {/* Hide axes – we just want the bar */}
            <XAxis type="number" domain={[0, 100]} hide />
            <YAxis type="category" dataKey="name" hide />

            {/* Stack all segments with the same stackId */}
            {slicesWithPercentages.map((slice, index) => {

              // rounded ends: left on first, right on last
              const isLeftmostSegment = index === 0;
              const isRightmostSegment = index === slicesWithPercentages.length - 1;

              const segmentCornerRadios: [number, number, number, number] = [
                isLeftmostSegment ? PILL_RADIUS : 0, // top-left
                isRightmostSegment ? PILL_RADIUS : 0, // top-right
                isRightmostSegment ? PILL_RADIUS : 0, // bottom-right
                isLeftmostSegment ? PILL_RADIUS : 0, // bottom-left
              ];

              return (
                <Bar
                  key={slice.key}
                  dataKey={slice.key}
                  stackId="allocation"
                  fill={slice.color}
                  radius={segmentCornerRadios}
                />
              );
            })}
          </BarChart>
        </ResponsiveContainer>

    </Wrap>
  );
}
