
@homes.each do |home|
  json.set! home.id do
    json.extract! home, :id, :title, :price, :beds
  end
end
