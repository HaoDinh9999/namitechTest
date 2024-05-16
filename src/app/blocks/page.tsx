"use client"; // This is a client component 👈🏽

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { imagePaths } from '@/constants/images';
import axios from 'axios';

interface BlockProps {
    title: string;
    content: string;
    imageUrl: string;
    author: string;
}

interface Block {
    height: number;
    miner: string;
    transactions: number;
    size: number;
    timestamp: string;
    reward: number;
    gasLimit: number;
    gasUsed: number;
}

const blocks2: Block[] = [
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 2,
        miner: "Miner 2",
        transactions: 15,
        size: 150,
        timestamp: "2024-05-16 11:00:00",
        reward: 0.8,
        gasLimit: 15000,
        gasUsed: 6000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    }, {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    }, {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    }, {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    }, {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    }, {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    }, {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    {
        height: 1,
        miner: "Miner 1",
        transactions: 10,
        size: 100,
        timestamp: "2024-05-16 10:00:00",
        reward: 0.5,
        gasLimit: 10000,
        gasUsed: 5000,
    },
    // Thêm các đối tượng khác vào đây
];

const Block = () => {
    const [blocks, setBlocks] = useState<Block[]>([]);

    useEffect(() => {
        fetchBlocks();
    }, []);

    const fetchBlocks = async () => {
        try {
            const response = await axios.get('http://localhost:8080/api/blocks');
            console.log("response: ",response);
           // setBlocks(response.data);
        } catch (error) {
            console.error('Failed to fetch blocks:', error);
        }
    };

    return (
        <div className='rounded h-[97vh] flex flex-col justify-between'>
            <div>
                <div className='flex justify-between items-center'>
                    <h2 className='font-bold text-xs text-black py-4'> BLOCKS </h2>
                    <div className='flex justify-center items-center'>
                        <div className='rotate-90'>
                            <img src='chevron-down.png' alt="Image" width="16" height="16" />
                        </div>
                        <span className='text-black text-[10px] font-medium'>Page 1</span>
                        <div className='-rotate-90'>
                            <img src='chevron-down.png' alt="Image" width="16" height="16" />
                        </div>

                    </div>
                </div>
                <div className='max-h-[85vh] overflow-auto'>
                    {blocks.map((block: Block, index: number) => {
                        return (
                            <div className="flex flex-row bg-white p-2 border-b-[0.3px] border-[#151c374d]">
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
                    })}



                </div>
            </div>

            <div className='flex justify-between items-center py-2'>
                <span className='text-[#8A8D9B] text-[12px] font-medium'>All rights reserved. © GBlock 2022.</span>
                <div>
                    <span className='text-[#8A8D9B] text-[12px] font-medium'>Home</span>
                    *
                    <span className='text-[#8A8D9B] text-[12px] font-medium'>Terms of use</span>
                    *
                    <span className='text-[#8A8D9B] text-[12px] font-medium'>Proivacy policy</span>
                </div>
                <div className='flex items-center justify space-x-2'>
                    <Image src={imagePaths.YOUTUBE_GREY} alt='youtube' width={16} height={16} />
                    <Image src={imagePaths.RECORD_GREY} alt='youtube' width={16} height={16} />
                    <Image src={imagePaths.TELEGRRAM_GREY} alt='youtube' width={16} height={16} />
                    <Image src={imagePaths.TWITTER_GREY} alt='youtube' width={16} height={16} />
                    <Image src={imagePaths.FB_GREY} alt='youtube' width={16} height={16} />

                </div>
            </div>
        </div>
    );
};

export default Block;