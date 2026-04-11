import Link from "next/link";
import { PHONE, PHONE_HREF } from "@/lib/constants";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#1A1A1A] flex items-center justify-center px-4">
      <div className="text-center max-w-lg">
        <p className="text-[#F5C400] font-black text-7xl sm:text-9xl mb-4">
          404
        </p>
        <h1 className="text-2xl sm:text-3xl font-black text-white mb-4">
          Page Not Found
        </h1>
        <p className="text-gray-400 mb-8 text-lg">
          Sorry, the page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="bg-[#F5C400] hover:bg-[#d4a900] text-[#1A1A1A] font-black py-3 px-8 rounded-xl transition-all shadow-lg hover:shadow-xl"
          >
            Go Home
          </Link>
          <Link
            href="/quote"
            className="border-2 border-white text-white hover:bg-white hover:text-[#1A1A1A] font-bold py-3 px-8 rounded-xl transition-all"
          >
            Get a Free Quote
          </Link>
        </div>

        <p className="text-gray-500 mt-8 text-sm">
          Need help? Call us on{" "}
          <a
            href={PHONE_HREF}
            className="text-[#F5C400] hover:underline font-semibold"
          >
            {PHONE}
          </a>
        </p>
      </div>
    </main>
  );
}
