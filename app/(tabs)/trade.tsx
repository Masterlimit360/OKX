import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

export default function TradeScreen() {
  const [side, setSide] = useState<'Buy' | 'Sell'>('Buy');
  const [borrow, setBorrow] = useState(false);
  const [orderType, setOrderType] = useState('Limit order');
  const [price, setPrice] = useState('106,018.6');
  const [amount, setAmount] = useState('');
  const [tpSl, setTpSl] = useState(false);

  return (
    <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 32 }}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.pair}>BTC/USDT</Text>
        <Text style={styles.pairChange}>+0.44%</Text>
        <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
          <Ionicons name="star-outline" size={22} color="#fff" style={{ marginRight: 16 }} />
          <Ionicons name="settings-outline" size={22} color="#fff" />
        </View>
      </View>

      {/* Chart Placeholder */}
      <View style={styles.chartBox}>
        <Text style={{ color: '#888', textAlign: 'center', marginTop: 40 }}>TradingView Chart</Text>
      </View>

      {/* Timeframe Tabs */}
      <View style={styles.timeframeRow}>
        {['15m', '1h', '4h', '1D', 'More'].map((tf, idx) => (
          <TouchableOpacity key={tf} style={[styles.timeframeBtn, tf === '1D' && styles.timeframeBtnActive]}>
            <Text style={[styles.timeframeText, tf === '1D' && styles.timeframeTextActive]}>{tf}</Text>
          </TouchableOpacity>
        ))}
        <TouchableOpacity style={{ marginLeft: 'auto' }}>
          <Text style={{ color: '#aaa', fontSize: 13 }}>Hide</Text>
        </TouchableOpacity>
      </View>

      {/* Trade Form */}
      <View style={styles.tradeBox}>
        {/* Buy/Sell Tabs */}
        <View style={styles.sideTabs}>
          <TouchableOpacity
            style={[styles.sideTab, side === 'Buy' && styles.sideTabActiveBuy]}
            onPress={() => setSide('Buy')}
          >
            <Text style={[styles.sideTabText, side === 'Buy' && styles.sideTabTextActiveBuy]}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sideTab, side === 'Sell' && styles.sideTabActiveSell]}
            onPress={() => setSide('Sell')}
          >
            <Text style={[styles.sideTabText, side === 'Sell' && styles.sideTabTextActiveSell]}>Sell</Text>
          </TouchableOpacity>
        </View>

        {/* Borrow */}
        <View style={styles.borrowRow}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setBorrow(!borrow)}>
            {borrow && <View style={styles.checkboxChecked} />}
          </TouchableOpacity>
          <Text style={styles.borrowText}>Borrow</Text>
        </View>

        {/* Order Type */}
        <View style={styles.inputRow}>
          <Text style={styles.inputLabel}>Limit order</Text>
          <Ionicons name="chevron-down" size={16} color="#aaa" style={{ marginLeft: 4 }} />
        </View>

        {/* Price */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={price}
            onChangeText={setPrice}
            keyboardType="numeric"
            placeholder="Price (USDT)"
            placeholderTextColor="#888"
          />
        </View>

        {/* Amount */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="Amount (BTC)"
            placeholderTextColor="#888"
          />
        </View>

        {/* Total */}
        <View style={styles.inputRow}>
          <TextInput
            style={styles.input}
            value="0"
            editable={false}
            placeholder="Total (USDT)"
            placeholderTextColor="#888"
          />
        </View>

        {/* Available/Max */}
        <View style={styles.availableRow}>
          <Text style={styles.availableText}>Available</Text>
          <Text style={styles.availableValue}>0 USDT</Text>
          <Text style={styles.availableText}>Max buy</Text>
          <Text style={styles.availableValue}>0 BTC</Text>
        </View>

        {/* TP/SL */}
        <View style={styles.tpSlRow}>
          <TouchableOpacity style={styles.checkbox} onPress={() => setTpSl(!tpSl)}>
            {tpSl && <View style={styles.checkboxChecked} />}
          </TouchableOpacity>
          <Text style={styles.tpSlText}>TP/SL</Text>
        </View>

        {/* Buy/Sell Button */}
        <TouchableOpacity style={[styles.tradeBtn, side === 'Buy' ? styles.buyBtn : styles.sellBtn]}>
          <Text style={[styles.tradeBtnText, side === 'Buy' ? styles.buyBtnText : styles.sellBtnText]}>
            {side === 'Buy' ? 'Buy BTC' : 'Sell BTC'}
          </Text>
        </TouchableOpacity>
      </View>

      {/* Order Book */}
      <View style={styles.orderBookRow}>
        <View style={{ flex: 1 }}>
          <Text style={styles.orderBookPriceRed}>106,021.0</Text>
          <Text style={styles.orderBookPriceRed}>106,021.0</Text>
          <Text style={styles.orderBookPriceRed}>106,021.0</Text>
          <Text style={styles.orderBookPriceRed}>106,019.8</Text>
          <Text style={styles.orderBookPriceRed}>106,018.7</Text>
        </View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <Text style={styles.orderBookPriceGreen}>106,018.6</Text>
          <Text style={styles.orderBookPriceGreen}>106,018.6</Text>
          <Text style={styles.orderBookPriceGreen}>106,017.5</Text>
          <Text style={styles.orderBookPriceGreen}>106,016.4</Text>
          <Text style={styles.orderBookPriceGreen}>106,016.3</Text>
        </View>
      </View>

      {/* Orders/Assets Tabs */}
      <View style={styles.bottomTabsRow}>
        <Text style={styles.bottomTab}>Orders (0)</Text>
        <Text style={styles.bottomTab}>Assets (0)</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 12 },
  header: {
    flexDirection: 'row', alignItems: 'center', marginTop: 16, marginBottom: 8,
  },
  pair: { color: '#fff', fontWeight: 'bold', fontSize: 20, marginRight: 10 },
  pairChange: { color: '#13e07b', fontWeight: 'bold', fontSize: 15 },
  chartBox: {
    backgroundColor: '#181818', borderRadius: 12, height: 160, marginBottom: 8,
    justifyContent: 'center', alignItems: 'center',
  },
  timeframeRow: {
    flexDirection: 'row', alignItems: 'center', marginBottom: 8,
  },
  timeframeBtn: { paddingHorizontal: 10, paddingVertical: 4, borderRadius: 8 },
  timeframeBtnActive: { backgroundColor: '#222' },
  timeframeText: { color: '#aaa', fontSize: 13 },
  timeframeTextActive: { color: '#fff', fontWeight: 'bold' },
  tradeBox: {
    backgroundColor: '#181818', borderRadius: 14, padding: 14, marginBottom: 12,
  },
  sideTabs: {
    flexDirection: 'row', marginBottom: 12,
  },
  sideTab: {
    flex: 1, alignItems: 'center', paddingVertical: 8, borderRadius: 20, marginHorizontal: 2,
    backgroundColor: '#222',
  },
  sideTabActiveBuy: { backgroundColor: '#13e07b' },
  sideTabActiveSell: { backgroundColor: '#ff4d4f' },
  sideTabText: { color: '#aaa', fontWeight: 'bold', fontSize: 15 },
  sideTabTextActiveBuy: { color: '#111' },
  sideTabTextActiveSell: { color: '#fff' },
  borrowRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  checkbox: {
    width: 18, height: 18, borderRadius: 4, borderWidth: 1, borderColor: '#888', marginRight: 8, alignItems: 'center', justifyContent: 'center',
    backgroundColor: '#222',
  },
  checkboxChecked: {
    width: 12, height: 12, borderRadius: 2, backgroundColor: '#13e07b',
  },
  borrowText: { color: '#fff', fontSize: 14 },
  inputRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 10 },
  inputLabel: { color: '#fff', fontSize: 15, marginRight: 4 },
  input: {
    flex: 1, backgroundColor: '#222', borderRadius: 8, padding: 10, color: '#fff', fontSize: 15,
  },
  availableRow: { flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8 },
  availableText: { color: '#aaa', fontSize: 12 },
  availableValue: { color: '#fff', fontWeight: 'bold', fontSize: 12 },
  tpSlRow: { flexDirection: 'row', alignItems: 'center', marginBottom: 12 },
  tpSlText: { color: '#fff', fontSize: 14 },
  tradeBtn: {
    borderRadius: 24, paddingVertical: 14, alignItems: 'center', marginTop: 8,
  },
  buyBtn: { backgroundColor: '#13e07b' },
  sellBtn: { backgroundColor: '#ff4d4f' },
  tradeBtnText: { fontWeight: 'bold', fontSize: 16 },
  buyBtnText: { color: '#111' },
  sellBtnText: { color: '#fff' },
  orderBookRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginBottom: 8,
  },
  orderBookPriceRed: { color: '#ff4d4f', fontSize: 13, marginBottom: 2 },
  orderBookPriceGreen: { color: '#13e07b', fontSize: 13, marginBottom: 2 },
  bottomTabsRow: {
    flexDirection: 'row', justifyContent: 'space-between', marginTop: 12, paddingHorizontal: 8,
  },
  bottomTab: { color: '#fff', fontWeight: 'bold', fontSize: 15 },
});