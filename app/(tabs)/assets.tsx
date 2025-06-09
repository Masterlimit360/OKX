import { FontAwesome, Ionicons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const popularCrypto = [
  { symbol: 'BTC', name: 'Bitcoin', price: '$105,998.9', change: '+0.13%', color: '#13e07b', icon: 'bitcoin' },
  { symbol: 'ETH', name: 'Ethereum', price: '$2,520.51', change: '-0.17%', color: '#ff4d4f', icon: 'ethereum' },
  { symbol: 'USDT', name: 'Tether', price: '$1.00042', change: '-0.01%', color: '#ff4d4f', icon: 'dollar' },
];

export default function AssetsScreen() {
  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Top Illustration */}
      <View style={styles.illustrationBox}>
        <Ionicons name="logo-bitcoin" size={64} color="#caff4d" style={{ position: 'absolute', left: 20, top: 10, opacity: 0.7 }} />
        <Ionicons name="logo-usd" size={48} color="#fff" style={{ position: 'absolute', left: 80, top: 30, opacity: 0.3 }} />
        <Ionicons name="logo-euro" size={40} color="#fff" style={{ position: 'absolute', left: 140, top: 10, opacity: 0.3 }} />
        <Ionicons name="logo-yen" size={36} color="#fff" style={{ position: 'absolute', left: 200, top: 30, opacity: 0.3 }} />
        <Ionicons name="logo-bitcoin" size={32} color="#fff" style={{ position: 'absolute', left: 250, top: 10, opacity: 0.2 }} />
      </View>

      {/* Title */}
      <Text style={styles.title}>Seize your future with{'\n'}crypto now</Text>

      {/* Deposit Button */}
      <TouchableOpacity style={styles.depositBtn}>
        <Text style={styles.depositBtnText}>Deposit</Text>
      </TouchableOpacity>

      {/* Info Card */}
      <View style={styles.infoCard}>
        <View style={{ flexDirection: 'row', alignItems: 'center' }}>
          <Ionicons name="book-outline" size={32} color="#fff" style={{ marginRight: 12 }} />
          <View>
            <Text style={styles.infoCardLabel}>New users</Text>
            <Text style={styles.infoCardTitle}>How do I make a deposit?</Text>
          </View>
        </View>
        <View style={styles.infoCardFooter}>
          <Text style={styles.infoCardMore}>View more <Ionicons name="arrow-forward" size={14} color="#caff4d" /></Text>
          <View style={styles.infoCardPager}><Text style={styles.infoCardPagerText}>1/3</Text></View>
        </View>
      </View>

      {/* Popular Crypto */}
      <Text style={styles.popularTitle}>Popular crypto</Text>
      <ScrollView horizontal showsHorizontalScrollIndicator={false} style={{ marginTop: 10 }}>
        {popularCrypto.map((item, idx) => (
          <View key={idx} style={styles.cryptoCard}>
            <View style={styles.cryptoIconCircle}>
              {item.icon === 'bitcoin' && <FontAwesome name="bitcoin" size={24} color="#f7931a" />}
              {item.icon === 'dollar' && <FontAwesome name="dollar" size={24} color="#26a17b" />}
              {item.icon === 'ethereum' && <FontAwesome name="diamond" size={24} color="#627eea" />}
            </View>
            <Text style={styles.cryptoSymbol}>{item.symbol}</Text>
            <Text style={styles.cryptoPrice}>{item.price}</Text>
            <Text style={[styles.cryptoChange, { color: item.color }]}>{item.change}</Text>
          </View>
        ))}
      </ScrollView>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 0 },
  illustrationBox: {
    height: 100, width: '100%', marginTop: 18, marginBottom: 8, justifyContent: 'center', alignItems: 'center',
    backgroundColor: 'transparent',
  },
  title: {
    color: '#fff', fontWeight: 'bold', fontSize: 24, textAlign: 'center', marginBottom: 18,
  },
  depositBtn: {
    backgroundColor: '#caff4d', borderRadius: 24, paddingVertical: 14, alignItems: 'center',
    marginHorizontal: 24, marginBottom: 18,
  },
  depositBtnText: { color: '#111', fontWeight: 'bold', fontSize: 18 },
  infoCard: {
    backgroundColor: '#191f1c', borderRadius: 16, padding: 18, marginHorizontal: 16, marginBottom: 18,
  },
  infoCardLabel: { color: '#aaa', fontSize: 13 },
  infoCardTitle: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginTop: 2 },
  infoCardFooter: {
    flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginTop: 14,
  },
  infoCardMore: { color: '#caff4d', fontWeight: 'bold', fontSize: 14 },
  infoCardPager: {
    backgroundColor: '#222', borderRadius: 10, paddingHorizontal: 10, paddingVertical: 2,
  },
  infoCardPagerText: { color: '#fff', fontSize: 12 },
  popularTitle: {
    color: '#fff', fontWeight: 'bold', fontSize: 18, marginLeft: 16, marginBottom: 2,
  },
  cryptoCard: {
    backgroundColor: '#222', borderRadius: 14, padding: 16, width: 120, marginLeft: 16, marginRight: 0,
    alignItems: 'center',
  },
  cryptoIconCircle: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#191f1c', alignItems: 'center', justifyContent: 'center', marginBottom: 8,
  },
  cryptoSymbol: { color: '#fff', fontWeight: 'bold', fontSize: 16, marginBottom: 2 },
  cryptoPrice: { color: '#fff', fontSize: 15, marginBottom: 2 },
  cryptoChange: { fontWeight: 'bold', fontSize: 13 },
});