import React from 'react'
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import RenderNavbar from '../components/RenderNavbar'
import RenderHeader from '../components/RenderHeader'
import {COLORS} from '../constants/index'
import CategoryHeaderSection from '../components/CategoryHeaderSection'


const Home = () => {

    return (
        <View style={{ flex: 1, backgroundColor: COLORS.lightGray}}>
            {/* Navbar section */}
            <RenderNavbar />

            {/* Header Section */}
            <View style={{ backgroundColor: COLORS.white}}>
                <RenderHeader />
            </View>

            {/* Category Header Section */}
            <CategoryHeaderSection />
            

        </View>
    )
}

export default Home

const styles = StyleSheet.create({})
