import React from "react";
import ChartBar from './ChartBar';
import './Chart.css';
const Chart = (props) => {
    let pricesValues = props.dataPoints.map((dataPoint) => {
        return dataPoint.value;
    })
    let maxOfPrices = Math.max(...pricesValues);
    return (
        <div className="chart">
            {props.dataPoints.map((dataPoint) => {
                return <ChartBar key={dataPoint.label} value={dataPoint.value} max={maxOfPrices} label={dataPoint.label} />
            })}
        </div>
    );
}
export default Chart;