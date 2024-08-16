import React from 'react'
import SectionTitle from '../Common/SectionTitle'

const Uzairmsg = () => {
  return (
    <section className='overflow-hidden pb-12 pt-20 lg:pt-[120px] lg:pb-[90px]'>
      <div className='container flex items-center justify-center flex-col'>

      <div className="mb-[60px]">
          <SectionTitle
            subtitle="Engineering Pioneer & Future Leader"
            title="Engr. Muhammad Uzair Khan"
            paragraph="Candidate for Vice-Chairman Khyber Pakhtunkhwa & Gilgit Baltistan"
            width="640px"
            center
          />
        </div>

            <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F1034867631626407%2F&show_text=false&width=560&t=0" 
            width="960" 
            height="540px" 
            className="overflow-hidden border-2 rounded-lg shadow-2 lg:max-w-[1845px] max-w-[360px] max-h-[205px] lg:max-h-[540px]"  
            allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"/>
     
      </div>
    </section>
  )
}

export default Uzairmsg