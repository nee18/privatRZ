import axios from 'axios';
import API_ENDPOINT from '../globals/api-endpoint';

class RestaurantApi {
  static async getRestaurantApi() {
    const response = await axios.get(API_ENDPOINT.LIST);
    const { data } = response;
    return data.restaurants;
  }

  static async detailRestaurantApi(id) {
    const response = await axios.get(API_ENDPOINT.DETAIL(id));
    const { data } = response;
    return data.restaurant;
  }
}

export default RestaurantApi;
