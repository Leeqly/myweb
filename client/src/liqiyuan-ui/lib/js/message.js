import { newNode, bodyAppend, removeNode, delay, $id, $class } from './public'

// 普通提示（提示后自动关闭）
let msg = (info)=>{
	let html = newNode('div')
	html.className = 'message-box'
	html.innerHTML = `<div class="msg-content">${info}</div>`
	bodyAppend(html)
	setTimeout( ()=>{
		html.style.opacity = '1'
	},10)
	setTimeout( ()=>{
		html.style.opacity = '0'
	},1300)
	setTimeout( ()=>{
		removeNode(html)
	},1600)
}

// 普通提示（提示后需要手动关闭）
let alert = (info)=>{
	let html = newNode('div')
	html.className = 'message-box'
	html.innerHTML = `
		<div class="alert-content">
			<div class="header">提示<i class="iconfont close">&#xe683;</i></div>
			<div class="content">${info}</div>
			<div class="footer">
				<button class="lui-btn close">确定</button>
			</div>
		</div>
		`
	bodyAppend(html)
	setTimeout( ()=>{
		html.style.opacity = '1'
	},10)
	var dom = $class('close');
	for(var i = 0;i<dom.length;i++){
		dom[i].onclick = ()=>{
			html.style.opacity = '0'
			setTimeout( ()=>{
				removeNode(html)
			},300)
		};
	}
}

// 确认提示
let confirm = (info, fn)=>{
	let html = newNode('div')
	html.className = 'message-box'
	html.innerHTML = `
		<div class="confirm-content">
			<div class="header">提示<i class="iconfont close">&#xe683;</i></div>
			<div class="content">${info}</div>
			<div class="footer">
				<button class="lui-btn close">取消</button>
				<button class="lui-btn" id="ensure">确定</button>
			</div>
		</div>
		`
	bodyAppend(html)
	setTimeout( ()=>{
		html.style.opacity = '1'
	},10)
	var dom = $class('close');
	for(var i = 0;i<dom.length;i++){
		dom[i].onclick = ()=>{
			html.style.opacity = '0'
			setTimeout( ()=>{
				removeNode(html)
			},300)
		};
	}
	$id('ensure').onclick = ()=>{
		fn()
		html.style.opacity = '0'
		setTimeout( ()=>{
			removeNode(html)
		},300)
	}
}

export { msg, alert, confirm }