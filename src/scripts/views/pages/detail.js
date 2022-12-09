import UrlParser from '../../routes/url-parser';
import RestaurantApi from '../../data/api';
import detailComponent from '../templates/detailItem';
import reviewComponent from '../templates/rewiewItem';
import LikeButtonInitiator from '../../utils/like-button-initiator';

const Detail = {
  async render() {
    return `
        <div class="resto-details" id="list">
          <section class="resto-info"></section>
          <section class="resto-review"></section>
          <div id="likeButtonContainer"></div>
        </div>
      `;
  },

  async afterRender() {
    const url = UrlParser.parseActiveUrlWithoutCombiner();
    const restaurant = await RestaurantApi.detailRestaurantApi(url.id);
    const container = document.querySelector('section.resto-info');
    container.innerHTML = detailComponent(restaurant);
    reviewComponent(restaurant);

    LikeButtonInitiator.init({
      likeButtonContainer: document.querySelector('#likeButtonContainer'),
      restaurant: {
        id: restaurant.id,
        pictureId: restaurant.pictureId,
        name: restaurant.name,
        city: restaurant.city,
        rating: restaurant.rating,
        description: restaurant.description,
      },
    });
  },
};

export default Detail;
