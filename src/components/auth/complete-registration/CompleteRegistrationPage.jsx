'use client';

import {
  Box,
  Center,
  Flex,
  Heading,
  HStack,
  Stack,
  Text
} from '@chakra-ui/react';
import Image from 'next/image';
import { AuthFlow } from '@/components/auth/AuthFlow';
import { PiMapPinFill, PiWarning, PiWarningCircle } from 'react-icons/pi';
import { FiExternalLink } from 'react-icons/fi';
import { useState } from 'react';

export const CompleteRegistrationPage = ({ details, community, token }) => {
  const [registrationComplete, setRegistrationComplete] = useState(false);
  return (
    <Box
      bg={`background.1`}
      minH={`100vh`}
      padding={{ base: `16px`, md: `40px`, lg: `100px` }}
    >
      <Box
        bg={`background.2`}
        maxWidth={`1170px`}
        width={`100%`}
        margin={`0px auto`}
        minH={`589px`}
        borderRadius={`24px`}
      >
        {!details ? (
          <Center minH={`570px`} flexDir={`column`}>
            <PiWarningCircle fontSize={`54px`} />
            <Heading fontSize={`32px`} fontWeight={`500`}>
              No User Found
            </Heading>
          </Center>
        ) : (
          <>
            <HStack
              gap={`8px`}
              padding={`24px 40px`}
              fontWeight={`500`}
              fontSize={{ base: `17px`, md: `24px` }}
              lineHeight={`100%`}
              letterSpacing={`-2%`}
              textTransform={`capitalize`}
              fontFamily={`var(--font-geist-sans)`}
            >
              <Center boxSize={`48px`} position={`relative`}>
                <Image
                  src={`/images/oakridge_logo.png`}
                  alt='icon'
                  fill
                  style={{ objectFit: `contain` }}
                />
              </Center>
              <Text>{community?.name}</Text>
            </HStack>
            <Flex
              padding={`28px 40px`}
              flexDir={{ base: `column`, lg: `row` }}
              gap={`20px`}
              justify={`space-between`}
            >
              <Stack
                flex={`1`}
                maxW={{ base: `100%`, lg: `500px` }}
                gap={`12px`}
                color={`text.3`}
                letterSpacing={`0%`}
              >
                <Heading
                  fontWeight={`700`}
                  fontSize={`48px`}
                  color={`text.1`}
                  lineHeight={`100%`}
                  letterSpacing={`0%`}
                >
                  {registrationComplete
                    ? `Welcome Aboard!`
                    : `Hi, ${details?.firstname} ${details?.lastname}`}
                </Heading>
                {registrationComplete ? null : (
                  <HStack
                    fontWeight={`400`}
                    fontSize={`14px`}
                    lineHeight={`100%`}
                    display={`flex`}
                    flexWrap={`wrap`}
                    gap={`8px`}
                    letterSpacing={`0%`}
                    verticalAlign={`middle`}
                  >
                    <Center color={`text.2`}>
                      <PiMapPinFill fontSize={`24px`} />
                    </Center>
                    <Text>{details?.meta?.address}</Text>
                  </HStack>
                )}
                <Text
                  margin={`12px 0px`}
                  fontWeight={`400`}
                  fontSize={`16px`}
                  lineHeight={`165%`}
                  verticalAlign={`middle`}
                >
                  Welcome to the {community?.name}!{' '}
                  {registrationComplete
                    ? `Congratulations, your account has been successfully created`
                    : `To complete your
                  registration and gain full access to all features, please
                  finish setting up your account. As a first step, confirm that
                  your name is correct. If you notice any errors, please contact
                  support before proceeding. If everything looks accurate, you
                  can go ahead and complete your registration.`}
                </Text>
              </Stack>
              <Box flex={`1`} maxW={{ base: `100%`, lg: `500px` }}>
                <AuthFlow
                  details={details}
                  token={token}
                  setRegistrationComplete={setRegistrationComplete}
                />
              </Box>
            </Flex>
          </>
        )}
      </Box>
      <Flex
        justify={`space-between`}
        gap={`10px`}
        fontWeight={`500`}
        fontSize={`14px`}
        lineHeight={`100%`}
        letterSpacing={`3%`}
        vertical-align={`middle`}
        flexWrap={`wrap`}
        maxW={`1170px`}
        mx={`auto`}
        padding={{ base: `16px`, md: `40px 0px` }}
        color={`text.3`}
      >
        <Text>Copyright © 2022 Essex Management. All rights reserved.</Text>
        <HStack gap={`15px`}>
          <Flex gap={`4px`}>
            <Text>Privacy Policy</Text>
            <FiExternalLink />
          </Flex>
          <Flex gap={`4px`}>
            <Text>Terms of Use</Text>
            <FiExternalLink />
          </Flex>
        </HStack>
      </Flex>
    </Box>
  );
};
