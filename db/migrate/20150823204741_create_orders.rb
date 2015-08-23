class CreateOrders < ActiveRecord::Migration
  def change
    create_table :orders do |t|
      t.decimal :total
      t.references :order_status

      t.timestamps null: false
    end

    rename_table :items, :products
  end
end
