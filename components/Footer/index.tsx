import React from 'react'
import ContactForm from '@/components/ContactForm';

export const Footer = () => {

	return (
		<footer id="kontakt" className="container mx-auto pb-20 mt-20 mb-20">
			<div className="text-center py-40 justify-center">
				
				
				<div className='text-3xl p-2 pb-10 text-slate-100'>Email me business or philosophy here:</div>
				<ContactForm />
				{/* <a href="mailto:electrom@tutanota.com" className='p-[6px_16px_8px_16px] text-4xl text-[#fff]'>elektrom@tutanota.com</a> */}
			</div>
		</footer>
	);
};
