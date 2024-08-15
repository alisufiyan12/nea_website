import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from 'next/image';



export const metadata: Metadata = {
  title:
    "National Engineering Alliance - NEA",
  description: "Who can you vote to?",
};

const WhoCanVote = () => {
  return (
    <>
      <Breadcrumb pageName='Who can you vote to?' />
        <div className='container flex items-center justify-center flex-col'>
            <h2 className='mt-5 text-[#C50219] mb-5 text-3xl font-bold pt-2 pb-2 sm:text-[40px]'>Who you can vote?</h2>
            <p className='mb-10 text-base leading-relaxed text-body-color'>Find your program in the list below and 
            carefully read about who can you cast your vote to.</p>
        </div>

        <div className='flex flex-center justify-center lg:space-x-5 lg:p-10 p-2 flex-wrap '>
          <Image
          className='rounded-lg my-5 hover:shadow-2 duration-500'
          src="/images/gbmembers/mem1.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
          <Image
          className='rounded-lg my-5 hover:shadow-2 duration-500'
          src="/images/gbmembers/mem2.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
          <Image
          className='rounded-lg my-5 hover:shadow-2 duration-500'
          src="/images/gbmembers/mem3.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
          <Image
          className='rounded-lg my-5 hover:shadow-2 duration-500'
          src="/images/gbmembers/mem4.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
          <Image
          className='rounded-lg my-5 hover:shadow-2 duration-500'
          src="/images/gbmembers/mem5.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
          <Image
          className='rounded-lg my-5'
          src="/images/gbmembers/mem6.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
          <Image
          className='rounded-lg my-5 hover:shadow-2 duration-500'
          src="/images/gbmembers/mem7.png"
          alt="VC_who_can_vote"
          width={500}
          height={500} />
        </div>
    </>
    )
}

export default WhoCanVote