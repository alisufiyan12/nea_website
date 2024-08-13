import * as React from 'react';
import Box from '@mui/material/Box';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";


export const metadata: Metadata = {
  title:
    "National Engineering Alliace - NEA",
  description: "Events Attended By NEA TEAM",
};

const Blog = () => {

  return (
    <div className='border-2 border-red-400 mt-[100px]'>

    <div className='flex justify-center items-center space-x-10 flex-col md:flex-row'>
            <div className='w-full px-4 lg:w-1/2'>
            <div className='mb-12 ml-0 lg:ml-10 max-w-[540px] lg:mb-0 border-2 border-green-500'>
              <h2 className='mb-5 text-3xl font-bold leading-tight text-dark sm:text-[40px] sm:leading-[1.2]'>This is Some Heading</h2>
              <p className='mb-10 text-base leading-relaxed text-body-color '>this will contain some text</p>
            </div>

            </div>

            <div className='w-full px-4 lg:w-1/2 border-2 border-yellow-700'>
                  <Box sx={{ width: '100%', height: 450, overflowY: 'scroll' }}>
                    <ImageList variant="masonry" cols={3} gap={8}>
                      {itemData.map((item) => (
                        <ImageListItem key={item.img}>
                          <img
                            srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
                            src={`${item.img}?w=248&fit=crop&auto=format`}
                            alt={item.title}
                            loading="lazy"
                            />
                        </ImageListItem>
                      ))}
                    </ImageList>
                  </Box>
              </div>
      </div>
  </div>
  );
};

export default Blog;

const itemData = [
  {
    img: 'https://images.unsplash.com/photo-1549388604-817d15aa0110',
    title: 'Bed',
  },
  {
    img: 'https://images.unsplash.com/photo-1525097487452-6278ff080c31',
    title: 'Books',
  },
  {
    img: 'https://images.unsplash.com/photo-1523413651479-597eb2da0ad6',
    title: 'Sink',
  },
  {
    img: 'https://images.unsplash.com/photo-1563298723-dcfebaa392e3',
    title: 'Kitchen',
  },
  {
    img: 'https://images.unsplash.com/photo-1588436706487-9d55d73a39e3',
    title: 'Blinds',
  },
  {
    img: 'https://images.unsplash.com/photo-1574180045827-681f8a1a9622',
    title: 'Chairs',
  },
  {
    img: 'https://images.unsplash.com/photo-1530731141654-5993c3016c77',
    title: 'Laptop',
  },
  {
    img: 'https://images.unsplash.com/photo-1481277542470-605612bd2d61',
    title: 'Doors',
  },
  {
    img: 'https://images.unsplash.com/photo-1517487881594-2787fef5ebf7',
    title: 'Coffee',
  },
  {
    img: 'https://images.unsplash.com/photo-1516455207990-7a41ce80f7ee',
    title: 'Storage',
  },
  {
    img: 'https://images.unsplash.com/photo-1597262975002-c5c3b14bbd62',
    title: 'Candle',
  },
  {
    img: 'https://images.unsplash.com/photo-1519710164239-da123dc03ef4',
    title: 'Coffee table',
  },
];