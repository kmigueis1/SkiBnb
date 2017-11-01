class LinkReviewToBookingsOnly < ActiveRecord::Migration[5.1]
  def change
    remove_column :reviews, :author_id
    remove_column :reviews, :home_id
    add_column :reviews, :booking_id, :integer, null: false
  end
end
