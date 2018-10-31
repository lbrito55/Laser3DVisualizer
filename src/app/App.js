import React, { Component } from 'react';
class App extends Component{

selectFile(){
	
}

callApi(){
	
	var chkBox = document.getElementById('myCheck');	
	console.log("llamando a node");
	/*fetch('/api')
	.then(res => res.json())
	.then(data => console.log(data));
	*/
	document.getElementById("inputUpload").click();
	var UpdFile = document.getElementById('inputUpload');
	UpdFile.onchange = function() {
		
		document.getElementById("backLoad").style.display = "block"; //Loading

		var auxUrl = UpdFile.value.split("\\");
		var url = auxUrl[auxUrl.length-1];
		console.log("entre");
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
				
				chkBox.onchange = function() { //if check box is changed with file loaded
				
					
				var canvas = document.getElementById('canvas');
		
				var engine = new BABYLON.Engine(canvas, true);
				var createScene = function() {
					var scene = new BABYLON.Scene(engine);
					//var camera = new BABYLON.ArcRotateCamera("camera1",  0, 0, 0, BABYLON.Vector3.Zero(), scene);
					//var camera = new BABYLON.FlyCamera("camera1", new BABYLON.Vector3(0, 5, -10), scene);
					var camera = new BABYLON.ArcRotateCamera("Camera", 60, 0, 10, new BABYLON.Vector3(60, 0, 0), scene);

					// Positions the camera overwriting alpha, beta, radius
						camera.setPosition(new BABYLON.Vector3(60, 4, -100));
					
					// This attaches the camera to the canvas
						camera.attachControl(canvas, true);
					var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
					light.intensity = 0.75;
					light.specular = BABYLON.Color3.Black();
				
				
					// Map data creation
					// The map is a flat array of successive 3D coordinates (x, y, z).
					// It's defined by a number of points on its width : mapSubX
					// and a number of points on its height : mapSubZ
					
					var mapSubX = rangeFe.length/30;           // point number on X axis
					var mapSubZ = 30;              // point number on Z axis
					var seed = 0.3;                 // seed
					var noiseScale = 0.03;         // noise frequency
					var elevationScale = 6.0;
					noise.seed(seed);
					var mapData = new Float32Array(mapSubX * mapSubZ * 3); // 3 float values per point : x, y and z
					var dataI = 0;
					var t = 0;
					var paths = [];       				                   // array for the ribbon model
					for (var l = 0; l < mapSubX; l++) {
						var path = [];                          // only for the ribbon
						for (var w = 0; w < mapSubZ; w++) {
							var z =w;
							var x = l;
							//var y = noise.simplex2(x * noiseScale, z * noiseScale);
							//y *= (0.5 + y) * y * elevationScale;   // let's increase a bit the noise computed altitude
							var y = rangeFe[dataI];
							
							mapData[3 *(l * mapSubX + w)] = x;
							mapData[3 * (l * mapSubX + w) + 1] = y;
							mapData[3 * (l * mapSubX + w) + 2] = z;
							
							path.push(new BABYLON.Vector3(x, y, z));
							dataI++;
						}
						paths.push(path);
					}
					
					var map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
					map.position.y = -1.0;
					var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
					if (chkBox.checked)
					{
						console.log("aqui");
						mapMaterial.wireframe = true;						
					}else{
						
						mapMaterial.wireframe = false;
						console.log("lo quite");
					}					
					map.material = mapMaterial;


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
							if(itensityFe[p]<13 ){
								colors.push(255,255,255, 1);
								colors.push(255,255,255, 1); thom++; flagColor = true;
							}
							if(itensityFe[p]>=13 && itensityFe[p]<25 ){
								colors.push(255,228,222, 1);
								colors.push(255,228,222, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=25 && itensityFe[p]<38){
								colors.push(255,182,193, 1);
								colors.push(255,182,193, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=38 && itensityFe[p]<50 ){
								colors.push(255,110,180, 1);
								colors.push(255,110,180, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=50 && itensityFe[p]<63 ){
								colors.push(238,18,137, 1);
								colors.push(238,18,137, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=63 && itensityFe[p]<76 ){
								colors.push(255,69,0, 1);
								colors.push(255,69,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=76 && itensityFe[p]<89 ){
								colors.push(205,102,0, 1);
								colors.push(205,102,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=89 && itensityFe[p]<101 ){
								colors.push(255,140,0, 1);
								colors.push(255,140,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=101 && itensityFe[p]<114 ){
								colors.push(0,0,0, 1);
								colors.push(0,0,0, 1);thom++; flagColor = true; ja++;
							}
							if(itensityFe[p]>=114 && itensityFe[p]<127 ){
								colors.push(255,255,0, 1);
								colors.push(255,255,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=127 && itensityFe[p]<139 ){
								colors.push(20,255,0, 1);
								colors.push(20,255,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=139 && itensityFe[p]<152 ){
								colors.push(193,255,193, 1);
								colors.push(193,255,193, 1);thom++; flagColor = true;

							}
							if(itensityFe[p]>=152 && itensityFe[p]<164 ){
								colors.push(176,224,230, 1);
								colors.push(176,224,230, 1);thom++; flagColor = true;
							} 
							if(itensityFe[p]>=164 && itensityFe[p]<177 ){
								colors.push(65,105,225, 1);
								colors.push(65,105,225, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=177 && itensityFe[p]<190 ){
								colors.push(0,0,255, 1);
								colors.push(0,0,255, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=190 && itensityFe[p]<202 ){
								colors.push(132,112,255, 1);
								colors.push(132,112,255, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=202 && itensityFe[p]<215 ){
								colors.push(123,104,238, 1);
								colors.push(123,104,238, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=215 && itensityFe[p]<228 ){
								colors.push(106,90,205, 1);
								colors.push(106,90,205, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=228 && itensityFe[p]<240 ){
								colors.push(0,0,128, 1);
								colors.push(0,0,128, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=240 && itensityFe[p]<253){
								colors.push(25,25,112, 1);
								colors.push(25,25,112, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=253){
								colors.push(0, 0, 0, 1);
								colors.push(0, 0, 0, 1);thom++; flagColor = true;
							}
							if(flagColor == false){
								colors.push(0, 0, 0, 1);
								colors.push(0, 0, 0, 1);thom++;
							}
							ty++;
						}
						console.log(ja);
						map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
					}
				 
					
					
				
					
					var map ={}; //object for multiple key presses
					scene.actionManager = new BABYLON.ActionManager(scene);
   
					scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
				  map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
		  
				  }));
	  
					scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
				  map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
				  }));	
				  
				  
				  scene.registerAfterRender(function() {	
					  //console.log("estoy aqui ");
			  
					  if(map["d"] || map["D"]) {
						  t=t+5;
						//console.log(camera.position);
						camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
						camera.setPosition(new BABYLON.Vector3(camera.position.x+5, camera.position.y, camera.position.z)); 
					
						  console.log("soy d");
						  
					  }

					  if(map["a"] || map["A"]) {
						t=t-5;
					  //console.log(camera.position);
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x-5, camera.position.y, camera.position.z)); 
				  
						console.log("soy a");
						
					}

					
					if(map["e"] || map["E"]) {
						t=t+25;
					  //console.log(camera.position);
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x+25, camera.position.y, camera.position.z)); 
				  
						console.log("soy e");
						
					}

					if(map["q"] || map["Q"]) {
					  t=t-25;
					//console.log(camera.position);
					camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					camera.setPosition(new BABYLON.Vector3(camera.position.x-25, camera.position.y, camera.position.z)); 
				
					  console.log("soy q");
					  
				  }
					  
				  });


					return scene;
				}
				

				
				
				
				// ******************
				// Noise Library : https://github.com/josephg/noisejs/blob/master/perlin.js
				var noise;
				(function (global) {
					var module =  noise = {};
				
					function Grad(x, y, z) {
						this.x = x; this.y = y; this.z = z;
					}
				
					Grad.prototype.dot2 = function (x, y) {
						return this.x * x + this.y * y;
					};
				
					Grad.prototype.dot3 = function (x, y, z) {
						return this.x * x + this.y * y + this.z * z;
					};
				
					var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
								new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
								new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
				
					var p = [151, 160, 137, 91, 90, 15,
					131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
					190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
					88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
					77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
					102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
					135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
					5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
					223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
					129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
					251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
					49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
					138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
					// To remove the need for index wrapping, double the permutation table length
					var perm = new Array(512);
					var gradP = new Array(512);
				
					// This isn't a very good seeding function, but it works ok. It supports 2^16
					// different seed values. Write something better if you need more seeds.
					module.seed = function (seed) {
						if (seed > 0 && seed < 1) {
							// Scale the seed out
							seed *= 65536;
						}
				
						seed = Math.floor(seed);
						if (seed < 256) {
							seed |= seed << 8;
						}
				
						for (var i = 0; i < 256; i++) {
							var v;
							if (i & 1) {
								v = p[i] ^ (seed & 255);
							} else {
								v = p[i] ^ ((seed >> 8) & 255);
							}
				
							perm[i] = perm[i + 256] = v;
							gradP[i] = gradP[i + 256] = grad3[v % 12];
						}
					};
				
					module.seed(0);
				
					/*
					for(var i=0; i<256; i++) {
					perm[i] = perm[i + 256] = p[i];
					gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
					}*/
				
					// Skewing and unskewing factors for 2, 3, and 4 dimensions
					var F2 = 0.5 * (Math.sqrt(3) - 1);
					var G2 = (3 - Math.sqrt(3)) / 6;
				
					var F3 = 1 / 3;
					var G3 = 1 / 6;
				
					// 2D simplex noise
					module.simplex2 = function (xin, yin) {
						var n0, n1, n2; // Noise contributions from the three corners
						// Skew the input space to determine which simplex cell we're in
						var s = (xin + yin) * F2; // Hairy factor for 2D
						var i = Math.floor(xin + s);
						var j = Math.floor(yin + s);
						var t = (i + j) * G2;
						var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
						var y0 = yin - j + t;
						// For the 2D case, the simplex shape is an equilateral triangle.
						// Determine which simplex we are in.
						var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
						if (x0 > y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
							i1 = 1; j1 = 0;
						} else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
							i1 = 0; j1 = 1;
						}
						// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
						// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
						// c = (3-sqrt(3))/6
						var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
						var y1 = y0 - j1 + G2;
						var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
						var y2 = y0 - 1 + 2 * G2;
						// Work out the hashed gradient indices of the three simplex corners
						i &= 255;
						j &= 255;
						var gi0 = gradP[i + perm[j]];
						var gi1 = gradP[i + i1 + perm[j + j1]];
						var gi2 = gradP[i + 1 + perm[j + 1]];
						// Calculate the contribution from the three corners
						var t0 = 0.5 - x0 * x0 - y0 * y0;
						if (t0 < 0) {
							n0 = 0;
						} else {
							t0 *= t0;
							n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
						}
						var t1 = 0.5 - x1 * x1 - y1 * y1;
						if (t1 < 0) {
							n1 = 0;
						} else {
							t1 *= t1;
							n1 = t1 * t1 * gi1.dot2(x1, y1);
						}
						var t2 = 0.5 - x2 * x2 - y2 * y2;
						if (t2 < 0) {
							n2 = 0;
						} else {
							t2 *= t2;
							n2 = t2 * t2 * gi2.dot2(x2, y2);
						}
						// Add contributions from each corner to get the final noise value.
						// The result is scaled to return values in the interval [-1,1].
						return 70 * (n0 + n1 + n2);
					};
				
					// 3D simplex noise
					module.simplex3 = function (xin, yin, zin) {
						var n0, n1, n2, n3; // Noise contributions from the four corners
				
						// Skew the input space to determine which simplex cell we're in
						var s = (xin + yin + zin) * F3; // Hairy factor for 2D
						var i = Math.floor(xin + s);
						var j = Math.floor(yin + s);
						var k = Math.floor(zin + s);
				
						var t = (i + j + k) * G3;
						var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
						var y0 = yin - j + t;
						var z0 = zin - k + t;
				
						// For the 3D case, the simplex shape is a slightly irregular tetrahedron.
						// Determine which simplex we are in.
						var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
						var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
						if (x0 >= y0) {
							if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
							else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
							else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
						} else {
							if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
							else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
							else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
						}
						// A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
						// a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
						// a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
						// c = 1/6.
						var x1 = x0 - i1 + G3; // Offsets for second corner
						var y1 = y0 - j1 + G3;
						var z1 = z0 - k1 + G3;
				
						var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
						var y2 = y0 - j2 + 2 * G3;
						var z2 = z0 - k2 + 2 * G3;
				
						var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
						var y3 = y0 - 1 + 3 * G3;
						var z3 = z0 - 1 + 3 * G3;
				
						// Work out the hashed gradient indices of the four simplex corners
						i &= 255;
						j &= 255;
						k &= 255;
						var gi0 = gradP[i + perm[j + perm[k]]];
						var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
						var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
						var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];
				
						// Calculate the contribution from the four corners
						var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
						if (t0 < 0) {
							n0 = 0;
						} else {
							t0 *= t0;
							n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
						}
						var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
						if (t1 < 0) {
							n1 = 0;
						} else {
							t1 *= t1;
							n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
						}
						var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
						if (t2 < 0) {
							n2 = 0;
						} else {
							t2 *= t2;
							n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
						}
						var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
						if (t3 < 0) {
							n3 = 0;
						} else {
							t3 *= t3;
							n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
						}
						// Add contributions from each corner to get the final noise value.
						// The result is scaled to return values in the interval [-1,1].
						return 32 * (n0 + n1 + n2 + n3);
				
					};
				
					// ##### Perlin noise stuff
				
					function fade(t) {
						return t * t * t * (t * (t * 6 - 15) + 10);
					}
				
					function lerp(a, b, t) {
						return (1 - t) * a + t * b;
					}
				
					// 2D Perlin Noise
					module.perlin2 = function (x, y) {
						// Find unit grid cell containing point
						var X = Math.floor(x), Y = Math.floor(y);
						// Get relative xy coordinates of point within that cell
						x = x - X; y = y - Y;
						// Wrap the integer cells at 255 (smaller integer period can be introduced here)
						X = X & 255; Y = Y & 255;
				
						// Calculate noise contributions from each of the four corners
						var n00 = gradP[X + perm[Y]].dot2(x, y);
						var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
						var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
						var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
				
						// Compute the fade curve value for x
						var u = fade(x);
				
						// Interpolate the four results
						return lerp(
							lerp(n00, n10, u),
							lerp(n01, n11, u),
						fade(y));
					};
				
					// 3D Perlin Noise
					module.perlin3 = function (x, y, z) {
						// Find unit grid cell containing point
						var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
						// Get relative xyz coordinates of point within that cell
						x = x - X; y = y - Y; z = z - Z;
						// Wrap the integer cells at 255 (smaller integer period can be introduced here)
						X = X & 255; Y = Y & 255; Z = Z & 255;
				
						// Calculate noise contributions from each of the eight corners
						var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
						var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
						var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
						var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
						var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
						var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
						var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
						var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
				
						// Compute the fade curve value for x, y, z
						var u = fade(x);
						var v = fade(y);
						var w = fade(z);
				
						// Interpolate
						return lerp(
							lerp(
							lerp(n000, n100, u),
							lerp(n001, n101, u), w),
							lerp(
							lerp(n010, n110, u),
							lerp(n011, n111, u), w),
						v);
					};
				
				})(this); 
		
				var scene = createScene();
				engine.runRenderLoop(function(){
					scene.render();
				});
				
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
						camera.setPosition(new BABYLON.Vector3(60, -50, -100));
					
					// This attaches the camera to the canvas
						camera.attachControl(canvas, true);
					var light = new BABYLON.HemisphericLight("light1", new BABYLON.Vector3(0.0, 1.0, 0.0), scene);
					light.intensity = 0.75;
					light.specular = BABYLON.Color3.Black();
				
				
					// Map data creation
					// The map is a flat array of successive 3D coordinates (x, y, z).
					// It's defined by a number of points on its width : mapSubX
					// and a number of points on its height : mapSubZ
					
					var mapSubX = rangeFe.length/30;           // point number on X axis
					var mapSubZ = 30;              // point number on Z axis
					var seed = 0.3;                 // seed
					var noiseScale = 0.03;         // noise frequency
					var elevationScale = 6.0;
					noise.seed(seed);
					var mapData = new Float32Array(mapSubX * mapSubZ * 3); // 3 float values per point : x, y and z
					var dataI = 0;
					var t = 0;
					var paths = [];       				                   // array for the ribbon model
					for (var l = 0; l < mapSubX; l++) {
						var path = [];                          // only for the ribbon
						for (var w = 0; w < mapSubZ; w++) {
							var z =w;
							var x = l;
							//var y = noise.simplex2(x * noiseScale, z * noiseScale);
							//y *= (0.5 + y) * y * elevationScale;   // let's increase a bit the noise computed altitude
							var y = rangeFe[dataI];
							
							mapData[3 *(l * mapSubX + w)] = x;
							mapData[3 * (l * mapSubX + w) + 1] = y;
							mapData[3 * (l * mapSubX + w) + 2] = z;
							
							path.push(new BABYLON.Vector3(x, y, z));
							dataI++;
						}
						paths.push(path);
					}
					
					console.log(rangeFe);
			
					var map = BABYLON.MeshBuilder.CreateRibbon("m", {pathArray: paths, sideOrientation: 2}, scene);
					//map.rotate(BABYLON.Axis.X, Math.PI, BABYLON.Space.WORLD)
					map.position.y = -1.0;
					var mapMaterial = new BABYLON.StandardMaterial("mm", scene);
					
					//mapMaterial.wireframe = true;
							
					map.material = mapMaterial;
					;

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
							if(itensityFe[p]<13 ){
								colors.push(255,255,255, 1);
								colors.push(255,255,255, 1); thom++; flagColor = true;
							}
							if(itensityFe[p]>=13 && itensityFe[p]<25 ){
								colors.push(255,228,222, 1);
								colors.push(255,228,222, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=25 && itensityFe[p]<38){
								colors.push(255,182,193, 1);
								colors.push(255,182,193, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=38 && itensityFe[p]<50 ){
								colors.push(255,110,180, 1);
								colors.push(255,110,180, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=50 && itensityFe[p]<63 ){
								colors.push(238,18,137, 1);
								colors.push(238,18,137, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=63 && itensityFe[p]<76 ){
								colors.push(255,69,0, 1);
								colors.push(255,69,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=76 && itensityFe[p]<89 ){
								colors.push(205,102,0, 1);
								colors.push(205,102,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=89 && itensityFe[p]<101 ){
								colors.push(255,140,0, 1);
								colors.push(255,140,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=101 && itensityFe[p]<114 ){
								colors.push(0,0,0, 1);
								colors.push(0,0,0, 1);thom++; flagColor = true; ja++;
							}
							if(itensityFe[p]>=114 && itensityFe[p]<127 ){
								colors.push(255,255,0, 1);
								colors.push(255,255,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=127 && itensityFe[p]<139 ){
								colors.push(20,255,0, 1);
								colors.push(20,255,0, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=139 && itensityFe[p]<152 ){
								colors.push(193,255,193, 1);
								colors.push(193,255,193, 1);thom++; flagColor = true;

							}
							if(itensityFe[p]>=152 && itensityFe[p]<164 ){
								colors.push(176,224,230, 1);
								colors.push(176,224,230, 1);thom++; flagColor = true;
							} 
							if(itensityFe[p]>=164 && itensityFe[p]<177 ){
								colors.push(65,105,225, 1);
								colors.push(65,105,225, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=177 && itensityFe[p]<190 ){
								colors.push(0,0,255, 1);
								colors.push(0,0,255, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=190 && itensityFe[p]<202 ){
								colors.push(132,112,255, 1);
								colors.push(132,112,255, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=202 && itensityFe[p]<215 ){
								colors.push(123,104,238, 1);
								colors.push(123,104,238, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=215 && itensityFe[p]<228 ){
								colors.push(106,90,205, 1);
								colors.push(106,90,205, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=228 && itensityFe[p]<240 ){
								colors.push(0,0,128, 1);
								colors.push(0,0,128, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=240 && itensityFe[p]<253){
								colors.push(25,25,112, 1);
								colors.push(25,25,112, 1);thom++; flagColor = true;
							}
							if(itensityFe[p]>=253){
								colors.push(0, 0, 0, 1);
								colors.push(0, 0, 0, 1);thom++; flagColor = true;
							}
							if(flagColor == false){
								colors.push(0, 0, 0, 1);
								colors.push(0, 0, 0, 1);thom++;
							}
							ty++;
						}
						console.log(ja);
						map.setVerticesData(BABYLON.VertexBuffer.ColorKind, colors);
					}
				 
					
					//var quaternion = new BABYLON.Quaternion.RotationAxis(BABYLON.Axis.X, Math.PI);
					//map.rotationQuaternion = quaternion;
					



					var map ={}; //object for multiple key presses
					scene.actionManager = new BABYLON.ActionManager(scene);
   
					scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyDownTrigger, function (evt) {								
				  map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
		  
				  }));
	  
					scene.actionManager.registerAction(new BABYLON.ExecuteCodeAction(BABYLON.ActionManager.OnKeyUpTrigger, function (evt) {								
				  map[evt.sourceEvent.key] = evt.sourceEvent.type == "keydown";
				  }));	
				  
				  
				  scene.registerAfterRender(function() {	
					  //console.log("estoy aqui ");
			  
					  if(map["d"] || map["D"]) {
						  t=t+5;
						//console.log(camera.position);
						camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
						camera.setPosition(new BABYLON.Vector3(camera.position.x+5, camera.position.y, camera.position.z)); 
					
						  console.log("soy d");
						  
					  }

					  if(map["a"] || map["A"]) {
						t=t-5;
					  //console.log(camera.position);
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x-5, camera.position.y, camera.position.z)); 
				  
						console.log("soy a");
						
					}

					if(map["e"] || map["E"]) {
						t=t+25;
					  //console.log(camera.position);
					  camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					  camera.setPosition(new BABYLON.Vector3(camera.position.x+25, camera.position.y, camera.position.z)); 
				  
						console.log("soy e");
						
					}

					if(map["q"] || map["Q"]) {
					  t=t-25;
					//console.log(camera.position);
					camera.setTarget(new BABYLON.Vector3(t, 1.0, 0.0)); 
					camera.setPosition(new BABYLON.Vector3(camera.position.x-25, camera.position.y, camera.position.z)); 
				
					  console.log("soy q");
					  
				  }
					  
				  });
				
					return scene;
				}
				

				
				
				
				// ******************
				// Noise Library : https://github.com/josephg/noisejs/blob/master/perlin.js
				var noise;
				(function (global) {
					var module =  noise = {};
				
					function Grad(x, y, z) {
						this.x = x; this.y = y; this.z = z;
					}
				
					Grad.prototype.dot2 = function (x, y) {
						return this.x * x + this.y * y;
					};
				
					Grad.prototype.dot3 = function (x, y, z) {
						return this.x * x + this.y * y + this.z * z;
					};
				
					var grad3 = [new Grad(1, 1, 0), new Grad(-1, 1, 0), new Grad(1, -1, 0), new Grad(-1, -1, 0),
								new Grad(1, 0, 1), new Grad(-1, 0, 1), new Grad(1, 0, -1), new Grad(-1, 0, -1),
								new Grad(0, 1, 1), new Grad(0, -1, 1), new Grad(0, 1, -1), new Grad(0, -1, -1)];
				
					var p = [151, 160, 137, 91, 90, 15,
					131, 13, 201, 95, 96, 53, 194, 233, 7, 225, 140, 36, 103, 30, 69, 142, 8, 99, 37, 240, 21, 10, 23,
					190, 6, 148, 247, 120, 234, 75, 0, 26, 197, 62, 94, 252, 219, 203, 117, 35, 11, 32, 57, 177, 33,
					88, 237, 149, 56, 87, 174, 20, 125, 136, 171, 168, 68, 175, 74, 165, 71, 134, 139, 48, 27, 166,
					77, 146, 158, 231, 83, 111, 229, 122, 60, 211, 133, 230, 220, 105, 92, 41, 55, 46, 245, 40, 244,
					102, 143, 54, 65, 25, 63, 161, 1, 216, 80, 73, 209, 76, 132, 187, 208, 89, 18, 169, 200, 196,
					135, 130, 116, 188, 159, 86, 164, 100, 109, 198, 173, 186, 3, 64, 52, 217, 226, 250, 124, 123,
					5, 202, 38, 147, 118, 126, 255, 82, 85, 212, 207, 206, 59, 227, 47, 16, 58, 17, 182, 189, 28, 42,
					223, 183, 170, 213, 119, 248, 152, 2, 44, 154, 163, 70, 221, 153, 101, 155, 167, 43, 172, 9,
					129, 22, 39, 253, 19, 98, 108, 110, 79, 113, 224, 232, 178, 185, 112, 104, 218, 246, 97, 228,
					251, 34, 242, 193, 238, 210, 144, 12, 191, 179, 162, 241, 81, 51, 145, 235, 249, 14, 239, 107,
					49, 192, 214, 31, 181, 199, 106, 157, 184, 84, 204, 176, 115, 121, 50, 45, 127, 4, 150, 254,
					138, 236, 205, 93, 222, 114, 67, 29, 24, 72, 243, 141, 128, 195, 78, 66, 215, 61, 156, 180];
					// To remove the need for index wrapping, double the permutation table length
					var perm = new Array(512);
					var gradP = new Array(512);
				
					// This isn't a very good seeding function, but it works ok. It supports 2^16
					// different seed values. Write something better if you need more seeds.
					module.seed = function (seed) {
						if (seed > 0 && seed < 1) {
							// Scale the seed out
							seed *= 65536;
						}
				
						seed = Math.floor(seed);
						if (seed < 256) {
							seed |= seed << 8;
						}
				
						for (var i = 0; i < 256; i++) {
							var v;
							if (i & 1) {
								v = p[i] ^ (seed & 255);
							} else {
								v = p[i] ^ ((seed >> 8) & 255);
							}
				
							perm[i] = perm[i + 256] = v;
							gradP[i] = gradP[i + 256] = grad3[v % 12];
						}
					};
				
					module.seed(0);
				
					/*
					for(var i=0; i<256; i++) {
					perm[i] = perm[i + 256] = p[i];
					gradP[i] = gradP[i + 256] = grad3[perm[i] % 12];
					}*/
				
					// Skewing and unskewing factors for 2, 3, and 4 dimensions
					var F2 = 0.5 * (Math.sqrt(3) - 1);
					var G2 = (3 - Math.sqrt(3)) / 6;
				
					var F3 = 1 / 3;
					var G3 = 1 / 6;
				
					// 2D simplex noise
					module.simplex2 = function (xin, yin) {
						var n0, n1, n2; // Noise contributions from the three corners
						// Skew the input space to determine which simplex cell we're in
						var s = (xin + yin) * F2; // Hairy factor for 2D
						var i = Math.floor(xin + s);
						var j = Math.floor(yin + s);
						var t = (i + j) * G2;
						var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
						var y0 = yin - j + t;
						// For the 2D case, the simplex shape is an equilateral triangle.
						// Determine which simplex we are in.
						var i1, j1; // Offsets for second (middle) corner of simplex in (i,j) coords
						if (x0 > y0) { // lower triangle, XY order: (0,0)->(1,0)->(1,1)
							i1 = 1; j1 = 0;
						} else {    // upper triangle, YX order: (0,0)->(0,1)->(1,1)
							i1 = 0; j1 = 1;
						}
						// A step of (1,0) in (i,j) means a step of (1-c,-c) in (x,y), and
						// a step of (0,1) in (i,j) means a step of (-c,1-c) in (x,y), where
						// c = (3-sqrt(3))/6
						var x1 = x0 - i1 + G2; // Offsets for middle corner in (x,y) unskewed coords
						var y1 = y0 - j1 + G2;
						var x2 = x0 - 1 + 2 * G2; // Offsets for last corner in (x,y) unskewed coords
						var y2 = y0 - 1 + 2 * G2;
						// Work out the hashed gradient indices of the three simplex corners
						i &= 255;
						j &= 255;
						var gi0 = gradP[i + perm[j]];
						var gi1 = gradP[i + i1 + perm[j + j1]];
						var gi2 = gradP[i + 1 + perm[j + 1]];
						// Calculate the contribution from the three corners
						var t0 = 0.5 - x0 * x0 - y0 * y0;
						if (t0 < 0) {
							n0 = 0;
						} else {
							t0 *= t0;
							n0 = t0 * t0 * gi0.dot2(x0, y0);  // (x,y) of grad3 used for 2D gradient
						}
						var t1 = 0.5 - x1 * x1 - y1 * y1;
						if (t1 < 0) {
							n1 = 0;
						} else {
							t1 *= t1;
							n1 = t1 * t1 * gi1.dot2(x1, y1);
						}
						var t2 = 0.5 - x2 * x2 - y2 * y2;
						if (t2 < 0) {
							n2 = 0;
						} else {
							t2 *= t2;
							n2 = t2 * t2 * gi2.dot2(x2, y2);
						}
						// Add contributions from each corner to get the final noise value.
						// The result is scaled to return values in the interval [-1,1].
						return 70 * (n0 + n1 + n2);
					};
				
					// 3D simplex noise
					module.simplex3 = function (xin, yin, zin) {
						var n0, n1, n2, n3; // Noise contributions from the four corners
				
						// Skew the input space to determine which simplex cell we're in
						var s = (xin + yin + zin) * F3; // Hairy factor for 2D
						var i = Math.floor(xin + s);
						var j = Math.floor(yin + s);
						var k = Math.floor(zin + s);
				
						var t = (i + j + k) * G3;
						var x0 = xin - i + t; // The x,y distances from the cell origin, unskewed.
						var y0 = yin - j + t;
						var z0 = zin - k + t;
				
						// For the 3D case, the simplex shape is a slightly irregular tetrahedron.
						// Determine which simplex we are in.
						var i1, j1, k1; // Offsets for second corner of simplex in (i,j,k) coords
						var i2, j2, k2; // Offsets for third corner of simplex in (i,j,k) coords
						if (x0 >= y0) {
							if (y0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
							else if (x0 >= z0) { i1 = 1; j1 = 0; k1 = 0; i2 = 1; j2 = 0; k2 = 1; }
							else { i1 = 0; j1 = 0; k1 = 1; i2 = 1; j2 = 0; k2 = 1; }
						} else {
							if (y0 < z0) { i1 = 0; j1 = 0; k1 = 1; i2 = 0; j2 = 1; k2 = 1; }
							else if (x0 < z0) { i1 = 0; j1 = 1; k1 = 0; i2 = 0; j2 = 1; k2 = 1; }
							else { i1 = 0; j1 = 1; k1 = 0; i2 = 1; j2 = 1; k2 = 0; }
						}
						// A step of (1,0,0) in (i,j,k) means a step of (1-c,-c,-c) in (x,y,z),
						// a step of (0,1,0) in (i,j,k) means a step of (-c,1-c,-c) in (x,y,z), and
						// a step of (0,0,1) in (i,j,k) means a step of (-c,-c,1-c) in (x,y,z), where
						// c = 1/6.
						var x1 = x0 - i1 + G3; // Offsets for second corner
						var y1 = y0 - j1 + G3;
						var z1 = z0 - k1 + G3;
				
						var x2 = x0 - i2 + 2 * G3; // Offsets for third corner
						var y2 = y0 - j2 + 2 * G3;
						var z2 = z0 - k2 + 2 * G3;
				
						var x3 = x0 - 1 + 3 * G3; // Offsets for fourth corner
						var y3 = y0 - 1 + 3 * G3;
						var z3 = z0 - 1 + 3 * G3;
				
						// Work out the hashed gradient indices of the four simplex corners
						i &= 255;
						j &= 255;
						k &= 255;
						var gi0 = gradP[i + perm[j + perm[k]]];
						var gi1 = gradP[i + i1 + perm[j + j1 + perm[k + k1]]];
						var gi2 = gradP[i + i2 + perm[j + j2 + perm[k + k2]]];
						var gi3 = gradP[i + 1 + perm[j + 1 + perm[k + 1]]];
				
						// Calculate the contribution from the four corners
						var t0 = 0.6 - x0 * x0 - y0 * y0 - z0 * z0;
						if (t0 < 0) {
							n0 = 0;
						} else {
							t0 *= t0;
							n0 = t0 * t0 * gi0.dot3(x0, y0, z0);  // (x,y) of grad3 used for 2D gradient
						}
						var t1 = 0.6 - x1 * x1 - y1 * y1 - z1 * z1;
						if (t1 < 0) {
							n1 = 0;
						} else {
							t1 *= t1;
							n1 = t1 * t1 * gi1.dot3(x1, y1, z1);
						}
						var t2 = 0.6 - x2 * x2 - y2 * y2 - z2 * z2;
						if (t2 < 0) {
							n2 = 0;
						} else {
							t2 *= t2;
							n2 = t2 * t2 * gi2.dot3(x2, y2, z2);
						}
						var t3 = 0.6 - x3 * x3 - y3 * y3 - z3 * z3;
						if (t3 < 0) {
							n3 = 0;
						} else {
							t3 *= t3;
							n3 = t3 * t3 * gi3.dot3(x3, y3, z3);
						}
						// Add contributions from each corner to get the final noise value.
						// The result is scaled to return values in the interval [-1,1].
						return 32 * (n0 + n1 + n2 + n3);
				
					};
				
					// ##### Perlin noise stuff
				
					function fade(t) {
						return t * t * t * (t * (t * 6 - 15) + 10);
					}
				
					function lerp(a, b, t) {
						return (1 - t) * a + t * b;
					}
				
					// 2D Perlin Noise
					module.perlin2 = function (x, y) {
						// Find unit grid cell containing point
						var X = Math.floor(x), Y = Math.floor(y);
						// Get relative xy coordinates of point within that cell
						x = x - X; y = y - Y;
						// Wrap the integer cells at 255 (smaller integer period can be introduced here)
						X = X & 255; Y = Y & 255;
				
						// Calculate noise contributions from each of the four corners
						var n00 = gradP[X + perm[Y]].dot2(x, y);
						var n01 = gradP[X + perm[Y + 1]].dot2(x, y - 1);
						var n10 = gradP[X + 1 + perm[Y]].dot2(x - 1, y);
						var n11 = gradP[X + 1 + perm[Y + 1]].dot2(x - 1, y - 1);
				
						// Compute the fade curve value for x
						var u = fade(x);
				
						// Interpolate the four results
						return lerp(
							lerp(n00, n10, u),
							lerp(n01, n11, u),
						fade(y));
					};
				
					// 3D Perlin Noise
					module.perlin3 = function (x, y, z) {
						// Find unit grid cell containing point
						var X = Math.floor(x), Y = Math.floor(y), Z = Math.floor(z);
						// Get relative xyz coordinates of point within that cell
						x = x - X; y = y - Y; z = z - Z;
						// Wrap the integer cells at 255 (smaller integer period can be introduced here)
						X = X & 255; Y = Y & 255; Z = Z & 255;
				
						// Calculate noise contributions from each of the eight corners
						var n000 = gradP[X + perm[Y + perm[Z]]].dot3(x, y, z);
						var n001 = gradP[X + perm[Y + perm[Z + 1]]].dot3(x, y, z - 1);
						var n010 = gradP[X + perm[Y + 1 + perm[Z]]].dot3(x, y - 1, z);
						var n011 = gradP[X + perm[Y + 1 + perm[Z + 1]]].dot3(x, y - 1, z - 1);
						var n100 = gradP[X + 1 + perm[Y + perm[Z]]].dot3(x - 1, y, z);
						var n101 = gradP[X + 1 + perm[Y + perm[Z + 1]]].dot3(x - 1, y, z - 1);
						var n110 = gradP[X + 1 + perm[Y + 1 + perm[Z]]].dot3(x - 1, y - 1, z);
						var n111 = gradP[X + 1 + perm[Y + 1 + perm[Z + 1]]].dot3(x - 1, y - 1, z - 1);
				
						// Compute the fade curve value for x, y, z
						var u = fade(x);
						var v = fade(y);
						var w = fade(z);
				
						// Interpolate
						return lerp(
							lerp(
							lerp(n000, n100, u),
							lerp(n001, n101, u), w),
							lerp(
							lerp(n010, n110, u),
							lerp(n011, n111, u), w),
						v);
					};
				
				})(this); 
		
				var scene = createScene();
				engine.runRenderLoop(function(){
					scene.render();
				});
				
				document.getElementById("auxCheck").style.display = "inline";
				document.getElementById("backLoad").style.display = "none";
				

			//console.log("iff",itensityFf);
			//console.log("ife",itensityFe);
			//console.log("rfe",rangeFe);
			//console.log("rff",rangeFf);


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
				
				<input type="file" id="inputUpload"/> 
				<div className="row">
					<button  id="Upload" type="button" className="btn btn-outline-primary" onClick={this.callApi}>Select File</button>
					<div className="form-check" id="auxCheck">
						<input className="form-check-input" type="checkbox"  id="myCheck"/>
						<label className="form-check-label" htmlFor="defaultCheck1">Wireframe Map</label>
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