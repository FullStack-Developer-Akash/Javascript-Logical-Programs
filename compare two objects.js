function myfunction(a,b)
{
  
  if(a.name==b.name && a.email==b.email)
  {
    return true
  }
  else{
    return false
  }

}


console.log(myfunction({name:"Akash",email:"akash@gmail.com"},
{name:"Akash",email:"akash@gmail.com"}
))
