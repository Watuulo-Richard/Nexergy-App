import Image from "next/image"

export default function CTASection() {
  return (
    <div className="mx-4 my-6 md:my-12 py-8 md:container md:max-w-7xl md:mx-auto rounded-lg flex flex-col md:flex-row bg-[#c2baa7]">
      <div className="w-full md:w-1/2 flex items-center justify-center">
        <div className="relative">
          <div className="absolute inset-0">
            <Image src="/W-1.jpg" alt="Clean Shield Technology" width={180} height={180} />
          </div>
        </div>
      </div>

      {/* Right side with text */}
      <div className="w-full md:w-1/2 p-8">
        <div className="">
          <h2 className="text-3xl font-medium text-[#2d5b5b] mb-4">TotalEnergies Lubricants</h2>

          <p className="text-[#2d5b5b] mb-2">Feel the strength of our Lubricants in your engine</p>

          <p className="text-[#2d5b5b] mb-2">
            Unleash the potential of your engine with TotalEnergies Quartz or Rubia engine oils.
          </p>

          <p className="text-[#2d5b5b] mb-2">
            With greater protection and advanced friction technology, TotalEnergies Lubricants make your engine more
            efficient and younger for longer giving you better protection and more kilometers.
          </p>

          <p className="text-[#2d5b5b] font-medium">TotalEnergies- Your preferred choice in lubricants</p>
        </div>
      </div>
    </div>
  )
}
