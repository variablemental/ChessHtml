!function()
{
	var num=8;
	document.write("<script language=javascript src='../InternationalChess/jquery-3.1.0.js'></script>");
	document.write("<script language=javascript src='../InternationalChess/chains.js'");
	// document.write("<script language=javascript src='../InternationalChess.html'></script>");
	/*
		记录棋盘所有棋子的位置
	*/

}();


	var gridChess=function()
	{	
		var num=8;
	this.len=8;
	this.width=8;
	this.chessgrid=new Array(num);
	/*
		初始化棋盘格局
	*/
	this.init=function()
	{
	for(var i=0;i<num;i++)
	{
		this.chessgrid[i]=new Array(num);
		for(var j=0;j<num;j++)
		{
			this.chessgrid[i][j]=0;
		}
	}
		for(var i=0;i<num;i++)
		{
			this.chessgrid[0][i]=1;
			this.chessgrid[1][i]=1;
			this.chessgrid[6][i]=2;
			this.chessgrid[7][i]=2;
		}
	};
	}

	gridChess.prototype.show=function()
	{
		console.log("棋盘目前状态:");
		for(var i=0;i<8;i++)
		{
			console.log(this.chessgrid[i]);
		}
	}
	/*
		作用:更新棋子的位置
		x1:原来的位于数组中的x坐标(已经经过转换)
		y1:原来的位于数组中的Y坐标(已经经过转换)
		x2:现在的位于数组中的X坐标
		y2:现在的位于数组中的Y坐标
		注意：传进来的参数都是在真实棋盘的位置，也就是说应该做减一处理
	*/
	gridChess.prototype.ChangePosition=function(x1,y1,x2,y2)
	{
		if(this.JudgeBoundry(x1-1,y1-1)&&this.JudgeBoundry(x2-1,y2-1))
		{
			this.chessgrid[x2-1][y2-1]=this.chessgrid[x1-1][y1-1];
			this.chessgrid[x1-1][y1-1]=0;

		}
	};
	//测试是否出界
	gridChess.prototype.JudgeBoundry=function(x,y)
	{
		if(x<0||y<0)
			return false;
		if(x>=this.len||y>=this.width)
			return false;
		return true;
	}
	gridChess.prototype.getCertainStatus = function(x,y) {
		return this.chessgrid[x][y];
	};

	/*
		八个方向:
				1.上
				2.下
				3.左
				4.右
				5.左上
				6.左下
				7.右上
				8.右下
	*/
	gridChess.prototype.getFeasibleChains=function(x,y,direction)
	{
		console.log(x+","+y);
		var startdot=new dots(0,0);
		var head=new createNode(startdot);
		var feasible=new Chain(head);
		switch(direction)
		{
			case 1:
					for(var i=x-1,token=true;this.JudgeBoundry(i,y)&&token;i--)
					{
						console.log(i+","+y);
						if(this.chessgrid[i][y]==this.chessgrid[x][y])
							continue;
						else
						{
							var data=new dots(i,y);
							feasible.append(data);
						}
					}
					return feasible;
			case 2:
					for(var i=x+1,token=true;this.JudgeBoundry(i,y)&&token;i++)
					{
						console.log("测试格"+this.chessgrid[i][y]+','+this.chessgrid[x][y]);
						if(this.chessgrid[i][y]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(i,y);
							feasible.append(data);
						}
					}
					console.log("feasible showing");
					feasible.show();
					return feasible;
			case 3:
					for(var i=y-1,token=true;this.JudgeBoundry(x,i)&&token;i--)
					{
						if(this.chessgrid[x][i]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(x,i);
							feasible.append(data);
						}
					}
					return feasible;
			case 4:
					for(var i=y+1,token=true;this.JudgeBoundry(x,i)&&token;i++)
					{
						if(this.chessgrid[x][i]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(x,i);
							feasible.append(data);
						}
					}
					return feasible;
			case 5:
					for(var i=1,token=true;this.JudgeBoundry(x-i,y-i)&&token;i++)
					{
						if(this.chessgrid[x-i][y-i]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(x-i,y-i);
							feasible.append(data);
						}
					}
					return feasible;
			case 6:
					for(var i=1,token=true;this.JudgeBoundry(x+i,y-i)&&token;i++)
					{
						if(this.chessgrid[x+i][y-i]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(x+i,y-i);
							feasible.append(data);
						}
					}
					return feasible;
			case 7:
					for(var i=1,token=true;this.JudgeBoundry(x+i,y-i)&&token;i++)
					{
						if(this.chessgrid[x+i][y-i]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(x+i,y-i);
							feasible.append(data);
						}
					}
					return feasible;
			case 8:
					for(var i=1,token=true;this.JudgeBoundry(x+i,y+i)&&token;i++)
					{
						if(this.chessgrid[x+i][y+i]==this.chessgrid[x][y])
						{
							token=false;
							continue;
						}
						else
						{
							var data=new dots(x+i,y+i);
							feasible.append(data);
						}
					}
					return feasible;
		}

	}

	gridChess.prototype.CheckObstacle=function(x,y,offsetX,offsetY)
	{
		if(OutOfRange(x+offsetX,y+offsetY))
		{
			// console.log("chessgrid["+(x+offsetX-1)+"]["+(y+offsetY-1)+"]");
			// console.log(this.chessgrid[x+offsetX-1][y+offsetY-1]);

			if(this.chessgrid[x+offsetX-1][y+offsetY-1]!=this.chessgrid[x-1][y-1])//对齐位置
			{
				// console.log((x+offsetX-1)+","+(y+offsetY-1)+"通过验证");						
				return true;
			}
		}
		return false;
	};


