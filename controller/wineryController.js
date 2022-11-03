import {Winery} from '../models/wineryModel.js'

const create = async (req, res) => {
    const winery = await new Winery({
        name: req.body.name,
        country: req.body.country,
        coordinates: {
            lon: req.body.lon,
            lat: req.body.lat
        },
        website: req.body.website
    })

    try {
        await winery.save()
        await res.redirect("/")
    } catch(e) {
        console.log(e)
    }
}

const get = async (req, res) => {
    try {
        const wineries = await Winery.find()
        await res.send(wineries)
    } catch(e) {
        console.log(e)
    }
}

const getById = async (req, res) => {
    try {
        const winery = await Winery.findById(req.params.id)
        await res.send(winery)
    } catch(e) {
        console.log(e)
    }
}

const update = async (req, res) => {
    try {
        const winery = await Winery.findById(req.params.id)
        let new_winery = await winery
        new_winery.name = req.body.name,
        new_winery.country = req.body.country,
        new_winery.coordinates.lon = req.body.lon
        new_winery.coordinates.lat = req.body.lat
        new_winery.website = req.body.website
        await new_winery.save()
        await res.redirect('/')
    } catch(e) {
        console.log(e)
    }
}

const remove = async (req, res) => {
    try {
        await Winery.findByIdAndDelete(req.params.id)
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
    remove
}
