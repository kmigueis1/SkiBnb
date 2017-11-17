
booked_home = @booking.home
json.extract! @booking, :id, :start_date, :end_date, :user_id, :home_id
json.extract! booked_home, :title, :description, :host_id
json.host_image asset_path(@booking.home.host.avatar.url)
json.image_url asset_path(booked_home.image.url)
