import React, { Component } from 'react';

class UIPaletteGrays extends Component{
    constructor(props) {
		super(props);
    }
    
    render(){
		return(
            <div>
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
			

            </div>
        )
    }
    
}

export default UIPaletteGrays;