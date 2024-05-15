import React from 'react'
import facebook from '@/assets/images/main/facebook.svg'
import twiter from '@/assets/images/main/twiter.svg'
import lin from '@/assets/images/main/in.svg'
import youtube from '@/assets/images/main/youtube.svg'
import Image from 'next/image'

const Footer = () => {
	return (
		<footer>
			<div className='flex max-w-[1200px] m-auto flex-wrap justify-around mt-[150px] text-[#7E92B2] text-[16px] leading-[2]'>
				<div>
					<ul>
						<li>
							<p className='text-[#5A6980] font-bold text-[20px]'>О нас</p>
						</li>
						<li className='mt-[20px]'>
							<p>Prices</p>
						</li>
						<li>
							<p>About</p>
						</li>
						<li>
							<p>Services</p>
						</li>
						<li>
							<p>Career</p>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li>
							<p className='text-[#5A6980] font-bold text-[20px]'>Resources</p>
						</li>
						<li className='mt-[20px]'>
							<p>Terms</p>
						</li>
						<li>
							<p>Help</p>
						</li>
						<li>
							<p>Privacy</p>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='text-[#5A6980] font-bold text-[20px]'>
							<p>Team</p>
						</li>
						<li className='mt-[20px]'>
							<p>Developer</p>
						</li>
						<li>
							<p>Designer</p>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='text-[#5A6980] font-bold text-[20px]'>
							<p>Blog</p>
						</li>
						<li className='mt-[20px]'>
							<p>CEO</p>
						</li>
						<li>
							<p>Lifestyle</p>
						</li>
						<li>
							<p>Article</p>
						</li>
						<li>
							<p>Tech</p>
						</li>
					</ul>
				</div>
				<div>
					<ul>
						<li className='text-[#5A6980] font-bold text-[20px]'>Follow Us</li>
						<li className='flex gap-[10px]'>
							<Image src={facebook} alt='' />
							<Image src={twiter} alt='' />
							<Image src={lin} alt='' />
							<Image src={youtube} alt='' />
						</li>
						<li className='text-[#5A6980] font-bold text-[20px]'>
							<p>Subscribe to our newsletter</p>
						</li>
						<li>
							<p>Email</p>
						</li>
						<li></li>
						<li></li>
						<li></li>
					</ul>
				</div>
			</div>
			<div className='mt-[100px] max-w-[1200px] mx-auto'>
				<hr className='w-[100%] h-[2px] bg-[#B4D2FF]' />
				<div className='flex justify-between lg:p-[20px] p-[20px]'>
					<p>All rights Reserved copyright Noor moliya, 2024</p>
					<p>Сделано с 💖 Noor tech</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
