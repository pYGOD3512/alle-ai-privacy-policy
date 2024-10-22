import Link from 'next/link'

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <h1 className="text-4xl font-bold mb-8">Welcome to Alle-AI</h1>
      <div className="flex gap-4">
        <Link href="/privacy-policy" className="text-blue-500 hover:underline">
          Privacy Policy
        </Link>
        <Link href="/terms-of-service" className="text-blue-500 hover:underline">
          Terms of Service
        </Link>
      </div>
    </main>
  )
}