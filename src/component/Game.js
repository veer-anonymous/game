import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
  Dimensions,
  Image,
} from 'react-native';
import React, {useEffect, useState} from 'react';
import {useIsFocused, useNavigation, useRoute} from '@react-navigation/native';
import {scale} from 'react-native-size-matters';

const Game = () => {
  const route = useRoute();
  const isFocus = useIsFocused();
  // console.log('this is rout', route.params);
  const navigation = useNavigation();
  const [add, setAdd] = useState(1);
  const [number1, setNumber1] = useState('');
  const [number2, setNumber2] = useState('');
  const [anwser, setAnwser] = useState('');
  const [valueCheck1, setValueCheck1] = useState();
  const [valueCheck2, setValueCheck2] = useState();
  const [valueCheck3, setValueCheck3] = useState();
  const [valueCheck4, setValueCheck4] = useState();

  const [number, setNumber] = useState();

  const [option1, setOption1] = useState();
  const [option2, setOption2] = useState();
  const [option3, setOption3] = useState();

  useEffect(() => {
    randomNumber1();
    randomNumber2();
    onptionOne();
    onptionTwo();
    onptionThree();
    total();
  }, [number]);
  const randomNumber1 = () => {
    const one = Math.floor(Math.random() * 10);
    setNumber1(one);
  };
  const randomNumber2 = () => {
    const one = Math.floor(Math.random() * 10);
    setNumber2(one);
  };

  const total = () => {
    // const total_anr = number1 + number2;
    setAnwser(number1 + number2);
  };

  const onptionOne = () => {
    const one = Math.floor(Math.random() * 10);
    setOption1(one);
  };
  const onptionTwo = () => {
    const one = Math.floor(Math.random() * 10);
    setOption2(one);
  };
  const onptionThree = () => {
    const one = Math.floor(Math.random() * 10);
    setOption3(one);
  };
  const correct_or_not = () => {
    const value = anwser == 10;
  };
  //   console.log(Math.floor(Math.random() * 101));
  console.log('callhiere data num', add);
  return (
    // <ImageBackground
    //   source={require('../image/BG.png')}
    //   style={style.container}>
    <>
      {route.params.type == add || add == 1 ? (
        <View style={style.container}>
          <View style={style.quation}>
            <Text style={{color: 'pink', fontSize: 20}}>
              {number1 + number2}
            </Text>
            <TouchableOpacity>
              <Text style={style.number}>{number1}</Text>
            </TouchableOpacity>
            <Text style={style.number}>+</Text>

            <Text style={style.number}>{number2}</Text>

            <Text style={style.number}>=</Text>
            <Text style={style.number}>?</Text>
          </View>
          <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
          <View style={style.option}>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck1 == false
                      ? 'red'
                      : valueCheck1 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option1 == number1 + number2) {
                  setValueCheck1(true);
                } else {
                  setValueCheck1(false);
                }
              }}>
              <Text style={style.option_one_text}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck2 == false
                      ? 'red'
                      : valueCheck2 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option2 == number1 + number2) {
                  setValueCheck2(true);
                } else {
                  setValueCheck2(false);
                }
              }}>
              <Text style={style.option_one_text}>{option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck3 == false
                      ? 'red'
                      : valueCheck3 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option3 == number1 + number2) {
                  setValueCheck3(true);
                } else {
                  setValueCheck3(false);
                }
              }}>
              {/* <Image
              source={require('../image/Crate.png')}
              style={{width: 100, height: 100}}
            /> */}
              <Text style={style.option_one_text}>{option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck4 == false
                      ? 'red'
                      : valueCheck4 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                // total();
                // if (true) {
                //   console.log('one');
                //   if (anwser == number1 + number2) {
                //     console.log('anser call', anwser);
                //     setValueCheck(true);
                //   } else {
                //     setValueCheck(false);
                //   }
                //   // setValueCheck(!valueCheck);
                //   console.log(valueCheck);
                // }
                // console.log('anser call', anwser);
                if (number1 + number2 == number1 + number2) {
                  setValueCheck4(true);
                } else {
                  setValueCheck4(false);
                }
              }}>
              <Text style={style.option_one_text}>
                {/* {Math.floor(Math.random() * 10)} */}
                {number1 + number2}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : route.params.type == add || add == 2 ? (
        <View style={style.container}>
          <View style={style.quation}>
            <Text style={{color: 'pink', fontSize: 20}}>
              {number1 + number2}
            </Text>
            <TouchableOpacity>
              <Text style={style.number}>{number1}</Text>
            </TouchableOpacity>
            <Text style={style.number}>+</Text>

            <Text style={style.number}>{number2}</Text>

            <Text style={style.number}>=</Text>
            <Text style={style.number}>?</Text>
          </View>
          <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
          <View style={style.option}>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck1 == false
                      ? 'red'
                      : valueCheck1 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option1 == number1 + number2) {
                  setValueCheck1(true);
                } else {
                  setValueCheck1(false);
                }
              }}>
              <Text style={style.option_one_text}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck2 == false
                      ? 'red'
                      : valueCheck2 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option2 == number1 + number2) {
                  setValueCheck2(true);
                } else {
                  setValueCheck2(false);
                }
              }}>
              <Text style={style.option_one_text}>{option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck3 == false
                      ? 'red'
                      : valueCheck3 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option3 == number1 + number2) {
                  setValueCheck3(true);
                } else {
                  setValueCheck3(false);
                }
              }}>
              {/* <Image
              source={require('../image/Crate.png')}
              style={{width: 100, height: 100}}
            /> */}
              <Text style={style.option_one_text}>{option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck4 == false
                      ? 'red'
                      : valueCheck4 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                // total();
                // if (true) {
                //   console.log('one');
                //   if (anwser == number1 + number2) {
                //     console.log('anser call', anwser);
                //     setValueCheck(true);
                //   } else {
                //     setValueCheck(false);
                //   }
                //   // setValueCheck(!valueCheck);
                //   console.log(valueCheck);
                // }
                // console.log('anser call', anwser);
                if (number1 + number2 == number1 + number2) {
                  setValueCheck4(true);
                } else {
                  setValueCheck4(false);
                }
              }}>
              <Text style={style.option_one_text}>
                {/* {Math.floor(Math.random() * 10)} */}
                {number1 + number2}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : route.params.type == add || add == 3 ? (
        <View style={style.container}>
          <View style={style.quation}>
            <Text style={{color: 'pink', fontSize: 20}}>
              {number1 + number2}
            </Text>
            <TouchableOpacity>
              <Text style={style.number}>{number1}</Text>
            </TouchableOpacity>
            <Text style={style.number}>+</Text>

            <Text style={style.number}>{number2}</Text>

            <Text style={style.number}>=</Text>
            <Text style={style.number}>?</Text>
          </View>
          <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
          <View style={style.option}>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck1 == false
                      ? 'red'
                      : valueCheck1 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option1 == number1 + number2) {
                  setValueCheck1(true);
                } else {
                  setValueCheck1(false);
                }
              }}>
              <Text style={style.option_one_text}>{option1}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck2 == false
                      ? 'red'
                      : valueCheck2 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option2 == number1 + number2) {
                  setValueCheck2(true);
                } else {
                  setValueCheck2(false);
                }
              }}>
              <Text style={style.option_one_text}>{option2}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck3 == false
                      ? 'red'
                      : valueCheck3 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (option3 == number1 + number2) {
                  setValueCheck3(true);
                } else {
                  setValueCheck3(false);
                }
              }}>
              <Text style={style.option_one_text}>{option3}</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                style.option_one,
                {
                  borderColor:
                    valueCheck4 == false
                      ? 'red'
                      : valueCheck4 == true
                      ? 'lightgreen'
                      : '#5761BD',
                },
              ]}
              onPress={() => {
                if (number1 + number2 == number1 + number2) {
                  setValueCheck4(true);
                } else {
                  setValueCheck4(false);
                }
              }}>
              <Text style={style.option_one_text}>
                {/* {Math.floor(Math.random() * 10)} */}
                {number1 + number2}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      ) : (
        <View>
          <Text>hi</Text>
        </View>
      )}
      <View style={style.bottom}>
        <TouchableOpacity style={style.bottom_button}>
          <Text
            style={style.bottom_button_text}
            onPress={() => {
              setAdd(add - 1);
            }}>
            ⬅️
          </Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={style.bottom_button}
          onPress={() => {
            randomNumber1();
            randomNumber2();
          }}>
          <Text style={style.bottom_button_text}> 🆗</Text>
        </TouchableOpacity>
        <TouchableOpacity style={style.bottom_button}>
          <Text
            style={style.bottom_button_text}
            onPress={() => {
              setAdd(add + 1);
              setNumber(1);
            }}>
            ➡️
          </Text>
        </TouchableOpacity>
      </View>
    </>
    // </ImageBackground>
  );
};
// backgroundColor: '#A76AE4',
// marginVertical: verticalScale(5),
// padding: scale(10),
// borderRadius: 10,
// justifyContent: 'center',
// alignItems: 'center',
// borderWidth: 3,
// borderColor: '#5761BD',
export default Game;
const style = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8331D4',
    // resizeMode: 'cover',
    // height: Dimensions.get('screen').height,
    // width: '100%',
  },
  quation: {
    width: '90%',
    backgroundColor: '#A76AE4',
    flexDirection: 'row',
    // marginVertical: scale(100),
    // marginHorizontal: scale(10),
    marginTop: scale(100),
    marginBottom: scale(50),
    alignSelf: 'center',
    borderRadius: 10,
    justifyContent: 'space-evenly',
    borderWidth: 3,
    borderColor: '#5761BD',
  },
  number: {
    fontSize: scale(50),
    fontWeight: 'bold',
    color: '#fff',
  },
  option: {
    width: '100%',
    // backgroundColor: 'lightgree',
    flexDirection: 'row',
    flexWrap: 'wrap',
    paddingHorizontal: scale(30),
    marginVertical: scale(10),
  },
  option_one: {
    width: scale(125),
    height: scale(70),
    backgroundColor: '#A76AE4',
    marginHorizontal: scale(10),
    marginVertical: scale(10),
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#5761BD',
  },
  option_one_text: {
    fontSize: scale(50),
    fontWeight: 'bold',
    color: '#fff',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    marginVertical: scale(40),
    backgroundColor: '#8331D4',
  },
  bottom_button: {
    // backgroundColor: 'lightblue',
    // borderRadius: 10,
  },
  bottom_button_text: {
    // color: 'black',
    // fontWeight: 'bold',
    fontSize: scale(60),
    color: '#fff',
    // paddingVertical: scale(15),
    // paddingHorizontal: scale(7),
  },
});

