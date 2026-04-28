import React, { useState, useRef } from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, FlatList, Dimensions, Platform } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

const { width, height } = Dimensions.get('window');

interface OnboardingItem {
    id: string;
    title: string;
    description: string;
    image: any;
    iconName: keyof typeof Ionicons.glyphMap;
}

const slides: OnboardingItem[] = [
    {
        id: '1',
        title: 'اكتشف شوكولاتة بيرلا',
        description: 'اكتشف ألذ أنواع الشوكولاتة من بيرلا، بنكهات مميزة وجودة عالية بتخلي كل لحظة أحلى.',
        image: require('../../assets/images/intro1.png'),
        iconName: 'document-text-outline',
    },
    {
        id: '2',
        title: 'سهولة الطلب',
        description: 'اطلب شوكولاتتك المفضلة بسهولة وسرعة، وكل المنتجات بين إيديك بكبسة زر.',
        image: require('../../assets/images/intro2.png'),
        iconName: 'card-outline',
    },
    {
        id: '3',
        title: 'توصيل سريع',
        description: 'استلم طلبك بسرعة لباب بيتك واستمتع بطعم بيرلا الرائع بأي وقت.',
        image: require('../../assets/images/intro3.png'),
        iconName: 'bicycle-outline',
    }
];

export default function OnboardingScreen() {
    const [currentIndex, setCurrentIndex] = useState<number>(0);
    const slidesRef = useRef<FlatList>(null);

    const viewableItemsChanged = useRef(({ viewableItems }: any) => {
        setCurrentIndex(viewableItems[0]?.index || 0);
    }).current;

    const viewConfig = useRef({ viewAreaCoveragePercentThreshold: 50 }).current;

    const scrollToNext = () => {
        if (currentIndex < slides.length - 1) {
            slidesRef.current?.scrollToIndex({ index: currentIndex + 1 });
        } else {
            router.replace('/home');
        }
    };

    const skip = () => {
        router.replace('/home');
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.skipButton} onPress={skip}>
                <Text style={styles.skipText}>تخطي</Text>
                <Ionicons name="chevron-back" size={16} color="#6A0DAD" />
            </TouchableOpacity>

            <FlatList
                data={slides}
                ref={slidesRef}
                horizontal
                pagingEnabled
                bounces={false}
                showsHorizontalScrollIndicator={false}
                keyExtractor={(item) => item.id}
                onViewableItemsChanged={viewableItemsChanged}
                viewabilityConfig={viewConfig}
                renderItem={({ item }) => (
                    <View style={styles.slide}>
                        <View style={styles.imageContainer}>
                            <Image source={item.image} style={styles.image} />
                        </View>

                        <View style={styles.bottomCard}>
                            <View style={styles.contentContainer}>
                                <Ionicons name={item.iconName} size={40} color="#6A0DAD" style={styles.icon} />
                                <Text style={styles.title}>{item.title}</Text>
                                <Text style={styles.description}>{item.description}</Text>
                            </View>

                            <View style={styles.pagination}>
                                {slides.map((_, index) => (
                                    <View
                                        key={index}
                                        style={[
                                            styles.dot,
                                            currentIndex === index ? styles.activeDot : null,
                                        ]}
                                    />
                                ))}
                            </View>

                            <TouchableOpacity style={styles.button} onPress={scrollToNext}>
                                <Text style={styles.buttonText}>
                                    {currentIndex === slides.length - 1 ? 'ابدأ !' : 'التالي'}
                                </Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                )}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff'
    },
    skipButton: {
        position: 'absolute',
        top: Platform.OS === 'ios' ? 50 : 40, 
        left: 20,
        zIndex: 10,
        flexDirection: 'row',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.9)',
        paddingVertical: 8,
        paddingHorizontal: 15,
        borderRadius: 20,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        elevation: 3,
    },
    skipText: {
        color: '#6A0DAD',
        fontSize: 14,
        fontWeight: 'bold',
        marginRight: 4,
    },
    slide: {
        width,
        height,
    },
    imageContainer: {
        flex: 0.55, 
    },
    image: {
        width: '100%',
        height: '100%',
        resizeMode: 'cover'
    },
    bottomCard: {
        flex: 0.45, 
        backgroundColor: '#F9F9F9',
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        padding: 20,
        alignItems: 'center',
        justifyContent: 'space-between', 
        marginTop: -30,
        paddingBottom: Platform.OS === 'ios' ? 40 : 30, 
    },
    contentContainer: {
        alignItems: 'center',
        width: '100%',
    },
    icon: {
        marginBottom: 10,
        marginTop: 10
    },
    title: {
        fontSize: 22,
        fontWeight: 'bold',
        color: '#6A0DAD',
        marginBottom: 10
    },
    description: {
        fontSize: 14,
        color: '#555',
        textAlign: 'center',
        lineHeight: 22,
        paddingHorizontal: 10
    },
    pagination: {
        flexDirection: 'row-reverse',
        marginVertical: 15
    },
    dot: {
        width: 15,
        height: 4,
        backgroundColor: '#ccc',
        marginHorizontal: 4,
        borderRadius: 2
    },
    activeDot: {
        backgroundColor: '#6A0DAD',
        width: 25
    },
    button: {
        backgroundColor: '#6A0DAD',
        width: '80%',
        paddingVertical: 15,
        borderRadius: 25,
        alignItems: 'center',
        shadowColor: "#6A0DAD",
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        elevation: 5,
    },
    buttonText: {
        color: '#fff',
        fontSize: 18,
        fontWeight: 'bold'
    },
});