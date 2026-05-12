import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function ChangePasswordScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>إنشاء كلمة المرور</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* Card */}
      <View style={styles.card}>
        <Text style={styles.label}>كلمة المرور الحالية</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          style={styles.input}
        />

        <Text style={styles.label}>كلمة المرور الجديدة</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          style={styles.input}
        />

        <Text style={styles.label}>تأكيد كلمة المرور الجديدة</Text>
        <TextInput
          placeholder="********"
          secureTextEntry
          style={styles.input}
        />

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>تغيير كلمة المرور</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#8E24AA",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    paddingTop: 30,
    paddingBottom: 30,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  card: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    padding: 20,
  },

  label: {
    fontSize: 15,
    color: "#4A148C",
    marginBottom: 8,
    textAlign: "right",
  },

  input: {
    backgroundColor: "#E0E0E0",
    borderRadius: 12,
    padding: 14,
    marginBottom: 18,
    textAlign: "right",
  },

  button: {
    backgroundColor: "#8E24AA",
    padding: 15,
    borderRadius: 25,
    marginTop: 20,
    alignItems: "center",
  },

  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
});