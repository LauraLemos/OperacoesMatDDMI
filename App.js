//Aluna: LAURA ALVES LEMOS

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
  diminui(){
    this.state.resultado=parseFloat(this.state.valor1)-parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  vezes(){
    this.state.resultado=parseFloat(this.state.valor1)*parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }
  divide(){
    this.state.resultado=parseFloat(this.state.valor1)/parseFloat(this.state.valor2);
    alert(this.state.resultado);
  }


  render(){
    return(
      <View style={MeuEstilo.container}>

        <StatusBar backgroundColor="black" />
        <TextInput style={MeuEstilo.input}
        underlineColorAndroid = "transparent" // INPUT DO TEXTO 1 
        placeholder = "DIGITE O VALOR 1 "
        placeholderTextColor = "#A52A2A"
        autoCapitalize = "none"
        onChangeText={this.atualizaValor1}
        keyboardType='numeric' />

        <TextInput style={MeuEstilo.input}
        underlineColorAndroid = "transparent" // INPUT DO TEXTO 2
        placeholder = "DIGITE O VALOR 2 "
        placeholderTextColor = "#A52A2A"
        autoCapitalize = "none"
        onChangeText={this.atualizaValor2}
        keyboardType='numeric' />

      <TouchableOpacity style={MeuEstilo.botao}
      onPress={()=>this.soma(this.state.valor1, this.state.valor2, this.state.resultado)}>
        
       <Text style={MeuEstilo.textoBotao}> SOMAR </Text>
       
      </TouchableOpacity>

      
      <TouchableOpacity style={MeuEstilo.botaoD} //BOTAO DIMINUI
      onPress={()=>this.diminui(this.state.valor1, this.state.valor2, this.state.resultado)}>
        
       <Text style={MeuEstilo.textoBotao}> SUBTRAÇÃO </Text>

      </TouchableOpacity>


      <TouchableOpacity style={MeuEstilo.botaoM} //BOTAO MULTIPLICA
      onPress={()=>this.vezes(this.state.valor1, this.state.valor2, this.state.resultado)}>
        
       <Text style={MeuEstilo.textoBotao}> MULTIPLICAÇÃO </Text>

      </TouchableOpacity>
      
      <TouchableOpacity style={MeuEstilo.botaoDV} //BOTAO DIVIDE
      onPress={()=>this.divide(this.state.valor1, this.state.valor2, this.state.resultado)}>
        
       <Text style={MeuEstilo.textoBotao}> DIVISÃO </Text>

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
    borderColor: '#A52A2A',
    borderWidth: 1,
  },
  botao:{
    backgroundColor: '#AAA2f4',
    padding:10,
    margin:15,
    height:40,
  },
  botaoD:{
    backgroundColor: '#CD853F', 
    padding:10,
    margin:15,
    height:40,
  },
  botaoM:{
    backgroundColor: '#F08080', 
    padding:10,
    margin:15,
    height:40,
  },
  botaoDV:{
    backgroundColor: '#3CB371', 
    padding:10,
    margin:15,
    height:40,
  },
  textoBotao:{
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