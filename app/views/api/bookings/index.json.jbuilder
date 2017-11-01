debugger
booked_homes = [];
@bookings.each do |booking|
  booked_homes << booking.home
end

  i = 0
@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :start_date, :end_date, :user_id, :home_id
    json.extract! booked_homes[i], :title, :description, :host_id
    json.host_image asset_path(booking.home.host.avatar.url)
    json.image_url asset_path(booked_homes[i].image.url)
  end
  i += 1
end


#
# if @booked_homes.length > 0
# json.homes
#   @booked_homes.each do |home|
#     json.set! home.id do
#       json.extract! home, :id, :title, :host_id, :description
#       json.image_url asset_path(home.image.url)
#     end
#   end
# end
