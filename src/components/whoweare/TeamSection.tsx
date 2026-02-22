"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Linkedin, Mail } from "lucide-react"

const TeamSection = () => {
  const teamMembers = [
    {
      id: 1,
      name: "Gautam Chauhan",
      role: "Co-Founder & CEO",
      bio: "Gautam drives the vision and strategy behind Sableon, turning ambitious ideas into scalable products that help startups and businesses grow faster.",
      image: "/images/authors/gautam_chauhan.jpg",
      linkedin: "https://www.linkedin.com/in/gautam-chauhan-2111h/",
      email: "mailto:gautam@sableon.com",
    },
    {
      id: 2,
      name: "Keshav Chauhan",
      role: "Co-Founder & CTO",
      bio: "Keshav architects the engineering systems and AI infrastructure that power everything we build — fast, scalable, and built for production.",
      image: "/images/authors/keshav_chauhan.jpg",
      linkedin: "https://www.linkedin.com/in/keshav-chauhan7/",
      email: "mailto:keshav@sableon.com",
    },
    {
      id: 3,
      name: "Aditya Pratap Singh",
      role: "Co-Founder & COO",
      bio: "Aditya keeps the engine running — aligning operations, delivery, and growth so we ship world-class products on time, every time.",
      image: "/images/authors/aditya_pratap_singh.jpg",
      linkedin: "https://www.linkedin.com/in/aditya270195/",
      email: "mailto:aditya@sableon.com",
    },
  ]

  return (
    <section className="w-full rounded-lg bg-secondary/20 py-20 md:py-32">
      <div className="mx-auto px-4 md:px-6 lg:px-8">
        <div className="mb-16">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl text-xl leading-relaxed text-muted-foreground md:text-2xl"
          >
            Three founders. One shared obsession with building exceptional
            products. Together, we&apos;re an execution-first agency focused on
            speed, quality, and long-term maintainability.
          </motion.p>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="grid grid-cols-1 gap-12 md:grid-cols-3"
        >
          {teamMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <div className="mb-6 overflow-hidden rounded-lg">
                <Image
                  src={member.image}
                  alt={member.name}
                  width={400}
                  height={400}
                  className="aspect-square w-full object-cover"
                />
              </div>
              <h3 className="mb-2 text-2xl font-medium text-foreground md:text-3xl">
                {member.name}
              </h3>
              <p className="mb-4 text-base text-muted-foreground md:text-lg">
                {member.role}
              </p>
              <p className="mb-4 leading-relaxed text-muted-foreground">
                {member.bio}
              </p>

              <div className="flex items-center gap-3">
                <a
                  href={member.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-md border border-border bg-card p-2.5 text-foreground transition-all hover:bg-accent"
                  aria-label={`LinkedIn profile of ${member.name}`}
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={member.email}
                  className="rounded-md border border-border bg-card p-2.5 text-foreground transition-all hover:bg-accent"
                  aria-label={`Email ${member.name}`}
                >
                  <Mail className="h-4 w-4" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default TeamSection
