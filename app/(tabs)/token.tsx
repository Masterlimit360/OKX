import { FontAwesome, Ionicons, MaterialIcons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

const trendingTokens = [
  {
    name: 'BonkFun',
    change: '+26.95%',
    color: '#a259ec',
    icons: [<FontAwesome name="bitcoin" size={18} color="#f7931a" key="btc" />, <FontAwesome name="dollar" size={18} color="#a259ec" key="usdt" />],
  },
  {
    name: 'Solana Eco',
    change: '+3,503.44%',
    color: '#a259ec',
    icons: [<FontAwesome name="circle" size={18} color="#627eea" key="sol" />, <FontAwesome name="circle" size={18} color="#000" key="other" />],
  },
  {
    name: 'Startup',
    change: '+7.65%',
    color: '#a259ec',
    icons: [<FontAwesome name="circle" size={18} color="#26a17b" key="startup" />, <FontAwesome name="circle" size={18} color="#000" key="other2" />],
  },
];

const tokenList = [
  {
    name: 'MONKEPHONE',
    price: '$0.0096807',
    change: '+10.41%',
    changeColor: '#a259ec',
    turnover: '$1.07M',
    mcap: '$9.68M',
    icon: <FontAwesome name="circle" size={24} color="#fff" />,
  },
  {
    name: 'MOONCOIN',
    price: '$0.005361',
    change: '-6.34%',
    changeColor: '#ff4d4f',
    turnover: '$1.73M',
    mcap: '$5.36M',
    icon: <FontAwesome name="circle" size={24} color="#222" />,
    tag: true,
  },
  {
    name: 'PEMDAS',
    price: '$0.00033618',
    change: '+25.18%',
    changeColor: '#a259ec',
    turnover: '$55.3K',
    mcap: '$336.17K',
    icon: <FontAwesome name="circle" size={24} color="#aaa" />,
  },
  {
    name: 'PFP',
    price: '$0.00017541',
    change: '-24.26%',
    changeColor: '#ff4d4f',
    turnover: '$112.85K',
    mcap: '$1.17M',
    icon: <FontAwesome name="circle" size={24} color="#fff" />,
  },
];

const tabFilters = ['Watchlist', 'Top searches', 'Trending', 'New'];

export default function MarketsScreen() {
  const [tab, setTab] = useState('Top searches');

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Title */}
      <Text style={styles.title}>Tokens</Text>

      {/* Search Bar */}
      <View style={styles.searchBar}>
        <TextInput
          style={styles.searchInput}
          placeholder="Search token name or address"
          placeholderTextColor="#888"
        />
      </View>

      {/* Trending Tokens */}
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginBottom: 18, marginLeft: 8 }}>
        {trendingTokens.map((token, idx) => (
          <View key={idx} style={styles.trendingCard}>
            <Text style={styles.trendingName}>{token.name}</Text>
            <Text style={[styles.trendingChange, { color: token.color }]}>{token.change}</Text>
            <View style={{ flexDirection: 'row', marginTop: 6 }}>
              {token.icons.map((icon, i) => (
                <View key={i} style={{ marginRight: 2 }}>{icon}</View>
              ))}
            </View>
          </View>
        ))}
      </ScrollView>

      {/* Quick Actions */}
      <View style={styles.quickRow}>
        <View style={styles.quickItem}>
          <Ionicons name="wifi" size={28} color="#a259ec" />
          <Text style={styles.quickText}>Signal</Text>
        </View>
        <View style={styles.quickItem}>
          <Ionicons name="trophy-outline" size={28} color="#a259ec" />
          <Text style={styles.quickText}>Leaderboard</Text>
        </View>
        <View style={styles.quickItem}>
          <Ionicons name="refresh" size={28} color="#a259ec" />
          <Text style={styles.quickText}>Tracker</Text>
        </View>
        <View style={styles.quickItem}>
          <MaterialIcons name="bolt" size={28} color="#a259ec" />
          <Text style={styles.quickText}>Pump</Text>
        </View>
      </View>

      {/* Tab Filters */}
      <View style={styles.tabsRow}>
        {tabFilters.map((item) => (
          <TouchableOpacity
            key={item}
            style={[styles.tabBtn, tab === item && styles.tabBtnActive]}
            onPress={() => setTab(item)}
          >
            <Text style={[styles.tabText, tab === item && styles.tabTextActive]}>{item}</Text>
          </TouchableOpacity>
        ))}
      </View>

      {/* Filter Bar */}
      <View style={styles.filterBar}>
        <TouchableOpacity style={styles.filterBtn}>
          <Text style={styles.filterBtnText}>All</Text>
          <Ionicons name="chevron-down" size={14} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.filterText}>Solana</Text>
        <Text style={styles.filterText}>BNB Chain</Text>
        <Text style={styles.filterText}>Et</Text>
        <Text style={styles.filterText}>1h</Text>
        <Ionicons name="filter" size={18} color="#fff" style={{ marginLeft: 8 }} />
      </View>

      {/* Table Header */}
      <View style={styles.tableHeader}>
        <Text style={styles.tableHeaderText}>Turnover</Text>
        <Text style={styles.tableHeaderText}>MCAP</Text>
        <Text style={styles.tableHeaderText}>Price</Text>
        <Text style={styles.tableHeaderText}>Change</Text>
      </View>

      {/* Token List */}
      <View>
        {tokenList.map((token, idx) => (
          <View key={idx} style={styles.tokenRow}>
            <View style={{ flexDirection: 'row', alignItems: 'center', flex: 2 }}>
              {token.icon}
              <View style={{ marginLeft: 8 }}>
                <Text style={styles.tokenName}>{token.name} {token.tag && <Text style={styles.tokenTag}>S</Text>}</Text>
                <Text style={styles.tokenSub}>{token.turnover} • {token.mcap}</Text>
              </View>
            </View>
            <View style={{ flex: 1 }}>
              <Text style={styles.tokenPrice}>{token.price}</Text>
              <Text style={[styles.tokenChange, { color: token.changeColor }]}>{token.change}</Text>
            </View>
          </View>
        ))}
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 0 },
  title: {
    color: '#fff', fontWeight: 'bold', fontSize: 28, marginTop: 18, marginBottom: 10, marginLeft: 16,
  },
  searchBar: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 16, paddingHorizontal: 16, paddingVertical: 10, marginHorizontal: 16, marginBottom: 12,
  },
  searchInput: { color: '#fff', marginLeft: 8, flex: 1, fontSize: 16 },
  trendingCard: {
    backgroundColor: '#191f1c', borderRadius: 14, padding: 14, width: 140, marginRight: 12,
    alignItems: 'flex-start', minHeight: 70,
  },
  trendingName: { color: '#fff', fontWeight: 'bold', fontSize: 15, marginBottom: 2 },
  trendingChange: { fontWeight: 'bold', fontSize: 16 },
  quickRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginBottom: 18,
  },
  quickItem: { alignItems: 'center', width: '24%' },
  quickText: { color: '#fff', fontSize: 13, textAlign: 'center', marginTop: 4 },
  tabsRow: {
    flexDirection: 'row', marginHorizontal: 8, marginBottom: 8,
  },
  tabBtn: {
    paddingVertical: 6, paddingHorizontal: 14, borderRadius: 16,
    backgroundColor: 'transparent',
  },
  tabBtnActive: { backgroundColor: '#222' },
  tabText: { color: '#aaa', fontSize: 15 },
  tabTextActive: { color: '#a259ec', fontWeight: 'bold' },
  filterBar: {
    flexDirection: 'row', alignItems: 'center', marginHorizontal: 16, marginBottom: 8,
  },
  filterBtn: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#222',
    borderRadius: 12, paddingHorizontal: 10, paddingVertical: 4, marginRight: 8,
  },
  filterBtnText: { color: '#fff', fontWeight: 'bold', marginRight: 4 },
  filterText: { color: '#aaa', marginRight: 10, fontSize: 13 },
  tableHeader: {
    flexDirection: 'row', justifyContent: 'space-between', marginHorizontal: 16, marginBottom: 4,
  },
  tableHeaderText: { color: '#aaa', fontSize: 13, flex: 1, fontWeight: 'bold' },
  tokenRow: {
    flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between',
    backgroundColor: '#181818', borderRadius: 12, padding: 14, marginBottom: 10, marginHorizontal: 16,
  },
  tokenName: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
  tokenTag: {
    backgroundColor: '#a259ec', color: '#fff', borderRadius: 4, paddingHorizontal: 4, fontSize: 11, marginLeft: 4,
  },
  tokenSub: { color: '#aaa', fontSize: 12, marginTop: 2 },
  tokenPrice: { color: '#fff', fontSize: 15, fontWeight: 'bold' },
  tokenChange: { fontWeight: 'bold', fontSize: 14 },
});