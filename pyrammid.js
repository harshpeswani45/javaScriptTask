
	"use strict"
    var i,k,space
    var s
	for(i=1,k=0;i<=5;i++,k=0)
	{
		for(space=1;space<=5-i;space++)
		{
			process.stdout.write("  ")
		}
		while(k != 2*i-1)
		{	
			process.stdout.write("* ")
			k++
		}
		console.log("")
			
	}





