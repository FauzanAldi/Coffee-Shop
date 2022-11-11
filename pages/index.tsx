import Image from 'next/image'
import Link from 'next/link'
import loginImage from "../public/login-image.jpeg"


export default function Home() {
  return (
    <>
    <div className="w-full h-[300px] bg-blue-500 relative">
      <Image src={loginImage} alt={""} layout="fill" objectFit="cover"
      />
    </div>
    <div className="w-full h-auto bg-white p-5 -mt-10 z-10 relative rounded-tl-xl rounded-tr-xl">
      <h3 className="font-bold teks-coklat mb-10 text-center">Silahkan Login Terlebih Dahulu</h3>
      <div>
        <label className="text-xs text-slate-600">Nomor Induk Siswa Nasional (NISN)</label>
        <input type="number" placeholder="Masukkan NISN" className="px-5 py-4 bg-slate-100 w-full rounded-full" />
      </div>
      <div className="mt-10">
        <label className="text-xs text-slate-600">Password</label>
        <input type="password" placeholder="Masukkan Password Anda" className="px-5 py-4 bg-slate-100 w-full rounded-full" />
      </div>
      <div className="flex flex-row flex-wrap mt-3">
        <h6 className="text-xs text-slate-600">Belum Punya akun?</h6>
        <Link href="">
          <h6 className="text-xs text-orange-400 ml-2 hover:text-gray-300">Daftar Disini</h6>
        </Link>
      
      </div>
          <Link href="/userpage">
          <button className="w-full bg-amber-800 text-white text-center py-3 rounded-full font-bold mt-8">Login</button>
        </Link>
    </div>
    </>
  )
}
