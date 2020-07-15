import React from 'react';
import PropTypes from 'prop-types';
import {connect} from 'react-redux';
import CitiesPlaceCardList from '../cities-place-card-list/cities-place-card-list';
import CitiesMap from '../cities-map/cities-map';
import CitiesList from '../cities-list/cities-list';
import PlacesSorting from '../places-sorting/places-sorting';
import EmptyMain from '../empty-main/empty-main';
import Header from '../header/header';
import {getCurrentCity} from '../../store/reducers/currentCityReducer/selectors';
import {getCityOffers} from '../../store/reducers/offersReducer/selectors';

const Main = (props) => {
  const {places, city} = props;
  const placesAmount = places.length;

  return (
    <div className="page page--gray page--main">

      <Header />

      <main className="page__main page__main--index">
        <h1 className="visually-hidden">Cities</h1>
        <div className="tabs">
          <CitiesList />
        </div>
        <div className="cities">
          {
            placesAmount > 0 &&
            (
              <div className="cities__places-container container">
                <section className="cities__places places">
                  <h2 className="visually-hidden">Places</h2>
                  <b className="places__found">{placesAmount} places to stay in {city.name}</b>
                  <PlacesSorting />
                  <CitiesPlaceCardList />
                </section>
                <div className="cities__right-section">
                  <CitiesMap />
                </div>
              </div>
            )
          }
          {
            placesAmount === 0 &&
            (
              <EmptyMain />
            )
          }
        </div>
      </main>
    </div>
  );
};

Main.propTypes = {
  places: PropTypes.arrayOf(
      PropTypes.shape({
        id: PropTypes.number.isRequired,
        propertyName: PropTypes.string.isRequired,
        propertyType: PropTypes.oneOf([`apartment`, `room`, `house`, `hotel`]),
        propertyText: PropTypes.arrayOf(PropTypes.string),
        price: PropTypes.number.isRequired,
        rating: PropTypes.number.isRequired,
        isPremium: PropTypes.bool.isRequired,
        bedroomsAmount: PropTypes.number.isRequired,
        guestMax: PropTypes.number.isRequired,
        propertyItems: PropTypes.arrayOf(PropTypes.string),
        host: PropTypes.shape({
          name: PropTypes.string,
          avatar: PropTypes.string,
          isSuper: PropTypes.bool
        }).isRequired,
        titlePhoto: PropTypes.string.isRequired,
        photos: PropTypes.arrayOf(PropTypes.string).isRequired,
        reviews: PropTypes.arrayOf(
            PropTypes.shape({
              id: PropTypes.string,
              userName: PropTypes.string,
              avatar: PropTypes.string,
              rating: PropTypes.number,
              text: PropTypes.string
            })
        ),
        coords: PropTypes.arrayOf(PropTypes.number).isRequired
      })
  ),
  city: PropTypes.object.isRequired
};

const mapStateToProps = (state) => ({
  places: getCityOffers(state),
  city: getCurrentCity(state)
});

export default connect(mapStateToProps)(Main);
export {Main};

