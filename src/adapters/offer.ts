import {IOffer, IPlace} from '../types/types';

export const createOffer = (data: IOffer): IPlace => {
  return {
    city: data.city,
    id: data.id,
    propertyName: data.title,
    propertyType: data.type,
    propertyText: data.description,
    price: data.price,
    rating: data.rating,
    isPremium: data.is_premium,
    bedroomsAmount: data.bedrooms,
    guestMax: data.max_adults,
    propertyItems: data.goods,
    host: {
      name: data.host.name,
      avatar: data.host.avatar_url,
      isSuper: data.host.is_pro
    },
    titlePhoto: data.preview_image,
    photos: data.images,
    coords: [data.location.latitude, data.location.longitude],
    isFavorite: data.is_favorite
  };
};
