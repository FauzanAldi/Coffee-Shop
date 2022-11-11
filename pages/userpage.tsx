import Image from "next/image"
import axios from "axios";
import useSWR from "swr";
import { apiLink, apiUrl } from "../config/config";
import photoProfile from "../public/photo-profil.webp"
import esKopia from "../public/eskopia.jpeg"
import Link from "next/link";
import { fetcher } from "../helper/network";

const MenuItem: React.FC<{ item: any }> = ({ item }) => {
    return (
        <div className="w-[48%] mb-8">
            <div className="w-full h-[150px] relative">
                <Image src={item.picture} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
            </div>
            <h3 className="font-bold">{item.name}</h3>
            <h3 className="font-light">Rp {item.price}</h3>
            <button className="py-2 bg-gradient-to-b from-cyan-500 to-blue-500 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
        </div>
    )
}

export default function userPage() {

    const { data, error } = useSWR(
        apiLink + '/menu/',
        // http://localhost:3000/api/menu
        fetcher
    );

    const mapItem = (item: any) => {
        return <MenuItem item={item} />
    }

    return (
        <>
            <div className="w-full bg-amber-800 h-[180px] flex flex-col justify-center items-center">
                <div className="w-[80px] h-[80px] bg-slate-300 rounded-full relative">
                    <Image src={photoProfile} alt={""} layout="fill" objectFit="cover" className="rounded-full" />
                </div>
                <h3 className="text-white font-bold mt-3">Username</h3>
                <div className="flex flex-row flex-wrap ">
                    <h5 className="text-sm text-white">[Kelas]</h5>
                    <h5 className="text-sm text-white">[Jurusan]</h5>
                </div>
            </div>
            <div className="w-full h-auto bg-white p-5 -mt-4 rounded-tl-xl rounded-tr-xl">
                <h3 className="font-bold text-md mb-10">Minuman</h3>
                <div className="flex flex-row flex-wrap justify-between">
                    {data && data.map(mapItem)}
                    {/* <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-gradient-to-b from-cyan-500 to-blue-500 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div> */}
                    {/* <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div>
                    <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div>
                    <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div>
                    <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div>
                    <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div>
                    <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div>
                    <div className="w-[48%] mb-8">
                        <div className="w-full h-[150px] relative">
                            <Image src={esKopia} alt={""} layout="fill" objectFit="cover" className="rounded-xl" />
                        </div>
                        <h3 className="font-bold">Es Kopi Gula Aren</h3>
                        <h3 className="font-light">Rp 15.000</h3>
                        <button className="py-2 bg-amber-800 text-white w-full rounded-full text-xs font-bold mt-5">Tambah</button>
                    </div> */}

                </div>
            </div>
        </>
    )
}