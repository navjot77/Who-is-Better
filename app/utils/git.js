const axios=require('axios')

module.exports={

    async getRepos(lang){

        const newURI=window.encodeURI(`https://api.github.com/search/repositories?q=
        starts:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

        const response=await axios.get(newURI);
        return response.data.items;


    }


};