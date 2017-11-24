// function setError(node,info){
// 	var _this = $(node);
// 	if(_this.next('.check-result').length == '0'){
//          _this.after('<div class="check-result">' + info + '</div>');
//          _this.parent().prev('label').addClass('check-result');
//     }else{
//     	_this.next('.check-result').html(info);
//     }
//     _this.css('border-color','#fb6262');
//     _this.parents('.form-block').find('.layui-btn-confirm').prop('disabled',true);
// };

// // 设置验证为通过的状态
// function setSuccess(node){
// 	var _this = $(node);
// 	_this.next('.check-result').remove();
//     _this.css('border-color','#d2d2d2');
//     _this.parent().prev('label').removeClass('check-result');
//     _this.parents('.form-block').find('.layui-btn-confirm').prop('disabled',false);
// };


let setError = (node,info) => {
    console.log(t);
}

let test2 = () => {
    console.log('test2');
}

let blankCheck = (val,node,info) => {
    console.log(val,node,info);
    if(val == ''){
        node = info; 
    }
}

export { test1,test2,blankCheck }