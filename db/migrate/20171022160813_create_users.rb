class CreateUsers < ActiveRecord::Migration[5.1]
  def change
    create_table :users do |t|
      t.string :name
      t.string :email
      t.string :school
      t.string :street_address
      t.string :city
      t.string :province
      t.string :postal_code
      t.string :country
      t.string :quote

      t.timestamps
    end
  end
end
