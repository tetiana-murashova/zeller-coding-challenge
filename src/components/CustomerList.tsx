import React from 'react';
import styled from 'styled-components';
import CustomerCard from './CustomerCard';

interface Customer {
  email: string;
  id: string;
  name: string;
  role: string;
}

interface Props {
  customers: Customer[];
  loading?: boolean;
}

const CustomerList: React.FC<Props> = ({ customers, loading }) => {
  if (loading) return <p>Loading...</p>;
  if (!customers.length) return <p>No users found.</p>;
  const customersRole = customers[0]?.role.charAt(0) + customers[0]?.role.slice(1).toLowerCase()

  return (
    <Wrapper>
      <h2>{customersRole} Users</h2>
      {customers.map((c) => (
        <CustomerCard key={c.id} customer={c} />
      ))}
    </Wrapper>
  );
};

export default CustomerList;

const Wrapper = styled.div`
  margin-top: 20px;
`;
