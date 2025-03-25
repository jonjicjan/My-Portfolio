import React from 'react';
import '../App.css'; // Ensure correct path to CSS

const Blog = () => {
  return (
    <>
      <div id="blog" className="dark_bg blog-area section-padding">
        <h2 className="section-title wow flipInX" data-wow-delay="0.4s">
          My <span>Projects</span>
        </h2>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>" First Project"</h4>
                    </a>
                    <span>  <i className="fa fa-clock-o"></i> Dec 10, 2022| Amine World</span>
                    <div className="icon">
                      <img
                        src="https://github.com/jonjicjan/freeanime/blob/main/Anm1.jpg?raw=true"
                        alt="loading.img "
                      />
                    </div>
                    <a href="https://jonjicjan.github.io/freeanime/" className="btn blog_btn btn-secondary">
                      View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>" Second Project"</h4>
                    </a>
                    <span>  <i className="fa fa-clock-o"></i> Jan 09, 2025| Learning Hub </span>
                    <div className="icon">
                      <img
                        src="https://pbs.twimg.com/media/Gd0MWWUWMAAzhc-?format=jpg&name=large"
                        alt=" "
                      />
                    </div>
                    <a href="https://jonjicjan.github.io/LearnHub/" className="btn blog_btn btn-secondary">
                    View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>" Third Project"</h4>
                    </a>
                    <span>  <i className="fa fa-clock-o"></i> Jan 15, 2025| E-Commerce</span>
                    <div className="icon">
                      <img
                        src="https://pagecreative.co.uk/wp-content/uploads/2023/10/AdobeStock_223290240-1-2-scaled.jpeg"
                        alt=" "
                      />
                    </div>
                    <a href="https://trendfashionstore.netlify.app/" className="btn blog_btn btn-secondary">
                    View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row">
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInLeft">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Fourth Project"</h4>
                    </a>
                    <span><i className="fa fa-clock-o"></i> Jan 30, 2025| Weather APP</span>
                    <div className="icon">
                      <img
                        src="https://dashboard.openweather.co.uk/_next/image?url=%2Fimages%2Fnew_landing1.png&w=1920&q=75"
                        alt=" "
                      />
                    </div>
                    <a href="https://freeweathercheckingapp.netlify.app/" className="btn blog_btn btn-secondary">
                    View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInUp">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Fifth Project"</h4>
                    </a>
                    <span><i className="fa fa-clock-o"></i> Mar 10, 2025| A.I Chatbot & Workspace </span>
                    <div className="icon">
                      <img
                        src="https://img.freepik.com/premium-photo/cute-robot-smartphone-screen-ai-futuristic-technology-concept_204719-128305.jpg?w=1380"
                        alt=" "
                      />
                    </div>
                    <a href="https://intellexa.netlify.app/" className="btn blog_btn btn-secondary">
                    View now
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-4 col-xs-12">
              <div className="single_blog wow fadeInRight">
                <div className="blog-thumb">
                  <div className="blog-info">
                    <a href="#">
                      <h4>"Sixth Project"</h4>
                    </a>
                    <span> <i className="fa fa-clock-o"></i> July 20, 2024| My Portfolio</span>
                    <div className="icon">
                      <img
                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0gw5I5PxtuFqjMlyr4O0o-iiW6zFMDnryIA&s"
                        alt=" "
                      />
                    </div>
                    <a href="https://jonjicjan.github.io/My-Portfolio/" className="btn blog_btn btn-secondary">
                      View now
                    </a>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </>
  );
};

export default Blog;
