import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import paletteColor from './paletteColor';
import paletteGrays from './paletteGrays';
import fixData from './fixData';
import UIPaletteColor from './UIPaletteColor.js';
import UIPaletteGrays from './UIPaletteGrays.js';
import UINavbar from './UINavbar.js';

//Global variables because problems with ambient
let map;
let flagColor ;
let flagRange ;
let light
let scene;
let camera;
let mapSubX ;         
let mapSubZ; 
let mapData;
let dataI;
let itensityFe ;
let itensityFf ;
let rangeFe ;
let rangeFf ;
let positionsLength;
class App extends Component{
		
	constructor(props) {
		super(props);
		this.state = { 
			showModal: false,
			data1:null, 
			twoFiles:false, 
			engine:null 
		};
		this.clickInload= this.clickInload.bind(this);
		this.getData= this.getData.bind(this);
		this.handleFileSelect= this.handleFileSelect.bind(this);
		this.useData= this.useData.bind(this);
		this.clickIn2D= this.clickIn2D.bind(this);
		this.clickIn3D= this.clickIn3D.bind(this);
		this.clickInWireframe= this.clickInWireframe.bind(this);
		this.clickInColor= this.clickInColor.bind(this);
		this.clickInGray= this.clickInGray.bind(this);
		this.clickInIntensity= this.clickInIntensity.bind(this);
		this.clickInRange= this.clickInRange.bind(this);
		this.processFileColor= this.processFileColor.bind(this);
	}

	clickInload(){
		document.getElementById("inputUpload").click();
		let UpdFile = document.getElementById('inputUpload');
		UpdFile.addEventListener('change', this.handleFileSelect, false);
	}

	handleFileSelect(evt) {
		//Prepare name of file
		this.setState({showModal: true});
		let nameFileForHtml = document.getElementById("nameFile");		
		var files = evt.target.files;
		var url="";
		var flagTwoFiles = false;
		var nameFiles="";

		for(var f = 0; f < files.length; f++){
		var formData = new FormData();
		//formData.set('files', files);
		formData.append('files', files[f]);
		fetch('http://localhost:8080/api/file', { // Your POST endpoint
		method: 'POST',
		body: formData // This is your file object
		}).catch(err => console.log(err));
	}

	if(files.length == 2)// two files have been sent
		flagTwoFiles = true;

		for (var i = 0, f; f = files[i]; i++) {
			if(i>0){ //if two files
				url=url.concat("AnotherFile");
				nameFiles=nameFiles.concat(" and ")
				flagTwoFiles = true;
			}
			url=url.concat(f.name);
			nameFiles=nameFiles.concat(f.name);
			
		}	
		nameFileForHtml.innerHTML = nameFiles;
		console.log(url);
		this.setState({ twoFiles: flagTwoFiles});
		this.getData(url);
	}

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

