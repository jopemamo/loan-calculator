import React, { useState, useEffect } from 'react';
import AmortisationSchedule from './AmortisationSchedule';
import { loanTypeCalculator } from '../util/loanTypeCalculator';
import { TYPE_DROPDOWN } from '../util/dropdownData';

const LoanCriteria = () => {

  const [typeOptions, setTypeOptions] = useState(TYPE_DROPDOWN);

  const [loanData, setLoanData] = useState({
    type: {
      id: 0,
      name: 'House',
      interest: 3.5,
    },
    amount: '',
    years: '',
  }
  );

  const [schedule, setSchedule] = useState(
    []
  );

  useEffect(() => { setTypeOptions(TYPE_DROPDOWN) }, [typeOptions]);

  const handleChange = (e) => {
    if (e.target.name === 'type') {
      const index = e.target.value;
      setLoanData({
        ...loanData,
        [e.target.name]: typeOptions[index],
      })
    } else {
      setLoanData({
        ...loanData,
        [e.target.name]: e.target.value
      });
    }
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const newSchedule = loanTypeCalculator(loanData);
    setSchedule(newSchedule);
  }

  const reset = () => {
    setLoanData({
      type: {
        name: 'house',
        interest: 3.5,
      },
      amount: '',
      years: '',
    })
    setSchedule([]);
  }

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <span>Type of Loan: </span>
        <select name="type" onChange={handleChange}>
          {typeOptions.map((type, index) => <option key={index} value={type.id}>{type.name}</option>)}
        </select>
        <br />
        <span>Loan Amount: </span>
        <input type="number" name="amount" min="1" step=".01" placeholder="Amount in Euros" value={loanData.amount} onChange={handleChange} />
        <br />
        <span>Loan Term: </span>
        <input type="number" name="years" min="1" step=".1" placeholder="Number of years" value={loanData.years} onChange={handleChange} />
        <p>Anual Interest: {loanData.type.interest}%</p>
        <div className="form_buttons">
          <input className="form_button" type="submit" value="Calculate" />
          <input className="form_button" type="reset" onClick={reset} />
        </div>
      </form>
      <section className="schedule">
        <AmortisationSchedule schedule={schedule} />
      </section>
    </>
  );
};

export default LoanCriteria;