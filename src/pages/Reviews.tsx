import "../styles/reviews.css"



function Reviews() {
  return (
    <>
    <section className="review-form">
  <h2>Leave a Review</h2>
  <form action="/submit-review" method="POST">
    <label htmlFor="name">Your Name:</label>
    <input type="text" id="name" name="name" required />

    <label htmlFor="rating">Rating:</label>
    <select id="rating" name="rating" required>
      <option value="1">1 - Poor</option>
      <option value="2">2 - Fair</option>
      <option value="3">3 - Good</option>
      <option value="4">4 - Very Good</option>
      <option value="5">5 - Excellent</option>
    </select>

    <label htmlFor="review">Your Review:</label>
          <textarea id="review" name="review" rows={4} required></textarea>

    <button type="submit">Submit Review</button>
  </form>
</section>
    </>
  )
}

export default Reviews;
