# Install hook code here
require 'fileutils'
puts "Copying files..."
asset_dir = File.join(File.dirname(__FILE__),"assets")
rails_root = File.join(File.dirname(__FILE__),"..","..","..")
FileUtils.copy(File.join(asset_dir,"datepicker.js"),"#{rails_root}/public/javascripts/datepicker.js")
FileUtils.cp_r(File.join(asset_dir,"DatePicker"),"#{rails_root}/public/javascripts/DatePicker")
puts "Files copied - installation complete!"
