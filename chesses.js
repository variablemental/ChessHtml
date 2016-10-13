

 var length=8;

	function OutOfRange(a,b){
		if(a<=0||b<=0)
			return false;
		if(a>length||b>length)
			return false;
		// console.log('try me !');		
		return true;
	}


	var castle=function(a,b){
		cross(a,b);
	}
	var bishop=function(a,b){
		CornerToCorner(a,b);
	}
	var queen=function(a,b){
		cross(a,b);
		CornerToCorner(a,b);
	}
	/*
		flag:Integer
		flag==-1 or flag==1 for direction
	*/
	var soldier=function(a,b,flag){	
		console.log('soldier in command');
		var step=1;
		if(b==2||b==7)
			step=2;
		for(var i=1;OutOfRange(a,b+i)&&i<=step;i++)
		{
			console.log('hehe');
			var div=location(a,i*flag);
			div.style.backgroundColor='#abc';
		}

	}
	var knight=function(a,b){
		if(OutOfRange(a,b-2))
		{
			if(OutOfRange(a-1,b-2))
			{
				var div=location(a-1,b-2);
				div.style.backgroundColor='#abc';
			}
			if(OutOfRange(a+1,b-2))
			{
				var div=location(a+1,b-2);
				div.style.backgroundColor='#abc';
			}
		}
		if(OutOfRange(a+2,b))
		{
			if(OutOfRange(a+2,b-1))
				location(a+2,b-1).style.backgroundColor='#abc';
			if(OutOfRange(a+2,b+1))
				location(a+2,b+1).style.backgroundColor='#abc';
		}
		if(OutOfRange(a-2,b))
		{
			if(OutOfRangge(a-2,b-1))
				location(a-2,b-1).style.backgroundColor='#abc';
			if(OutOfRange(a-2,b+1))
				location(a-2,b+1).style.backgroundColor='#abc';
		}
		if(OutOfRange(a,b-2))
		{
			if(OutOfRange(a-1,b-2))
				location(a-1,b-2).style.backgroundColor='#abc';
			if(OutOfRange(a+1,b-2))
				location(a+1,b-2).style.backgroundColor='#abc';
		}
	}
	var king=function(a,b)
	{
		if(OutOfRange(a,b+2))
			location(a,b+2).style.backgroundColor='#abc';
		if(OutOfRange(a,b-2))
			location(a,b-2).style.backgroundColor='#abc';
		if(OutOfRange(a+2,b))
			location(a+2,b).style.backgroundColor='#abc';
		if(OutOfRange(a-2,b))
			location(a-2,b).style.backgroundColor='#abc';
	}

	
!function(){
}();

function grid(x,y,selected){
		this.x=x;
		this.y=y;
		this.Selected=selected;
	}

	var grids=new Array(64);
	for(var i=0;i<grids.length;i++)
		grids[i]=new grid((i+1)%8,Math.floor(i/8+1),false);




// function grid(x,y,selected){
// 		this.x=x;
// 		this.y=y;
// 		this.Selected=selected;
// 		}

// var grids=new Array(64);
// for(var i=0;i<grids.length;i++)
// 	grids[i]=new grid((i+1)%8,i/8+1,false);	




