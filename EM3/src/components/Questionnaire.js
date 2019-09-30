import React, {Component} from 'react';
import {StyleSheet, Button, Text, TextInput, View} from 'react-native';
import {SimpleSurvey} from 'react-native-simple-survey';
import SURVEY from '../../res/surveyInfo';

const GREEN = 'rgba(141,196,63,1)';
const SKYBLUE = 'rgba(135,206,235 ,1 )';

const survey = SURVEY.survey;

class Questionnaire extends Component {
  constructor(props) {
    super(props);
    this.state = {backgroundColor: 'white'};
  }

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
    return (
      <View
        style={[
          styles.background,
          {backgroundColor: this.state.backgroundColor},
        ]}>
        <View style={styles.container}>
          <SimpleSurvey
            survey={survey}
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
        </View>
      </View>
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
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'white',
    // elevation: 20,
    // borderRadius: 10,
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
  },
  surveyContainer: {
    width: '100%',
    alignSelf: 'center',
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
  background: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  questionText: {
    marginBottom: 20,
    fontSize: 20,
    alignSelf: 'center',
  },
  textBox: {
    width: '90%',
    borderWidth: 1,
    borderColor: 'rgba(204,204,204,1)',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    fontFamily: 'palanquin-light',
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
});

export default Questionnaire;
