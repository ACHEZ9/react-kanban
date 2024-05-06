import sha256 from 'crypto-js/sha256';

const emailHash = (email: string) => {
  return sha256(email.trim().toLocaleLowerCase());
};

const gravatarUrl = (email: string) => {
  return `//gravatar.com/avatar/${emailHash(email)}`;
};

export { gravatarUrl };
