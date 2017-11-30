import './lib/css/lui.css'
import { newNode, bodyAppend, removeNode, $id, $class } from './lib/js/public'
import { msg, alert, confirm, closeDialog, openDialog } from './lib/js/message'

let lui = {
	$id: $id,
	$class: $class,
	msg: msg,
	alert: alert,
	confirm: confirm,
	closeDialog: closeDialog,
	openDialog: openDialog
}

export default lui