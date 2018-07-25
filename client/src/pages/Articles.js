import React, { Component } from "react";

import API from "../utils/API";

class Articles extends Components {
    //initial state 
    state = {
        title: "",
        start: "",
        end: "",
        articles: [],
        saved: []
    };

    //when components mount, load all saved articles 
    componentDidMount() {
        this.loadArticles();
    }

    //load all saved articles from db
    loadArticles = () => {
        API.getArticle().then(res => 
        this.setState({ saved: res.data })
        ).catch(err => console.log(err));
    };

    //delete single saved article by id
    deleteArticle = id => {
        API.deleteArticle(id).then(res => this.loadArticles()
        ).catch(err => console.log(err));
    };

    //handles updating component state when user types something into the DOM 
    handleInputChange = event => {
        const {name, value } = event.target;
        this.setState({
            [name]: value
        });
    };

    //submit 
    handleFromSubmit = event => {
        event.preventDefault 
    }

}