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

require 'test_helper'

class ItemTest < ActiveSupport::TestCase
  # test "the truth" do
  #   assert true
  # end
end
