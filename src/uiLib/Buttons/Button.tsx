import {
  ButtonProps,
  Button as ChakraButton,
  HStack,
  Text
} from '@chakra-ui/react';

interface CustomButtonProps extends ButtonProps {
  variation?: 'animated' | 'outline' | 'primary' | 'secondary';
  showArrow?: boolean;
  invertAnimation?: boolean;
  animationColor?: string;
  contrastColor?: string;
}

export const Button: React.FC<CustomButtonProps> = ({
  variation,
  showArrow = true,
  invertAnimation = false,
  contrastColor = `custom_color.contrast_pop`,
  animationColor = `custom_color.color_pop`,
  ...rest
}) => {
  const default_button_styles = {
    fontSize: `18px`,
    fontWeight: `500`,
    lineHeight: `100%`,
    letterSpacing: `0%`,
    width: `100%`,
    height: `max-content`,
    transition: 'ease-in-out 0.3s',
    borderRadius: `full`,
    border: '1px solid',
    borderColor: 'transparent',
    p: `16px 24px`,
    _hover: { opacity: rest.isDisabled ? 'auto' : '1' },
    _active: { opacity: rest.isDisabled ? 'auto' : '1' },
    _focus: { opacity: rest.isDisabled ? 'auto' : '1' }
  };

  switch (variation) {
    case 'animated':
      return (
        <ChakraButton
          {...default_button_styles}
          background='transparent'
          color={invertAnimation ? animationColor : contrastColor}
          position={`relative`}
          overflow={`hidden`}
          borderColor={animationColor}
          _hover={{
            color: invertAnimation ? contrastColor : animationColor,
            _before: {
              transform: invertAnimation
                ? `translate(0%, 0%) skew(0deg)`
                : `translate(100%, 0%) skew(0deg)`
            }
          }}
          _before={{
            content: '""',
            position: `absolute`,
            top: `0`,
            left: `0`,
            width: `100%`,
            height: `100%`,
            backgroundColor: animationColor,
            transform: invertAnimation
              ? `translate(-100%, 0%) skew(0deg)`
              : `translate(0%, 0%) skew(0deg)`,
            transition: `0.5s`,
            border: 'none !important'
          }}
          {...rest}
        >
          <HStack
            gap={{ base: `24px` }}
            justify={`center`}
            w={`100%`}
            position={`relative`}
            zIndex={`1`}
          >
            <Text>{rest.children}</Text>
          </HStack>
        </ChakraButton>
      );
    case 'outline':
      return (
        <ChakraButton
          {...default_button_styles}
          background={`transparent`}
          color='custom_color.color_pop'
          borderColor={`custom_color.color_pop`}
          {...rest}
        >
          {rest.children}
        </ChakraButton>
      );
    case 'primary':
      return (
        <ChakraButton
          {...default_button_styles}
          background={`custom_color.color`}
          color='custom_color.contrast'
          borderColor={`custom_color.color`}
          {...rest}
        >
          {rest.children}
        </ChakraButton>
      );
    case 'secondary':
      return (
        <ChakraButton
          {...default_button_styles}
          background={`custom_color.contrast`}
          color='custom_color.color'
          borderColor={`custom_color.contrast`}
          {...rest}
        >
          {rest.children}
        </ChakraButton>
      );
    default:
      return (
        <ChakraButton {...default_button_styles} {...rest}>
          {rest.children}
        </ChakraButton>
      );
  }
};
