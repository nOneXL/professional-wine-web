import {Article} from '../models/articleModel.js'
 
function checkForCorrectImage(img) {
    let image
    if (img == "Choose...") {
        image = "wine" + (Math.floor(Math.random() * 10) + 1)
    } else {
        image = img
    }
    return image
}

const create = async (req, res) => {
    const article = await new Article({
        title: req.body.title,
        text: req.body.text,
        image: checkForCorrectImage(req.body.image)
    })
 
    try {
        await article.save()
        res.redirect(`/blog/${article.id}`);
    } catch(e) {
        console.log(e)
    }
}
 
const get = async (req, res) => {
    try {
        const articles = await Article.find()
        await res.render('pages/blog/blog.ejs', {
            blog_post_list: articles.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt))
          })
    } catch(e) {
        console.log(e)
    }
}
 
const getById = async (req, res) => {
    try {
    const article = await Article.findById(req.params.id)
    res.render('pages/blog/article.ejs', {
        article: article
      })
    } catch(e) {
        console.log(e)
    }
}
 
const update = async (req, res) => {
    const {id} = req.params;
    const article = await Article.findById(id)
    
    let article_edit = article
    article_edit.title = req.body.title
    article_edit.text = req.body.text
    article_edit.image = checkForCorrectImage(req.body.image)

    try {
        await article_edit.save()
        res.redirect(`/blog/${id}`);
    } catch(e) {
        console.log(e)
    }
}
 
const remove = async (req, res) => {
    try {
        const {id} = req.params;
        await Article.findByIdAndDelete(id)
        res.redirect('/blog')
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
