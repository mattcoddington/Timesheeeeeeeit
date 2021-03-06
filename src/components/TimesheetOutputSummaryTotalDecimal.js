import React, { Component } from 'react';
import '../components/TimesheetOutputSummary.css';

class TimesheetOutputSummaryTotalDecimal extends Component {

  render() {

    const minutesSum =this.props.timesheet.map(num => {
      let hoursOut = Math.floor(num.timeOut / 100)
      let hoursIn = Math.floor(num.timeIn / 100)
      let minutesOut = num.timeOut - (hoursOut * 100)
      let minutesIn = num.timeIn - (hoursIn * 100)

      if (hoursOut + minutesOut === hoursIn + minutesIn && hoursOut !== 0 && hoursIn !== 0) {
        return 12
      }

        else if (hoursOut >= hoursIn && minutesOut >= minutesIn && hoursOut !== 0 && hoursIn !== 0) {
        return (hoursOut - hoursIn) + (((minutesOut + (60 - minutesIn)) / 60) - 1);
      }

        else if (hoursOut >= hoursIn && minutesOut < minutesIn && hoursOut !== 0 && hoursIn !== 0) {
        return (hoursOut - hoursIn) + ((minutesOut + (60 - minutesIn)) / 60) - 1;
      }

        else if (hoursOut < hoursIn && minutesIn === minutesOut && hoursOut !== 0 && hoursIn !== 0) {
          return (hoursOut - hoursIn) + 12
      }

        else if (hoursOut < hoursIn && minutesOut > minutesIn && hoursOut !== 0 && hoursIn !== 0) {
          return (hoursOut - hoursIn) + 12 + ((minutesOut + (60 - minutesIn)) / 60) - 1
      }

        else if (hoursOut < hoursIn && minutesIn > minutesOut && hoursOut !== 0 && hoursIn !== 0) {
          return (hoursOut - hoursIn) + 12 + ((minutesOut + (60 - minutesIn)) / 60) - 1
      }

        else {
        return 0
      }
    });

    const reducer = (accumulator, currentValue) => accumulator + currentValue;

    const totalMinutes = minutesSum.reduce(reducer).toFixed(2)

    return (
            <div className="summary-cell-values">

              {totalMinutes}

            </div>
    );
  }
}

export default TimesheetOutputSummaryTotalDecimal;
