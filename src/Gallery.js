import React, { useState } from 'react'
import './gallery.css'
import CloseIcon from '@mui/icons-material/Close';
import img1 from '../src/images/image-1.jpg'
import img2 from '../src/images/images-2.jpg'
import img3 from '../src/images/images-3.jpg'


const Gallery = () => {

  let data = [
    {
      id: 1,
      imgSrc: img1,
    },
    {
      id: 2,
      imgSrc: img2,
    },
    {
      id: 3,
      imgSrc: img3,
    },
    {
      id: 4,
      imgSrc: "https://tse1.mm.bing.net/th?id=OIP.TYJqmFIrO3WDbgmf8QsAowHaE8&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      imgSrc: "https://tse4.mm.bing.net/th?id=OIP.G7rd8_rAWJt6FBrwPZ8OswAAAA&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      imgSrc: "https://tse3.mm.bing.net/th?id=OIP.cKTq4enAGO_Wg_Omp0ysngAAAA&pid=Api&P=0&h=180"
    },
    {
      id: 4,
      imgSrc: "https://wallpapertag.com/wallpaper/full/9/3/d/158311-cool-winter-background-images-1920x1200.jpg"
    },
    {
      id: 4,
      imgSrc: "https://r1.ilikewallpaper.net/ipad-air-wallpapers/download/18425/Winter-Season-Snow-Trees-Lens-Flare-ipad-air-wallpaper-ilikewallpaper_com_1024.jpg"
    },
    {
      id: 4,
      imgSrc: "https://www.hdwallpapers.in/download/santa_claus_on_sled_in_starry_sky_background_hd_santa_claus-HD.jpg"
    },
    {
      id: 5,
      imgSrc: "https://i.ytimg.com/vi/AW07GZ5UzJc/maxresdefault.jpg"
    },
    {
      id: 5,
      imgSrc: "https://images.pexels.com/photos/34140/pexels-photo.jpg?cs=srgb&dl=blogging-business-coding-34140.jpg&fm=jpg"
    },
    {
      id: 5,
      imgSrc: "https://www.wallpapertip.com/wmimgs/83-838362_web-developer.jpg"
    },
    {
      id: 5,
      imgSrc: "http://2.bp.blogspot.com/-KOECDaNSpn8/TtMNUwEDyVI/AAAAAAAAFbg/yo8GgFhP0yM/s1600/DSC_2725.JPG"
    },
    {
      id: 5,
      imgSrc: "http://wallpapercave.com/wp/GpUHmC4.jpg "
    },
    {
      id: 5,
      imgSrc: "https://www.longisland.com/site_media/images/article/subarticle_image/christmas_tree.jpg"
    },
    {
      id: 5,
      imgSrc: "https://tm.ibxk.com.br/2023/12/07/07163603147309.jpg"
    },
  ]


  const [model, setModel] = useState(false);
    const [tembImage, setTembImage] = useState('');

    const getImg = (imgSrc) => {
        console.log('Image clicked:', imgSrc);
        setTembImage(imgSrc);
        setModel(true);
    };

  return (
    <>

       <div className={model ? 'model open' : 'model'}>
                <img src={tembImage} alt="" />
                <CloseIcon onClick={()=>{setModel(false)}} />
            </div>


      <div className="gallery">
        {
          data.map((item, index) => {
            return (
              <div className="pics" key={index} onClick={() => getImg(item.imgSrc)}>
                <img src={item.imgSrc} alt="" style={{ width: '100%' }} />
              </div>
            )
          })
        }
      </div>
    </>
  )

}

export default Gallery