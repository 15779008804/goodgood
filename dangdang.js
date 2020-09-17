var tab = document.querySelector('table')

//总计
	function sum(){
		var tr1 = tab.children[1].children
		var num = 0;
		for(var i=0;i<tr1.length;i++){
			var xuanze1 = tr1[i].children[0].firstElementChild
			if(xuanze1.checked){
				//获取小计
				var xiaoji = tr1[i].children[4].lastElementChild.innerHTML
				num += parseFloat(xiaoji)
			}
		}
		tab.children[2].children[2].children[0].lastElementChild.lastElementChild.innerHTML = num.toFixed(2)
	}

//店铺合计
	function heji(){
		var tr1 = tab.children[1].children
		var total = 0;
		for(var i=0;i<tr1.length;i++){
			var jine = tr1[i].children[4].lastElementChild.innerHTML
			total += parseFloat(jine)
		}
		tab.children[2].children[0].children[1].lastElementChild.innerHTML = total.toFixed(2)
	}
	
	heji()  //全局调用
	
//已选择几件产品
	function geshu(){
		var tr1 = tab.children[1].children
		var num111 = 0
		for(var i=0;i<tr1.length;i++){
			var xuanze2 = tr1[i].children[0].firstElementChild
			if(xuanze2.checked){
				num111++
			}
		}
		tab.children[2].children[2].children[0].children[1].firstElementChild.innerHTML = num111
	}
	
	geshu() //全局调用

tab.onclick=function(e){
	var e = e || window.event
	var target = e.target || e.srcElement
	
	sum()
	heji()
	geshu()


	//点击其他，全选被选中
	var aaa = 0 //选中次数
	if(target.name=="xuan"){
		var trs = tab.children[1].children
		for(var i=0;i<trs.length;i++){
			var inp = trs[i].children[0].firstElementChild
			if(inp.checked){
				aaa++
			}
		}
		if(aaa == trs.length){
			tab.children[0].children[0].children[0].firstElementChild.checked = true
		}else{
			tab.children[0].children[0].children[0].firstElementChild.checked = false
		}
		sum()
		heji()
		geshu()
	}
	

	
	//删除一行
	if(target.value == '删除'){
		target.parentNode.parentNode.remove()
		sum()
		heji()
		geshu()
	}
	
	//批量删除
	if(target.value == '批量删除'){
		var trs = tab.children[1].children
		for(var i=0;i<trs.length;i++){
			var inp = trs[i].children[0].firstElementChild
			if(inp.checked){
				inp.parentNode.parentNode.remove()
				i--
			}
		}
	sum()	
	heji()
	geshu()
	}
	
	//点击全选
	if(target.name=="quan"){
		var trs = tab.children[1].children
		for(var i=0;i<trs.length;i++){
			var inp = trs[i].children[0].firstElementChild
			if(target.checked == true){
				inp.checked = true
			}else{
				inp.checked = false
			}
		}
		sum()
		heji()
		geshu()
	}
	
	
	//加
	if(target.value == '+'){
		var val = target.previousElementSibling.value
		val++
		target.previousElementSibling.value = val
		//获取单价
		var price1 = target.parentNode.nextElementSibling.lastElementChild.innerHTML
		//计算
		var num = 0;
		num = parseInt(val)*parseFloat(price1)
		target.parentNode.nextElementSibling.nextElementSibling.lastElementChild.innerHTML = num.toFixed(2)
	}
	sum()
	heji()
	geshu()

	//减
	if(target.value == '-'){
		var val = target.nextElementSibling.value
		val--
		target.nextElementSibling.value = val
		//获取单价
		var price1 = target.parentNode.nextElementSibling.lastElementChild.innerHTML
		//计算
		var num = 0;
		num = parseInt(val)*parseFloat(price1)
		target.parentNode.nextElementSibling.nextElementSibling.lastElementChild.innerHTML = num.toFixed(2)
	}
	sum()
	heji()
	geshu()
	
	
	
}

