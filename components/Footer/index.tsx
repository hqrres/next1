import React from 'react'
// import { EmailTemplate } from "@/components/EmailTemplate";
// import Link from 'next/link';

export const Footer = () => {

	return (
		<footer id="kontakt" className="container mx-auto pb-20 mt-40">
			<div className="text-center py-8  justify-center">
				
				{/* <EmailTemplate firstName={''} /> */}


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
				<div className='text-xl pb-6 text-slate-500'>Email:</div>
				<a href="mailto:electrom@tutanota.com" className='p-[6px_16px_8px_16px] text-4xl text-[#fff]'>elektrom@tutanota.com</a>

			</div>
		</footer>
	);
};
