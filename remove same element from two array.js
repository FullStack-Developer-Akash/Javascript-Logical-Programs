function myfunction(a,b)
{
  res=[]
  for(i of a)
  {
    if(!(b.includes(i)))
    {
      res.push(i)
    }
  }
  
  console.log(res)

}

myfunction([1,2,2],[1])
