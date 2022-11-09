import {Wine} from '../models/wineModel.js'

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
        offers: []
    })

    try {
        await wine.save()
        await res.redirect("/")
    } catch(e) {
        console.log(e)
    }
}

const getWinesPage = async (req, res) => {
    try {
        const wines = await Wine.find()
        await res.render('pages/wines/wines.ejs', {
            wines: wines
          })
    } catch(e) {
        console.log(e)
    }
}

const getEditPage = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id)
        await res.render('pages/wines/edit_wine.ejs', { wine: wine })
    } catch(e) {
        console.log(e)
    }   
  }

const getNewPage = async (req, res) => {
    try {
        await res.render('pages/wines/addwine.ejs', { wine: new Wine() })
    } catch(e) {
        console.log(e)
    }   
  }

const getWinePage = async (req, res) => {
    try {
    const wine = await Wine.findById(req.params.id);
    res.render('pages/wines/wine.ejs', {
        wine: wine
      });
    } catch(e) {
        console.log(e);
    }
}

const get = async (req, res) => {
    try {
        const wines = await Wine.find()
        await res.send(wines)
    } catch(e) {
        console.log(e)
    }
}

const getById = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id)
        await res.send(wine)
    } catch(e) {
        console.log(e)
    }
}

const update = async (req, res) => {
    try {
        const wine = await Wine.findById(req.params.id)
        let new_wine = await wine
        new_wine.name = req.body.name,
        new_wine.country = req.body.country,
        new_wine.winery = req.body.winery,
        new_wine.grapes = req.body.grapes,
        new_wine.type = req.body.type,
        new_wine.year = req.body.year,
        new_wine.rate = req.body.rate
        await new_wine.save()
        await res.redirect('/')
    } catch(e) {
        console.log(e)
    }
}

const remove = async (req, res) => {
    try {
        await Wine.findByIdAndDelete(req.params.id)
        await res.redirect('/')
    } catch(e) {
        console.log(e)
    }
}

export {    
    create,
    get,
    getById,
    update,
    remove,
    getWinesPage,
    getEditPage,
    getNewPage,
    getWinePage
}
