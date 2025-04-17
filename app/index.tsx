import { View, Text, StyleSheet } from "react-native";
import {Slider} from "@react-native-assets/slider";

export default function Index() {

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Border Radius Previewer</Text>
      <View style={styles.rectangle} />
      <View style={styles.sliderContainer}>
        <Text style={styles.tag}>Top Left</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={20}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
        />
        <Text style={styles.tag}>Top Left</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={20}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
        />
        <Text style={styles.tag}>Top Left</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={20}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
        />
        <Text style={styles.tag}>Top Left</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={20}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: "#1f2335"
  },
  rectangle: {
    width: 200,
    height: 200,
    marginBottom: 50,
    borderWidth: 3,
    borderRadius: 10,
    borderColor: "#ff007c",
    backgroundColor: "#414868"
  },
  sliderContainer: {
    flex: 2.5,
    width: 300,
    flexDirection: 'column',
    backgroundColor: 'inherit',
    justifyContent: 'center',
    alignItems: 'center',
  },
  slider: {
    width: 200,
  },
  title: {
    flex: 0.5,
    color: 'white',
    marginTop: 50,
    fontSize: 30,
  },
  tag: {
    color: 'white',
    margin: 10
  }
});