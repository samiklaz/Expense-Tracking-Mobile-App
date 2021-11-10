import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native'
import {COLORS, icons, SIZES} from '../constants/index'


const RenderNavbar = () => {
    return (
        <View
            style={{
                flexDirection: "row",
                height: 80,
                justifyContent: "space-between",
                alignItems: "flex-end",
                paddingHorizontal: SIZES.padding,
                backgroundColor: COLORS.white
            }}
        >
            <TouchableOpacity
                style={{
                    justifyContent: "center",
                    width: 50,
                }}
                onPress={() => console.log('back')}
            >
                <Image 
                    source={icons.back_arrow}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>

            <TouchableOpacity
                style={{
                    justifyContent: "center",
                    alignItems: "flex-end",
                    width: 50,
                }}
                onPress={() => console.log('More')}
            >
                <Image 
                    source={icons.more}
                    style={{
                        width: 30,
                        height: 30,
                        tintColor: COLORS.primary
                    }}
                />
            </TouchableOpacity>
        </View>
    )
}

export default RenderNavbar

const styles = StyleSheet.create({})
