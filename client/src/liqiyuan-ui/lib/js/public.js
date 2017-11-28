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

export { newNode, bodyAppend, removeNode, $id, $class }