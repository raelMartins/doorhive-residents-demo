'use client';

import { Box, Center, CheckboxProps } from '@chakra-ui/react';
import { useState } from 'react';
import { IoIosCheckmark } from 'react-icons/io';

interface CustomCheckboxProps extends CheckboxProps {
  variation?: 'theme-fill' | 'theme-outline' | 'fill' | 'outline';
  handleCheck: any;
}

export const Checkbox: React.FC<CustomCheckboxProps> = ({
  variation,
  handleCheck = (val: boolean) => {},
  ...rest
}) => {
  const [isChecked, setIsChecked] = useState(rest.isChecked || false);
  const default_checkbox_styles = {
    boxSize: `24px`,
    minW: `24px`,
    borderRadius: `8px`,
    border: `1px solid`,
    overflow: `hidden`,
    cursor: `pointer`,
    borderColor: `border_color.1`,
    bg: `background.3`,
    transition: `.3s`,
    onClick: () => {
      handleCheck(!isChecked);
      setIsChecked(!isChecked);
    }
  };

  const animatedIcon = (
    <Center overflow={`hidden`} w={`100%`} height={`100%`} transition={`.3s`}>
      <Center
        w={`100%`}
        maxW={isChecked ? `24px` : `0px`}
        opacity={isChecked ? `1` : `0`}
        transition={`.3s`}
      >
        <IoIosCheckmark fontSize={`24px`} />
      </Center>
    </Center>
  );

  switch (variation) {
    case 'theme-fill':
      return (
        <Center
          {...default_checkbox_styles}
          borderColor={isChecked ? `custom_color.color_pop` : `border_color.1`}
          bg={isChecked ? `custom_color.color_pop` : `background.3`}
          color={`custom_color.contrast_pop`}
          {...rest}
        >
          {animatedIcon}
        </Center>
      );
    case 'theme-outline':
      return (
        <Center
          {...default_checkbox_styles}
          borderColor={`custom_color.color_pop`}
          bg={`transparent`}
          color={`custom_color.color_pop`}
          {...rest}
        >
          {animatedIcon}
        </Center>
      );
    case 'fill':
      return (
        <Center
          {...default_checkbox_styles}
          borderColor={isChecked ? `text.1` : `border_color.1`}
          bg={isChecked ? `text.1` : `background.3`}
          color={`background.1`}
          {...rest}
        >
          {animatedIcon}
        </Center>
      );
    case 'outline':
      return (
        <Center
          {...default_checkbox_styles}
          borderColor={`text.1`}
          bg={`transparent`}
          color={`text.1`}
          {...rest}
        >
          {animatedIcon}
        </Center>
      );
    default:
      return (
        <Center {...default_checkbox_styles} {...rest}>
          {animatedIcon}
        </Center>
      );
  }
};
