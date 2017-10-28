class CreateHomes < ActiveRecord::Migration[5.1]
  def change
    create_table :homes do |t|
      t.integer :host_id, null: false
      t.string :title, null: false
      t.string :address, null: false
      t.float :latitude, null: false
      t.float :longitude, null: false
      t.float :price, null: false
      t.integer :bedrooms, null: false
      t.integer :beds, null: false
      t.integer :baths, null: false
      t.text :description, null: false
      t.boolean :kitchen
      t.boolean :tv
      t.boolean :wifi
      t.boolean :washer
      t.boolean :dryer
      t.boolean :parking
      t.string :cancellation, null: false
      t.integer :max_guests, null: false
      t.integer :minimum_stay
      t.timestamps
    end
  end
end
