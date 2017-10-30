@bookings.each do |booking|
  json.set! booking.id do
    json.extract! booking, :id, :start_date, :end_date, :user_id, :home_id
  end
end
