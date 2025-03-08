import { Carousel, FloatingLabel, Form } from "react-bootstrap";
// @ts-ignore
import slider1 from "./../../assets/1s.jpg";
// @ts-ignore
import slider2 from "./../../assets/2s.jpg";
// @ts-ignore
import logo1 from "./../../assets/1.png";
// @ts-ignore
import logo2 from "./../../assets/2.png";
import { data } from "./data";
import Header from "./Header";
import { Fragment } from "react";
import Footerx from "./Footerx";

function Home() {
  /* Explore Foods*/
  const Data = data.map((item) => {
    return (
      <div className="col-md-4" key={item.title}>
        <div className="box">
          <img src={item.img} alt="img" />
          <h5>{item.title}</h5>
          <span>{item.time}</span>
          <div className="price">
            <h4>{item.priceNow}</h4>
            <h6>{item.price}</h6>
          </div>
          <hr />
          <button>Order Now</button>
        </div>
      </div>
    );
  });
  return (
    <Fragment>
      <Header />

      {/* home-end*/}
      
      <section className="num">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>1287+</h3>
              <h6>Savings</h6>
            </div>
            <div className="col-md-3">
              <h3>5786+</h3>
              <h6>Photos</h6>
            </div>
            <div className="col-md-3">
              <h3>1440+</h3>
              <h6>Rockets</h6>
            </div>
            <div className="col-md-3">
              <h3>7110+</h3>
              <h6>Globes</h6>
            </div>
          </div>
        </div>
        <div id="aboutus"></div>
      </section>

      {/* ABOUT US 1 */}
    
      <section   className="about1">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <img src={logo1} alt="logo" />
            </div>

            <div className="col-md-6">
              <h2>
                We pride ourselves on making real food from the best
                ingredients.
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.
              </p>
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US 2*/}
      <section className="about2">
        <div className="container">
          <div className="row">
            <div className="col-md-6">
              <h2>
                We make everything by hand with the best possible ingredients.
              </h2>
              <p>
                {" "}
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet leo. Mauris feugiat
                erat tellus.Far far away, behind the word mountains, far from
                the countries Vokalia and Consonantia, there live the blind
                texts.
              </p>

              <ul>
                <li>
                  {" "}
                  <span className="material-symbols-outlined">check</span> Etiam
                  sed dolor ac diam volutpat.
                </li>
                <li>
                  {" "}
                  <span className="material-symbols-outlined">check</span> Erat
                  volutpat aliquet imperdiet.
                </li>
                <li>
                  {" "}
                  <span className="material-symbols-outlined">check</span> purus
                  a odio finibus bibendum.
                </li>
              </ul>

              <button>Learn More</button>
            </div>

            <div className="col-md-6">
              <img src={logo2} alt="logo" />
            </div>
          </div>
        </div>
      </section>

      {/* ABOUT US 3*/}
      <section className="about3">
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>
                When a man's stomach is full it makes no <br />
                difference whether he is rich or poor.
              </h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio
                <br />
                finibus bibendum in sit amet leo. Mauris feugiat erat tellus.
              </p>
              <br />
              <br />
              <a href="#">▶ Watch Our Story</a>
            </div>
          </div>
        </div>
      </section>

      {/* Explore */}
      <div id="explore-foods"></div>
      <section className="expl" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Explore Our Foods</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                et purus a odio finibus bibendum in sit amet <br /> leo. Mauris
                feugiat erat tellus. Far far away, behind the word mountains,
                far from the countries Vokalia and <br /> Consonantia, there
                live the blind texts. Separated they live in Bookmarksgrove.
              </p>
            </div>
          </div>

          {/* Explore Foods*/}
          <div className="row">{Data}</div>
        </div>
      </section>

      {/* PREVIEW*/}
      <div id="review"></div>
      <section className="slider" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h2>Testimonials</h2>
            </div>
          </div>

          <div className="row">
            <div className="col-lg-12 col-md-12">
              <Carousel>
                <Carousel.Item>
                  <img src={slider1} />
                  <Carousel.Caption>
                    <p>"Far far away, behind the word mountains</p>
                    <span>Simab Dave - Web Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={slider2} />
                  <Carousel.Caption>
                    <p>"Far far away, behind the word mountains</p>
                    <span>Johnthan Doe - UX Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
                <Carousel.Item>
                  <img src={slider1} />
                  <Carousel.Caption>
                    <p>"Far far away, behind the word mountains</p>
                    <span>Simab Dave - Web Designer</span>
                  </Carousel.Caption>
                </Carousel.Item>
              </Carousel>
            </div>
          </div>
        </div>
        <div id="faq"></div>
      </section>

      {/* FAQ*/}
      <section className="faq" >
        <div className="container">
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <h1>Frequently Asked Questions</h1>
            </div>

            <div className="row">
              <div className=" col-md-6">
                <h5>
                  {" "}
                  <span>
                    {" "}
                    <span> ~</span>
                  </span>{" "}
                  Is Foodera Bread really baked fresh each day?
                </h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
              <div className=" col-md-6">
                <h5>
                  <span> ~</span>Do you bake breads containing animal fats or
                  products?
                </h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>

            <div className="row">
              <div className=" col-md-6">
                <h5>
                  <span> ~</span> Can I order your products online?
                </h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language..
                </p>
              </div>
              <div className=" col-md-6">
                <h5>
                  <span> ~</span> When are you opening a shop near me?
                </h5>
                <p>
                  Far far away, behind the word mountains, far from the
                  countries Vokalia and Consonantia, there live the blind texts.
                  Separated they live in Bookmarksgrove right at the coast of
                  the Semantics, a large language.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 1*/}
      <section className="faq1">
        <div className="container">
          <div className="row">
            <div className=" col-md-8">
              <h2>Baked fresh daily by bakers with passion.</h2>
            </div>
            <div className=" col-md-4">
              <button>Learn More</button>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ 2*/}
      <section className="faq2">
        <div className="container">
          <div className="row">
            <div className=" col-md-12 col-lg-12">
              <h1>
                Hurry up! Subscribe our newsletter <br />
                and get 25% Off
              </h1>
              <p>Limited time offer for this month. No credit card required.</p>

              <div className="row">
                <div className=" col-md-3 "></div>
                <div className=" col-md-4 ">
                  <FloatingLabel
                    controlId="floatingInputGrid"
                    label="Email address here"
                  >
                    <Form.Control type="email" placeholder="name@example.com" />
                  </FloatingLabel>
                </div>

                <div className=" col-md-3 ">
                  {" "}
                  <button>Subscribe</button>{" "}
                </div>
                <div className=" col-md-2 "></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* footer*/}
      <Footerx />
    </Fragment>
  );
}

export default Home;