//自定义数量
tab.onchange = function(e){
	var trs = tab.children[1].children
	var e = e || window.event
	var target = e.target || e.srcElement
	if(target){
		var val = target.value
		if(!isNaN(val)){
			for(var i=0;i<trs.length;i++){
				var val = trs[i].children[2].children[1].value
				var price1 =trs[i].children[3].lastElementChild.innerHTML
				//计算
				var num = 0
				num = parseFloat(price1) * parseInt(val)
				trs[i].children[4].lastElementChild.innerHTML = num.toFixed(2)
			}
		}
	}
	sum()
	heji()
	geshu()
}



//获取操作对象
var qiehuan = document.querySelector('.qiehuan')
var left1 = document.querySelector('.left1')
var right1 = document.querySelector('.right1')
var spans = document.querySelectorAll('.dotted>span')
var divs = document.querySelectorAll('.qiehuan>div')

//点右键
var spanIndex = 0
var divsIndex = 1
right1.onclick = function(){
				spans[spanIndex].className = ''
				spanIndex++
				if(spanIndex>=spans.length){
					spanIndex = 0
				}
				spans[spanIndex].className = 'aa'
				
				divs[divsIndex].style.display = 'none'
				divsIndex++
				if(divsIndex>=divs.length-2){
					divsIndex = 1
				}
				divs[divsIndex].style.display = 'block'
				
}
//点左键
left1.onclick = function(){
				spans[spanIndex].className = ''
				spanIndex--
				if(spanIndex<0){
					spanIndex = 1
				}
				spans[spanIndex].className = 'aa'
				
				divs[divsIndex].style.display = 'none'
				divsIndex++
				if(divsIndex>=divs.length-2){
					divsIndex = 1
				}
				divs[divsIndex].style.display = 'block'
				
}




var lis1 = document.querySelectorAll('.ul1>li')
var lis2 = document.querySelectorAll('.ul2>li')

//遍历第一页
for(let i=0;i<lis1.length;i++){
	lis1[i].onclick = function(e){
		var e = e || window.event
		var target = e.target || e.srcElement
		if(target.innerHTML == '加入购物车'){
			var trs = document.createElement('tr')
			tab.children[0].children[0].children[0].firstElementChild.checked = false
			trs.align='center'
			var tupian = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src
			var xinxi = target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
			var qian = target.previousElementSibling.previousElementSibling.lastElementChild.innerHTML
			
			trs.innerHTML = `<td><input type="checkbox" name="xuan"/></td>
					<td><img align="left" style="width: 60px;" src=${tupian}/><span style="font-size: 12px;">${xinxi}</span></td>
					<td><input type="button" value="-" /><input type="text" class="txt" value="1"/><input type="button" value="+" /></td>
					<td>$<span>${qian}</span></td>
					<td>$<span>${qian}</span></td>
					<td><input type="button" value="删除" /></td>`
			tab.children[1].appendChild(trs)
			sum()
			heji()
			geshu()
		}
	}
}

//遍历第二页
for(let j=0;j<lis2.length;j++){
	lis2[j].onclick = function(e){
		var e = e || window.event
		var target = e.target || e.srcElement
		if(target.innerHTML == '加入购物车'){
			var trs = document.createElement('tr')
			tab.children[0].children[0].children[0].firstElementChild.checked = false
			trs.align='center'
			var tupian = target.previousElementSibling.previousElementSibling.previousElementSibling.previousElementSibling.src
			var xinxi = target.previousElementSibling.previousElementSibling.previousElementSibling.innerHTML
			var qian = target.previousElementSibling.previousElementSibling.lastElementChild.innerHTML
			
			trs.innerHTML = `<td><input type="checkbox" name="xuan"/></td>
					<td><img align="left" style="width: 60px;" src=${tupian}/><span style="font-size: 12px;">${xinxi}</span></td>
					<td><input type="button" value="-" /><input type="text" class="txt" value="1"/><input type="button" value="+" /></td>
					<td>$<span>${qian}</span></td>
					<td>$<span>${qian}</span></td>
					<td><input type="button" value="删除" /></td>`
			tab.children[1].appendChild(trs)
			sum()
			heji()
			geshu()
		}
	}
}



