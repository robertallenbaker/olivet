import Link from "next/link";
import Image from "next/image";

export function Header() {
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
				<ul className='flex gap-x-12 items-center text-sm font-semibold'>
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
			</div>
		</header>
	);
}
