const fs = require('fs');
const express = require('express');
const router = express.Router();
var content;


router.get('/' , (req, res)=>{
	url = req.query.tagid;
    substring = "AnotherFile";
	if(url.includes(substring)){ //2 files
		var urls=url.split("AnotherFile");
		var auxUrls= [];
		if(urls[0].includes("Left")){ //rigth is auxUrls[0]
			auxUrls[0]=urls[1];
			auxUrls[1]=urls[0];
		}else{
			auxUrls[0]=urls[0];
			auxUrls[1]=urls[1];
		}
		//rigth is auxUrls[0]
		console.log(auxUrls[0],auxUrls[1]);
		fs.readFile('FILES/'+auxUrls[0], function read(err, data) {
			if (err) {
				throw err;
			}

		   fs.readFile('FILES/'+auxUrls[1], function read(err, data2) {
				if (err) {
					throw err;
				}
		
				var dataHexa = data.toString('hex').match(/../g).join(' ');
				//var arrayHexa = dataHexa.split(" ");
				var dataHexa2 = data2.toString('hex').match(/../g).join(' ');
				//var arrayHexa2 = dataHexa2.split(" ");

				var auxDataHexa = dataHexa.concat("hereIsTheSecond");
				var auxDataHexa = auxDataHexa.concat(dataHexa2);

				res.json(auxDataHexa);

	
		});


		 
	
		});

	}else{ //no 2 files
		console.log("la url es ",url);
		fs.readFile('FILES/'+url, function read(err, data) {
			if (err) {
				throw err;
			}
	
			var dataHexa = data.toString('hex').match(/../g).join(' ');
			var arrayHexa = dataHexa.split(" ");
	
	
			var hola = "ff"; 
			var yourNumber = parseInt(hola, 16);
			console.log(yourNumber/12);
	
		   res.json(arrayHexa);
		 
	
		});
	}


});

module.exports = router;