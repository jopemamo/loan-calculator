import React from 'react';

import Adapter from  'enzyme-adapter-react-16';
import { configure, shallow } from 'enzyme';

import LoanCriteria from '../components/LoanCriteria';
import AmortisationSchedule from '../components/AmortisationSchedule';

configure({adapater: new Adapter()});

describe('<AmortisationSchedule />', () => {
  it('should render one <AmortisationSchedule /> elements', () => {
      const wrapper = shallow(<LoanCriteria />);
      expect(wrapper.find(AmortisationSchedule)).toHaveLength(1);
  });
});