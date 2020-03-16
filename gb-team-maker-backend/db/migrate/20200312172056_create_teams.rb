class CreateTeams < ActiveRecord::Migration[6.0]
  def change
    create_table :teams do |t|
      t.string :name
      t.integer :captian_id
      t.integer :mascot_id
      t.integer :squaddie_1_id
      t.integer :squaddie_2_id
      t.integer :squaddie_3_id
      t.integer :squaddie_4_id

      t.timestamps
    end
  end
end
