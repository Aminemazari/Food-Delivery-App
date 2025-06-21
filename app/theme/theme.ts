interface ColorShades {
  [key: string]: string;
}

interface ThemeColors {
  blue: ColorShades;
  green: ColorShades;
  neutral: ColorShades;
  purple: ColorShades;
  red: ColorShades;
  teal: ColorShades;
  yellow: ColorShades;
  onboarding: ColorShades;
  login: ColorShades;
  register: ColorShades;
  enter_address: ColorShades;
  home: ColorShades;
  filter: ColorShades;
  search: ColorShades;
}

interface Theme {
  colors: ThemeColors;
}

const theme: Theme = {
  colors: {
    blue: {
      '50': '#deebff',
      '75': '#b3d4ff',
      '100': '#4c9aff',
      '200': '#2684ff',
      '300': '#0065ff',
      '400': '#0052cc',
      '500': '#0747a6',
      '600': '#063f94',
    },
    green: {
      '50': '#e2ffee',
      '75': '#abf5d1',
      '100': '#79f2c0',
      '200': '#57d9a3',
      '300': '#36b37e',
      '400': '#00875a',
      '500': '#064', // Note: Possible typo; verify if correct
    },
    neutral: {
      '00': '#fff',
      '01': '#fafbfc',
      '42_card_list': '#f4f5f7',
      '30': '#ebecf0',
      '40': '#dfe1e6',
      '50': '#c1c7d0',
      '60': '#b3bac5',
      '70': '#a5adba',
      '80': '#97a0af',
      '90': '#8993a4',
      '100': '#7a869a',
      '200': '#6b778c',
      '300': '#5e6c84',
      '400': '#505f79',
      '500': '#42526e',
      '600': '#344563',
      '700': '#253858',
      '800': '#172b4d',
      '900': '#091e42',
    },
    purple: {
      '50': '#eae6ff',
      '75': '#c0b6f2',
      '100': '#998dd9',
      '200': '#8777d9',
      '300': '#6554c0',
      '400': '#5243aa',
      '500': '#403294',
    },
    red: {
      '50': 'rgba(255, 235, 229, 0.2)',
      '75': 'rgba(239, 159, 39, 0.4)',
      '100': 'rgba(239, 159, 39, 0.5)',
      '200': 'rgba(239, 159, 39, 0.7)',
      '300': 'rgba(239, 159, 39, 0.8)',
      '400': '#ef9f27',
      '500': '#f07a0d',
    },
    teal: {
      '50': '#e6fcff',
      '75': '#b3f5ff',
      '100': '#79e2f2',
      '200': '#00c7e6',
      '300': '#00b8d9',
      '400': '#00a3bf',
      '500': '#008da6',
    },
    yellow: {
      '50': '#fffae5',
      '75': '#fff0b3',
      '100': '#ffe380',
      '200': '#ffc400',
      '300': '#ffab00',
      '400': '#ff991f',
      '500': '#ff8b00',
    },
    onboarding: {
      '1': '#fff',
      '2': '#fff',
      '3': '#fff',
    },
    login: {
      '4': '#fff',
      '5_filled': '#fff',
      '6_phone_number_login': '#fff',
      '7_verify_phone_number': '#fff',
      '8_password_recovery': '#fff',
      '9_verify_your_identity': '#fff',
      '10_reset_your_password': '#fff',
      '11_reset_your_password_filled': '#fff',
    },
    register: {
      '12': '#fff',
      '13_filled': '#fff',
    },
    enter_address: {
      '14': '#fff',
      '15_filled': '#fff',
    },
    home: {
      '16_v1': '#f4f5f7',
      '17_v2': '#f4f5f7',
    },
    filter: {
      '20_category': '#f4f5f7',
      '21_sort_by': '#f4f5f7',
      '22_price': '#f4f5f7',
    },
    search: {
      '23_v1': '#fff',
    },
  },
};

export default theme;