class AddAttachmentImageToHomes < ActiveRecord::Migration[5.1]
  def self.up
    change_table :homes do |t|
      t.attachment :image
    end
  end

  def self.down
    remove_attachment :homes, :image
  end
end
