import * as React from 'react';
import { Text, View, StyleSheet, Image, Button } from 'react-native';
import Constants from 'expo-constants';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

// or any pure javascript modules available in npm
import { Card } from 'react-native-paper';


function HomeScreen ({navigation}) {
  return(
     <View style={styles.container}>
    <Image 
          source={{uri: 'https://media-exp1.licdn.com/dms/image/C4D03AQFLx3YQ2wPUtw/profile-displayphoto-shrink_800_800/0/1631974671994?e=1643846400&v=beta&t=1heScP38l3VA7N0UdKLxKVF3l7CCtztTe7aEtuewF2Q',}}
          style={ styles.photo}/>
      <Text style={styles.title}>
      João Victor de Oliveira Santos
      </Text>
      <Text style={styles.paragraph}>
        Assistente de TI - Emecinco Contabilidade
      </Text>
      <Text style={styles.paragraph}>
        4° Periodo Sistemas Para Internet - Unicap
      </Text>
      <Text style={styles.title}>
      </Text>
      <Button
        title="Hobbies"
        onPress={() => navigation.navigate('Hobbies')}
      />
      <Button
        title="Extras"
        onPress={() => navigation.navigate('Extras')}
      />
    </View>
  );
}

function Hobbies ({navigation}) {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>
      Hobbies
      </Text>
      <Text>
        Prática de Esportes
      </Text>
      <Text>
        Filmes
      </Text>
      <Text>
        Viagens
      </Text>
      <Text>
        Filmes
      </Text>
      <Text>
        Livros
      </Text>
    </View>
  );
}

function Extras ({navigation}) {
  return(
     <View style={styles.container}>
      <Text style={styles.title}>
      Atividades Extras
      </Text>
      <Text>
        Cursos de Extensão
      </Text>
      <Text>
        Trabalho Voluntario
      </Text>
      <Text>
        Idiomas
      </Text>
    </View>
  );
}


const Stack = createNativeStackNavigator();

export default function App() {
  return (
  
   <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Hobbies" component={Hobbies}  options={{ title: 'Hobbies' }}/>
          <Stack.Screen name="Extras" component={Extras}  options={{ title: 'Extras' }}/>
      </Stack.Navigator>
   </NavigationContainer>
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems:'center',
    justifyContent: 'center',
    paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
    padding: 8,
  },
  paragraph: {
    margin: 24,
    fontSize: 14,
    textAlign: 'center',
  },
  title:{
        margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  photo: {
    width:170,
    height:200,
    borderRadius:50
  }
});
