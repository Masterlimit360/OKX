import { FontAwesome5, Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const stablecoins = [
  { symbol: 'USDT', name: 'USDT', apy: '9.14%', icon: <FontAwesome5 name="dollar-sign" size={28} color="#26a17b" /> },
  { symbol: 'USDC', name: 'USDC', apy: '9.41%', icon: <FontAwesome5 name="dollar-sign" size={28} color="#2775ca" /> },
  { symbol: 'DAI', name: 'DAI', apy: '5.30%', icon: <MaterialCommunityIcons name="cash" size={28} color="#f5ac37" /> },
  { symbol: 'FRAX', name: 'FRAX', apy: '4.50%', icon: <MaterialCommunityIcons name="alpha-f-circle" size={28} color="#fff" /> },
  { symbol: 'USDP', name: 'USDP', apy: '8.01%', icon: <MaterialCommunityIcons name="cash" size={28} color="#3cc68a" /> },
  { symbol: 'PYUSD', name: 'PYUSD', apy: '5.28%', icon: <FontAwesome5 name="dollar-sign" size={28} color="#2d5cff" /> },
  { symbol: 'LUSD', name: 'LUSD', apy: '6.50%', icon: <FontAwesome5 name="dollar-sign" size={28} color="#00bcd4" /> },
  { symbol: 'sUSD', name: 'sUSD', apy: '2.47%', icon: <FontAwesome5 name="dollar-sign" size={28} color="#6c47ff" /> },
];

const tabs = ['Stablecoins', 'Bonus', 'Protocols'];

export default function ExploreScreen() {
  const [activeTab, setActiveTab] = useState('Stablecoins');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>DeFi</Text>
        <View style={{ flexDirection: 'row', gap: 18 }}>
          <Ionicons name="search" size={24} color="#fff" style={{ marginRight: 12 }} />
          <Ionicons name="document-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {tabs.map(tab => (
          <TouchableOpacity
            key={tab}
            style={[styles.tabBtn, activeTab === tab && styles.tabBtnActive]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.tabTextActive]}>{tab}</Text>
            {activeTab === tab && <View style={styles.tabUnderline} />}
          </TouchableOpacity>
        ))}
      </View>

      {/* Stablecoins List */}
      {activeTab === 'Stablecoins' && (
        <View style={{ marginTop: 8 }}>
          {stablecoins.map((coin, idx) => (
            <View key={idx} style={styles.coinRow}>
              <View style={{ flexDirection: 'row', alignItems: 'center' }}>
                <View style={styles.coinIconCircle}>{coin.icon}</View>
                <Text style={styles.coinSymbol}>{coin.symbol}</Text>
              </View>
              <Text style={styles.coinApy}>
                <Text style={{ color: '#a259ec', fontWeight: 'bold' }}>{coin.apy}</Text> APY
              </Text>
            </View>
          ))}
        </View>
      )}

      {/* Bonus and Protocols tabs can be filled similarly */}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 0 },
  headerRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginTop: 18, marginBottom: 10, paddingHorizontal: 16,
  },
  title: { color: '#fff', fontWeight: 'bold', fontSize: 28 },
  tabsRow: {
    flexDirection: 'row', marginHorizontal: 0, marginBottom: 8, borderBottomWidth: 1, borderBottomColor: '#222',
  },
  tabBtn: {
    paddingVertical: 10, paddingHorizontal: 18, alignItems: 'center', justifyContent: 'center',
    position: 'relative',
  },
  tabBtnActive: {},
  tabText: { color: '#aaa', fontSize: 16, fontWeight: 'bold' },
  tabTextActive: { color: '#fff' },
  tabUnderline: {
    position: 'absolute', left: 0, right: 0, bottom: -1, height: 3, backgroundColor: '#a259ec', borderRadius: 2,
  },
  coinRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    paddingVertical: 14, paddingHorizontal: 18, borderBottomWidth: 1, borderBottomColor: '#181818',
  },
  coinIconCircle: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center', marginRight: 14,
  },
  coinSymbol: { color: '#fff', fontWeight: 'bold', fontSize: 17 },
  coinApy: { color: '#fff', fontSize: 16, fontWeight: 'bold' },
});