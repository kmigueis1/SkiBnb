class ReplaceLatLngColFloatType < ActiveRecord::Migration[5.1]
  def change
    remove_column :homes, :latitude
    remove_column :homes, :longitude
    add_column :homes, :lat, :decimal, precision: 10, scale: 6,  null: false
    add_column :homes, :lng, :decimal, precision: 10, scale: 6,  null: false
  end
end
