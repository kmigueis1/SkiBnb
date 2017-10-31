# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or create!d alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
User.destroy_all
Home.destroy_all
Booking.destroy_all


User.create!({email: 'guest@gmail.com', password: 'password', first_name: 'guest', last_name: 'guest', phone: '888-867-5309' });
User.create!({email: 'kmigueis1@gmail.com', password: 'starwars', first_name: 'Kevin', last_name: 'Migueis', phone: '888-867-5309'});

Home.create!({host_id: 2, title: 'Cozy Ski Home', address: '25 Berlin Ave, New York, NY', latitude: 40.974937, longitude: -74.019699, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Charming Country Home', address: '25 Berlin Ave, New York, NY', latitude: 41.430582, longitude: -74.605476, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Cozy Mountain Getaway', address: '25 Berlin Ave, New York, NY', latitude: 41.714139, longitude: -74.954292, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Master Suite Lockout', address: '25 Berlin Ave, New York, NY', latitude: 41.765375, longitude: -74.297859, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Green Mountain View Inn', address: '25 Berlin Ave, New York, NY', latitude: 41.789954, longitude: -74.067146, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Hunter Mountain getaway', address: '25 Berlin Ave, New York, NY', latitude: 41.566351, longitude: -76.209480, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: '3 Bedroom Cottage', address: '25 Berlin Ave, New York, NY', latitude: 41.765375, longitude: -75.679389, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Chez Martina', address: '25 Berlin Ave, New York, NY', latitude: 41.267695, longitude: -76.388008, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Grandmas House', address: '25 Berlin Ave, New York, NY', latitude: 40.988403, longitude: -77.099372, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Migueis Castle', address: '25 Berlin Ave, New York, NY', latitude: 41.358467, longitude: -78.132087, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Tudor House', address: '25 Berlin Ave, New York, NY', latitude: 39.323891, longitude: -79.211494, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Modern 2Br Apartment', address: '25 Berlin Ave, New York, NY', latitude: 39.850963, longitude: -79.043952, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Luzury Lakefront Logcabin', address: '25 Berlin Ave, New York, NY', latitude: 40.164396, longitude: -79.060432, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Hunter Mountain Condo', address: '25 Berlin Ave, New York, NY', latitude: 41.187133, longitude: -79.499885, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Moutain View Galore', address: '25 Berlin Ave, New York, NY', latitude: 41.869769, longitude: -79.159309, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})
Home.create!({host_id: 2, title: 'Seasonal Rental', address: '25 Berlin Ave, New York, NY', latitude: 43.504877, longitude: -75.156023, price: 120.00, bedrooms: 2, beds: 4, baths: 2, description: 'This is real cozy', cancellation: 'strict', max_guests: 4, minimum_stay: 3})



Booking.create!({start_date: '2016-09-16', end_date: '2016-09-21', user_id: 1, home_id: 2})
Booking.create!({start_date: '2016-10-17', end_date: '2016-10-21', user_id: 1, home_id: 2})
Booking.create!({start_date: '2016-11-17', end_date: '2016-11-21', user_id: 1, home_id: 2})
Booking.create!({start_date: '2016-12-17', end_date: '2016-12-17', user_id: 1, home_id: 2})
