import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=";
const APIKEY = "722eb5388c2e47489ad4bd5f397e4d61";

export default {
    //search NYT API
    search: function(query) {
        return axios.get(BASEURL + APIKEY + "&q=" + query);
    },
    //retrieves saved articles 
    getArticle: function() {
        return axios.get("/api/saved");
    },
    
    //saves article 
    saveArticle: function(article) {
        return axios.post("/api/saved", article);
    },
    
    //delete article 
    deleteArticle: function(id) {
        return axios.delete("/api/saved" + id);
    }
};