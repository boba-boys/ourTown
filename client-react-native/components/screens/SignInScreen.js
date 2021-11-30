import React, {useState} from 'react'
import{View, Text, Image, StyleSheet, useWindowDimensions, ScrollView} from 'react-native'
import myCity from '../../assets/myCity.jpeg'
import CustomButton from '../CustomButton'
import CustomInput from '../CustomInput'


const SignInScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const{height} = useWindowDimensions();

  const onSignInPressed = () =>{
    console.warn('sign in')
  }

  const onForgotPassWordPressed = () =>{
    console.warn('hahahahah')
  }

  const onSignInFacebook = () =>{
    console.warn('hahahahah')
  }

  const onSignInGoogle = () =>{
    console.warn('hahahahah')
  }

  const onSignInApple = () =>{
    console.warn('hahahahah')
  }

  const onSignUpPressed = () =>{
    console.warn('hahahahah')
  }

  return (
    <ScrollView showsVerticalScrollIndicator={false}>
    <View style={styles.root}>
      <Image source={myCity}
       style={[styles.myCity, {height: height * 0.3}]}
       resizeMode="contain" />

      <CustomInput placeholder="UserName" value={username} setValue={setUsername}/>
      <CustomInput placeholder="Password" value={password} setValue={setPassword}
      secureTextEntry/>
      <CustomButton text='Sign In' type='signIn' onPress={onSignInPressed}/>
      <CustomButton text='Forgot Password?' onPress={onForgotPassWordPressed} type="forgot"/>
      <CustomButton text='Sign In with Facebook' type='signIn' onPress={onSignInFacebook} bgColor='#E7EAF4' fgColor="#4765A9"/>
      <CustomButton text='Sign In with Google' type='signIn' onPress={onSignInGoogle} bgColor='#FAE9EA' fgColor="#DD4D44"/>
      <CustomButton text='Sign In with Apple' type='signIn' onPress={onSignInApple} bgColor='#e3e3e3' fgColor="#363636"/>
      <CustomButton text="Sign Up" onPress={onSignUpPressed} type="forgot"/>
    </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  root:{
    alignItems:'center',
    padding: 20,
  },
  myCity:{
    width:'70%',
    maxWidth: 300,
    maxHeight: 300
  }
})


export default SignInScreen