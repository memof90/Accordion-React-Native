import React, {useState} from 'react';

import {FlatList, LayoutAnimation, Platform, StyleSheet, Text, TouchableOpacity, UIManager, View} from 'react-native'

// importamos Nuestros Colores
import { _Colors } from '../styles/Acordion.styles';
import { MaterialIcons } from '@expo/vector-icons';


if (
    Platform.OS === "android" && 
    UIManager.setLayoutAnimationEnabledExperimental
) {
    UIManager.setLayoutAnimationEnabledExperimental(true);
}

const Acordion = (props) => {
    const [data, setData] = useState(props.data);
    const [expanded, setExpanded] = useState(false);

    const toogleSpand = () => {
        LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
        setExpanded(!expanded);
    
        
    }

    const onClick = (index) => {
        const temp = data.slice()
        temp[index].value = !temp[index].value
        setData(temp)
    }
    
    return (
        <View>
            <TouchableOpacity onPress={() => toogleSpand()} style={styles.row} >
                <Text style={[styles.title]} >{props.title}</Text>
                <MaterialIcons name={expanded ? 'keyboard-arrow-up' : 'keyboard-arrow-down'} size={30} color={_Colors.DARKGRAY} />
            </TouchableOpacity>
            <View style={styles.parentHr} />
            {expanded && (
              <View>
                <FlatList 
                    data={data}
                    numColumns={1}
                    scrollEnabled={false}
                    renderItem={({item, index}) => 
                        <View>
                            <TouchableOpacity onPress={() => onClick(index)} style={[
                                styles.childRow, 
                                styles.button, 
                                item.value ? styles.btnActive: styles.btnInActive]}>
                                <Text>{item.key}</Text>
                                <MaterialIcons name={'check-circle'} size={24} color={item.value ? _Colors.GREEN : _Colors.LIGTHGRAY} />
                            </TouchableOpacity>
                            <View style= {styles.childHr} />
                        </View>
                    }
                />
              </View>  
            )
            }
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: 'center',
    }, 
    button: {
        width: '100%',
        height: 54,
        alignItems: 'center',
        paddingLeft: 35,
        paddingRight: 35,
        fontSize: 12
    },
    title: {
        fontSize: 14,
        fontWeight: 'bold',
        color: _Colors.DARKGRAY
    },
    itemActive: {
        fontSize: 12,
        color: _Colors.GREEN
    },
    itemInActive: {
        fontSize: 12,
        color: _Colors.DARKGRAY,
    },
    btnActive: {
        borderColor: _Colors.GREEN,
    },
    btnInActive: {
        borderColor: _Colors.DARKGRAY
    },
    row:{
        flexDirection: 'row',
        justifyContent:'space-between',
        height:56,
        paddingLeft:25,
        paddingRight:18,
        alignItems:'center',
        backgroundColor: _Colors.CGRAY,
    },
    childRow:{
        flexDirection: 'row',
        justifyContent:'space-between',
        backgroundColor: _Colors.GRAY,
    },
    parentHr:{
        height:1,
        color: _Colors.WHITE,
        width:'100%'
    },
    childHr:{
        height:1,
        backgroundColor: _Colors.LIGHTGRAY,
        width:'100%',
    },
    colorActive:{
        borderColor: _Colors.GREEN,
    },
    colorInActive:{
        borderColor: _Colors.DARKGRAY,
    }
    

})

export default Acordion;