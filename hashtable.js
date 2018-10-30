
    var a=['a','a','a','a','a','a','a','a','a','a','v','v']
    var count={'a':0,'v':0}
    var i,element
    for(i in a)
    {
        for(element in count)
            if(element==a[i])
                count[element]++
    }
    for(element in count)
    {
        console.log(element+":"+count[element])
    }

