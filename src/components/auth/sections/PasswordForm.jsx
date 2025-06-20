'use client';
import { Center, Flex, HStack, Stack, Text } from '@chakra-ui/react';
import { Button, Input } from '@/uiLib';
import { useState } from 'react';
import { FaCircleCheck } from 'react-icons/fa6';

export const PasswordForm = ({ formik, isLoading }) => {
  const [confirmPassword, setConfirmPassword] = useState('');
  const passwordRequirements = [
    {
      description: `At least 8 characters`,
      completed: formik?.values?.password?.length >= 8
    },
    {
      description: `At least 1 uppercase letter`,
      completed: /[A-Z]/.test(formik?.values?.password)
    },
    {
      description: `At least 1 lowercase letter`,
      completed: /[a-z]/.test(formik?.values?.password)
    },
    {
      description: `At least 1 special character (!+,-/:;<+>?@)`,
      completed: /[^A-Za-z0-9]/.test(formik?.values?.password)
    },
    {
      description: `At least 1 number`,
      completed: /[0-9]/.test(formik?.values?.password)
    },
    {
      description: `Passwords match`,
      completed:
        formik?.values?.password && formik?.values?.password === confirmPassword
    }
  ];
  return (
    <Stack gap={`16px`}>
      <Input
        variation='auth'
        type='password'
        label='Create Password'
        placeholder='Enter Password'
        value={formik?.values?.password}
        onChange={formik?.handleChange('password')}
      />
      <Input
        variation='auth'
        type='password'
        label='Confirm Password'
        placeholder='Confirm Password'
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <Flex flexWrap={`wrap`} gap={`12px`}>
        {passwordRequirements?.map((el, i) => (
          <HStack
            key={i}
            minW={`max-content`}
            gap={`10px`}
            p={`10px`}
            borderRadius={`full`}
            borderWidth={`1px`}
            borderColor={`border_color.1`}
            background={`background.3`}
          >
            <Center
              fontSize={`16px`}
              color={el.completed ? `green` : `inherit`}
              transition={'.3s'}
            >
              <FaCircleCheck />
            </Center>
            <Text
              fontWeight={`400`}
              fontSize={`12px`}
              lineHeight={`140%`}
              letterSpacing={`0%`}
              color={`form.color`}
              opacity={'.8'}
            >
              {el.description}
            </Text>
          </HStack>
        ))}
      </Flex>
      <Button
        variation='primary'
        isDisabled={
          isLoading || passwordRequirements?.find((el) => !el.completed)
        }
        isLoading={isLoading}
        onClick={() => formik?.handleSubmit()}
      >
        Proceed
      </Button>
    </Stack>
  );
};
