import React from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
} from "react-native";
import { StatusBar } from "expo-status-bar";

const services = [
  { icon: "✈️", title: "Flights" },
  { icon: "🕋", title: "Umrah" },
  { icon: "🏨", title: "Hotels" },
  { icon: "🚐", title: "Airport Transfer" },
  { icon: "🎫", title: "My Bookings" },
  { icon: "🔥", title: "Offers" },
];

export default function App() {
  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar style="light" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        <View style={styles.header}>
          <View>
            <Text style={styles.logoText}>MIR</Text>
            <Text style={styles.brand}>INTERNATIONAL</Text>
            <Text style={styles.subBrand}>TOUR & TRAVELS</Text>
          </View>

          <TouchableOpacity style={styles.profile}>
            <Text style={styles.profileText}>👤</Text>
          </TouchableOpacity>
        </View>

        <View style={styles.hero}>
          <Text style={styles.smallGold}>WELCOME TO</Text>
          <Text style={styles.heroTitle}>MIR International</Text>
          <Text style={styles.heroText}>
            Your journey, our responsibility.
          </Text>
          <Text style={styles.heroServices}>
            Flights • Hotels • Visa • Umrah • Transfers
          </Text>
        </View>

        <Text style={styles.sectionTitle}>Book Your Journey</Text>

        <View style={styles.grid}>
          {services.map((item) => (
            <TouchableOpacity
              key={item.title}
              style={styles.card}
              activeOpacity={0.8}
            >
              <Text style={styles.icon}>{item.icon}</Text>
              <Text style={styles.cardTitle}>{item.title}</Text>
            </TouchableOpacity>
          ))}
        </View>

        <Text style={styles.sectionTitle}>Popular Routes</Text>

        <TouchableOpacity style={styles.route}>
          <View>
            <Text style={styles.routeTitle}>Delhi → Bishkek</Text>
            <Text style={styles.routeText}>International Flight</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <TouchableOpacity style={styles.route}>
          <View>
            <Text style={styles.routeTitle}>Kolkata → Dubai</Text>
            <Text style={styles.routeText}>International Flight</Text>
          </View>
          <Text style={styles.arrow}>›</Text>
        </TouchableOpacity>

        <View style={styles.help}>
          <Text style={styles.helpTitle}>Need Help?</Text>
          <Text style={styles.helpText}>
            Our travel team is ready to assist you.
          </Text>
          <TouchableOpacity style={styles.button}>
            <Text style={styles.buttonText}>Contact Support</Text>
          </TouchableOpacity>
        </View>

        <Text style={styles.footer}>
          © MIR International Tour & Travels
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#071A2B",
  },

  container: {
    padding: 18,
    paddingBottom: 40,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 24,
  },

  logoText: {
    color: "#C69A32",
    fontSize: 28,
    fontWeight: "900",
  },

  brand: {
    color: "#FFFFFF",
    fontSize: 14,
    fontWeight: "900",
    letterSpacing: 1,
  },

  subBrand: {
    color: "#C69A32",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },

  profile: {
    width: 42,
    height: 42,
    borderRadius: 21,
    backgroundColor: "#102B43",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    fontSize: 20,
  },

  hero: {
    backgroundColor: "#102B43",
    borderRadius: 20,
    padding: 22,
    marginBottom: 28,
  },

  smallGold: {
    color: "#C69A32",
    fontSize: 11,
    fontWeight: "800",
    letterSpacing: 1,
  },

  heroTitle: {
    color: "#FFFFFF",
    fontSize: 25,
    fontWeight: "900",
    marginTop: 5,
  },

  heroText: {
    color: "#D7E2ED",
    fontSize: 14,
    marginTop: 8,
  },

  heroServices: {
    color: "#9FB3C8",
    fontSize: 12,
    marginTop: 14,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "900",
    marginBottom: 13,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 25,
  },

  card: {
    width: "31.5%",
    backgroundColor: "#102B43",
    borderRadius: 16,
    paddingVertical: 18,
    alignItems: "center",
    marginBottom: 12,
  },

  icon: {
    fontSize: 27,
  },

  cardTitle: {
    color: "#FFFFFF",
    fontSize: 11,
    fontWeight: "700",
    textAlign: "center",
    marginTop: 8,
  },

  route: {
    backgroundColor: "#102B43",
    borderRadius: 16,
    padding: 17,
    marginBottom: 11,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },

  routeTitle: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "800",
  },

  routeText: {
    color: "#9FB3C8",
    fontSize: 12,
    marginTop: 5,
  },

  arrow: {
    color: "#C69A32",
    fontSize: 30,
  },

  help: {
    backgroundColor: "#102B43",
    borderRadius: 16,
    padding: 19,
    marginTop: 15,
  },

  helpTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  helpText: {
    color: "#9FB3C8",
    fontSize: 13,
    marginTop: 6,
  },

  button: {
    borderWidth: 1,
    borderColor: "#C69A32",
    borderRadius: 11,
    paddingVertical: 12,
    alignItems: "center",
    marginTop: 16,
  },

  buttonText: {
    color: "#C69A32",
    fontWeight: "800",
  },

  footer: {
    textAlign: "center",
    color: "#71879B",
    fontSize: 11,
    marginTop: 30,
  },
});
