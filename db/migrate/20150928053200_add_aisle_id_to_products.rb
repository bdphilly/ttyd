class AddAisleIdToProducts < ActiveRecord::Migration
  def change
    add_column :products, :aisle_id, :integer, null: false
  end
end
