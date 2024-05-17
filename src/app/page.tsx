import { imagePaths } from "@/constants/images";
import Image from "next/image";
export default function Home() {
  return (
    <div className="flex flex-row w-full">
      <div className="">
        <div className="bg-white p-2 rounded-md w-full">
          <img src={imagePaths.CHART} className="object-fit h-48 w-full -p-2"/>
        </div>
        <div className="">
          <div className="bg-white p-2 rounded-md w-full">
            <div className='flex justify-between w-full'>
              <div className="flex flex-col">
                <span className='text-black text-[10px] font-medium'>ETC Price</span>
                <p className='text-[#58FF49] font-medium text-xs'>$14.21</p>
              </div>
              <div className='flex flex-col'>
                <span className='text-black text-[10px] font-medium'>Market Cap</span>
                <a className='text-[#FF0099] font-medium text-xs' href="https://github.com/">$1,929,337,681</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-black text-[10px] font-medium'>Gas tracker</span>
                <a className='text-[#8A8D9B] font-medium text-xs' href="https://github.com/">1.0</a>
              </div>
              <div className='flex flex-col'>
                <span className='text-black text-[10px] font-medium'>Daily Transactions</span>
                <a className='text-[#F2E041] font-medium text-xs' href="https://github.com/">0</a>
              </div>
            </div>
          </div>
        </div>

        <div>

        </div>

      </div>

      <div>
        <h1>123</h1>
      </div>
    </div>
  );
}
