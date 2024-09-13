"use client"
import { sendEmail } from "@/pages/api/actions"
import { useEffect } from "react"
import { useFormState } from "react-dom"

// import Link from "next/link";
// import React, { useState } from 'react'
import React from 'react'

export const Footer = () => {

	const [sendEmailState, sendEmailAction] = useFormState(sendEmail, {
		error: null,
		success: false
	  })
	  useEffect(() => {
		if (sendEmailState.success) {
		  alert("Email sent!")
		}
		if (sendEmailState.error) {
		  alert("Error sending email!")
		}
	  }, [sendEmailState])

	return (
		<footer id="kontakt" className="container mx-auto pb-20 mt-40">
			<div className="text-center py-8 flex justify-center">
				
				<form action={sendEmailAction}>
					<label htmlFor="name">Name</label>
					<input type="text" id="name" name="name" />
					<label htmlFor="email">Email</label>
					<input type="email" id="email" name="email" />
					<label htmlFor="message">Message</label>
					<textarea name="message" id="message" cols={30} rows={10}></textarea>
					<button type="submit">Send</button>
				</form>


				{/* <form className='max-w-4xl border-gray-800 border-2 p-10'>
				<label className='block'>
					<span className="py-3 px-2 block text-start">Name</span>
					<input type="text" name="name" required className='bg-transparent border-2 border-gray-800 rounded-sm px-2 py-2 mx-2 my-1 w-96'/>
				</label>
				<label className='block'>
					<span className="py-3 px-2 block text-start">Email</span>
					<input type="email" name="email" required className='bg-transparent border-2 border-gray-800 rounded-sm px-2 py-2 mx-2 my-1 w-96'/>
				</label>
				<label className='block'>
					<span className="py-3 px-2 block text-start">Message</span>
					<textarea name="message" required className='bg-transparent border-2 border-gray-800 rounded-sm px-2 py-2 mx-2 my-1 w-96'/>
				</label>
				<div className="flex justify-start">
					<button type="submit" className='border-2 border-white rounded-sm px-6 py-4 mx-2 my-6'>
					Send message!
					</button>
				</div> */}
				{/* {successMessage && <p>{successMessage}</p>} */}
				{/* </form> */}

			</div>
		</footer>
	);
};
