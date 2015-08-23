class MakeOrderStatusIdNotNull < ActiveRecord::Migration
  def change
    change_column_null :orders, :order_status_id, false
  end
end
