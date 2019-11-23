import moment from 'moment';

export const data1 = {
  selectedApplianceKey: '',
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      Nespresso: 0.7,
      Supermatik: 8,
      Krups: 0.5,
    },
    {
      date: moment('10:00', 'HH:mm'),
      Nespresso: 2.4,
      Supermatik: 7.1,
      Krups: 0.6,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Nespresso: 0.7,
      Supermatik: 50,
      Krups: 0.4,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Nespresso: 7,
      Supermatik: 6.9,
      Krups: 0.6,
    },
  ],
  keys: ['Nespresso', 'Supermatik', 'Krups'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};

export const lamp = {
  expenseData: [
    {
        date: moment('9:00', 'HH:mm'),
        Nespresso: 0.7,
        Supermatik: 8.9,
        Krups: 0.5,
      },
  ],
};

export const television = {
  expenseData: [
    {
        date: moment('9:00', 'HH:mm'),
        Nespresso: 0.7,
        Supermatik: 8.9,
        Krups: 0.5,
      },
  ],
};
