import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import {CitiesPlaceCardList} from './cities-place-card-list';
import places from '../../mock/test-places';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`CitiesPlaceCardList`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesPlaceCardList places={places} city={places[0].city} />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
