// MathGameComponent.js

import React, {useState, useEffect} from 'react';
import {
  View,
  Text,
  Button,
  StyleSheet,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import {generateNumbers, generateAnswers} from './Mathlogicgame'; // Importing the logic functions

const MathGameComponent = () => {
  const [level, setLevel] = useState(1);
  const [numbers, setNumbers] = useState([]);
  const [answers, setAnswers] = useState([]);
  const [score, setScore] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [gameOver, setGameOver] = useState(false);

  useEffect(() => {
    if (!gameOver) {
      const newNumbers = generateNumbers(level);
      const newAnswers = generateAnswers(newNumbers.answer);

      setNumbers(newNumbers);
      setAnswers(newAnswers);
    }
  }, [level, currentQuestionIndex, gameOver]);

  const handleAnswer = selectedAnswer => {
    if (selectedAnswer === numbers.answer) {
      setScore(score + 1);
    }
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restartGame = () => {
    setGameOver(false);
    setScore(0);
    setCurrentQuestionIndex(0);
  };

  const endGame = () => {
    setGameOver(true);
  };

  const startNewGame = selectedLevel => {
    setLevel(selectedLevel);
    restartGame();
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={'#9c27b0'} />
      <View style={styles.header_container}>
        <Text style={styles.title}>Math Game</Text>
        <Text style={styles.level}>Level: {level}</Text>
      </View>

      {!gameOver ? (
        <>
          <View style={styles.question_container}>
            <Text style={styles.question}>Question: {numbers.question}</Text>
            <View style={styles.answersContainer}>
              {answers.map((answer, index) => (
                <TouchableOpacity
                  style={styles.anser_btn}
                  key={index}
                  onPress={() => handleAnswer(answer)}>
                  <Text style={styles.anser_text}>{answer.toString()}</Text>
                </TouchableOpacity>
              ))}
            </View>

            <TouchableOpacity style={styles.end_btn} onPress={endGame}>
              <Text style={styles.end_btn_text}>{'End Game'}</Text>
              {/* <Button title="End Game" onPress={endGame} /> */}
            </TouchableOpacity>
          </View>
        </>
      ) : (
        <>
          <View style={styles.rst_btn}>
            <Text style={styles.score}>Your score: {score}</Text>
            <TouchableOpacity style={styles.end_btn} onPress={restartGame}>
              <Text style={styles.end_btn_text}>{'RESTART GAME'}</Text>
            </TouchableOpacity>
            {/* <Button title="Restart Game" onPress={restartGame} /> */}
          </View>
        </>
      )}
      {!gameOver && (
        // <View style={styles.levelSelector}>
        //   <Button title="Level 1" onPress={() => startNewGame(1)} />
        //   <Button title="Level 2" onPress={() => startNewGame(2)} />
        //   <Button title="Level 3" onPress={() => startNewGame(3)} />
        // </View>
        <View style={styles.header}>
          <TouchableOpacity onPress={() => startNewGame(1)} style={styles.btn}>
            <Text style={styles.text}>{'L1'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => startNewGame(2)} style={styles.btn}>
            <Text style={styles.text}>{'L2'}</Text>
          </TouchableOpacity>
          <TouchableOpacity onPress={() => startNewGame(3)} style={styles.btn}>
            <Text style={styles.text}>{'L3'}</Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: 'lightgrey',
    backgroundColor: '#fff',
    // justifyContent: 'center',
    // alignItems: 'center',
  },

  score: {
    fontSize: 20,
    marginBottom: 20,
  },
  levelSelector: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
  header_container: {
    // marginTop: 20,
    // marginHorizontal: 20,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#9c27b0',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    color: 'white',
  },

  level: {
    fontSize: 18,
    marginBottom: 20,
    marginLeft: 30,
    color: 'white',
  },
  header: {
    flexDirection: 'row',
    padding: 20,
    justifyContent: 'space-evenly',
    backgroundColor: '#ce93d8',
    position: 'absolute',
    bottom: 0,
    width: '100%',
  },
  btn: {
    width: 50,
    height: 50,
    backgroundColor: '#76ff03',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#b2ff59',
    elevation: 10,
  },
  text: {
    color: '#14213d',
    fontSize: 20,
    fontWeight: 'bold',
  },
  question_container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 700,
  },

  question: {
    fontSize: 40,
    marginBottom: 20,
    marginBottom: 20,
    fontWeight: 'bold',
    marginBottom: 50,
    color: '#673ab7',
  },
  answersContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    alignItems: 'center',
  },
  anser_btn: {
    width: 70,
    height: 70,
    backgroundColor: '#e91e63',
    marginLeft: 20,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
    borderWidth: 0.4,
    borderColor: '#e91e66',
    elevation: 10,
  },
  anser_text: {
    color: 'white',
    fontSize: 25,
    fontWeight: 'bold',
  },
  end_btn: {
    marginTop: 100,
    width: '50%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2196f3',
    elevation: 10,
    borderRadius: 10,
  },
  end_btn_text: {
    color: '#fff',
    fontSize: 20,
    fontWeight: 'bold',
  },
  rst_btn: {
    height: 600,
    // backgroundColor: 'pink',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default MathGameComponent;
