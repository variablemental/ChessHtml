!function(){
	var length=8;
	console.log('-------init------');
	var $=function(selector)
	{
		return document.querySelector(selector);
	}
	var insc=function(node,i,j){
			for(var i=0;i<length;i++)
			{
				var div=location(i,2);
				div.innerHTML='<img src=../../../img/soldier.png></img>';
			}

		}
	
}();

