import API_ENDPOINT from '../../globals/api-endpoint';

const detailComponent = (resto) => `

<div class="container-column">
  <div class="card">
    <img class="detail-img" src="${API_ENDPOINT.RESTAURANT_IMAGE}${resto.pictureId}" alt="${resto.name}">
    <div class="detail-body">
      <h2 class="detail-title">${resto.name}</h2>
      <h5>${resto.description}</h5>
    </div>
  </div>

  <div>
    <div class="card info">
      <h2 class="title-menu">Informasi</h2>
      <h3>Alamat</h3>
      <h4>${resto.address}</h4>
      <h3>Kota</h3>
      <h4>${resto.city}</h4>
      <h3>Rating</h3>
      <h4>${resto.rating}</h4>
    </div>

    <div class="card">
      <h2 class="title-menu">List Menu</h2>
        <div class="list-item"> 
          <ul class="sub-menu left-menu">
            <p>Makanan</p>
            ${resto.menus.foods.map((food) => `<li>${food.name}</li>`).join('')}
          </ul>
          <ul class="sub-menu">
            <p>Minuman</p>
            ${resto.menus.drinks.map((drink) => `<li>${drink.name}</li>`).join('')}
          </ul>
        </div>
      </div>
    </div>
  </div>
</div>
`;

export default detailComponent;
