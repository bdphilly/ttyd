class CreateOrderItems < ActiveRecord::Migration
  def change
    create_table :order_items do |t|
      t.references :product, null: false
      t.references :order, null: false
      t.integer :quantity, null: false
      t.decimal :total_price
      t.timestamps null: false
    end
  end
end
