import Breadcrumb from '@/components/Common/Breadcrumb'
import React from 'react'
import Image from "next/image";
import { Metadata } from "next";



export const metadata: Metadata = {
  title:
    "National Engineering Alliance - NEA",
  description: "Election Voting Guidelines",
};

const Guidelines = () => {
  return (
    <>
    <Breadcrumb pageName='Election Guidelines' />
    
    <div className="container flex justify-center items-center mb-10">
        <Image className='rounded-lg'
          src="/images/extrastuff/guidelines.jpeg"
          alt="voting guidelines"
          width={1200}
          height={1200}
          />
      </div>
    </>
  )
}

export default Guidelines