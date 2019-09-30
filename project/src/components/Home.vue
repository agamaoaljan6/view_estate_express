<template>
  <main class="home">
    <div class="header">
      <img src="../assets/logo.png" alt width="50" height="50" />
      <h1>FREE REAL ESTATE</h1>
    </div>
    <carousel :data="data" indicators="hover" indicator-type="disc"></carousel>

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
            <select name="rentsale" id="rentsale">
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
       <carousel>

    <img src="../assets/img1.jpg">
    <img src="../assets/img1.jpg">
    <img src="../assets/img1.jpg">
    <img src="../assets/img1.jpg">
</carousel>
      </div>
    </section>
  </main>
</template>

<script>
import carousel from 'vue-owl-carousel'
export default {
  data() {
    return {
      data: [
        '<div class="example-slide-1"><h1>3533 Meadow Drive, Vancouver BC</h1></div>',
        '<div class="example-slide-2"><h1>2836 Pride Avenue, Surrey BC</h1></div>',
        '<div class="example-slide-3"><h1>3376 Norman Street, Burnaby BC</h1></div>'
      ],
      components: {
        carousel
      }
    };
  }
};
</script>

<style>
body {
  background-color: rgb(244, 244, 244);
}
.header {
  display: flex;
  justify-content: space-around;
  margin-right: 25%;
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
.featured h1 {
  line-height: 20px;
  padding: 2%;
  margin: 2em 0 auto;
  text-transform: uppercase;
  font-size: 30px;
}
.search {
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
  border: none;
  padding: 0.5em 1.5em;
  color: #333;
  border-radius: 3px;
  width: 10vw;
  text-align: center;
  font-size: 1em;
  transition: all 0.3s ease-in-out;
}
.button:hover {
  background: #333;
  color: #fff;
}

.properties {
  display: grid; 
  grid-template-columns: 1fr 1fr 1fr;
  grid-gap: 30px; 
  padding: 5%;
}
</style>