import React from "react";

// Define the ContactEmailProps interface
export interface ContactEmailProps {
  email: string;
  message: string;
  // Optional properties can be added as needed
  // name?: string;
//   fullName: string;
//   subject: string;
}

const ContactEmailProps: React.FC<ContactEmailProps> = ({ email, message }) => {
  // Contact component implementation
  return (
    <div>
      <h2>Contact Us</h2>
      <p>Email: {email}</p>
      <p>Message: {message}</p>
      {/* Additional UI elements */}
    </div>
  );
};

export default ContactEmailProps;