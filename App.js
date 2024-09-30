import React from 'react';
import {StyleSheet, View} from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken(
  'sk.eyJ1IjoibGl0dGxlc3RhcjU4IiwiYSI6ImNtMW96bmFoYzE2czIydnNuYzlyZ2J6NW8ifQ.iXt13c3OgWZ_xLfHbLuWtg',
);

const App = () => {
  useEffect(() => {
    MapboxGL.setAccessToken(
      'sk.eyJ1IjoibGl0dGxlc3RhcjU4IiwiYSI6ImNtMW96bmFoYzE2czIydnNuYzlyZ2J6NW8ifQ.iXt13c3OgWZ_xLfHbLuWtg',
    );
  }, []);
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
};

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1,
  },
});
