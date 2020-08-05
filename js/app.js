  setTimeout(function () {
      $(".loader-wrapper").fadeOut().empty();
  }, 5000);
  window.addEventListener("load", () => {

      var lat;
      var long;





      var cityName = document.querySelector("#location");
      var temputer = document.querySelector("#temputer");
      var tempInfomation = document.querySelector("#weather_state");
      var hightstTemp = document.querySelector("#highest_temp");
      var windSpeed = document.querySelector("#wind_speed");
      var iconhtml = document.querySelector("#weather_icon");
      var dateInner = document.querySelector("#date");
      var imageUlr = "http://openweathermap.org/img/wn/"
      var backgorundImage = document.querySelector(".backgroundimage");

      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {



              lat = position.coords.latitude
              long = position.coords.longitude;


              var apiFrist = 'http://api.openweathermap.org/data/2.5/weather?lat='

              var apiSecond = '&appid=e46fd6bc9f47f23616e7f525256b3f5a&units=metric'


              var apiFinal = apiFrist + lat + '&lon=' + long + apiSecond

              fetch(apiFinal)
                  .then(response => {

                      return response.json();

                  })

                  .then(data => {
                      console.log(data)


                      var name = data.name;


                      var temp = data.main.temp;


                      var temRound = Math.round(temp);

                      var weatherDesc = data.weather[0].description;
                      var sunsetTime = data.sys.sunset;

                      var sunset = new Date(sunsetTime * 1000)
                      var tempinfo = data.weather[0].main;

                      var highestTeam_api = data.main.temp_max;

                      var windSpeed_api = data.wind.speed;

                      var icon_api = data.weather[0].icon;

                      var tempInforound = Math.round(highestTeam_api);






                      console.log(isDay())
                      var dateInner_api = new Date();


                      var weekday = new Array(7);
                      weekday[0] = "Sunday";
                      weekday[1] = "Monday";
                      weekday[2] = "Tuesday";
                      weekday[3] = "Wednesday";
                      weekday[4] = "Thursday";
                      weekday[5] = "Friday";
                      weekday[6] = "Saturday";

                      var dayDate = dateInner_api.getDate();
                      var currentDate = weekday[dateInner_api.getDay()];



                      new Array(12);
                      weekday[0] = "January";
                      weekday[1] = "February";
                      weekday[2] = "March";
                      weekday[3] = "April ";
                      weekday[4] = "May ";
                      weekday[5] = "June ";
                      weekday[6] = "July ";
                      weekday[7] = "August ";
                      weekday[8] = "September";
                      weekday[9] = "October";
                      weekday[10] = "November";
                      weekday[11] = "December ";


                      var currentMonth = weekday[dateInner_api.getMonth()];
                      var currentYear = dateInner_api.getFullYear();

                      cityName.textContent = name;

                      temputer.textContent = temRound;

                      tempInfomation.textContent = tempinfo;

                      hightstTemp.textContent = tempInforound;

                      windSpeed.textContent = windSpeed_api;




                      dateInner.textContent = currentDate + "  " + dayDate + "  " + "  " + currentMonth + "  " + currentYear;




                      console.log(tempinfo)


                      ///this function will return if its day or night it will retuen true or false 
                      function isDay() {
                          return (Date.now() + 60000 * new Date().getTimezoneOffset() + 21600000) % 86400000 / 3600000 > 12;
                      }

                      /////few clouds night 

                      if (tempinfo == "Clouds" && isDay() === false) {

                          iconhtml.src = 'picture/icons/night_fewclouds.png'

                      } ////end


                      /////few clouds day
                      if (tempinfo == "Clouds" && isDay() === true) {

                          iconhtml.src = ' picture/icons/day_few_clouds.png'

                      }

                      ///end





                      /////clear night 

                      if (weatherDesc === 'clear sky' && isDay() === false) {

                          iconhtml.src = 'picture/icons/night_clear.png'

                      } ////end


                      /////clear day
                      if (weatherDesc === 'clear sky' && isDay() === true) {

                          iconhtml.src = 'picture/icons/day_clear.png'

                      }

                      ///end




                      /////	scattered clouds

                      if (weatherDesc === 'scattered clouds' && isDay() === false) {

                          iconhtml.src = 'picture/icons/day_settle_clouds.png'

                      } ////end


                      /////scattered clouds
                      if (weatherDesc === 'scattered clouds' && isDay() === true) {

                          iconhtml.src = 'picture/icons/day_settle_clouds.png'

                      }

                      ///end



                      /////	broken clouds

                      if (weatherDesc === 'broken clouds' && isDay() === false) {

                          iconhtml.src = 'picture/icons/day_broken_clouds.png'

                      } ////end


                      /////broken clouds
                      if (weatherDesc === 'broken clouds' && isDay() === true) {

                          iconhtml.src = 'picture/icons/day_broken_clouds.png'

                      }

                      ///end








                      /////	shower rain

                      if (weatherDesc === 'shower rain' && isDay() === false) {

                          iconhtml.src = 'picture/icons/day_shower rain.png'

                      } ////end


                      /////shower rain
                      if (weatherDesc === 'shower rain' && isDay() === true) {

                          iconhtml.src = 'picture/icons/day_shower rain.png'

                      }

                      ///end








                      /////	rain night

                      if (tempinfo === 'Rain' && isDay() === false) {

                          iconhtml.src = 'picture/icons/night_rain.png'

                      } ////end


                      /////rain day
                      if (tempinfo === 'Rain' && isDay() === true) {

                          iconhtml.src = 'picture/icons/day_rain.png'

                      }

                      ///end






                      /////	thunderstorm

                      if (tempinfo === 'Thunderstorm' && isDay() === false) {

                          iconhtml.src = 'picture/icons/thunderstorm.png'

                      } ////end


                      /////thunderstorm
                      if (tempinfo === 'Thunderstorm' && isDay() === true) {

                          iconhtml.src = 'picture/icons/thunderstorm.png'

                      }

                      ///end




                      /////	snow

                      if (tempinfo === 'Snow' && isDay() === false) {

                          iconhtml.src = 'picture/icons/snow.png'

                      } ////end


                      /////snow
                      if (tempinfo === 'Snow' && isDay() === true) {

                          iconhtml.src = 'picture/icons/snow.png'

                      }

                      ///end

                      /////	mist

                      if (weatherDesc === 'mist' && isDay() === false) {

                          iconhtml.src = 'picture/icons/mist.png'

                      } ////end


                      /////mist
                      if (weatherDesc === 'mist' && isDay() === true) {

                          iconhtml.src = 'picture/icons/mist.png'

                      }

                      ///end




                      ////if the weather is cloudy
                      if (tempinfo === 'Clouds') {

                          $("body").addClass('body_clouds')


                      }

                      if (tempinfo === 'Thunderstorm') {

                          $("body").addClass('body_Thunderstorm')


                      }


                      if (tempinfo === 'Snow') {

                          $("body").addClass('body_Snow')


                      }


                      if (tempinfo === 'Rain') {

                          $("body").addClass('body_Rain')


                      }
                      if (tempinfo === 'Clear') {

                          $("body").addClass('body_clear')


                      } else if (tempinfo === null) {
                          $("body").addClass('backgroundimage_recall')
                      }

                      console.log(backgorundImage)


                  })





          });
      }



  });









  window.addEventListener("load", () => {


      var imageUlr_daily = "http://openweathermap.org/img/wn/"



      if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(position => {



              lat = position.coords.latitude
              long = position.coords.longitude;



              var apiFrist = 'https://api.openweathermap.org/data/2.5/onecall?lat='

              var apiSecond = 'exclude=hourly,daily&appid=e46fd6bc9f47f23616e7f525256b3f5a&units=metric'


              var apiFinal = apiFrist + lat + '&lon=' + long + '&%20' + apiSecond

              fetch(apiFinal)


                  .then(response => {

                      return response.json();

                  })

                  .then(data1 => {
                      console.log(data1)



                      ///first day block
                      ///gets the day
                      var daily_day = data1.daily[1].dt;
                      var daily_day_convert = new Date(daily_day * 1000)

                      var weekday = new Array(7);
                      weekday[0] = "Sunday";
                      weekday[1] = "Monday";
                      weekday[2] = "Tuesday";
                      weekday[3] = "Wednesday";
                      weekday[4] = "Thursday";
                      weekday[5] = "Friday";
                      weekday[6] = "Saturday";


                      var dayDate = daily_day_convert.getDate();
                      var currentDate = weekday[daily_day_convert.getDay()];
                      console.log(currentDate)
                      var firstDaySection = document.querySelector("#day_current_1");
                      ///end



                      //day temp
                      var secondDayTemp = document.querySelector("#temputer_day1");

                      var daily_day_temp_1 = data1.daily[1].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var fristDayIcon = document.querySelector('#weather_icon_day1');
                      var daily_day_icons_2 = data1.daily[1].weather[0].main

                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      var daily_day_icons_2 = data1.daily[1].weather[0].main
                      //rain
                      if (daily_day_icons_2 == 'Rain') {
                          fristDayIcon.src = 'picture/icons/day_rain.png'
                      }


                      //clear
                      if (daily_day_icons_2 == 'Clear') {
                          fristDayIcon.src = 'picture/icons/day_clear.png'
                      }



                      //Clouds
                      if (daily_day_icons_2 == 'Clouds') {
                          fristDayIcon.src = 'picture/icons/day_few_clouds.png'
                      }





                      //Snow
                      if (daily_day_icons_2 == 'Snow') {
                          fristDayIcon.src = 'picture/icons/snow.png'
                      }


                      //Drizzle
                      if (daily_day_icons_2 == 'Drizzle') {
                          fristDayIcon.src = 'picture/icons/day_shower rain.png'
                      }



                      /////end




                      ///Second day block 
                      ///gets the day
                      var daily_day = data1.daily[2].dt;
                      var daily_day_convert = new Date(daily_day * 1000)

                      var weekday = new Array(7);
                      weekday[0] = "Sunday";
                      weekday[1] = "Monday";
                      weekday[2] = "Tuesday";
                      weekday[3] = "Wednesday";
                      weekday[4] = "Thursday";
                      weekday[5] = "Friday";
                      weekday[6] = "Saturday";


                      var dayDate = daily_day_convert.getDate();
                      var currentDate = weekday[daily_day_convert.getDay()];
                      console.log(currentDate)
                      var firstDaySection = document.querySelector("#day_current_2");
                      ///end



                      //day temp
                      var secondDayTemp = document.querySelector("#temputer_day2");

                      var daily_day_temp_1 = data1.daily[2].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var secondDaySectionIicon = document.querySelector("#weather_icon_day2");


                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      var daily_day_icons_3 = data1.daily[2].weather[0].main
                      //rain
                      if (daily_day_icons_3 === 'Rain') {
                          secondDaySectionIicon.src = 'picture/icons/day_rain.png'
                      }


                      //clear
                      if (daily_day_icons_3 === 'Clear') {
                          secondDaySectionIicon.src = 'picture/icons/day_clear.png'
                      }



                      //Clouds
                      if (daily_day_icons_3 == 'Clouds') {
                          secondDaySectionIicon.src = 'picture/icons/day_few_clouds.png.png'
                      }





                      //Snow
                      if (daily_day_icons_3 === 'Snow') {
                          secondDaySectionIicon.src = 'picture/icons/snow.png'
                      }


                      //Drizzle
                      if (daily_day_icons_3 === 'Drizzle') {
                          secondDaySectionIicon.src = 'picture/icons/day_shower rain.png'
                      }
                      console.log(daily_day_icons_3)


                      /////end





                      ///third day block 
                      ///gets the day
                      var daily_day = data1.daily[3].dt;
                      var daily_day_convert = new Date(daily_day * 1000)

                      var weekday = new Array(7);
                      weekday[0] = "Sunday";
                      weekday[1] = "Monday";
                      weekday[2] = "Tuesday";
                      weekday[3] = "Wednesday";
                      weekday[4] = "Thursday";
                      weekday[5] = "Friday";
                      weekday[6] = "Saturday";


                      var dayDate = daily_day_convert.getDate();
                      var currentDate = weekday[daily_day_convert.getDay()];
                      console.log(currentDate)
                      var firstDaySection = document.querySelector("#day_current_3");
                      ///end



                      //day temp
                      var secondDayTemp = document.querySelector("#temputer_day3");

                      var daily_day_temp_1 = data1.daily[3].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var daily_day_icons_2 = data1.daily[3].weather[0].icon
                      var thirdDaySectionIicon = document.querySelector("#weather_icon_day3");


                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;



                      ///adds the day image icons
                      var daily_day_icons_4 = data1.daily[3].weather[0].main
                      //rain
                      if (daily_day_icons_4 == 'Rain') {
                          thirdDaySectionIicon.src = 'picture/icons/day_rain.png'
                      }


                      //clear
                      if (daily_day_icons_4 == 'Clear') {
                          thirdDaySectionIicon.src = 'picture/icons/day_clear.png'
                      }



                      //Clouds
                      if (daily_day_icons_4 == 'Clouds') {
                          thirdDaySectionIicon.src = 'picture/icons/day_few_clouds.png.png'
                      }





                      //Snow
                      if (daily_day_icons_4 == 'Snow') {
                          thirdDaySectionIicon.src = 'picture/icons/snow.png'
                      }


                      //Drizzle
                      if (daily_day_icons_4 == 'Drizzle') {
                          thirdDaySectionIicon.src = 'picture/icons/day_shower rain.png'
                      }
                      console.log(daily_day_icons_4)



                      /////end





                      ///4th day block 
                      ///gets the day
                      var daily_day = data1.daily[4].dt;
                      var daily_day_convert = new Date(daily_day * 1000)

                      var weekday = new Array(7);
                      weekday[0] = "Sunday";
                      weekday[1] = "Monday";
                      weekday[2] = "Tuesday";
                      weekday[3] = "Wednesday";
                      weekday[4] = "Thursday";
                      weekday[5] = "Friday";
                      weekday[6] = "Saturday";


                      var dayDate = daily_day_convert.getDate();
                      var currentDate = weekday[daily_day_convert.getDay()];
                      console.log(currentDate)
                      var firstDaySection = document.querySelector("#day_current_4");
                      ///end



                      //day temp
                      var secondDayTemp = document.querySelector("#temputer_day3");

                      var daily_day_temp_1 = data1.daily[4].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr

                      var fouthDaySectionIicon = document.querySelector("#weather_icon_day4");

                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      var daily_day_icons_2 = data1.daily[3].weather[0].icon



                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;



                      ///adds the day image icons
                      var daily_day_icons_5 = data1.daily[4].weather[0].main
                      //rain
                      if (daily_day_icons_5 == 'Rain') {
                          fouthDaySectionIicon.src = 'picture/icons/day_rain.png'
                      }


                      //clear
                      if (daily_day_icons_5 == 'Clear') {
                          fouthDaySectionIicon.src = 'picture/icons/day_clear.png'
                      }



                      //Clouds
                      if (daily_day_icons_5 == 'Clouds') {
                          fouthDaySectionIicon.src = 'picture/icons/day_few_clouds.png.png'
                      }





                      //Snow
                      if (daily_day_icons_5 == 'Snow') {
                          fouthDaySectionIicon.src = 'picture/icons/snow.png'
                      }


                      //Drizzle
                      if (daily_day_icons_5 == 'Drizzle') {
                          fouthDaySectionIicon.src = 'picture/icons/day_shower rain.png'
                      }
                      console.log(daily_day_icons_5)


                      ;


                      /////end
                  })
              console.log(apiFinal)




          });
      } else {
          // Fallback for no geolocation
          geolocFail();
      }

  });
