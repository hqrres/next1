
import React, { ChangeEvent, FormEvent } from 'react'
import { useState } from 'react';
import { ContactEmailProps } from '@/components/ContactEmailProps';
import { ClipLoader } from 'react-spinners';

export const Contact = () => {

    const [formData, setFormData] = useState<ContactEmailProps>({
        // fullName: "",
        email: "",
        // subject: "",
        message: "",
      });
      const [isSending, setIsSending] = useState<boolean>(false);
    
      const handleChange = (
        e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
      ) => {
        const { name, value } = e.target;
        setFormData((prev: ContactEmailProps) => ({ ...prev, [name]: value }));
      };
    
      const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault();
    
        //confirm email and message field are not empty
        if (!formData.email || !formData.message) {
          console.log("Email and message are required fields");
          return;
        }
    
        try {
          setIsSending(true);
          const response = await fetch("/api/contact", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({
              email: 'formData.email',
              message: 'formData.message',
            }),
          });
    
          // handle success
          if (response.ok) {
            console.log("Email Sent Successfully!");
            setFormData({
              email: "",
              message: "",
            //   subject: "",
            //   fullName: "",
            })
          } else {
            console.log("There was a problem sending email. Pls try again!");
          }
        } catch (error) {
          console.log("Error sending email:", error);
          console.log("There was a problem sending email. Pls try again!");
        } finally {
          setIsSending(false);
        }
      };

	return (

        <form
            onSubmit={handleSubmit}
            className="border-none p-0"
            data-aos="fade-down"
        >
            <input
            name="email"
            type="email"
            placeholder="your-email@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="text-black w-full p-2 mb-4 border border-gray-300 rounded"
            required
            />
            <textarea
            name="message"
            cols={30}
            rows={5}
            placeholder="...type your message"
            value={formData.message}
            onChange={handleChange}
            className="text-black w-full p-2 mb-4 border border-gray-300 rounded"
            required
            />
            <button
            type="submit"
            className="w-full bg-primary hover:shadow-lg hover:opacity-90 text-background font-bold py-2 px-4 rounded"
            >
            {isSending && <ClipLoader color="#000" size={10} />} &nbsp; Send
            Message
            </button>
        </form>

	);
};

export type { ContactEmailProps };