	useData(){	
		//variable declaration
		let aux2d = document.getElementById("2D");
		let aux3d = document.getElementById("3D");
		let auxWire = document.getElementById("wireframe");
		let color = document.getElementById("color");
		let gray = document.getElementById("gray");
		let intensityA = document.getElementById("intensityA");
		let rangeA = document.getElementById("rangeA");
		let Slide = document.getElementById("fader");
		let auxPaletteColor = document.getElementsByClassName("my-legendColor");
		let auxPaletteGray = document.getElementsByClassName("my-legendGray");
		
		let auxCol = document.getElementsByClassName("auxCol");	
		
		let flagTwoFiles = this.state.twoFiles;
		flagColor = true;
		flagRange = false;

		let canvas = document.getElementById('canvas');
		var engine = new BABYLON.Engine(canvas, true);
		
		//Fix the data 
		var arrayData = fixData(this.state.data1,this.state.twoFiles);
		console.log(arrayData);
		itensityFe = arrayData[0];
		rangeFe = arrayData[1];
		itensityFf = arrayData[2];
		rangeFf = arrayData[3];

		//function for create scene 
		var createScene = function() {
		
			//create scene and feactures
			scene = new BABYLON.Scene(engine);
			scene.clearColor = new BABYLON.Color3(0.168, 0.188, 0.207);

			camera = new BABYLON.ArcRotateCamera("Camera", 60, 0, 10, new BABYLON.Vector3(60, 0, 0), scene);
			camera.setPosition(new BABYLON.Vector3(2.988369164965735, 1.6961842891958216, 100));
			camera.alpha=3.0476813011282506;
			camera.beta= 1.5642642054069178;
			camera.attachControl(canvas, true);

			light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
			light.intensity = 1;
			light.specular = BABYLON.Color3.Black();
			
			//first object 3D
			if(flagTwoFiles){
				mapSubZ=60;
				mapSubX=rangeFe.length/60;
			}else{
				mapSubZ=30;
				mapSubX=rangeFe.length/30;
			}
							
			
			mapData = new Float32Array(mapSubX * mapSubZ * 3); // 3 float values per point : x, y and z
			dataI = 0;
			var t = 0;
			
			var paths = [];
			
				
			var z;  
			var x; 
			var y;  				                  
			for (var l = 0; l < mapSubX; l++) {
				var path = [];                          // only for the ribbon
				for (var w = 0; w < mapSubZ; w++) {
					z =w;
					x = l;
					y = -rangeFe[dataI];

					mapData[3 *(l * mapSubX + w)] = x;
					mapData[3 * (l * mapSubX + w) + 1] = y;
					mapData[3 * (l * mapSubX + w) + 2] = z;
						
					path.push(new BABYLON.Vector3(x, y, z));
					dataI++;
				}
				paths.push(path);
			}
				
			map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);			
			map.position.y = 0;
			var mapMaterial = new BABYLON.StandardMaterial("mm", scene);		
			map.material = mapMaterial;
				
			//Paint the object
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
			if(!colors) {				
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
					
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				positionsLength = positions.length;
				for(var p = 0; p < ((positionsLength / 3)); p++) {		
					var arr = paletteColor(itensityFe[p]);
					colors.push(arr[0], arr[1], arr[2], 1);		
				}	
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
			}
				
			//Press A and D for move the camera	
			var mapColor ={}; 
			scene.actionManager = new BABYLON.ActionManager(scene);

			scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
				mapColor[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
			}));

			scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
				mapColor[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
			}));	
		
		
			scene.registerAfterRender(function() {		
				if(mapColor["d"] || mapColor["D"]) {
					t=t+valueSlide;
					camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					camera.setPosition(new BABYLON.Vector3(camera.position.x+valueSlide, camera.position.y, camera.position.z)); 
				}


				if(mapColor["a"] || mapColor["A"]) {
					t=t-valueSlide;
					camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					camera.setPosition(new BABYLON.Vector3(camera.position.x-valueSlide, camera.position.y, camera.position.z)); 
				}
			});

			//Slider for speed move
			let valueSlide =10;
			Slide.oninput = function (){
				valueSlide= parseInt(Slide.value);
				var output = document.getElementById("volume");
				output.value = valueSlide;
			}



			return scene;
		}

		//call create and render scene
		scene = createScene();
		engine.runRenderLoop(function(){
			scene.render();
		});
		
		//initial UI
		this.setState({showModal: false});
		aux3d.classList.add("activeState");
		aux2d.classList.remove("activeState");
		auxWire.classList.remove("activeState");
		color.classList.add("activeState");
		gray.classList.remove("activeState");
		intensityA.classList.add("activeState");
		rangeA.classList.remove("activeState");

		auxPaletteColor[0].style.display = "inline";
		auxPaletteGray[0].style.display = "none";
		auxCol[0].style.display = "block";
	}

	processFile2D() {	
		let aux2d = document.getElementById("2D");
		let aux3d = document.getElementById("3D");
		let auxWire = document.getElementById("wireframe");	

		aux2d.classList.add("activeState");
		aux3d.classList.remove("activeState");
		auxWire.classList.remove("activeState");
	
		
			
		map.dispose();
					
		var paths = [];

		var z;  
		var x; 
		var y;  				                   // array for the ribbon model
		for (var l = 0; l < mapSubX; l++) {
			var path = [];                          // only for the ribbon
			for (var w = 0; w < mapSubZ; w++) {
				z =w;
				x = l;
				//var y = noise.simplex2(x * noiseScale, z * noiseScale);
				//y *= (0.5 + y) * y * elevationScale;   // let's increase a bit the noise computed altitude
			
				y = 0;
				

				mapData[3 *(l * mapSubX + w)] = x;
				mapData[3 * (l * mapSubX + w) + 1] = y;
				mapData[3 * (l * mapSubX + w) + 2] = z;
				
				path.push(new BABYLON.Vector3(x, y, z));
				dataI++;
			}
			paths.push(path);
		}
		
		//console.log(rangeFe);

		map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
		//map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
		map.position.y = 0;
		var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
		
		mapMaterial.wireframe = false;
		map.material = mapMaterial;
		
		//light.excludedMeshes.push(map);
		if(flagColor){
			if(flagRange){
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);					
				var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
			
					
					colors = [];
					var thom =0 ;
					var ty = 0;
					var ja = 0;
					
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					//console.log(itensityFe);
					for(var p = 0; p < ((positions.length / 3)  ); p++) {
						var arr = paletteColor(Math.round(rangeFe[p])*12);
						colors.push(arr[0], arr[1], arr[2], 1);
						
					}
					
					map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
				
			}else{
				var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);

			colors = [];
			var thom =0 ;
			var ty = 0;
			var ja = 0;
			
			var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
			
			//console.log(itensityFe);
			//console.log(Math.max(...rangeFe));

			for(var p = 0; p < ((positions.length / 3)  ); p++) {
				
				var arr = paletteColor(itensityFe[p]);
				colors.push(arr[0], arr[1], arr[2], 1);
				
				
			}
			
			map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
		
			}
		
	}else{
			if(flagRange){
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				
				var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
			
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				//console.log(itensityFe);
				//console.log(Math.max(...rangeFe));
				for(var p = 0; p < ((positions.length / 3)  ); p++) {
					var arr = paletteGrays(Math.round(rangeFe[p])*12);
					
					colors.push(arr[0], arr[1], arr[2], 1);
					
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

			}else{
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);

		
			colors = [];
			var thom =0 ;
			var ty = 0;
			var ja = 0;
		
			var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
			
			//console.log(itensityFe);
			//console.log(Math.max(...rangeFe));
			for(var p = 0; p < ((positions.length / 3)  ); p++) {
				var arr = paletteGrays(itensityFe[p]);
				
				colors.push(arr[0], arr[1], arr[2], 1);
				
				
			}
			
			map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

			}
		
	}
	}

	clickIn2D(){
		this.setState({ showModal: true }, () => {
			map.dispose();
			setTimeout(() => {
				this.processFile2D();
				this.setState({ showModal: false });
			}, 500);
		});
	}

	processFile3D() {
		let aux2d = document.getElementById("2D");
		let aux3d = document.getElementById("3D");
		let auxWire = document.getElementById("wireframe");
		aux3d.classList.add("activeState");
		aux2d.classList.remove("activeState");
		auxWire.classList.remove("activeState");

			map.dispose();
						
			var paths = [];
			dataI=0;
			
			var z;  
			var x; 
			var y;  				                   // array for the ribbon model
			for (var l = 0; l < mapSubX; l++) {
				var path = [];                          // only for the ribbon
				for (var w = 0; w < mapSubZ; w++) {
					z =w;
					x = l;
					//var y = noise.simplex2(x * noiseScale, z * noiseScale);
					//y *= (0.5 + y) * y * elevationScale;   // let's increase a bit the noise computed altitude
				
					y = -rangeFe[dataI];
					

					mapData[3 *(l * mapSubX + w)] = x;
					mapData[3 * (l * mapSubX + w) + 1] = y;
					mapData[3 * (l * mapSubX + w) + 2] = z;
					
					path.push(new BABYLON.Vector3(x, y, z));
					dataI++;
				}
				paths.push(path);
			}
			
			//console.log(rangeFe);
	
			map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
			//map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
			map.position.y = 0;
			var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
			
			mapMaterial.wireframe = false;
			map.material = mapMaterial;
			
			//light.excludedMeshes.push(map);
			if(flagColor){
				if(flagRange){
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);					
					var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
				
						
						colors = [];
						var thom =0 ;
						var ty = 0;
						var ja = 0;
						
						var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
						//console.log(itensityFe);
						for(var p = 0; p < ((positions.length / 3)  ); p++) {
							var arr = paletteColor(Math.round(rangeFe[p])*12);
							colors.push(arr[0], arr[1], arr[2], 1);
							
						}
						
						map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
					
				}else{
					var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);

				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				//console.log(itensityFe);
				//console.log(Math.max(...rangeFe));

				for(var p = 0; p < ((positions.length / 3)  ); p++) {
					
					var arr = paletteColor(itensityFe[p]);
					colors.push(arr[0], arr[1], arr[2], 1);
					
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
			
				}
			
		}else{
				if(flagRange){
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					
					
					var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
			
				
					colors = [];
					var thom =0 ;
					var ty = 0;
					var ja = 0;
					
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					
					//console.log(itensityFe);
					//console.log(Math.max(...rangeFe));
					for(var p = 0; p < ((positions.length / 3)  ); p++) {
						var arr = paletteGrays(Math.round(rangeFe[p])*12);
						
						colors.push(arr[0], arr[1], arr[2], 1);
						
						
					}
					
					map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

				}else{
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					
					
				var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
			
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				//console.log(itensityFe);
				//console.log(Math.max(...rangeFe));
				for(var p = 0; p < ((positions.length / 3)  ); p++) {
					var arr = paletteGrays(itensityFe[p]);
					
					colors.push(arr[0], arr[1], arr[2], 1);
					
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

				}
			
		}
	

	
	}

	clickIn3D(){
		this.setState({ showModal: true }, () => {
			map.dispose();
			setTimeout(() => {
				this.processFile3D();
				this.setState({ showModal: false });
			}, 500);
		});
	}
	
	processFileWireframe() {
		let aux2d = document.getElementById("2D");
		let aux3d = document.getElementById("3D");
		let auxWire = document.getElementById("wireframe");

		
		
		auxWire.classList.add("activeState");
		aux2d.classList.remove("activeState");
		aux3d.classList.remove("activeState");
	
		
			
			map.dispose();
						
			var paths = [];
			dataI=0;
			
			var z;  
			var x; 
			var y;  				                   // array for the ribbon model
			for (var l = 0; l < mapSubX; l++) {
				var path = [];                          // only for the ribbon
				for (var w = 0; w < mapSubZ; w++) {
					z =w;
					x = l;
					//var y = noise.simplex2(x * noiseScale, z * noiseScale);
					//y *= (0.5 + y) * y * elevationScale;   // let's increase a bit the noise computed altitude
				
					y = -rangeFe[dataI];
					

					mapData[3 *(l * mapSubX + w)] = x;
					mapData[3 * (l * mapSubX + w) + 1] = y;
					mapData[3 * (l * mapSubX + w) + 2] = z;
					
					path.push(new BABYLON.Vector3(x, y, z));
					dataI++;
				}
				paths.push(path);
			}
			
			//console.log(rangeFe);
	
			map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 3}, scene);
			//map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
			map.position.y = 0;
			var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
			
			mapMaterial.wireframe = true;
			map.material = mapMaterial;
			
			//light.excludedMeshes.push(map);
			if(flagColor){
				if(flagRange){
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);					
					var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
				
						
						colors = [];
						var thom =0 ;
						var ty = 0;
						var ja = 0;
						
						var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
						//console.log(itensityFe);
						for(var p = 0; p < ((positions.length / 3)  ); p++) {
							var arr = paletteColor(Math.round(rangeFe[p])*12);
							colors.push(arr[0], arr[1], arr[2], 1);
							
						}
						
						map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
					
				}else{
					var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);

				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				//console.log(itensityFe);
				//console.log(Math.max(...rangeFe));

				for(var p = 0; p < ((positions.length / 3)  ); p++) {
					
					var arr = paletteColor(itensityFe[p]);
					colors.push(arr[0], arr[1], arr[2], 1);
					
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
			
				}
			
		}else{
				if(flagRange){
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					
					
					var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
			
				
					colors = [];
					var thom =0 ;
					var ty = 0;
					var ja = 0;
					
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					
					//console.log(itensityFe);
					//console.log(Math.max(...rangeFe));
					for(var p = 0; p < ((positions.length / 3)  ); p++) {
						var arr = paletteGrays(Math.round(rangeFe[p])*12);
						
						colors.push(arr[0], arr[1], arr[2], 1);
						
						
					}
					
					map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

				}else{
					var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
					
					
				var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
			
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
				
				//console.log(itensityFe);
				//console.log(Math.max(...rangeFe));
				for(var p = 0; p < ((positions.length / 3)  ); p++) {
					var arr = paletteGrays(itensityFe[p]);
					
					colors.push(arr[0], arr[1], arr[2], 1);
					
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

				}
			
		}

	
	}

	clickInWireframe(){
		this.setState({ showModal: true }, () => {
			map.dispose();
			setTimeout(() => {
				this.processFileWireframe();
				this.setState({ showModal: false });
			}, 500);
		});
	}

	processFileColor() {
		let auxPaletteColor = document.getElementsByClassName("my-legendColor");
		let auxPaletteGray = document.getElementsByClassName("my-legendGray");
		let color = document.getElementById("color");
		let gray = document.getElementById("gray");

		color.classList.add("activeState");
		gray.classList.remove("activeState");

		flagColor = true;

		auxPaletteColor[0].style.display = "inline";
		auxPaletteGray[0].style.display = "none";
		
		if(flagRange){
						
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
				
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
			
				for(var p = 0; p < ((positionsLength / 3)  ); p++) {
					var arr = paletteColor(Math.round(rangeFe[p])*12);
					colors.push(arr[0], arr[1], arr[2], 1);
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
			
		}else{
			
		var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);

		colors = [];
		var thom =0 ;
		var ty = 0;
		var ja = 0;
		console.log(map);
			
		for(var p = 0; p < ((positionsLength / 3)  ); p++) {
			
			var arr = paletteColor(itensityFe[p]);
			colors.push(arr[0], arr[1], arr[2], 1);
			
			
		}
		
		map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
	
		}
	

	
	}

	clickInColor(){
		this.setState({ showModal: true }, () => {
			setTimeout(() => {
				this.processFileColor();
				this.setState({ showModal: false });
			}, 500);
		});
	}

	processFileGray() {
		let auxPaletteColor = document.getElementsByClassName("my-legendColor");
		let auxPaletteGray = document.getElementsByClassName("my-legendGray");
		let color = document.getElementById("color");
		let gray = document.getElementById("gray");
		
		gray.classList.add("activeState");
		color.classList.remove("activeState");
		auxPaletteColor[0].style.display = "none";
		auxPaletteGray[0].style.display = "inline";
		
		flagColor = false;
			if(flagRange){
			
				var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
			
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				
				for(var p = 0; p < ((positionsLength / 3)  ); p++) {
					var arr = paletteGrays(Math.round(rangeFe[p])*12);
					
					colors.push(arr[0], arr[1], arr[2], 1);
					
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

			}else{
			
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
	
		
			colors = [];
			var thom =0 ;
			var ty = 0;
			var ja = 0;
		
			for(var p = 0; p < ((positionsLength / 3)  ); p++) {
				var arr = paletteGrays(itensityFe[p]);
				
				colors.push(arr[0], arr[1], arr[2], 1);
				if(arr[0]!=arr[1] || arr[0]!=arr[2] ||arr[2]!=arr[1] ){
					console.log(arr[0]);
				}
				
				
			}
			
			map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

			}
		
		
	

	}

	clickInGray(){
		this.setState({ showModal: true }, () => {
			setTimeout(() => {
				this.processFileGray();
				this.setState({ showModal: false });
			}, 500);
		});
	}

	processFileIntensity() {
		let intensityA = document.getElementById("intensityA");
		let rangeA = document.getElementById("rangeA");
		
		intensityA.classList.add("activeState");
		rangeA.classList.remove("activeState");
		
		flagRange=false;
		if(flagColor){
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		

			
			colors = [];
			var thom =0 ;
			var ty = 0;
			var ja = 0;
			
			for(var p = 0; p < ((positionsLength / 3)  ); p++) {
				
				var arr = paletteColor(itensityFe[p]);
				colors.push(arr[0], arr[1], arr[2], 1);
			
			}
			
			map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
		
		}else{	
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
	
		
			colors = [];
			var thom =0 ;
			var ty = 0;
			var ja = 0;
			
			for(var p = 0; p < ((positionsLength / 3)  ); p++) {
				var arr = paletteGrays(itensityFe[p]);
				
				colors.push(arr[0], arr[1], arr[2], 1);
				
				
			}
			
			map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

		}
	
	}

	clickInIntensity(){
		this.setState({ showModal: true }, () => {
		
			setTimeout(() => {
				this.processFileIntensity();
				this.setState({ showModal: false });
			}, 500);
		});
	}

	processFileRange() {
		let intensityA = document.getElementById("intensityA");
		let rangeA = document.getElementById("rangeA");

		
		rangeA.classList.add("activeState");
		intensityA.classList.remove("activeState");
		
		flagRange=true;

		if(flagColor){
						
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
				
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
				
				for(var p = 0; p < ((positionsLength / 3)  ); p++) {
					var arr = paletteColor(Math.round(rangeFe[p])*12);
					colors.push(arr[0], arr[1], arr[2], 1);
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
			
		}else{
			var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
		
			
				colors = [];
				var thom =0 ;
				var ty = 0;
				var ja = 0;
				
			
				for(var p = 0; p < ((positionsLength / 3)  ); p++) {
					var arr = paletteGrays(Math.round(rangeFe[p])*12);
					
					colors.push(arr[0], arr[1], arr[2], 1);
				
					
				}
				
				map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

		}
	
	}

	clickInRange(){
		this.setState({ showModal: true }, () => {
		
			setTimeout(() => {
				this.processFileRange();
				this.setState({ showModal: false });
			}, 500);
		});
	}

	componentWillMount() {
	}

	render(){
			return(
				<div>
					
					{this.state.showModal && <ReactLoading id="loading" type={'bars'} color="#fff" />}
		
					<UINavbar></UINavbar>
					
					

					<div className="auxbody">

					<div className="toggle_radio">
						<input defaultChecked type="radio" className="toggle_option" id="first_toggle" name="toggle_option" value="fail"></input>
						<input type="radio" className="toggle_option" id="second_toggle" name="toggle_option" value="na"></input>
						<input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" value="pass"></input>
						<label htmlFor="first_toggle"><p>Load Laser File</p></label>
						<label htmlFor="second_toggle"><p>I RealTime Plot</p></label>
						<label htmlFor="third_toggle"><p>Export to JPG</p></label>
						<div className="toggle_option_slider"></div>
					</div>
					
						<input type="file" id="inputUpload"  name="fileBox" multiple/> 
						<div className="row">
							<button  id="Upload" type="button" className="btn auxb" onClick={this.clickInload}>Select File</button>	
							<p id="nameFile"></p>			
						</div>
					
					<div className="row">
						
						<canvas id="canvas" className="col-md-9" ></canvas>
					
						<div className="col-md-2 auxCol">
							<div className="row titleOptA">
								<h4>Views</h4>
							</div>
							<div className="row">
								<a href="#" id="3D"  onClick={this.clickIn3D} className="action-button animate blue activeState">3D</a>
							</div>
							<div className="row">
								<a href="#" id="2D" onClick={this.clickIn2D} className="action-button animate blue">2D</a>
							</div>
							<div className="row">
								<a href="#" id="wireframe" onClick={this.clickInWireframe} className="action-button animate blue">Wireframe</a>
							</div>

							<div className="row titleOpt">
								<h4>Colors</h4>
							</div>
							<div className="row">
								<a href="#" id="color" onClick={this.clickInColor} className="action-button animate blue activeState">Color Scale</a>
							</div>
							<div className="row">
								<a href="#" id="gray" onClick={this.clickInGray} className="action-button animate blue">Gray Scale</a>
							</div>

							<div className="row titleOpt">
								<h4>Value</h4>
							</div>
							<div className="row">
								<a href="#" id="intensityA" onClick={this.clickInIntensity} className="action-button animate blue activeState">Intensity</a>
							</div>
							<div className="row">
								<a href="#" id="rangeA" onClick={this.clickInRange} className="action-button animate blue">Range</a>
							</div>

							<div className="row titleOpt">
								<h4>Speed</h4>
							</div>
							<div className="row">
								<div className="slider col-md-10">
									<input type="range" min="1" max="70" defaultValue="10" id="fader" step="1" ></input>
								</div>
								<div className="col-md-2 outputSlide">
									<output htmlFor="fader" id="volume">10</output>
								</div>	
							</div>
						</div>
					</div>	
			
			<UIPaletteGrays></UIPaletteGrays>
			<UIPaletteColor></UIPaletteColor>
			
			</div>		
		
		</div>
			)
	}

}

export default App;