# == Schema Information
#
# Table name: users
#
#  id                  :integer          not null, primary key
#  first_name          :string           not null
#  last_name           :string           not null
#  email               :string           not null
#  phone               :string           not null
#  password_digest     :string           not null
#  session_token       :string           not null
#  avatar_file_name    :string
#  avatar_content_type :string
#  avatar_file_size    :integer
#  avatar_updated_at   :datetime
#

class User < ApplicationRecord
  validates :first_name, :last_name, :email, :phone, :session_token, :password_digest, presence: true
  validates :password, length: {minimum: 6, allow_nil: true}
  has_attached_file :avatar, default_url: "profile-icon.png"
  validates_attachment_content_type :avatar, content_type: /\Aimage\/.*\Z/

  has_many :homes,
  foreign_key: :host_id,
  class_name: 'Home'

  has_many :bookings,
  foreign_key: :user_id,
  class_name: 'Booking'

  after_initialize :ensure_session_token

  attr_reader :password

  def ensure_session_token
    self.session_token ||= SecureRandom::urlsafe_base64(16)
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    BCrypt::Password.new(self.password_digest).is_password?(password)
  end

  def reset_session_token!
    self.session_token = SecureRandom::urlsafe_base64(16)
    self.save!
    self.session_token
  end

  def self.find_by_credentials(email, password)
    user = User.find_by(email: email)
    user && user.is_password?(password) ? user : nil
  end

end
