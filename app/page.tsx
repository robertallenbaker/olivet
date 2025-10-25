import VideoBackground from "./components/VideoBackground";
import Link from "next/link";
import Image from "next/image";
import { getSermons } from "./lib/graphql/sermons";

function stripHtml(html: string | null | undefined) {
	if (!html) return "";
	return html.replace(/<[^>]+>/g, "").trim();
}
function formatDate(iso: string | null | undefined) {
	if (!iso) return "";
	try {
		return new Date(iso).toLocaleDateString(undefined, {
			year: "numeric",
			month: "long",
			day: "numeric",
		});
	} catch (e) {
		return iso;
	}
}

export default async function Home() {
	const sermons: any[] = await getSermons();
	const sermon = sermons && sermons.length > 0 ? sermons[0] : null;

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
			<section className='this-weeks-sermon py-12'>
				<div className='container'>
					<h2 className='text-2xl font-semibold mb-6'>
						This week's sermon
					</h2>

					<div className='grid grid-cols-1 gap-6'>
						{sermon ? (
							<article
								key={sermon.id}
								className='bg-white rounded overflow-hidden shadow'
							>
								<div className='p-4'>
									<h3 className='text-lg font-semibold'>
										{sermon.title}
									</h3>
									{sermon.acfSermonFields?.speaker && (
										<p className='text-sm text-gray-600'>
											By {sermon.acfSermonFields.speaker}
										</p>
									)}

									{sermon.date && (
										<p className='text-sm text-gray-500'>
											{formatDate(sermon.date)}
										</p>
									)}

									{sermon.acfSermonFields?.youtube_id && (
										<div className='mt-4'>
											<div className='aspect-video w-full overflow-hidden rounded'>
												<iframe
													src={`https://www.youtube.com/embed/${sermon.acfSermonFields.youtube_id}?rel=0&showinfo=0`}
													title={sermon.title}
													allow='accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
													className='w-full h-full border-0'
													loading='lazy'
												/>
											</div>
										</div>
									)}

									{sermon.content && (
										<p className='mt-3 text-sm text-gray-700'>
											{stripHtml(sermon.content).slice(
												0,
												200
											)}
											{stripHtml(sermon.content).length >
											200
												? "…"
												: ""}
										</p>
									)}
								</div>
							</article>
						) : (
							<p>No sermons found.</p>
						)}
					</div>
				</div>
			</section>
			<section className='events'>
				Events is going to be brought in dynamically from events post
				type in Wordpress.
			</section>
			<hr className='max-w-[1072px] mx-auto border-[1px] border-solid border-grey' />
			<section className='about-olivet pt-[128px] pb-[104px]'>
				<div className='container'>
					<div className='grid grid-cols-12 gap-16 items-center'>
						<div className='col-span-12 md:col-span-6 lg:col-span-4'>
							<h2 className='text-base font-semibold mb-6'>
								About Olivet
							</h2>
							<p>
								Olivet Baptist Church is a community of
								believers who believe your questions are
								important and we want to share the answers we
								have with those around us. Our mission statement
								is "Love. Belong. Make. Reach.", and we offer a
								variety of ministries and events to help people
								grow in their faith.
							</p>
						</div>
						<div className='col-span-12 md:col-span-6 lg:col-span-8'>
							<div
								style={{
									position: "relative",
									paddingBottom: "56.25%",
									height: 0,
									overflow: "hidden",
									maxWidth: "100%",
								}}
							>
								<iframe
									src='https://www.youtube.com/embed/u31qwQUeGuM?controls=1&rel=0'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='ministries bg-grey pt-[104px] pb-[163px]'>
				<div className='container'>
					<h2 className='text-[32px] font-semibold text-center'>
						Ministries
					</h2>
				</div>
			</section>
			<section className='our-pastors pt-[112px] pb-[154px]'>
				<div className='container'>
					<h2 className='text-[32px] font-semibold text-center mb-8'>
						Our Pastors
					</h2>
					<div className='grid grid-cols-12 gap-8'>
						<div className='col-span-12 md:col-span-6 lg:col-span-3'>
							<Image
								src='/scott-palmer-vertical.jpg'
								alt='Scott Palmer'
								width={256}
								height={454}
							/>
							<div className='bg-grey p-[20px]'>
								<h3 className='text-[22px] text-center font-semibold leading-[40px] mb-2'>
									Scott Palmer
								</h3>
								<Link
									href={"mailto:scott"}
									className='bg-[#6b6a6a] text-[20px] text-white p-2 font-semibold block text-center transition-all duration-300 ease-in-out hover:bg-black'
								>
									Email Scott
								</Link>
							</div>
						</div>
						<div className='col-span-12 md:col-span-6 lg:col-span-3'>
							<Image
								src='/don-cook-vertical.jpg'
								alt='Don Cook'
								width={256}
								height={454}
							/>
							<div className='bg-grey p-[20px]'>
								<h3 className='text-[22px] text-center font-semibold leading-[40px] mb-2'>
									Don Cook
								</h3>
								<Link
									href={"mailto:scott"}
									className='bg-[#6b6a6a] text-[20px] text-white p-2 font-semibold block text-center transition-all duration-300 ease-in-out hover:bg-black'
								>
									Email Don
								</Link>
							</div>
						</div>
						<div className='col-span-12 md:col-span-6 lg:col-span-3'>
							<Image
								src='/troy-blankenship-vertical.jpg'
								alt='Troy Blankenship'
								width={256}
								height={454}
							/>
							<div className='bg-grey p-[20px]'>
								<h3 className='text-[22px] text-center font-semibold leading-[40px] mb-2'>
									Troy Blankenship
								</h3>
								<Link
									href={"mailto:troy"}
									className='bg-[#6b6a6a] text-[20px] text-white p-2 font-semibold block text-center transition-all duration-300 ease-in-out hover:bg-black'
								>
									Email Troy
								</Link>
							</div>
						</div>
						<div className='col-span-12 md:col-span-6 lg:col-span-3'>
							<Image
								src='/derek-robinson-vertical.jpg'
								alt='Scott Palmer'
								width={256}
								height={454}
							/>
							<div className='bg-grey p-[20px]'>
								<h3 className='text-[22px] text-center font-semibold leading-[40px] mb-2'>
									Derek Robinson
								</h3>
								<Link
									href={"mailto:derek"}
									className='bg-[#6b6a6a] text-[20px] text-white p-2 font-semibold block text-center transition-all duration-300 ease-in-out hover:bg-black'
								>
									Email Derek
								</Link>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='olivet-south pt-[160px] pb-[152px] bg-lightBlue'>
				<div className='container'>
					<div className='grid grid-cols-12 gap-16 items-center'>
						<div className='col-span-12 md:col-span-6 lg:col-span-4'>
							<h2 className='text-base font-semibold mb-6'>
								Olivet South - Our Brazil Connection
							</h2>
							<p>
								Olivet Baptist Church is a community of
								believers who believe your questions are
								important and we want to share the answers we
								have with those around us. Our mission statement
								is "Love. Belong. Make. Reach.", and we offer a
								variety of ministries and events to help people
								grow in their faith.
							</p>
						</div>
						<div className='col-span-12 md:col-span-6 lg:col-span-8'>
							<div
								style={{
									position: "relative",
									paddingBottom: "56.25%",
									height: 0,
									overflow: "hidden",
									maxWidth: "100%",
								}}
							>
								<iframe
									src='https://www.youtube.com/embed/u31qwQUeGuM?controls=1&rel=0'
									frameBorder='0'
									allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
									allowFullScreen
									style={{
										position: "absolute",
										top: 0,
										left: 0,
										width: "100%",
										height: "100%",
									}}
								></iframe>
							</div>
						</div>
					</div>
				</div>
			</section>
			<section className='testimonial pt-[112px] pb-[91px]'>
				<div className='container'>
					<blockquote className='text-center text-[64px] font-extralight leading-[62px] mb-4'>
						“If I had to describe Olivet in one word, it would be
						“home.”
					</blockquote>
					<cite className='text-center block text-[20px] leading-[40px] not-italic'>
						– Bob Hunt
					</cite>
				</div>
			</section>
		</main>
	);
}
