import { Feather, Ionicons, MaterialCommunityIcons, MaterialIcons } from '@expo/vector-icons';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';

const PURPLE = '#a259ec';

export default function SettingScreen({ onBack }: { onBack?: () => void }) {
  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={{ paddingBottom: 32 }}>
        {/* Header */}
        <View style={styles.headerRow}>
          <TouchableOpacity onPress={onBack} style={styles.backBtn}>
            <Ionicons name="chevron-back" size={28} color="#fff" />
          </TouchableOpacity>
          <Text style={styles.headerTitle}>Settings</Text>
        </View>

        {/* Wallet Security */}
        <Text style={styles.sectionTitle}>Wallet security</Text>
        <View style={styles.iconRow}>
          <SettingIcon
            icon={<Feather name="edit-3" size={28} color={PURPLE} />}
            label="Backups"
          />
          <SettingIcon
            icon={<MaterialIcons name="password" size={28} color={PURPLE} />}
            label="Password"
          />
          <SettingIcon
            icon={<MaterialCommunityIcons name="shield-check-outline" size={28} color={PURPLE} />}
            label="Security audit"
          />
        </View>

        {/* Basic */}
        <Text style={styles.sectionTitle}>Basic</Text>
        <View style={styles.iconRow}>
          <SettingIcon
            icon={<Ionicons name="wallet-outline" size={28} color={PURPLE} />}
            label="Wallet management"
          />
          <SettingIcon
            icon={<Ionicons name="options-outline" size={28} color={PURPLE} />}
            label="Custom networks"
          />
          <SettingIcon
            icon={<Ionicons name="person-outline" size={28} color={PURPLE} />}
            label="Address book"
          />
          <SettingIcon
            icon={<Ionicons name="settings-outline" size={28} color={PURPLE} />}
            label="Preferences"
          />
        </View>
        <View style={styles.iconRow}>
          <SettingIcon
            icon={<MaterialCommunityIcons name="qrcode-scan" size={28} color={PURPLE} />}
            label={
              <View style={styles.walletConnectLabelRow}>
                <Text style={{ color: '#fff' }}>Wallet Connect</Text>
                <View style={styles.newBadge}><Text style={styles.newBadgeText}>New</Text></View>
              </View>
            }
          />
        </View>

        {/* More */}
        <Text style={styles.sectionTitle}>More</Text>
        <View style={styles.iconRow}>
          <SettingIcon
            icon={<Ionicons name="document-text-outline" size={28} color={PURPLE} />}
            label="Terms of Service"
          />
          <SettingIcon
            icon={<Ionicons name="book-outline" size={28} color={PURPLE} />}
            label="Privacy Notice"
          />
          <SettingIcon
            icon={<Ionicons name="planet-outline" size={28} color={PURPLE} />}
            label="Community"
          />
          <SettingIcon
            icon={<Ionicons name="help-circle-outline" size={28} color={PURPLE} />}
            label="Get help"
          />
        </View>
      </ScrollView>

      {/* Footer */}
      <View style={styles.footer}>
        <Ionicons name="information-circle-outline" size={20} color={PURPLE} />
        <Text style={styles.footerText}>About OKX</Text>
        <Text style={styles.footerVersion}>v6.125.0</Text>
        <Ionicons name="chevron-forward" size={18} color="#fff" />
      </View>
    </View>
  );
}

function SettingIcon({ icon, label }: { icon: React.ReactNode; label: React.ReactNode }) {
  return (
    <TouchableOpacity style={styles.iconButton} activeOpacity={0.7}>
      {icon}
      {typeof label === 'string' ? (
        <Text style={styles.iconLabel}>{label}</Text>
      ) : (
        <View style={styles.iconLabel}>{label}</View>
      )}
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#000' },
  headerRow: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: 32,
    paddingBottom: 12,
    paddingHorizontal: 18,
  },
  backBtn: {
    padding: 4,
    marginRight: 4,
  },
  headerTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 32,
    marginLeft: 8,
  },
  sectionTitle: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 18,
    marginTop: 24,
    marginBottom: 10,
    marginLeft: 18,
  },
  iconRow: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 8,
    marginLeft: 8,
  },
  iconButton: {
    alignItems: 'center',
    marginHorizontal: 10,
    marginVertical: 8,
    width: 80,
  },
  iconLabel: {
    color: '#fff',
    fontSize: 13,
    marginTop: 8,
    textAlign: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  walletConnectLabelRow: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 4,
  },
  newBadge: {
    backgroundColor: '#caff00',
    borderRadius: 6,
    paddingHorizontal: 6,
    marginLeft: 4,
    height: 18,
    justifyContent: 'center',
    alignItems: 'center',
  },
  newBadgeText: {
    color: '#222',
    fontWeight: 'bold',
    fontSize: 11,
  },
  footer: {
    flexDirection: 'row',
    alignItems: 'center',
    borderTopColor: '#181818',
    borderTopWidth: 1,
    padding: 14,
    backgroundColor: '#000',
  },
  footerText: {
    color: '#fff',
    marginLeft: 8,
    fontSize: 16,
    flex: 1,
  },
  footerVersion: {
    color: PURPLE,
    fontSize: 14,
    marginRight: 8,
  },
});