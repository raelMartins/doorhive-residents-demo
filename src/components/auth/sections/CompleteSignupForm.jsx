'use client';

import { HStack, Link, Stack, Text } from '@chakra-ui/react';
import { Button, Checkbox, Input } from '@/uiLib';
import { useState } from 'react';
import { capitalizeString } from '@/utils/helpers';

export const CompleteSignupForm = ({ next, formik }) => {
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  return (
    <Stack gap={`16px`}>
      <Input
        variation='auth'
        label='Occupant’s Status'
        placeholder='Enter Occupant Status'
        value={capitalizeString(formik?.values?.role, true)}
        onChange={formik?.handleChange(`role`)}
        isDisabled
        textTransform={`capitalize`}
      />
      <Input
        variation='auth'
        label='Phone Number'
        placeholder='Enter Phone Number'
        value={formik?.values?.phone}
        onChange={formik?.handleChange(`phone`)}
        isDisabled
      />
      <Input
        variation='auth'
        label='Mailing Address'
        placeholder='Enter Mailing Address'
        value={formik?.values?.address}
        onChange={formik?.handleChange(`address`)}
        isDisabled
      />
      <HStack>
        <Checkbox
          variation='theme-fill'
          isChecked={acceptedTerms}
          handleCheck={setAcceptedTerms}
        />
        <Text
          color={`text.3`}
          fontWeight={`400`}
          fontSize={`16px`}
          lineHeight={`100%`}
          letterSpacing={`3%`}
        >
          By creating an account you agree to accept our{' '}
          <Link> privacy-policy </Link> and <Link>terms of use</Link>
        </Text>
      </HStack>
      <Button
        variation='primary'
        onClick={next}
        isDisabled={
          !acceptedTerms
          // !formik?.values?.phone ||
          // !formik?.values?.address ||
          // !formik?.values?.role
        }
      >
        Proceed
      </Button>
    </Stack>
  );
};
