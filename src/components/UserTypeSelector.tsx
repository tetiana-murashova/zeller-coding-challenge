import React from 'react';
import styled from 'styled-components';
import { UserType } from '../App';

interface Props {
  value: UserType;
  onChange: (type: UserType) => void;
}

const UserTypeSelector: React.FC<Props> = ({ value, onChange }) => (
  <Wrapper>
    <h2>User Types</h2>
    <RadioGroup>
      {['ADMIN', 'MANAGER'].map((type) => (
        <label key={type}>
          <input
            type="radio"
            checked={value === type}
            onChange={() => onChange(type as UserType)}
          />
        {type.charAt(0) + type.slice(1).toLowerCase()}
        </label>
      ))}
    </RadioGroup>
  </Wrapper>
);

export default UserTypeSelector;

const Wrapper = styled.div`
  margin-bottom: 20px;
`;

const RadioGroup = styled.div`
  display: flex;
  gap: 20px;
`;
