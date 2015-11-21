const toStr = Function.bind.call(Function.call, Object.prototype.toString);

if (!Error.isError) {
	Error.isError = function isError(arg) {
		return !!arg && toStr(arg) === '[object Error]';
	};
}
