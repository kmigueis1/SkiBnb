
@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :title, :price, :beds, :baths
    json.image_url asset_path(home.image.url)
  end
end
