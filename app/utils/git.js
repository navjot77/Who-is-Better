const axios=require('axios');


const API='1cd5a22b04498099dc09c211be8722eb086a69ae';
const secret_code='navi';
const params=`?client_id=${API}&client_secret=${secret_code}`;


const getRepo=async(username)=>{
    const repos=await axios.get('https://api.github.com/users/' + username + '/repos' + params + '&per_page=100')
    return repos.data;
};

const getProfile=async(username)=>{
    const profile=await axios.get('https://api.github.com/users/' + username + params)
    return profile.data;
};

const addStars= async (repos)=>{
    let sum=0;
    for (const each in repos){
        sum=sum+repos[each].stargazers_count;
    }
    return sum;
};

function sortUsers(a,b){
    return b.total-a.total;
}


const getResult=async (user1,user2)=>{

    try {
        const [repos1, repos2] = await Promise.all([getRepo(user1), getRepo(user2)]);
        const [total1, total2] = await Promise.all([addStars(repos1), addStars(repos2)]);
        const [profile1, profile2] = await Promise.all([getProfile(user1), getProfile(user2)]);
        const playerOne = {
            total: total1,
            profile: profile1
        };
        const playerTwo = {
            total: total2,
            profile: profile2
        };
        const players = [playerOne, playerTwo];
        return players.sort(sortUsers);
    }
    catch(e){
        return e;
    }

};





module.exports={


    async getResultss(player1,player2){

        return await getResult(player1, player2);
    },




    async getRepos(lang){

        const newURI=window.encodeURI(`https://api.github.com/search/repositories?q=
        starts:>1+language:${lang}&sort=stars&order=desc&type=Repositories`);

        const response=await axios.get(newURI);
        return response.data.items;


    }


};