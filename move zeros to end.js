function myfunction(a)
{
  zeros=[]
  others=[]
 for(i of a)
 {
   if(i==0)
   {
     zeros.push(i)
     
   }
   else{
     others.push(i)
   }
 }
 
 result=others+","+zeros
 console.log(result)

}

myfunction([1,2,2,0,4,4,6,6,0,3])
