'use client'
import Image from 'next/image'
import logo from '@/assets/images/header/logo.png'

import {
	Drawer,
	Button,
	Typography,
	IconButton,
} from '@material-tailwind/react'
import { useState } from 'react'
import { Bars3Icon } from '@heroicons/react/24/outline'

export default function Header() {
	const [open, setOpen] = useState(false)
	const openDrawer = () => setOpen(true)
	const closeDrawer = () => setOpen(false)
	return (
		<header className='bg-[white]'>
			<div className='white-gardient h-[80px] flex items-center justify-between	y-between m-auto max-w-[1200px] flex-wrap px-[20px]'>
				<div className='flex items-center flex-wrap justify-center'>
					<div className='logo'>
						<Image width={'100'} src={logo} alt='' />
					</div>
					<nav className='md:hidden text-[18px]'>
						<ul className='flex items-center gap-[40px] ml-[30px] text-[#485466]'>
							<li>
								<a className='block' href='#why-are-we'>
									Почему мы?
								</a>
							</li>
							<li>
								<a className='block' href='#our-products'>
									Наши продукты
								</a>
							</li>
							<li>
								<a className='block' href='#about-us'>
									О нас
								</a>
							</li>
							<li>
								<a className='block' href='#our-team'>
									Наша команда
								</a>
							</li>
							<li>
								<a className='block' href='#contacts'>
									Контакты
								</a>
							</li>
						</ul>
					</nav>
				</div>
				<div className='gardient m-auto block md:hidden'>
					<a
						href='#contacts'
						className='block shadow-btn text-[16px] font-bold  px-[16px] py-[7px] rounded-[8px] tracking-[1px]'
					>
						Оставить заявку
					</a>
				</div>
				<Button
					className='md:block hidden gardient-item p-[0px]'
					onClick={openDrawer}
				>
					<Bars3Icon class='h-12 w-12 text-white' />
				</Button>

				<Drawer
					open={open}
					onClose={closeDrawer}
					placement='top'
					className='p-4'
				>
					<div className=' flex items-center justify-end'>
						<IconButton variant='text' color='blue-gray' onClick={closeDrawer}>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								fill='none'
								viewBox='0 0 24 24'
								strokeWidth={2}
								stroke='currentColor'
								className='h-5 w-5'
							>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									d='M6 18L18 6M6 6l12 12'
								/>
							</svg>
						</IconButton>
					</div>
					<nav className='text-[18px]'>
						<ul className='flex gap-[10px] flex-col items-center ml-[30px]'>
							<li>
								<a className='blcok' href='#why-are-we'>
									Почему мы?
								</a>
							</li>
							<li>
								<a className='block' href='#our-products'>
									Наши продукт
								</a>
							</li>
							<li>
								<a className='block' href='#about-us'>
									О нас
								</a>
							</li>
							<li>
								<a href='#our-team'>Наша команда</a>
							</li>
							<li>
								<a href='#contacts'>Контакты</a>
							</li>
							<a
								href='#contacts'
								className='gardient 	block shadow-btn text-[16px] font-bold  px-[16px] py-[7px] rounded-[8px] tracking-[1px]'
							>
								Оставить заявку
							</a>
						</ul>
					</nav>
				</Drawer>
			</div>
		</header>
	)
}
