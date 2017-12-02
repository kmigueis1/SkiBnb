
lat = @location.latitude
lng = @location.longitude
southwest = @location.viewport[0..1]
northeast = @location.viewport[2..3]

json.lat lat
json.lng lng
json.northeast northeast
json.southwest southwest
