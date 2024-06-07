import React from 'react';
import './assets/css/style.css';
import './assets/css/responsive.css';
import {Link} from 'react-router-dom';


export default function MainContent() {
  return (
    <div className="main-layout">
   <section className="banner_main">
      <div className="container-fluid">
         <div className="row d_flex ">
            <div className="col-xl-4 col-lg-4 col-md-12">
               <div className="banner_main_text">
                  <img className="logo" src="images/Green Land.png" alt="#" 
                  style={{width:'300px',height:'300px'}}/>
                  <div className="titlepage">
                     <h2>Empowering Agriculture with Technology</h2>
                     <p>Explore the forefront of agriculture with our platform, where technology meets tradition.
                        Discover innovative solutions and sustainable practices shaping the future of farming.</p>
                  </div>
               </div>
            </div>
            <div className="col-xl-8 col-lg-8 col-md-12 padding_right">
               <div className="banner_main_img">
                  <figure><img src="images/our_img1.jpg" alt="#" />
                  </figure>

               </div>
            </div>
         </div>
      </div>
   </section>
   <div id="about" className="about">
      <div className="container-fluid">
         <div className="row d_flex">
            <div className="col-xl-7 col-lg-7 col-md-12 padding_lert">
               <div className="about_img">
                  <figure><img src="images/agriculture.jpg" alt="#" /></figure>
               </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
               <div className="about_text">
                  <div className="titlepage">
                     <h2>Importance of Agriculture in Economy</h2>
                     <p>Modern farmers face a myriad of challenges: volatile weather patterns, dwindling resources,
                        market uncertainties, and the imperative to adopt sustainable practices. These factors impact
                        crop yield, profitability, and environmental health</p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="our" className="our">
      <div className="container-fluid">
         <div className="row d_flex">
            <div className="col-xl-5 col-lg-5 col-md-12 order_2">
               <div className="our_text">
                  <div className="titlepage">
                     <h2>Our Mission</h2>
                     <p>At GreenLand, we're dedicated to empowering farmers with innovative solutions and data-driven
                        insights to tackle modern agricultural challenges. By promoting sustainable practices and
                        resilience, we aim to secure food production, enhance economic stability, and preserve our
                        environment for future generations.</p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 padding_right order_1">
               <div className="our_img">
                  <figure><img src="images/our_img.jpg" alt="#" /></figure>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div id="about" className="about">
      <div className="container-fluid">
         <div className="row d_flex">
            <div className="col-xl-7 col-lg-7 col-md-12 padding_lert">
               <div className="about_img">
                  <figure><img src="images/about_img.jpg" alt="#" /></figure>
               </div>
            </div>
            <div className="col-xl-5 col-lg-5 col-md-12">
               <div className="about_text">
                  <div className="titlepage">
                     <h2>Farmer's Issue</h2>
                     <p>Modern farmers face a myriad of challenges: volatile weather patterns, dwindling resources,
                        market uncertainties, and the imperative to adopt sustainable practices. These factors impact
                        crop yield, profitability, and environmental health, emphasizing the urgent need for innovative
                        solutions and data-driven insights to secure food production, economic stability, and
                        environmental conservation for the future.</p>
                     <a className="read_more" href="#">Read More</a>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </div>
   <div className="testimonial">
      <div className="container-fluid ">
         <div className="row d_flex ">
            <div className="col-xl-5 col-lg-5 col-md-12 order_2">
               <div className="testimonial_box">
                  <div className="titlepage">
                     <h2>Solution</h2>
                  </div>
                  <p>Agriculture is a cornerstone of the economy, fueling growth, employment, and trade. It generates vital income, stabilizes food prices, and fosters innovation, driving sustainable development and prosperity</p>
               </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-md-12 padding_right order_1">
               <div id="myCarousel" className="carousel slide testimonial_Carousel " data-ride="carousel">
                  <ol className="carousel-indicators">
                     <li data-target="#myCarousel" data-slide-to="0" className="active"></li>
                     <li data-target="#myCarousel" data-slide-to="1"></li>
                     <li data-target="#myCarousel" data-slide-to="2"></li>
                  </ol>
                  <div className="carousel-inner">
                     <div className="carousel-item active">
                        <div className="container">
                           <div className="carousel-caption ">
                              <div className="row">
                                 <div className="col-md-12 ">
                                    <div className="test_box">
                                       <h4>Enhanced Productivity</h4>
                                       <p>Our solutions leverage advanced technologies and data-driven insights to optimize farming practices, resulting in increased crop yields and higher profitability for farmers.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="carousel-caption">
                              <div className="row">
                                 <div className="col-md-12 ">
                                    <div className="test_box">
                                       <h4>Improved Efficiency</h4>
                                       <p>By streamlining processes and providing real-time monitoring and analysis capabilities, our solutions enable farmers to make informed decisions, reduce resource wastage, and maximize operational efficiency.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                     <div className="carousel-item">
                        <div className="container">
                           <div className="carousel-caption">
                              <div className="row">
                                 <div className="col-md-12 ">
                                    <div className="test_box">
                                       <h4>Sustainability</h4>
                                       <p>With a focus on sustainable farming practices, our solutions help farmers minimize environmental impact, conserve natural resources, and promote long-term viability for their agricultural operations.
                                       </p>
                                    </div>
                                 </div>
                              </div>
                           </div>
                        </div>
                     </div>
                  </div>
                  <a className="carousel-control-prev" href="#myCarousel" role="button" data-slide="prev">
                     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                     <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#myCarousel" role="button" data-slide="next">
                     <span className="carousel-control-next-icon" aria-hidden="true"></span>
                     <span className="sr-only">Next</span>
                  </a>
               </div>
            </div>
         </div>
      </div>
   </div>
   <footer>
      <div className="footer">
         <div className="container">
            <div className="row">
               <div className="col-md-12">
                  <div className="cont">
                     <h3>Unlock Your Farm's Potential: Predictive Crop Cultivation Tool</h3>
                     <p>Are you ready to revolutionize your farming practices and unlock the full potential of your harvest? With our cutting-edge predictive crop cultivation tool, you can take your farming to the next level. Click below to access our innovative solution, where you'll discover the optimal crop choices tailored to your unique data, ensuring maximum yield and profitability for your farm.
                     </p>
                  </div>
                  <br/>
                  <Link to="/predict" className="read_more" style={{ color: 'white' }}>Let's Predict</Link>
               </div>
            </div>
         </div>
         <div className="copyright">
            <div className="container">
               <div className="row">
                  <div className="col-md-12">
                     <p>For More Info Contact &nbsp;&nbsp;&nbsp;&nbsp;<b style={{color: "blue"}}>majidkhadim768@gmail.com</b></p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   </footer>
</div>
  )
}
