'use client';
import {
  Box,
  Center,
  Input as ChakraInput,
  FormControl,
  HStack,
  InputProps,
  Stack,
  Text
} from '@chakra-ui/react';
import {
  input_container_default_style,
  input_field_default_style
} from './input_styles';
import { LuEye, LuEyeClosed } from 'react-icons/lu';
import { useState } from 'react';

interface CustomInputProps extends InputProps {
  variation?: 'auth' | 'regular';
  label?: string;
  label_styles?: any;
  is_required?: boolean;
}

export const Input: React.FC<CustomInputProps> = ({
  variation,
  label,
  label_styles,
  is_required,
  ...rest
}) => {
  const [showPassword, setShowPassword] = useState(false);
  const default_input_styles = {
    ...input_field_default_style
  };

  const auth_input_container = {
    ...input_container_default_style
  };
  const label_styling = {
    fontWeight: `400`,
    fontFamily: `var(--font-sfpro)`,
    fontSize: `16px`,
    lineHeight: `150%`,
    letterSpacing: `0%`,
    color: `form.label`,

    ...label_styles
  };

  switch (variation) {
    case 'auth':
      return (
        <FormControl as={Stack} {...auth_input_container}>
          {label && (
            <Text {...label_styling}>
              {label}{' '}
              {is_required && (
                <Box as='span' color={`#FF3636`}>
                  *
                </Box>
              )}
            </Text>
          )}
          <HStack w={`100%`}>
            <ChakraInput
              {...default_input_styles}
              {...rest}
              type={
                rest?.type === `password` && showPassword ? `text` : rest.type
              }
            >
              {rest.children}
            </ChakraInput>
            {rest?.type === `password` && (
              <Center
                cursor={`pointer`}
                onClick={() => setShowPassword(!showPassword)}
                fontSize={`26px`}
              >
                {showPassword ? <LuEye /> : <LuEyeClosed />}
              </Center>
            )}
          </HStack>
        </FormControl>
      );
    default:
      return (
        <ChakraInput {...default_input_styles} {...rest}>
          {rest.children}
        </ChakraInput>
      );
  }
};
