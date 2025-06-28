import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import SettingScreen from '../screens/setting'; // Import your settings screen

const assets = [
  { symbol: 'USDT', name: 'Tether', price: '$1', change: '+0.01%', color: '#a259ec', icon: 'dollar', amount: 0 },
  { symbol: 'USDC', name: 'USD Coin', price: '$0.9999', change: '+0.01%', color: '#a259ec', icon: 'usd', amount: 0 },
  { symbol: 'BTC', name: 'Bitcoin', price: '$106,924.4', change: '-0.13%', color: '#ff4d4f', icon: 'bitcoin', amount: 0 },
  { symbol: 'MEMEFI', name: 'MEMEFI', price: '', change: '', color: '#fff', icon: null, amount: 0, manage: true },
];

const tabs = ['Crypto', 'NFT', 'DeFi', 'Approvals'];

export default function HomeScreen() {
  const [tab, setTab] = useState('Crypto');
  const [showSettings, setShowSettings] = useState(false);

  if (showSettings) {
    return <SettingScreen onBack={() => setShowSettings(false)} />;
  }

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity onPress={() => setShowSettings(true)}>
          <Ionicons name="menu" size={28} color="#fff" />
        </TouchableOpacity>
        <TouchableOpacity style={styles.headerCenter}>
          <Text style={styles.headerCenterText}>Web3</Text>
          <Ionicons name="chevron-down" size={18} color="#fff" />
        </TouchableOpacity>
        <View style={{ flexDirection: 'row', alignItems: 'center', gap: 16 }}>
          <Ionicons name="globe-outline" size={22} color="#fff" style={{ marginRight: 8 }} />
          <Ionicons name="notifications-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <Ionicons name="search" size={18} color="#888" />
        <TextInput
          style={styles.searchInput}
          placeholder="Search"
          placeholderTextColor="#888"
        />
      </View>

      {/* Wallet Info */}
      <View style={styles.walletRow}>
        <View style={styles.walletIcon} />
        <Text style={styles.walletName}>Wallet A - Account 01</Text>
        <Ionicons name="copy-outline" size={18} color="#fff" style={{ marginLeft: 8 }} />
      </View>

      {/* Balance and Graph */}
      <View style={styles.balanceRow}>
        <View style={styles.balanceDash} />
        <View style={styles.balanceGraph}>
          <View style={styles.purpleBar} />
        </View>
      </View>
      <Text style={styles.balanceText}>$0.00 (0.00%) 1D</Text>

      {/* Quick Actions */}
      <View style={styles.quickRow}>
        <View style={styles.quickItem}>
          <View style={styles.quickCircle}>
            <Ionicons name="arrow-up" size={24} color="#fff" />
          </View>
          <Text style={styles.quickText}>Send</Text>
        </View>
        <View style={styles.quickItem}>
          <View style={styles.quickCircle}>
            <Ionicons name="arrow-down" size={24} color="#fff" />
          </View>
          <Text style={styles.quickText}>Receive</Text>
        </View>
        <View style={styles.quickItem}>
          <View style={styles.quickCircle}>
            <Ionicons name="time-outline" size={24} color="#fff" />
          </View>
          <Text style={styles.quickText}>History</Text>
        </View>
        <View style={styles.quickItem}>
          <View style={styles.quickCircle}>
            <Ionicons name="grid-outline" size={24} color="#fff" />
          </View>
          <Text style={styles.quickText}>More</Text>
        </View>
      </View>

      {/* Tabs */}
      <View style={styles.tabsRow}>
        {tabs.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.tabBtn, tab === item && styles.tabBtnActive]}
            onPress={() => setTab(item)}
          >
            <Text style={[styles.tabText, tab === item && styles.tabTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Total Assets */}
      <View style={styles.totalAssetsRow}>
        <Text style={styles.totalAssetsLabel}>Total assets</Text>
        <Ionicons name="options-outline" size={18} color="#fff" />
      </View>
      <View style={styles.divider} />

      {/* Asset List */}
      <View style={{ marginTop: 8 }}>
        {assets.map((asset, idx) => (
          <View key={idx} style={styles.assetRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center' }}>
              <View style={styles.assetIconCircle}>
                {asset.icon === 'bitcoin' && <FontAwesome name="bitcoin" size={20} color="#f7931a" />}
                {asset.icon === 'dollar' && <FontAwesome name="dollar" size={20} color="#a259ec" />}
                {asset.icon === 'usd' && <FontAwesome name="usd" size={20} color="#a259ec" />}
                {asset.icon === null && (
                  <Ionicons name="image-outline" size={20} color="#fff" />
                )}
              </View>
              <View>
                <Text style={styles.assetSymbol}>{asset.symbol}</Text>
                <Text style={styles.assetPrice}>
                  {asset.price}
                  {asset.change ? (
                    <Text style={{ color: asset.color, fontWeight: 'bold' }}> {asset.change}</Text>
                  ) : null}
                </Text>
              </View>
            </View>
            <View style={{ alignItems: 'flex-end' }}>
              <Text style={styles.assetAmount}>{asset.amount}</Text>
              {asset.manage && (
                <TouchableOpacity style={styles.manageBtn}>
                  <Text style={styles.manageBtnText}>Manage</Text>
                </TouchableOpacity>
              )}
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 0 },
  header: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginTop: 16, marginBottom: 10, paddingHorizontal: 16,
  },
  headerCenter: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 20, paddingHorizontal: 16, paddingVertical: 6,
  },
  headerCenterText: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginRight: 4 },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 16, paddingHorizontal: 12, paddingVertical: 8, marginBottom: 18, marginHorizontal: 16,
  },
  searchInput: { color: '#fff', marginLeft: 8, flex: 1, fontSize: 15 },
  walletRow: {
    flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 10,
  },
  walletIcon: {
    width: 32, height: 32, borderRadius: 8, backgroundColor: '#a259ec', marginRight: 10,
  },
  walletName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  balanceRow: {
    flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 4,
  },
  balanceDash: {
    flex: 1, height: 8, backgroundColor: '#222', borderRadius: 4, marginRight: 8,
  },
  balanceGraph: {
    flex: 2, height: 8, backgroundColor: '#222', borderRadius: 4, justifyContent: 'center',
  },
  purpleBar: {
    height: 8, borderRadius: 4, backgroundColor: '#a259ec', width: '80%',
  },
  balanceText: {
    color: '#fff', fontSize: 15, marginLeft: 16, marginBottom: 10,
  },
  quickRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginBottom: 18,
  },
  quickItem: { alignItems: 'center', width: '24%' },
  quickCircle: {
    width: 48, height: 48, borderRadius: 24, backgroundColor: '#a259ec', marginBottom: 6, alignItems: 'center', justifyContent: 'center',
  },
  quickText: { color: '#fff', fontSize: 13, textAlign: 'center' },
  tabsRow: {
    flexDirection: 'row', marginHorizontal: 16, marginBottom: 8,
  },
  tabBtn: {
    paddingVertical: 6, paddingHorizontal: 14, borderRadius: 16,
    backgroundColor: 'transparent',
  },
  tabBtnActive: { backgroundColor: '#222' },
  tabText: { color: '#aaa', fontSize: 15 },
  tabTextActive: { color: '#fff', fontWeight: 'bold' },
  totalAssetsRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    marginHorizontal: 16, marginBottom: 2,
  },
  totalAssetsLabel: { color: '#aaa', fontSize: 14 },
  divider: {
    height: 1, backgroundColor: '#222', marginHorizontal: 16, marginBottom: 6,
  },
  assetRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#181818', borderRadius: 12, padding: 14, marginBottom: 10, marginHorizontal: 16,
  },
  assetIconCircle: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  assetSymbol: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  assetPrice: { color: '#aaa', fontSize: 13 },
  assetAmount: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  manageBtn: {
    backgroundColor: '#222', borderRadius: 8, paddingHorizontal: 10, paddingVertical: 4, marginTop: 4,
    borderWidth: 1, borderColor: '#a259ec',
  },
  manageBtnText: { color: '#a259ec', fontWeight: 'bold', fontSize: 13 },
});