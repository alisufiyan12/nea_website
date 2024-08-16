import * as React from 'react';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";
import Image from 'next/image';


export const metadata: Metadata = {
  title:
    "National Engineering Alliance - NEA",
  description: "Events Attended By NEA TEAM",
};

const Blog = () => {

  return (
      <>
        <Breadcrumb pageName='Events Attended' />
        <div className='container'>
          <div className='flex items-center justify-center flex-wrap lg:space-x-5 lg:p-10 p-2'>
          <iframe src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F515332424201616%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/video.php?height=315&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F1672990310186128%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F533522932432090%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F455725570773805%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F838183971614861%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F8517566194928285%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          <iframe src="https://www.facebook.com/plugins/video.php?height=314&href=https%3A%2F%2Fweb.facebook.com%2Fneaofficials%2Fvideos%2F1013632430456737%2F&show_text=true&width=560&t=0" width="560" height="429" className="overflow-hidden my-5 shadow-2 rounded-lg" allow="autoplay; clipboard-write; encrypted-media; picture-in-picture; web-share"></iframe>
          </div>
        </div>
      </>
  );
};

export default Blog;
