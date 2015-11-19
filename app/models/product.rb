# == Schema Information
#
# Table name: products
#
#  id                 :integer          not null, primary key
#  name               :string           not null
#  details            :text
#  size               :string
#  quantity_type      :string
#  ingredients        :text
#  price              :float
#  created_at         :datetime         not null
#  updated_at         :datetime         not null
#  active             :boolean          default(TRUE), not null
#  category           :string           not null
#  aisle_id           :integer          not null
#  photo_file_name    :string
#  photo_content_type :string
#  photo_file_size    :integer
#  photo_updated_at   :datetime
#

class Product < ActiveRecord::Base
  validates :name, presence: true
  validates :active, presence: true

  default_scope { where(active: true) }

  belongs_to :aisle
  has_many :order_items

  has_attached_file :photo, 
    styles: { medium: "200x200>", thumb: "100x100>" }, 
    default_url: "/images/:style/missing.png"

  validates_attachment_content_type :photo, content_type: /\Aimage\/.*\Z/
  
end
