import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function ResetPasswordScreen() {
    const [showPassword1, setShowPassword1] = useState(false);
    const [showPassword2, setShowPassword2] = useState(false);

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
                    <Text style={styles.title}>وضع كلمة مرور جديدة</Text>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>كلمة المرور</Text>
                        <View style={styles.passwordContainer}>
                            <TouchableOpacity onPress={() => setShowPassword1(!showPassword1)} style={styles.eyeIcon}>
                                <Ionicons name={showPassword1 ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
                            </TouchableOpacity>
                            <TextInput style={styles.passwordInput} placeholder="**************" secureTextEntry={!showPassword1} textAlign="right" />
                        </View>
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>تأكيد كلمة المرور</Text>
                        <View style={styles.passwordContainer}>
                            <TouchableOpacity onPress={() => setShowPassword2(!showPassword2)} style={styles.eyeIcon}>
                                <Ionicons name={showPassword2 ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
                            </TouchableOpacity>
                            <TextInput style={styles.passwordInput} placeholder="**************" secureTextEntry={!showPassword2} textAlign="right" />
                        </View>
                    </View>

                    <TouchableOpacity style={styles.mainButton} onPress={() => router.replace('/auth/login')}>
                        <Text style={styles.mainButtonText}>انشاء كلمة مرور جديدة</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </KeyboardAvoidingView>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, backgroundColor: '#6A0DAD' },
    header: { height: 180, justifyContent: 'center', alignItems: 'center', position: 'relative' },
    backButton: { position: 'absolute', top: 50, left: 20, zIndex: 10 },
    logoText: { color: '#fff', fontSize: 40, fontWeight: 'bold', fontStyle: 'italic' },
    scrollContent: { flexGrow: 1 },
    card: { flex: 1, backgroundColor: '#F9F9F9', borderTopLeftRadius: 40, borderTopRightRadius: 40, padding: 30, alignItems: 'center' },
    title: { fontSize: 22, fontWeight: 'bold', color: '#333', marginBottom: 40, marginTop: 20 },
    inputGroup: { width: '100%', marginBottom: 25 },
    label: { textAlign: 'right', fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 8 },
    passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#CFCFCF', borderRadius: 15, paddingHorizontal: 15 },
    passwordInput: { flex: 1, paddingVertical: 15, fontSize: 16 },
    eyeIcon: { padding: 5 },
    mainButton: { backgroundColor: '#6A0DAD', width: '90%', paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginTop: 30 },
    mainButtonText: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});