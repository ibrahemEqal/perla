import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import { router } from "expo-router";
import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function SettingsScreen() {
  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity>
          <Ionicons name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>الإعدادات</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* Card */}
      <View style={styles.card}>
        {/* Notifications */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("/settings/notifications")}
        >
          <View style={styles.right}>
            <Ionicons
              name="notifications-outline"
              size={24}
              color="#4A148C"
            />
            <Text style={styles.text}>إعدادات الإشعارات</Text>
          </View>
        </TouchableOpacity>

        {/* Password */}
        <TouchableOpacity
          style={styles.row}
          onPress={() => router.push("/settings/change-password")}
        >
          <View style={styles.right}>
            <MaterialCommunityIcons
              name="key-outline"
              size={24}
              color="#4A148C"
            />
            <Text style={styles.text}>إعداد كلمة المرور</Text>
          </View>
        </TouchableOpacity>

        {/* Delete */}
        <TouchableOpacity style={styles.row}>
          <View style={styles.right}>
            <Feather name="user" size={24} color="#4A148C" />
            <Text style={styles.text}>حذف الحساب</Text>
          </View>
        </TouchableOpacity>
      </View>

      {/* Bottom Bar */}
     <View style={styles.bottomWrapper}>
  <View style={styles.bottomBar}>
    <Ionicons name="headset-outline" size={22} color="#B08BC7" />
    <Ionicons name="cart-outline" size={22} color="#B08BC7" />
    <Ionicons name="home-outline" size={22} color="#B08BC7" />
    <Ionicons name="person-outline" size={22} color="#B08BC7" />
    <Ionicons name="menu-outline" size={24} color="#B08BC7" />
  </View>
  </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#7B1FA2",
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingHorizontal: 20,
    marginTop: 30,
    marginBottom: 30,
  },

  title: {
    color: "#fff",
    fontSize: 20,
    fontWeight: "700",
  },

  card: {
    flex: 1,
    backgroundColor: "#F5F5F5",
    borderTopLeftRadius: 32,
    borderTopRightRadius: 32,
    paddingHorizontal: 20,
    paddingTop: 30,
  },

  row: {
    paddingVertical: 20,
  },

  right: {
    flexDirection: "row-reverse", // عشان RTL
    alignItems: "center",
    gap: 12,
  },

  text: {
    fontSize: 18,
    color: "#4A148C",
    fontWeight: "500",
  },

  bottomBar: {
    height: 70,
    backgroundColor: "#fff", // صارت أبيض بدل بنفسجي
    borderTopLeftRadius: 24,
    borderTopRightRadius: 24,
    flexDirection: "row",
    justifyContent: "space-around",
    alignItems: "center",
  },

  bottomWrapper: {
  backgroundColor: "#fff",
},
});