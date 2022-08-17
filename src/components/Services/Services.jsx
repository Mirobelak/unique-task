import React, { useEffect, useState} from 'react';
import axios from 'axios';
import "./Services.css"
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Program = () => {
 
  const [posts, setPosts] = useState([])

  useEffect(() => {
      fetchData()
  },[] )

    const fetchData = async () => { const {data} = await axios.get('https://mocki.io/v1/08021574-f46d-4231-bca1-ffd6a3315b7c')
    setPosts(data)
      }

  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  return (
<>
    { Object.values(posts).map((post, i) => {
      return (
        <section className="skill" id="services">
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="skill-bx wow zoomIn">
                        <h2>Services</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.<br></br> Vitae deserunt facere architecto itaque</p>
                        <Carousel responsive={responsive} infinite={true} autoPlay={true}
  autoPlaySpeed={2000} className="skill-slider">
                         
                            <div key={i} className="item">
                                <img id="#img" src={post[1].image}alt="mage" />
                                <h2>{post[1].title}</h2>
                                <p>{post[1].content}</p>
                                <button className=' btn1 btn' href="#">More <img class="arrow arrow1" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img></button>
                             </div>
                            <div key={i} className="item">
                                <img id="#img"src={post[2].image} alt="Image" />
                                <h2>{post[2].title}</h2>
                                <p>{post[2].content}</p>
                                <button className=' btn1 btn' href="#">More <img class="arrow arrow1" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img></button>
                             </div>
                            <div key={i} className="item">
                                <img id="#img" src={post[0].image} alt="Image" />
                                <h2>{post[0].title}</h2>
                                <p>{post[0].content}</p>
                                <button className=' btn1 btn' href="#">More <img class="arrow arrow1" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img></button>
                             </div>
                            <div className="item">
                                <img id="#img" src={post[3].image}alt="Image" />
                                <h2>{post[3].title}</h2>
                                <p>{post[3].content}</p>
                                <button className=' btn1 btn' href="#">More <img class="arrow arrow1" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img></button>
                             </div>
                            <div  key={i} className="item">
                                <img id="#img" src={post[4].image}alt="Image" />
                                <h2>{post[4].title}</h2>
                                <p>{post[4].content}</p>
                                <button className=' btn1 btn' href="#">More <img class="arrow arrow1" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img></button>
                             </div>
                            <div key={i} className="item">
                                <img id="#img" src={post[5].image}alt="Image" />
                                <h2>{post[5].title}</h2>
                                <p>{post[5].content}</p>
                                <button className=' btn1 btn' href="#">More <img class="arrow arrow1" src="https://cdn.animaapp.com/projects/62fa4955b11cd084da5d767b/releases/62fa497667652f8983ee8d01/img/download@1x.png"></img></button>
                             </div>
                        </Carousel>
                    </div>
                </div>
            </div>
        </div>
    </section>)})}
    </>)}
    
    



      


export default Program