import React from 'react';


const AmortisationSchedule = ({ schedule }) => {

  const total = {
    interestPayed: 0,
    principalPayed: 0,
    totalSummedPayed: 0
  }
  const totalPayed = schedule.reduce((accumulatorTotal, monthly) => {
    return {
      interestPayed: monthly.interestPayment + accumulatorTotal.interestPayed,
      principalPayed: monthly.principalPayment + accumulatorTotal.principalPayed,
      totalSummedPayed: monthly.totalPayment + accumulatorTotal.totalSummedPayed
    }
  }, total);

  return (
    <>
      {schedule.length > 0 ? (
        <>
          <table className="tableSchedule">
            <thead>
              <tr>
                <th>Instalment number </th>
                <th>Principal Payment </th>
                <th>Interest Payment </th>
                <th>Total Payment </th>
                <th>Principal Left  </th>
              </tr>
            </thead>
            <tbody>
              {schedule.map((month, index) => {
                return (
                  <tr key={index}>
                    <td> {month.instalment}</td>
                    <td>
                      {month.principalPayment.toFixed(2)}
                    </td>
                    <td>
                      {month.interestPayment.toFixed(2)}
                    </td>
                    <td>
                      {month.totalPayment.toFixed(2)}
                    </td>
                    <td>
                      {month.principalLeft.toFixed(2)}
                    </td>
                  </tr>
                );
              })
              }
              <tr>
                <td>Total Payed</td>
                <td>{totalPayed.principalPayed.toFixed(2)}</td>
                <td>{totalPayed.interestPayed.toFixed(2)}</td>
                <td>{totalPayed.totalSummedPayed.toFixed(2)}</td>
              </tr>
            </tbody>
          </table>
        </>
      ) : null
      }
    </>
  )
};

export default AmortisationSchedule;