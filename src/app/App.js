import React, { Component } from 'react';
class App extends Component{

callNode(){
	var datos;
	console.log("llamando a node");
	/*fetch('/api')
	.then(res => res.json())
	.then(data => console.log(data));
	*/
	fetch('api/').then(response => {
		response.json().then(json => {
			let data = json; 
			console.log(data);

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
								console.log("dsad");
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
		console.log("iff",itensityFf);
		console.log("ife",itensityFe);
		console.log("rfe",rangeFe);
		console.log("rff",rangeFf);


		});
	});
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


				<button type="button" className="btn btn-primary" onClick={this.callNode}>Primary</button>
				<div id="hol"> </div>
			</div>
			)
	}
}

export default App;