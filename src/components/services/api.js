import axios from "axios";

axios.defaults.baseURL = 'https://api.themoviedb.org/3';

//const KEY = "2b4573628b5320b9d8897a0554b1e2de";

const options = {
  headers: {
	// Замість api_read_access_token вставте свій токен
    Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyYjQ1NzM2MjhiNTMyMGI5ZDg4OTdhMDU1NGIxZTJkZSIsInN1YiI6IjY2MGU4M2U1MzNhMzc2MDE2NDgyNmQ5MCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.b48F3oeb-ecZe_Wt4soAQSbaCmmyXYy3mw4HXAwD7o8'
  }
};

export const getTrendingMovie = async () => {
    const url = "/trending/movie/day";
    const data = { ...options, params: { ...options.params }, }
    const resp = await axios.get(url, data)
    return resp.data.results;
}

export const getSearchMovie = async (searchQuery) => {
    const url = "/search/movie";
    const data = { ...options, params: { ...options.params, query: searchQuery }, }
    const resp = await axios.get(url, data)
    return resp.data.results;
}

export const getMovieById = async (MovieId) => {
    const url = `/movie/${MovieId}`
    const resp = await axios.get(url, options)
    return resp.data
}

export const getMovieCredits = async (MovieId) => {
    const url = `/movie/${MovieId}/credits`
    const resp = await axios.get(url, options)
    return resp.data.cast

    
}

export const getMovieReviews = async (MovieId) => {
    const url = `/movie/${MovieId}/reviews`
    const resp = await axios.get(url, options)
    return resp.data.results
}