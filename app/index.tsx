import { Redirect } from 'expo-router';

export default function IndexScreen() {
  // Immediately redirect to the login page on app start
  return <Redirect href="/(Auth)/login" />;
}
