
    var a=['a','j','p','>','a']
    var count={}
    var i,element
    for(i in a)
    {
        var flag=0
        for(element in count)
        {
            if(element==a[i]){

                count[element]++
                flag=1
            }
        }
        if(flag==0)
        {
          count[a[i]]=1
        }
    }
    for(element in count)
    {
        console.log(element+":"+count[element])
    }

