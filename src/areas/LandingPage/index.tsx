import React from 'react';
import { TouchableOpacity, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import usersApi from '../../reducers/slices/api/users'

const LandingPage: React.FC = () => {
  const navigation = useNavigation<any>();
  const { data } = usersApi.endpoints.getUsers.useQuery()
  console.log('...', data);

  return (
    <View style={styles.wrapper}>
    <Text>Quering https://jsonplaceholder.typicode.com/users</Text>
    
    {/* NOTE: I tried to see if I could silent the type error by navigating away or to another stack
    and quering there instead - the bug persisted */}
    {/* <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('AnotherStack')}>
      <Text>Navigate to test page</Text>
    </TouchableOpacity> */}
    </View>
  )
} 

const styles = StyleSheet.create({
  button: {
    width: 200,
    height: 50,
    borderWidth: 2,
    borderColor: 'black',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 7,
    marginTop: 20,
  },
  wrapper: {
    padding: 16,
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default LandingPage;