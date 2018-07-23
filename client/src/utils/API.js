import axios from "axios";

const BASEURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?&api-key=";
const APIKEY = "722eb5388c2e47489ad4bd5f397e4d61";

export default {
    search: function(query, start, end) {
        return axios.get(BASEURL + APIKEY + "?q=" + query + "?begin_date=" + start + "?end_date=" + end );
    }
};
