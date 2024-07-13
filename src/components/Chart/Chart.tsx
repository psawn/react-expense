import "./Chart.css";
import { ChartBar } from "./ChartBar";

export function Chart({
  dataPoints,
}: {
  dataPoints: {
    label: string;
    value: number;
  }[];
}) {
  const dataPointValues = dataPoints.map((dataPoint) => dataPoint.value);
  const totalMaximum = Math.max(...dataPointValues);

  return (
    <div className="chart">
      {dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
