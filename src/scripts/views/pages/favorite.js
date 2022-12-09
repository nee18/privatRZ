import RestaurantApiIDB from '../../data/database';
import cardComponent from '../templates/Item';

const unFavorite = () => `
<p class="unFavorite">Restaurant tidak tersedia</p>
`;

const Favorite = {
  async render() {
    return `
      <h1 class="title"><a href="#/favorite">Favorite Restaurant</a></h1>
      <div class="list wrapper" id="item"></div>
      `;
  },

  async afterRender() {
    const restaurants = await RestaurantApiIDB.getAllRestaurants();
    const restaurantList = document.querySelector('div.list');
    if (restaurants.length) {
      restaurants.forEach((item) => {
        restaurantList.insertAdjacentHTML('beforeend', cardComponent(item));
      });
    } else {
      restaurantList.insertAdjacentHTML('beforeend', unFavorite());
      console.log('Restaurant tidak tersedia');
    }
  },
};

export default Favorite;
