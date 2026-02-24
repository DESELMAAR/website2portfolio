"use client"

import Image from "next/image"
import Link from "next/link"
import { Github, Linkedin, Mail, Download, ArrowDown, MapPin } from "lucide-react"
import { Button } from "@/components/ui/button"
import { AnimatedText, ClientMotion } from "@/components/client-animations"
import ArrowButton from "./ArrowButton"
import SparkleButton from "./SparkleButton"

export function HeroSection() {
  return (
    <section className="relative pt-28 pb-20 md:pt-36 md:pb-28 px-4 overflow-hidden">
      <div className="container mx-auto max-w-6xl">
        <div className="flex flex-col md:flex-row items-center gap-8 md:gap-16">
          <div className="w-full md:w-1/2 space-y-6">
            <div>
              <AnimatedText
                text="ABDESSAMAD EL MAAROUFI"
                className="text-4xl md:text-5xl font-bold tracking-tight"
              />
              <AnimatedText
                text="Full-Stack Web Developer | DevOps-Oriented"
                className="text-xl md:text-2xl font-semibold mt-2 bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent"
                once={true}
              />
              <ClientMotion
                className="flex items-center gap-1.5 mt-2 text-sm text-muted-foreground"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5, duration: 0.6 }}
              >
                <MapPin className="w-4 h-4" />
                <span>Casablanca, Morocco</span>
              </ClientMotion>
            </div>
            <ClientMotion
              className="text-lg text-muted-foreground"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              Building scalable, cloud-ready web applications with modern frontend and backend technologies,
              containerized deployments, and CI/CD pipelines.
            </ClientMotion>
            <ClientMotion
              className="flex flex-wrap gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8, duration: 0.8 }}
            >
              <ArrowButton asChild>
                <Link href="#projects">View Projects</Link>
              </ArrowButton>

              {/* Use ONLY ONE download button - either the regular Button or SparkleButton */}
              {/* <SparkleButton asChild variant="outline"> */}
                <Link
                  href="https://drive.google.com/file/d/1PCXY1Tf1u-El4TxIwVvV73jQanWMDZ80/view?usp=sharing"
                  target="_blank"
                  download
                  className="inline-flex items-center gap-2"
                >
                  <Download className="h-4 w-4" />
                  <span>Download CV</span>
                </Link>
              {/* </SparkleButton> */}

              <Button variant="secondary" asChild>
                <Link href="#contact">Contact Me</Link>
              </Button>
            </ClientMotion>
            <ClientMotion
              className="flex gap-4 pt-2"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1, duration: 0.8 }}
            >
              <Link
                href="https://www.linkedin.com/in/abdessamad-el-maaroufi-6b18bb224/"
                target="_blank"
                className="text-muted-foreground hover:text-primary transition-colors transform hover:scale-110 duration-300"
              >
                <Linkedin className="w-6 h-6" />
              </Link>
              <Link
                href="https://github.com/deselmaar"
                target="_blank"
                className="text-muted-foreground hover:text-foreground transition-colors transform hover:scale-110 duration-300"
              >
                <Github className="w-6 h-6" />
              </Link>
              <Link
                href="mailto:elmaarpro@gmail.com"
                className="text-muted-foreground hover:text-destructive transition-colors transform hover:scale-110 duration-300"
              >
                <Mail className="w-6 h-6" />
              </Link>
            </ClientMotion>
          </div>
          <ClientMotion
            className="w-full md:w-1/2 flex justify-center"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              delay: 0.3,
              duration: 0.8,
              type: "spring",
              stiffness: 100,
            }}
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full overflow-hidden border-4 border-background shadow-xl">
              <Image
                src="/images/profile.png"
                alt="Abdessamad El Maaroufi"
                fill
                className="object-cover"
                priority
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-blue-600/20 mix-blend-overlay" />
            </div>
          </ClientMotion>
        </div>

        <ClientMotion
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.5, duration: 1, repeat: Number.POSITIVE_INFINITY, repeatType: "reverse" }}
        >
          <Link
            href="#about"
            className="text-muted-foreground hover:text-primary transition-colors"
          >
            <ArrowDown className="w-6 h-6" />
          </Link>
        </ClientMotion>
      </div>
    </section>
  )
}