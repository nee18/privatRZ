import RestaurantApi from '../../data/api';
import postItem from '../templates/Item';

const Home = {
  async render() {
    return `
      <h1 class="title"><a href="/">Explore Restaurant</a></h1>
      <div class="list wrapper" id="item"></div>
    `;
  },

  async afterRender() {
    const restaurants = await RestaurantApi.getRestaurantApi();
    const restaurantList = document.querySelector('.list');
    restaurants.forEach((item) => {
      restaurantList.insertAdjacentHTML('beforeend', postItem(item));
    });
  },
};

export default Home;
