module.exports = {
  personalQs: [
    {
      questionType: 'SelectionGroup',
      questionText: 'Please state your gender',
      questionId: 'gender',
      options: [
        {
          optionText: 'Male',
          value: 'M',
        },
        {
          optionText: 'Female',
          value: 'F',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'Please select your age group',
      questionId: 'ageGroup',
      options: [
        {
          optionText: '18-24 years old',
          value: '18-24',
        },
        {
          optionText: '25-34 years old',
          value: '25-34',
        },
        {
          optionText: '35-44 years old',
          value: '35-44',
        },
        {
          optionText: '45-54 years old',
          value: '45-54',
        },
        {
          optionText: '55-64 years old',
          value: '55-64',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'Please indicate your current profession',
      questionId: 'profession',
      options: [
        {
          optionText: 'Student',
          value: 'student',
        },
        {
          optionText: 'Researcher',
          value: 'researcher',
        },
        {
          optionText: 'Lecturer',
          value: 'lecturer',
        },
        {
          optionText: 'Professor',
          value: 'professor',
        },
        {
          optionText: 'Other',
          value: 'other',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'Do you have experience with data visualization plots?',
      questionId: 'plotsExperience',
      options: [
        {
          optionText: 'Yes',
          value: 'y',
        },
        {
          optionText: 'No',
          value: 'n',
        },
      ],
    },
  ],
  figsQs: [
    {
      questionType: 'SelectionGroup',
      questionText:
        'How effective is the provided visualization in portraying power consumption information?',
      questionId: 'effectiveness',
      options: [
        {
          optionText: '1 not effective at all',
          value: '1',
        },
        {
          optionText: '2',
          value: '2',
        },
        {
          optionText: '3',
          value: '3',
        },
        {
          optionText: '4',
          value: '4',
        },
        {
          optionText: '5 very effective',
          value: '5',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText:
        'How easy to understand is the provided visualization in portraying power consumption information?',
      questionId: 'understandability',
      options: [
        {
          optionText: '1 not easy at all',
          value: '1',
        },
        {
          optionText: '2',
          value: '2',
        },
        {
          optionText: '3',
          value: '3',
        },
        {
          optionText: '4',
          value: '4',
        },
        {
          optionText: '5 very easy',
          value: '5',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'How visually pleasing is the provided visualization?',
      questionId: 'pleasantness',
      options: [
        {
          optionText: '1 not visually pleasing at all',
          value: '1',
        },
        {
          optionText: '2',
          value: '2',
        },
        {
          optionText: '3',
          value: '3',
        },
        {
          optionText: '4',
          value: '4',
        },
        {
          optionText: '5 very visually pleasing',
          value: '5',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText:
        'How is the use of animations has helped in understanding the information portrayed by the figure?',
      questionId: 'animationsHelpfulness',
      options: [
        {
          optionText: '1 not helpful at all',
          value: '1',
        },
        {
          optionText: '2',
          value: '2',
        },
        {
          optionText: '3',
          value: '3',
        },
        {
          optionText: '4',
          value: '4',
        },
        {
          optionText: '5 very helpful',
          value: '5',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText:
        'In terms of quantity, how do you describe the amount of data presented?',
      questionId: 'amountOfData',
      options: [
        {
          optionText: 'Sparse (not enough)',
          value: 'sparse',
        },
        {
          optionText: 'Adequate (just right)',
          value: 'adequate',
        },
        {
          optionText: 'Excessive (very complex)',
          value: 'excessive',
        },
      ],
    },
    {
      questionType: 'TextInput',
      questionText:
        'How can this visualization be improved in terms of clarity?',
      questionId: 'suggestion',
      placeholderText: 'Tell us so we can become better!',
    },
  ],
};
