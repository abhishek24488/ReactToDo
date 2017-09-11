var axios= require('axios');

const openweatherurl= 'http://api.openweathermap.org/data/2.5/weather?&units=metric&appid=80edfa0c8854cb350ce3c5bf3354c806';

//80edfa0c8854cb350ce3c5bf3354c806

module.exports= {
    getTemp: function(location){
        //debugger;
        var encodedLocation= encodeURIComponent(location);
        var RequestUrl= `${openweatherurl}&q=${encodedLocation}`;
        console.log(encodedLocation);
        console.log(RequestUrl);
        return axios.get(RequestUrl).then(function(res){
            if(res.data.cod && res.data.message){
                throw new Error(res.data.message);
            }else{
                return res.data.main.temp;
            }

        },function(err){
            throw new Error('unable to fectch location');       
        });
    }
}