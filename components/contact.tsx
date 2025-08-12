"use client"

import { useState, useEffect } from "react"
import emailjs from "@emailjs/browser"
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Button } from "@/components/ui/button"
import { Loader2, Send, Mail, Linkedin, MapPin } from "lucide-react"

const serviceId = process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID || ""
const templateId = process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID || ""
const publicKey = process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY || ""

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  })
  const [isLoading, setIsLoading] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle")
  const [errorText, setErrorText] = useState<string>("")

  useEffect(() => {
    if (publicKey) {
      emailjs.init(publicKey)
    }
  }, [])

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setSubmitStatus("idle")
    setErrorText("")

    if (!serviceId || !templateId || !publicKey) {
      setIsLoading(false)
      setSubmitStatus("error")
      setErrorText("Missing EmailJS configuration.")
      return
    }

    try {
      await emailjs.send(serviceId, templateId, formData)
      setSubmitStatus("success")
    } catch (error: unknown) {
      console.error("Email sending failed:", error)
      setSubmitStatus("error")
      if (
        typeof error === "object" &&
        error !== null &&
        "text" in error &&
        typeof (error as { text?: string }).text === "string"
      ) {
        setErrorText((error as { text: string }).text)
      } else {
        setErrorText("Failed to send. Check EmailJS IDs and template variable names.")
      }
    } finally {
      setIsLoading(false)
    }
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-white/30">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="font-serif font-bold text-3xl sm:text-4xl text-[#1a1a1a] mb-4">Get In Touch</h2>
          <div className="w-20 h-1 bg-[#b8956a] mx-auto mb-6"></div>
          <p className="text-[#4b5563] max-w-2xl mx-auto">
            I&apos;m always open to discussing new opportunities, interesting projects, or just having a chat about
            technology.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#1a1a1a] flex items-center">
                  <Mail className="mr-3 h-5 w-5 text-[#b8956a]" />
                  Email
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="mailto:harshthakuelinkedin@gmail.com"
                  className="text-[#4b5563] hover:text-[#b8956a] transition-colors duration-300"
                >
                  harshthakuelinkedin@gmail.com
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#1a1a1a] flex items-center">
                  <Linkedin className="mr-3 h-5 w-5 text-[#b8956a]" />
                  LinkedIn
                </CardTitle>
              </CardHeader>
              <CardContent>
                <a
                  href="https://www.linkedin.com/in/harsh-thakur-21080a32a/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#4b5563] hover:text-[#b8956a] transition-colors duration-300"
                >
                  Connect with me on LinkedIn
                </a>
              </CardContent>
            </Card>

            <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
              <CardHeader>
                <CardTitle className="font-serif text-xl text-[#1a1a1a] flex items-center">
                  <MapPin className="mr-3 h-5 w-5 text-[#b8956a]" />
                  Location
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-[#4b5563]">Chandigarh, India</p>
              </CardContent>
            </Card>
          </div>

          <Card className="bg-white/70 backdrop-blur-sm border-0 shadow-lg">
            <CardHeader>
              <CardTitle className="font-serif text-xl text-[#1a1a1a]">Send me a message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="border-[#e8e1d4] focus:border-[#b8956a] focus:ring-[#b8956a] disabled:opacity-50"
                  />
                </div>

                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    disabled={isLoading}
                    className="border-[#e8e1d4] focus:border-[#b8956a] focus:ring-[#b8956a] disabled:opacity-50"
                  />
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Your Message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={5}
                    disabled={isLoading}
                    className="border-[#e8e1d4] focus:border-[#b8956a] focus:ring-[#b8956a] disabled:opacity-50"
                  />
                </div>

                {submitStatus === "success" && (
                  <div className="p-3 bg-green-100 border border-green-400 text-green-700 rounded-md">
                    Message sent successfully! I&apos;ll get back to you soon.
                  </div>
                )}

                {submitStatus === "error" && (
                  <div className="p-3 bg-red-100 border border-red-400 text-red-700 rounded-md">
                    {errorText || "Failed to send message. Please try again or email me directly."}
                  </div>
                )}

                <Button
                  type="submit"
                  disabled={isLoading}
                  className="w-full bg-[#b8956a] text-white hover:bg-[#c4a882] transition-colors duration-300 disabled:opacity-50"
                >
                  {isLoading ? (
                    <>
                      <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send className="mr-2 h-4 w-4" />
                      Send Message
                    </>
                  )}
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

export default Contact
