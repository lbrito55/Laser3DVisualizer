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



app.use(bodyParser.urlencoded({extended:false})); //handle body requests

app.use(bodyParser.json())

app.use(cors())

const multerConfig = {
    
	storage: multer.diskStorage({
	 //Setup where the user's file will go
	 destination: function(req, files, next){
	   next(null, './src/public/uploads');
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


app.post('/api/getFile' , function(req, res){

//console.log(req.body);
var x = req.body;
var auxString =  x.data;
var csvData=[];

console.log(auxString);
if(!auxString.includes("and")){ // single file
    res.download('./src/public/uploads/' + auxString);
	console.log(res);
}else{

fs.createReadStream('./src/public/uploads/')
    .pipe(parse({delimiter: ':'}))
    .on('data', function(csvrow) {
        console.log(csvrow);
        //do something with csvrow
        csvData.push(csvrow);        
    })
    .on('end',function() {
      //do something wiht csvData
      res.send(csvData);
    });

}// else
	//var html = fs.readFileSync('index.html');
   // res.header("Content-Type", "text/html");
//middlewares
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
