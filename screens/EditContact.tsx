import React, {useEffect, useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {Appbar, Button, HelperText, TextInput} from 'react-native-paper';

const EditContact = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = () => {};

  const onChangeEmail = (inputEmail: string) => {
    setEmail(inputEmail);
  };

  const hasErrorData = (text: string) => {
    return !text;
  };
  useEffect(() => {}, []);
  const hasErrors = () => {
    return !email.includes('@');
  };

  return (
    <View style={styles.formContainer}>
      <Appbar.Header>
        <Appbar.Content title="Edit Contact" />
      </Appbar.Header>
      <View style={styles.whiteSheet}>
        <View>
          <TextInput
            label="Name"
            placeholder="Enter fullname"
            onChangeText={inputName => setName(inputName)}
            value={name}
            style={styles.inputFormStyle}
          />
          <HelperText type="error" visible={hasErrorData(name)}>
            Name is required!
          </HelperText>

          <TextInput
            label="Phone"
            placeholder="phone number"
            onChangeText={inputPhone => setPhone(inputPhone)}
            value={phone}
            keyboardType="numeric"
            style={styles.inputFormStyle}
          />

          <HelperText type="error" visible={hasErrorData(phone)}>
            Phone is required!
          </HelperText>
          <TextInput
            label="Email"
            placeholder="email"
            onChangeText={inputEmail => onChangeEmail(inputEmail)}
            value={email}
            keyboardType="email-address"
            style={styles.inputFormStyle}
          />
          <HelperText type="error" visible={hasErrors()}>
            Email address is invalid!
          </HelperText>
          <TextInput
            label="Address"
            placeholder="address"
            onChangeText={inputAddress => setAddress(inputAddress)}
            value={address}
            multiline
            numberOfLines={4}
            style={styles.inputFormStyle}
          />
          <HelperText type="error" visible={hasErrorData(address)}>
            Address is required!
          </HelperText>
        </View>
        <Button
          onPress={handleSubmit}
          icon="content-save"
          mode="contained-tonal">
          Submit
        </Button>
      </View>
    </View>
  );
};

export default EditContact;

const styles = StyleSheet.create({
  formContainer: {
    paddingVertical: 12,
    paddingHorizontal: 24,
    flex: 1,
    height: '70%',
    justifyContent: 'center',
  },
  inputFormStyle: {
    borderColor: '#B2BEB5',
    paddingHorizontal: 14,
    caret: 'red',
    color: 'black',
    backgroundColor: 'white',
    marginVertical: 10,
    borderStyle: 'solid',
    borderWidth: 0.5,
    borderRadius: 3,
  },
  textAddress: {
    height: 100,
  },
  whiteSheet: {
    width: '100%',
    paddingHorizontal: 20,
    paddingVertical: 30,
    bottom: 0,
    backgroundColor: '#F2F2F2',
  },
  scrollView: {
    flex: 1,
    backgroundColor: 'pink',
    alignItems: 'center',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    marginHorizontal: 30,
  },
});
