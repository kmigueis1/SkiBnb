# This file is auto-generated from the current state of the database. Instead
# of editing this file, please use the migrations feature of Active Record to
# incrementally modify your database, and then regenerate this schema definition.
#
# Note that this schema.rb definition is the authoritative source for your
# database schema. If you need to create the application database on another
# system, you should be using db:schema:load, not running all the migrations
# from scratch. The latter is a flawed and unsustainable approach (the more migrations
# you'll amass, the slower it'll run and the greater likelihood for issues).
#
# It's strongly recommended that you check this file into your version control system.

ActiveRecord::Schema.define(version: 20171119160537) do

  # These are extensions that must be enabled in order to support this database
  enable_extension "plpgsql"

  create_table "bookings", force: :cascade do |t|
    t.string "start_date", null: false
    t.string "end_date", null: false
    t.integer "user_id", null: false
    t.integer "home_id", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
  end

  create_table "homes", force: :cascade do |t|
    t.integer "host_id", null: false
    t.string "title", null: false
    t.string "address", null: false
    t.float "price", null: false
    t.integer "bedrooms", null: false
    t.integer "beds", null: false
    t.integer "baths", null: false
    t.text "description", null: false
    t.boolean "kitchen"
    t.boolean "tv"
    t.boolean "wifi"
    t.boolean "washer"
    t.boolean "dryer"
    t.boolean "parking"
    t.string "cancellation", null: false
    t.integer "max_guests", null: false
    t.integer "minimum_stay"
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.string "image_file_name"
    t.string "image_content_type"
    t.integer "image_file_size"
    t.datetime "image_updated_at"
    t.float "lat", null: false
    t.float "lng", null: false
  end

  create_table "reviews", force: :cascade do |t|
    t.integer "rating", null: false
    t.text "body", null: false
    t.datetime "created_at", null: false
    t.datetime "updated_at", null: false
    t.integer "booking_id", null: false
  end

  create_table "users", force: :cascade do |t|
    t.string "first_name", null: false
    t.string "last_name", null: false
    t.string "email", null: false
    t.string "phone", null: false
    t.string "password_digest", null: false
    t.string "session_token", null: false
    t.string "avatar_file_name"
    t.string "avatar_content_type"
    t.integer "avatar_file_size"
    t.datetime "avatar_updated_at"
  end

end
