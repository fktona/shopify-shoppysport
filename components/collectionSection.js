import Image from 'next/image'
import React from 'react'
import Link from 'next/link'

export default function 
CollectionSection() {
  return (
<div className="h-screen z-30 herobg max-h-[70vh]  flex items-center">
	<section className="bg-cover z-30 bg-center py-32 w-full">
		<div className="container mx-auto text-left text-white">
			<div className="flex items-center lg:px-16 pc-5">
				<div className="lg:w-1/2 w-full px-6">
					<h1 className="text-5xl font-medium mb-6">FITNESS EQUIPMENTS</h1>
					<p className="text-xl mb-12">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam viverra
						euismod odio, gravida pellentesque urna varius vitae.</p>
					<Link href="/fitness" className="bg-red-500 flex w-fit gap-3 shadow-sm text-white py-4 px-9
					  hover:bg-red-600">
						<svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
  <path stroke-linecap="round" stroke-linejoin="round" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
</svg>Shop Collection</Link>
				</div>
				<div className="absolute lg:right-[10%] -z-10 bottom-0 overflow-hidden  flex justify-start  items-center w-fit h-full">
        <Image
          src="/work.png"
          alt="ball player in action"
          width={400}
          height={400}
          objectFit="cover"
          objectPosition="center"
          quality={100}
          className="relative h-[90%] w-[80%]  -bottom-5 "
        />
     </div>
				</div>
			</div>
	</section>
</div>
  )
}
