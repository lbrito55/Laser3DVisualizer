const fs = require('fs');
const express = require('express');
const router = express.Router();
var content;


router.get('/' , (req, res)=>{
	fs.readFile('C:/Users/Jazocarivic/Downloads/MP_558_TRACK2_080618-102655.csv', function read(err, data) {
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