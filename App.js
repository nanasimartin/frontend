import React, { Component } from 'react';
import { Button, StyleSheet, View, Text, Image, TextInput } from 'react-native';
//import kocka from './dobokocka.jpg';

export default class ButtonBasics extends Component {

  constructor(props) {
    super(props);
    this.state = {
      velet: 3,
      //bevitel:6,
      oldalszam:6,
      lathatokocka:false,
      szint:1,
      pont:1
     
    };
    //this._onPressButton = this._onPressButton.bind(this);
    //Ez az elobbi sor nem kell, ha nyil fuggvenyt csinalok!
  }


//kocka oldalszam valtoztatasa textinput-al is
/*
handleInputChange = (text) => {
  
    this.setState({ bevitel: text   });
  
}
valtoztat = () => {
  
  var szam=Number(this.state.bevitel);
  //alert(szam)
  if (szam==this.state.bevitel && szam>=1 && szam<=20)
    this.setState({ oldalszam: szam })
  else 
  {
    alert("Számot adj meg 1 és 20 között!")
    this.setState({ bevitel: this.state.oldalszam })
  }
}
*/
//pont
_novelpont=()=> {
  if (this.state.pont<50)
    this.setState({pont: this.state.pont+1});
  
}

_csokkentpont=()=> {
  if (this.state.pont>1)
    this.setState({pont: this.state.pont-1});
  
}

//szint
_novelszint=()=> {
  if (this.state.szint<20)
    this.setState({szint: this.state.szint+1});
  
}

_csokkentszint=()=> {
  if (this.state.szint>1)
    this.setState({szint: this.state.szint-1});
  
}

  //kocka oldala
  _novel=()=> {
    if (this.state.oldalszam<20)
      this.setState({oldalszam: this.state.oldalszam+1,bevitel:Number(this.state.bevitel)+1});
    
  }

  _csokkent=()=> {
    if (this.state.oldalszam>1)
      this.setState({oldalszam: this.state.oldalszam-1,bevitel:Number(this.state.bevitel)-1});
    
  }


  //kockadobas
  _onPressButton=()=> {
    var veletlen=1+Math.floor(Math.random() * this.state.oldalszam);
    //alert(veletlen);
 
   
    //this.setState({lathatokocka: true});
    this.setState({velet: veletlen});

   
   this.setState({lathatokocka: true});
    this.setState({velet: null});
    setTimeout(()=> {
      this.setState({ lathatokocka : false, velet: veletlen})
   }, 1000);

    
    
  
      
  }

  render() {
     
    return (
      <View style={styles.container}>
      
      <View style={{ flexDirection: "row"}}>
      
      <View style={styles.felso}>
       <Text style={{textAlign:'center',backgroundColor:'darkred',color:'white',padding:10}}>SZINTEK száma: 
        </Text>
        <View style={styles.buttonContainer3}>
          <Button 
            onPress={this._novelszint}
            title="+"
          />
        </View>
        <Text style={{textAlign:'center',backgroundColor:'darkred',color:'white',padding:10,marginLeft:50,marginRight:50}}>
          {this.state.szint} 
        </Text>
        <View style={styles.buttonContainer3}>
          <Button
            onPress={this._csokkentszint}
            title="-"
          />
        </View>
        </View>


        <View style={styles.felso}>
       <Text style={{textAlign:'center',backgroundColor:'darkred',color:'white',padding:10}}>PONTOK száma: 
        </Text>
        <View style={styles.buttonContainer3}>
          <Button 
            onPress={this._novelpont}
            title="+"
          />
        </View>
        <Text style={{textAlign:'center',backgroundColor:'darkred',color:'white',padding:10,marginLeft:50,marginRight:50}}>
          {this.state.pont} 
        </Text>
        <View style={styles.buttonContainer3}>
          <Button
            onPress={this._csokkentpont}
            title="-"
          />
        </View>
        </View>


        </View>

        <View
  style={{
    borderBottomColor: 'black',
    borderBottomWidth: 1,
  }}
/>
        
        <Text style={{textAlign:'center',marginTop:20}}>Kocka oldalszáma: 
        </Text>
        <View style={styles.buttonContainer2}>
          <Button
            onPress={this._novel}
            title="+"
          />
        </View>
        <Text style={{textAlign:'center',backgroundColor:'blue',color:'white',padding:10,marginLeft:100,marginRight:100}}>
        {this.state.oldalszam}
        </Text>
        <View style={styles.buttonContainer2}>
          <Button
            onPress={this._csokkent}
            title="-"
          />
        </View>

 
        <View style={styles.buttonContainer}>
          <Button
            onPress={this._onPressButton}
            title="Kockadobás"
          />
        </View>
        <Text style={{textAlign:'center'}}>Kockadobás eredménye: 
        </Text>
       
        

        <Text style={{textAlign:'center',fontSize:20,fontWeight:'bold'}}> 
        {this.state.velet}
        </Text>

      
       
         </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
   flex: 1,
   marginTop:40
  },
  buttonContainer: {
    margin: 20
  },
  buttonContainer2: {
    margin:20,
    marginLeft: 150,
    marginRight:150
    },
  felso: {
    flex:1,
    margin:5,
   padding:10,
    backgroundColor:'#a9a9a9'
  },
  buttonContainer3: {
    margin:10,
    marginLeft: 50,
    marginRight:50
    },
  alternativeLayoutButtonContainer: {
    margin: 20,
    flexDirection: 'row',
    justifyContent: 'space-between'
  }
});