class CreateRegister < ActiveRecord::Migration[6.1]
  def change
    create_table :registers do |t|
      t.string :name
      t.integer :age
      t.string :email
      t.string :phone
      t.string :gender
      t.string :address
      t.boolean :is_student
      t.boolean :is_faculty
      t.timestamps
    end
  end
end
