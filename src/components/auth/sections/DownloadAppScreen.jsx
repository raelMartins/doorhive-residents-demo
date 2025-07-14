'use client';

import { HStack, Stack, Text } from '@chakra-ui/react';
import { Button } from '@/uiLib';
import { FaApple } from 'react-icons/fa';
import {
  AppleStoreIcon,
  GooglePlayIcon
} from '@/components/assets/mobilePlatformIcons';

export const DownloadAppScreen = ({}) => {
  return (
    <Stack gap={`24px`}>
      <Text
        margin={`0px`}
        fontWeight={`400`}
        fontSize={`16px`}
        lineHeight={`150%`}
        verticalAlign={`middle`}
        letterSpacing={`0%`}
        color={`text.3`}
      >
        Thank you for signing up! We&apos;re excited to have you as part of our
        community. Your account is now active and ready to use. Download our app
        now to unlock the full experience and start exploring all the features
        we have to offer.
      </Text>
      <HStack gap={`16px`}>
        <Button
          bg={`background.2`}
          borderColor={`border_color.1 !important`}
          p={`16px 25px`}
        >
          <HStack gap={`10px`}>
            <GooglePlayIcon />
            <Text
              fontWeight={`510`}
              fontSize={`14px`}
              lineHeight={`24px`}
              letterSpacing={`0%`}
              verticalAlign={`middle`}
              color={`text.3`}
            >
              Download on Google Play
            </Text>
          </HStack>
        </Button>
        <Button
          bg={`background.2`}
          borderColor={`border_color.1 !important`}
          p={`16px 25px`}
        >
          <HStack gap={`10px`}>
            <AppleStoreIcon />
            <Text
              fontWeight={`510`}
              fontSize={`14px`}
              lineHeight={`24px`}
              letterSpacing={`0%`}
              verticalAlign={`middle`}
              color={`text.3`}
            >
              Get it on App Store
            </Text>
          </HStack>
        </Button>
      </HStack>
    </Stack>
  );
};
