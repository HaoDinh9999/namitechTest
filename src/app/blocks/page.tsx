import React from 'react';

interface BlockProps {
    title: string;
    content: string;
    imageUrl: string;
    author: string;
}

const Block: React.FC<BlockProps> = (props) => {
    const { title, content, imageUrl, author } = props;

    return (
        <div className="flex flex-row bg-white">
            <div className='basis-[35%] flex justify-around'>
                <div>
                    <span className='text-[#4B92DB] text-[10px]'>Block Height</span>
                    <p className='text-[#282E47] font-bold text-xs'>#1559059</p>
                </div>
                <div className='flex items-center'>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Miner: </span>
                    <a className='text-[#4B92DB] text-xs' href="https://github.com/">aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa</a>
                </div>
            </div>
            <div className='basis-[50%]  flex justify-around '>

                <div>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Transactions</span>
                    <p className='text-[#282E47] font-bold text-xs'>7</p>
                </div>
                <div className='gap-0.5'>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Size</span>
                    <p className='text-[#282E47] font-bold text-xs'>123 bytes</p>
                </div>
                <div className='gap-0.5'>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Timestamp</span>
                    <p className='text-[#282E47] font-bold text-xs'>34 minutes ago</p>
                </div>
                <div className='gap-0.5'>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Reward</span>
                    <p className='text-[#282E47] font-bold text-xs'>2.5434544 ETC</p>
                </div>
            </div>
            <div className='basis-[25%] flex justify-around'>

                <div>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Gas limit</span>
                    <p className='text-[#282E47] font-bold text-xs'>8,000,000</p>
                </div>
                <div>
                    <span className='text-[#8A8D9B] text-[10px] font-medium'>Gas Used</span>
                    <p className='text-[#282E47] font-bold text-xs'>906,603</p>
                </div>
            </div>
        </div>
    );
};

export default Block;