import React,  {Component} from 'react';
import './AppTable.css';


class AppTable extends React.Component{


    state = {
        clicks:0
    }
    
   
    render(){
     function setColor(clicks) {
     var ContNum;
     if(clicks==ContNum)
     {
         return( '<style>#'+clicks+'{background-color : white;}</style>');

     }
     else
     {
        return ('<style>#'+clicks+'{background-color : green;}</style>');

     }
        
     }
    	return(

        <div id="AppTablecss" >
            <table align="center">
                <tr>
                    <td id="0" onClick={()=>this.setState({ clicks: this.state.clicks =0}, setColor(this.state.clicks))}>  0 </td>
                    <td id="1" onClick={()=>this.setState({ clicks: this.state.clicks =1})}> 1  </td>
                    <td id="2" onClick={()=>this.setState({ clicks: this.state.clicks =2})}> 2  </td>
                    <td id="3" onClick={()=>this.setState({ clicks: this.state.clicks =3})}> 3  </td>
                    <td id="4" onClick={()=>this.setState({ clicks: this.state.clicks =4})}> 4  </td>
                    <td id="5" onClick={()=>this.setState({ clicks: this.state.clicks =5})}> 5 </td>
                    <td id="6" onClick={()=>this.setState({ clicks: this.state.clicks =6})}>  6 </td>
                    <td id="7" onClick={()=>this.setState({ clicks: this.state.clicks =7})}>  7 </td>
                    <td id="8" onClick={()=>this.setState({ clicks: this.state.clicks =8})}>  8 </td>
                    <td id="9" onClick={()=>this.setState({ clicks: this.state.clicks =9})}>  9 </td>
                    <td id="10" onClick={()=>this.setState({ clicks: this.state.clicks =10})}>  10 </td>
                    <td id="11" onClick={()=>this.setState({ clicks: this.state.clicks =11})}>  11</td>
                </tr>
                <tr>
                    <td id="12" onClick={()=>this.setState({ clicks: this.state.clicks =12})}>  12 </td>
                    <td id="13" onClick={()=>this.setState({ clicks: this.state.clicks =13})}>  13 </td>
                    <td id="14" onClick={()=>this.setState({ clicks: this.state.clicks =14})}>  14 </td>
                    <td id="15" onClick={()=>this.setState({ clicks: this.state.clicks =15})}>  15 </td>
                    <td id="16" onClick={()=>this.setState({ clicks: this.state.clicks =16})}>  16 </td>
                    <td id="17" onClick={()=>this.setState({ clicks: this.state.clicks =17})}> 17 </td>
                    <td id="18" onClick={()=>this.setState({ clicks: this.state.clicks =18})}> 18 </td>
                    <td id="19" onClick={()=>this.setState({ clicks: this.state.clicks =19})}>  19 </td>
                    <td id="20" onClick={()=>this.setState({ clicks: this.state.clicks =20})}>  20 </td>
                    <td id="21" onClick={()=>this.setState({ clicks: this.state.clicks =21})}>  21 </td>
                    <td id="22" onClick={()=>this.setState({ clicks: this.state.clicks =22})}>  22 </td>
                    <td id="23" onClick={()=>this.setState({ clicks: this.state.clicks =23})}>  23</td>
                </tr>
                <tr>
                    <td id="24" onClick={()=>this.setState({ clicks: this.state.clicks =24})}>  24 </td>
                    <td id="25" onClick={()=>this.setState({ clicks: this.state.clicks =25})}>  25 </td>
                    <td id="26" onClick={()=>this.setState({ clicks: this.state.clicks =26})}>  26 </td>
                    <td id="27" onClick={()=>this.setState({ clicks: this.state.clicks =27})}>  27 </td>
                    <td id="28" onClick={()=>this.setState({ clicks: this.state.clicks =28})}>  28 </td>
                    <td id="29" onClick={()=>this.setState({ clicks: this.state.clicks =29})}> 29 </td>
                    <td id="30" onClick={()=>this.setState({ clicks: this.state.clicks =30})}>  30 </td>
                    <td id="31" onClick={()=>this.setState({ clicks: this.state.clicks =31})}>  31 </td>
                    <td id="32" onClick={()=>this.setState({ clicks: this.state.clicks =32})}>  32 </td>
                    <td id="33" onClick={()=>this.setState({ clicks: this.state.clicks =33})}>  33 </td>
                    <td id="34" onClick={()=>this.setState({ clicks: this.state.clicks =34})}>  34 </td>
                    <td id="35" onClick={()=>this.setState({ clicks: this.state.clicks =35})}>  35</td>
                </tr>
                <tr>
                    <td id="36" onClick={()=>this.setState({ clicks: this.state.clicks =36})}>  36 </td>
                    <td id="37" onClick={()=>this.setState({ clicks: this.state.clicks =37})}>  37 </td>
                    <td id="38" onClick={()=>this.setState({ clicks: this.state.clicks =38})}> 38 </td>
                    <td id="39" onClick={()=>this.setState({ clicks: this.state.clicks =39})}>  39 </td>
                    <td id="40" onClick={()=>this.setState({ clicks: this.state.clicks =40})}>  40 </td>
                    <td id="41" onClick={()=>this.setState({ clicks: this.state.clicks =41})}>  41</td>
                    <td id="42" onClick={()=>this.setState({ clicks: this.state.clicks =42})}>  42 </td>
                    <td id="43" onClick={()=>this.setState({ clicks: this.state.clicks =43})}>  43 </td>
                    <td id="44" onClick={()=>this.setState({ clicks: this.state.clicks =44})}>  44 </td>
                    <td id="45" onClick={()=>this.setState({ clicks: this.state.clicks =45})}>  45 </td>
                    <td id="46" onClick={()=>this.setState({ clicks: this.state.clicks =46})}>  46 </td>
                    <td id="47" onClick={()=>this.setState({ clicks: this.state.clicks =47})}>  47</td>
                </tr>
            </table>
        </div>
        );

	}
}

export default AppTable;

