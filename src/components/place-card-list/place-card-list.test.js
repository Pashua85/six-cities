import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import PlaceCardList from './place-card-list';
import places from '../../mock/test-offers';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`PlaceCardList`, () => {
  it(`should render correctly for cities pages`, () => {
    const wrapper = shallow(
        <PlaceCardList places={places} className="cities__places-list" />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
