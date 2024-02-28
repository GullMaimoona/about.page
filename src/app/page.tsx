import Head from 'next/head';
import Image from 'next/image';

export default function About() {
  return (
    <>
      <Head>
        <title>About Us | Trendy Attire</title>
        <meta name="description" content="Discover the story behind Trendy Attire and our dedication to fashion and style." />
      </Head>
      <div className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h1 className='text-5xl font-semibold text-center mb-14  '>About Us</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-sm font-semibold text-gray-500 uppercase mb-4">Our Story</h4>
              <h2 className="text-4xl font-bold leading-tight mb-5">
                Fashioning the Future<br />
                <span className="text-indigo-600">One Thread at a Time</span>
              </h2>
              <p className="text-gray-700">
                Trendy Attire began with a simple yet bold vision: to bring extraordinary fashion to everyday life. We started as a small boutique with big dreams, curating high-quality pieces from emerging designers around the world. Today, we stand as a destination for those who appreciate style and substance in equal measure.
              </p>
            </div>
          
            <div>  
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="bg-white rounded-lg p-8 flex items-center justify-between border border-gray-300">
                  <div>
                    <span className="block text-xl font-semibold">10+</span>
                    <span className="block text-gray-500 text-sm">Years in Fashion</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-8 flex items-center justify-between border border-gray-300">
                  <div>
                    <span className="block text-xl font-semibold">50+</span>
                    <span className="block text-gray-500 text-sm">Designer Brands</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-8 flex items-center justify-between border border-gray-300">
                  <div>
                    <span className="block text-xl font-semibold">5k+</span>
                    <span className="block text-gray-500 text-sm">Unique Outfits</span>
                  </div>
                </div>
                <div className="bg-white rounded-lg p-8 flex items-center justify-between border border-gray-300">
                  <div>
                    <span className="block text-xl font-semibold">1M+</span>
                    <span className="block text-gray-500 text-sm">Happy Customers</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gray-50 py-12 px-6 md:px-12">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">Meet Our Team</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-md overflow-hidden border border-gray-300">
              <Image
                src="/team-member1.jpg"
                alt="Team Member 1"
                width={600}
                height={400}
                className="object-cover w-full h-32 md:h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">John Doe</h3>
                <p className="text-gray-700">Product Manager</p>
              </div>
            </div>
            <div className="bg-white rounded-md overflow-hidden border border-gray-300">
              <Image
                src="/team-member2.jpg"
                alt="Team Member 2"
                width={600}
                height={400}
                className="object-cover w-full h-32 md:h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Jane Smith</h3>
                <p className="text-gray-700">Lead Designer</p>
              </div>
            </div>
            <div className="bg-white rounded-md overflow-hidden border border-gray-300">
              <Image
                src="/team-member3.jpg"
                alt="Team Member 3"
                width={600}
                height={400}
                className="object-cover w-full h-32 md:h-40"
              />
              <div className="p-4">
                <h3 className="text-xl font-semibold text-gray-800 mb-2">Mike Johnson</h3>
                <p className="text-gray-700">Marketing Specialist</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="py-12 px-6 md:px-12 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">What Our Customers Say</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-white rounded-md p-6 border border-gray-300">
              <p className="text-gray-700 mb-4">
                "Amazing products and super fast delivery! I'm a happy customer and will definitely shop here again."
              </p>
              <p className="text-gray-800 font-bold">- Sarah Johnson</p>
            </div>
            <div className="bg-white rounded-md p-6 border border-gray-300">
              <p className="text-gray-700 mb-4">
                "The variety of styles is impressive, and the quality is unmatched. Trendy Attire has become my go-to for fashion."
              </p>
              <p className="text-gray-800 font-bold">- Michael Smith</p>
            </div>
            <div className="bg-white rounded-md p-6 border border-gray-300">
              <p className="text-gray-700 mb-4">
                "Excellent customer service! They went above and beyond to ensure I was satisfied with my purchase."
              </p>
              <p className="text-gray-800 font-bold">- Emily Davis</p>
            </div>
            <div className="bg-white rounded-md p-6 border border-gray-300">
              <p className="text-gray-700 mb-4">
                "Trendy Attire consistently delivers top-notch fashion. I'm always excited to see their new arrivals."
              </p>
              <p className="text-gray-800 font-bold">- Robert Taylor</p>
            </div>
            <div className="bg-white rounded-md p-6 border border-gray-300">
              <p className="text-gray-700 mb-4">
                "Fast and reliable service. The clothing quality exceeded my expectations. Highly recommended!"
              </p>
              <p className="text-gray-800 font-bold">- Emma Thompson</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
