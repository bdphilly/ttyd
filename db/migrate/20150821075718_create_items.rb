class CreateItems < ActiveRecord::Migration
  def change
    create_table :items do |t|
      t.string :name, null: false
      t.text :details
      t.string :size
      t.string :quantity_type
      t.text :ingredients
      t.float :price

      t.timestamps null: false
    end
  end
end
