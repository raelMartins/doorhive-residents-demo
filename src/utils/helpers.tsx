export const capitalizeString = (string: string, spaced = false) => {
  const capitalized_string = string
    ?.split(' ')
    ?.map((el) => el?.charAt(0).toUpperCase() + el?.slice(1))
    ?.join(' ')
    ?.split('-')
    ?.map((el) => el?.charAt(0).toUpperCase() + el?.slice(1))
    ?.join(spaced ? ` ` : '-')
    ?.split('_')
    ?.map((el) => el?.charAt(0).toUpperCase() + el?.slice(1))
    ?.join(spaced ? ` ` : '_');

  return capitalized_string;
};
