"use client"

import { motion } from "framer-motion"
import { ArrowRight, Mail, MessageSquare } from "lucide-react"

const ContactForm = () => {
  const contactEmail = "hello@sableon.com"

  return (
    <div className="mx-auto max-w-[94%] px-4 md:max-w-[90%] lg:px-8">
      <section className="w-full py-20 md:py-32">
        <div className="mx-auto px-0">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mb-16 text-center"
          >
            <h1 className="mb-6 text-4xl font-medium tracking-tight text-foreground md:text-6xl lg:text-7xl">
              Let&apos;s Connect
            </h1>
            <p className="mx-auto max-w-2xl text-lg leading-relaxed text-muted-foreground md:text-xl">
              Have a project in mind? We&apos;d love to hear about it.
            </p>
          </motion.div>

          <div className="relative grid grid-cols-1 gap-16 lg:grid-cols-2 lg:gap-24">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="space-y-12"
            >
              <div>
                <h2 className="mb-8 text-2xl font-medium tracking-tight text-foreground md:text-3xl">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  <div className="group">
                    <div className="mb-3 flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-muted transition-colors group-hover:bg-primary/10">
                        <Mail className="h-5 w-5 text-muted-foreground transition-colors group-hover:text-primary" />
                      </div>
                      <span className="text-sm font-medium text-muted-foreground">
                        Email us directly
                      </span>
                    </div>
                    <a
                      href={`mailto:${contactEmail}`}
                      className="ml-[52px] text-lg text-foreground transition-colors hover:text-primary md:text-xl"
                    >
                      {contactEmail}
                    </a>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <p className="text-lg leading-relaxed text-muted-foreground">
                  Whether you&apos;re looking to build a new digital product,
                  scale your existing platform, or need ongoing development
                  support, we&apos;re here to help bring your vision to life.
                </p>
              </div>
            </motion.div>

            <motion.div
              className="flex flex-col justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="space-y-8">
                <div>
                  <div className="mb-4 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                      <MessageSquare className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-2xl font-medium text-foreground md:text-3xl">
                      Start a Project
                    </h3>
                  </div>
                  <p className="text-lg leading-relaxed text-muted-foreground">
                    Tell us about your idea. We&apos;ll help you scope it,
                    plan the architecture, and build an MVP that users love.
                    From discovery to delivery.
                  </p>
                </div>

                <div className="space-y-4">
                  <a
                    href={`mailto:${contactEmail}`}
                    className="group inline-flex w-full items-center justify-between rounded-lg bg-foreground px-8 py-4 text-lg font-medium text-background transition-all hover:bg-foreground/90"
                  >
                    <span>Send Us an Email</span>
                    <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ContactForm
