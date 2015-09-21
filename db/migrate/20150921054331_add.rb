class Add < ActiveRecord::Migration
  def change
    add_column :orders, :user_id, :integer, null: false

    add_index :orders, :user_id
  end
end
