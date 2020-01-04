const axios = require('axios')
const getTotalConvo = async () => {
    axios.get('http://localhost:1337/summaries/conversations?dateStart=2019-12-01&dateEnd=2019-12-31').then(data => {
        console.log(data.data.results.current)
    })
};
console.log(getTotalConvo())