import React, { Component } from 'react';

class UINavbar extends Component{
    constructor(props) {
		super(props);
    }
    
    render(){
		return(
            <div>
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

            </div>
        )
    }
    
}

export default UINavbar;