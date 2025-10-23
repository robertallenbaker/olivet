interface VideoBackgroundProps {
	videoId: string;
	overlayText: string;
}

export default function VideoBackground({
	videoId,
	overlayText,
}: VideoBackgroundProps) {
	return (
		<div className='relative h-[90vh] w-screen overflow-hidden bg-black'>
			{/* YouTube iframe */}
			<div className='relative w-full h-full'>
				<iframe
					src={`https://www.youtube.com/embed/${videoId}?autoplay=1&mute=1&loop=1&playlist=${videoId}&controls=0&showinfo=0&rel=0&playsinline=1&enablejsapi=1`}
					allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture'
					className='absolute top-1/2 left-1/2 w-auto h-[90vh] md:h-auto md:w-full aspect-video scale-[2] md:scale-[1.5] -translate-x-1/2 -translate-y-1/2 pointer-events-none object-cover'
					style={{ border: "none" }}
					title='Background video'
				/>
			</div>

			{/* Overlay */}
			<div className='absolute inset-0 flex bg-black/50 items-center mx-auto'>
				<div className='container'>
					<h1 className='text-white text-center text-[48px] leading-[53px] font-primary px-4 max-w-[400px]'>
						{overlayText}
					</h1>
				</div>
			</div>
		</div>
	);
}
