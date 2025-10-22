"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";

export function Header() {
	const [open, setOpen] = useState(false);

	return (
		<header>
			<div className='mx-auto px-8 max-w-[1130px] flex justify-between items-center gap-x-8 pt-[20px] pb-[20px]'>
				<div>
					<Link href={"/"}>
						<Image
							src='/logo.svg'
							alt='Olivet Baptist Church'
							width={150}
							height={40}
							priority
							className='transition-all duration-300 ease-in-out hover:opacity-70'
						/>
					</Link>
				</div>

				{/* Desktop nav */}
				<ul className='gap-x-12 items-center text-sm font-semibold hidden xl:flex'>
					<li>
						<Link
							href={"/answers"}
							className='hover:text-red duration-300 ease-in-out transition-all'
						>
							Answers
						</Link>
					</li>
					<li>
						<Link
							href={"/about"}
							className='hover:text-red duration-300 ease-in-out transition-all'
						>
							About Us
						</Link>
					</li>
					<li>
						<Link
							href={"/videos"}
							className='hover:text-red duration-300 ease-in-out transition-all'
						>
							Videos
						</Link>
					</li>
					<li>
						<Link
							href={"/discipleship"}
							className='hover:text-red duration-300 ease-in-out transition-all'
						>
							Discipleship
						</Link>
					</li>
					<li>
						<Link
							href={"/missions"}
							className='hover:text-red duration-300 ease-in-out transition-all'
						>
							Missions
						</Link>
					</li>
					<li>
						<Link
							href={"/ministries"}
							className='hover:text-red duration-300 ease-in-out transition-all'
						>
							Ministries
						</Link>
					</li>
					<li>
						<Link
							href={"/ask"}
							className='bg-red p-3 text-white hover:bg-purple transition-all duration-300 ease-in-out'
						>
							Ask Us Anything
						</Link>
					</li>
				</ul>

				{/* Mobile menu button */}
				<div className='xl:hidden'>
					<button
						aria-label={open ? "Close menu" : "Open menu"}
						aria-expanded={open}
						onClick={() => setOpen((s) => !s)}
						className='p-2 text-2xl'
					>
						<FontAwesomeIcon icon={open ? faTimes : faBars} />
					</button>
				</div>
			</div>

			{/* Mobile menu drawer (always rendered to allow transition) */}
			<nav
				className={`xl:hidden bg-white border-t overflow-hidden transition-[max-height,opacity] duration-500 ease-in-out text-center ${
					open ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"
				}`}
				aria-hidden={!open}
			>
				<div className='mx-auto max-w-[1130px] pt-8 flex flex-col gap-8 bg-blue'>
					<Link
						className='text-white'
						href='/answers'
						onClick={() => setOpen(false)}
					>
						Answers
					</Link>
					<Link
						className='text-white'
						href='/about'
						onClick={() => setOpen(false)}
					>
						About Us
					</Link>
					<Link
						className='text-white'
						href='/videos'
						onClick={() => setOpen(false)}
					>
						Videos
					</Link>
					<Link
						className='text-white'
						href='/discipleship'
						onClick={() => setOpen(false)}
					>
						Discipleship
					</Link>
					<Link
						className='text-white'
						href='/missions'
						onClick={() => setOpen(false)}
					>
						Missions
					</Link>
					<Link
						className='text-white'
						href='/ministries'
						onClick={() => setOpen(false)}
					>
						Ministries
					</Link>
					<Link
						href='/ask'
						className='mt-2 bg-red p-3 text-white inline-block w-full'
						onClick={() => setOpen(false)}
					>
						Ask Us Anything
					</Link>
				</div>
			</nav>
		</header>
	);
}
