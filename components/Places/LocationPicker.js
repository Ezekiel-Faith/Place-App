import { StyleSheet, Text, View } from 'react-native';
import OutlinedButton from '../UI/OutlinedButton';
import { act } from 'react';
import { Colors } from '../../constants/colors';

export default function LocationPicker() {
  function getLocationHandler() {}

  function pickOnMapHandler() {}

  return (
    <View>
      <View style={styles.mapPreview}></View>

      <View style={styles.actions}>
        <OutlinedButton icon='location' onPress={getLocationHandler}>
          Locate User
        </OutlinedButton>
        <OutlinedButton icon='map' onPress={pickOnMapHandler}>
          Pick On Map
        </OutlinedButton>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  mapPreview: {
    width: '100%',
    height: 200,
    marginVertical: 8,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.primary100,
    borderRadius: 4,
  },
  actions: {
    flexDirection: 'row',
  },
});
