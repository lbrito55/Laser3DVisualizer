const fs = require('fs');
const express = require('express');
const router = express.Router();
var content;


router.get('/' , (req, res)=>{
	url = req.query.tagid;
	console.log("la url es ",url);
	fs.readFile('FILES/'+url, function read(err, data) {
	    if (err) {
	        throw err;
	    }

	    var dataHexa = data.toString('hex').match(/../g).join(' ');
	    var arrayHexa = dataHexa.split(" ");

		/*var n =0;
		var j;
	    for (var i =0 ; i < arrayHexa.length; i++) {
			if(arrayHexa[i]=="fe"){
				i++;
				for(j=0; j< 30; j++){
					
				}
			}

			if(arrayHexa[i]=="ff"){

			}

		}*/
		var hola = "ff"; 
		var yourNumber = parseInt(hola, 16);
		console.log(yourNumber/12);

	   res.json(arrayHexa);
	 

	});
});

module.exports = router;