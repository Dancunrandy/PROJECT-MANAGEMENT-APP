class User < ActiveRecord::Base
  has_many :user_skills
  has_many :skills, through: :user_skills
  has_many :projects
  has_secure_password

  validates :name, presence: true
  validates :email, presence: true, uniqueness: true
end
