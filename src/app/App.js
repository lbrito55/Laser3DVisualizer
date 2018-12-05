import React, { Component } from 'react';

class App extends Component{


callApi(){



	
	console.log("llamando a node");

	document.getElementById("inputUpload").click();
	let nameFileForHtml = document.getElementById("nameFile");
	let UpdFile = document.getElementById('inputUpload');

	UpdFile.addEventListener('change', handleFileSelect, false);


	function handleFileSelect(evt) {
			
		var files = evt.target.files;
		var url="";
		var flagTwoFiles = false;
		var nameFiles="";
		for (var i = 0, f; f = files[i]; i++) {
			if(i>0){ //if two files
				url=url.concat("AnotherFile");
				nameFiles=nameFiles.concat(" and ")
				flagTwoFiles = true;
			}
			url=url.concat(f.name);
			nameFiles=nameFiles.concat(f.name);
			
		}
		console.log(nameFiles);
		nameFileForHtml.innerHTML = nameFiles;
		document.getElementById("backLoad").style.display = "block"; //Loading

		/*var auxUrl = UpdFile.value.split("\\");
		var url = auxUrl[auxUrl.length-1];
		console.log( url);
		*/
		console.log(UpdFile.value);
		fetch('api?tagid='+url).then(response => {
			response.json().then(json => {

				let data = json; 
				//console.log(data);
				
				var j;

				var itensityFe = [];
				var auxIfe = 0;
				var itensityFf = [];
				var auxIff = 0;
				var rangeFe = [];
				var auxRfe = 0;
				var rangeFf = [];
				var auxRff = 0;
				
			//	data = data.slice(50, 290);
			if(flagTwoFiles){
				//console.log(data);
				var itensityFe1 = [];	
				var itensityFf1 = [];
				var rangeFe1 = [];
				var rangeFf1 = [];
				var itensityFe2 = [];
				var auxIfe2 = 0;
				var itensityFf2 = [];
				var auxIff2 = 0;
				var rangeFe2 = [];
				var auxRfe2 = 0;
				var rangeFf2 = [];
				var auxRff2 = 0;

				var files=data.split("hereIsTheSecond");
				files[0]= files[0].split(" ");
				files[1]= files[1].split(" ");
				//console.log(files[0],files[1]);	
				for (var i =0 ; i < files[0].length; i++) {
					//console.log(i);
					if(files[0][i]=="fe"){
						//FE
						i++;
						for(j=0; j< 30; j++){
							//intensity
							itensityFe1[auxIfe]=parseInt(files[0][i], 16);
							auxIfe++;
							i++;
						}
						for(j=0; j< 30; j++){
							//range

							if(files[0][i]=="fe" || files[0][i]=="ff"){
								for (var ii = 30 - j; ii < 30; ii++)
								{
									rangeFe1[auxRfe]=99;
									auxRfe++;
								}
								j = 30;
							}else{
								rangeFe1[auxRfe]= parseInt(files[0][i], 16) / 12;
								auxRfe++;
								i++;
							}
						}
						i--;
					}else{

						if(files[0][i]=="ff"){
							//ff
							i++;
							for(j=0; j< 30; j++){
								//intensity
								itensityFf1[auxIff]=parseInt(files[0][i], 16);
								auxIff++;
								i++;
							}
							for(j=0; j< 30; j++){
								//range
								if(files[0][i]=="fe" || files[0][i]=="ff"){
									for (var ii = 30 - j; ii < 30; ii++)
									{

										rangeFf1[auxRff]=99;
										auxRff++;
									}
									//console.log("dsad");
									j = 30;
								}else{
									rangeFf1[auxRff]= parseInt(files[0][i], 16) / 12;
									auxRff++;
									i++;
								}
							}
							i--;
						}
					}

					
			}

			for (var i =0 ; i < files[1].length; i++) {
				//console.log(i);
				if(files[1][i]=="fe"){
					//FE
					i++;
					for(j=0; j< 30; j++){
						//intensity
						itensityFe2[auxIfe2]=parseInt(files[1][i], 16);
						auxIfe2++;
						i++;
					}
					for(j=0; j< 30; j++){
						//range

						if(files[1][i]=="fe" || files[1][i]=="ff"){
							for (var ii = 30 - j; ii < 30; ii++)
							{
								rangeFe2[auxRfe2]=99;
								auxRfe2++;
							}
							j = 30;
						}else{
							rangeFe2[auxRfe2]= parseInt(files[1][i], 16) / 12;
							auxRfe2++;
							i++;
						}
					}
					i--;
				}else{

					if(files[1][i]=="ff"){
						//ff
						i++;
						for(j=0; j< 30; j++){
							//intensity
							itensityFf2[auxIff2]=parseInt(files[1][i], 16);
							auxIff2++;
							i++;
						}
						for(j=0; j< 30; j++){
							//range
							if(files[1][i]=="fe" || files[1][i]=="ff"){
								for (var ii = 30 - j; ii < 30; ii++)
								{

									rangeFf2[auxRff2]=99;
									auxRff2++;
								}
								//console.log("dsad");
								j = 30;
							}else{
								rangeFf2[auxRff2]= parseInt(files[1][i], 16) / 12;
								auxRff2++;
								i++;
							}
						}
						i--;
					}
				}	
		}

				var minorFileFeI;
				var minorFileFeR;
				var minorFileFfI;
				var minorFileFfR;

				if(itensityFe1<itensityFe2){
					minorFileFeI = itensityFe1;
					minorFileFeR = rangeFe1;
				}else{
					minorFileFeI = itensityFe2;
					minorFileFeR = rangeFe2;
				}
				if(itensityFf1<itensityFf2){
					minorFileFfI = itensityFf1;
					minorFileFfR = rangeFf1;
				}else{
					minorFileFfI = itensityFf2;
					minorFileFfR = rangeFf2;
				}

				var auxConcat=0;
				var auxConcat2=0;
				var auxConcat3 = 0;

				var refH = 28.2;
				var rOff = 8;
				var xOff = 9.5;

				for(i=0;i<minorFileFeI.length;i++){
					itensityFe[auxConcat]=itensityFe2[i];
					if(auxConcat3==29){
						for(var j=0; j<30;j++){
							auxConcat++;
							itensityFe[auxConcat]=itensityFe1[auxConcat2];						
							auxConcat2++;							
						}	
						auxConcat++;
						auxConcat3=0;
					}else{
						auxConcat++;
						auxConcat3++;
					}
					
				}

				 auxConcat=0;
				 auxConcat2=0;
				 auxConcat3 = 0;
				
				//Code for two files

				for(i=0;i<minorFileFeR.length;i++){
					rangeFe[auxConcat]=rangeFe2[i];
					//rangeFe[auxConcat]=xOff-(rangeFe2[i] + rOff)*Math.cos(5 * 0.017453) * Math.sin((19 + (auxConcat3 + 1 - 14.5) ) * 0.017453);
					if(auxConcat3==29){
						for(var j=0; j<30;j++){
							auxConcat++;
							//rangeFe[auxConcat]=xOff-(rangeFe1[auxConcat2] + rOff)*Math.cos(5 * 0.017453) * Math.sin((19 + (j + 31 - 14.5) ) * 0.017453);						
							rangeFe[auxConcat]=rangeFe1[auxConcat2];
							auxConcat2++;							
						}	
						auxConcat++;
						auxConcat3=0;
					}else{
						auxConcat++;
						auxConcat3++;
					}
					
				}

				auxConcat=0;
				auxConcat2=0;
				auxConcat3 = 0;

				for(i=0;i<minorFileFfI.length;i++){
					itensityFf[auxConcat]=itensityFf2[i];
					if(auxConcat3==29){
						for(var j=0; j<30;j++){
							auxConcat++;
							itensityFf[auxConcat]=itensityFf1[auxConcat2];						
							auxConcat2++;							
						}	
						auxConcat++;
						auxConcat3=0;
					}else{
						auxConcat++;
						auxConcat3++;
					}
					
				}

				 auxConcat=0;
				 auxConcat2=0;
				 auxConcat3 = 0;

				for(i=0;i<minorFileFfR.length;i++){
					rangeFf[auxConcat]=rangeFf2[i];
					if(auxConcat3==29){
						for(var j=0; j<30;j++){
							auxConcat++;
							rangeFf[auxConcat]=rangeFf1[auxConcat2];						
							auxConcat2++;							
						}	
						auxConcat++;
						auxConcat3=0;
					}else{
						auxConcat++;
						auxConcat3++;
					}
					
				}


			}else{
				for (var i =0 ; i < data.length; i++) {
						//console.log(i);
						if(data[i]=="fe"){
							//FE
							i++;
							for(j=0; j< 30; j++){
								//intensity
								itensityFe[auxIfe]=parseInt(data[i], 16);
								auxIfe++;
								i++;
							}
							for(j=0; j< 30; j++){
								//range

								if(data[i]=="fe" || data[i]=="ff"){
									for (var ii = 30 - j; ii < 30; ii++)
									{
										rangeFe[auxRfe]=99;
										auxRfe++;
									}
									j = 30;
								}else{
									rangeFe[auxRfe]= parseInt(data[i], 16) / 12;
									auxRfe++;
									i++;
								}
							}
							i--;
						}else{

							if(data[i]=="ff"){
								//ff
								i++;
								for(j=0; j< 30; j++){
									//intensity
									itensityFf[auxIff]=parseInt(data[i], 16);
									auxIff++;
									i++;
								}
								for(j=0; j< 30; j++){
									//range
									if(data[i]=="fe" || data[i]=="ff"){
										for (var ii = 30 - j; ii < 30; ii++)
										{

											rangeFf[auxRff]=99;
											auxRff++;
										}
										//console.log("dsad");
										j = 30;
									}else{
										rangeFf[auxRff]= parseInt(data[i], 16) / 12;
										auxRff++;
										i++;
									}
								}
								i--;
							}
						}

						
				}
			}
				
				
				//
				var flagRead = document.getElementById('flagRead');
				console.log(flagRead.value);
			
				let canvas = document.getElementById('canvas');

				var engine = new BABYLON.Engine(canvas, true);
				var createScene = function() {
				
					console.log("hola");
					var scene = new BABYLON.Scene(engine);
					scene.clearColor = new BABYLON.Color3(0.168, 0.188, 0.207);
					//var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, BABYLON.Vector3.Zero(), scene);
					//var camera = new BABYLON.FlyCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
					var camera = new BABYLON.ArcRotateCamera("Camera", 60, 0, 10, new BABYLON.Vector3(60, 0, 0), scene);

					// Positions the camera overwriting alpha, beta, radius
						camera.setPosition(new BABYLON.Vector3(2.988369164965735, 1.6961842891958216, 100));
						camera.alpha=3.0476813011282506;
						camera.beta= 1.5642642054069178;
					// This attaches the camera to the canvas
						camera.attachControl(canvas, true);
					let light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
					light.intensity = 1;
					light.specular = BABYLON.Color3.Black();
					//light.groundColor = new BABYLON.Color3(0, 0, 0);
				
				
			let map;	
			
				flagRead.value="true";
					// Map data creation
					// The map is a flat array of successive 3D coordinates (x, y, z).
					// It's defined by a number of points on its width : mapSubX
					// and a number of points on its height : mapSubZ
					
					var mapSubX ;           // point number on X axis
					var mapSubZ; // point number on Z axis
					if(flagTwoFiles){
						mapSubZ=60;
						mapSubX=rangeFe.length/60;
					}else{
						mapSubZ=30;
						mapSubX=rangeFe.length/30;
					}
						             
					var seed = 0.3;                 // seed
					var noiseScale = 0.03;         // noise frequency
					var elevationScale = 6.0;
					
					var mapData = new Float32Array(mapSubX * mapSubZ * 3); // 3 float values per point : x, y and z
					var dataI = 0;
					var t = 0;
					
						var paths = [];
						flag2d=false;
						
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
						
						map.position.y = 0;
						var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
						//map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD);
						//mapMaterial.wireframe = true;
								
						map.material = mapMaterial;
						
						//light.excludedMeshes.push(map);

				
						//console.log(itensityFe);


						var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
						if(!colors) {
							
							colors = [];
							var thom =0 ;
							var ty = 0;
							var ja = 0;
							
							var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
							

							//console.log(itensityFe);
							//console.log(Math.max(...rangeFe));
							for(var p = 0; p < ((positions.length / 3)); p++) {
								
								var arr = paletteColor(itensityFe[p]);
								colors.push(arr[0], arr[1], arr[2], 1);
								//colors.push(arr[0], arr[1], arr[2], 1);
								
							}
							
							map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
						}
						//var quaternion = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI);
						//map.rotationQuaternion = quaternion;
						
					

					var mapColor ={}; //object for multiple key presses
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
					 // console.log(t);
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x+valueSlide, camera.position.y, camera.position.z)); 

					}


					if(mapColor["a"] || mapColor["A"]) {
					  t=t-valueSlide;
					 // console.log(t);
					camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					camera.setPosition(new BABYLON.Vector3(camera.position.x-valueSlide, camera.position.y, camera.position.z)); 
				
					  
				  }

					
				});

				let aux2d = document.getElementById("2D");
				let aux3d = document.getElementById("3D");
				let auxWire = document.getElementById("wireframe");
				let color = document.getElementById("color");
				let gray = document.getElementById("gray");
				let intensityA = document.getElementById("intensityA");
				let rangeA = document.getElementById("rangeA");
				let flagColor = true;
				let flagRange = false;
				let flag2d = false;
				let flagWireframe = false;
				let Slide = document.getElementById("fader");

				let btnLoad = document.getElementById("btnLoad");
				let myModal = document.getElementById("myModal");
				let flagLoad = false;
				
				/*btnLoad.onclick= function(){
					if(flagLoad){
						myModal.style.display="none";
						flagLoad=false;
						console.log("quito");
					}else{
						myModal.style.display="block";
						flagLoad=true;
						
						console.log("pongo");
					}
				}
				*/

				let valueSlide =10;
				Slide.oninput = function (){
					valueSlide= parseInt(Slide.value);
					//console.log(valueSlide);
					var output = document.getElementById("volume");
					output.value = valueSlide;
				}

				aux2d.onclick= function(){
					
					(function(){	document.getElementById("myModal").style.display="block";
					flagLoad=true;
					
					console.log(document.getElementById("myModal").style.display);})();
					aux2d.classList.add("activeState");
					aux3d.classList.remove("activeState");
					auxWire.classList.remove("activeState");
					flag2d = true;
					flagWireframe = false;
						
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
				  (function(){console.log("Quito");myModal.style.display="none";})();
				  
				}

				aux3d.onclick= function(){
					aux3d.classList.add("activeState");
					aux2d.classList.remove("activeState");
					auxWire.classList.remove("activeState");
					
					flag2d = false;
					if(!flagWireframe){	
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
				}else{
					var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
						
						mapMaterial.wireframe = false;
						map.material = mapMaterial;
				}
				flagWireframe = false;

				}

				auxWire.onclick= function(){
					auxWire.classList.add("activeState");
					aux2d.classList.remove("activeState");
					aux3d.classList.remove("activeState");
					flagWireframe = true;
					if(flag2d){

						
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

				}else{
					var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
				
						mapMaterial.wireframe = true;
						map.material = mapMaterial;
				}
				flag2d = false;

				}

				color.onclick= function(){
					color.classList.add("activeState");
					gray.classList.remove("activeState");

					flagColor = true;

					auxPaletteColor[0].style.display = "inline";
					auxPaletteGray[0].style.display = "none";
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
				

				}

				gray.onclick= function(){
					gray.classList.add("activeState");
					color.classList.remove("activeState");
					auxPaletteColor[0].style.display = "none";
					auxPaletteGray[0].style.display = "inline";
					
					flagColor = false;
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
							if(arr[0]!=arr[1] || arr[0]!=arr[2] ||arr[2]!=arr[1] ){
								console.log(arr[0]);
							}
							
							
						}
						
						map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);

						}
					
					
				}

				intensityA.onclick= function(){
					intensityA.classList.add("activeState");
					rangeA.classList.remove("activeState");
					
					flagRange=false;
					if(flagColor){
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

				rangeA.onclick= function(){
					rangeA.classList.add("activeState");
					intensityA.classList.remove("activeState");
					
					flagRange=true;

					if(flagColor){
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

					}
				}

					return scene;
				}
				
				var paletteGrays = function(n){
					var arr = [];
					switch (n) {
						case 255:
							arr = [1 , 1 , 1];
							break;
						case 254:
							arr = [0.996 , 0.996 , 0.996];
							break;
						case 253:
							arr = [0.996 , 0.996 , 0.996];
							break;
						case 252:
							arr = [0.992 , 0.992 , 0.992];
							break;
						case 251:
							arr = [0.988 , 0.988 , 0.988];
							break;
						case 250:
							arr = [0.984 , 0.984 , 0.984];
							break;
						case 249:
							arr = [0.980 , 0.980 , 0.980];
							break;
						case 248:
							arr = [0.976 , 0.976 , 0.976];
							break;
						case 247:
							arr = [0.972 , 0.972 , 0.972];
							break;
						case 246:
							arr = [0.968 , 0.968 , 0.968];
							break;
						case 245:
							arr = [0.964 , 0.964 , 0.964];
							break;
						case 244:
							arr = [0.960 , 0.960 , 0.960];
							break;
						case 243:
							arr = [0.956 , 0.956 , 0.956];
							break;
						case 242:
							arr = [0.952 , 0.952 , 0.952];
							break;
						case 241:
							arr = [0.949 , 0.949 , 0.949];
							break;
						case 240:
							arr = [0.945 , 0.945 , 0.945];
							break;
						case 239:
							arr = [0.941 , 0.941 , 0.941];
							break;
						case 238:
							arr = [0.937 , 0.937 , 0.937];
							break;
						case 237:
							arr = [0.933 , 0.933 , 0.933];
							break;
						case 236:
							arr = [0.929 , 0.929 , 0.929];
							break;
						case 235:
							arr = [0.925 , 0.925 , 0.925];
							break;
						case 234:
							arr = [0.921 , 0.921 , 0.921];
							break;
						case 233:
							arr = [0.917 , 0.917 , 0.917];
							break;
						case 232:
							arr = [0.913 , 0.913 , 0.913];
							break;
						case 231:
							arr = [0.909 , 0.909 , 0.909];
							break;
						case 230:
							arr = [0.905 , 0.905 , 0.905];
							break;
						case 229:
							arr = [0.901 , 0.901 , 0.901];
							break;
						case 228:
							arr = [0.898 , 0.898 , 0.898];
							break;
						case 227:
							arr = [0.894 , 0.894 , 0.894];
							break;
						case 226:
							arr = [0.890 , 0.890 , 0.890];
							break;
						case 225:
							arr = [0.886 , 0.886 , 0.886];
							break;
						case 224:
							arr = [0.882 , 0.882 , 0.882];
							break;
						case 223:
							arr = [0.878 , 0.878 , 0.878];
							break;
						case 222:
							arr = [0.874 , 0.874 , 0.874];
							break;
						case 221:
							arr = [0.870 , 0.870 , 0.870];
							break;
						case 220:
							arr = [0.866 , 0.866 , 0.866];
							break;
						case 219:
							arr = [0.862 , 0.862 , 0.862];
							break;
						case 218:
							arr = [0.858 , 0.858 , 0.858];
							break;
						case 217:
							arr = [0.854 , 0.854 , 0.854];
							break;
						case 216:
							arr = [0.850 , 0.850 , 0.850];
							break;
						case 215:
							arr = [0.847 , 0.847 , 0.847];
							break;
						case 214:
							arr = [0.843 , 0.843 , 0.843];
							break;
						case 213:
							arr = [0.839 , 0.839 , 0.839];
							break;
						case 212:
							arr = [0.835 , 0.835 , 0.835];
							break;
						case 211:
							arr = [0.831 , 0.831 , 0.831];
							break;
						case 210:
							arr = [0.827 , 0.827 , 0.827];
							break;
						case 209:
							arr = [0.823 , 0.823 , 0.823];
							break;
						case 208:
							arr = [0.819 , 0.819 , 0.819];
							break;
						case 207:
							arr = [0.815 , 0.815 , 0.815];
							break;
						case 206:
							arr = [0.811 , 0.811 , 0.811];
							break;
						case 205:
							arr = [0.807 , 0.807 , 0.807];
							break;
						case 204:
							arr = [0.803 , 0.803 , 0.803];
							break;
						case 203:
							arr = [0.800 , 0.800 , 0.800];
							break;
						case 202:
							arr = [0.796 , 0.796 , 0.796];
							break;
						case 201:
							arr = [0.792 , 0.792 , 0.792];
							break;
						case 200:
							arr = [0.788 , 0.788 , 0.788];
							break;
						case 199:
							arr = [0.784 , 0.784 , 0.784];
							break;
						case 198:
							arr = [0.780 , 0.780 , 0.780];
							break;
						case 197:
							arr = [0.776 , 0.776 , 0.776];
							break;
						case 196:
							arr = [0.772 , 0.772 , 0.772];
							break;
						case 195:
							arr = [0.768 , 0.768 , 0.768];
							break;
						case 194:
							arr = [0.764 , 0.764 , 0.764];
							break;
						case 193:
							arr = [0.760 , 0.760 , 0.760];
							break;
						case 192:
							arr = [0.756 , 0.756 , 0.756];
							break;
						case 191:
							arr = [0.752 , 0.752 , 0.752];
							break;
						case 190:
							arr = [0.749 , 0.749 , 0.749];
							break;
						case 189:
							arr = [0.745 , 0.745 , 0.745];
							break;
						case 188:
							arr = [0.741 , 0.741 , 0.741];
							break;
						case 187:
							arr = [0.737 , 0.737 , 0.737];
							break;
						case 186:
							arr = [0.733 , 0.733 , 0.733];
							break;
						case 185:
							arr = [0.729 , 0.729 , 0.729];
							break;
						case 184:
							arr = [0.725 , 0.725 , 0.725];
							break;
						case 183:
							arr = [0.721 , 0.721 , 0.721];
							break;
						case 182:
							arr = [0.717 , 0.717 , 0.717];
							break;
						case 181:
							arr = [0.713 , 0.713 , 0.713];
							break;
						case 180:
							arr = [0.709 , 0.709 , 0.709];
							break;
						case 179:
							arr = [0.705 , 0.705 , 0.705];
							break;
						case 178:
							arr = [0.701 , 0.701 , 0.701];
							break;
						case 177:
							arr = [0.698 , 0.698 , 0.698];
							break;
						case 176:
							arr = [0.694 , 0.694 , 0.694];
							break;
						case 175:
							arr = [0.690 , 0.690 , 0.690];
							break;
						case 174:
							arr = [0.686 , 0.686 , 0.686];
							break;
						case 173:
							arr = [0.682 , 0.682 , 0.682];
							break;
						case 172:
							arr = [0.678 , 0.678 , 0.678];
							break;
						case 171:
							arr = [0.674 , 0.674 , 0.674];
							break;
						case 170:
							arr = [0.670 , 0.670 , 0.670];
							break;
						case 169:
							arr = [0.666 , 0.666 , 0.666];
							break;
						case 168:
							arr = [0.662 , 0.662 , 0.662];
							break;
						case 167:
							arr = [0.658 , 0.658 , 0.658];
							break;
						case 166:
							arr = [0.654 , 0.654 , 0.654];
							break;
						case 165:
							arr = [0.650 , 0.650 , 0.650];
							break;
						case 164:
							arr = [0.647 , 0.647 , 0.647];
							break;
						case 163:
							arr = [0.643 , 0.643 , 0.643];
							break;
						case 162:
							arr = [0.639 , 0.639 , 0.639];
							break;
						case 161:
							arr = [0.635 , 0.635 , 0.635];
							break;
						case 160:
							arr = [0.631 , 0.631 , 0.631];
							break;
						case 159:
							arr = [0.627 , 0.627 , 0.627];
							break;
						case 158:
							arr = [0.623 , 0.623 , 0.623];
							break;
						case 157:
							arr = [0.619 , 0.619 , 0.619];
							break;
						case 156:
							arr = [0.615 , 0.615 , 0.615];
							break;
						case 155:
							arr = [0.611 , 0.611 , 0.611];
							break;
						case 154:
							arr = [0.607 , 0.607 , 0.607];
							break;
						case 153:
							arr = [0.603 , 0.603 , 0.603];
							break;
						case 152:
							arr = [0.600 , 0.600 , 0.600];
							break;
						case 151:
							arr = [0.596 , 0.596 , 0.596];
							break;
						case 150:
							arr = [0.592 , 0.592 , 0.592];
							break;
						case 149:
							arr = [0.588 , 0.588 , 0.588];
							break;
						case 148:
							arr = [0.584 , 0.584 , 0.584];
							break;
						case 147:
							arr = [0.580 , 0.580 , 0.580];
							break;
						case 146:
							arr = [0.576 , 0.576 , 0.576];
							break;
						case 145:
							arr = [0.572 , 0.572 , 0.572];
							break;
						case 144:
							arr = [0.568 , 0.568 , 0.568];
							break;
						case 143:
							arr = [0.564 , 0.564 , 0.564];
							break;
						case 142:
							arr = [0.560 , 0.560 , 0.560];
							break;
						case 141:
							arr = [0.556 , 0.556 , 0.556];
							break;
						case 140:
							arr = [0.552 , 0.552 , 0.552];
							break;
						case 139:
							arr = [0.549 , 0.549 , 0.549];
							break;
						case 138:
							arr = [0.545 , 0.545 , 0.545];
							break;
						case 137:
							arr = [0.541 , 0.541 , 0.541];
							break;
						case 136:
							arr = [0.537 , 0.537 , 0.537];
							break;
						case 135:
							arr = [0.533 , 0.533 , 0.533];
							break;
						case 134:
							arr = [0.529 , 0.529 , 0.529];
							break;
						case 133:
							arr = [0.525 , 0.535 , 0.525];
							break;
						case 132:
							arr = [0.521 , 0.521 , 0.521];
							break;
						case 131:
							arr = [0.517 , 0.517 , 0.517];
							break;
						case 130:
							arr = [0.513 , 0.513 , 0.513];
							break;
						case 129:
							arr = [0.509 , 0.509 , 0.509];
							break;
						case 128:
							arr = [0.505 , 0.505 , 0.505];
							break;
						case 127:
							arr = [0.501 , 0.501 , 0.501];
							break;
						case 126:
							arr = [0.498 , 0.498 , 0.498];
							break;
						case 125:
							arr = [0.494 , 0.494 , 0.494];
							break;
						case 124:
							arr = [0.490 , 0.490 , 0.490];
							break;
						case 123:
							arr = [0.486 , 0.486 , 0.486];
							break;
						case 122:
							arr = [0.482 , 0.482 , 0.482];
							break;
						case 121:
							arr = [0.478 , 0.478 , 0.478];
							break;
						case 120:
							arr = [0.474 , 0.474 , 0.474];
							break;
						case 119:
							arr = [0.470 , 0.470 , 0.470];
							break;
						case 118:
							arr = [0.466 , 0.466 , 0.466];
							break;
						case 117:
							arr = [0.462 , 0.462 , 0.462];
							break;
						case 116:
							arr = [0.458 , 0.458 , 0.458];
							break;
						case 115:
							arr = [0.454 , 0.454 , 0.454];
							break;
						case 114:
							arr = [0.450 , 0.450 , 0.450];
							break;
						case 113:
							arr = [0.447 , 0.447 , 0.447];
							break;
						case 112:
							arr = [0.443 , 0.443 , 0.443];
							break;
						case 111:
							arr = [0.439 , 0.439 , 0.439];
							break;
						case 110:
							arr = [0.435 , 0.435 , 0.435];
							break;
						case 109:
							arr = [0.431 , 0.431 , 0.431];
							break;
						case 108:
							arr = [0.427 , 0.427 , 0.427];
							break;
						case 107:
							arr = [0.423 , 0.423 , 0.423];
							break;
						case 106:
							arr = [0.419 , 0.419 , 0.419];
							break;
						case 105:
							arr = [0.415 , 0.415 , 0.415];
							break;
						case 104:
							arr = [0.411 , 0.411 , 0.411];
							break;
						case 103:
							arr = [0.407 , 0.407 , 0.407];
							break;
						case 102:
							arr = [0.403 , 0.403 , 0.403];
							break;
						case 101:
							arr = [0.400 , 0.400 , 0.400];
							break;
						case 100:
							arr = [0.396 , 0.396 , 0.396];
							break;
						case 99:
							arr = [0.392 , 0.392 , 0.392];
							break;
						case 98:
							arr = [0.388 , 0.388 , 0.388];
							break;
						case 97:
							arr = [0.384 , 0.384 , 0.384];
							break;
						case 96:
							arr = [0.380 , 0.380 , 0.380];
							break;
						case 95:
							arr = [0.376 , 0.376 , 0.376];
							break;
						case 94:
							arr = [0.372 , 0.372 , 0.372];
							break;
						case 93:
							arr = [0.368 , 0.368 , 0.368];
							break;
						case 92:
							arr = [0.364 , 0.364 , 0.364];
							break;
						case 91:
							arr = [0.360 , 0.360 , 0.360];
							break;
						case 90:
							arr = [0.356 , 0.356 , 0.356];
							break;
						case 89:
							arr = [0.352 , 0.352 , 0.352];
							break;
						case 88:
							arr = [0.349 , 0.349 , 0.349];
							break;
						case 87:
							arr = [0.345 , 0.345 , 0.345];
							break;
						case 86:
							arr = [0.341 , 0.341 , 0.341];
							break;
						case 85:
							arr = [0.337 , 0.337 , 0.337];
							break;
						case 84:
							arr = [0.333 , 0.333 , 0.333];
							break;
						case 83:
							arr = [0.329 , 0.329 , 0.329];
							break;
						case 82:
							arr = [0.325 , 0.325 , 0.325];
							break;
						case 81:
							arr = [0.321 , 0.321 , 0.321];
							break;
						case 80:
							arr = [0.317 , 0.317 , 0.317];
							break;
						case 79:
							arr = [0.313 , 0.313 , 0.313];
							break;
						case 78:
							arr = [0.309 , 0.309 , 0.309];
							break;
						case 77:
							arr = [0.305 , 0.305 , 0.305];
							break;
						case 76:
							arr = [0.301 , 0.301 , 0.301];
							break;
						case 75:
							arr = [0.298 , 0.298 , 0.298];
							break;
						case 74:
							arr = [0.294 , 0.294 , 0.294];
							break;
						case 73:
							arr = [0.290 , 0.290 , 0.290];
							break;
						case 72:
							arr = [0.286 , 0.286 , 0.286];
							break;
						case 71:
							arr = [0.282 , 0.282 , 0.282];
							break;
						case 70:
							arr = [0.278 , 0.278 , 0.278];
							break;
						case 69:
							arr = [0.274 , 0.274 , 0.274];
							break;
						case 68:
							arr = [0.270 , 0.270 , 0.270];
							break;
						case 67:
							arr = [0.266 , 0.266 , 0.266];
							break;
						case 66:
							arr = [0.262 , 0.262 , 0.262];
							break;
						case 65:
							arr = [0.258 , 0.258 , 0.258];
							break;
						case 64:
							arr = [0.254 , 0.254 , 0.254];
							break;
						case 63:
							arr = [0.250 , 0.250 , 0.250];
							break;
						case 62:
							arr = [0.247 , 0.247 , 0.247];
							break;
						case 61:
							arr = [0.243 , 0.243 , 0.243];
							break;
						case 60:
							arr = [0.239 , 0.239 , 0.239];
							break;
						case 59:
							arr = [0.235 , 0.235 , 0.235];
							break;
						case 58:
							arr = [0.231 , 0.231 , 0.231];
							break;
						case 57:
							arr = [0.227 , 0.227 , 0.227];
							break;
						case 56:
							arr = [0.223 , 0.223 , 0.223];
							break;
						case 55:
							arr = [0.219 , 0.219 , 0.219];
							break;
						case 54:
							arr = [0.215 , 0.215 , 0.215];
							break;
						case 53:
							arr = [0.211 , 0.211 , 0.211];
							break;
						case 52:
							arr = [0.207 , 0.207 , 0.207];
							break;
						case 51:
							arr = [0.203 , 0.203 , 0.203];
							break;
						case 50:
							arr = [0.200 , 0.200 , 0.200];
							break;
						case 49:
							arr = [0.196 , 0.196 , 0.196];
							break;
						case 48:
							arr = [0.192 , 0.192 , 0.192];
							break;
						case 47:
							arr = [0.188 , 0.188 , 0.188];
							break;
						case 46:
							arr = [0.184 , 0.184 , 0.184];
							break;
						case 45:
							arr = [0.180 , 0.180 , 0.180];
							break;
						case 44:
							arr = [0.176 , 0.176 , 0.176];
							break;
						case 43:
							arr = [0.172 , 0.172 , 0.172];
							break;
						case 42:
							arr = [0.168 , 0.168 , 0.168];
							break;
						case 41:
							arr = [0.164 , 0.164 , 0.164];
							break;
						case 40:
							arr = [0.160 , 0.160 , 0.160];
							break;
						case 39:
							arr = [0.156 , 0.156 , 0.156];
							break;
						case 38:
							arr = [0.152 , 0.152 , 0.152];
							break;
						case 37:
							arr = [0.149 , 0.149 , 0.149];
							break;
						case 36:
							arr = [0.145 , 0.145 , 0.145];
							break;
						case 35:
							arr = [0.141 , 0.141 , 0.141];
							break;
						case 34:
							arr = [0.137 , 0.137 , 0.137];
							break;
						case 33:
							arr = [0.133 , 0.133 , 0.133];
							break;
						case 32:
							arr = [0.129 , 0.129 , 0.129];
							break;
						case 31:
							arr = [0.125 , 0.125 , 0.125];
							break;
						case 30:
							arr = [0.121 , 0.121 , 0.121];
							break;
						case 29:
							arr = [0.117 , 0.117 , 0.117];
							break;
						case 28:
							arr = [0.113 , 0.113 , 0.113];
							break;
						case 27:
							arr = [0.109 , 0.109 , 0.109];
							break;
						case 26:
							arr = [0.105 , 0.105 , 0.105];
							break;
						case 25:
							arr = [0.101 , 0.101 , 0.101];
							break;
						case 24:
							arr = [0.098 , 0.098 , 0.098];
							break;
						case 23:
							arr = [0.094 , 0.094 , 0.094];
							break;
						case 22:
							arr = [0.090 , 0.090 , 0.090];
							break;
						case 21:
							arr = [0.086 , 0.086 , 0.086];
							break;
						case 20:
							arr = [0.082 , 0.082 , 0.082];
							break;
						case 19:
							arr = [0.078 , 0.078 , 0.078];
							break;
						case 18:
							arr = [0.074 , 0.074 , 0.074];
							break;
						case 17:
							arr = [0.070 , 0.070 , 0.070];
							break;
						case 16:
							arr = [0.066 , 0.066 , 0.066];
							break;
						case 15:
							arr = [0.062 , 0.062 , 0.062];
							break;
						case 15:
							arr = [0.058 , 0.058 , 0.058];
							break;
						case 13:
							arr = [0.054 , 0.054 , 0.054];
							break;
						case 12:
							arr = [0.050 , 0.050 , 0.050];
							break;
						case 11:
							arr = [0.047 , 0.047 , 0.047];
							break;
						case 10:
							arr = [0.043 , 0.043 , 0.043];
							break;
						case 9:
							arr = [0.039 , 0.039 , 0.039];
							break;
						case 8:
							arr = [0.035 , 0.035 , 0.035];
							break;
						case 7:
							arr = [0.031 , 0.031 , 0.031];
							break;
						case 6:
							arr = [0.027 , 0.027 , 0.027];
							break;
						case 5:
							arr = [0.023 , 0.023 , 0.023];
							break;
						case 4:
							arr = [0.019 , 0.019 , 0.019];
							break;
						case 3:
							arr = [0.015 , 0.015 , 0.015];
							break;
						case 2:
							arr = [0.011 , 0.011 , 0.011];
							break;
						case 1:
							arr = [0.007 , 0.007 , 0.007];
							break;
						case 0:
							arr = [0.003,0.003,0.003];
							break;
						default:
						    arr = [0,0,0];
						
				}
				return arr;
				}


				var paletteColor = function(n){
					var arr = [];
					
					switch (n) {
						case 0:
							arr = [0, 0, 0];
							break;
						case 1:
							arr = [0, 0, 0];
							break;
						case 2:
							arr = [0, 0.003, 0.015];
							break;
						case 3:
							arr = [0.003, 0.011, 0.035];
							break;
						case 4:
							arr = [0.003, 0.015, 0.050];
							break;
						case 5:
							arr = [0.007, 0.023, 0.070];
							break;
						case 6:
							arr = [0.007, 0.027, 0.086];
							break;
						case 7:
							arr = [0.011, 0.035, 0.105];
							break;
						case 8:
							arr = [0.011, 0.039, 0.121];
							break;
						case 9:
							arr = [0.011, 0.047, 0.141];
							break;
						case 10:
							arr = [0.015, 0.050, 0.156];
							break;
						case 11:
							arr = [0.015, 0.058, 0.172];
							break;
						case 12:
							arr = [0.019, 0.062, 0.192];
							break;
						case 13:
							arr = [0.019, 0.070, 0.207];
							break;
						case 14:
							arr = [0.023, 0.074, 0.227];
							break;
						case 15:
							arr = [0.023, 0.082, 0.243];
							break;
						case 16:
							arr = [0.023, 0.086, 0.262];
							break;
						case 17:
							arr = [0.027, 0.094, 0.278];
							break;
						case 18:
							arr = [0.027, 0.098, 0.298];
							break;
						case 19:
							arr = [0.031, 0.105, 0.313];
							break;
						case 20:
							arr = [0.031, 0.109, 0.333];
							break;
						case 21:
							arr = [0.035, 0.117, 0.349];
							break;
						case 22:
							arr = [0.035, 0.121, 0.364];
							break;
						case 23:
							arr = [0.035, 0.129, 0.384];
							break;
						case 24:
							arr = [0.039, 0.133, 0.4];
							break;
						case 25:
							arr = [0.039, 0.141, 0.419];
							break;
						case 26:
							arr = [0.043, 0.145, 0.435];
							break;
						case 27:
							arr = [0.043, 0.152, 0.454];
							break;
						case 28:
							arr = [0.047, 0.156, 0.470];
							break;
						case 29:
							arr = [0.047, 0.164, 0.490];
							break;
						case 30:
							arr = [0.047, 0.168, 0.505];
							break;
						case 31:
							arr = [0.050, 0.176, 0.521];
							break;
						case 32:
							arr = [0.050, 0.180, 0.541];
							break;
						case 33:
							arr = [0.054, 0.188, 0.556];
							break;
						case 34:
							arr = [0.054, 0.192, 0.576];
							break;
						case 35:
							arr = [0.058, 0.2, 0.592];
							break;
						case 36:
							arr = [0.058, 0.203, 0.611];
							break;
						case 37:
							arr = [0.058, 0.211, 0.627];
							break;
						case 38:
							arr = [0.062, 0.215, 0.647];
							break;
						case 39:
							arr = [0.062, 0.223, 0.662];
							break;
						case 40:
							arr = [0.066, 0.227, 0.682];
							break;
						case 41:
							arr = [0.066, 0.235, 0.698];
							break;
						case 42:
							arr = [0.070, 0.239, 0.713];
							break;
						case 43:
							arr = [0.070, 0.247, 0.733];
							break;
						case 44:
							arr = [0.070, 0.250, 0.749];
							break;
						case 45:
							arr = [0.074, 0.258, 0.768];
							break;
						case 46:
							arr = [0.074, 0.262, 0.784];
							break;
						case 47:
							arr = [0.078, 0.270, 0.803];
							break;
						case 48:
							arr = [0.078, 0.274, 0.819];
							break;
						case 49:
							arr = [0.082, 0.282, 0.839];
							break;
						case 50:
							arr = [0.082, 0.286, 0.854];
							break;
						case 51:
							arr = [0.082, 0.286, 0.854];
							break;
						case 52:
							arr = [0.090, 0.298, 0.858];
							break;
						case 53:
							arr = [0.101, 0.309, 0.862];
							break;
						case 54:
							arr = [0.109, 0.321, 0.862];
							break;
						case 55:
							arr = [0.121, 0.337, 0.866];
							break;
						case 56:
							arr = [0.129, 0.349, 0.870];
							break;
						case 57:
							arr = [0.137, 0.360, 0.874];
							break;
						case 58:
							arr = [0.149, 0.372, 0.874];
							break;
						case 59:
							arr = [0.156, 0.384, 0.878];
							break;
						case 60:
							arr = [0.168, 0.396, 0.882];
							break;
						case 61:
							arr = [0.176, 0.411, 0.886];
							break;
						case 62:
							arr = [0.184, 0.423, 0.886];
							break;
						case 63:
							arr = [0.196, 0.435, 0.890];
							break;
						case 64:
							arr = [0.203, 0.447, 0.894];
							break;
						case 65:
							arr = [0.215, 0.458, 0.898];
							break;
						case 66:
							arr = [0.223, 0.470, 0.898];
							break;
						case 67:
							arr = [0.235, 0.486, 0.901];
							break;
						case 68:
							arr = [0.243, 0.498, 0.905];
							break;
						case 69:
							arr = [0.250, 0.509, 0.909];
							break;
						case 70:
							arr = [0.262, 0.521, 0.909];
							break;
						case 71:
							arr = [0.270, 0.533, 0.913];
							break;
						case 72:
							arr = [0.282, 0.545, 0.917];
							break;
						case 73:
							arr = [0.290, 0.560, 0.921];
							break;
						case 74:
							arr = [0.298, 0.572, 0.921];
							break;
						case 75:
							arr = [0.309, 0.584, 0.925];
							break;
						case 76:
							arr = [0.317, 0.596, 0.929];
							break;
						case 77:
							arr = [0.329, 0.607, 0.933];
							break;
						case 78:
							arr = [0.337, 0.619, 0.933];
							break;
						case 79:
							arr = [0.345, 0.635, 0.937];
							break;
						case 80:
							arr = [0.356, 0.647, 0.941];
							break;
						case 81:
							arr = [0.364, 0.658, 0.945];
							break;
						case 82:
							arr = [0.376, 0.670, 0.945];
							break;
						case 83:
							arr = [0.384, 0.682, 0.949];
							break;
						case 84:
							arr = [0.392, 0.694, 0.952];
							break;
						case 85:
							arr = [0.403, 0.709, 0.956];
							break;
						case 86:
							arr = [0.411, 0.721, 0.956];
							break;
						case 87:
							arr = [0.423, 0.733, 0.960];
							break;
						case 88:
							arr = [0.431, 0.745, 0.964];
							break;
						case 89:
							arr = [0.443, 0.756, 0.968];
							break;
						case 90:
							arr = [0.450, 0.768, 0.968];
							break;
						case 91:
							arr = [0.458, 0.784, 0.972];
							break;
						case 92:
							arr = [0.470, 0.796, 0.976];
							break;
						case 93:
							arr = [0.478, 0.807, 0.980];
							break;
						case 94:
							arr = [0.490, 0.819, 0.980];
							break;
						case 95:
							arr = [0.498, 0.831, 0.984];
							break;
						case 96:
							arr = [0.505, 0.843, 0.988];
							break;
						case 97:
							arr = [0.517, 0.858, 0.992];
							break;
						case 98:
							arr = [0.525, 0.870, 0.992];
							break;
						case 99:
							arr = [0.537, 0.882, 0.996];
							break;
						case 100:
							arr = [0.545, 0.894, 1];
							break;
						case 101:
							arr = [0.545, 0.894, 1];
							break;
						case 102:
							arr = [0.552, 0.894, 0.984];
							break;
						case 103:
							arr = [0.564, 0.898, 0.964];
							break;
						case 104:
							arr = [0.572, 0.898, 0.949];
							break;
						case 105:
							arr = [0.580, 0.901, 0.929];
							break;
						case 106:
							arr = [0.592, 0.901, 0.913];
							break;
						case 107:
							arr = [0.6, 0.901, 0.898];
							break;
						case 108:
							arr = [0.611, 0.905, 0.878];
							break;
						case 109:
							arr = [0.619, 0.905, 0.862];
							break;
						case 110:
							arr = [0.627, 0.909, 0.843];
							break;
						case 111:
							arr = [0.639, 0.909, 0.827];
							break;
						case 112:
							arr = [0.647, 0.909, 0.811];
							break;
						case 113:
							arr = [0.654, 0.913, 0.792];
							break;
						case 114:
							arr = [0.666, 0.913, 0.776];
							break;
						case 115:
							arr = [0.674, 0.917, 0.756];
							break;
						case 116:
							arr = [0.686, 0.917, 0.741];
							break;
						case 117:
							arr = [0.694, 0.921, 0.721];
							break;
						case 118:
							arr = [0.701, 0.921, 0.705];
							break;
						case 119:
							arr = [0.713, 0.921, 0.690];
							break;
						case 120:
							arr = [0.721, 0.925, 0.670];
							break;
						case 121:
							arr = [0.729, 0.925, 0.654];
							break;
						case 122:
							arr = [0.741, 0.929, 0.635];
							break;
						case 123:
							arr = [0.749, 0.929, 0.619];
							break;
						case 124:
							arr = [0.756, 0.929, 0.603];
							break;
						case 125:
							arr = [0.768, 0.933, 0.584];
							break;
						case 126:
							arr = [0.776, 0.933, 0.568];
							break;
						case 127:
							arr = [0.788, 0.937, 0.549];
							break;
						case 128:
							arr = [0.796, 0.937, 0.533];
							break;
						case 129:
							arr = [0.803, 0.937, 0.517];
							break;
						case 130:
							arr = [0.815, 0.941, 0.498];
							break;
						case 131:
							arr = [0.823, 0.941, 0.482];
							break;
						case 132:
							arr = [0.831, 0.945, 0.462];
							break;
						case 133:
							arr = [0.843, 0.945, 0.447];
							break;
						case 134:
							arr = [0.850, 0.945, 0.431];
							break;
						case 135:
							arr = [0.858, 0.949, 0.411];
							break;
						case 136:
							arr = [0.870, 0.949, 0.396];
							break;
						case 137:
							arr = [0.878, 0.952, 0.376];
							break;
						case 138:
							arr = [0.890, 0.952, 0.360];
							break;
						case 139:
							arr = [0.898, 0.956, 0.341];
							break;
						case 140:
							arr = [0.905, 0.956, 0.325];
							break;
						case 141:
							arr = [0.917, 0.956, 0.309];
							break;
						case 142:
							arr = [0.925, 0.960, 0.290];
							break;
						case 143:
							arr = [0.933, 0.960, 0.274];
							break;
						case 144:
							arr = [0.945, 0.964, 0.254];
							break;
						case 145:
							arr = [0.952, 0.964, 0.239];
							break;
						case 146:
							arr = [0.964, 0.964, 0.223];
							break;
						case 147:
							arr = [0.972, 0.968, 0.203];
							break;
						case 148:
							arr = [0.980, 0.968, 0.188];
							break;
						case 149:
							arr = [0.992, 0.972, 0.168];
							break;
						case 150:
							arr = [1, 0.972, 0.152];
							break;
						case 151:
							arr = [1, 0.972, 0.152];
							break;
						case 152:
							arr = [1, 0.964, 0.160];
							break;
						case 153:
							arr = [1, 0.956, 0.168];
							break;
						case 154:
							arr = [1, 0.949, 0.176];
							break;
						case 155:
							arr = [1, 0.937, 0.184];
							break;
						case 156:
							arr = [1, 0.929, 0.192];
							break;
						case 157:
							arr = [1, 0.921, 0.2];
							break;
						case 158:
							arr = [1, 0.913, 0.207];
							break;
						case 159:
							arr = [1, 0.905, 0.215];
							break;
						case 160:
							arr = [1, 0.898, 0.223];
							break;
						case 161:
							arr = [1, 0.890, 0.231];
							break;
						case 162:
							arr = [1, 0.878, 0.239];
							break;
						case 163:
							arr = [1, 0.870, 0.247];
							break;
						case 164:
							arr = [1, 0.862, 0.258];
							break;
						case 165:
							arr = [1, 0.854, 0.266];
							break;
						case 166:
							arr = [1, 0.847, 0.274];
							break;
						case 167:
							arr = [1, 0.839, 0.282];
							break;
						case 168:
							arr = [1, 0.831, 0.290];
							break;
						case 169:
							arr = [1, 0.819, 0.298];
							break;
						case 170:
							arr = [1, 0.811, 0.305];
							break;
						case 171:
							arr = [1, 0.803, 0.313];
							break;
						case 172:
							arr = [1, 0.796, 0.321];
							break;
						case 173:
							arr = [1, 0.788, 0.329];
							break;
						case 174:
							arr = [1, 0.780, 0.337];
							break;
						case 175:
							arr = [1, 0.772, 0.345];
							break;
						case 176:
							arr = [1, 0.760, 0.352];
							break;
						case 177:
							arr = [1, 0.752, 0.360];
							break;
						case 178:
							arr = [1, 0.745, 0.368];
							break;
						case 179:
							arr = [1, 0.737, 0.376];
							break;
						case 180:
							arr = [1, 0.729, 0.384];
							break;
						case 181:
							arr = [1, 0.721, 0.392];
							break;
						case 182:
							arr = [1, 0.713, 0.4];
							break;
						case 183:
							arr = [1, 0.701, 0.407];
							break;
						case 184:
							arr = [1, 0.694, 0.415];
							break;
						case 185:
							arr = [1, 0.686, 0.423];
							break;
						case 186:
							arr = [1, 0.678, 0.431];
							break;
						case 187:
							arr = [1, 0.670, 0.439];
							break;
						case 188:
							arr = [1, 0.662, 0.450];
							break;
						case 189:
							arr = [1, 0.654, 0.458];
							break;
						case 190:
							arr = [1, 0.643, 0.466];
							break;
						case 191:
							arr = [1, 0.635, 0.474];
							break;
						case 192:
							arr = [1, 0.627, 0.482];
							break;
						case 193:
							arr = [1, 0.619, 0.490];
							break;
						case 194:
							arr = [1, 0.611, 0.498];
							break;
						case 195:
							arr = [1, 0.603, 0.505];
							break;
						case 196:
							arr = [1, 0.596, 0.513];
							break;
						case 197:
							arr = [1, 0.584, 0.521];
							break;
						case 198:
							arr = [1, 0.576, 0.529];
							break;
						case 199:
							arr = [1, 0.568, 0.537];
							break;
						case 200:
							arr = [1, 0.560, 0.545];
							break;
						case 201:
							arr = [1, 0.560, 0.545];
							break;
						case 202:
							arr = [1, 0.549, 0.533];
							break;
						case 203:
							arr = [1, 0.541, 0.525];
							break;
						case 204:
							arr = [1, 0.529, 0.513];
							break;
						case 205:
							arr = [1, 0.517, 0.501];
							break;
						case 206:
							arr = [1, 0.505, 0.494];
							break;
						case 207:
							arr = [1, 0.498, 0.482];
							break;
						case 208:
							arr = [1, 0.486, 0.470];
							break;
						case 209:
							arr = [1, 0.474, 0.462];
							break;
						case 210:
							arr = [1, 0.462, 0.450];
							break;
						case 211:
							arr = [1, 0.454, 0.439];
							break;
						case 212:
							arr = [1, 0.443, 0.431];
							break;
						case 213:
							arr = [1, 0.431, 0.419];
							break;
						case 214:
							arr = [1, 0.419, 0.407];
							break;
						case 215:
							arr = [1, 0.411, 0.4];
							break;
						case 216:
							arr = [1, 0.4, 0.388];
							break;
						case 217:
							arr = [1, 0.388, 0.376];
							break;
						case 218:
							arr = [1, 0.376, 0.368];
							break;
						case 219:
							arr = [1, 0.368, 0.356];
							break;
						case 220:
							arr = [1, 0.356, 0.345];
							break;
						case 221:
							arr = [1, 0.345, 0.337];
							break;
						case 222:
							arr = [1, 0.333, 0.325];
							break;
						case 223:
							arr = [1, 0.325, 0.313];
							break;
						case 224:
							arr = [1, 0.313, 0.305];
							break;
						case 225:
							arr = [1, 0.301, 0.294];
							break;
						case 226:
							arr = [1, 0.290, 0.282];
							break;
						case 227:
							arr = [1, 0.282, 0.274];
							break;
						case 228:
							arr = [1, 0.270, 0.262];
							break;
						case 229:
							arr = [1, 0.258, 0.250];
							break;
						case 230:
							arr = [1, 0.247, 0.239];
							break;
						case 231:
							arr = [1, 0.239, 0.231];
							break;
						case 232:
							arr = [1, 0.227, 0.219];
							break;
						case 233:
							arr = [1, 0.215, 0.207];
							break;
						case 234:
							arr = [1, 0.203, 0.2];
							break;
						case 235:
							arr = [1, 0.196, 0.188];
							break;
						case 236:
							arr = [1, 0.184, 0.176];
							break;
						case 237:
							arr = [1, 0.172, 0.168];
							break;
						case 238:
							arr = [1, 0.160, 0.156];
							break;
						case 239:
							arr = [1, 0.152, 0.145];
							break;
						case 240:
							arr = [1, 0.141, 0.137];
							break;
						case 241:
							arr = [1, 0.129, 0.125];
							break;
						case 242:
							arr = [1, 0.117, 0.113];
							break;
						case 243:
							arr = [1, 0.109, 0.105];
							break;
						case 244:
							arr = [1, 0.098, 0.094];
							break;
						case 245:
							arr = [1, 0.086, 0.082];
							break;
						case 246:
							arr = [1, 0.074, 0.074];
							break;
						case 247:
							arr = [1, 0.066, 0.062];
							break;
						case 248:
							arr = [1, 0.054, 0.050];
							break;
						case 249:
							arr = [1, 0.043, 0.043];
							break;
						case 250:
							arr = [1, 0.031, 0.031];
							break;
						case 251:
							arr = [1, 0.023, 0.019];
							break;
						case 252:
							arr = [1, 0.011, 0.011];
							break;
						case 253:
							arr = [1, 0, 0];
							break;
						case 254:
							arr = [1, 0, 0];
							break;
						case 255:
							arr = [1, 0, 0];
							break;
						default:
						    arr = [0, 0, 0];						
					}
					return arr;
				}
				
				
	
		
				var scene = createScene();
				engine.runRenderLoop(function(){
					scene.render();
				});
				
				let auxPaletteColor = document.getElementsByClassName("my-legendColor");
				let auxPaletteGray = document.getElementsByClassName("my-legendGray");
				let auxCol = document.getElementsByClassName("auxCol");

				//document.getElementById("auxCheck").style.display = "inline";
				document.getElementById("backLoad").style.display = "none";


				auxPaletteColor[0].style.display = "inline";
				auxPaletteGray[0].style.display = "none";
				auxCol[0].style.display = "block";
			

				//Tri-state button


			});
		});
	}
}


