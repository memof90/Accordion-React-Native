import React, {useState} from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Acordion from './src/Components/Accordion.Component';
import { _Colors } from './src/styles/Acordion.styles';

export default function App() {

const [menu, setMenu] = useState(
  [
    { 
      title: 'Salads', 
      data: [
        {key:'Primavera', value:false},
        {key:'Brocoli Salads', value:false},
        {key:'Shredded Brussels Sprout Salad', value:false},
      ] 
    },
    { 
      title: 'Pizzas',
      data: [
        {key:'Chicken Dominator', value:false},
        {key:'Peri Peri Chicken', value:false},
        {key:'Indie Tandoori Paneer', value:false},
        {key:'Veg Extraveganza', value:false}
      ]
    },
    { 
     title: 'Drinks',
     data: [
       {key:'Cocktail', value:false},
       {key:'Mocktail', value:false},
       {key:'Lemon Soda', value:false},
       {key:'Orange Soda', value:false}
      ]
    },
    { 
      title: 'Deserts',
      data: [
        {key:'Choco Lava Cake', value:false},
        {key:'Gulabjamun', value:false},
        {key:'Kalajamun', value:false},
        {key:'Jalebi', value:false}
      ]
    },

  ]
)

function renderAccordions() {
  const items = [];
  for (const item of menu) {
    items.push(
      <Acordion 
        title={item.title}
        data={item.data}
      />
    )
  }
  return items;
}

  return (
    <View style={styles.container}>
      <Text style={styles.Title}>Accordion with React Native</Text>
      {renderAccordions()}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 100,
    backgroundColor: _Colors.PRIMARY,
  },
  Title: {
    color: _Colors.WHITE,
    textAlign: 'center',
    fontSize: 30,
    paddingBottom: 30

  }
});
