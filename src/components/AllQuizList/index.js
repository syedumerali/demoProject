import React, {useState, useEffect} from 'react';
import {
  Text,
  View,
  FlatList,
  Image,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import styles from './styles';

function AllQuizList({navigation}) {
  const [allList, setAllList] = useState([
    {
      id: 1,
      QuizSubject: 'Maths',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/maths.png'),
      sendMe: ()=> navigation.navigate('Maths')
    },

    {
      id: 2,
      QuizSubject: 'Science',
      Difficulty: 'Easy',
      image: require('../../assets/images/quizIcons/science.png'),
    },

    {
      id: 3,
      QuizSubject: 'Physics',
      Difficulty: 'Normal',
      image: require('../../assets/images/quizIcons/knowledge.png'),
    },

    {
      id: 4,
      QuizSubject: 'Programming',
      Difficulty: 'Expert',
      image: require('../../assets/images/quizIcons/drama.png'),
    },
  ]);

  const [popularQuiz, setPopularQuiz] = useState([
    {
      id: 1,
      popularQuizName: 'Science',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/ScienceQuiz.png'),
    },

    {
      id: 2,
      popularQuizName: 'Astronomy',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/astronomy.png'),
    },

    {
      id: 3,
      popularQuizName: 'Programming',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/programmer.png'),
    },

    {
      id: 4,
      popularQuizName: 'Electronics',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/electronics.png'),
    },

    {
      id: 5,
      popularQuizName: 'Programming',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/programmer.png'),
    },

    {
      id: 6,
      popularQuizName: 'Electronics',
      Difficulty: 'Hard',
      image: require('../../assets/images/quizIcons/electronics.png'),
    },
  ]);

  const renderHeader = () => {
    return (
      <View style={styles.headerView}>
        <Text style={styles.headerTopHeading}>New subjects for you</Text>

        <Text style={styles.headerSecondHeading}>Let's play</Text>
        <FlatList
          data={allList}
          renderItem={_renderQuizList}
          horizontal={true}
          showsHorizontalScrollIndicator={false}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
    );
  };
  const _renderQuizList = ({item}) => {
    return (
      <View style={styles.listBackground}>
        <TouchableOpacity onPress={item.sendMe} style={styles.listButton}>
          <Image style={styles.listImage} source={item.image} />

          <View>
            <Text style={styles.subjectStyle}>{item.QuizSubject}</Text>
            <Text style={styles.difficultyLevel}>
              Difficulty: <Text>{item.Difficulty}</Text>
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    );
  };

  const renderPopularListHeader = () => {
    return <Text style={styles.kidsHeading}>For Younger Kids</Text>;
  };
  const _renderPopularList = ({item}) => {
    return (
      <TouchableOpacity style={styles.kidsQuizButton}>
        <Image style={styles.kidsButtonIcon} source={item.image} />

        <Text style={styles.kidsButtonSubjectText}>{item.popularQuizName}</Text>
        <Text style={styles.kidsButtonDifficultyText}>{item.Difficulty}</Text>
      </TouchableOpacity>
    );
  };


  return (
    <View style={styles.allQuizListMainPage}>
      <StatusBar backgroundColor="#1d2544" />
      {renderHeader()}
      {renderPopularListHeader()}
      <FlatList
        data={popularQuiz}
        renderItem={_renderPopularList}
        numColumns={2}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  );
}

export default AllQuizList;
