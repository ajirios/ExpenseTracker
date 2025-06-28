import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from '@react-navigation/native';
import SigninScreen from './screens/SigninScreen';
import DashboardScreen from './screens/DashboardScreen';
import SummaryScreen from './screens/SummaryScreen';
import TransactionScreen from './screens/TransactionScreen';
import { TransactionProvider } from './store/TransactionContext';
import { AuthProvider } from './store/AuthContext';



export default function App() {

  const Stack = createStackNavigator();

  return (
    <AuthProvider>
      <TransactionProvider>
        <NavigationContainer>
          <Stack.Navigator
              initialRouteName="Signin"
              screenOptions={{
                headerStyle: {
                  backgroundColor: '#354bb5',
                },
                headerTintColor: '#fff',
                headerTitleStyle: {
                  fontWeight: 'bold',
                }
              }}
          >
            <Stack.Screen name='Signin' component={SigninScreen} options={{headerShown: false}} />
            <Stack.Screen name='Dashboard' component={DashboardScreen} options={{headerShown: true, title: 'Expense Tracker'}} />
            <Stack.Screen name='Summary' component={SummaryScreen} options={{headerShown: true, title: 'Transaction Summary'}} />
            <Stack.Screen name='Transaction' component={TransactionScreen} options={{headerShown: true, title: 'Add New Transaction'}} />
          </Stack.Navigator>
        </NavigationContainer>
      </TransactionProvider>
    </AuthProvider>
  );
}


