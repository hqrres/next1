import { useState } from 'react';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    email: '',
    message: '',
  });
  
  const [submissionStatus, setSubmissionStatus] = useState('');
  const [statusColor, setStatusColor] = useState(''); // State to track the color based on status

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault(); // Prevents the default form submit behavior (GET request)

    try {
      const response = await fetch('/api/contact', {
        method: 'POST', // Ensure the method is POST
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSubmissionStatus('Thank you! Your message has been sent.'); // Success message
        setStatusColor('text-green-500'); // Green for success
        setFormData({ email: '', message: '' }); // Optionally, clear the form
      } else {
        const result = await response.json();
        setSubmissionStatus(`Error: ${result.error || 'Failed to send message.'}`); // Error message
        setStatusColor('text-red-500'); // Red for error
      }
    } catch (error) {
      setSubmissionStatus('Error: Failed to send message. Please try again later.');
      setStatusColor('text-red-500'); // Red for error
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div>
          <input
            className="p-2 bg-transparent border-2 border-slate-500 w-64 text-xl my-4 active:bg-black"
            name="email"
            placeholder="Your email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <textarea
            className="text-white p-2 bg-transparent border-2 border-slate-500 w-96 text-lg"
            name="message"
            placeholder="Message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </div>
        <button
          className="text-black text-xl font-bold px-4 py-2 bg-slate-100 my-4"
          type="submit"
        >
          Send
        </button>
      </form>

      {/* Display the submission status message with dynamic color */}
      {submissionStatus && (
        <p className={`text-lg my-4 ${statusColor}`}>
          {submissionStatus}
        </p>
      )}
    </div>
  );
}