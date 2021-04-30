import * as React from 'react';
import {Text, TouchableOpacity, TextInput, View, StyleSheet, StatusBar} from 'react-native';

export default class App extends React.Component{
  state={
    valor1: 0.0,
    valor2: 0.0,
    resultado: 0.0
  }
  atualizaValor1=(number)=>{
    this.setState({valor1:number})
  }
  atualizaValor2=(number)=>{
    this.setState({valor2:number})
  }
  soma(){
    this.state.resultado=parseFloat(this.state.valor1)+parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }

  render(){
    return(
      <View style={MeuEstilo.container}>

        <StatusBar backgroundColor="black" />
        <TextInput style={MeuEstilo.input}
        underlineColorAndroid = "transparent" // INPUT DO TEXTO 1 
        placeholder = "Digite o valor 1 "
        placeholderTextColor = "red"
        autoCapitalize = "none"
        onChangeText={this.atualizaValor1}
        keyboardType='numeric' />

        <TextInput style={MeuEstilo.input}
        underlineColorAndroid = "transparent" // INPUT DO TEXTO 2
        placeholder = "Digite o valor 2 "
        placeholderTextColor = "red"
        autoCapitalize = "none"
        onChangeText={this.atualizaValor2}
        keyboardType='numeric' />

      <TouchableOpacity style={MeuEstilo.botao}
      onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)}>
        
       <Text style={MeuEstilo.textoBotaoSomar}> SOMAR </Text>
       
      </TouchableOpacity>
      </View>
    )
  }
}

const MeuEstilo = StyleSheet.create({
  fontegrande:{
    fontSize:48,
    //backgroundColor:'#333333',
    color:'#111111',
    flexGrow:1,
    justifyContent:"center",
    alignItems:"center",
    padding:23,
  },
  container:{
    padding:23,
  },
  input:{
    margin:15,
    height:40,
    borderColor: '#7a42f4',
    borderWidth: 1,
  },
  botao:{
    backgroundColor: '#AAA2f4',
    padding:10,
    margin:15,
    height:40,
  },
  textoBotaoSomar:{
    color:'white',
    alignItems:'center',
    textAlign:'center',
  },
  switchstilo:{
    flex:1,
    alignItems: 'center',
    justifyContent: 'center',
  }

})