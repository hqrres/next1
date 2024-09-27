import * as React from 'react';

interface EmailTemplateProps {
  firstName: string;
}

export const EmailTemplate: React.FC<Readonly<EmailTemplateProps>> = ({
  firstName,
}) => (
  <div>
    <h1>Welcome, {firstName}!</h1>
  </div>
);



// before 27 sept
// "use client"
// // import { Resend } from 'resend';
// import { sendEmail } from '@/pages/api/actions';

// export default async function Page() {
//   return (
//     <form action={sendEmail}>
//       <button type="submit">Send email</button>
//     </form>
//   )
// }