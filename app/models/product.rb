# == Schema Information
#
# Table name: products
#
#  id            :integer          not null, primary key
#  name          :string           not null
#  details       :text
#  size          :string
#  quantity_type :string
#  ingredients   :text
#  price         :float
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#  active        :boolean          not null
#

class Product < ActiveRecord::Base
  has_many :order_items

  validates :name, presence: true
  validates :active, presence: true

  default_scope { where(active: true) }
end
