class User < ApplicationRecord
  validates_uniqueness_of :name
  validates_uniqueness_of :email
end
