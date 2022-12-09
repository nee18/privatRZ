import API_ENDPOINT from '../../globals/api-endpoint';

const postItem = (Item) => `
  <div id="list-item" class="card">
    <div class="card-header">
      <img class="card-img lazyload" data-src="${API_ENDPOINT.RESTAURANT_IMAGE + Item.pictureId}" alt="${Item.name}" title="${Item.name}">
      <h5 class="card-kota">Kota ${Item.city}</h5>
    </div>
    <h4>Rating: ${Item.rating}</h4>
    <h3 class="card-title"><a href="#/detail/${Item.id}">${Item.name}</a></h3>
    <h5>${Item.description.slice(0, 500)}...</h5>
  </div>
`;

export default postItem;
