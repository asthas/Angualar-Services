angular.module('app')
.controller('ListCtrl', function(messages){
	var self = this;
	self.messages = messages.list;
})

.controller('PostCtrl', function(messages){
	var self = this;
	self.newMessage = 'Hello World!'

	self.addMessage = function(message){
		messages.add(message);
		self.newMessage='';
	};
})