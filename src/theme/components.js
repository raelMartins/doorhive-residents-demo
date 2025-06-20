export const components = {
  Text: {
    variants: {
      neue_haas: {
        fontFamily: 'var(--font-neue-haas)'
      }
    }
  },
  Heading: {
    baseStyle: {
      fontFamily: 'var(--font-euclid-circular-b)'
    },
    variants: {
      neue_haas: {
        fontFamily: 'var(--font-neue-haas)'
      }
    }
  },
  Button: {
    baseStyle: {
      outline: `none`,
      _hover: {
        opacity: `1`
      },
      _active: {
        opacity: `1`
      },
      _focus: {
        outline: `none`
      },
      _focusVisible: {
        outline: `none`
      }
    },
    variants: {
      outline: {
        h: '36px',
        w: 'fit-content',
        fontSize: '13px',
        fontWeight: '400',
        color: 'Grey.Dark4',
        bg: 'Light00',
        rounded: 'full',
        lineHeight: '150%',
        iconSpacing: '8px',
        p: '8px 19px',
        borderColor: 'Light1',
        border: '0.5px solid',
        _hover: {
          bg: 'Light00',
          opacity: 0.7
        },
        _active: {
          bg: 'Light00',
          opacity: 0.7
        }
      },
      'filled-radius': {
        bg: 'Grey.Dark00',

        height: '54px',
        w: 'full',
        maxW: '400px',
        borderRadius: '72px',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21.6px',
        color: '#ffffff',
        _hover: {
          _disabled: {
            opacity: 0.6,
            bg: 'Grey.Dark00'
          }
        }
      },
      'outline-radius': {
        border: '1px solid',
        borderColor: '#d6d6d6',
        height: '54px',
        w: 'full',
        maxW: '400px',
        borderRadius: '72px',
        fontSize: '18px',
        fontWeight: '500',
        lineHeight: '21.6px',
        color: '#191919'
      },
      'md-filled-radius': {
        bg: '#191919',
        // fontFamily: "Euclid Circular B",

        height: '45.5px',
        // w: '400px',
        borderRadius: '72px',
        fontSize: '14.91px',
        fontWeight: '400',
        lineHeight: '18.9px',
        color: '#ffffff',
        _hover: {
          _disabled: {
            opacity: 0.6,
            bg: 'Grey.Dark00'
          }
        }
      },
      'md-outline-radius': {
        border: '1px solid',
        borderColor: '#424242',
        // fontFamily: "Euclid Circular B",

        height: '45.5px',
        // w: '400px',
        borderRadius: '72px',
        fontSize: '14.91px',
        fontWeight: '400',
        lineHeight: '18.9px',
        color: '#191919'
      },
      'drawer-footer-filled-radius': {
        height: '45.5px',

        borderRadius: '72px',

        color: '#ffffff',
        h: '46px',
        w: 'full',
        bg: 'Grey.Dark5',
        fontSize: '16px',
        fontWeight: '500',
        lineHeight: '140%',
        _hover: {
          _disabled: {
            opacity: 0.6,
            bg: 'Grey.Dark00'
          }
        }
      },
      'md-outline-blue-radius': {
        border: '1px solid',
        borderColor: 'Blue.Dark2',
        iconSpacing: '10px',
        height: '36px',
        fontSize: '13px',
        fontWeight: '500',
        letterSpacing: '2%',
        lineHeight: '150%',
        w: 'fit-content',
        p: '8px 16px',
        borderRadius: '72px',
        textStyle: 'labelText',
        color: 'Blue.Dark2'
      }
    }
  },
  Input: {
    baseStyle: {
      field: {
        // fontFamily: "Euclid Circular B",
        _focus: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414'
        },

        _active: {
          boxShadow: 'none',
          outline: 'none',
          borderColor: '#525252',
          backgroundColor: '#fafafa',
          color: '#141414'
        },
        _hover: {
          backgroundColor: '#fafafa',
          color: '#141414'
        },
        _placeholder: {
          color: '#606060',
          fontSize: '14px',
          fontWeight: '400'
        },
        _autofill: {
          boxShadow: '0 0 0px 1000px #fafafa inset',
          transition: 'background-color 5000s ease-in-out 0s',
          color: '#141414'
        }
      }
    },

    variants: {
      regular: {
        field: {
          fontSize: '13px',
          fontWeight: '400',
          color: 'Grey.Dark3',
          _placeholder: { fontSize: '13px', color: 'Grey.Light3' },
          _focusVisible: {
            borderColor: 'Grey.Light1'
          },
          w: 'full',
          h: '36px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid var(--chakra-colors-Light2)',
          boxShadow: '0px 1px 2px 0px #1018280D'
        }
      },
      regularMed: {
        field: {
          fontSize: '16px',
          lineHeight: '140%',
          fontWeight: '400',
          color: 'Grey.Dark3',
          _placeholder: { fontSize: '13px', color: 'Grey.Light3' },
          _focusVisible: {
            borderColor: 'Grey.Light1'
          },
          w: 'full',
          h: '40px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid var(--chakra-colors-Light2)',
          boxShadow: '0px 1px 2px 0px #1018280D'
        }
      },
      auth: {
        field: {
          border: '1px solid #e5e5e5',
          padding: '15px 17px',
          backgroundColor: '#fafafa',
          color: '#141414',
          fontWeight: '400',
          borderRadius: '8px',
          height: '50px',
          width: '100%',
          _focus: {
            backgroundColor: '#fafafa',
            color: '#141414',
            borderColor: '#525252'
          },
          _hover: {
            backgroundColor: '#fafafa',
            color: '#141414'
          },
          _autofill: {
            boxShadow: '0 0 0px 1000px #fafafa inset',
            transition: 'background-color 5000s ease-in-out 0s',
            color: '#141414'
          }
        }
      }
    }
  },
  Select: {
    variants: {
      auth: {
        field: {
          border: '1px solid #e5e5e5',
          padding: '15px 17px',
          backgroundColor: '#fafafa',
          color: '#141414',

          fontSize: '14px',
          fontWeight: '400',
          borderRadius: '8px',
          height: '50px',
          width: '100%',
          _placeholder: {
            color: '#606060'
          }
        }
      },
      regular: {
        field: {
          fontSize: '13px',
          fontWeight: '400',
          color: 'Grey.Dark3',
          _placeholder: { fontSize: '13px', color: 'Grey.Light3' },
          _focusVisible: {
            borderColor: 'Grey.Light1'
          },
          w: 'full',
          h: '36px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid var(--chakra-colors-Light2)',
          boxShadow: '0px 1px 2px 0px #1018280D'
        }
      },
      regularMed: {
        field: {
          fontSize: '13px',
          lineHeight: '150%',
          fontWeight: '400',
          color: 'Grey.Dark3',
          _placeholder: { fontSize: '13px', color: 'Grey.Light3' },
          _focusVisible: {
            borderColor: 'Grey.Light1'
          },
          w: 'full',
          h: '40px',
          rounded: '8px',
          p: '8px 12px',
          border: ' 1px solid var(--chakra-colors-Light2)',
          boxShadow: '0px 1px 2px 0px #1018280D'
        }
      }
    }
  },
  Drawer: {
    baseStyle: {
      overlay: {
        bg: 'rgba(0,0,0,0.1)'
      },
      body: {
        display: 'flex',
        flexDirection: 'column',
        gap: '24px',
        py: '24px',
        px: '20px',
        pr: '13px',
        'margin-right': '10px',
        '&::-webkit-scrollbar': {
          width: '4px',
          borderRadius: '16px'
        },
        '&::-webkit-scrollbar-track': {
          borderRadius: '16px',
          WebkitBoxShadow: 'inset 0 0 6px transparent'
        },
        '&::-webkit-scrollbar-thumb': {
          borderRadius: '16px',
          backgroundColor: '#cbcbcb'
        }
      },
      footer: {
        p: '20px 30px',
        borderTop: '0.5px solid',
        borderColor: 'Light2',
        bg: 'Light00'
      }
    }
  },
  Container: {
    baseStyle: {
      bg: 'Light00',
      minW: 'full',
      rounded: '12px',
      w: 'full',
      p: '32px',
      border: '1px solid var(--chakra-colors-Light2)'
    }
  },
  Badge: {
    baseStyle: {
      p: '2px 8px',
      rounded: '16px',
      minW: 'fit-content',
      w: 'fit-content',
      textTransform: 'capitalize',
      fontSize: '12px',
      fontWeight: '500',
      letterSpacing: '0%',
      lineHeight: '18px'
    },
    variants: {
      green: {
        bg: 'Green.Light00',
        color: 'Green.Dark3'
      },
      purple: {
        bg: 'Purple.Light3',
        color: 'Purple.Dark4'
      },
      blue: {
        bg: 'Blue.Light3',
        color: 'Blue.Dark2'
      },
      orange: {
        bg: 'Orange.Light1',
        color: 'Orange.Dark3'
      }
    }
  }
};
