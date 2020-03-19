class TeamSerializer
  include FastJsonapi::ObjectSerializer
  attributes :name
  belongs_to :captian
  belongs_to :mascot
  belongs_to :squaddie_1
  belongs_to :squaddie_2
  belongs_to :squaddie_3
  belongs_to :squaddie_4
  belongs_to :user
end
