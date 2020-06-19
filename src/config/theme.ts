interface Theme {
  [key:string]: {
    [key:string]: string
  }
}
  

const ThemList: Theme = {
  light: {
    '--themeColor': 'white',
    '--fontColor': 'black',
    '--fontColor2': 'rgba(0, 0, 0, 0.65)',
    '--layoutBackground': '#f0f2f5',
    '--selectBackground': '#f0f7ff',
    '--primaryColor': '#f0f7ff',
    '--selcectColor': '#4882F3',
    '--breadcrumbColor': 'rgba(0, 0, 0, 0.45)',
    '--lastbreadcrumbColor': 'rgba(0, 0, 0, 0.65)',
    '--selectMenu': '#f0f7ff',
    '--dropdownHover': 'white',
    '--dropdownSelect': '#f0f7ff',
  },
  dark: {
    '--themeColor': '#141414',
    '--fontColor': 'white',
    '--fontColor2': 'rgba(255, 255, 255, 0.65)',
    '--layoutBackground': '#000000',
    '--selectBackground': '#000000',
    '--primaryColor': '#333333',
    '--selcectColor': 'white',
    '--breadcrumbColor': 'rgba(255, 255, 255, 0.45)',
    '--lastbreadcrumbColor': 'rgba(255, 255, 255, 0.65)',
    '--selectMenu': 'black',
    '--dropdownHover': 'rgba(255, 255, 255, 0.08)',
    '--dropdownSelect': '#111b26',
  }
}

export default ThemList