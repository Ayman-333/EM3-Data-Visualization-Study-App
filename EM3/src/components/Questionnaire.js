import React from 'react';
import {
  StyleSheet,
  Button,
  Text,
  TextInput,
  View,
  Animated,
  SafeAreaView,
} from 'react-native';
import {SimpleSurvey} from 'react-native-simple-survey';
import PropTypes from 'prop-types';
import { StackActions, NavigationActions } from 'react-navigation';

const GREEN = 'rgba(141,196,63,1)';
const SKYBLUE = 'rgba(135,206,235 ,1)';

class Questionnaire extends React.Component {
  static propTypes = {
    surveyQs: PropTypes.array.isRequired,
    nextDestination: PropTypes.string.isRequired,
    navigation: PropTypes.object.isRequired,
  };

  state = {
    index: 0,
    progress: new Animated.Value(0),
  };

  onSurveyFinished(answers) {
    /**
     *  By using the spread operator, array entries with no values, such as info questions, are removed.
     *  This is also where a final cleanup of values, making them ready to insert into your DB or pass along
     *  to the rest of your code, can be done.
     *
     *  Answers are returned in an array, of the form
     *  [
     *  {questionId: string, value: any},
     *  {questionId: string, value: any},
     *  ...
     *  ]
     *  Questions of type selection group are more flexible, the entirity of the 'options' object is returned
     *  to you.
     *
     *  As an example
     *  {
     *      questionId: "favoritePet",
     *      value: {
     *          optionText: "Dogs",
     *          value: "dog"
     *      }
     *  }
     *  This flexibility makes SelectionGroup an incredibly powerful component on its own. If needed it is a
     *  separate NPM package, react-native-selection-group, which has additional features such as multi-selection.
     */
    const infoQuestionsRemoved = [...answers];

    // Convert from an array to a proper object. This won't work if you have duplicate questionIds
    const answersAsObj = {};
    for (const elem of infoQuestionsRemoved) {
      answersAsObj[elem.questionId] = elem.value;
    }
    //Here we have the data from the survey ready to be used.
    console.warn(answers);
    if (this.props.nextDestination !== '') {
      const resetAction = StackActions.reset({
        index: 0,
        actions: [NavigationActions.navigate({ routeName: this.props.nextDestination })],
      });
      this.props.navigation.dispatch(resetAction);
      // this.props.navigate(this.props.nextDestination);
      /*Above line can be used if we want the stack.*/
    } else {
      this.props.nextChart(this.props.chartNumber);
    }
    // console.warn(answersAsObj);
    // this.props.navigation.navigate('SurveyCompleted', {
    //   surveyAnswers: answersAsObj,
    // });
  }

  /**
   *  After each answer is submitted this function is called. Here you can take additional steps in response to the
   *  user's answers. From updating a 'correct answers' counter to exiting out of an onboarding flow if the user is
   *  is restricted (age, geo-fencing) from your app.
   */
  onAnswerSubmitted(answer) {
    switch (answer.questionId) {
      // To access data, we can use answer.value and answer.questionId
      default:
        break;
    }
  }

