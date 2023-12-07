import Image from "next/image";
import Link from "next/link";
import localFont from "next/font/local";

import { cn } from "@/lib/utils";

const headingFont = localFont({
    src: "../public/fonts/font.woff2",
});

export const Logo = () => {
    return (
      <Link href="/">
        <div className="hover:opacity-100 transition items-center gap-x-2 hidden md:flex rounded-xl">
          <Image 
            src="/logo.svg"
            alt="Logo"
            height={40}
            width={40}
          />
          <p className={cn(
              "text-lg text-black pt-1",
               headingFont.className,
          )}>
            ProTasker
          </p>
        </div>
      </Link>
    );
}