
!function()
{



}();

var dots=function(x,y)
{
	this.x=x;
	this.y=y;
	this.equals=function(data)
	{
		if(this.x==data.x&&this.y==data.y)
			return true;
		return false;
	}
};

var createNode=function(data)
{
	this.data=data;
	this.next=null;
}


var Chain=function(head)
{
	this.head=head;
	
this.findNode=function(Node)
{
	return function(key)				//这个是实际的参数，这个函数有点怪异
	{
		while(Node.data.next!=key)
		{
			Node=Node.next;
		}
		if(Node.next==null)
			return Node;
		else
			return Node.next;
	}
}(head);

/*
data是节点的数据
key是插入之前的节点
*/
this.insert=function(data,key)
{
	var newNode=createNode(data);
	var currentNode=findNode(key);
	newNode.next=currentNode.next;
	currentNode.next=newNode;
};

this.append=function(data)
{
	var newNode=new createNode(data);
	var currentNode=head;
	while(currentNode.next!=null)
		currentNode=currentNode.next;
	currentNode.next=newNode;
	newNode.next=null;
};

this.removeTail=function()
{
	var newdata=head;
	if(head.next!=null)
	{
	while(newdata.next.next!=null)
	{
		newdata=newdata.next;
	}
	}
	newdata.next=null;
}

this.hasNode=function(data)
{
	var Node=this.head;
	while(Node!=null)
	{
		if(Node.data.x==data.x&&Node.data.y==data.y)
		{
			return true;
		}
		Node=Node.next;
	}
	return false;
};

this.clear=function()
{
	head.next=null;
};

this.show=function()
{
	var currentNode=head;
	if(currentNode==null)
		console.log('fucking node');
	while(currentNode!=null)
	{
		console.log(currentNode.data.x+""+currentNode.data.y);
		currentNode=currentNode.next;
	}
}

this.getTail=function()
{
	console.log(this.head);
	if(this.head.next!=null)
	{
		var currentNode=head.next;
		while(currentNode.next!=null)
			currentNode=currentNode.next;
		return currentNode;
	}
	return head;
}

this.merge=function(chain2)
{
	var tail=this.getTail();
	tail.next=chain2.head.next;
}

};
