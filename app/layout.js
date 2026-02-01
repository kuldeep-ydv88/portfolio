import { Outfit, Ovo } from "next/font/google"
import "./globals.css"

const outfit = Outfit({
    subsets: ["latin"],
    weight: ["400", "500", "600"],
    variable: "--font-outfit",
})

const ovo = Ovo({
    subsets: ["latin"],
    weight: ["400"],
    variable: "--font-ovo",
})

export const metadata = {
    title: "Kuldeep Yadav | Full Stack Java Developer",
    description:
        "Kuldeep Yadav is a Full Stack Java Developer specializing in Java, Spring Boot, Angular, and scalable web applications. Experienced in building healthcare, real estate, and e-commerce platforms.",
}

export default function RootLayout({ children }) {
    return (
        <html
            lang="en"
            className={`${outfit.variable} ${ovo.variable}`}
        >
            <body className="font-Outfit leading-8 dark:bg-darkTheme dark:text-white">
                {children}
            </body>
        </html>
    )
}
