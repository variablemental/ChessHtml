	
	var soldiers=new Array(16);  //偶数位---white,奇数位---black
	var castles=new Array(4);
	var bishops=new Array(4);
	var knights=new Array(4);
	var queens=new Array(2);
	var kings=new Array(2);
	var chesses=function(flag,x,y,steps,type){
		this.flag=flag;
		this.x=x;
		this.y=y;
		this.type=type;
		this.steps=steps;
	}
	var length=8;


function CheckRoad(x,y,chs)
	{

		var judge;
		if(!OutOfRange(x,y))
			return false;
		if(chs.type == castles[0].type)                
		{
			if(x==chs.x||y==chs.y){
				return true;
			}
			return false;
		}
		if(chs.type == bishops[0].type)
		{
			if(Math.abs(chs.x-x)==Math.abs(chs.y-y))
			{
				return true;
			}
			return false;
		}
		if(chs.type == knights[0].type)
		{
			if(((chs.x-x)/(chs.y-y)==1/2)||(chs.x-x)/(chs.y-y)==-1/2)
				return true;
			if(((chs.y-y)/(chs.x-x)==1/2)||(chs.y-y)/(chs.x-x)==-1/2)
				return true;
			return false;
		}
		if(chs.type == queens[0].type)
		{
			if(x==chs.x||y==chs.y)
				return true;
			if(Math.abs(chs.x-x)==Math.abs(chs.y-y))
				return true;
			return false;
		}
		if(chs.type == kings[0].type)
		{
			if(chs.x==x&&Math.abs(chs.y-y)<=2)
				return true;
			if(chs.y==y&&Math.abs(chs.x-x)<=2)
				return true;
			return false;
		}
		if(chs.type == soldiers[0].type)
		{
			console.log(chs);
			if(chs.y==2||chs.y==7)
			{
				if(((y-chs.y)*chs.flag<=2)&&chs.x==x)
					return true;
				return false;
			}
			else if(((y-chs.y)*chs.flag==1)&&chs.x==x)
				return true;
			return false;
		}

	};
!function(){
	//console.log(typeof(soldiers));
	var chess={
		flag:'w',
		x:0,
		y:2,
		steps:1
	};



	/*
		偶数是白色士兵,奇数是黑色士兵
	*/

	!function(){

		castles[0]=new chesses(1,1,1,0,'castle');
		castles[1]=new chesses(-1,1,8,0,'castle');
		castles[2]=new chesses(1,8,1,0,'castle');
		castles[3]=new chesses(-1,8,8,0,'castle');
		knights[0]=new chesses(1,2,1,0,'knight');
		knights[1]=new chesses(-1,2,8,0,'knight');
		knights[2]=new chesses(1,7,1,0,'knight');
		knights[3]=new chesses(-1,7,8,0,'knight');
		bishops[0]=new chesses(1,3,1,0,'bishop');
		bishops[1]=new chesses(-1,3,8,0,'bishop');
		bishops[2]=new chesses(1,6,1,0,'bishop');
		bishops[3]=new chesses(-1,6,8,0,'bishop');
		kings[0]=new chesses(1,4,1,0,'king');
		kings[1]=new chesses(-1,4,8,0,'king');
		queens[0]=new chesses(1,5,1,0,'queen');
		queens[1]=new chesses(-1,5,8,0,'queen');
		for(var i=0;i<soldiers.length;i++)
		{
			if(i%2==0)
				soldiers[i]=new chesses(1,Math.floor((i+1)/2),2,2,'soldier');
			else
				soldiers[i]=new chesses(-1,Math.floor((i+1)/2),7,2,'soldier');
		}
		soldiers[0]=new chesses(1,8,2,2,'soldier');	
	}();

	/*
		测试选择的路径可不可以选择
		返回值：boolean
		测试: A instanceof B
	*/

	

}();
/*
	type: 'u'代表向上
		  'l'代表向左
		  'r'代表向右
		  'd'代表向下
		  'a'代表左上
		  'b'代表右上
		  'c'代表左下
		  'e'代表右下
		  'k'代表任意两格之内
		  's'代表向前一格之内

*/

// function CheckObstacle(x,y,direction){
// 	console.log('Obstacle'+direction);
// 	switch(direction){
// 		case 'u':
// 					for(var i=y;i>=1;i--)
// 					{
// 						if(getgrids(x,i).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'd': for(var i=y;i<=length;i++)
// 					{
// 						console.log(getgrids(x,i).haschess);
// 						if(getgrids(x,i).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'r': for(var i=x;i<=length;i++)
// 					{
// 						if(getgrids(i,y).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'l': for(var i=x;i>=0;i--)
// 					{
// 						if(getgrids(i,y).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'a' :  for(var i=x;i>=1;i--)
// 					{

// 						if(getgrids(i,y--).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'b': for(var i=x;i>=1&&j>=1;i++)
// 					{
// 						if(getgrids(i,y--).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'c': for(var i=x;i>=1&&j>=1;i--)
// 					{
// 						if(getgrids(i,y++).haschess)
// 							return i;
// 					}
// 					break;
// 		case 'e':for(var i=x;i>=1&&j>=1;i++)
// 					{
// 						if(getgrids(i,y++).haschess)
// 							return i;
// 					}
// 					break;

// 	}
// 	return 0;
// };
	function getgrids(x,y){
		return grids[(x-1)*8+y-1];
	}