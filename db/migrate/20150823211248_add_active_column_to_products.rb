class AddActiveColumnToProducts < ActiveRecord::Migration
  def change
    add_column :products, :active, :boolean, null: false
  end
end
