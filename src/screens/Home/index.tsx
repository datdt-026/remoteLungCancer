import React from 'react';
import {
  FlatList,
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import urls from '../../config/Api';

import {IPatient} from '../../data/information';

// const data = [
//   {
//     id: '0',
//     src: require('../../assets/Focus.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '1',
//     src: require('../../assets/Hapiness.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '2',
//     src: require('../../assets/Focus.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '3',
//     src: require('../../assets/Hapiness.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '4',
//     src: require('../../assets/Focus.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '5',
//     src: require('../../assets/Hapiness.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '6',
//     src: require('../../assets/Focus.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
//   {
//     id: '7',
//     src: require('../../assets/Hapiness.png'),
//     name: 'Nguyen Van A',
//     age: '26',
//     address: 'Hanoi',
//     phone: '0987677898',
//     sympstoms: 'Dry cough, cough with phlegm, difficulty breathing',
//     date_diagnosis: '25/11/2021',
//     date_ctscan: '26/11/2021',
//   },
// ];

const Home = () => {
  const [data, setData] = React.useState<IPatient[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);

  React.useEffect(() => {
    fetch(urls.patient)
      .then(response => response.json())
      .then(patients => {
        console.log('json', patients);
        setData(patients);
        setLoading(false);
      })
      .catch(error => {
        console.error(error);
      });
  }, []);

  return (
    <SafeAreaView style={{flex: 1}}>
      <View>
        <Text
          style={{
            textAlign: 'center',
            fontSize: 24,
            fontWeight: 'bold',
          }}>
          PATIENTS
        </Text>
        <FlatList
          data={data}
          keyExtractor={({id}, index) => id.toString()}
          style={{marginTop: 24}}
          renderItem={({item}) => (
            <View style={{padding: 12}}>
              <Image
                style={{
                  width: 240,
                  height: 200,
                  borderRadius: 10,
                  borderColor: 'black',
                }}
                source={{uri: `${item.src}`}}
              />
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - ID: {item.id}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Name: {item.name}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Age: {item.age}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Address: {item.address}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Phone: {item.phone}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Sympstoms: {item.sympstoms}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Date of Diagnosis: {item.date_diagnosis}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                - Date of CT Scan: {item.date_ctscan}
              </Text>
              <Text style={{color: '#A1A4B2', marginTop: 5, textAlign: 'left'}}>
                _______________
              </Text>
            </View>
          )}
        />
      </View>
    </SafeAreaView>
  );
};

export default Home;

const styles = StyleSheet.create({});
