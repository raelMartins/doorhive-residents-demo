export const colors = {
  light: {
    theme_name: 'light',
    text: '#191919',
    background: { 1: `#F5F5F5`, 2: `#FFFFFF`, 3: `#FCFCFC`, 4: `#d5d5d5` },
    //prettier-ignore
    text: {1: '#000000', 2: '#141414', 3: `#71717a`, 4: `#424242`, 5: `#4B4B4B`},
    border_color: { 1: `#E4E4E7`, 2: `#D6D6D6` },
    form: { label: `#A3A3A3`, color: `#292929` }
  },
  dark: {
    theme_name: 'dark',
    text: '#DDDDDD',
    background: { 1: `#232425`, 2: `#2C2C2C`, 3: `#3A3A3A`, 4: `#303030` },
    //prettier-ignore
    text: { 1: '#FFFFFF', 2: '#F4F4F4', 3: '#F0F0F0', 4: '#F0F0F0', 5: `#dddddd`},
    border_color: { 1: `#5e5e5e`, 2: `#6f6f6f` },
    form: { label: `#FAFAFAE5`, color: `#ffffff` }
  },
  darkGreen: {
    theme_name: 'darkGreen',
    text: '#DDDDDD',
    background: { 1: `#111B21`, 2: `#202C33`, 3: `#1e2a30`, 4: `#2C3B44` },
    //prettier-ignore
    text: { 1: '#FFFFFF', 2: '#F4F4F4', 3: '#F0F0F0', 4: '#F0F0F0', 5: `#dddddd`},
    border_color: { 1: `#2C3B44`, 2: `#3D4C55` },
    form: { label: `#A6A6A6`, color: `#ffffff` }
  },
  darkBlue: {
    theme_name: 'darkBlue',
    text: '#DDDDDD',
    background: { 1: `#15151E`, 2: `#1C1C2A`, 3: `#202436`, 4: `#2f3652` },
    //prettier-ignore
    text: { 1: '#FFFFFF', 2: '#F4F4F4', 3: '#F0F0F0', 4: '#F0F0F0', 5: `#dddddd`},
    border_color: { 1: `#2f3652`, 2: `#171a26` },
    form: { label: `#A6A6A6`, color: `#ffffff` }
  },
  default: {
    theme_name: 'light',
    text: '#191919',
    background: { 1: `#FAFAFA`, 2: `#FFFFFF`, 3: `#F5F5F5`, 4: `#d5d5d5` },
    //prettier-ignore
    text: { 1: '#FFFFFF', 2: '#F4F4F4', 3: '#F0F0F0', 4: `#747474`, 5: `#4B4B4B`},
    border_color: { 1: `#E4E4E7`, 2: `#D6D6D6` },
    form: { label: `#606060`, color: `#919191` }
  }
};

function addAlpha(color, opacity) {
  // coerce values so it is between 0 and 1.
  var _opacity = Math.round(Math.min(Math.max(opacity || 1, 0), 1) * 255);
  return color + _opacity.toString(16).toUpperCase();
}

export const get_hex_color_complements = (hex, theme) => {
  const hex_string = hex.replace(`#`, ``);
  const hexcolor =
    hex_string?.length === 3
      ? `${hex_string[0]}${hex_string[0]}${hex_string[1]}${hex_string[1]}${hex_string[2]}${hex_string[2]}`
      : hex_string;
  console.log(hexcolor);

  let r = parseInt(hexcolor.substr(0, 2), 16);
  let g = parseInt(hexcolor.substr(2, 2), 16);
  let b = parseInt(hexcolor.substr(4, 2), 16);
  let yiq = (r * 299 + g * 587 + b * 114) / 1000;

  const color_pop =
    yiq >= 183 && theme === `light`
      ? '#191919'
      : yiq < 100 && theme !== `light`
      ? '#ffffff'
      : hex;

  let background =
    theme === `light` && yiq >= 200
      ? `#${addAlpha('191919', 1)}`
      : theme !== `light` && yiq <= 100
      ? `#${addAlpha('ffffff', 1)}`
      : `transparent`;

  return {
    primary: hex,
    custom_color: {
      spectrum: yiq >= 183 ? 'light' : 'dark',
      color: hex,
      contrast: yiq >= 128 ? '#191919' : '#ffffff',
      accent: yiq >= 128 ? '#ffffff' : '#191919',
      // contrast: parseInt(hexcolor, 16) > 0xffffff / 2 ? '#191919' : '#ffffff',
      // accent: parseInt(hexcolor, 16) > 0xffffff / 2 ? '#ffffff' : '#191919',
      background,
      dark_background_pop: yiq >= 128 ? hex : `#FFFFFF`,
      light_background_pop: yiq >= 128 ? `#191919` : hex,
      opacity: {
        _05: `${hex}0D`,
        _10: `${hex}1A`,
        _20: `${hex}33`,
        _30: `${hex}4D`,
        _40: `${hex}66`,
        _50: `${hex}80`,
        _60: `${hex}99`,
        _70: `${hex}B3`,
        _80: `${hex}cc`,
        _90: `${hex}e6`
      },
      opacity_pop: {
        _05: `${color_pop}0D`,
        _10: `${color_pop}1A`,
        _20: `${color_pop}33`,
        _30: `${color_pop}4D`,
        _40: `${color_pop}66`,
        _50: `${color_pop}80`,
        _60: `${color_pop}99`,
        _70: `${color_pop}B3`,
        _80: `${color_pop}cc`,
        _90: `${color_pop}e6`
      },
      color_pop,
      contrast_pop:
        color_pop === `#ffffff`
          ? '#191919'
          : color_pop === `#191919`
          ? '#ffffff'
          : yiq >= 183
          ? '#191919'
          : '#ffffff'
    }
  };
};
