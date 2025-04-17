import { View, Text, StyleSheet } from "react-native";
import {Slider} from "@react-native-assets/slider";
import {useState} from "react";

export default function Index() {

  const [topLeft, setTopLeft] = useState<number>(0);
  const [bottomLeft, setBottomLeft] = useState<number>(0);
  const [bottomRight, setBottomRight] = useState<number>(0);
  const [topRight, setTopRight] = useState<number>(0);


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Border Radius Previewer</Text>
      <View style={
        [styles.rectangle, {borderTopLeftRadius: topLeft,
                            borderTopRightRadius: topRight,
                            borderBottomLeftRadius: bottomLeft,
                            borderBottomRightRadius: bottomRight}
        ]
      } />
      <View style={styles.sliderContainer}>
        <Text style={styles.tag}>Top Left</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={200}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
            onValueChange={value => setTopLeft(value)}
        />
        <Text style={styles.tag}>Top Right</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={200}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
            onValueChange={value => setTopRight(value)}
        />
        <Text style={styles.tag}>Bottom Left</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={200}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
            onValueChange={value => setBottomLeft(value)}
        />
        <Text style={styles.tag}>Bottom Right</Text>
        <Slider
            style={styles.slider}
            value={0}                         // set the current slider's value
            minimumValue={0}                  // Minimum value (defaults as 0)
            maximumValue={200}                  // Maximum value (defaults as minimumValue + step)
            step={1}                          // The step for the slider (0 means that the slider will handle any decimal value within the range [min, max])
            minimumTrackTintColor='#ff007c'      // The track color before the current value
            thumbTintColor='#4fd6be'
            onValueChange={value => setBottomRight(value)}
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
    borderWidth: 5,
    borderRadius: 0,
    borderColor: "#ff007c",
    backgroundColor: "#414868"
  },
  sliderContainer: {
    flex: 2.5,
    width: 300,
    flexDirection: 'column',
    backgroundColor: 'inherit',
    justifyContent: 'center',
    alignItems: 'center'
  },
  slider: {
    width: 200
  },
  title: {
    flex: 0.5,
    color: 'white',
    marginTop: 50,
    fontSize: 30
  },
  tag: {
    color: 'white',
    margin: 10
  }
});
