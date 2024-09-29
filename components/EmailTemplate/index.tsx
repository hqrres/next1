import * as React from 'react';
import { Html, Head, Body, Container, Text, Preview } from '@react-email/components';

interface EmailTemplateProps {
  email: string;
  message: string;
}

export const EmailTemplate = ({ email, message }: EmailTemplateProps) => {
  return (
    <Html>
      <Head />
      <Preview>Welcome Email</Preview>
      <Body style={{ fontFamily: 'sans-serif', background: '#f5f5f5' }}>
        <Container>
          {/* <Text>Saatja: {email}</Text> */}
          <Text>Sõnum: {message}</Text>
        </Container>
      </Body>
    </Html>
  );
};

export default EmailTemplate;