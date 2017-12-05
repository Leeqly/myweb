let newNode = (ele)=>{
	var node = document.createElement(ele)
	return node
}

let bodyAppend = (ele)=>{
	document.body.appendChild(ele)
}

let removeNode = (ele)=>{
	document.body.removeChild(ele)
}

let $id = (id)=>{
	var node = document.getElementById(id)
	return node
}

let $class = (clas)=>{
	var nodeArr = document.getElementsByClassName(clas)
	return nodeArr
}

let setCookie = (name, val, sec)=>{
	let exp = new Date()
	exp.setTime(exp.getTime() + sec * 1000)
	document.cookie = name + " = " + escape (val) + ";expires=" + exp.toGMTString()
}

let getCookie = (key)=>{
	let cookieArr = document.cookie.split('; ')
	for(let i=0;i<cookieArr.length;i++){
		if(cookieArr[i].split('=')[0] == key){
			return cookieArr[i].split('=')[1]
		}
	}
}

export { newNode, bodyAppend, removeNode, $id, $class, setCookie, getCookie }