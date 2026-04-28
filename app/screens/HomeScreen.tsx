import React from 'react';
import { View, Text, StyleSheet, ScrollView, TextInput, Image, TouchableOpacity, FlatList, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width } = Dimensions.get('window');

const categories = [
    { id: '1', title: 'كافة المنتجات', icon: 'apps-outline' },
    { id: '2', title: 'العروض', icon: 'pricetag-outline' },
    { id: '3', title: 'نقاط الولاء', icon: 'cash-outline' },
    { id: '4', title: 'منتجات جديدة', icon: 'star-outline' },
];

const bestSellers = [
    { id: '1', title: 'اصابع بستاشيو', price: '60 Nis', image: require('../../assets/images/pistashiofinger.png') },
    { id: '2', title: 'قلوب بون بون', price: '40 Nis', image: require('../../assets/images/bonbonqalb.png') },
    { id: '3', title: 'قلوب بستاشيو', price: '40 Nis', image: require('../../assets/images/qalabbistashio.jpeg')  },
    { id: '4', title: 'قلوب لوتس', price: '40 Nis', image: require('../../assets/images/qalblouts.png') },
    { id: '5', title: 'قلوب نوتيلا', price: '40 Nis', image: require('../../assets/images/qalbnoutila.jpg') },
];

const cities = ['نابلس', 'طولكرم', 'سلفيت', 'رام الله', 'اريحا', 'قلقيلية', 'بيرزيت', 'الخليل'];

export default function HomeScreen() {
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <View style={styles.headerTop}>
                    <TouchableOpacity onPress={() => router.push('/auth/login')}>
                        <Ionicons name="person-circle-outline" size={36} color="#fff" />
                    </TouchableOpacity>

                    <Image
                        source={require('../../assets/images/logo.png')}
                        style={styles.logoImage}
                    />

                    <View style={styles.searchBar}>
                        <Ionicons name="options-outline" size={20} color="#6A0DAD" />
                        <TextInput
                            style={styles.searchInput}
                            placeholder="بحث"
                            textAlign="right"
                        />
                    </View>
                </View>
            </View>

            <ScrollView style={styles.whiteContainer} showsVerticalScrollIndicator={false}>

                <View style={styles.categoriesContainer}>
                    {categories.map((item) => (
                        <TouchableOpacity key={item.id} style={styles.categoryItem}>
                            <View style={styles.iconCircle}>
                                <Ionicons name={item.icon as any} size={28} color="#fff" />
                            </View>
                            <Text style={styles.categoryText}>{item.title}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>الاكثر مبيعاً</Text>
                    <TouchableOpacity onPress={() => router.push('/best-sellers')}>
                        <Text style={styles.seeAllText}>عرض الكل {'<'}</Text>
                    </TouchableOpacity>
                </View>

                <FlatList
                    data={bestSellers}
                    horizontal
                    inverted={true} 
                    showsHorizontalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    contentContainerStyle={styles.bestSellersList}
                    renderItem={({ item }) => (
                        <View style={styles.productCard}>
                            <Image source={item.image} style={styles.productImage} />
                            <Text style={styles.productPrice}>{item.price}</Text>
                            <Text style={styles.productTitle}>{item.title}</Text>
                        </View>
                    )}
                />

                <View style={styles.bannerContainer}>
                    <Image
                        source={require('../../assets/images/banner.png')}
                        style={styles.bannerImage}
                    />
                </View>

                <View style={styles.sectionHeader}>
                    <Text style={styles.sectionTitle}>نقاط البيع</Text>
                </View>
                <View style={styles.citiesContainer}>
                    {cities.map((city, index) => (
                        <TouchableOpacity key={index} style={styles.cityBadge}>
                            <Text style={styles.cityText}>{city}</Text>
                        </TouchableOpacity>
                    ))}
                </View>

                <View style={{ height: 100 }} />
            </ScrollView>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#6A0DAD', 
    },
    header: {
        paddingTop: 50,
        paddingHorizontal: 20,
        paddingBottom: 40, 
        backgroundColor: '#6A0DAD',
    },
    headerTop: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    logoImage: {
        width: 100, 
        height: 40, 
        resizeMode: 'contain', 
    },
    searchBar: {
        flexDirection: 'row-reverse',
        backgroundColor: '#fff',
        borderRadius: 25,
        paddingHorizontal: 15,
        paddingVertical: 8,
        alignItems: 'center',
        width: '60%',
    },
    searchInput: {
        flex: 1,
        marginLeft: 10,
        fontSize: 16,
    },
    whiteContainer: {
        flex: 1,
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        marginTop: -20, 
        paddingTop: 20,
    },
    categoriesContainer: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-around',
        paddingHorizontal: 10,
        marginBottom: 20,
    },
    categoryItem: {
        alignItems: 'center',
    },
    iconCircle: {
        backgroundColor: '#6A0DAD',
        width: 60,
        height: 60,
        borderRadius: 30,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: 8,
    },
    categoryText: {
        color: '#6A0DAD',
        fontSize: 12,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    sectionHeader: {
        flexDirection: 'row-reverse',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: 20,
        marginBottom: 10,
        marginTop: 10,
    },
    sectionTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: '#333',
    },
    seeAllText: {
        color: '#6A0DAD',
        fontSize: 14,
        fontWeight: 'bold',
    },
    bestSellersList: {
        paddingHorizontal: 15,
    },
    productCard: {
        backgroundColor: '#fff',
        borderRadius: 15,
        padding: 10,
        marginHorizontal: 8,
        alignItems: 'center',
        width: 130, 
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,
    },
    productImage: {
        width: 100,
        height: 100,
        borderRadius: 10,
        marginBottom: 10,
        resizeMode: 'cover', 
    },
    productPrice: {
        backgroundColor: '#6A0DAD',
        color: '#fff',
        paddingHorizontal: 12,
        paddingVertical: 4,
        borderRadius: 12,
        fontSize: 14,
        fontWeight: 'bold',
        marginBottom: 8,
        overflow: 'hidden',
    },
    productTitle: {
        fontSize: 14,
        fontWeight: 'bold',
        color: '#6A0DAD',
        textAlign: 'center',
    },
    bannerContainer: {
        paddingHorizontal: 20,
        marginTop: 20,
        marginBottom: 10,
    },
    bannerImage: {
        width: '100%',
        height: 150,
        borderRadius: 15,
        resizeMode: 'cover',
    },
    citiesContainer: {
        flexDirection: 'row-reverse',
        flexWrap: 'wrap',
        justifyContent: 'space-between',
        paddingHorizontal: 20,
    },
    cityBadge: {
        backgroundColor: '#D1B3D1', 
        borderRadius: 20,
        paddingVertical: 10,
        paddingHorizontal: 15,
        width: '48%', 
        marginBottom: 10,
        alignItems: 'center',
    },
    cityText: {
        color: '#333',
        fontSize: 16,
        fontWeight: 'bold',
    },
});