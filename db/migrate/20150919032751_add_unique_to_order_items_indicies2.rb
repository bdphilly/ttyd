class AddUniqueToOrderItemsIndicies2 < ActiveRecord::Migration
  def change
    remove_index :order_items, :product_id
    remove_index :order_items, :order_id

    add_index :order_items, [:product_id, :order_id], unique: true
  end
end
