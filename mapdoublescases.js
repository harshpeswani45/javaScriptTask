    var doubleab=function(num)
    {
        if(!isNaN(num))
            return num*2
        else
            return num
    }
    var a=[1,2,3,4,'a']
    var doublea=a.map(doubleab)
    console.log(doublea)
