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
  belongs_to :order_status,
    class_name: "OrderStatus",
    foreign_key: :order_status_id
    
  has_many :order_items,
    class_name: "OrderItems",
    foreign_key: :order_id

  before_create :set_order_status

  private

    def set_order_status
      self.order_status_id = 1
    end
end
