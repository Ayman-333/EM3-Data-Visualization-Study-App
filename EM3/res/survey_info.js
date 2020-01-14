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
  stackedAreaQs: [
    {
      questionType: 'SelectionGroup',
      questionText:
        'When was the total power consumption the lowest?',
      questionId: '1stUnderstandingQuestion',
      options: [
        {
          optionText: 'At 10 am',
          value: '10am',
        },
        {
          optionText: 'At 11 am',
          value: '11am',
        },
        {
          optionText: 'At 12 pm',
          value: '12pm',
        },
        {
          optionText: 'At 1 pm',
          value: '1pm',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'When was the total power consumption the highest?',
      questionId: '2ndUnderstandingQuestion',
      options: [
        {
          optionText: 'At 11 am',
          value: '11am',
        },
        {
          optionText: 'At 12 pm',
          value: '12pm',
        },
        {
          optionText: 'At 1 pm',
          value: '1pm',
        },
        {
          optionText: 'At 11 am and 1 pm',
          value: '11am_and_1 pm',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'Which brand had the most power consumption fluctuations? (Note: these numbers do not reflect real energy consumption for each brand)',
      questionId: '3rdUnderstandingQuestion',
      options: [
        {
          optionText: 'Lenovo',
          value: 'lenovo',
        },
        {
          optionText: 'Dell',
          value: 'dell',
        },
        {
          optionText: 'HP',
          value: 'hp',
        },
      ],
    },
  ],
  barQs: [
    {
      questionType: 'SelectionGroup',
      questionText:
        'Did you know that you can scroll to see the rest of the figure before arriving to this question?',
      questionId: '1stUnderstandingQuestion',
      options: [
        {
          optionText: 'Yes',
          value: 'yes',
        },
        {
          optionText: 'No',
          value: 'no',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'Which month had the highest energy consumption?',
      questionId: '2ndUnderstandingQuestion',
      options: [
        {
          optionText: 'April',
          value: 'april',
        },
        {
          optionText: 'June',
          value: 'june',
        },
        {
          optionText: 'July',
          value: 'july',
        },
        {
          optionText: 'December',
          value: 'december',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'Which month had the lowest energy consumption?',
      questionId: '3rdUnderstandingQuestion',
      options: [
        {
          optionText: 'April',
          value: 'april',
        },
        {
          optionText: 'June',
          value: 'june',
        },
        {
          optionText: 'July',
          value: 'july',
        },
        {
          optionText: 'December',
          value: 'december',
        },
      ],
    },
  ],
  lineQs: [
    {
      questionType: 'SelectionGroup',
      questionText:
        'How much was the energy consumption in July (an approximation)?',
      questionId: '1stUnderstandingQuestion',
      options: [
        {
          optionText: '353 kWh',
          value: '353 kWh',
        },
        {
          optionText: '301 kWh',
          value: '301 kWh',
        },
        {
          optionText: '253 kWh',
          value: '253 kWh',
        },
        {
          optionText: '400 kWh',
          value: '400 kWh',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'What was the general trend in energy consumption from January until July?',
      questionId: '2ndUnderstandingQuestion',
      options: [
        {
          optionText: 'Increasing',
          value: 'increasing',
        },
        {
          optionText: 'Decreasing',
          value: 'decreasing',
        },
        {
          optionText: 'Steady',
          value: 'steady',
        },
        {
          optionText: 'I do not know',
          value: 'does not know',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'What was the general trend in energy consumption from July until December?',
      questionId: '3rdUnderstandingQuestion',
      options: [
        {
          optionText: 'Increasing',
          value: 'increasing',
        },
        {
          optionText: 'Decreasing',
          value: 'decreasing',
        },
        {
          optionText: 'Steady',
          value: 'steady',
        },
        {
          optionText: 'I do not know',
          value: 'does not know',
        },
      ],
    },
  ],

  heatmapQs: [
    {
      questionType: 'SelectionGroup',
      questionText: 'What does the color scaling represent?',
      questionId: '1stUnderstandingQuestion',
      options: [
        {
          optionText: 'Green -> Yellow -> Red represent lowest to highest energy consumption',
          value: 'gyr_(low-to-high)',
        },
        {
          optionText: 'Green -> Yellow -> Red represent highest to lowest energy consumption',
          value: 'gyr_(high-to-low)',
        },
        {
          optionText: 'Red -> Yellow -> Green represent lowest to highest energy consumption',
          value: 'ryg_(low-to-high)',
        },
        {
          optionText: 'Colors are added for aesthetic purposes',
          value: 'aestheticPurposes',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'At the period 1:30 – 1:40 am, how much did Room 2 contribute to the total energy consumption?',
      questionId: '2ndUnderstandingQuestion',
      options: [
        {
          optionText: '59.7%',
          value: '0.597',
        },
        {
          optionText: '40.3%',
          value: '0.403',
        },
        {
          optionText: '0%',
          value: '0',
        },
        {
          optionText: 'None of the above',
          value: 'N/A',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'At the period 00:10 – 00:20 am, which room had the lowest energy consumption?',
      questionId: '3rdUnderstandingQuestion',
      options: [
        {
          optionText: 'Room 1',
          value: 'room1',
        },
        {
          optionText: 'Room 2',
          value: 'room2',
        },
        {
          optionText: 'Room 3',
          value: 'room3',
        },
        {
          optionText: 'The energy consumption at that period is 0 Wh',
          value: '0',
        },
      ],
    },
  ],
  stackedBarQs: [
    {
      questionType: 'SelectionGroup',
      questionText:
        'Are vacuum cleaners available on the appliances list?',
      questionId: '1stUnderstandingQuestion',
      options: [
        {
          optionText: 'Yes',
          value: 'yes',
        },
        {
          optionText: 'No',
          value: 'no',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'How many brands does kettles (boilers) have?',
      questionId: '2ndUnderstandingQuestion',
      options: [
        {
          optionText: 'One',
          value: '1',
        },
        {
          optionText: 'Two',
          value: '2',
        },
        {
          optionText: 'Three',
          value: '3',
        },
        {
          optionText: 'Four',
          value: '4',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'At 1 pm, what television brand was turned on (Note: these numbers do not reflect real energy consumption for each brand)',
      questionId: '3rdUnderstandingQuestion',
      options: [
        {
          optionText: 'Sharp',
          value: 'sharp',
        },
        {
          optionText: 'Samsung',
          value: 'samsung',
        },
        {
          optionText: 'LG',
          value: 'lg',
        },
      ],
    },
  ],
  spiralQs: [
    {
      questionType: 'SelectionGroup',
      questionText: 'From the plot above, can you know what is the starting and ending date of summer?',
      questionId: '1stUnderstandingQuestion',
      options: [
        {
          optionText: '3/21/2007 – 6/20/2007',
          value: '3/21/2007_6/20/2007',
        },
        {
          optionText: '6/21/2007 – 9/20/2007',
          value: '6/21/2007_9/20/2007',
        },
        {
          optionText: '9/21/2007 – 12/20/2007',
          value: '9/21/2007_12/20/2007',
        },
        {
          optionText: '12/21/2007 – 6/20/2007',
          value: '12/21/2007_6/20/2007',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'What was the energy consumption on March the 5th?',
      questionId: '2ndUnderstandingQuestion',
      options: [
        {
          optionText: '10.32 kWh',
          value: '10.32',
        },
        {
          optionText: '27.85 kWh',
          value: '27.85',
        },
        {
          optionText: '4.23 kWh',
          value: '4.23',
        },
        {
          optionText: '30.33 kWh',
          value: '30.33',
        },
      ],
    },
    {
      questionType: 'SelectionGroup',
      questionText: 'To which season January the 6th belongs?',
      questionId: '3rdUnderstandingQuestion',
      options: [
        {
          optionText: 'Spring',
          value: 'spring',
        },
        {
          optionText: 'Summer',
          value: 'summer',
        },
        {
          optionText: 'Autumn',
          value: 'autumn',
        },
        {
          optionText: 'Winter',
          value: 'winter',
        },
      ],
    },
  ],
};
