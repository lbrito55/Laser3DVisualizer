const express = require('express');
const morgan = require('morgan');

const bodyParser = require("body-parser");
const multer = require('multer');

const path = require('path');
const app = express();



var fs = require('fs'); 
var parse = require('csv-parse');

var cors = require('cors');



import React from 'react';
import {render } from 'react-dom';

import App from './app/App'
import { AndOrNotEvaluator } from 'babylonjs';

let urlencodedParser = bodyParser.json;
//settings
app.set('port', process.env.PORT || 8080);


app.use('/apiTL',require('./routes/task.routes'));

app.use(bodyParser.urlencoded({extended:false})); //handle body requests

app.use(bodyParser.json())

app.use(cors())

const multerConfig = {
    
	storage: multer.diskStorage({
	 //Setup where the user's file will go
	 destination: function(req, files, next){
	   next(null, './resources/app/src/public/uploads');
	   },   
	
		//Then give the file a unique name
		filename: function(req, files, next){
		//console.log(files);
		next(null, files.originalname);
		  }
		})   
}


/*
  app.post('/api/file',function(req,res){
	console.log(req);
	upload(req,res,function(err) {
        console.log(req.body);
        console.log(req.files);
        if(err) {
            return res.end("Error uploading file.");
        }
        res.end("File is uploaded");
    });
});
*/

app.post('/api/file',multer(multerConfig).array('files',2),function(req,res){
	res.send('Complete!');
 });



 app.get('/api/getFile', function (req, res) {
   var url = req.query.tagid;
   var substring = "AnotherFile";
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
		fs.readFile('resources/app/src/public/uploads/'+auxUrls[0], function read(err, data) {
			if (err) {
				throw err;
			}

		   fs.readFile('resources/app/src/public/uploads/'+auxUrls[1], function read(err, data2) {
				if (err) {
					throw err;
				}
		
				var dataHexa = data.toString('hex').match(/../g).join(' ');
				//var arrayHexa = dataHexa.split(" ");
				var dataHexa2 = data2.toString('hex').match(/../g).join(' ');
				//var arrayHexa2 = dataHexa2.split(" ");

				var auxDataHexa = dataHexa.concat("hereIsTheSecond");
				var auxDataHexa = auxDataHexa.concat(dataHexa2);
                
                fs.unlink('resources/app/src/public/uploads/'+auxUrls[0], (err) => {
                    if (err) throw err;
                         console.log('Deleted succesfully');
                });
                
                fs.unlink('resources/app/src/public/uploads/'+auxUrls[1], (err) => {
                    if (err) throw err;
                         console.log('Deleted succesfully');
                }); 

				res.json(auxDataHexa);

	
		});
		 	
	});

	}else{ //no 2 files
        
		fs.readFile('resources/app/src/public/uploads/'+url, function read(err, data) {
			if (err) {
				throw err;
			}
	
			var dataHexa = data.toString('hex').match(/../g).join(' ');
			var arrayHexa = dataHexa.split(" ");
	
	
			var hola = "ff"; 
			var yourNumber = parseInt(hola, 16);
			console.log(yourNumber/12);
    
            fs.unlink('resources/app/src/public/uploads/'+url, (err) => {
            if (err) throw err;
                 console.log('Deleted succesfully');
            }); 

		   res.json(arrayHexa);
		 
       

		});
	}
});




app.use(morgan('dev'));
app.use(express.json());

//static files
 app.use('/', express.static(__dirname + '/public/uploads')); 


//starting server
app.listen(app.get('port'), () => {
	console.log(`server on port ${app.get('port')}`);
});




render(<App/> ,document.getElementById('app'));
