import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import NearPlaceCard from './near-place-card';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`NearPlaceCard`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <NearPlaceCard place={places[2]} onMouseEnter={() => {}} onMouseLeave={() => {}} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
