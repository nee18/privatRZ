const reviewComponent = (resto) => {
  const reviewer = document.querySelector('section.resto-review');
  reviewer.innerHTML = `
    <div class="card review">
      <h2>Review Pelanggan</h2>
      <div class="review-container">
    ${resto.customerReviews
    .map(
      (review) => `
        <div class="card review-item">
          <h3>${review.name}</h3>
          <h4>${review.date}</h4>
          <h4 class="review-desc">${review.review}</h4>
        </div>`,
    )
    .join('')}
      </div>
    </div>`;
};

export default reviewComponent;
