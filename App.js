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
      <View>
        <StatusBar backgroundColor="black" />
        <TextInput underlineColorAndroid = "transparent" // INPUT DO TEXTO 1 
        placeholder = "Digite o valor 1 "
        placeholderTextColor = "red"
        autoCapitalize = "none"
        onChangeText={this.atualizaValor1}
        keyboardType='numeric' />

        <TextInput underlineColorAndroid = "transparent" // INPUT DO TEXTO 2
        placeholder = "Digite o valor 2 "
        placeholderTextColor = "red"
        autoCapitalize = "none"
        onChangeText={this.atualizaValor2}
        keyboardType='numeric' />

      <TouchableOpacity onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)}>
       <Text> SOMAR </Text>
       
      </TouchableOpacity>
      </View>
    )
  }




}