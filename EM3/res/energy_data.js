import moment from 'moment';

export const lamp = {
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      Neon: 0.7,
      SideLamp: 8,
      Tungeston: 0.5,
    },
    {
      date: moment('10:00', 'HH:mm'),
      Neon: 2.4,
      SideLamp: 7.1,
      Tungeston: 0.6,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Neon: 0.7,
      SideLamp: 5,
      Tungeston: 0.5,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Neon: 7,
      SideLamp: 6.5,
      Tungeston: 2,
    },
    {
      date: moment('13:00', 'HH:mm'),
      Neon: 7,
      SideLamp: 6.9,
      Tungeston: 0.6,
    },
  ],
  keys: ['Neon', 'SideLamp', 'Tungeston'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};

export const television = {
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      Sharp: 2,
      Samsung: 1,
      LG: 5,
    },
    {
      date: moment('10:00', 'HH:mm'),
      Sharp: 3,
      Samsung: 4,
      LG: 5,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Sharp: 2,
      Samsung: 4.1,
      LG: 2.2,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Sharp: 10.2,
      Samsung: 1,
      LG: 0,
    },
    {
      date: moment('13:00', 'HH:mm'),
      Sharp: 0,
      Samsung: 0,
      LG: 3.5,
    },

  ],
  keys: ['Sharp', 'Samsung', 'LG'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};

export const boiler = {
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      Intertronic: 0.7,
      Grundig: 8,
      Miostar: 5,
      Philips: 3.5,
    },
    {
      date: moment('10:00', 'HH:mm'),
      Intertronic: 2.4,
      Grundig: 7.1,
      Miostar: 5,
      Philips: 2.1,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Intertronic: 0.7,
      Grundig: 50,
      Miostar: 4,
      Philips: 1.5,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Intertronic: 7,
      Grundig: 6.9,
      Miostar: 6,
      Philips: 4,
    },
  ],
  keys: ['Intertronic', 'Grundig', 'Miostar', 'Philips'],
  colors: ['#CF5C36', '#EFC88B', '#BD7F0E', '#7C7C7C'],
};

export const fan = {
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      Honeywell: 4,
      Intertronic: 8,
      Orieme: 0.5,
    },
    {
      date: moment('10:00', 'HH:mm'),
      Honeywell: 2.4,
      Intertronic: 7.1,
      Orieme: 0.6,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Honeywell: 0.7,
      Intertronic: 50,
      Orieme: 0.4,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Honeywell: 7,
      Intertronic: 6.9,
      Orieme: 0.6,
    },
  ],
  keys: ['Honeywell', 'Intertronic', 'Orieme'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};

export const oven = {
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      Siemens: 0,
      LG: 4,
      Nitro: 4,
    },
    {
      date: moment('10:00', 'HH:mm'),
      Siemens: 2.4,
      LG: 3,
      Nitro: 2,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Siemens: 3,
      LG: 5,
      Nitro: 4,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Siemens: 0.5,
      LG: 0.5,
      Nitro: 1,
    },
  ],
  keys: ['Siemens', 'LG', 'Nitro'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};

export const gaming_console = {
  expenseData: [
    {
      date: moment('9:00', 'HH:mm'),
      PS4: 10,
      Xbox360: 0.5,
      'Wii U': 1,
    },
    {
      date: moment('10:00', 'HH:mm'),
      PS4: 10,
      Xbox360: 1,
      'Wii U': 6,
    },
    {
      date: moment('11:00', 'HH:mm'),
      PS4: 1,
      Xbox360: 10,
      'Wii U': 1.3,
    },
    {
      date: moment('12:00', 'HH:mm'),
      PS4: 7,
      Xbox360: 6.9,
      'Wii U': 6.4,
    },
    {
      date: moment('13:00', 'HH:mm'),
      PS4: 1,
      Xbox360: 10,
      'Wii U': 1.3,
    },
  ],
  keys: ['PS4', 'Xbox360', 'Wii U'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};

export const computer = {
  expenseData: [
    {
      date: moment('10:00', 'HH:mm'),
      Lenovo: 2.4,
      Dell: 7.1,
      HP: 5,
    },
    {
      date: moment('11:00', 'HH:mm'),
      Lenovo: 7,
      Dell: 20,
      HP: 4,
    },
    {
      date: moment('12:00', 'HH:mm'),
      Lenovo: 7,
      Dell: 6.9,
      HP: 6,
    },
    {
      date: moment('13:00', 'HH:mm'),
      Lenovo: 7,
      Dell: 20,
      HP: 4,
    },
  ],
  keys: ['Lenovo', 'Dell', 'HP'],
  colors: ['#CF5C36', '#EFC88B', '#7C7C7C'],
};
