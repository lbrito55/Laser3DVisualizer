import React, { Component } from 'react';
class App extends Component{

selectFile(){
	
}

callApi(){
		var chkBox = document.getElementById('myCheck');
	var chkBox2d = document.getElementById('myCheck2d');
	var chkBoxRange = document.getElementById('range');	
	var chkBoxIntensity = document.getElementById('intensity');	
	
	console.log("llamando a node");

	document.getElementById("inputUpload").click();
	var UpdFile = document.getElementById('inputUpload');

	UpdFile.addEventListener('change', handleFileSelect, false);


	function handleFileSelect(evt) {
			
		var files = evt.target.files;
		var url="";
		var flagTwoFiles = false;

		for (var i = 0, f; f = files[i]; i++) {
			if(i>0){
				url=url.concat("AnotherFile");
				flagTwoFiles = true;
			}
			url=url.concat(f.name);
		}
		//console.log(url);
	
		document.getElementById("backLoad").style.display = "block"; //Loading

		/*var auxUrl = UpdFile.value.split("\\");
		var url = auxUrl[auxUrl.length-1];
		console.log( url);
		*/

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

				var canvas = document.getElementById('canvas');
		
				var engine = new BABYLON.Engine(canvas, true);
				var createScene = function() {
					var scene = new BABYLON.Scene(engine);
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
					let flag2d = false;
					

					if(chkBox2d.checked){ //if is 2d
					
						var paths = [];
						flag2d=true;
						
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
				
						var map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
						map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
						map.position.y = 0;
						var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
						
						//mapMaterial.wireframe = true;
								
						map.material = mapMaterial;
						
						//light.excludedMeshes.push(map);

						var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
						
						


						var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
						if(!colors) {
							
							colors = [];
							var thom =0 ;
							var ty = 0;
							var ja = 0;
							var flagColor = false;
							var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
							//console.log(itensityFe);
							for(var p = 0; p < ((positions.length / 3)/2 ); p++) {
								flagColor = false;
								var intensity = itensityFe[p];
								if(intensity<13 ){
									colors.push(1, 0.894, 0.870, 1);
									colors.push(1, 0.894, 0.870, 1);thom++; flagColor = true;
								}
								if(intensity>=13 && intensity<25 ){
									colors.push(1, 0.713, 0.756, 1);
									colors.push(1, 0.713, 0.756, 1);thom++; flagColor = true;
								}
								if(intensity>=25 && intensity<38){
									colors.push(1, 0.431, 0.705,1);
									colors.push(1, 0.431, 0.705,1);thom++; flagColor = true;
								}
								if(intensity>=38 && intensity<50 ){
									colors.push(0.933, 0.070, 0.537,1);
									colors.push(0.933, 0.070, 0.537,1);thom++; flagColor = true;
								}
								if(intensity>=50 && intensity<63 ){
									colors.push(1, 0.270, 0,1);
									colors.push(1, 0.270, 0,1);thom++; flagColor = true;
								}
								if(intensity>=63 && intensity<76 ){
									colors.push(0.803, 0.4, 0,1);
									colors.push(0.803, 0.4, 0,1);thom++; flagColor = true;
								}
								if(intensity>=76 && intensity<89 ){
									colors.push(1, 0.549, 0,1);
									colors.push(1, 0.549, 0,1);thom++; flagColor = true;
								}
								if(intensity>=89 && intensity<101 ){
									colors.push(0.933, 0.850, 0.447,1);
									colors.push(0.933, 0.850, 0.447,1);thom++; flagColor = true; ja++;
								}
								if(intensity>=101 && intensity<114 ){
									colors.push(1,1,0,1);
									colors.push(1,1,0,1);thom++; flagColor = true;
								}
								if(intensity>=114 && intensity<127 ){
									colors.push(0.078, 1, 0,1);
									colors.push(0.078, 1, 0,1);thom++; flagColor = true;
								}
								if(intensity>=127 && intensity<139 ){
									colors.push(0.756, 1, 0.756,1);
									colors.push(0.756, 1, 0.756,1);thom++; flagColor = true;
								}
								if(intensity>=139 && intensity<152 ){
									colors.push(0.690, 0.878, 0.901,1);
									colors.push(0.690, 0.878, 0.901,1);thom++; flagColor = true;

								}
								if(intensity>=152 && intensity<164 ){
									colors.push(0.254, 0.411, 0.882,1);
									colors.push(0.254, 0.411, 0.882,1);thom++; flagColor = true;
								} 
								if(intensity>=164 && intensity<177 ){
									colors.push(0,0,1,1);
									colors.push(0,0,1,1);thom++; flagColor = true;
								}
								if(intensity>=177 && intensity<190 ){
									colors.push(0.517, 0.439, 1,1);
									colors.push(0.517, 0.439, 1,1);thom++; flagColor = true;
								}
								if(intensity>=190 && intensity<202 ){
									colors.push(0.482, 0.407, 0.933,1);
									colors.push(0.482, 0.407, 0.933,1);thom++; flagColor = true;
								}
								if(intensity>=202 && intensity<215 ){
									colors.push(0.415, 0.352, 0.803,1);
									colors.push(0.415, 0.352, 0.803,1);thom++; flagColor = true;
								}
								if(intensity>=215 && intensity<228 ){
									colors.push(0, 0, 0.501,1);
									colors.push(0, 0, 0.501,1);thom++; flagColor = true;
								}
								if(intensity>=228 && intensity<240 ){
									colors.push(0.098, 0.098, 0.439,1);
									colors.push(0.098, 0.098, 0.439,1);thom++; flagColor = true;
								}
								if(intensity>=240){
									colors.push(0, 0, 0, 1);
									colors.push(0, 0, 0, 1);thom++; flagColor = true;
								}
								if(flagColor == false){
									colors.push(0, 0, 0, 1);
									colors.push(0, 0, 0, 1);thom++;
								}
								ty++;
							}
							
							map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
						}
					
												
						//var quaternion = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI);
						//map.rotationQuaternion = quaternion;
						
						chkBox.onchange = function() {
							
							if (chkBox.checked){
								mapMaterial.wireframe = true;						
							}else{								
								mapMaterial.wireframe = false;
							}					
							map.material = mapMaterial;	
						}	

	
					}else{ //if not 2d

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
							
								y = rangeFe[dataI];
								

								mapData[3 *(l * mapSubX + w)] = x;
								mapData[3 * (l * mapSubX + w) + 1] = y;
								mapData[3 * (l * mapSubX + w) + 2] = z;
								
								path.push(new BABYLON.Vector3(x, y, z));
								dataI++;
							}
							paths.push(path);
						}
						
						//console.log(rangeFe);
				
						var map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
						map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
						map.position.y = 0;
						var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
						
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
							var flagColor = false;
							var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
							console.log(positions.length);
							for(var p = 0; p < ((positions.length / 3)/2 ); p++) {
								flagColor = false;
								var intensity = itensityFe[p];
								if(intensity<13 ){
									colors.push(1, 0.894, 0.870, 1);
									colors.push(1, 0.894, 0.870, 1);thom++; flagColor = true;
								}
								if(intensity>=13 && intensity<25 ){
									colors.push(1, 0.713, 0.756, 1);
									colors.push(1, 0.713, 0.756, 1);thom++; flagColor = true;
								}
								if(intensity>=25 && intensity<38){
									colors.push(1, 0.431, 0.705,1);
									colors.push(1, 0.431, 0.705,1);thom++; flagColor = true;
								}
								if(intensity>=38 && intensity<50 ){
									colors.push(0.933, 0.070, 0.537,1);
									colors.push(0.933, 0.070, 0.537,1);thom++; flagColor = true;
								}
								if(intensity>=50 && intensity<63 ){
									colors.push(1, 0.270, 0,1);
									colors.push(1, 0.270, 0,1);thom++; flagColor = true;
								}
								if(intensity>=63 && intensity<76 ){
									colors.push(0.803, 0.4, 0,1);
									colors.push(0.803, 0.4, 0,1);thom++; flagColor = true;
								}
								if(intensity>=76 && intensity<89 ){
									colors.push(1, 0.549, 0,1);
									colors.push(1, 0.549, 0,1);thom++; flagColor = true;
								}
								if(intensity>=89 && intensity<101 ){
									colors.push(0.933, 0.850, 0.447,1);
									colors.push(0.933, 0.850, 0.447,1);thom++; flagColor = true; ja++;
								}
								if(intensity>=101 && intensity<114 ){
									colors.push(1,1,0,1);
									colors.push(1,1,0,1);thom++; flagColor = true;
								}
								if(intensity>=114 && intensity<127 ){
									colors.push(0.078, 1, 0,1);
									colors.push(0.078, 1, 0,1);thom++; flagColor = true;
								}
								if(intensity>=127 && intensity<139 ){
									colors.push(0.756, 1, 0.756,1);
									colors.push(0.756, 1, 0.756,1);thom++; flagColor = true;
								}
								if(intensity>=139 && intensity<152 ){
									colors.push(0.690, 0.878, 0.901,1);
									colors.push(0.690, 0.878, 0.901,1);thom++; flagColor = true;

								}
								if(intensity>=152 && intensity<164 ){
									colors.push(0.254, 0.411, 0.882,1);
									colors.push(0.254, 0.411, 0.882,1);thom++; flagColor = true;
								} 
								if(intensity>=164 && intensity<177 ){
									colors.push(0,0,1,1);
									colors.push(0,0,1,1);thom++; flagColor = true;
								}
								if(intensity>=177 && intensity<190 ){
									colors.push(0.517, 0.439, 1,1);
									colors.push(0.517, 0.439, 1,1);thom++; flagColor = true;
								}
								if(intensity>=190 && intensity<202 ){
									colors.push(0.482, 0.407, 0.933,1);
									colors.push(0.482, 0.407, 0.933,1);thom++; flagColor = true;
								}
								if(intensity>=202 && intensity<215 ){
									colors.push(0.415, 0.352, 0.803,1);
									colors.push(0.415, 0.352, 0.803,1);thom++; flagColor = true;
								}
								if(intensity>=215 && intensity<228 ){
									colors.push(0, 0, 0.501,1);
									colors.push(0, 0, 0.501,1);thom++; flagColor = true;
								}
								if(intensity>=228 && intensity<240 ){
									colors.push(0.098, 0.098, 0.439,1);
									colors.push(0.098, 0.098, 0.439,1);thom++; flagColor = true;
								}
								if(intensity>=240){
									colors.push(0, 0, 0, 1);
									colors.push(0, 0, 0, 1);thom++; flagColor = true;
								}
								if(flagColor == false){
									colors.push(0, 0, 0, 1);
									colors.push(0, 0, 0, 1);thom++;
								}
								ty++;
							}
							
							map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
						}
					
						
						//var quaternion = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI);
						//map.rotationQuaternion = quaternion;
						
						chkBox.onchange = function() {
						if (chkBox.checked){							
							mapMaterial.wireframe = true;						
						}else{						
							mapMaterial.wireframe = false;
						}					
						map.material = mapMaterial;
						}	

						chkBoxRange.onchange = function () {
							console.log("cambie");
						}
						chkBoxIntensity.onchange = function () {
							console.log("cambie");
						}

				}


