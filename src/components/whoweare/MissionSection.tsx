"use client"

import { motion } from "framer-motion"

const MissionSection = () => {
  return (
    <section className="w-full py-20 md:py-32">
      <div className="mx-auto px-0">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-4xl font-medium tracking-tight text-foreground md:text-5xl lg:text-5xl">
              Build exceptional products faster — using modern engineering and
              practical AI.
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="flex flex-col justify-center space-y-6"
          >
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              We combine product thinking with engineering execution — clear
              discovery and scoping, rapid prototyping, agile delivery with
              measurable milestones, and production-ready architecture.
            </p>
            <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
              Every project is a chance to ship something meaningful, solve a
              real problem, and push the boundaries of what&apos;s possible with
              modern tech and AI.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  )
}

export default MissionSection
