import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const products = [
    { id: '1', title: 'أصابع بستاشيو', price: '80', image: require('../../assets/images/pistashiofinger.png') },
    { id: '2', title: 'قلوب لوتس', price: '40', image: require('../../assets/images/qalblouts.png') },
    { id: '3', title: 'قلوب بون بون', price: '40', image: require('../../assets/images/bonbonqalb.png') },
    { id: '4', title: 'قلوب بندق', price: '40', image: require('../../assets/images/qalabbistashio.jpeg') }, // استبدلها بصورة البندق
    { id: '5', title: 'عش البلبل هدايا', price: '30', image: { uri: 'https://via.placeholder.com/150/FFF/000?text=Esh+Bulbul' } },
    { id: '6', title: 'قلب بيستاشيو كبير', price: '100', image: { uri: 'https://via.placeholder.com/150/6A0DAD/FFF?text=Large+Heart' } },
];

export default function BestSellersScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Image
                    source={require('../../assets/images/logo.png')}
                    style={styles.logoImage}
                />
            </View>

            <View style={styles.whiteContainer}>

                <View style={styles.pageHeader}>
                    <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                        <Ionicons name="chevron-back" size={24} color="#6A0DAD" />
                    </TouchableOpacity>
                    <Text style={styles.pageTitle}>الاكثر مبيعاً</Text>
                </View>

                <FlatList
                    data={products}
                    numColumns={2} 
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.listContainer}
                    showsVerticalScrollIndicator={false}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Image source={item.image} style={styles.productImage} />

                            <View style={styles.productInfo}>
                                <Text style={styles.productTitle}>{item.title}</Text>
                                <Text style={styles.productPrice}>{item.price}₪</Text>
                            </View>

                            <View style={styles.actionRow}>
                                <TouchableOpacity style={styles.addToCartBtn}>
                                    <Text style={styles.addToCartText}>اضف الى السلة</Text>
                                </TouchableOpacity>

                                <TouchableOpacity style={styles.cartIconBtn}>
                                    <Ionicons name="cart-outline" size={20} color="#6A0DAD" />
                                </TouchableOpacity>
                            </View>
                        </View>
                    )}
                />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A0DAD',
    },
    header: {
        height: 120,
        justifyContent: 'center',
        alignItems: 'center',
        paddingTop: 40,
    },
    logoImage: {
        width: 120,
        height: 50,
        resizeMode: 'contain',
    },
    whiteContainer: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingTop: 20,
        paddingHorizontal: 15,
    },
    pageHeader: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 20,
        paddingHorizontal: 10,
    },
    pageTitle: {
        fontSize: 24,
        fontWeight: 'bold',
        color: '#333',
    },
    backButton: {
        padding: 5,
    },
    listContainer: {
        paddingBottom: 100, 
    },
    productCard: {
        flex: 1,
        backgroundColor: '#fff',
        borderRadius: 20,
        padding: 10,
        margin: 8, 
        borderWidth: 1,
        borderColor: '#EFEFEF',
    },
    productImage: {
        width: '100%',
        height: 110,
        borderRadius: 15,
        marginBottom: 10,
        resizeMode: 'cover',
    },
    productInfo: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginBottom: 15,
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#333',
        flex: 1,
        textAlign: 'right',
    },
    productPrice: {
        fontSize: 14,
        color: '#666',
        marginLeft: 5,
    },
    actionRow: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    addToCartBtn: {
        backgroundColor: '#D1B3D1', 
        paddingVertical: 8,
        paddingHorizontal: 12,
        borderRadius: 15,
        flex: 1, 
        marginLeft: 8,
    },
    addToCartText: {
        color: '#333',
        fontWeight: 'bold',
        fontSize: 12,
        textAlign: 'center',
    },
    cartIconBtn: {
        padding: 5,
    },
});