import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function ExploreScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search crypto"
          placeholderTextColor="#888"
        />
        <Ionicons name="gift-outline" size={22} color="#fff" style={{ marginLeft: 12 }} />
        <Ionicons name="notifications-outline" size={22} color="#fff" style={{ marginLeft: 8 }} />
      </View>

      {/* Yield Card */}
      <View style={styles.yieldCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-start' }}>
          <Text style={styles.yieldTitle}>Earn <Text style={{ color: '#caff4d' }}>0.75% - 20%</Text>{'\n'}annual yield</Text>
          <TouchableOpacity>
            <Ionicons name="close" size={20} color="#aaa" />
          </TouchableOpacity>
        </View>
        <Text style={styles.yieldDesc}>
          Your crypto earns steady returns, with{'\n'}principal protected from volatility.
        </Text>
        <View style={{ flexDirection: 'row', marginTop: 10, marginBottom: 16 }}>
          <View style={styles.yieldTag}>
            <MaterialIcons name="waves" size={16} color="#aaa" style={{ marginRight: 4 }} />
            <Text style={styles.yieldTagText}>Shark Fin</Text>
          </View>
          <View style={[styles.yieldTag, { marginLeft: 8 }]}>
            <Text style={styles.yieldTagText}>Ends in 10:50:17</Text>
          </View>
        </View>
        <TouchableOpacity style={styles.yieldBtn}>
          <Text style={styles.yieldBtnText}>Explore now</Text>
        </TouchableOpacity>
      </View>

      {/* Carousel Dots */}
      <View style={styles.carouselDots}>
        <View style={styles.dotActive} />
        <View style={styles.dot} />
        <View style={styles.dot} />
      </View>

      {/* Quick Actions */}
      <View style={styles.quickRow}>
        <View style={styles.quickItem}><View style={styles.quickCircle} /><Text style={styles.quickText}>Simple Earn</Text></View>
        <View style={styles.quickItem}><View style={styles.quickCircle} /><Text style={styles.quickText}>On-chain Earn</Text></View>
        <View style={styles.quickItem}><View style={styles.quickCircle} /><Text style={styles.quickText}>Loan</Text></View>
        <View style={styles.quickItem}><View style={styles.quickCircle} /><Text style={styles.quickText}>Trading Bot</Text></View>
      </View>

      {/* Earn Section */}
      <TouchableOpacity style={styles.earnHeader}>
        <Text style={styles.earnTitle}>Earn</Text>
        <Ionicons name="chevron-forward" size={20} color="#fff" />
      </TouchableOpacity>
      <View style={styles.earnCard}>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 }}>
          <View>
            <Text style={styles.earnLabel}>Yesterdays earnings</Text>
            <Text style={styles.earnValue}>0.00 USD <Ionicons name="chevron-forward" size={14} color="#fff" /></Text>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={styles.earnLabel}>Total earnings</Text>
            <Text style={styles.earnValue}>0.00 USD</Text>
          </View>
        </View>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={styles.earnLabel}>Earn holdings</Text>
            <Text style={styles.earnValue}>0.00 USD</Text>
          </View>
          <View style={styles.earnFooterRow}>
            <Text style={styles.earnFooterText}>USDT</Text>
            <View style={styles.bonusTag}><Text style={styles.bonusTagText}>Bonus</Text></View>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 16 },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, marginTop: 16, marginBottom: 18,
  },
  searchInput: { color: '#fff', marginLeft: 8, flex: 1, fontSize: 15 },
  yieldCard: {
    backgroundColor: '#222', borderRadius: 18, padding: 18, marginBottom: 14,
  },
  yieldTitle: { color: '#fff', fontWeight: 'bold', fontSize: 22, marginBottom: 4 },
  yieldDesc: { color: '#aaa', fontSize: 14, marginTop: 2 },
  yieldTag: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#333',
    borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4,
  },
  yieldTagText: { color: '#aaa', fontSize: 13 },
  yieldBtn: {
    backgroundColor: '#caff4d', borderRadius: 24, paddingVertical: 12, alignItems: 'center',
  },
  yieldBtnText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
  carouselDots: {
    flexDirection: 'row', justifyContent: 'center', alignItems: 'center', marginBottom: 18,
  },
  dot: {
    width: 7, height: 7, borderRadius: 4, backgroundColor: '#333', marginHorizontal: 3,
  },
  dotActive: {
    width: 18, height: 7, borderRadius: 4, backgroundColor: '#fff', marginHorizontal: 3,
  },
  quickRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 24,
  },
  quickItem: { alignItems: 'center', width: '24%' },
  quickCircle: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: '#222', marginBottom: 6,
  },
  quickText: { color: '#fff', fontSize: 13, textAlign: 'center' },
  earnHeader: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginBottom: 10,
  },
  earnTitle: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
  earnCard: {
    backgroundColor: '#222', borderRadius: 16, padding: 16, marginBottom: 18,
  },
  earnLabel: { color: '#aaa', fontSize: 13 },
  earnValue: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: 2 },
  earnFooterRow: { flexDirection: 'row', alignItems: 'center', gap: 8 },
  earnFooterText: { color: '#fff', fontWeight: 'bold', fontSize: 15, marginRight: 8 },
  bonusTag: {
    backgroundColor: '#caff4d', borderRadius: 8, paddingHorizontal: 8, paddingVertical: 2,
  },
  bonusTagText: { color: '#111', fontWeight: 'bold', fontSize: 12 },
});