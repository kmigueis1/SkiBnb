
@homes.each do |home|
  reviews = home.reviews
  review_sum = 0
  reviews.each do |review|
    review_sum += review.rating
  end
  if reviews.length > 0
    reviews_avg = review_sum/reviews.length
  else
    reviews_avg = 0
  end
  json.set! home.id do
    json.extract! home, :id, :title, :price, :beds, :baths, :latitude, :longitude
    json.avgReviews reviews_avg
    json.numReviews reviews.length
    json.image_url asset_path(home.image.url)
  end
end
