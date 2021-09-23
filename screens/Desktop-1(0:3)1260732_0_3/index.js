import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "@screens"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView
      contentContainerStyle={{ flexGrow: 1 }}
      style={styles.ScrollView_1}
    >
      <View style={styles.View_2} />
      <View style={styles.View_5_20}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f026/1fac/0b787081947767b0acd3a7c3e003bb06"
          }}
          style={styles.ImageBackground_4_6}
        />
      </View>
      <View style={styles.View_4_10}>
        <View style={styles.View_4_11} />
        <View style={styles.View_4_12}>
          <Text style={styles.Text_4_12}>Sign up</Text>
        </View>
      </View>
      <View style={styles.View_4_13}>
        <View style={styles.View_4_14} />
        <View style={styles.View_4_15}>
          <Text style={styles.Text_4_15}>Login</Text>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d3c/1d48/b6688144a59fc727d320256eee94374a"
        }}
        style={styles.ImageBackground_4_17}
      />
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: { backgroundColor: "rgba(255, 255, 255, 1)" },
  View_2: { height: hp("139.89071038251367%") },
  View_5_20: {
    width: wp("100%"),
    height: hp("139.89071038251367%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_4_6: {
    width: wp("133.88888888888889%"),
    height: hp("153.96174863387978%"),
    top: hp("-22.26775956284153%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("-20.625%")
  },
  View_4_10: {
    width: wp("27.173915439181854%"),
    minWidth: wp("27.173915439181854%"),
    height: hp("11.937334237854337%"),
    minHeight: hp("11.937334237854337%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.41305287679037%"),
    top: hp("83.37484057483778%")
  },
  View_4_11: {
    width: wp("27.173915439181854%"),
    height: hp("11.82650373281677%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.08651650017075951%"),
    backgroundColor: "rgba(83, 245, 69, 1)"
  },
  View_4_12: {
    width: wp("27.103966606987846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.034980773925774145%"),
    top: hp("0%"),
    justifyContent: "center"
  },
  Text_4_12: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_4_13: {
    width: wp("27.173915439181854%"),
    minWidth: wp("27.173915439181854%"),
    height: hp("11.994071084944927%"),
    minHeight: hp("11.994071084944927%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.41305287679037%"),
    top: hp("66.90426602389643%")
  },
  View_4_14: {
    width: wp("27.173915439181854%"),
    height: hp("11.82649122561262%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(86, 165, 241, 1)"
  },
  View_4_15: {
    width: wp("27.103966606987846%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.034980773925774145%"),
    top: hp("0.05673684709059046%"),
    justifyContent: "center"
  },
  Text_4_15: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 27,
    fontWeight: "700",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  ImageBackground_4_17: {
    width: wp("6.944444444444445%"),
    height: hp("13.661202185792352%"),
    top: hp("6.420765027322404%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("89.79166666666667%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
