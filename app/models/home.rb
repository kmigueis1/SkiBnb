# == Schema Information
#
# Table name: homes
#
#  id           :integer          not null, primary key
#  host_id      :integer          not null
#  title        :string           not null
#  address      :string           not null
#  latitude     :float            not null
#  longitude    :float            not null
#  price        :float            not null
#  bedrooms     :integer          not null
#  beds         :integer          not null
#  baths        :integer          not null
#  description  :text             not null
#  kitchen      :boolean
#  tv           :boolean
#  wifi         :boolean
#  washer       :boolean
#  dryer        :boolean
#  parking      :boolean
#  cancellation :string           not null
#  max_guests   :integer          not null
#  minimum_stay :integer
#  created_at   :datetime         not null
#  updated_at   :datetime         not null
#

class Home < ApplicationRecord
  validates :host_id, :title, :address, :latitude, :longitude, presence: true
  validates :price, :bedrooms, :beds, :baths, :description, presence: true
  validates :cancellation, :max_guests, :minimum_stay, presence: true

  has_attached_file :image, default_url: "SkiLodge-Default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  def self.in_bounds(bounds)
    self.where("latitude < ?", bounds[:northEast][:lat]).where("longitude < ?", bounds[:northEast][:lng])
      .where("latitude > ?", bounds[:southWest][:lat]).where("longitude > ?", bounds[:southWest][:lng])

  end

end
