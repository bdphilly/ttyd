# == Schema Information
#
# Table name: items
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
#

class Item < ActiveRecord::Base
  validates :name, presence: true
end
