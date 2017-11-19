class ReplaceLatLngColWithNewName < ActiveRecord::Migration[5.1]
  def change
    remove_column :homes, :lat
    remove_column :homes, :lng
    add_column :homes, :lat, :float,  null: false
    add_column :homes, :lng, :float,  null: false
  end
end
