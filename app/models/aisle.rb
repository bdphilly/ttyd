# == Schema Information
#
# Table name: aisles
#
#  id         :integer          not null, primary key
#  name       :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class Aisle < ActiveRecord::Base
  has_many :products
end
