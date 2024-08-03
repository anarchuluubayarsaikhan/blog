
import Image from "next/image";
import Link from "next/link";

export function Logo() {
  return (
      <Link href="main">
          <Image src="/allpics/Logo.png" width={158} height={36} alt="Logo"/>
      </Link>

  )
}