componentWillMount() {
	
	
  }

	render(){
		return(

			<div>
				
				<div id="myModal" className="modal">
					<div className="modal-content">
						<p>Loading..</p>
					</div>
				</div>
		
				<nav className="navbar navbar-expand-lg navbar-dark ">
				  <a className="navbar-brand" href="#">3D VISUALIZER</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="'#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				    <div className="navbar-nav">
				      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
				    </div>
				  </div>
				</nav>

				<div className="auxbody">

				<div className="toggle_radio">
					<input defaultChecked type="radio" className="toggle_option" id="first_toggle" name="toggle_option" value="fail"></input>
					<input type="radio" className="toggle_option" id="second_toggle" name="toggle_option" value="na"></input>
					<input type="radio" className="toggle_option" id="third_toggle" name="toggle_option" value="pass"></input>
					<label htmlFor="first_toggle"><p>Load Laser File</p></label>
					<label htmlFor="second_toggle"><p>I RealTime Plot</p></label>
					<label htmlFor="third_toggle"><p>Export to JPG</p></label>
					<div className="toggle_option_slider">
					</div>
				</div>



				<input type="file" id="inputUpload"  name="files[]" multiple/> 
				<div className="row">
					<button  id="Upload" type="button" className="btn auxb" onClick={this.callApi}>Select File</button>	
					<p id="nameFile"></p>			
				</div>

				<div id="backLoad" className="">
					<div className="loader">
						<div className="inner one"></div>
						<div className="inner two"></div>
						<div className="inner three"></div>
						<p id="load">Loading...</p>
					</div>
				</div>

				<div className="row">
				<canvas id="canvas" className="col-md-9" ></canvas>
			
				<div className="col-md-2 auxCol">
					<div className="row titleOptA">
					<h4>Views</h4>
					</div>
					<div className="row">
					<a href="#" id="3D" className="action-button animate blue activeState">3D</a>
					</div>
					<div className="row">
					<a href="#" id="2D" className="action-button animate blue">2D</a>
					</div>
					<div className="row">
					<a href="#" id="wireframe" className="action-button animate blue">Wireframe</a>
					</div>

					<div className="row titleOpt">
					<h4>Colors</h4>
					</div>
					<div className="row">
					<a href="#" id="color" className="action-button animate blue activeState">Color Scale</a>
					</div>
					<div className="row">
					<a href="#" id="gray" className="action-button animate blue">Gray Scale</a>
					</div>

					<div className="row titleOpt">
					<h4>Value</h4>
					</div>
					<div className="row">
					<a href="#" id="intensityA" className="action-button animate blue activeState">Intensity</a>
					</div>
					<div className="row">
					<a href="#" id="rangeA" className="action-button animate blue">Range</a>
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

			
		<div className='my-legendGray col-md-12'>
		<div className='legend-title'>Gray Scale</div>
		<div className='legend-scale'>
		<ul className='legend-labels'>

			<li><span style={{background:'#000000'}}></span>0</li>
			<li><span style={{background:'#010101'}}></span></li>
			<li><span style={{background:'#020202'}}></span></li>
			<li><span style={{background:'#030303'}}></span></li>
			<li><span style={{background:'#040404'}}></span></li>
			<li><span style={{background:'#050505'}}></span></li>
			<li><span style={{background:'#060606'}}></span></li>
			<li><span style={{background:'#070707'}}></span></li>
			<li><span style={{background:'#080808'}}></span></li>
			<li><span style={{background:'#090909'}}></span>10</li>
			<li><span style={{background:'#0a0a0a'}}></span></li>
			<li><span style={{background:'#0b0b0b'}}></span></li>
			<li><span style={{background:'#0c0c0c'}}></span></li>
			<li><span style={{background:'#0d0d0d'}}></span></li>
			<li><span style={{background:'#0e0e0e'}}></span></li>
			<li><span style={{background:'#0f0f0f'}}></span></li>
			<li><span style={{background:'#101010'}}></span></li>
			<li><span style={{background:'#111111'}}></span></li>
			<li><span style={{background:'#121212'}}></span></li>
			<li><span style={{background:'#131313'}}></span>20</li>
			<li><span style={{background:'#141414'}}></span></li>
			<li><span style={{background:'#151515'}}></span></li>
			<li><span style={{background:'#161616'}}></span></li>
			<li><span style={{background:'#171717'}}></span></li>
			<li><span style={{background:'#181818'}}></span></li>
			<li><span style={{background:'#191919'}}></span></li>
			<li><span style={{background:'#1a1a1a'}}></span></li>
			<li><span style={{background:'#1b1b1b'}}></span></li>
			<li><span style={{background:'#1c1c1c'}}></span></li>
			<li><span style={{background:'#1d1d1d'}}></span>30</li>
			<li><span style={{background:'#1e1e1e'}}></span></li>
			<li><span style={{background:'#1f1f1f'}}></span></li>
			<li><span style={{background:'#202020'}}></span></li>
			<li><span style={{background:'#212121'}}></span></li>
			<li><span style={{background:'#222222'}}></span></li>
			<li><span style={{background:'#232323'}}></span></li>
			<li><span style={{background:'#242424'}}></span></li>
			<li><span style={{background:'#252525'}}></span></li>
			<li><span style={{background:'#262626'}}></span></li>
			<li><span style={{background:'#272727'}}></span>40</li>
			<li><span style={{background:'#282828'}}></span></li>
			<li><span style={{background:'#292929'}}></span></li>
			<li><span style={{background:'#2b2b2b'}}></span></li>
			<li><span style={{background:'#2c2c2c'}}></span></li>
			<li><span style={{background:'#2d2d2d'}}></span></li>
			<li><span style={{background:'#2e2e2e'}}></span></li>
			<li><span style={{background:'#2f2f2f'}}></span></li>
			<li><span style={{background:'#303030'}}></span></li>
			<li><span style={{background:'#313131'}}></span></li>
			<li><span style={{background:'#323232'}}></span>50</li>
			<li><span style={{background:'#333333'}}></span></li>
			<li><span style={{background:'#343434'}}></span></li>
			<li><span style={{background:'#353535'}}></span></li>
			<li><span style={{background:'#363636'}}></span></li>
			<li><span style={{background:'#373737'}}></span></li>
			<li><span style={{background:'#383838'}}></span></li>
			<li><span style={{background:'#393939'}}></span></li>
			<li><span style={{background:'#3a3a3a'}}></span></li>
			<li><span style={{background:'#3b3b3b'}}></span></li>
			<li><span style={{background:'#3c3c3c'}}></span>60</li>
			<li><span style={{background:'#3d3d3d'}}></span></li>
			<li><span style={{background:'#3e3e3e'}}></span></li>
			<li><span style={{background:'#3f3f3f'}}></span></li>
			<li><span style={{background:'#404040'}}></span></li>
			<li><span style={{background:'#414141'}}></span></li>
			<li><span style={{background:'#424242'}}></span></li>
			<li><span style={{background:'#434343'}}></span></li>
			<li><span style={{background:'#444444'}}></span></li>
			<li><span style={{background:'#454545'}}></span></li>
			<li><span style={{background:'#464646'}}></span>70</li>
			<li><span style={{background:'#474747'}}></span></li>
			<li><span style={{background:'#484848'}}></span></li>
			<li><span style={{background:'#494949'}}></span></li>
			<li><span style={{background:'#4a4a4a'}}></span></li>
			<li><span style={{background:'#4b4b4b'}}></span></li>
			<li><span style={{background:'#4c4c4c'}}></span></li>
			<li><span style={{background:'#4d4d4d'}}></span></li>
			<li><span style={{background:'#4e4e4e'}}></span></li>
			<li><span style={{background:'#4f4f4f'}}></span></li>
			<li><span style={{background:'#505050'}}></span>80</li>
			<li><span style={{background:'#515151'}}></span></li>
			<li><span style={{background:'#525252'}}></span></li>
			<li><span style={{background:'#535353'}}></span></li>
			<li><span style={{background:'#545454'}}></span></li>
			<li><span style={{background:'#555555'}}></span></li>
			<li><span style={{background:'#565656'}}></span></li>
			<li><span style={{background:'#575757'}}></span></li>
			<li><span style={{background:'#585858'}}></span></li>
			<li><span style={{background:'#595959'}}></span></li>
			<li><span style={{background:'#5a5a5a'}}></span>90</li>
			<li><span style={{background:'#5b5b5b'}}></span></li>
			<li><span style={{background:'#5c5c5c'}}></span></li>
			<li><span style={{background:'#5d5d5d'}}></span></li>
			<li><span style={{background:'#5e5e5e'}}></span></li>
			<li><span style={{background:'#5f5f5f'}}></span></li>
			<li><span style={{background:'#606060'}}></span></li>
			<li><span style={{background:'#616161'}}></span></li>
			<li><span style={{background:'#626262'}}></span></li>
			<li><span style={{background:'#636363'}}></span></li>
			<li><span style={{background:'#646464'}}></span>100</li>
			<li><span style={{background:'#656565'}}></span></li>
			<li><span style={{background:'#666666'}}></span></li>
			<li><span style={{background:'#676767'}}></span></li>
			<li><span style={{background:'#686868'}}></span></li>
			<li><span style={{background:'#696969'}}></span></li>
			<li><span style={{background:'#6a6a6a'}}></span></li>
			<li><span style={{background:'#6b6b6b'}}></span></li>
			<li><span style={{background:'#6c6c6c'}}></span></li>
			<li><span style={{background:'#6d6d6d'}}></span></li>
			<li><span style={{background:'#6e6e6e'}}></span>110</li>
			<li><span style={{background:'#6f6f6f'}}></span></li>
			<li><span style={{background:'#707070'}}></span></li>
			<li><span style={{background:'#717171'}}></span></li>
			<li><span style={{background:'#727272'}}></span></li>
			<li><span style={{background:'#737373'}}></span></li>
			<li><span style={{background:'#747474'}}></span></li>
			<li><span style={{background:'#757575'}}></span></li>
			<li><span style={{background:'#767676'}}></span></li>
			<li><span style={{background:'#777777'}}></span></li>
			<li><span style={{background:'#787878'}}></span>120</li>
			<li><span style={{background:'#797979'}}></span></li>
			<li><span style={{background:'#7a7a7a'}}></span></li>
			<li><span style={{background:'#7b7b7b'}}></span></li>
			<li><span style={{background:'#7c7c7c'}}></span></li>
			<li><span style={{background:'#7d7d7d'}}></span></li>
			<li><span style={{background:'#7e7e7e'}}></span></li>
			<li><span style={{background:'#808080'}}></span></li>
			<li><span style={{background:'#818181'}}></span></li>
			<li><span style={{background:'#828282'}}></span></li>
			<li><span style={{background:'#838383'}}></span>130</li>
			<li><span style={{background:'#848484'}}></span></li>
			<li><span style={{background:'#858585'}}></span></li>
			<li><span style={{background:'#868686'}}></span></li>
			<li><span style={{background:'#878787'}}></span></li>
			<li><span style={{background:'#888888'}}></span></li>
			<li><span style={{background:'#898989'}}></span></li>
			<li><span style={{background:'#8a8a8a'}}></span></li>
			<li><span style={{background:'#8b8b8b'}}></span></li>
			<li><span style={{background:'#8c8c8c'}}></span></li>
			<li><span style={{background:'#8d8d8d'}}></span>140</li>
			<li><span style={{background:'#8e8e8e'}}></span></li>
			<li><span style={{background:'#8f8f8f'}}></span></li>
			<li><span style={{background:'#909090'}}></span></li>
			<li><span style={{background:'#919191'}}></span></li>
			<li><span style={{background:'#929292'}}></span></li>
			<li><span style={{background:'#939393'}}></span></li>
			<li><span style={{background:'#949494'}}></span></li>
			<li><span style={{background:'#959595'}}></span></li>
			<li><span style={{background:'#969696'}}></span></li>
			<li><span style={{background:'#979797'}}></span>150</li>
			<li><span style={{background:'#989898'}}></span></li>
			<li><span style={{background:'#999999'}}></span></li>
			<li><span style={{background:'#9a9a9a'}}></span></li>
			<li><span style={{background:'#9b9b9b'}}></span></li>
			<li><span style={{background:'#9c9c9c'}}></span></li>
			<li><span style={{background:'#9d9d9d'}}></span></li>
			<li><span style={{background:'#9e9e9e'}}></span></li>
			<li><span style={{background:'#9f9f9f'}}></span></li>
			<li><span style={{background:'#a0a0a0'}}></span></li>
			<li><span style={{background:'#a1a1a1'}}></span>160</li>
			<li><span style={{background:'#a2a2a2'}}></span></li>
			<li><span style={{background:'#a3a3a3'}}></span></li>
			<li><span style={{background:'#a4a4a4'}}></span></li>
			<li><span style={{background:'#a5a5a5'}}></span></li>
			<li><span style={{background:'#a6a6a6'}}></span></li>
			<li><span style={{background:'#a7a7a7'}}></span></li>
			<li><span style={{background:'#a8a8a8'}}></span></li>
			<li><span style={{background:'#a9a9a9'}}></span></li>
			<li><span style={{background:'#aaaaaa'}}></span></li>
			<li><span style={{background:'#ababab'}}></span>170</li>
			<li><span style={{background:'#acacac'}}></span></li>
			<li><span style={{background:'#adadad'}}></span></li>
			<li><span style={{background:'#aeaeae'}}></span></li>
			<li><span style={{background:'#afafaf'}}></span></li>
			<li><span style={{background:'#b0b0b0'}}></span></li>
			<li><span style={{background:'#b1b1b1'}}></span></li>
			<li><span style={{background:'#b2b2b2'}}></span></li>
			<li><span style={{background:'#b3b3b3'}}></span></li>
			<li><span style={{background:'#b4b4b4'}}></span></li>
			<li><span style={{background:'#b5b5b5'}}></span>180</li>
			<li><span style={{background:'#b6b6b6'}}></span></li>
			<li><span style={{background:'#b7b7b7'}}></span></li>
			<li><span style={{background:'#b8b8b8'}}></span></li>
			<li><span style={{background:'#b9b9b9'}}></span></li>
			<li><span style={{background:'#bababa'}}></span></li>
			<li><span style={{background:'#bbbbbb'}}></span></li>
			<li><span style={{background:'#bcbcbc'}}></span></li>
			<li><span style={{background:'#bdbdbd'}}></span></li>
			<li><span style={{background:'#bebebe'}}></span></li>
			<li><span style={{background:'#bfbfbf'}}></span>190</li>
			<li><span style={{background:'#c0c0c0'}}></span></li>
			<li><span style={{background:'#c1c1c1'}}></span></li>
			<li><span style={{background:'#c2c2c2'}}></span></li>
			<li><span style={{background:'#c3c3c3'}}></span></li>
			<li><span style={{background:'#c4c4c4'}}></span></li>
			<li><span style={{background:'#c5c5c5'}}></span></li>
			<li><span style={{background:'#c6c6c6'}}></span></li>
			<li><span style={{background:'#c7c7c7'}}></span></li>
			<li><span style={{background:'#c8c8c8'}}></span></li>
			<li><span style={{background:'#c9c9c9'}}></span>200</li>
			<li><span style={{background:'#cacaca'}}></span></li>
			<li><span style={{background:'#cbcbcb'}}></span></li>
			<li><span style={{background:'#cccccc'}}></span></li>
			<li><span style={{background:'#cdcdcd'}}></span></li>
			<li><span style={{background:'#cecece'}}></span></li>
			<li><span style={{background:'#cfcfcf'}}></span></li>
			<li><span style={{background:'#d0d0d0'}}></span></li>
			<li><span style={{background:'#d1d1d1'}}></span></li>
			<li><span style={{background:'#d2d2d2'}}></span></li>
			<li><span style={{background:'#d3d3d3'}}></span>210</li>
			<li><span style={{background:'#d5d5d5'}}></span></li>
			<li><span style={{background:'#d6d6d6'}}></span></li>
			<li><span style={{background:'#d7d7d7'}}></span></li>
			<li><span style={{background:'#d8d8d8'}}></span></li>
			<li><span style={{background:'#d9d9d9'}}></span></li>
			<li><span style={{background:'#dadada'}}></span></li>
			<li><span style={{background:'#dbdbdb'}}></span></li>
			<li><span style={{background:'#dcdcdc'}}></span></li>
			<li><span style={{background:'#dddddd'}}></span></li>
			<li><span style={{background:'#dedede'}}></span>220</li>
			<li><span style={{background:'#dfdfdf'}}></span></li>
			<li><span style={{background:'#e0e0e0'}}></span></li>
			<li><span style={{background:'#e1e1e1'}}></span></li>
			<li><span style={{background:'#e2e2e2'}}></span></li>
			<li><span style={{background:'#e3e3e3'}}></span></li>
			<li><span style={{background:'#e4e4e4'}}></span></li>
			<li><span style={{background:'#e5e5e5'}}></span></li>
			<li><span style={{background:'#e6e6e6'}}></span></li>
			<li><span style={{background:'#e7e7e7'}}></span>230</li>
			<li><span style={{background:'#e8e8e8'}}></span></li>
			<li><span style={{background:'#e9e9e9'}}></span></li>
			<li><span style={{background:'#eaeaea'}}></span></li>
			<li><span style={{background:'#ebebeb'}}></span></li>
			<li><span style={{background:'#ececec'}}></span></li>
			<li><span style={{background:'#ededed'}}></span></li>
			<li><span style={{background:'#eeeeee'}}></span></li>
			<li><span style={{background:'#efefef'}}></span></li>
			<li><span style={{background:'#f0f0f0'}}></span></li>
			<li><span style={{background:'#f1f1f1'}}></span></li>
			<li><span style={{background:'#f2f2f2'}}></span>240</li>
			<li><span style={{background:'#f3f3f3'}}></span></li>
			<li><span style={{background:'#f4f4f4'}}></span></li>
			<li><span style={{background:'#f5f5f5'}}></span></li>
			<li><span style={{background:'#f6f6f6'}}></span></li>
			<li><span style={{background:'#f7f7f7'}}></span></li>
			<li><span style={{background:'#f8f8f8'}}></span></li>
			<li><span style={{background:'#f9f9f9'}}></span></li>
			<li><span style={{background:'#fafafa'}}></span></li>
			<li><span style={{background:'#fbfbfb'}}></span></li>
			<li><span style={{background:'#fcfcfc'}}></span>>=250</li>
			<li><span style={{background:'#fdfdfd'}}></span></li>
			<li><span style={{background:'#fefefe'}}></span></li>
			<li><span style={{background:'#ffffff'}}></span></li>
		</ul>
		</div>

		</div>
			
		
		<div className='my-legendColor'>
		<div className='legend-title'>Color Scale</div>
		<div className='legend-scale'>
		<ul className='legend-labels'>

		<li><span style={{background:'#000000'}}></span>0</li>
		<li><span style={{background:'#000104'}}></span></li>
		<li><span style={{background:'#010309'}}></span></li>
		<li><span style={{background:'#01040d'}}></span></li>
		<li><span style={{background:'#020612'}}></span></li>
		<li><span style={{background:'#020716'}}></span></li>
		<li><span style={{background:'#03091b'}}></span></li>
		<li><span style={{background:'#030a1f'}}></span></li>
		<li><span style={{background:'#030c24'}}></span></li>
		<li><span style={{background:'#040d28'}}></span>10</li>
		<li><span style={{background:'#040f2c'}}></span></li>
		<li><span style={{background:'#051031'}}></span></li>
		<li><span style={{background:'#051235'}}></span></li>
		<li><span style={{background:'#06133a'}}></span></li>
		<li><span style={{background:'#06153e'}}></span></li>
		<li><span style={{background:'#061643'}}></span></li>
		<li><span style={{background:'#071847'}}></span></li>
		<li><span style={{background:'#07194c'}}></span></li>
		<li><span style={{background:'#081b50'}}></span></li>
		<li><span style={{background:'#081c55'}}></span>20</li>
		<li><span style={{background:'#091e59'}}></span></li>
		<li><span style={{background:'#091f5d'}}></span></li>
		<li><span style={{background:'#092162'}}></span></li>
		<li><span style={{background:'#0a2266'}}></span></li>
		<li><span style={{background:'#0a246b'}}></span></li>
		<li><span style={{background:'#0b256f'}}></span></li>
		<li><span style={{background:'#0b2774'}}></span></li>
		<li><span style={{background:'#0c2878'}}></span></li>
		<li><span style={{background:'#0c2a7d'}}></span></li>
		<li><span style={{background:'#0c2b81'}}></span>30</li>
		<li><span style={{background:'#0d2d85'}}></span></li>
		<li><span style={{background:'#0d2e8a'}}></span></li>
		<li><span style={{background:'#0e308e'}}></span></li>
		<li><span style={{background:'#0e3193'}}></span></li>
		<li><span style={{background:'#0f3397'}}></span></li>
		<li><span style={{background:'#0f349c'}}></span></li>
		<li><span style={{background:'#0f36a0'}}></span></li>
		<li><span style={{background:'#1037a5'}}></span></li>
		<li><span style={{background:'#1039a9'}}></span></li>
		<li><span style={{background:'#113aae'}}></span>40</li>
		<li><span style={{background:'#113cb2'}}></span></li>
		<li><span style={{background:'#123db6'}}></span></li>
		<li><span style={{background:'#123fbb'}}></span></li>
		<li><span style={{background:'#1240bf'}}></span></li>
		<li><span style={{background:'#1342c4'}}></span></li>
		<li><span style={{background:'#1343c8'}}></span></li>
		<li><span style={{background:'#1445cd'}}></span></li>
		<li><span style={{background:'#1446d1'}}></span></li>
		<li><span style={{background:'#1548d6'}}></span></li>
		<li><span style={{background:'#1549da'}}></span>50</li>
		<li><span style={{background:'#1549da'}}></span></li>
		<li><span style={{background:'#174cdb'}}></span></li>
		<li><span style={{background:'#1a4fdc'}}></span></li>
		<li><span style={{background:'#1c52dc'}}></span></li>
		<li><span style={{background:'#1f56dd'}}></span></li>
		<li><span style={{background:'#2159de'}}></span></li>
		<li><span style={{background:'#235cdf'}}></span></li>
		<li><span style={{background:'#265fdf'}}></span></li>
		<li><span style={{background:'#2862e0'}}></span></li>
		<li><span style={{background:'#2b65e1'}}></span>60</li>
		<li><span style={{background:'#2d69e2'}}></span></li>
		<li><span style={{background:'#2f6ce2'}}></span></li>
		<li><span style={{background:'#326fe3'}}></span></li>
		<li><span style={{background:'#3472e4'}}></span></li>
		<li><span style={{background:'#3775e5'}}></span></li>
		<li><span style={{background:'#3978e5'}}></span></li>
		<li><span style={{background:'#3c7ce6'}}></span></li>
		<li><span style={{background:'#3e7fe7'}}></span></li>
		<li><span style={{background:'#4082e8'}}></span></li>
		<li><span style={{background:'#4385e8'}}></span>70</li>
		<li><span style={{background:'#4588e9'}}></span></li>
		<li><span style={{background:'#488bea'}}></span></li>
		<li><span style={{background:'#4a8feb'}}></span></li>
		<li><span style={{background:'#4c92eb'}}></span></li>
		<li><span style={{background:'#4f95ec'}}></span></li>
		<li><span style={{background:'#5198ed'}}></span></li>
		<li><span style={{background:'#549bee'}}></span></li>
		<li><span style={{background:'#569eee'}}></span></li>
		<li><span style={{background:'#58a2ef'}}></span></li>
		<li><span style={{background:'#5ba5f0'}}></span>80</li>
		<li><span style={{background:'#5da8f1'}}></span></li>
		<li><span style={{background:'#60abf1'}}></span></li>
		<li><span style={{background:'#62aef2'}}></span></li>
		<li><span style={{background:'#64b1f3'}}></span></li>
		<li><span style={{background:'#67b5f4'}}></span></li>
		<li><span style={{background:'#69b8f4'}}></span></li>
		<li><span style={{background:'#6cbbf5'}}></span></li>
		<li><span style={{background:'#6ebef6'}}></span></li>
		<li><span style={{background:'#71c1f7'}}></span></li>
		<li><span style={{background:'#73c4f7'}}></span>90</li>
		<li><span style={{background:'#75c8f8'}}></span></li>
		<li><span style={{background:'#78cbf9'}}></span></li>
		<li><span style={{background:'#7acefa'}}></span></li>
		<li><span style={{background:'#7dd1fa'}}></span></li>
		<li><span style={{background:'#7fd4fb'}}></span></li>
		<li><span style={{background:'#81d7fc'}}></span></li>
		<li><span style={{background:'#84dbfd'}}></span></li>
		<li><span style={{background:'#86defd'}}></span></li>
		<li><span style={{background:'#89e1fe'}}></span></li>
		<li><span style={{background:'#8be4ff'}}></span>100</li>
		<li><span style={{background:'#8be4ff'}}></span></li>
		<li><span style={{background:'#8de4fb'}}></span></li>
		<li><span style={{background:'#90e5f6'}}></span></li>
		<li><span style={{background:'#92e5f2'}}></span></li>
		<li><span style={{background:'#94e6ed'}}></span></li>
		<li><span style={{background:'#97e6e9'}}></span></li>
		<li><span style={{background:'#99e6e5'}}></span></li>
		<li><span style={{background:'#9ce7e0'}}></span></li>
		<li><span style={{background:'#9ee7dc'}}></span></li>
		<li><span style={{background:'#a0e8d7'}}></span>110</li>
		<li><span style={{background:'#a3e8d3'}}></span></li>
		<li><span style={{background:'#a5e8cf'}}></span></li>
		<li><span style={{background:'#a7e9ca'}}></span></li>
		<li><span style={{background:'#aae9c6'}}></span></li>
		<li><span style={{background:'#aceac1'}}></span></li>
		<li><span style={{background:'#afeabd'}}></span></li>
		<li><span style={{background:'#b1ebb8'}}></span></li>
		<li><span style={{background:'#b3ebb4'}}></span></li>
		<li><span style={{background:'#b6ebb0'}}></span></li>
		<li><span style={{background:'#b8ecab'}}></span>120</li>
		<li><span style={{background:'#baeca7'}}></span></li>
		<li><span style={{background:'#bdeda2'}}></span></li>
		<li><span style={{background:'#bfed9e'}}></span></li>
		<li><span style={{background:'#c1ed9a'}}></span></li>
		<li><span style={{background:'#c4ee95'}}></span></li>
		<li><span style={{background:'#c6ee91'}}></span></li>
		<li><span style={{background:'#c9ef8c'}}></span></li>
		<li><span style={{background:'#cbef88'}}></span></li>
		<li><span style={{background:'#cdef84'}}></span></li>
		<li><span style={{background:'#d0f07f'}}></span>130</li>
		<li><span style={{background:'#d2f07b'}}></span></li>
		<li><span style={{background:'#d4f176'}}></span></li>
		<li><span style={{background:'#d7f172'}}></span></li>
		<li><span style={{background:'#d9f16e'}}></span></li>
		<li><span style={{background:'#dbf269'}}></span></li>
		<li><span style={{background:'#def265'}}></span></li>
		<li><span style={{background:'#e0f360'}}></span></li>
		<li><span style={{background:'#e3f35c'}}></span></li>
		<li><span style={{background:'#e5f457'}}></span></li>
		<li><span style={{background:'#e7f453'}}></span>140</li>
		<li><span style={{background:'#eaf44f'}}></span></li>
		<li><span style={{background:'#ecf54a'}}></span></li>
		<li><span style={{background:'#eef546'}}></span></li>
		<li><span style={{background:'#f1f641'}}></span></li>
		<li><span style={{background:'#f3f63d'}}></span></li>
		<li><span style={{background:'#f6f639'}}></span></li>
		<li><span style={{background:'#f8f734'}}></span></li>
		<li><span style={{background:'#faf730'}}></span></li>
		<li><span style={{background:'#fdf82b'}}></span></li>
		<li><span style={{background:'#fff827'}}></span>150</li>
		<li><span style={{background:'#fff827'}}></span></li>
		<li><span style={{background:'#fff629'}}></span></li>
		<li><span style={{background:'#fff42b'}}></span></li>
		<li><span style={{background:'#fff22d'}}></span></li>
		<li><span style={{background:'#ffef2f'}}></span></li>
		<li><span style={{background:'#ffed31'}}></span></li>
		<li><span style={{background:'#ffeb33'}}></span></li>
		<li><span style={{background:'#ffe935'}}></span></li>
		<li><span style={{background:'#ffe737'}}></span></li>
		<li><span style={{background:'#ffe539'}}></span>160</li>
		<li><span style={{background:'#ffe33b'}}></span></li>
		<li><span style={{background:'#ffe03d'}}></span></li>
		<li><span style={{background:'#ffde3f'}}></span></li>
		<li><span style={{background:'#ffdc42'}}></span></li>
		<li><span style={{background:'#ffda44'}}></span></li>
		<li><span style={{background:'#ffd846'}}></span></li>
		<li><span style={{background:'#ffd648'}}></span></li>
		<li><span style={{background:'#ffd44a'}}></span></li>
		<li><span style={{background:'#ffd14c'}}></span></li>
		<li><span style={{background:'#ffcf4e'}}></span>170</li>
		<li><span style={{background:'#ffcd50'}}></span></li>
		<li><span style={{background:'#ffcb52'}}></span></li>
		<li><span style={{background:'#ffc954'}}></span></li>
		<li><span style={{background:'#ffc756'}}></span></li>
		<li><span style={{background:'#ffc558'}}></span></li>
		<li><span style={{background:'#ffc25a'}}></span></li>
		<li><span style={{background:'#ffc05c'}}></span></li>
		<li><span style={{background:'#ffbe5e'}}></span></li>
		<li><span style={{background:'#ffbc60'}}></span></li>
		<li><span style={{background:'#ffba62'}}></span>180</li>
		<li><span style={{background:'#ffb864'}}></span></li>
		<li><span style={{background:'#ffb666'}}></span></li>
		<li><span style={{background:'#ffb368'}}></span></li>
		<li><span style={{background:'#ffb16a'}}></span></li>
		<li><span style={{background:'#ffaf6c'}}></span></li>
		<li><span style={{background:'#ffad6e'}}></span></li>
		<li><span style={{background:'#ffab70'}}></span></li>
		<li><span style={{background:'#ffa973'}}></span></li>
		<li><span style={{background:'#ffa775'}}></span></li>
		<li><span style={{background:'#ffa477'}}></span>190</li>
		<li><span style={{background:'#ffa279'}}></span></li>
		<li><span style={{background:'#ffa07b'}}></span></li>
		<li><span style={{background:'#ff9e7d'}}></span></li>
		<li><span style={{background:'#ff9c7f'}}></span></li>
		<li><span style={{background:'#ff9a81'}}></span></li>
		<li><span style={{background:'#ff9883'}}></span></li>
		<li><span style={{background:'#ff9585'}}></span></li>
		<li><span style={{background:'#ff9387'}}></span></li>
		<li><span style={{background:'#ff9189'}}></span></li>
		<li><span style={{background:'#ff8f8b'}}></span>200</li>
		<li><span style={{background:'#ff8f8b'}}></span></li>
		<li><span style={{background:'#ff8c88'}}></span></li>
		<li><span style={{background:'#ff8a86'}}></span></li>
		<li><span style={{background:'#ff8783'}}></span></li>
		<li><span style={{background:'#ff8480'}}></span></li>
		<li><span style={{background:'#ff817e'}}></span></li>
		<li><span style={{background:'#ff7f7b'}}></span></li>
		<li><span style={{background:'#ff7c78'}}></span></li>
		<li><span style={{background:'#ff7976'}}></span></li>
		<li><span style={{background:'#ff7673'}}></span>210</li>
		<li><span style={{background:'#ff7470'}}></span></li>
		<li><span style={{background:'#ff716e'}}></span></li>
		<li><span style={{background:'#ff6e6b'}}></span></li>
		<li><span style={{background:'#ff6b68'}}></span></li>
		<li><span style={{background:'#ff6966'}}></span></li>
		<li><span style={{background:'#ff6663'}}></span></li>
		<li><span style={{background:'#ff6360'}}></span></li>
		<li><span style={{background:'#ff605e'}}></span></li>
		<li><span style={{background:'#ff5e5b'}}></span></li>
		<li><span style={{background:'#ff5b58'}}></span>220</li>
		<li><span style={{background:'#ff5856'}}></span></li>
		<li><span style={{background:'#ff5553'}}></span></li>
		<li><span style={{background:'#ff5350'}}></span></li>
		<li><span style={{background:'#ff504e'}}></span></li>
		<li><span style={{background:'#ff4d4b'}}></span></li>
		<li><span style={{background:'#ff4a48'}}></span></li>
		<li><span style={{background:'#ff4846'}}></span></li>
		<li><span style={{background:'#ff4543'}}></span></li>
		<li><span style={{background:'#ff4240'}}></span>230</li>
		<li><span style={{background:'#ff3f3d'}}></span></li>
		<li><span style={{background:'#ff3d3b'}}></span></li>
		<li><span style={{background:'#ff3a38'}}></span></li>
		<li><span style={{background:'#ff3735'}}></span></li>
		<li><span style={{background:'#ff3433'}}></span></li>
		<li><span style={{background:'#ff3230'}}></span></li>
		<li><span style={{background:'#ff2f2d'}}></span></li>
		<li><span style={{background:'#ff2c2b'}}></span></li>
		<li><span style={{background:'#ff2928'}}></span></li>
		<li><span style={{background:'#ff2725'}}></span></li>
		<li><span style={{background:'#ff2423'}}></span>240</li>
		<li><span style={{background:'#ff2120'}}></span></li>
		<li><span style={{background:'#ff1e1d'}}></span></li>
		<li><span style={{background:'#ff1c1b'}}></span></li>
		<li><span style={{background:'#ff1918'}}></span></li>
		<li><span style={{background:'#ff1615'}}></span></li>
		<li><span style={{background:'#ff1313'}}></span></li>
		<li><span style={{background:'#ff1110'}}></span></li>
		<li><span style={{background:'#ff0e0d'}}></span></li>
		<li><span style={{background:'#ff0b0b'}}></span></li>
		<li><span style={{background:'#ff0808'}}></span>250</li>
		<li><span style={{background:'#ff0605'}}></span></li>
		<li><span style={{background:'#ff0303'}}></span></li>
		<li><span style={{background:'#ff0000'}}></span></li>
		</ul>
		</div>

		</div>


		</div>		
		<input read-only type="text" id="flagRead" defaultValue="false"></input>
	</div>
			)
	}
}

export default App;