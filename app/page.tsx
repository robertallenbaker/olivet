import VideoBackground from "./components/VideoBackground";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
	return (
		<main className='overflow-x-hidden'>
			<VideoBackground
				videoId='aqz-KE-bpKQ'
				overlayText='Your Questions Are Important.'
			/>
			{/* Add more content below the video background */}

			<section className='square-links pt-[131px] pb-[122px]'>
				<div className='container'>
					<div className='flex justify-center lg:justify-between gap-8 flex-wrap lg:flex-nowrap'>
						<Link
							href={"/answers"}
							className='bg-yellowGreen hover:bg-yellowGreen-dark text-white w-[164px] h-[164px] block py-[56px] px-[15px] text-[24px] leading-[26px] transition-all duration-500 ease-in-out relative'
						>
							<div className='absolute top-1/2 -translate-y-1/2 w-full'>
								Get Some Answers
							</div>
						</Link>
						<Link
							href={"/request-prayer"}
							className='bg-lightGreen hover:bg-lightGreen-dark text-white w-[164px] h-[164px] block py-[56px] px-[15px] text-[24px] leading-[26px] transition-all duration-500 ease-in-out relative'
						>
							<div className='absolute top-1/2 -translate-y-1/2 w-full'>
								Request Prayer
							</div>
						</Link>
						<Link
							href={"/give"}
							className='bg-orange hover:bg-orange-dark text-white w-[164px] h-[164px] block py-[56px] px-[15px] text-[24px] leading-[26px] transition-all duration-500 ease-in-out relative'
						>
							Giving An Offering
						</Link>
						<Link
							href={"/speak-with-a-pastor"}
							className='bg-red hover:bg-red-dark text-white w-[164px] h-[164px] block py-[56px] px-[15px] text-[24px] leading-[26px] transition-all duration-500 ease-in-out relative'
						>
							<div className='absolute top-1/2 -translate-y-1/2 pr-2'>
								Speak With A Pastor
							</div>
						</Link>
						<Link
							href={"/sermons"}
							className='bg-purple hover:bg-purple-dark text-white w-[164px] h-[164px] block py-[56px] px-[15px] text-[24px] leading-[26px] transition-all duration-500 ease-in-out relative'
						>
							<div className='absolute top-1/2 -translate-y-1/2 w-full'>
								Watch A Sermon
							</div>
						</Link>
					</div>
				</div>
			</section>
			<section className='schedule bg-blue text-white pt-[35px] pb-[47px]'>
				<div className='container'>
					<h2 className='text-[18px] font-semibold text-center mb-8'>
						Weekly Schedule at a Glance
					</h2>

					<div className='grid grid-cols-12 gap-x-8'>
						<div className='col-span-12 md:col-span-6 lg:col-span-4'>
							<h3>Sunday Mornings</h3>
							<ul className='list-disc pl-8 mb-4'>
								<li>9:00 am - Small Group Bible Study</li>
								<li>10:15 am - Worship</li>
							</ul>
							Sunday Evening
							<ul className='list-disc pl-8 mb-4'>
								<li>No evening services at this time</li>
							</ul>
							Tuesday
							<ul className='list-disc pl-8 mb-4'>
								<li>9:30 am - SewRight Quilters</li>
							</ul>
						</div>
						<div className='col-span-12 md:col-span-6 lg:col-span-5'>
							Wednesday
							<ul className='list-disc pl-8 mb-4'>
								<li>
									10:00 am - Praise Age Choir (Senior Adults)
								</li>
								<li>
									6:30-7:30 pm - KidzBlitz - 1st through 6th
									Grade
								</li>
								<li>
									6:30-7:30 pm - Student Ministry Meets in the
									Refuge
								</li>
								<li>
									6:30 pm - Adult Bible Study in Adult 4
									Classroom
								</li>
								<li>
									6:30 pm - Adult Choir meets in Choir Room
								</li>
							</ul>
						</div>
						<div className='col-span-12 lg:col-span-3'>
							<Link
								href={
									"https://www.google.com/maps?um=1&ie=UTF-8&q=olivet+baptist+church+tulsa&fb=1&gl=us&hq=olivet+baptist+church&hnear=0x87b692b8ddd12e8f:0xe76910c81bd96af7,Tulsa,+OK&cid=0,0,11131920483174659787&sa=X&ei=X_QCUfOuHeXr2QX-64DICg&ved=0CIABEPwSMAA"
								}
								target='blank'
							>
								<Image
									src='/map.png'
									alt='Olivet Baptist Church Map'
									width={930}
									height={706}
									priority
									className='transition-all duration-300 ease-in-out hover:opacity-70'
								/>
							</Link>
						</div>
					</div>
				</div>
			</section>
			<section className='this-weeks-sermon'>
				This week's sermon is going to be brought in dynamically from
				sermons post type in Wordpress.
			</section>
			<section className='events'>
				Events is going to be brought in dynamically from events post
				type in Wordpress.
			</section>
			<section className='about-olivet'>About Olivet here</section>
		</main>
	);
}
