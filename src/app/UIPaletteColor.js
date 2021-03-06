import React, { Component } from 'react';

class UIPaletteColor extends Component{
    constructor(props) {
		super(props);
    }
    
    render(){
		return(
            <div>
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
        )
    }
    
}

export default UIPaletteColor;