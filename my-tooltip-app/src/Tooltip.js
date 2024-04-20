// src/Tooltip.js
import React from 'react';
import './Tooltip.css';

class Tooltip extends React.Component {
  render() {
    const { position } = this.props;
    const text = "Thank you for hovering! I am a tooltip";
    const tooltipClasses = `tooltip ${position}`;

    return (
      <div className="tooltip-container">
        <button className="tooltip-btn">Hover Over Me!</button>
        <div className={tooltipClasses}>
          <div className="tooltip-text">{text}</div>
        </div>
      </div>
    );
  }
}

export default Tooltip;