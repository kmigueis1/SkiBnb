authors = [];
@reviews.each do |review|
  authors << review.booking.user
end

  i = 0
@reviews.each do |review|
  json.set! review.id do
    json.extract! review, :id, :booking_id, :rating, :body
    json.extract! authors[i], :first_name
    json.author_image asset_path(authors[i].avatar.url)
  end
  i += 1
end
