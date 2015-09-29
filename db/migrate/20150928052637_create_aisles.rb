class CreateAisles < ActiveRecord::Migration
  def change
    create_table :aisles do |t|
      t.string :name, null: false
      t.timestamps null: false
    end

    add_index :aisles, :name, unique: true
  end
end
