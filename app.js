var http = require('http');
var	server = http.createServer(
	function(request, response){
		response.writeHead(200,{
			'Content-Type':'text/plain'
		});
		response.end('Supm8');
	}
);

server.listen(8000, function(){
	console.log('servidor escuchando en puerto 8000');
});