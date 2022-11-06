import {Country} from '../models/countryModel.js'

const create = async (req, res) => {
    const country = await new Country({
        name: req.body.name,
        code: req.body.code
    })

    try {
        await country.save()
        await res.redirect("/")
    } catch(e) {
        console.log(e)
    }
}

const get = async (req, res) => {
    try {
        const countries = await Country.find()
        await res.send(countries)
    } catch(e) {
        console.log(e)
    }
}

const getById = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id)
        await res.send(country)
    } catch(e) {
        console.log(e)
    }
}

const update = async (req, res) => {
    try {
        const country = await Country.findById(req.params.id)
        let new_country = await country
        new_country.name = req.body.name,
        new_country.code = req.body.code,
        await new_country.save()
        await res.redirect('/')
    } catch(e) {
        console.log(e)
    }
}

const remove = async (req, res) => {
    try {
        await Country.findByIdAndDelete(req.params.id)
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
