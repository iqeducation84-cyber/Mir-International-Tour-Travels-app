import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  StatusBar,
} from "react-native";

const services = [
  { icon: "✈️", title: "Flights", subtitle: "Book your journey" },
  { icon: "🕋", title: "Umrah", subtitle: "Complete packages" },
  { icon: "🏨", title: "Hotels", subtitle: "Stay with comfort" },
  { icon: "🚐", title: "Airport Transfer", subtitle: "Easy & reliable" },
  { icon: "📋", title: "My Bookings", subtitle: "Manage bookings" },
  { icon: "🎁", title: "Offers", subtitle: "Special deals" },
];

const routes = [
  { from: "Delhi", to: "Bishkek", code: "DEL → BSZ" },
  { from: "Kolkata", to: "Dubai", code: "CCU → DXB" },
];

export default function App() {
  const [screen, setScreen] = useState("home");

  if (screen === "flights") {
    return (
      <SafeAreaView style={styles.safe}>
        <StatusBar barStyle="light-content" backgroundColor="#061525" />

        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={styles.container}
        >
          {/* Flight Header */}
          <View style={styles.flightHeader}>
            <TouchableOpacity
              style={styles.backButton}
              onPress={() => setScreen("home")}
            >
              <Text style={styles.backText}>←</Text>
            </TouchableOpacity>

            <Text style={styles.flightHeaderTitle}>Flight Booking</Text>

            <View style={{ width: 44 }} />
          </View>

          {/* Title */}
          <View style={styles.flightIntro}>
            <Text style={styles.flightIcon}>✈️</Text>
            <Text style={styles.flightTitle}>Find Your Flight</Text>
            <Text style={styles.flightDescription}>
              Search and book your next journey with MIR International.
            </Text>
          </View>

          {/* From */}
          <View style={styles.inputCard}>
            <Text style={styles.inputLabel}>FROM</Text>
            <Text style={styles.inputValue}>Delhi (DEL)</Text>
          </View>

          {/* To */}
          <View style={styles.inputCard}>
            <Text style={styles.inputLabel}>TO</Text>
            <Text style={styles.inputValue}>Bishkek (BSZ)</Text>
          </View>

          {/* Date */}
          <View style={styles.inputCard}>
            <Text style={styles.inputLabel}>TRAVEL DATE</Text>
            <Text style={styles.inputValue}>Select Date</Text>
          </View>

          {/* Passengers */}
          <View style={styles.inputCard}>
            <Text style={styles.inputLabel}>PASSENGERS</Text>
            <Text style={styles.inputValue}>1 Adult</Text>
          </View>

          {/* Search */}
          <TouchableOpacity style={styles.searchButton}>
            <Text style={styles.searchButtonText}>Search Flights</Text>
          </TouchableOpacity>

          <Text style={styles.flightNote}>
            More flight options and booking features will be added next.
          </Text>
        </ScrollView>
      </SafeAreaView>
    );
  }

  return (
    <SafeAreaView style={styles.safe}>
      <StatusBar barStyle="light-content" backgroundColor="#061525" />

      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}
      >
        {/* Header */}
        <View style={styles.header}>
          <View>
            <Text style={styles.brand}>MIR INTERNATIONAL</Text>
            <Text style={styles.brandSub}>TOUR & TRAVELS</Text>
          </View>

          <TouchableOpacity style={styles.profile}>
            <Text style={styles.profileText}>👤</Text>
          </TouchableOpacity>
        </View>

        {/* Welcome */}
        <View style={styles.welcome}>
          <Text style={styles.smallText}>WELCOME TO</Text>

          <Text style={styles.welcomeTitle}>
            Your Journey Starts Here
          </Text>

          <Text style={styles.welcomeDescription}>
            Flights, hotels, Umrah and travel services — all in one place.
          </Text>

          <TouchableOpacity style={styles.primaryButton}>
            <Text style={styles.primaryButtonText}>
              Explore Services →
            </Text>
          </TouchableOpacity>
        </View>

        {/* Services */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Our Services</Text>
          <Text style={styles.viewAll}>View all</Text>
        </View>

        <View style={styles.grid}>
          {services.map((service) => (
            <TouchableOpacity
              key={service.title}
              style={styles.serviceCard}
              onPress={() => {
                if (service.title === "Flights") {
                  setScreen("flights");
                }
              }}
            >
              <View style={styles.iconBox}>
                <Text style={styles.icon}>{service.icon}</Text>
              </View>

              <Text style={styles.serviceTitle}>
                {service.title}
              </Text>

              <Text style={styles.serviceSubtitle}>
                {service.subtitle}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Popular Routes */}
        <View style={styles.sectionHeader}>
          <Text style={styles.sectionTitle}>Popular Routes</Text>
        </View>

        {routes.map((route) => (
          <TouchableOpacity
            key={route.code}
            style={styles.routeCard}
            onPress={() => setScreen("flights")}
          >
            <View>
              <Text style={styles.routeCode}>{route.code}</Text>

              <Text style={styles.routeText}>
                {route.from} → {route.to}
              </Text>
            </View>

            <Text style={styles.arrow}>→</Text>
          </TouchableOpacity>
        ))}

        {/* Support */}
        <View style={styles.support}>
          <Text style={styles.supportIcon}>💬</Text>

          <View style={styles.supportContent}>
            <Text style={styles.supportTitle}>Need Help?</Text>

            <Text style={styles.supportText}>
              Our travel team is ready to assist you.
            </Text>
          </View>

          <TouchableOpacity style={styles.supportButton}>
            <Text style={styles.supportButtonText}>Contact</Text>
          </TouchableOpacity>
        </View>

        {/* Footer */}
        <Text style={styles.footer}>
          MIR INTERNATIONAL TOUR & TRAVELS
        </Text>

        <Text style={styles.footerSub}>
          Travel • Explore • Experience
        </Text>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  safe: {
    flex: 1,
    backgroundColor: "#061525",
  },

  container: {
    paddingHorizontal: 18,
    paddingTop: 18,
    paddingBottom: 35,
  },

  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 24,
  },

  brand: {
    color: "#FFFFFF",
    fontSize: 20,
    fontWeight: "800",
    letterSpacing: 1,
  },

  brandSub: {
    color: "#8FA7BC",
    fontSize: 11,
    fontWeight: "600",
    letterSpacing: 2,
    marginTop: 3,
  },

  profile: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#102A42",
    alignItems: "center",
    justifyContent: "center",
  },

  profileText: {
    fontSize: 20,
  },

  welcome: {
    backgroundColor: "#0D2942",
    borderRadius: 22,
    padding: 22,
    marginBottom: 28,
    borderWidth: 1,
    borderColor: "#173C5A",
  },

  smallText: {
    color: "#8FA7BC",
    fontSize: 11,
    fontWeight: "700",
    letterSpacing: 2,
  },

  welcomeTitle: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "800",
    marginTop: 8,
    lineHeight: 34,
  },

  welcomeDescription: {
    color: "#AFC0CF",
    fontSize: 14,
    lineHeight: 21,
    marginTop: 10,
  },

  primaryButton: {
    backgroundColor: "#FFFFFF",
    paddingVertical: 13,
    paddingHorizontal: 18,
    borderRadius: 12,
    alignSelf: "flex-start",
    marginTop: 20,
  },

  primaryButtonText: {
    color: "#061525",
    fontSize: 14,
    fontWeight: "800",
  },

  sectionHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },

  sectionTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  viewAll: {
    color: "#8FA7BC",
    fontSize: 13,
  },

  grid: {
    flexDirection: "row",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  serviceCard: {
    width: "48%",
    backgroundColor: "#0B2136",
    borderRadius: 17,
    padding: 15,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#153650",
  },

  iconBox: {
    width: 43,
    height: 43,
    borderRadius: 13,
    backgroundColor: "#132F48",
    alignItems: "center",
    justifyContent: "center",
    marginBottom: 12,
  },

  icon: {
    fontSize: 21,
  },

  serviceTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "700",
  },

  serviceSubtitle: {
    color: "#7890A5",
    fontSize: 11,
    marginTop: 5,
  },

  routeCard: {
    backgroundColor: "#0B2136",
    borderRadius: 16,
    padding: 17,
    marginBottom: 10,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    borderWidth: 1,
    borderColor: "#153650",
  },

  routeCode: {
    color: "#7890A5",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
  },

  routeText: {
    color: "#FFFFFF",
    fontSize: 16,
    fontWeight: "700",
    marginTop: 5,
  },

  arrow: {
    color: "#FFFFFF",
    fontSize: 23,
  },

  support: {
    backgroundColor: "#102A42",
    borderRadius: 18,
    padding: 16,
    marginTop: 18,
    flexDirection: "row",
    alignItems: "center",
  },

  supportIcon: {
    fontSize: 25,
    marginRight: 12,
  },

  supportContent: {
    flex: 1,
  },

  supportTitle: {
    color: "#FFFFFF",
    fontSize: 15,
    fontWeight: "800",
  },

  supportText: {
    color: "#8FA7BC",
    fontSize: 11,
    marginTop: 3,
  },

  supportButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 10,
    paddingVertical: 9,
    paddingHorizontal: 12,
  },

  supportButtonText: {
    color: "#061525",
    fontSize: 12,
    fontWeight: "800",
  },

  /* Flight Screen */

  flightHeader: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginBottom: 28,
  },

  backButton: {
    width: 44,
    height: 44,
    borderRadius: 14,
    backgroundColor: "#102A42",
    alignItems: "center",
    justifyContent: "center",
  },

  backText: {
    color: "#FFFFFF",
    fontSize: 25,
  },

  flightHeaderTitle: {
    color: "#FFFFFF",
    fontSize: 19,
    fontWeight: "800",
  },

  flightIntro: {
    alignItems: "center",
    marginBottom: 28,
  },

  flightIcon: {
    fontSize: 42,
    marginBottom: 12,
  },

  flightTitle: {
    color: "#FFFFFF",
    fontSize: 26,
    fontWeight: "800",
  },

  flightDescription: {
    color: "#8FA7BC",
    fontSize: 13,
    textAlign: "center",
    lineHeight: 20,
    marginTop: 8,
  },

  inputCard: {
    backgroundColor: "#0B2136",
    borderRadius: 16,
    padding: 17,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: "#153650",
  },

  inputLabel: {
    color: "#7890A5",
    fontSize: 10,
    fontWeight: "800",
    letterSpacing: 1,
  },

  inputValue: {
    color: "#FFFFFF",
    fontSize: 17,
    fontWeight: "700",
    marginTop: 7,
  },

  searchButton: {
    backgroundColor: "#FFFFFF",
    borderRadius: 14,
    paddingVertical: 16,
    alignItems: "center",
    marginTop: 8,
  },

  searchButtonText: {
    color: "#061525",
    fontSize: 16,
    fontWeight: "800",
  },

  flightNote: {
    color: "#526B80",
    textAlign: "center",
    fontSize: 11,
    lineHeight: 17,
    marginTop: 20,
  },

  footer: {
    color: "#526B80",
    textAlign: "center",
    fontSize: 10,
    fontWeight: "700",
    letterSpacing: 1,
    marginTop: 32,
  },

  footerSub: {
    color: "#40586C",
    textAlign: "center",
    fontSize: 10,
    marginTop: 6,
  },
});
