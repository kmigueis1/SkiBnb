# == Schema Information
#
# Table name: bookings
#
#  id         :integer          not null, primary key
#  start_date :string           not null
#  end_date   :string           not null
#  user_id    :integer          not null
#  home_id    :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Booking < ApplicationRecord

  validates :start_date, :end_date, :user_id, :home_id, presence: true

end
