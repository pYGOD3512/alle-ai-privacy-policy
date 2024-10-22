"use client";

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"

export default function PrivacyPolicy() {
  const [activeSection, setActiveSection] = useState('')

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id)
          }
        })
      },
      { rootMargin: '-50% 0px -50% 0px' }
    )

    document.querySelectorAll('section[id]').forEach((section) => {
      observer.observe(section)
    })

    return () => observer.disconnect()
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  const sections = [
    { id: 'information-we-collect', title: '1. Information We Collect' },
    { id: 'how-we-use-your-information', title: '2. How We Use Your Information' },
    { id: 'cookies-and-tracking', title: '3. Cookies and Tracking Technologies' },
    { id: 'sharing-your-information', title: '4. Sharing Your Information' },
    { id: 'user-access-and-control', title: '5. User Access and Control' },
    { id: 'security', title: '6. Security' },
    { id: 'changes-to-policy', title: '7. Changes to this Privacy Policy' },
    { id: 'contact-information', title: '8. Contact Information' },
  ]

  const TableOfContents = () => (
    <nav>
      <ul className="space-y-2">
        {sections.map((section) => (
          <li key={section.id}>
            <Button
              variant="ghost"
              className={`w-full justify-start ${
                activeSection === section.id ? 'bg-accent text-accent-foreground' : ''
              }`}
              onClick={() => scrollToSection(section.id)}
            >
              {section.title}
            </Button>
          </li>
        ))}
      </ul>
    </nav>
  )

  return (
    <div className="min-h-screen bg-background">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-14 items-center justify-center">
        <Image src="/logo.png" alt="Alle-AI Logo" width={120} height={120} />
        </div>
      </header>
      <div className="container mx-auto px-4 md:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:space-x-12 lg:space-x-16 xl:space-x-20">
          <aside className="hidden md:block md:w-64 lg:w-72 xl:w-80 shrink-0">
            <div className="sticky top-20">
              <ScrollArea className="h-[calc(50svh-1rem)] py-6">
                <TableOfContents />
              </ScrollArea>
            </div>
          </aside>
          <main className="flex-1 py-6 md:py-8 lg:py-10">
            <div className="mx-auto max-w-3xl">
              <h1 className="text-4xl font-bold mb-6">Privacy Policy</h1>
              <p className="text-muted-foreground mb-6">Last Updated: October 12, 2023</p>
              <p className="mb-8">
                This Privacy Policy (&quot;Policy&quot;) outlines how we collect, use, and protect your personal information. 
                Please read this Policy carefully to understand how your data will be handled when you use Alle-AI. 
                By accessing or using our platform, you agree to the terms of this Policy.
              </p>

              <section id="information-we-collect" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">1. Information We Collect</h2>
                <h3 className="text-xl font-medium mb-2">1.1 User Account Information</h3>
                <p className="mb-4">When you create an account on Alle-AI, we may collect the following information:</p>
                <ul className="list-disc list-inside mb-4 ml-4">
                  <li>Your name</li>
                  <li>Email address</li>
                  <li>Password</li>
                  <li>Profile information (optional)</li>
                  <li>Any other information you provide voluntarily</li>
                </ul>
                <h3 className="text-xl font-medium mb-2">1.2 Usage Information</h3>
                <p className="mb-4">We collect information about how you use Alle-AI, including:</p>
                <ul className="list-disc list-inside mb-4 ml-4">
                  <li>Interactions with the platform</li>
                  <li>Content you create and/or interact with</li>
                  <li>Device and browser information</li>
                  <li>Log data</li>
                  <li>Cookies and similar technologies (see &quot;Cookies and Tracking Technologies&quot; section below)</li>
                </ul>
                <h3 className="text-xl font-medium mb-2">1.3 Third-Party Models and Services</h3>
                <p>
                  Alle-AI integrates various third-party AI models, and while we do not collect data directly from these models, 
                  it&apos;s important to review the privacy policies of the providers of these AI models, as they may collect data 
                  when used through our platform.
                </p>
              </section>

              <section id="how-we-use-your-information" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">2. How We Use Your Information</h2>
                <p className="mb-4">We use your information to:</p>
                <ul className="list-disc list-inside mb-4 ml-4">
                  <li>Provide and maintain Alle-AI services</li>
                  <li>Improve and personalize your user experience</li>
                  <li>Respond to your requests and provide customer support</li>
                  <li>Comply with legal and regulatory requirements</li>
                </ul>
              </section>

              <section id="cookies-and-tracking" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">3. Cookies and Tracking Technologies</h2>
                <p>
                  We may use cookies and similar tracking technologies to enhance your experience on Alle-AI. 
                  You can manage your preferences related to these technologies through your browser settings.
                </p>
              </section>

              <section id="sharing-your-information" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">4. Sharing Your Information</h2>
                <p className="mb-4">
                  We do not sell or share your personal information with third parties for their own marketing purposes. 
                  We may share your information with:
                </p>
                <ul className="list-disc list-inside mb-4 ml-4">
                  <li>Third-party service providers who assist in the operation of Alle-AI</li>
                  <li>Legal authorities when required by law</li>
                </ul>
              </section>

              <section id="user-access-and-control" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">5. User Access and Control</h2>
                <p>
                  You have the right to access, correct, or delete your personal information on Alle-AI. 
                  You can do this by accessing your account settings or contacting us at contact@alle-ai.com. 
                  Please note that certain data may be retained for legal or legitimate business purposes.
                </p>
              </section>

              <section id="security" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">6. Security</h2>
                <p>
                  We employ reasonable and appropriate security measures to protect your information from 
                  unauthorized access, disclosure, alteration, or destruction.
                </p>
              </section>

              <section id="changes-to-policy" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">7. Changes to this Privacy Policy</h2>
                <p>
                  Alle-AI reserves the right to update this Privacy Policy as necessary to reflect changes in our services 
                  or legal requirements. We will notify you of any material changes by posting a revised version on our platform.
                </p>
              </section>

              <section id="contact-information" className="mb-10">
                <h2 className="text-2xl font-semibold mb-4">8. Contact Information</h2>
                <p className="mb-4">
                  If you have any questions or concerns about this Privacy Policy or your data on Alle-AI, 
                  please contact us at <Link href="mailto:contact@alle-ai.com" className="text-primary hover:underline">contact@alle-ai.com</Link>.
                </p>
              </section>

              <p className="mt-8 text-muted-foreground">
                By using Alle-AI, you signify your agreement to this Privacy Policy. 
                Thank you for choosing Alle-AI for your creative endeavors with Generative AI models.
              </p>
            </div>
          </main>
        </div>
      </div>
    </div>
  )
}