'use client'
import { useState } from 'react'
import emailjs from '@emailjs/browser'

export default function Contact() {
    const [result, setResult] = useState("")

    const onSubmit = (event) => {
        event.preventDefault()
        setResult("Sending...")

        emailjs.sendForm(
            'Portfolio',            // ✅ Service ID
            'template_2vc44jl',      // ✅ Template ID
            event.target,
            'uBnGnmsJKcO_eZhxH'
        ).then(
            () => {
                setResult("Message sent successfully!")
                event.target.reset()
            },
            (error) => {
                console.error("EmailJS Error:", error)
                setResult("Failed to send message. Please try again.")
            }
        )
    }

    return (
        <div
            id="contact"
            className="w-full px-4 sm:px-8 lg:px-[12%] py-10 scroll-mt-20 bg-[url('/portfolio/assets/footer-bg-color.png')] bg-no-repeat bg-[length:90%_auto] bg-center dark:bg-none"
        >
            <h4 className="text-center mb-2 text-base sm:text-lg font-Ovo">Connect with me</h4>
            <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-Ovo">Get in touch</h2>

            <p className="text-center max-w-2xl mx-auto mt-5 mb-12 font-Ovo text-sm sm:text-base">
                I&apos;d love to hear from you! If you have any questions or feedback,
                please use the form below.
            </p>

            <form onSubmit={onSubmit} className="max-w-2xl mx-auto">
                <div className="grid grid-cols-1 sm:grid-cols-auto gap-4 sm:gap-6 mt-10 mb-8">
                    <input
                        type="text"
                        name="from_name"
                        placeholder="Enter your name"
                        required
                        className="flex-1 px-3 py-2 text-sm sm:text-base focus:ring-1 outline-none border border-gray-300 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30 dark:text-white"
                    />

                    <input
                        type="email"
                        name="from_email"
                        placeholder="Enter your email"
                        required
                        className="flex-1 px-3 py-2 text-sm sm:text-base focus:ring-1 outline-none border border-gray-300 rounded-md bg-white dark:bg-darkHover/30 dark:border-white/30 dark:text-white"
                    />
                </div>

                <textarea
                    rows="6"
                    name="message"
                    placeholder="Enter your message"
                    required
                    className="w-full px-4 py-2 text-sm sm:text-base focus:ring-1 outline-none border border-gray-300 rounded-md bg-white mb-6 dark:bg-darkHover/30 dark:border-white/30 dark:text-white"
                ></textarea>

                <button
                    type="submit"
                    className="py-2 px-6 sm:px-8 w-max flex items-center gap-2 text-sm sm:text-base bg-black/80 text-white rounded-full mx-auto hover:bg-black duration-500"
                >
                    Submit now
                </button>

                <p className="mt-4 text-center text-sm sm:text-base">{result}</p>
            </form>
        </div>
    )
}
