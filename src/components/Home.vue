<template>
  <main class="home">
    <div class="header">
      <h1>FREE REAL ESTATE</h1>
    </div>
    <carousel :data="data" class="main-carousel" indicators="hover" indicator-type="disc"></carousel>

    <section class="search">
      <h1>Check our listing</h1>
      <fieldset>
        <div>
          <div class="inputs">
            <input type="text" placeholder="Location" />
            <select name="Cities" id="cities">
              <option value="vancouver">Cities</option>
              <option value="vancouver">Vancouver</option>
              <option value="surrey">Surrey</option>
              <option value="coquitlam">Coquitlam</option>
              <option value="burnaby">Burnaby</option>
            </select>
            <select name="rent-sale" id="rent-sale">
              <option value="rent">For Rent</option>
              <option value="sale">For Sale</option>
            </select>
            <select name="type" id="type">
              <option value="type">Type</option>
              <option value="apartment">Apartment</option>
              <option value="condominium">Condominium</option>
              <option value="townhouse">Townhouse</option>
              <option value="duplex">Duplex</option>
              <option value="laneway">Laneway</option>
            </select>
            <select name="bedroom" id="bedroom">
              <option value="bed">Bedrooms</option>
              <option value="bed">1</option>
              <option value="bed">2</option>
              <option value="bed">3</option>
              <option value="bed">4</option>
            </select>
            <select name="bathroom" id="bathroom">
              <option value="bath">Bathrooms</option>
              <option value="bath">1</option>
              <option value="bath">2</option>
              <option value="bath">3</option>
              <option value="bath">4</option>
            </select>
            <select name="min" id="min">
              <option value="min">Min. Price</option>
              <option value="min">100,000</option>
              <option value="min">200,000</option>
              <option value="min">300,000</option>
              <option value="min">400,000</option>
            </select>
            <select name="max" id="max">
              <option value="max">Max. Price</option>
              <option value="max">500,000</option>
              <option value="max">600,000</option>
              <option value="max">700,000</option>
              <option value="max">800,000</option>
            </select>

            <button class="button">Search</button>
          </div>
        </div>
      </fieldset>
    </section>

    <section class="featured">
      <h1>Featured Properties</h1>
      <div class="properties">
        <div class="card">
          <carousel :data="featured" indicators="hover" indicator-type="disc"></carousel>
          <div class="container">
            <h4>
              <b>3533 Meadow Drive, Vancouver BC</b>
            </h4>
            <p>Architect & Engineer</p>
            <p>550 SqFt</p>
            <p>6 Bedrooms | 2 Bathrooms</p>
            <p>
              <button class="feature-button">Details</button>
            </p>
            <br />
          </div>
        </div>
        <div class="card">
          <carousel :data="featured" indicators="hover" indicator-type="disc"></carousel>
          <div class="container">
            <h4>
              <b>3533 Meadow Drive, Vancouver BC</b>
            </h4>
            <p>Architect & Engineer</p>
            <p>550 SqFt</p>
            <p>6 Bedrooms | 2 Bathrooms</p>
            <p>
              <button class="feature-button">Details</button>
            </p>
            <br />
          </div>
        </div>
        <div class="card">
          <carousel :data="featured" indicators="hover" indicator-type="disc"></carousel>
          <div class="container">
            <h4>
              <b>3533 Meadow Drive, Vancouver BC</b>
            </h4>
            <p>Architect & Engineer</p>
            <p>550 SqFt</p>
            <p>6 Bedrooms | 2 Bathrooms</p>
            <p>
              <button class="feature-button">Details</button>
            </p>
            <br />
          </div>
        </div>
      </div>
      <div class="property-btn">
        <button class="property-button">View all properties</button>
      </div>
    </section>

    <section class="services">
      <h1>What we Offer</h1>
      <div class="service-container">
        <div class="types-of-service">
          <h3>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolores, suscipit!</h3>
          <div class="service-description">
            <div>
              <font-awesome-icon class="fa-icon" icon="home" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. At, veniam.</p>
            </div>
            <div>
              <font-awesome-icon class="fa-icon" icon="laptop" />
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus, totam?</p>
            </div>
            <div>
              <font-awesome-icon class="fa-icon" icon="comment-dollar" />
              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deserunt, inventore.</p>
            </div>
            <div>
              <font-awesome-icon class="fa-icon" icon="building" />
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Delectus, praesentium.</p>
            </div>
          </div>
        </div>
        <div class="service">
          <div class="card">
            <carousel :data="featured" indicators="hover" indicator-type="disc"></carousel>
            <div class="container">
              <h4>
                <b>3533 Meadow Drive, Vancouver BC</b>
              </h4>
              <p>Architect & Engineer</p>
              <p>550 SqFt</p>
              <p>6 Bedrooms | 2 Bathrooms</p>
              <p>
                <button class="feature-button">Details</button>
              </p>
              <br />
            </div>
          </div>
        </div>
      </div>
    </section>

    <section class="agents">
      <h1>Our Agents</h1>
      <div class="agent">
        <div class="card">
          <img src="../assets/agent-1.jpg" alt="Avatar" style="width:100%" />
          <div class="container">
            <h4>
              <b>John Doe</b>
            </h4>
            <p>(123)-456-7890</p>
            <p>johndoe@gmail.com</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/agent-2.jpg" alt="Avatar" style="width:100%" />
          <div class="container">
            <h4>
              <b>Eric Nam</b>
            </h4>
            <p>ericnam@gmail.com</p>
            <p>(123)-456-7890</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/agent-3.jpg" alt="Avatar" style="width:100%" />
          <div class="container">
            <h4>
              <b>Arya Stark</b>
            </h4>
            <p>aryastark@gmail.com</p>
            <p>(123)-456-7890</p>
          </div>
        </div>
        <div class="card">
          <img src="../assets/agent-4.jpg" alt="Avatar" style="width:100%" />
          <div class="container">
            <h4>
              <b>John Smith</b>
            </h4>
            <p>johnsmith@gmail.com</p>
            <p>(123)-456-7890</p>
          </div>
        </div>
      </div>
    </section>

    <footer class="footer">
      <section class="content-4">
        <div class="footer-content">
          <div class="left-side">
            <h1>Free Real Estate</h1>
            <p
              class="footer-address"
            >Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatem repellat ut illo, illum odit voluptatum?</p>
          </div>
          <div class="left-side">
            <h1>Contact Us</h1>
            <p>41 Hamilton St. La Porte, IN 46350</p>
            <p>(123) - 456 - 7890</p>
            <p>yourname@gmai.com</p>
          </div>
          <div class="left-side">
            <h1>Links</h1>
            <p>
              <a href>Properties</a>
            </p>
            <p>
              <a href>Agents</a>
            </p>
            <p>
              <a href>Partners</a>
            </p>
          </div>
          <div class="right-side">
            <div class="footer-soc">
              <p>Follow us on our Social medias</p>
              <div class="footer-icons">
                <span>
                  <a href="http://www.facebook.com">
                    <font-awesome-icon
                      class="footer-icon"
                      :icon="{ prefix: 'fab', iconName: 'facebook' }"
                    />
                  </a>
                </span>
                <span>
                  <a href="http://www.twitter.com">
                    <font-awesome-icon
                      class="footer-icon"
                      :icon="{ prefix: 'fab', iconName: 'twitter' }"
                    />
                  </a>
                </span>
                <span>
                  <a href="http://www.instagram.com">
                    <font-awesome-icon
                      class="footer-icon"
                      :icon="{ prefix: 'fab', iconName: 'instagram' }"
                    />
                  </a>
                </span>
              </div>
            </div>
            <div class="footer-newsletter">
              <label for="email">
                <p>Subscribe to our newsletter</p>
              </label>
              <input class="footer-input" id="email" type="email" placeholder="Email" />
              <input class="feature-button" type="submit" />
            </div>
          </div>
        </div>
      </section>
    </footer>
  </main>
