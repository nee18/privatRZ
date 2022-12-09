const assert = require('assert');

Feature('Liking Restaurants');

Before(({ I }) => {
  I.amOnPage('/');
  I.amOnPage('/#/favorite');
});

Scenario('1 showing empty liked restaurant', async ({ I }) => {
  I.see('Restaurant tidak tersedia', '.unFavorite');
});

Scenario('2 liking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak tersedia', '.unFavorite');

  I.amOnPage('/');

  I.seeElement('#list-item');

  const firstRestaurant = locate('#list-item .card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('#list-item .card-title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#list-item');

  const likedRestaurantName = await I.grabTextFrom('#list-item .card-title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);
});

Scenario('3 unliking one restaurant', async ({ I }) => {
  I.see('Restaurant tidak tersedia', '.unFavorite');

  I.amOnPage('/');

  I.seeElement('#list-item');

  const firstRestaurant = locate('#list-item .card-title a').first();
  const firstRestaurantName = await I.grabTextFrom(firstRestaurant);
  I.click('#list-item .card-title a');

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');
  I.seeElement('#list-item');

  const likedRestaurantName = await I.grabTextFrom('#list-item .card-title a');

  assert.strictEqual(firstRestaurantName, likedRestaurantName);

  I.click(locate('#list-item .card-title a').first());

  I.seeElement('#likeButton');
  I.click('#likeButton');

  I.amOnPage('/#/favorite');

  I.see('Restaurant tidak tersedia', '.unFavorite');
});
