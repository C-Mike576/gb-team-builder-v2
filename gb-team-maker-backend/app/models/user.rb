class User < ApplicationRecord
    has_many :teams
    
    validates :username, presence: true, uniqueness: true
end
