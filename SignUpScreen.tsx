import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Switch, Alert, StyleSheet } from 'react-native';
import { registerUser } from './authService';

interface SignUpScreenProps {
    navigation: any; 
}

export default function SignUpScreen({ navigation }: SignUpScreenProps) {
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');
    const [isMerchant, setIsMerchant] = useState<boolean>(false);
    const [shopName, setShopName] = useState<string>('');

    const handleRegister = async (): Promise<void> => {
        if (isMerchant && shopName.trim() === '') {
            Alert.alert('تنبيه', 'الرجاء إدخال اسم المحل التجاري أو الشركة');
            return;
        }

        const result = await registerUser(email, password, isMerchant, shopName);

        if (result.success) {
            Alert.alert('نجاح', 'تم إنشاء الحساب بنجاح!');

            if (result.role === 'merchant') {
                // navigation.navigate('MerchantDashboard');
            } else {
                // navigation.navigate('CustomerStore');
            }
        } else {
            Alert.alert('خطأ', result.error || 'حدث خطأ غير معروف');
        }
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>إنشاء حساب جديد</Text>

            <TextInput
                style={styles.input}
                placeholder="البريد الإلكتروني"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
            />

            <TextInput
                style={styles.input}
                placeholder="كلمة المرور"
                value={password}
                onChangeText={setPassword}
                secureTextEntry
            />

            <View style={styles.switchContainer}>
                <Text style={styles.switchLabel}>هل أنت تاجر / صاحب سوبرماركت؟</Text>
                <Switch
                    value={isMerchant}
                    // TypeScript يعرف تلقائياً أن value هنا من نوع boolean
                    onValueChange={(value: boolean) => setIsMerchant(value)}
                    trackColor={{ false: "#767577", true: "#81b0ff" }}
                    thumbColor={isMerchant ? "#f5dd4b" : "#f4f3f4"}
                />
            </View>

            {isMerchant && (
                <TextInput
                    style={styles.input}
                    placeholder="اسم المحل التجاري"
                    value={shopName}
                    onChangeText={setShopName}
                />
            )}

            <TouchableOpacity style={styles.button} onPress={handleRegister}>
                <Text style={styles.buttonText}>تسجيل</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: { flex: 1, padding: 20, justifyContent: 'center', backgroundColor: '#fff' },
    title: { fontSize: 24, fontWeight: 'bold', marginBottom: 30, textAlign: 'center', color: '#6A0DAD' },
    input: { borderWidth: 1, borderColor: '#ccc', padding: 15, borderRadius: 8, marginBottom: 15, textAlign: 'right' },
    switchContainer: { flexDirection: 'row-reverse', alignItems: 'center', justifyContent: 'space-between', marginBottom: 20, paddingHorizontal: 5 },
    switchLabel: { fontSize: 16, fontWeight: 'bold' },
    button: { backgroundColor: '#6A0DAD', padding: 15, borderRadius: 8, alignItems: 'center' },
    buttonText: { color: '#fff', fontSize: 18, fontWeight: 'bold' }
});