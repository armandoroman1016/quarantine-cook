import axios from 'axios'

export const recipesRequest = () => {

    const API_KEY = process.env.REACT_APP_RECIPES_API_KEY
    const API_HOST = process.env.REACT_APP_RECIPES_API_HOST

    return axios.create({
        headers: {
            "x-rapidapi-host": API_HOST,
            "x-rapidapi-key": API_KEY
        }
      })
}

