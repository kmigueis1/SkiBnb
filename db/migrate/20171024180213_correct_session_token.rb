class CorrectSessionToken < ActiveRecord::Migration[5.1]
  def change
    remove_column :users, :sesssion_token
    add_column :users, :session_token, :string
  end
end
