'use client';

import { useState } from 'react';
import { CompleteSignupForm } from './sections/CompleteSignupForm';
import { PasswordForm } from './sections/PasswordForm';
import { DownloadAppScreen } from './sections/DownloadAppScreen';
import { useFormik } from 'formik';
import { useMutation } from '@tanstack/react-query';
import { completeRegistrationDetails } from '@/api/auth';
import { RESIDENCE_URL } from '@/constants/domain';
import { setCookie } from 'cookies-next';
import { useToast } from '@chakra-ui/react';

export const AuthFlow = ({ details, token, setRegistrationComplete }) => {
  const [step, setStep] = useState(`info`);
  const toast = useToast();

  const expires = new Date(Date.now() + 24 * 60 * 60 * 1000);

  setCookie(`token`, token, {
    path: '/',
    expires
  });

  const { mutate, isPending } = useMutation({
    mutationFn: async (formData) => {
      await completeRegistrationDetails(formData, RESIDENCE_URL);
    },
    onSuccess: (res) => {
      console.log({ res });
      toast({
        status: `success`,
        title: `Registration Complete`,
        position: `top-right`,
        duration: 5000
      });
      setStep('success');
      setRegistrationComplete(true);
    },
    onError: (err) => {
      console.log({ err });
      toast({
        status: `error`,
        title: `Error`,
        description: `There was an error completing your registration`,
        position: `top-right`,
        duration: 5000
      });
    }
  });

  const formik = useFormik({
    initialValues: {
      role: details?.role,
      phone: details?.meta?.phone_number,
      address: details?.meta?.address,
      password: ``
    },
    onSubmit: (values) => {
      console.log({ values });
      mutate({ password: values?.password });
    }
  });
  const screen = {
    info: (
      <CompleteSignupForm formik={formik} next={() => setStep(`password`)} />
    ),
    password: <PasswordForm formik={formik} isLoading={isPending} />,
    success: <DownloadAppScreen />
  }[step];
  return screen;
};
