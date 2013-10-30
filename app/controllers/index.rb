get '/' do
  erb :index
end


# TODO: convert this route to use AJAX
post '/rolls' do
  # If the user passes-in a "value", let's use it. Otherwise, we'll generate a random one.
  # See: roll_if_value_is_nil method in the Roll model.
  puts params
  value = params[:value] ? params[:value].to_i : nil


  puts '##########'
  puts value
  puts '##########'

  @roll = value ? Roll.create({ value: value }) : Roll.create

  case value
  when 1
    erb :_one, :layout => false
  when 2
    erb :two, :layout => false
  when 3
    erb :_three, :layout => false
  when 4
    erb :_four, :layout => false
  when 5
    erb :_five, :layout => false
  when 6
    erb :_six, :layout => false
  end

  #erb :index  # HINT: what does this do? what should we do instead?
end
