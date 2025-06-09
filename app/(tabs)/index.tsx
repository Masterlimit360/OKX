import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const assets = [
  { symbol: 'RESOLV', pair: 'USDT', date: '06/10, 12:00', upcoming: true },
  { symbol: 'KMNO', pair: 'USDT', date: '05/30/2025', price: '0.05377', change: '+1.47%' },
  { symbol: 'SOPH', pair: 'USDT', date: '05/28/2025', price: '0.05166', change: '+3.09%' },
];

export default function HomeScreen() {
  const [tab, setTab] = useState('New');
  const [marketType, setMarketType] = useState('Spot');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.header}>
        <Ionicons name="menu" size={28} color="#fff" />
        <TouchableOpacity style={styles.exchangeBtn}>
          <Text style={styles.exchangeText}>Exchange</Text>
          <Ionicons name="chevron-down" size={18} color="#fff" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <Ionicons name="notifications-outline" size={24} color="#fff" />
          <Ionicons name="chatbubble-ellipses-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="flame" size={18} color="#ff9800" />
        <TextInput
          style={styles.searchInput}
          placeholder="Pl commonly searched"
          placeholderTextColor="#888"
        />
      </View>

      {/* Verification Prompt */}
      <View style={styles.verifyCard}>
        <Text style={styles.verifyTitle}>Get verified to{'\n'}secure your account</Text>
        <Text style={styles.verifyDesc}>Provide your ID, a selfie, and personal information.</Text>
        <TouchableOpacity style={styles.verifyBtn}>
          <Text style={styles.verifyBtnText}>Get verified</Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard Card */}
      <View style={styles.leaderboardCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 8 }}>
          <Ionicons name="trophy-outline" size={20} color="#fff" />
          <Text style={{ color: '#fff', fontWeight: 'bold' }}>Leaderboard</Text>
        </View>
        <Text style={styles.leaderboardProgress}>8/11</Text>
        <Text style={styles.leaderboardDesc}>Discover top traders and unlock new market opportunities</Text>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {['Favorites', 'Hot', 'Gainers', 'New'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.tabBtn, tab === item && styles.tabBtnActive]}
            onPress={() => setTab(item)}
          >
            <Text style={[styles.tabText, tab === item && styles.tabTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Spot/Futures Toggle */}
      <View style={styles.marketTypeRow}>
        {['Spot', 'Futures'].map((type) => (
          <TouchableOpacity
            key={type}
            style={[styles.marketTypeBtn, marketType === type && styles.marketTypeBtnActive]}
            onPress={() => setMarketType(type)}
          >
            <Text style={[styles.marketTypeText, marketType === type && styles.marketTypeTextActive]}>{type}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Asset List */}
      <View style={{ marginTop: 12 }}>
        {assets.map((asset, idx) => (
          <View key={idx} style={styles.assetRow}>
            <View style={{ flex: 1 }}>
              <Text style={styles.assetSymbol}>{asset.symbol} <Text style={styles.assetPair}>/ {asset.pair}</Text></Text>
              <Text style={styles.assetDate}>{asset.date}</Text>
            </View>
            {asset.upcoming ? (
              <View style={styles.upcomingBox}>
                <Ionicons name="time-outline" size={14} color="#fff" />
                <Text style={styles.upcomingText}>1D : 13 : 31 : 19</Text>
              </View>
            ) : (
              <View style={{ alignItems: 'flex-end' }}>
                <Text style={styles.assetPrice}>{asset.price}</Text>
                <Text style={styles.assetChange}>{asset.change}</Text>
              </View>
            )}
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 16 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginTop: 16, marginBottom: 16,
  },
  exchangeBtn: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6,
  },
  exchangeText: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginRight: 4 },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 18,
  },
  searchInput: { color: '#fff', marginLeft: 8, flex: 1, fontSize: 15 },
  verifyCard: {
    backgroundColor: '#191f1c', borderRadius: 16, padding: 18, marginBottom: 16,
    alignItems: 'center',
  },
  verifyTitle: { color: '#fff', fontWeight: 'bold', fontSize: 22, textAlign: 'center', marginBottom: 8 },
  verifyDesc: { color: '#aaa', fontSize: 14, textAlign: 'center', marginBottom: 14 },
  verifyBtn: {
    backgroundColor: '#caff4d', borderRadius: 24, paddingVertical: 10, paddingHorizontal: 32,
  },
  verifyBtnText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
  leaderboardCard: {
    backgroundColor: '#222', borderRadius: 14, padding: 14, marginBottom: 16,
  },
  leaderboardProgress: {
    position: 'absolute', right: 14, top: 14, color: '#aaa', backgroundColor: '#333',
    borderRadius: 10, paddingHorizontal: 8, paddingVertical: 2, fontSize: 12,
  },
  leaderboardDesc: { color: '#aaa', fontSize: 13, marginTop: 8 },
  tabsRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 10,
  },
  tabBtn: {
    paddingVertical: 6, paddingHorizontal: 14, borderRadius: 16,
    backgroundColor: 'transparent',
  },
  tabBtnActive: { backgroundColor: '#222' },
  tabText: { color: '#aaa', fontSize: 15 },
  tabTextActive: { color: '#fff', fontWeight: 'bold' },
  marketTypeRow: {
    flexDirection: 'row', marginBottom: 10,
  },
  marketTypeBtn: {
    paddingVertical: 4, paddingHorizontal: 16, borderRadius: 14,
    backgroundColor: 'transparent', marginRight: 8,
  },
  marketTypeBtnActive: { backgroundColor: '#222' },
  marketTypeText: { color: '#aaa', fontSize: 14 },
  marketTypeTextActive: { color: '#fff', fontWeight: 'bold' },
  assetRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#181818', borderRadius: 12, padding: 14, marginBottom: 10,
  },
  assetSymbol: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  assetPair: { color: '#aaa', fontSize: 13 },
  assetDate: { color: '#aaa', fontSize: 12, marginTop: 2 },
  upcomingBox: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#333',
    borderRadius: 10, paddingHorizontal: 10, paddingVertical: 4,
  },
  upcomingText: { color: '#fff', fontSize: 12, marginLeft: 4 },
  assetPrice: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  assetChange: {
    color: '#111', backgroundColor: '#caff4d', borderRadius: 8,
    paddingHorizontal: 8, paddingVertical: 2, fontWeight: 'bold', fontSize: 13, marginTop: 4,
  },
});