						chkBox2d.onchange = function() {
							
							if(flag2d){								
								map.dispose();
																
								var paths = [];
								flag2d=false;
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
									
										y = rangeFe[dataI];
										//console.log(y);

										mapData[3 *(l * mapSubX + w)] = x;
										mapData[3 * (l * mapSubX + w) + 1] = y;
										mapData[3 * (l * mapSubX + w) + 2] = z;
										
										path.push(new BABYLON.Vector3(x, y, z));
										dataI++;
									}
									paths.push(path);
								}
								
								console.log(paths);
						
								map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
								map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
								map.position.y = 0;
								var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
								
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
									var flagColor = false;
									var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
									console.log(positions.length);
									for(var p = 0; p < ((positions.length / 3)/2 ); p++) {
										flagColor = false;
										var intensity = itensityFe[p];
										if(intensity<13 ){
											colors.push(1, 0.894, 0.870, 1);
											colors.push(1, 0.894, 0.870, 1);thom++; flagColor = true;
										}
										if(intensity>=13 && intensity<25 ){
											colors.push(1, 0.713, 0.756, 1);
											colors.push(1, 0.713, 0.756, 1);thom++; flagColor = true;
										}
										if(intensity>=25 && intensity<38){
											colors.push(1, 0.431, 0.705,1);
											colors.push(1, 0.431, 0.705,1);thom++; flagColor = true;
										}
										if(intensity>=38 && intensity<50 ){
											colors.push(0.933, 0.070, 0.537,1);
											colors.push(0.933, 0.070, 0.537,1);thom++; flagColor = true;
										}
										if(intensity>=50 && intensity<63 ){
											colors.push(1, 0.270, 0,1);
											colors.push(1, 0.270, 0,1);thom++; flagColor = true;
										}
										if(intensity>=63 && intensity<76 ){
											colors.push(0.803, 0.4, 0,1);
											colors.push(0.803, 0.4, 0,1);thom++; flagColor = true;
										}
										if(intensity>=76 && intensity<89 ){
											colors.push(1, 0.549, 0,1);
											colors.push(1, 0.549, 0,1);thom++; flagColor = true;
										}
										if(intensity>=89 && intensity<101 ){
											colors.push(0.933, 0.850, 0.447,1);
											colors.push(0.933, 0.850, 0.447,1);thom++; flagColor = true; ja++;
										}
										if(intensity>=101 && intensity<114 ){
											colors.push(1,1,0,1);
											colors.push(1,1,0,1);thom++; flagColor = true;
										}
										if(intensity>=114 && intensity<127 ){
											colors.push(0.078, 1, 0,1);
											colors.push(0.078, 1, 0,1);thom++; flagColor = true;
										}
										if(intensity>=127 && intensity<139 ){
											colors.push(0.756, 1, 0.756,1);
											colors.push(0.756, 1, 0.756,1);thom++; flagColor = true;
										}
										if(intensity>=139 && intensity<152 ){
											colors.push(0.690, 0.878, 0.901,1);
											colors.push(0.690, 0.878, 0.901,1);thom++; flagColor = true;

										}
										if(intensity>=152 && intensity<164 ){
											colors.push(0.254, 0.411, 0.882,1);
											colors.push(0.254, 0.411, 0.882,1);thom++; flagColor = true;
										} 
										if(intensity>=164 && intensity<177 ){
											colors.push(0,0,1,1);
											colors.push(0,0,1,1);thom++; flagColor = true;
										}
										if(intensity>=177 && intensity<190 ){
											colors.push(0.517, 0.439, 1,1);
											colors.push(0.517, 0.439, 1,1);thom++; flagColor = true;
										}
										if(intensity>=190 && intensity<202 ){
											colors.push(0.482, 0.407, 0.933,1);
											colors.push(0.482, 0.407, 0.933,1);thom++; flagColor = true;
										}
										if(intensity>=202 && intensity<215 ){
											colors.push(0.415, 0.352, 0.803,1);
											colors.push(0.415, 0.352, 0.803,1);thom++; flagColor = true;
										}
										if(intensity>=215 && intensity<228 ){
											colors.push(0, 0, 0.501,1);
											colors.push(0, 0, 0.501,1);thom++; flagColor = true;
										}
										if(intensity>=228 && intensity<240 ){
											colors.push(0.098, 0.098, 0.439,1);
											colors.push(0.098, 0.098, 0.439,1);thom++; flagColor = true;
										}
										if(intensity>=240){
											colors.push(0, 0, 0, 1);
											colors.push(0, 0, 0, 1);thom++; flagColor = true;
										}
										if(flagColor == false){
											colors.push(0, 0, 0, 1);
											colors.push(0, 0, 0, 1);thom++;
										}
										ty++;
									}
									
