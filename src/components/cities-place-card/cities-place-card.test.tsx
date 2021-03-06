import React from 'react';
import Enzyme, {shallow} from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import CitiesPlaceCard from './cities-place-card';
import places from '../../mock/test-places';

Enzyme.configure({
  adapter: new Adapter()
});

describe(`CititesPlaceCard`, () => {
  it(`should render correctly`, () => {
    const wrapper = shallow(
        <CitiesPlaceCard
          key={2}
          place={places[1]}
          onCardHover={() => {}}
          onCardUnhover={() => {}}
          styleObject={{}}
        />
    );
    expect(wrapper).toMatchSnapshot();
  });
});
