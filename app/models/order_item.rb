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
  belongs_to :product,
    class_name: "Product",
    foreign_key: :product_id

  belongs_to :order,
    class_name: "Order",
    foreign_key: :order_id

  validates :quantity, presence: true, numericality: { only_integer: true, greater_than: 0 }
  validate :product_present
  validate :order_present

  # before_save :finalize

  private
    def product_present
      if product.nil?
        errors.add(:product, "is not vaild or is not active.")
      end
    end

    def order_present
      if order.nil?
        errors.add(:order, "is not a valid order.")
      end
    end


end