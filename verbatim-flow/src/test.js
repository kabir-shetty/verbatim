(function(window, undefined) {

	window.Asc.plugin.init = function() {
		window.Asc.plugin.executeMethod("InputText", ["Hello World"]);
	};
	
	window.Asc.plugin.button = function() {
		this.executeCommand("close", "");
	};

})(window, undefined);