import { View, Text, StyleSheet, Switch, TouchableOpacity } from "react-native";
import { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";
import { router } from "expo-router";

export default function NotificationsScreen() {
  const [general, setGeneral] = useState(true);
  const [sound, setSound] = useState(true);
  const [offers, setOffers] = useState(false);
  const [payments, setPayments] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => router.back()}>
          <Ionicons name="chevron-back" size={26} color="#fff" />
        </TouchableOpacity>

        <Text style={styles.title}>إعدادات الإشعارات</Text>

        <View style={{ width: 26 }} />
      </View>

      {/* Card */}
      <View style={styles.card}>
        <View style={styles.row}>
          <Text style={styles.text}>إشعار عام</Text>
          <Switch value={general} onValueChange={setGeneral} />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>الصوت</Text>
          <Switch value={sound} onValueChange={setSound} />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>عروض خاصة</Text>
          <Switch value={offers} onValueChange={setOffers} />
        </View>

        <View style={styles.row}>
          <Text style={styles.text}>المدفوعات</Text>
          <Switch value={payments} onValueChange={setPayments} />
        </View>
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

  row: {
    flexDirection: "row-reverse",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 18,
  },

  text: {
    fontSize: 18,
    color: "#4A148C",
  },
});