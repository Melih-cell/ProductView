import {StyleSheet} from 'react-native';

export default StyleSheet.create({
  container: {
    padding: 10,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: 'gray',
  },
  image: {
    width: 100,
    height: 100,
    borderRadius: 50,
  },
  inner_container: {
    padding: 10,
    flex: 1,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  info_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    flex: 1,
    alignItems: 'center',
  },
  year: {
    marginLeft: 5,
    marginRight: 'auto',
    fontWeight: 'bold',
    color: 'gray',
    fontSize: 10,
  },

  soldout_title: {
    color: 'red',
    textAlign: 'center',
  },
  soldout_container: {
    borderColor: 'red',
    borderWidth: 1,
    borderRadius: 5,
    padding: 5,
    alignItems: 'center',
    justifyContent: 'center',
  },

  content_container: {
    flexDirection: 'row',
  },
});
