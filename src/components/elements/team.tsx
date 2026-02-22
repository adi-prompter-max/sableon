import Image from "next/image"

export function TeamSection() {
  const teamMembers = [
    {
      name: "Gautam Chauhan",
      role: "Co-Founder & CEO",
      image: "/images/authors/gautam_chauhan.jpg",
    },
    {
      name: "Keshav Chauhan",
      role: "Co-Founder & CTO",
      image: "/images/authors/keshav_chauhan.jpg",
    },
    {
      name: "Aditya Pratap Singh",
      role: "Co-Founder & COO",
      image: "/images/authors/aditya_pratap_singh.jpg",
    },
  ]

  return (
    <section className="container mx-auto mb-80 mt-40">
      <h2 className="mb-10 text-center text-2xl font-semibold text-gray-100">
        Meet Our Team
      </h2>
      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {teamMembers.map((member, index) => (
          <div key={index} className="text-center">
            <Image
              src={member.image}
              alt={member.name}
              className="mx-auto mb-4 h-32 w-32 rounded-md"
              width={128}
              height={128}
              objectFit="cover"
            />
            <h3 className="text-lg font-medium text-gray-100">{member.name}</h3>
            <p className="text-sm text-gray-400">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
