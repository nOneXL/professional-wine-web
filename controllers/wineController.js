import { Wine } from "../models/Wine.js";

const create = async (req, res) => {
  const wine = await new Wine({
    name: req.body.name,
    country: req.body.country,
    winery: req.body.winery,
    region: req.body.region,
    grapes: req.body.grapes,
    type: req.body.type,
    year: req.body.year,
    rate: req.body.rate,
    offers: [],
  });

  try {
    await wine.save();
    await res.redirect("/wines/page");
  } catch (e) {
    console.log(e);
  }
};

const getWinesPage = async (req, res) => {
  try {
    const wines = await Wine.find();
    await res.render("pages/wines/wines.ejs", {
      wines: wines,
      isAuth: req.isAuthenticated(),
      isAdmin: res.locals.isAdmin,
    });
  } catch (e) {
    console.log(e);
  }
};

const getStatisticsPage = async (req, res) => {
  try {
    const wines = await Wine.find();
    const winesCountByYear = await Wine.aggregate([
      {
        $group: {
          _id: "$year",
          count: { $sum: 1 },
        },
      },
    ]);
    const winesCountByType = await Wine.aggregate([
      {
        $group: {
          _id: "$type",
          count: { $sum: 1 },
        },
      },
    ]);
    const winesCountByCountry = await Wine.aggregate([
      {
        $group: {
          _id: "$country",
          count: { $sum: 1 },
        },
      },
    ]);
    await res.render("pages/wines/statistics.ejs", {
      wines: wines,
      winesCountByYear: winesCountByYear,
      winesCountByType: winesCountByType,
      winesCountByCountry: winesCountByCountry,
      isAuth: req.isAuthenticated(),
    });
  } catch (e) {
    console.log(e);
  }
};

const getEditPage = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    await res.render("pages/wines/edit_wine.ejs", {
      wine: wine,
      isAuth: req.isAuthenticated(),
      isAdmin: res.locals.isAdmin,
    });
  } catch (e) {
    console.log(e);
  }
};

const getNewOfferPage = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    await res.render("pages/wines/addoffer.ejs", {
      wine: wine,
      isAuth: req.isAuthenticated(),
      isAdmin: res.locals.isAdmin,
    });
  } catch (e) {
    console.log(e);
  }
};

const getNewPage = async (req, res) => {
  try {
    await res.render("pages/wines/addwine.ejs", {
      wine: new Wine(),
      isAuth: req.isAuthenticated(),
      isAdmin: res.locals.isAdmin,
    });
  } catch (e) {
    console.log(e);
  }
};

const getWinePage = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    res.render("pages/wines/wine.ejs", {
      wine: wine,
      isAuth: req.isAuthenticated(),
      isAdmin: res.locals.isAdmin,
    });
  } catch (e) {
    console.log(e);
  }
};

const get = async (req, res) => {
  try {
    const wines = await Wine.find();
    await res.send(wines);
  } catch (e) {
    console.log(e);
  }
};

const getById = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    await res.send(wine);
  } catch (e) {
    console.log(e);
  }
};

const update = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    let new_wine = await wine;
    new_wine.name = req.body.name;
    new_wine.country = req.body.country;
    new_wine.winery = req.body.winery;
    new_wine.grapes = req.body.grapes;
    new_wine.type = req.body.type;
    new_wine.year = req.body.year;
    new_wine.rate = req.body.rate;

    await new_wine.save();

    await res.render("pages/wines/wine.ejs", {
      wine: wine,
    });
  } catch (e) {
    console.log(e);
  }
};

const addOffer = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    let new_wine = await wine;
    let user1 = req.body.user;
    let price1 = req.body.price;
    let website1 = req.body.website;

    new_wine.name = wine.name;
    new_wine.country = wine.country;
    new_wine.winery = wine.winery;
    new_wine.grapes = wine.grapes;
    new_wine.type = wine.type;
    new_wine.year = wine.year;
    new_wine.rate = wine.rate;
    new_wine.offers.push({ user: user1, price: price1, website: website1 });

    await new_wine.save();
    await res.render("pages/wines/wine.ejs", {
      wine: wine,
    });
  } catch (e) {
    console.log(e);
  }
};
const removeOffer = async (req, res) => {
  try {
    const wine = await Wine.findById(req.params.id);
    let new_wine = await wine;
    let start = req.params.num;
    new_wine.offers.splice(start, 1);

    await new_wine.save();
    await res.render("pages/wines/wine.ejs", {
      wine: new_wine,
    });
  } catch (e) {
    console.log(e);
  }
};

const remove = async (req, res) => {
  try {
    await Wine.findByIdAndDelete(req.params.id);
    await res.redirect("/wines/page");
  } catch (e) {
    console.log(e);
  }
};

export {
  create,
  get,
  getById,
  update,
  remove,
  removeOffer,
  getStatisticsPage,
  getWinesPage,
  getNewOfferPage,
  addOffer,
  getEditPage,
  getNewPage,
  getWinePage,
};