  renderPreviousButton(onPress, enabled) {
    onPress = (function() {
      var cached_function = onPress;
      return function() {
        var result = cached_function.apply(this, arguments); // use .apply() to call it
        // This is the functionality I wanted to add to the orginal function
        Animated.timing(this.state.progress, {
          toValue: this.state.index - 1,
          duration: 400,
        }).start(() => {
          this.setState(prevState => {
            return {index: prevState.index - 1};
          });
        });

        return result;
      };
    })();
    onPress = onPress.bind(this);
    return (
      <View
        style={{flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Previous'}
        />
      </View>
    );
  }

  renderNextButton(onPress, enabled) {
    onPress = (function() {
      var cached_function = onPress;
      return function() {
        var result = cached_function.apply(this, arguments); // use .apply() to call it
        // This is the functionality I wanted to add to the orginal function
        Animated.timing(this.state.progress, {
          toValue: this.state.index + 1,
          duration: 400,
        }).start(() => {
          this.setState(prevState => {
            return {index: prevState.index + 1};
          });
        });
        // more of your code

        return result;
      };
    })();
    onPress = onPress.bind(this);

    return (
      <View
        style={{flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
        <Button
          color={GREEN}
          onPress={onPress}
          disabled={!enabled}
          backgroundColor={GREEN}
          title={'Next'}
        />
      </View>
    );
  }

  renderFinishedButton(onPress, enabled) {
    onPress = (function() {
      var cached_function = onPress;
      return function() {
        var result = cached_function.apply(this, arguments); // use .apply() to call it
        // This is the functionality I wanted to add to the orginal function
        Animated.timing(this.state.progress, {
          toValue: this.state.index + 1,
          duration: 400,
        }).start(() => {
          this.setState(prevState => {
            return {index: prevState.index + 1};
          });
        });
        // more of your code

        return result;
      };
    })();
    onPress = onPress.bind(this);
    return (
      <View
        style={{flexGrow: 1, maxWidth: 100, marginTop: 10, marginBottom: 10}}>
        <Button
          title={'finished'}
          onPress={onPress}
          disabled={!enabled}
          color={GREEN}
        />
      </View>
    );
  }
  // This is the choices buttons
  renderButton(data, index, isSelected, onPress) {
    return (
      <View
        key={`selection_button_view_${index}`}
        style={{
          marginLeft: 15,
          marginRight: 15,
          marginTop: 5,
          marginBottom: 5,
          justifyContent: 'flex-start',
        }}>
        <Button
          title={data.optionText}
          onPress={onPress}
          color={isSelected ? GREEN : SKYBLUE}
          key={`button_${index}`}
        />
      </View>
    );
  }

  renderQuestionText(questionText) {
    return (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text numLines={1} style={styles.questionText}>
          {questionText}
        </Text>
      </View>
    );
  }

  renderTextBox(onChange, placeholder, value) {
    return (
      <View>
        <TextInput
          style={styles.textBox}
          onChangeText={text => onChange(text)}
          numberOfLines={3}
          underlineColorAndroid={'white'}
          placeholder={placeholder}
          placeholderTextColor={'rgba(184,184,184,1)'}
          value={value}
          multiline
          blurOnSubmit
          returnKeyType="done"
        />
      </View>
    );
  }

  renderNumericInput(onChange, value) {
    return (
      <TextInput
        style={styles.numericInput}
        onChangeText={text => {
          onChange(text);
        }}
        underlineColorAndroid={'white'}
        placeholderTextColor={'rgba(184,184,184,1)'}
        value={String(value)}
        keyboardType={'numeric'}
        maxLength={3}
      />
    );
  }

  renderInfoText(infoText) {
    return (
      <View style={{marginLeft: 10, marginRight: 10}}>
        <Text style={styles.infoText}>{infoText}</Text>
      </View>
    );
  }

  render() {
    const progressInterpolate = this.state.progress.interpolate({
      inputRange: [0, this.props.surveyQs.length],
      outputRange: ['0%', '100%'],
    });

    const progressStyle = {
      width: progressInterpolate,
    };

    return (
      <SafeAreaView>
        <View style={styles.questionnaireContainer}>
          <SimpleSurvey
            survey={this.props.surveyQs}
            renderSelector={this.renderButton.bind(this)}
            containerStyle={styles.surveyContainer}
            selectionGroupContainerStyle={styles.selectionGroupContainer}
            navButtonContainerStyle={{
              flexDirection: 'row',
              justifyContent: 'space-around',
            }}
            renderPrevious={this.renderPreviousButton.bind(this)}
            renderNext={this.renderNextButton.bind(this)}
            renderFinished={this.renderFinishedButton.bind(this)}
            renderQuestionText={this.renderQuestionText}
            onSurveyFinished={answers => this.onSurveyFinished(answers)}
            onAnswerSubmitted={answer => this.onAnswerSubmitted(answer)}
            renderTextInput={this.renderTextBox}
            renderNumericInput={this.renderNumericInput}
            renderInfo={this.renderInfoText}
          />
          <View style={styles.progress}>
            <Animated.View style={[styles.bar, progressStyle]} />
          </View>
        </View>
      </SafeAreaView>
    );
  }
}

const styles = StyleSheet.create({
  button: {
    margin: 10,
    height: 30,
    width: 140,
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionnaireContainer: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    // elevation: 20,
    // borderRadius: 10,
    // borderWidth: 1,
    // borderColor: 'rgba(204,204,204,1)',
  },
  surveyContainer: {
    width: '100%',
    height: '100%',
    alignSelf: 'center',
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
    padding: 5,
  },
  selectionGroupContainer: {
    flexDirection: 'column',
    backgroundColor: 'white',
    alignContent: 'flex-end',
  },
  navButtonText: {
    margin: 10,
    fontSize: 20,
    color: 'white',
    width: 'auto',
  },
  answers: {
    alignSelf: 'center',
    marginBottom: 10,
  },
  navigationButton: {
    minHeight: 40,
    backgroundColor: GREEN,
    padding: 0,
    borderRadius: 100,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: 5,
    fontSize: 15,
    alignSelf: 'center',
  },
  textBox: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontFamily: 'Arial',
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
  },
  numericInput: {
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    textAlignVertical: 'top',
    marginLeft: 10,
    marginRight: 10,
    alignSelf: 'center',
  },
  infoText: {
    marginBottom: 20,
    fontSize: 20,
    marginLeft: 10,
    alignSelf: 'center',
  },
  progress: {
    marginTop: 10,
    position: 'absolute',
    left: 0,
    bottom: 0,
    right: 0,
    height: 10,
  },
  bar: {
    height: '100%',
    backgroundColor: 'rgba(141,196,63,1)',
  },
});

export default Questionnaire;
