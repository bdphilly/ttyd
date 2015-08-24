# == Schema Information
#
# Table name: orders
#
#  id              :integer          not null, primary key
#  total           :decimal(, )
#  order_status_id :integer          not null
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class Order < ActiveRecord::Base
  belongs_to :order_status    
  has_many :order_items

  before_create :set_order_status

  # def add_product(product_args)
  #   current_item = order_items.find_by(product_id: product_args[:product_id])

  #   if current_item
  #     current_item.quantity += product_args[:quantity].total_price
  #     current_item.save
  #   else
  #     current_item = order_items.build(product_args)
  #   end

  #     current_item
  # end

  private

    def set_order_status
      self.order_status_id = 1
    end
end