class CreateBookings < ActiveRecord::Migration[5.1]
  def change
    create_table :bookings do |t|
      t.string :start_date, null: false
      t.string :end_date, null: false
      t.integer :user_id, null: false
      t.integer :home_id, null: false
      t.timestamps
    end
  end
end
