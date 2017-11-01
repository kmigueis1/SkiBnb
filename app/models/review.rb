# == Schema Information
#
# Table name: reviews
#
#  id         :integer          not null, primary key
#  rating     :integer          not null
#  body       :text             not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  booking_id :integer          not null
#

class Review < ApplicationRecord

  validates :booking_id, :rating, :body, presence: true

  belongs_to :booking,
  foreign_key: :booking_id,
  class_name: 'Booking'

end