// : route.params.type == 'four' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : route.params.type == 'five' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : route.params.type == 'six' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : route.params.type == 'seven' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : route.params.type == 'eight' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : route.params.type == 'nine' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// ) : route.params.type == 'ten' ? (
//   <View style={style.container}>
//     <View style={style.quation}>
//       <Text style={{color: 'pink', fontSize: 20}}>
//         {number1 + number2}
//       </Text>
//       <TouchableOpacity>
//         <Text style={style.number}>{number1}</Text>
//       </TouchableOpacity>
//       <Text style={style.number}>+</Text>

//       <Text style={style.number}>{number2}</Text>

//       <Text style={style.number}>=</Text>
//       <Text style={style.number}>?</Text>
//     </View>
//     <Text style={{alignSelf: 'center', fontSize: scale(50)}}>🤔</Text>
//     <View style={style.option}>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck1 == false
//                 ? 'red'
//                 : valueCheck1 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option1 == number1 + number2) {
//             setValueCheck1(true);
//           } else {
//             setValueCheck1(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option1}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck2 == false
//                 ? 'red'
//                 : valueCheck2 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option2 == number1 + number2) {
//             setValueCheck2(true);
//           } else {
//             setValueCheck2(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option2}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck3 == false
//                 ? 'red'
//                 : valueCheck3 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (option3 == number1 + number2) {
//             setValueCheck3(true);
//           } else {
//             setValueCheck3(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>{option3}</Text>
//       </TouchableOpacity>
//       <TouchableOpacity
//         style={[
//           style.option_one,
//           {
//             borderColor:
//               valueCheck4 == false
//                 ? 'red'
//                 : valueCheck4 == true
//                 ? 'lightgreen'
//                 : '#5761BD',
//           },
//         ]}
//         onPress={() => {
//           if (number1 + number2 == number1 + number2) {
//             setValueCheck4(true);
//           } else {
//             setValueCheck4(false);
//           }
//         }}>
//         <Text style={style.option_one_text}>
//           {/* {Math.floor(Math.random() * 10)} */}
//           {number1 + number2}
//         </Text>
//       </TouchableOpacity>
//     </View>
//   </View>
// )
