const express = require ('express');
const router = express.Router;

const db = require ("../models");

module.exports = {
    // get - use this to retrieve all articles 
    // /api/articles
    findAll: function(req, res) {
        db.Article.find().then(function(dbArticle) {
            res.json(dbArticle)
        }).catch(function(err) {
            res.json(err);
        });
    },

    // post - save article to the database 
    // /api/articles 
    create: function(req, res) {
        db.Article.create(req.body).then(function(dbArticle) {
            res.json(dbArticle)
        }).catch(function(err) {
            res.json(err);
        });
    },

    // delete - delete a saved article in the database 
    // /api/articles 
    delete: function(req, res) {
        db.Article.remove({_id: req.params.id}).then(function(dbArticle) {
            res.json(dbArticle);
        }).catch(function(err) {
            res.json(err)
        });
    }
};