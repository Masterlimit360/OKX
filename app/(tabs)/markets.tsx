import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const marketStats = [
  { label: 'Market cap', value: '$3.44T', change: '+0.58%', color: '#4caf50' },
  { label: 'Turnover', value: '$63.03B', change: '-4.52%', color: '#f44336' },
  { label: 'Dominance', value: '61.36%', icon: <FontAwesome name="bitcoin" size={16} color="#f7931a" />, color: '#fff', extra: 'Bitcoin' },
];

const cryptoList = [
  { symbol: 'BTC', pair: 'USDT', name: 'Bitcoin' },
  { symbol: 'ETH', pair: 'USDT', name: 'Ethereum' },
  { symbol: 'OKB', pair: 'USDT', name: 'OKB' },
  { symbol: 'XRP', pair: 'USDT', name: 'XRP' },
  { symbol: 'SOL', pair: 'USDT', name: 'Solana' },
  { symbol: 'DOGE', pair: 'USDT', name: 'Dogecoin' },
  { symbol: 'ADA', pair: 'USDT', name: 'Cardano' },
  { symbol: 'SUI', pair: 'USDT', name: 'Sui' },
];

export default function MarketsScreen() {
  const [topTab, setTopTab] = useState('Markets');
  const [subTab, setSubTab] = useState('Favorites');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="flame" size={18} color="#ff9800" />
        <TextInput
          style={styles.searchInput}
          placeholder="SOL frequently traded"
          placeholderTextColor="#888"
        />
      </View>

      {/* Top Tabs */}
      <View style={styles.topTabsRow}>
        {['Markets', 'Feed', 'Leaderboard'].map((item) => (
          <TouchableOpacity
            key={item}
            style={styles.topTabBtn}
            onPress={() => setTopTab(item)}
          >
            <Text style={[styles.topTabText, topTab === item && styles.topTabTextActive]}>{item}</Text>
            {topTab === item && <View style={styles.topTabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Market Stats */}
      <View style={styles.statsRow}>
        {marketStats.map((stat, idx) => (
          <View key={idx} style={styles.statCard}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <View style={{ flexDirection: 'row', alignItems: 'center', marginTop: 2 }}>
              <Text style={styles.statValue}>{stat.value}</Text>
              {stat.icon && <View style={{ marginLeft: 4 }}>{stat.icon}</View>}
            </View>
            <Text style={[styles.statChange, { color: stat.color }]}>{stat.change || stat.extra}</Text>
          </View>
        ))}
      </View>

      {/* Info Banner */}
      <View style={styles.infoBanner}>
        <Ionicons name="alert-circle-outline" size={16} color="#fff" />
        <Text style={styles.infoBannerText}>Core Inflation Rate MoM (U.S.) is scheduled for...</Text>
      </View>

      {/* Sub Tabs */}
      <View style={styles.subTabsRow}>
        {['Favorites', 'Spot', 'Futures', 'Options'].map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.subTabBtn, subTab === item && styles.subTabBtnActive]}
            onPress={() => setSubTab(item)}
          >
            <Text style={[styles.subTabText, subTab === item && styles.subTabTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Select Crypto Title */}
      <Text style={styles.selectCryptoTitle}>Select crypto</Text>

      {/* Crypto Grid */}
      <View style={styles.cryptoGrid}>
        {cryptoList.map((crypto, idx) => (
          <View key={idx} style={styles.cryptoCard}>
            <View style={{ flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
              <View>
                <Text style={styles.cryptoSymbol}>{crypto.symbol}<Text style={styles.cryptoPair}>/{crypto.pair}</Text></Text>
                <Text style={styles.cryptoName}>{crypto.name}</Text>
              </View>
              <Ionicons name="checkmark-circle" size={22} color="#fff" />
            </View>
          </View>
        ))}
      </View>

      {/* Add to Favorites Button */}
      <TouchableOpacity style={styles.addFavBtn}>
        <Text style={styles.addFavBtnText}>Add to Favorites</Text>
      </TouchableOpacity>
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
  topTabsRow: {
    flexDirection: 'row', justifyContent: 'flex-start', marginBottom: 18,
  },
  topTabBtn: { marginRight: 32, alignItems: 'center' },
  topTabText: { color: '#aaa', fontSize: 18, fontWeight: 'bold' },
  topTabTextActive: { color: '#fff' },
  topTabUnderline: {
    height: 3, backgroundColor: '#fff', borderRadius: 2, width: 28, marginTop: 4,
  },
  statsRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 12,
  },
  statCard: {
    backgroundColor: '#191f1c', borderRadius: 12, padding: 12, flex: 1, marginRight: 8,
    minWidth: 100,
  },
  statLabel: { color: '#aaa', fontSize: 13 },
  statValue: { color: '#fff', fontWeight: 'bold', fontSize: 17 },
  statChange: { fontSize: 13, marginTop: 2 },
  infoBanner: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 10, padding: 10, marginBottom: 14,
  },
  infoBannerText: { color: '#fff', marginLeft: 8, fontSize: 13 },
  subTabsRow: {
    flexDirection: 'row', marginBottom: 10,
  },
  subTabBtn: {
    paddingVertical: 6, paddingHorizontal: 18, borderRadius: 16,
    backgroundColor: 'transparent', marginRight: 8,
  },
  subTabBtnActive: { backgroundColor: '#222' },
  subTabText: { color: '#aaa', fontSize: 15 },
  subTabTextActive: { color: '#fff', fontWeight: 'bold' },
  selectCryptoTitle: {
    color: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: 10, marginBottom: 10,
  },
  cryptoGrid: {
    flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between',
  },
  cryptoCard: {
    backgroundColor: '#191f1c', borderRadius: 12, padding: 16, width: '48%',
    marginBottom: 12,
  },
  cryptoSymbol: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  cryptoPair: { color: '#aaa', fontSize: 13 },
  cryptoName: { color: '#aaa', fontSize: 13, marginTop: 2 },
  addFavBtn: {
    backgroundColor: '#fff', borderRadius: 24, paddingVertical: 14, alignItems: 'center',
    marginTop: 18,
  },
  addFavBtnText: { color: '#111', fontWeight: 'bold', fontSize: 16 },
});