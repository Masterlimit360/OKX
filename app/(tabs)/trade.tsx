import { Ionicons } from '@expo/vector-icons';
import React, { useState } from 'react';
import {
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View
} from 'react-native';

export default function TradeScreen() {
  const [side, setSide] = useState<'Buy' | 'Sell'>('Buy');
  const [fromToken, setFromToken] = useState('DAI');
  const [toToken, setToToken] = useState('FXS');
  const [amount, setAmount] = useState('');
  const [activeTab, setActiveTab] = useState<'Buy' | 'Sell'>('Buy');
  const [nextBtnPressed, setNextBtnPressed] = useState(false);

  const isBuy = activeTab === 'Buy';
  const mainToken = isBuy ? toToken : fromToken;
  const subToken = isBuy ? fromToken : toToken;
  const mainLabel = isBuy ? 'Buy' : 'Sell';
  const subLabel = isBuy ? 'Pay with' : 'For';

  return (
    <KeyboardAvoidingView
      style={{ flex: 1, backgroundColor: '#111' }}
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      keyboardVerticalOffset={Platform.OS === 'ios' ? 0 : 24}
    >
      <ScrollView style={styles.container} contentContainerStyle={{ paddingBottom: 64 }}>
        {/* Header */}
        <View style={styles.header}>
          <Text style={styles.title}>Easy</Text>
          <View style={{ flexDirection: 'row', alignItems: 'center', marginLeft: 'auto' }}>
            <Ionicons name="stats-chart" size={22} color="#fff" style={{ marginRight: 16 }} />
            <Ionicons name="ellipsis-horizontal" size={22} color="#fff" />
          </View>
        </View>

        {/* Buy/Sell Tabs */}
        <View style={styles.sideTabs}>
          <TouchableOpacity
            style={[styles.sideTab, activeTab === 'Buy' && styles.sideTabActive]}
            onPress={() => setActiveTab('Buy')}
          >
            <Text style={[styles.sideTabText, activeTab === 'Buy' && styles.sideTabTextActive]}>Buy</Text>
          </TouchableOpacity>
          <TouchableOpacity
            style={[styles.sideTab, activeTab === 'Sell' && styles.sideTabActive]}
            onPress={() => setActiveTab('Sell')}
          >
            <Text style={[styles.sideTabText, activeTab === 'Sell' && styles.sideTabTextActive]}>Sell</Text>
          </TouchableOpacity>
        </View>

        {/* Amount Input */}
        <View style={styles.amountRow}>
          <TextInput
            style={styles.amountInput}
            value={amount}
            onChangeText={setAmount}
            keyboardType="numeric"
            placeholder="0"
            placeholderTextColor="#888"
          />
          <View style={styles.tokenIcon} />
          <Text style={styles.amountToken}>{mainToken}</Text>
        </View>
        <Text style={styles.amountSub}>0.00 {subToken}</Text>

        {/* Token Selection */}
        <View style={styles.tokenSelectRow}>
          <View style={styles.tokenSelectItem}>
            <View style={styles.tokenIconCircle}>
              <Ionicons name="logo-usd" size={22} color="#f5ac37" />
            </View>
            <View>
              <Text style={styles.tokenSelectLabel}>{mainLabel}</Text>
              <Text style={styles.tokenSelectToken}>{fromToken}</Text>
            </View>
            <Text style={styles.tokenBalance}>Balance: 0</Text>
            <Ionicons name="chevron-forward" size={18} color="#fff" style={{ marginLeft: 8 }} />
          </View>
          <View style={styles.tokenSelectLine} />
          <View style={styles.tokenSelectItem}>
            <View style={styles.tokenIconCircle}>
              <Ionicons name="logo-usd" size={22} color="#fff" />
            </View>
            <View>
              <Text style={styles.tokenSelectLabel}>{subLabel}</Text>
              <Text style={styles.tokenSelectToken}>{toToken}</Text>
            </View>
            {isBuy && <Text style={styles.tokenBalance}>Balance: 0</Text>}
            <Ionicons name="chevron-forward" size={18} color="#fff" style={{ marginLeft: 8 }} />
          </View>
        </View>
      </ScrollView>

      {/* Next Button */}
      <View style={styles.nextBtnWrapper}>
        <TouchableOpacity
          style={[
            styles.nextBtn,
            nextBtnPressed && styles.nextBtnPressed,
          ]}
          disabled
          activeOpacity={0.7}
          onPressIn={() => setNextBtnPressed(true)}
          onPressOut={() => setNextBtnPressed(false)}
        >
          <Text style={styles.nextBtnText}>Next</Text>
        </TouchableOpacity>
      </View>
    </KeyboardAvoidingView>
  );
}

