import {createSelector} from 'reselect';
import NameSpace from '../name-space';
import {getCurrentCity} from '../currentCityReducer/selectors';
import {createOffer} from '../../../adapters/offer';

const getOffers = (state) => {
  return state[NameSpace.OFFERS];
};

export const getCityOffers = createSelector(
    getOffers,
    getCurrentCity,
    (offers, city) => {
      const cityOffers = offers.filter((of) => {
        return of.city.name === city.name;
      });
      return cityOffers.map((of) => createOffer(of));
    }
);