									map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
								}
							
								
								//var quaternion = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI);
								//map.rotationQuaternion = quaternion;
								
								chkBox.onchange = function() {
								if (chkBox.checked){							
									mapMaterial.wireframe = true;						
								}else{						
									mapMaterial.wireframe = false;
								}					
								map.material = mapMaterial;
								}	

								chkBoxRange.onchange = function () {
									console.log("cambie");
								}
								chkBoxIntensity.onchange = function () {
									console.log("cambie");
								}
								document.getElementById("RanorInt").style.display = "none";
				
								
							}else{
								map.dispose();
								
								var paths = [];
								flag2d=true;
								
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
								map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
								map.position.y = 0;
								var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
								
								//mapMaterial.wireframe = true;
										
								map.material = mapMaterial;
								
								//light.excludedMeshes.push(map);

								var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
								
								


								var colors = map.getVerticesData(BABYLON.VertexBuffer.ColorKind);
								if(!colors) {
									
									colors = [];
									var thom =0 ;
									var ty = 0;
									var ja = 0;
									var flagColor = false;
									var positions = map.getVerticesData(BABYLON.VertexBuffer.PositionKind);
									//console.log(itensityFe);
									var intensity; 
									for(var p = 0; p < ((positions.length / 3)/2 ); p++) {
										flagColor = false;
										intensity = itensityFe[p];
										if(intensity<13 ){
											colors.push(1, 0.894, 0.870, 1);
											colors.push(1, 0.894, 0.870, 1);thom++; flagColor = true;
										}
										if(intensity>=13 && intensity<25 ){
											colors.push(1, 0.713, 0.756, 1);
											colors.push(1, 0.713, 0.756, 1);thom++; flagColor = true;
										}
										if(intensity>=25 && intensity<38){
											colors.push(1, 0.431, 0.705,1);
											colors.push(1, 0.431, 0.705,1);thom++; flagColor = true;
										}
										if(intensity>=38 && intensity<50 ){
											colors.push(0.933, 0.070, 0.537,1);
											colors.push(0.933, 0.070, 0.537,1);thom++; flagColor = true;
										}
										if(intensity>=50 && intensity<63 ){
											colors.push(1, 0.270, 0,1);
											colors.push(1, 0.270, 0,1);thom++; flagColor = true;
										}
										if(intensity>=63 && intensity<76 ){
											colors.push(0.803, 0.4, 0,1);
											colors.push(0.803, 0.4, 0,1);thom++; flagColor = true;
										}
										if(intensity>=76 && intensity<89 ){
											colors.push(1, 0.549, 0,1);
											colors.push(1, 0.549, 0,1);thom++; flagColor = true;
										}
										if(intensity>=89 && intensity<101 ){
											colors.push(0.933, 0.850, 0.447,1);
											colors.push(0.933, 0.850, 0.447,1);thom++; flagColor = true; ja++;
										}
										if(intensity>=101 && intensity<114 ){
											colors.push(1,1,0,1);
											colors.push(1,1,0,1);thom++; flagColor = true;
										}
										if(intensity>=114 && intensity<127 ){
											colors.push(0.078, 1, 0,1);
											colors.push(0.078, 1, 0,1);thom++; flagColor = true;
										}
										if(intensity>=127 && intensity<139 ){
											colors.push(0.756, 1, 0.756,1);
											colors.push(0.756, 1, 0.756,1);thom++; flagColor = true;
										}
										if(intensity>=139 && intensity<152 ){
											colors.push(0.690, 0.878, 0.901,1);
											colors.push(0.690, 0.878, 0.901,1);thom++; flagColor = true;

										}
										if(intensity>=152 && intensity<164 ){
											colors.push(0.254, 0.411, 0.882,1);
											colors.push(0.254, 0.411, 0.882,1);thom++; flagColor = true;
										} 
										if(intensity>=164 && intensity<177 ){
											colors.push(0,0,1,1);
											colors.push(0,0,1,1);thom++; flagColor = true;
										}
										if(intensity>=177 && intensity<190 ){
											colors.push(0.517, 0.439, 1,1);
											colors.push(0.517, 0.439, 1,1);thom++; flagColor = true;
										}
										if(intensity>=190 && intensity<202 ){
											colors.push(0.482, 0.407, 0.933,1);
											colors.push(0.482, 0.407, 0.933,1);thom++; flagColor = true;
										}
										if(intensity>=202 && intensity<215 ){
											colors.push(0.415, 0.352, 0.803,1);
											colors.push(0.415, 0.352, 0.803,1);thom++; flagColor = true;
										}
										if(intensity>=215 && intensity<228 ){
											colors.push(0, 0, 0.501,1);
											colors.push(0, 0, 0.501,1);thom++; flagColor = true;
										}
										if(intensity>=228 && intensity<240 ){
											colors.push(0.098, 0.098, 0.439,1);
											colors.push(0.098, 0.098, 0.439,1);thom++; flagColor = true;
										}
										if(intensity>=240){
											colors.push(0, 0, 0, 1);
											colors.push(0, 0, 0, 1);thom++; flagColor = true;
										}
										if(flagColor == false){
											colors.push(0, 0, 0, 1);
											colors.push(0, 0, 0, 1);thom++;
										}
										ty++;
									}
									
									map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
								}
							
								document.getElementById("RanorInt").style.display = "inline";						
								//var quaternion = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI);
								//map.rotationQuaternion = quaternion;
								
								chkBox.onchange = function() {
									
									if (chkBox.checked){
										mapMaterial.wireframe = true;						
									}else{								
										mapMaterial.wireframe = false;
									}					
									map.material = mapMaterial;	
								}	
							}
						}


					var mapColor ={}; //object for multiple key presses
					scene.actionManager = new BABYLON.ActionManager(scene);
   
					scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
						mapColor[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
		  
				  }));
	  
					scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
						mapColor[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
				  }));	
				  
				  
				  scene.registerAfterRender(function() {	
					  //console.log("estoy aqui ");
			  
					  if(mapColor["d"] || mapColor["D"]) {
						  t=t+5;
						//console.log(camera.position);
						camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
						camera.setPosition(new BABYLON.Vector3(camera.position.x+5, camera.position.y, camera.position.z)); 

					  }


					  if(mapColor["a"] || mapColor["A"]) {
						t=t-5;
					  //console.log(camera.position);
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x-5, camera.position.y, camera.position.z)); 
				  
						
					}

					if(mapColor["e"] || mapColor["E"]) {
						t=t+25;
					  //console.log(camera.position);					  
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x+25, camera.position.y, camera.position.z)); 
				  	
					}

					if(mapColor["q"] || mapColor["Q"]) {
					  t=t-25;
					//console.log(camera.position);
					camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					camera.setPosition(new BABYLON.Vector3(camera.position.x-25, camera.position.y, camera.position.z)); 
				
				  }
					  
				  });
				
					return scene;
				}
				
			
		
				var scene = createScene();
				engine.runRenderLoop(function(){
					scene.render();
				});
				
				document.getElementById("auxCheck").style.display = "inline";
				document.getElementById("backLoad").style.display = "none";
				if(chkBox2d.checked){
					document.getElementById("RanorInt").style.display = "inline";
				}
				



			});
		});
	}
}


