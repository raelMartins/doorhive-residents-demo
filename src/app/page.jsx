import Image from 'next/image';
import styles from '@/styles/page.module.css';
import { Center } from '@chakra-ui/react';
import { Button } from '@/uiLib';
import Link from 'next/link';

export default function Home() {
  return (
    <Center minH={`100vh`} gap={`10px`} flexDir={`column`}>
      <Center position={`relative`} overflow={`hidden`} boxSize={`150px`}>
        <Image
          src={`/images/oakridge_logo.png`}
          alt={`logo`}
          fill
          style={{ objectFit: `cover` }}
        />
      </Center>
      <Button
        as={Link}
        href={`/auth/complete-registration`}
        variation='animated'
        w={`max-content`}
      >
        Complete Registration
      </Button>
    </Center>
  );
}
