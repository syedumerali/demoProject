import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  headerMainView: {
    justifyContent: 'space-between',
    flexDirection: 'row',
    backgroundColor: '#2a2b31',
    borderBottomStartRadius: 18,
    borderBottomEndRadius: 18,
    paddingBottom: 100,
  },

  headerRowView: {
    flexDirection: 'row',
    marginLeft: 20,
    paddingTop: 10,
  },

  profilePicture: {
    height: 50,
    width: 50,
    borderRadius: 25,
  },

  headerTextView: {
    alignSelf: 'center',
    marginLeft: 15,
  },

  headerTextStyle: {
    color: 'white',
    fontWeight: 'bold',
    fontSize: 15,
  },

  logoutButton: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 20,
    marginTop: 10,
  },

  logoutButtonText: {
    color: 'gray',
  },
});
