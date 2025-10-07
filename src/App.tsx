import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { Amplify } from 'aws-amplify';
import { generateClient } from 'aws-amplify/api';
import awsconfig from './aws-exports';
import { ListZellerCustomers } from './graphql/queries';
import UserTypeSelector from './components/UserTypeSelector';
import CustomerList from './components/CustomerList';

Amplify.configure({
  API: {
    GraphQL: {
      endpoint: awsconfig.aws_appsync_graphqlEndpoint,
      region: awsconfig.aws_appsync_region,
      defaultAuthMode: 'apiKey',
      apiKey: awsconfig.aws_appsync_apiKey,
    },
  },
});

const client = generateClient({
  authMode: 'apiKey',
  apiKey: awsconfig.aws_appsync_apiKey,
  url: awsconfig.aws_appsync_graphqlEndpoint,
  region: awsconfig.aws_appsync_region,
});

export type UserType = 'ADMIN' | 'MANAGER';

const App: React.FC = () => {
  const [userType, setUserType] = useState<UserType>('ADMIN');
  const [customers, setCustomers] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchCustomers = async () => {
      try {
        setLoading(true);
        const res = (await client.graphql({
          query: ListZellerCustomers,
        })) as { data: { listZellerCustomers: { items: any[] } } };

        setCustomers(res.data.listZellerCustomers.items);
      } catch (error) {
        console.error('Error fetching customers:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchCustomers();
  }, []);

  const filtered = customers.filter((c) => c.role === userType);

  return (
    <Container>
      <UserTypeSelector value={userType} onChange={setUserType} />
      <CustomerList customers={filtered} loading={loading} />
    </Container>
  );
};

export default App;

const Container = styled.div`
  max-width: 600px;
  margin: 40px auto;
  padding: 16px;
`;