componentDidMount(){ //se ejecuta al montar el componente
	console.log("se monto el componente");
	
}

	render(){
		return(
			<div>

				<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
				  <a className="navbar-brand" href="#">Navbar</a>
				  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
				    <span className="navbar-toggler-icon"></span>
				  </button>
				  <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
				    <div className="navbar-nav">
				      <a className="nav-item nav-link active" href="#">Home <span className="sr-only">(current)</span></a>
				      <a className="nav-item nav-link" href="#">Features</a>
				      <a className="nav-item nav-link" href="#">Pricing</a>
				      <a className="nav-item nav-link disabled" href="#">Disabled</a>
				    </div>
				  </div>
				</nav>
				
				<input type="file" id="inputUpload"  name="files[]" multiple/> 
				<div className="row">
					<button  id="Upload" type="button" className="btn btn-outline-primary" onClick={this.callApi}>Select File</button>
					
					<div className="switch row"  id="auxCheck">
					<h3 className="display-4" id="wire">Wireframe:</h3>
						<input type="checkbox" name="toggle" id="myCheck"></input>
						<label htmlFor="myCheck"><i></i></label>
						<span></span>
					</div>

					<div className="switch row"  id="auxCheck2">
					<h3 className="display-4" id="2d">2D:</h3>
						<input type="checkbox" name="toggle" id="myCheck2d"></input>
						<label htmlFor="myCheck2d"><i></i></label>
						<span></span>
					</div>

						<div id="RanorInt" className="switchRorI switch-blueRorI">
							<input type="radio" className="switch-inputRorI" name="view2" value="week2" id="range" checked></input>
							<label htmlFor="range" className="switch-labelRorI switch-label-offRorI">Range</label>
							<input type="radio" className="switch-inputRorI" name="view2" value="month2" id="intensity"></input>
							<label htmlFor="intensity" className="switch-labelRorI switch-label-onRorI">Intensity</label>
							<span className="switch-selectionRorI"></span>
						</div> 
					
					
				</div>
				<div id="backLoad">
					<div className="loader">
						<div className="inner one"></div>
						<div className="inner two"></div>
						<div className="inner three"></div>
						<p id="load">Loading...</p>
					</div>
				</div>	
				<canvas id="canvas" ></canvas>



				
		
	</div>
			)
	}
}

export default App;