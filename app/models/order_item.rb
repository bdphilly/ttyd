# == Schema Information
#
# Table name: order_items
#
#  id          :integer          not null, primary key
#  product_id  :integer          not null
#  order_id    :integer          not null
#  quantity    :integer          not null
#  total_price :decimal(, )
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class OrderItem < ActiveRecord::Base
  belongs_to :product
  belongs_to :order

  validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validate :product_present

  validates_uniqueness_of :product_id, scope: [:order_id]

  # before_save :finalize

  private

    def product_present
      if product.nil?
        errors.add(:product, "is not vaild or is not active.")
      end
    end
end