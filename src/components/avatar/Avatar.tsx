import styled from 'styled-components';
import { gravatarUrl } from './gravatarService';

type AvatarProps = {
  email: string;
};

const StyledImage = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  border-radius: 1.5rem;
`;

const Avatar = ({ email }: AvatarProps) => {
  return <StyledImage src={gravatarUrl(email)} alt="Gravatar" />;
};

export default Avatar;
