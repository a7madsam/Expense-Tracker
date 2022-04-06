import React from "react";
import './ChartBar.css';
const ChartBar = props => {
    let heightBar = '0%';
    if (props.value > 0) {
        heightBar = Math.round((props.value / props.max) * 100) + '%';
    }
    return (
        <div className="chart-bar">
            <div className="chart-bar__inner">
                <div className="chart-bar__fill" style={{ height: heightBar }}></div>
            </div>
            <div className="chart-bar__label">{props.label}</div>
        </div>
    );
}
export default ChartBar;