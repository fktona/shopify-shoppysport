import Link from "next/link"

const navigation = [
  { name: 'About', href: '#hero' },
  { name: 'Shop', href: '#product' },
  { name: 'Terms and Conditions', href: '#' }
]

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 overflow-hidden sm:px-6 lg:px-8">
        <nav className="flex flex-wrap justify-center">
          {
            navigation.map((item, i) => (
              <div key={i} className="px-6 py-2">
                <Link href={item.href} className="text-gray-500 hover:text-gray-900">
                  {item.name}
                </Link>
              </div>
            ))
          }
        </nav>
        {/* <p className="mt-8 text-center text-gray-400">&copy; 2021 Learn Shopify Next.js Course, All right reserved.</p> */}
      </div>
    </footer>
  )
}
