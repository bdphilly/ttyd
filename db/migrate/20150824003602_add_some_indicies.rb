class AddSomeIndicies < ActiveRecord::Migration
  def change
    add_index :order_items, :order_id
    add_index :order_items, :product_id
    add_index :orders, :order_status_id
  end
end
