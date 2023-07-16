const mongoose = require("mongoose");
const Campground = require("../models/campground");
const cities = require("./cities");
const axios = require("axios");
const { places, descriptors } = require("./seedHelpers");
const mbxGeocoding = require("@mapbox/mapbox-sdk/services/geocoding");
if (process.env.NODE_ENV !== "production") {
  require("dotenv").config();
}
const mapBoxToken = process.env.MAPBOX_TOKEN;
const geocoder = mbxGeocoding({ accessToken: mapBoxToken });
mongoose.connect(process.env.DB_URL);

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error : "));
db.once("open", () => {
  console.log("Database Connected !");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

async function seedImg() {
  try {
    const resp = await axios.get("https://api.unsplash.com/photos/random", {
      params: {
        client_id: process.env.UNSPLASH_ID,
        collections: 483251,
      },
    });
    return resp.data.urls.small;
  } catch (err) {
    console.error(err);
  }
}

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random1000 = Math.floor(Math.random() * 1000 + 1);
    const price = Math.floor(Math.random() * 30 + 1);
    const camp = new Campground({
      author: "64a6d890dbf84a16be2805e8",
      location: `${cities[random1000].city},${cities[random1000].state} `,
      title: `${sample(descriptors)}, ${sample(places)}`,
      image: await seedImg(),
      images: [
        {
          url: await seedImg(),
          filename: "somthing",
        },
      ],
      description: `Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae obcaecati nemo
      rem, mollitia animi quam tenetur possimus aliquid aut aspernatur temporibus eos
      dignissimos dolor, iusto facilis nostrum eum. Nostrum, dicta.
      `,
      price: price,
    });
    const geoData = await geocoder
      .forwardGeocode({
        query: camp.location,
        limit: 1,
      })
      .send();

    camp.geometry = geoData.body.features[0].geometry;
    await camp.save();
  }
};

seedDB().then(() => {
  mongoose.connection.close();
});