const PURPLE = '#a259ec';

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#111', paddingHorizontal: 0 },
  header: {
    flexDirection: 'row', alignItems: 'center', marginTop: 32, marginBottom: 18, paddingHorizontal: 18,
  },
  title: { color: '#fff', fontWeight: 'bold', fontSize: 32 },
  sideTabs: {
    flexDirection: 'row', alignSelf: 'flex-start', marginLeft: 18, marginBottom: 18,
    backgroundColor: '#222', borderRadius: 24, padding: 4,
  },
  sideTab: {
    paddingVertical: 6, paddingHorizontal: 28, borderRadius: 20,
    backgroundColor: 'transparent',
  },
  sideTabActive: {
    backgroundColor: '#fff',
    shadowColor: PURPLE,
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
  sideTabText: { color: PURPLE, fontWeight: 'bold', fontSize: 18 },
  sideTabTextActive: { color: '#111' },
  amountRow: {
    flexDirection: 'row', alignItems: 'center', marginLeft: 18, marginBottom: 2,
  },
  amountInput: {
    color: '#fff',
    fontSize: 54,
    fontWeight: 'bold',
    backgroundColor: 'transparent',
    borderWidth: 0,
    flex: 1,
    minWidth: 80,
  },
  tokenIcon: {
    width: 18, height: 18, borderRadius: 4, backgroundColor: PURPLE, marginHorizontal: 8,
  },
  amountToken: { color: '#888', fontSize: 44, fontWeight: 'bold' },
  amountSub: { color: '#888', fontSize: 18, marginLeft: 18, marginBottom: 18 },
  tokenSelectRow: { marginHorizontal: 18, marginBottom: 18 },
  tokenSelectItem: {
    flexDirection: 'row', alignItems: 'center', backgroundColor: '#181818',
    borderRadius: 12, padding: 14, marginBottom: 2,
  },
  tokenIconCircle: {
    width: 36, height: 36, borderRadius: 18, backgroundColor: '#222', alignItems: 'center', justifyContent: 'center', marginRight: 12,
  },
  tokenSelectLabel: { color: '#fff', fontWeight: 'bold', fontSize: 16 },
  tokenSelectToken: { color: '#aaa', fontSize: 13 },
  tokenBalance: { color: '#aaa', fontSize: 13, marginLeft: 12, marginRight: 8 },
  tokenSelectLine: {
    height: 18, width: 2, backgroundColor: PURPLE, alignSelf: 'center', marginLeft: 28, marginBottom: 2,
  },
  nextBtnWrapper: {
    position: 'absolute',
    left: 0,
    right: 0,
    bottom: 18,
    alignItems: 'center',
    justifyContent: 'center',
    paddingHorizontal: 18,
  },
  nextBtn: {
    backgroundColor: PURPLE,
    borderRadius: 32,
    paddingVertical: 18,
    alignItems: 'center',
    width: '100%',
    opacity: 1,
    transform: [{ scale: 1 }],
  },
  nextBtnPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }],
  },
  nextBtnText: { color: '#fff', fontWeight: 'bold', fontSize: 18 },
});