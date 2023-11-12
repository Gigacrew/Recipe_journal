
import React from 'react';
import type { PropsWithChildren } from 'react';
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  useColorScheme,
  View,
  TouchableOpacity
} from 'react-native';

import {
  Colors
} from 'react-native/Libraries/NewAppScreen';

type SectionProps = PropsWithChildren<{
  title: string;
}>;

function Section({ children, title }: SectionProps): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View style={styles.sectionContainer}>
      <Text
        style={[
          styles.sectionTitle,
          {
            color: isDarkMode ? Colors.white : Colors.black,
          },
        ]}>
        {title}
      </Text>
      <Text
        style={[
          styles.sectionDescription,
          {
            color: isDarkMode ? Colors.light : Colors.dark,
          },
        ]}>
        {children}
      </Text>
    </View>
  );
}

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  const backgroundStyle = {
    backgroundColor: isDarkMode ? Colors.darker : Colors.lighter,
  };

  return (
    <SafeAreaView>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={backgroundStyle.backgroundColor}
      />
      <ScrollView
        contentContainerStyle={{ backgroundColor: '#ffeecf', width: "100%", height: "100%" }}
      >
        <View>
          <View style={{ alignSelf: "center", marginTop: 50, borderLeftWidth: 20, borderRadius: 8, backgroundColor: "#e9aaa9", width: 240, height: 360 }}>
            <View style={{ alignSelf: 'center', marginTop: 20, width: 120 }}>
              <View style={{ height: 60, borderRadius: 30, width: 60, backgroundColor: 'white', alignSelf: 'center' }} />
              <View style={{ position: 'absolute', top: 30, height: 30, borderRadius: 15, width: 110, backgroundColor: 'white', alignSelf: 'center' }} />
              <View style={{ position: 'absolute', top: 50, height: 80, borderBottomLeftRadius: 12, borderBottomRightRadius: 12, width: 70, backgroundColor: 'white', alignSelf: 'center' }}>
                <View style={{ height: 10, width: 70, position: 'absolute', bottom: 10, backgroundColor: "#e9aaa9" }} />
              </View>
            </View>

            <Text style={{ textAlign: 'center', marginTop: 120, fontWeight: 'bold', fontSize: 36 }}>
              {'Recipe \nJournal'}
            </Text>
          </View>
          <View style={{marginHorizontal: 20, marginTop: 16}}>
            <Text style={{textAlign: 'center', fontSize: 16, color:"#4C331A"}}>A login away from secret recipes🤤 </Text>
            <TextInput
              style={styles.input}
            // onChangeText={onChangeText}
            // value={text}
            placeholder="me@example.com"
            />
            <TextInput
              style={styles.input}
              // onChangeText={onChangeNumber}
              // value={number}
              placeholder="your password"
              keyboardType="numeric"
            />
          </View>

          <View style={styles.bottomBox}>
        <TouchableOpacity
          style={[styles.buttonStyle,{backgroundColor: "#253C78"}]}
          onPress={() => {
            // doLogin();
          }}>
          <Text style={styles.buttonFont}>Login</Text>
        </TouchableOpacity>
        <View style={{flexDirection: 'row', alignSelf: 'center', marginTop: 12}}>
          <Text style={{color:"#4C331A"}}>New here? </Text>
          <TouchableOpacity
          onPress={() => {
            // navigation.goBack();
          }}>
          <Text style={{color:"#253C78"}}>Sign up</Text>
        </TouchableOpacity>
        </View>

      </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
  },
  highlight: {
    fontWeight: '700',
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    borderColor: 'gray',
    borderRadius: 8
  },
  bottomBox: {
    marginHorizontal: 20,
  },
  buttonStyle: {
    backgroundColor: 'grey',
    padding: 10,
    alignItems: 'center',
    marginBottom: 2,
    height: 40,
    borderRadius: 20
  },
  buttonFont: {
    color: 'white',
  },
  inputBoxWrapper: {
    width: '100%',
    padding: 20,
    alignItems: 'center',
  },
});

export default App;
