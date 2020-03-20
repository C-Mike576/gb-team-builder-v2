class Player < ApplicationRecord
    has_many :teams
    has_many :users, through: :teams


    def self.most_used_player
        cap = Team.select(:captian_id).map {|x|x.captian_id}
        mas = Team.select(:mascot_id).map {|x|x.mascot_id}
        squ1 = Team.select(:squaddie_1_id).map {|x|x.squaddie_1_id}
        squ2 = Team.select(:squaddie_2_id).map {|x|x.squaddie_2_id}
        squ3 = Team.select(:squaddie_3_id).map {|x|x.squaddie_3_id}
        squ4 = Team.select(:squaddie_4_id).map {|x|x.squaddie_4_id}
        player_list = cap + squ1 + mas + squ2 + squ4 + squ3 
        player_list.max_by {|i| player_list.count(i)}
    end
end
