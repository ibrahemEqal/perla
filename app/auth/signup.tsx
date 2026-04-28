import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function SignUpScreen() {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'height'} style={styles.container}>
            <View style={styles.header}>
                <TouchableOpacity onPress={() => router.back()} style={styles.backButton}>
                    <Ionicons name="chevron-back" size={28} color="#fff" />
                </TouchableOpacity>
                <Text style={styles.logoText}>Perla</Text>
            </View>

            <ScrollView contentContainerStyle={styles.scrollContent} bounces={false}>
                <View style={styles.card}>
                    <Text style={styles.title}>انشاء حساب جديد</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>الاسم الكامل</Text>
                        <TextInput style={styles.input} placeholder="ahmad khaled" textAlign="right" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>كلمة المرور</Text>
                        <View style={styles.passwordContainer}>
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
                            </TouchableOpacity>
                            <TextInput style={styles.passwordInput} placeholder="**************" secureTextEntry={!showPassword} textAlign="right" />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>البريد الالكتروني</Text>
                        <TextInput style={styles.input} placeholder="ahmad55@gmail.com" keyboardType="email-address" textAlign="right" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>رقم الهاتف</Text>
                        <TextInput style={styles.input} placeholder="+ 970 5656 789" keyboardType="phone-pad" textAlign="right" />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>تاريخ الميلاد</Text>
                        <TextInput style={styles.input} placeholder="09/05/1997" textAlign="right" />
                    </View>

                    <TouchableOpacity style={styles.mainButton}>
                        <Text style={styles.mainButtonText}>انشاء حساب</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#6A0DAD' },
    header: { height: 150, justifyContent: 'center', alignItems: 'center', position: 'relative' },
    backButton: { position: 'absolute', top: 50, left: 20, zIndex: 10 },
    logoText: { color: '#fff', fontSize: 32, fontWeight: 'bold', fontStyle: 'italic' },
    scrollContent: { flexGrow: 1 },
    card: { flex: 1, backgroundColor: '#F9F9F9', borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 30, alignItems: 'center' },
    title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 25 },
    inputGroup: { width: '100%', marginBottom: 15 },
    label: { textAlign: 'right', fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 5 },
    input: { backgroundColor: '#CFCFCF', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 12, fontSize: 16 },
    passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#CFCFCF', borderRadius: 15, paddingHorizontal: 15 },
    passwordInput: { flex: 1, paddingVertical: 12, fontSize: 16 },
    eyeIcon: { padding: 5 },
    mainButton: { backgroundColor: '#6A0DAD', width: '80%', paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginTop: 10, marginBottom: 20 },
    mainButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
});