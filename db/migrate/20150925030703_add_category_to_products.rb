class AddCategoryToProducts < ActiveRecord::Migration
  def change
    add_column :products, :category, :string, null: false

  end
end
