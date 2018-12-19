Para ejercutar:

Parate en la carpeta de Laser3DVisualizer.

npm run webpack para hacer build.. cualquier cambio que hagas

y luego 

electron .

para ejecutar.

EN LA APP, vas a ver un boton que dice select Files,

te vas a la carpeta FILES dentro de Laser3DVisualizer y seleccionas un (1) archivo, preferiblemente los que dicen MP....


El peo esta en

***************Linea 94 App.js

getData(url){
		fetch('http://localhost:8080/api/getFile', { // Your POST endpoint
		method: 'POST',
		headers: {
			'Content-Type': 'application/json'
		},
		body: JSON.stringify({data: url}) // This is your file object
			}).then(response => response.json())
			  .then(data => this.setState({ data1:data },()=> {this.useData();}));
			
		//	console.log(this.props.data1);
	}
  
  eso manda el string del file y el response se trae el archivo estatico
  
 XXXXXXXXXXXX Pero bota "Type error failed to fetch"XXXXXXXXXXXXXXXXXXXXXXXXXXX
  
  ******* El servidor de express se llama index.js y esta en /src/index.js
  
  el handler de esa operacion es..
**************Linea 74 index.js  
  app.post('/api/getFile' , function(req, res){

//console.log(req.body);
var x = req.body;
var auxString =  x.data;
var csvData=[];

console.log(auxString);
if(!auxString.includes("and")){ // single file
    res.download('./src/public/uploads/' + auxString); **** esto es lo importante que aqui mando a descargar el archivo
	console.log(res);
}else{


fs.createReadStream('./src/public/uploads/') ** a todo esto no le pares bolas que es logica que tengo que agregar despues, para dos archivos
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
}


