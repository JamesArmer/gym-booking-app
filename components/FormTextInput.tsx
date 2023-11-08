import {StyleSheet, Text, TextInput, View} from 'react-native';

type formTextInputProps = {
  input_text: string;
  placeholder_text: string;
};

const FormTextInput = (props: formTextInputProps) => {
  return (
    <View>
      <Text style={styles.inputTitle}>{props.input_text}</Text>
      <TextInput
        style={styles.inputContainer}
        placeholder={props.placeholder_text}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputTitle: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '700',
  },
  inputContainer: {
    borderWidth: 1,
    height: 40,
  },
});

export default FormTextInput;
