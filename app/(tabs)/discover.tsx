import { Ionicons, MaterialCommunityIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const categories = [
  { icon: <Ionicons name="cube-outline" size={28} color="#a259ec" />, label: 'NFT' },
  { icon: <Ionicons name="planet-outline" size={28} color="#a259ec" />, label: 'Explorer' },
  { icon: <MaterialCommunityIcons name="web" size={28} color="#a259ec" />, label: 'Cryptoverse' },
  { icon: <Ionicons name="leaf-outline" size={28} color="#a259ec" />, label: 'Eco Hub' },
];

const tabs = ['Feed', 'DApps', 'For you'];

const leaderboard = [
  {
    rank: 1,
    icon: <MaterialCommunityIcons name="unicorn-variant" size={36} color="#a259ec" />,
    name: 'Uniswap',
    type: 'DEX',
  },
  {
    rank: 2,
    icon: <MaterialCommunityIcons name="pill" size={36} color="#a259ec" />,
    name: 'PumpSwap',
    type: 'DEX',
  },
  {
    rank: 3,
    icon: <MaterialCommunityIcons name="pac-man" size={36} color="#a259ec" />,
    name: 'daos.fun',
    type: 'DeFi',
  },
];

export default function AssetsScreen() {
  const [activeTab, setActiveTab] = useState('DApps');
  const [activeLeaderboardTab, setActiveLeaderboardTab] = useState('Trending onchain');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.headerRow}>
        <Text style={styles.title}>Discover</Text>
        <View style={{ flexDirection: 'row', gap: 18 }}>
          <Ionicons name="search" size={24} color="#fff" style={{ marginRight: 12 }} />
          <Ionicons name="calendar-outline" size={24} color="#fff" style={{ marginRight: 12 }} />
          <Ionicons name="document-outline" size={24} color="#fff" />
        </View>
      </View>

      {/* Categories */}
      <View style={styles.categoriesRow}>
        {categories.map((cat, idx) => (
          <View key={idx} style={styles.categoryItem}>
            <View style={styles.categoryIcon}>{cat.icon}</View>
            <Text style={styles.categoryLabel}>{cat.label}</Text>
          </View>
        ))}
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

      {/* Leaderboard */}
      <Text style={styles.leaderboardTitle}>Leaderboard</Text>
      <View style={styles.leaderboardTabsRow}>
        <TouchableOpacity
          style={[
            styles.leaderboardTabBtn,
            activeLeaderboardTab === 'Trending onchain' && styles.leaderboardTabBtnActivePurple,
          ]}
          onPress={() => setActiveLeaderboardTab('Trending onchain')}
        >
          <Text
            style={[
              styles.leaderboardTabText,
              activeLeaderboardTab === 'Trending onchain' && styles.leaderboardTabTextActivePurple,
            ]}
          >
            Trending onchain
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={[
            styles.leaderboardTabBtn,
            activeLeaderboardTab === 'Recent top fundings' && styles.leaderboardTabBtnActivePurple,
          ]}
          onPress={() => setActiveLeaderboardTab('Recent top fundings')}
        >
          <Text
            style={[
              styles.leaderboardTabText,
              activeLeaderboardTab === 'Recent top fundings' && styles.leaderboardTabTextActivePurple,
            ]}
          >
            Recent top fundings
          </Text>
        </TouchableOpacity>
      </View>

      {/* Leaderboard List */}
      <View style={{ marginTop: 8 }}>
        {leaderboard.map((item, idx) => (
          <View key={idx} style={styles.leaderboardRow}>
            <Text style={styles.rankNumber}>{item.rank}</Text>
            <View style={styles.leaderboardIcon}>{item.icon}</View>
            <View style={{ flex: 1 }}>
              <Text style={styles.leaderboardName}>{item.name}</Text>
              <Text style={styles.leaderboardType}>{item.type}</Text>
            </View>
          </View>
        ))}
      </View>

      {/* View More Button */}
      <TouchableOpacity style={styles.viewMoreBtn}>
        <Text style={styles.viewMoreText}>View more</Text>
      </TouchableOpacity>
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
  categoriesRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 8, marginBottom: 10,
  },
  categoryItem: { alignItems: 'center', width: '25%' },
  categoryIcon: {
    backgroundColor: '#222', borderRadius: 24, width: 48, height: 48, alignItems: 'center', justifyContent: 'center', marginBottom: 4,
  },
  categoryLabel: { color: '#fff', fontSize: 13, fontWeight: 'bold' },
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
  leaderboardTitle: {
    color: '#fff', fontWeight: 'bold', fontSize: 20, marginLeft: 16, marginTop: 18, marginBottom: 8,
  },
  leaderboardTabsRow: {
    flexDirection: 'row', marginHorizontal: 8, marginBottom: 8,
  },
  leaderboardTabBtn: {
    paddingVertical: 6, paddingHorizontal: 14, borderRadius: 16, backgroundColor: 'transparent',
    marginRight: 8,
  },
  leaderboardTabBtnActive: { backgroundColor: '#222' },
  leaderboardTabBtnActivePurple: { backgroundColor: '#a259ec' },
  leaderboardTabText: { color: '#aaa', fontSize: 15 },
  leaderboardTabTextActive: { color: '#a259ec', fontWeight: 'bold' },
  leaderboardTabTextActivePurple: { color: '#fff', fontWeight: 'bold' },
  leaderboardRow: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#181818', borderRadius: 12,
    padding: 14, marginBottom: 10, marginHorizontal: 16,
  },
  rankNumber: {
    color: '#a259ec', fontWeight: 'bold', fontSize: 18, width: 24, textAlign: 'center', marginRight: 8,
  },
  leaderboardIcon: {
    width: 40, height: 40, borderRadius: 20, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  leaderboardName: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  leaderboardType: { color: '#aaa', fontSize: 13 },
  viewMoreBtn: {
    backgroundColor: '#222', borderRadius: 24, paddingVertical: 14, alignItems: 'center',
    marginHorizontal: 24, marginTop: 10,
  },
  viewMoreText: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
});