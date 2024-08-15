import React from 'react'
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "National Engineering Alliance - NEA",
  description: "Manifesto - Our Mission & Vision",
};


const Manifesto = () => {
  return (
    <main>
      <Breadcrumb pageName='Manifesto - Our Mission & Vision' />

      <div className='container pt-5'>
          <span className='mt-10 bg-[#C50219] mb-5 text-3xl font-bold pl-5 pr-5 rounded-md text-white pt-2 pb-2 dark:text-white sm:text-[40px]'>
            Engineering Regulations
          </span>
          <br/>
          <br/>

            <ul className='mb-5 text-base leading-relaxed text-[#131313]'>
              <li>Pakistani Projects; Pakistani Engineers.</li>
              <li>Advocating Law Setting Minimum 17th-BPS Salary for Fresh Engineers.</li>
              <li>Seeking Government Interest to Encourage Foreign Investment in Engineering Sector.</li>
              <li>Implementing PEC Laws to Employee Local Contractors and Consultants in FDI Projects.</li>
              <li>Facilitating and Enabling Pakistani Contractors in International Markets.</li>
              <li>Ensure Young Engineers Representation in PEC Governing Body.</li>
              <li>Technical Allowance on Running Pay Scale.</li>
              <li>Rotation of Chairman/Sr.Vice Chairman in All Four Provinces.</li>
            </ul>

            <span className='mb-5 bg-[#C50219] pl-5 pr-5 pt-2 pb-2 rounded-md  text-3xl font-bold leading-tight text-white dark:text-white sm:text-[40px] sm:leading-[1.2]'>
              Engineering Education
            </span>
            <br/>
          <br/>
            <ul className='mb-10 text-base leading-relaxed text-[#131313]'>
              <li>Scholarships, Research Fund, Startups Grants;  New Agenda for Engineering Education.</li>
              <li>Providing a Mutual Consultative Platform for Engineers in Academia and Industry.</li>
              <li>Accessible and Transparent Accreditation Process.</li>
              <li>Facilitate Internship and Training as Indispensable Part of Engineering Education.</li>
            </ul>

            <span className='mb-5 bg-[#C50219] pl-5 pr-5 pt-2 pb-2 rounded-md text-3xl font-bold leading-tight text-white dark:text-white sm:text-[40px] sm:leading-[1.2]'>
              Engineering Career
            </span>
            <br/>
          <br/>
            <ul className='mb-10 text-base leading-relaxed text-[#131313]'>
              <li>Annual Survey for Local and Overseas Engineering Job Market.</li>
              <li>Health Insurance and Retirement Plan for Engineers in Private Sector.</li>
              <li>Approval of Engineer Service Structure and Time Scale Promotion.</li>
              <li>Engineering Institution; Engineer Head as Per PEC Act.</li>
              <li>Opportunities of Overseas Employment and Export of Engineer Services.</li>
              <li>Tap Engineering Services Export Opportunities of Employment and Job Contracts Overseas.</li>
              <li>Engineering's Club Offering Quality Accommodation and Allied Facilities.</li>
            </ul>
      </div>
    </main>
  )
}

export default Manifesto