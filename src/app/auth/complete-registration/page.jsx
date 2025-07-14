import { CompleteRegistrationPage } from '@/components/auth/complete-registration/CompleteRegistrationPage';
import {
  fetchRegistrationDetails,
  getResidentPlatformByDomain
} from '@/api/auth';
import { RESIDENCE_URL } from '@/constants/domain';

export default async function SignUpPage({ params, searchParams }) {
  let details;
  try {
    const res = await fetchRegistrationDetails(searchParams.token);
    console.log({ res });
    details = res?.data;
  } catch (err) {
    console.log({ err });
  }
  let community;
  const domain = RESIDENCE_URL;
  try {
    const res = await getResidentPlatformByDomain(domain);
    console.log({ res });
    community = res?.data;
  } catch (err) {
    console.log({ err });
  }

  return (
    <CompleteRegistrationPage
      community={community}
      details={details}
      token={searchParams.token}
    />
  );
}