</template>

<script>
export default {
  data() {
    return {
      data: [
        '<div class="example-slide-1"> <a href="https://www.google.com"> <h1>3533 Meadow Drive, Vancouver BC</h1></a> </div>',
        '<div class="example-slide-2"><h1>2836 Pride Avenue, Surrey BC</h1></div>',
        '<div class="example-slide-3"><h1>3376 Norman Street, Burnaby BC</h1></div>'
      ],
      featured: [
        '<div class="example-slide"></div>',
        '<div class="example-slide"></div>',
        '<div class="example-slide"></div>'
      ]
    };
  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Proza+Libre");
@media only screen and (max-width: 812px) {
  .home h1 {
    margin-left: 0.7em;
    font-size: 26px;
  }
  .header img {
    display: none;
  }
  .main-carousel {
    padding: 5%;
  }
  .agents {
    padding: 0 !important;
  }
  .example-slide-1 h1,
  .example-slide-2 h1,
  .example-slide-3 h1 {
    font-size: 20px;
    text-align: center;
    margin: 0 auto;
  }
  .inputs input,
  .inputs select {
    height: 5vh;
    width: 25vw !important;
  }
  .button {
    border: 1px solid #333;
    padding: 0.5em 1.5em;
    color: #333;
    border-radius: 3px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 0 auto;
    font-size: 1em;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .properties {
    padding: 5%;
    display: grid;
    grid-template-columns: 1fr !important;
    grid-gap: 10px !important;
  }
  .container h4 {
    text-align: center;
  }
  .container {
    height: 35vh;
  }
  .property-button {
    border: 1px solid #333;
    margin-top: 2em;
    padding: 0.5em 2em;
    color: #333;
    border-radius: 3px;
    width: 53vw !important;
    text-align: center;
    font-size: 1em;
    -webkit-transition: all 0.3s ease-in-out;
    transition: all 0.3s ease-in-out;
  }
  .service-container {
    display: grid;
    grid-template-columns: 1fr !important;
    grid-gap: 0px !important;
    padding: 5%;
  }
  .service-description {
    padding: 5%;
    line-height: 30px;
    display: flex;
    flex-direction: column;
    text-align: center;
  }
  .service-description p {
    text-align: center;
  }
  .service-container h3 {
    /* margin-top: 2em; */
    text-align: center;
  }
  .agent {
    display: grid;
    grid-template-columns: 1fr !important;
    padding: 2%;
    grid-gap: 10px;
  }

  .footer-content {
    display: flex !important;
    flex-direction: column;
    line-height: 15px;
  }
  .footer-icons {
    display: flex;
    justify-content: space-evenly;
    margin-bottom: 0.5em;
  }
  .feature-button,
  .property-button {
    border: 1px solid #333;
    padding: 0.5em 2em;
    color: #333;
    border-radius: 3px;
    text-align: center;
    font-size: 1em;
    transition: all 0.3s ease-in-out;
  }
  .example-slide-1,
  .example-slide-2,
  .example-slide-3 {
    align-items: center;
    text-align: center;
    color: #fff;
    display: flex;
    font-size: 1.5rem;
    justify-content: center;
    min-height: 50vh !important;
  }
  .example-slide {
    background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
      url("../assets/img1.jpg");
    background-size: cover;
    background-repeat: no-repeat;
    align-items: center;
    text-align: center;
    color: #fff;
    display: flex;
    justify-content: center;
    height: 30vh !important;
  }
  .agents h1 {
    line-height: 20px;
    padding: 2%;
    text-transform: uppercase;
    font-size: 30px;
    text-align: center;
    margin-top: 1em;
  }
}

/* END OF MEDIA QUERIES */

body {
  background-color: rgb(244, 244, 244);
  font-family: "Proza Libre", sans-serif;
}
.header {
  display: flex;
  justify-content: space-around;
}
.home {
  margin-top: 2em;
  color: rgb(83, 82, 82);
}
.home h1 {
  margin-bottom: 1em;
}
.example-slide-1,
.example-slide-2,
.example-slide-3 {
  align-items: center;
  text-align: center;
  color: #fff;
  display: flex;
  font-size: 1.5rem;
  justify-content: center;
  min-height: 82vh;
}
.example-slide-1 a,
.example-slide-2 a,
.example-slide-3 a {
  text-decoration: none; 
  color: #fff;
}
.example-slide {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/img1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  align-items: center;
  text-align: center;
  color: #fff;
  display: flex;
  justify-content: center;
  height: 50vh;
}

.example-slide-1 {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/img1.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.example-slide-2 {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/img2.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
.example-slide-3 {
  background: linear-gradient(rgba(0, 0, 0, 0.3), rgba(0, 0, 0, 0.3)),
    url("../assets/img3.jpg");
  background-size: cover;
  background-repeat: no-repeat;
}
fieldset {
  padding: 3%;
  border: 0;
}
.search h1,
.featured h1,
.services h1 {
  line-height: 20px;
  padding: 2%;
  margin: 2em 0 auto;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
}
.agents h1 {
  line-height: 20px;
  padding: 2%;
  text-transform: uppercase;
  font-size: 30px;
  text-align: center;
}
.search,
.services {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgb(233, 233, 233);
  margin-top: 3.5em;
}
.inputs {
  display: grid;
  grid-template: repeat(4, 1fr) / repeat(3, 1fr);
  grid-gap: 20px;
  min-height: 0; /* NEW */
  min-width: 0; /* NEW; needed for Firefox */
}
.inputs input,
.inputs select {
  height: 5vh;
  width: 20vw;
}
.button {
  border: 1px solid #333;
  color: #333;
  border-radius: 3px;
  width: 90px;

  font-size: 1em;
  transition: all 0.3s ease-in-out;
}
.feature-button,
.property-button {
  border: 1px solid #333;
  padding: 0.5em 2em;
  color: #333;
  border-radius: 3px;
  /* width: 7vw; */
  text-align: center;
  font-size: 1em;
  transition: all 0.3s ease-in-out;
}
.button:hover,
.property-button:hover,
.feature-button:hover {
  background: #333;
  color: #fff;
}
.property-btn {
  margin: 0 auto;
  display: flex;
  justify-content: center;
}

.properties {
  padding: 2%;
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px;
}
.card {
  box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
  transition: 0.3s;
  height: 100%;
}
.container {
  padding: 2px 16px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.service-container {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 50px;
  padding: 5%;
}
.service-container h3 {
  margin-top: 2em;
}

.service-description p {
  text-align: center;
}
.service-description {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
  padding: 5%;
  line-height: 30px;
  margin-top: 2em;
}

.fa-icon {
  font-size: 30px;
  color: rgb(20, 20, 20);
  margin: 0 auto;
  display: flex;
}

.agent {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  padding: 3%;
  grid-gap: 30px;
}
.agents {
  padding: 5%;
}
.footer {
  padding: 5%;
  background-color: #636262;
  color: #f5f3f1;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
}

.left-side {
  line-height: 30px;
  text-align: center;
}
.left-side a {
  text-decoration: none;
  color: #fff;
}
.left-side a:hover {
  text-decoration: underline;
}
.right-side {
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
}

.footer-soc {
  display: flex;
  justify-content: center;
  flex-direction: column;
}

.footer-icons {
  display: flex;
  justify-content: space-evenly;
}
.footer-icon {
  font-size: 40px;
}
.footer-icons a {
  text-decoration: none;
  color: #333;
  transition: all 0.3s ease-in-out;
}
.footer-icons a:hover {
  color: #f5f3f1;
}
.black {
  color: #333;
  transition: all 0.3s ease-in-out;
}

.black:hover {
  color: rgb(204, 204, 204);
}

.footer-newsletter {
  text-align: center;
}

.footer-input {
  border: thin solid #333;
  padding: 0.5em 1.5em;
  color: #333;
  font-size: 1em;
  margin-bottom: 1em;
  transition: all 0.3s ease-in-out;
}
</style>