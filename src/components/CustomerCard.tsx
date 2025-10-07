import React from 'react';
import styled from 'styled-components';

interface Props {
  customer: { name: string; role: string };
}

const CustomerCard: React.FC<Props> = ({ customer }) => (
  <Card>
    <Avatar>{customer.name.charAt(0).toUpperCase()}</Avatar>
    <div>
      <Name>{customer.name}</Name>
      <Role>{customer.role}</Role>
    </div>
  </Card>
);

export default CustomerCard;

const Card = styled.div`
  display: flex;
  align-items: center;
  padding: 12px;
  border-radius: 8px;
  margin: 8px 0;
  background-color: #f9fafb;
`;

const Avatar = styled.div`
  width: 36px;
  height: 36px;
  border-radius: 8px;
  background: #e5ebff;
  color: #3a6df0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 600;
  margin-right: 12px;
`;

const Name = styled.div`
  font-weight: 500;
`;

const Role = styled.div`
  font-size: 0.85rem;
  color: gray;
`;
