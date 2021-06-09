import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  // Footer
  header: {
    backgroundColor: '#fff',
    height: 60,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10,
  },
  container: {
    flex: 1,
    padding: 30,
    justifyContent: 'center',
  },
  textareaContainer: {
    height: 'auto',
    padding: 5,
    backgroundColor: '#fff',
    borderWidth: 1,
    borderColor: '#3ABDB7',
  },
  textarea: {
    textAlignVertical: 'top', // hack android
    height: 'auto',
    fontSize: 14,
    color: '#333',
  },
  footerContentCentered: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
  },
  footerVoiceContainer: {
    // elevation: 3,
    height: 70,
    width: 70,
    backgroundColor: '#3ABDB7',
    borderRadius: 35,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 60,
    top: -20,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
  },
  customBtnBG: {
    backgroundColor: '#fff',
    paddingHorizontal: 30,
    paddingVertical: 5,
    borderRadius: 10,
    margin: 10,
    height: 53,
    backgroundColor: '#3ABDB7',
  },
  customBtnBGText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    textAlign: 'center',
    marginTop: 5,
  },
});
