import React, { useState } from 'react';
import { View, Text, StyleSheet, TextInput, TouchableOpacity, KeyboardAvoidingView, Platform, ScrollView } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';

export default function LoginScreen() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const [hasError, setHasError] = useState(false);

    const handleLogin = () => {
        if (password === 'error') {
            setHasError(true);
        } else {
            setHasError(false);
        }
    };

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
                    <Text style={styles.title}>تسجيل الدخول</Text>
                    

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>البريد الالكتروني او الهاتف</Text>
                        <TextInput
                            style={styles.input}
                            placeholder="ahmad55@gmail.com"
                            value={email}
                            onChangeText={setEmail}
                            keyboardType="email-address"
                            autoCapitalize="none"
                        />
                    </View>

                    <View style={styles.inputGroup}>
                        <Text style={styles.label}>كلمة المرور</Text>
                        <View style={[styles.passwordContainer, hasError && styles.inputError]}>
                            <TouchableOpacity onPress={() => setShowPassword(!showPassword)} style={styles.eyeIcon}>
                                <Ionicons name={showPassword ? "eye-outline" : "eye-off-outline"} size={20} color="#666" />
                            </TouchableOpacity>
                            <TextInput
                                style={styles.passwordInput}
                                placeholder="**************"
                                value={password}
                                onChangeText={(text) => { setPassword(text); setHasError(false); }}
                                secureTextEntry={!showPassword}
                            />
                        </View>
                        {hasError && <Text style={styles.errorText}>كلمة المرور غير صحيحة</Text>}
                    </View>

                    <TouchableOpacity onPress={() => router.push('/auth/reset-password')} style={styles.forgotPasswordContainer}>
                        <Text style={styles.forgotPasswordText}>هل نسيت كلمة المرور ؟</Text>
                    </TouchableOpacity>

                    <TouchableOpacity style={[styles.mainButton, hasError && styles.mainButtonDisabled]} onPress={handleLogin}>
                        <Text style={styles.mainButtonText}>تسجيل الدخول</Text>
                    </TouchableOpacity>

                    <View style={styles.fingerprintContainer}>
                        <TouchableOpacity style={styles.fingerprintBtn}>
                            <Ionicons name="finger-print-outline" size={40} color="#6A0DAD" />
                            <Text style={styles.fingerprintText}>طرق دخول اخرى</Text>
                        </TouchableOpacity>
                    </View>
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
    title: { fontSize: 24, fontWeight: 'bold', color: '#333', marginBottom: 30, marginTop: 10 },
    inputGroup: { width: '100%', marginBottom: 20 },
    label: { textAlign: 'right', fontSize: 16, fontWeight: 'bold', color: '#333', marginBottom: 8 },
    input: { backgroundColor: '#CFCFCF', borderRadius: 15, paddingHorizontal: 20, paddingVertical: 15, fontSize: 16, textAlign: 'right' },
    passwordContainer: { flexDirection: 'row', alignItems: 'center', backgroundColor: '#CFCFCF', borderRadius: 15, paddingHorizontal: 15 },
    passwordInput: { flex: 1, paddingVertical: 15, fontSize: 16, textAlign: 'right' },
    eyeIcon: { padding: 5 },
    inputError: { borderWidth: 1, borderColor: '#D32F2F', backgroundColor: '#EAC8C8' },
    errorText: { color: '#D32F2F', textAlign: 'center', marginTop: 5, fontSize: 12, fontWeight: 'bold' },
    forgotPasswordContainer: { width: '100%', alignItems: 'flex-start', marginBottom: 30 }, // flex-start لأن الـ card فيه alignItems: center
    forgotPasswordText: { color: '#6A0DAD', fontSize: 14, fontWeight: 'bold' },
    mainButton: { backgroundColor: '#6A0DAD', width: '80%', paddingVertical: 15, borderRadius: 25, alignItems: 'center', marginBottom: 30 },
    mainButtonDisabled: { backgroundColor: '#A885C4' }, // لون أبهت عند الخطأ
    mainButtonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' },
    fingerprintContainer: { alignItems: 'center' },
    fingerprintBtn: { alignItems: 'center' },
    fingerprintText: { color: '#333', fontSize: 14, marginTop: 5 },
});