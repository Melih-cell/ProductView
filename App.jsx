import React from 'react';
import {View, StyleSheet, Text, FlatList} from 'react-native';
import musicData from './musicData.json';
import SongCard from './components/SongCard/SongCard';

const App = () => {
  const renderSong = ({item}) => <SongCard song={item} />;

  return (
    <View style={styles.container}>
      <FlatList
        keyExtractor={item => item.id}
        data={musicData}
        renderItem={renderSong}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
});

export default App;
