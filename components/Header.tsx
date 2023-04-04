import Image from 'next/image'

export const Header = () => {
  return (
    <header className="w-full flex justify-center px-8">
      <div className="w-full bg-gradient-to-r from-red to-orange max-w-[1200px] px-12 py-4 shadow-md rounded-[10px]">
        <Image
          src="/ynot-logo-white.svg"
          height={25}
          width={38}
          alt="YNotのロゴ(白)"
        />
      </div>
    </header>
  )
}
