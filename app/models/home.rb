# == Schema Information
#
# Table name: homes
#
#  id                 :integer          not null, primary key
#  host_id            :integer          not null
#  title              :string           not null
#  address            :string           not null
#  latitude           :float            not null
#  longitude          :float            not null
#  price              :float            not null
#  bedrooms           :integer          not null
#  beds               :integer          not null
#  baths              :integer          not null
#  description        :text             not null
#  kitchen            :boolean
#  tv                 :boolean
#  wifi               :boolean
#  washer             :boolean
#  dryer              :boolean
#  parking            :boolean
#  cancellation       :string           not null
#  max_guests         :integer          not null
#  minimum_stay       :integer
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  image_file_name    :string
#  image_content_type :string
#  image_file_size    :integer
#  image_updated_at   :datetime
#

class Home < ApplicationRecord
  validates :host_id, :title, :address, :latitude, :longitude, presence: true
  validates :price, :bedrooms, :beds, :baths, :description, presence: true
  validates :cancellation, :max_guests, :minimum_stay, presence: true

  has_attached_file :image, default_url: "SkiLodge-Default.jpg"
  validates_attachment_content_type :image, content_type: /\Aimage\/.*\Z/


  belongs_to :host,
  foreign_key: :host_id,
  class_name: 'User'

  has_many :bookings,
  foreign_key: :home_id,
  class_name: 'Booking'

  has_many :reviews,
  through: :bookings,
  source: :review

  def self.in_bounds(bounds)
    north_east_lat = bounds[:northEast][:lat]
    north_east_lng = bounds[:northEast][:lng]
    south_west_lat = bounds[:southWest][:lat]
    south_west_lng = bounds[:southWest][:lng]

    self.where("latitude < ?", north_east_lat).where("longitude < ?", north_east_lng)
      .where("latitude > ?", south_west_lat).where("longitude > ?", south_west_lng)

      #
      # db.execute(<<-SQL, north_east_lat: north_east_lat, north_east_lng: nort_east_lng, south_west_lat: south_west_lat, south_west_lng: south_west_lng )
      #   SELECT
      #     *
      #   FROM
      #   homes
      #   WHERE
      #   homes.latitude < north_east_lat AND homes.longitude < north_east_lng AND homes.latitude > south_west_lat AND homes.longitude > south_west_lng
      # SQL
  end

end
