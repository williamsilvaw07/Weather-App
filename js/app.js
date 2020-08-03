  setTimeout(function () {
      $(".loader-wrapper").fadeOut().empty();
  }, 4000);
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

              console.log(position);

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



                      var tempinfo = data.weather[0].main;

                      var highestTeam_api = data.main.temp_max;

                      var windSpeed_api = data.wind.speed;

                      var icon_api = data.weather[0].icon;

                      var tempInforound = Math.round(highestTeam_api);



                      var imageApi = icon_api + '@2x.png';
                      var imageApiUlr = imageUlr + imageApi;

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


                      iconhtml.src = imageApiUlr;

                      dateInner.textContent = currentDate + "  " + dayDate + "  " + "  " + currentMonth + "  " + currentYear;




                      console.log(tempinfo)




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


                      } else(tempinfo === '') {
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

              console.log(position);

              lat = position.coords.latitude
              long = position.coords.longitude;



              var apiFrist = 'https://api.openweathermap.org/data/2.5/onecall?lat='

              var apiSecond = 'exclude=hourly,daily&appid=e46fd6bc9f47f23616e7f525256b3f5a&units=metric'


              var apiFinal = apiFrist + lat + '&lon=' + long + '&%20' + apiSecond

              fetch(apiFinal)
                  .then(response => {

                      return response.json();

                  })

                  .then(data => {
                      console.log(data)

                      ///first day block
                      ///gets the day
                      var daily_day = data.daily[1].dt;
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
                      var firstDayTemp = document.querySelector("#temputer_day1");

                      var daily_day_temp_1 = data.daily[1].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var daily_day_icons_1 = data.daily[1].weather[0].icon
                      var firstDaySectionIicon = document.querySelector("#weather_icon_day1");

                      var imageApi_first = daily_day_icons_1 + '@2x.png';
                      var image_ulr_api_1 = imageUlr_daily + imageApi_first;
                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      firstDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      firstDaySectionIicon.src = image_ulr_api_1;


                      /////end




                      ///Second day block 
                      ///gets the day
                      var daily_day = data.daily[2].dt;
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

                      var daily_day_temp_1 = data.daily[2].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var daily_day_icons_2 = data.daily[2].weather[0].icon
                      var secondDaySectionIicon = document.querySelector("#weather_icon_day2");

                      var imageApi_second = daily_day_icons_2 + '@2x.png';
                      var image_ulr_api_2 = imageUlr_daily + imageApi_second;
                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      secondDaySectionIicon.src = image_ulr_api_2;


                      /////end





                      ///third day block 
                      ///gets the day
                      var daily_day = data.daily[3].dt;
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

                      var daily_day_temp_1 = data.daily[3].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var daily_day_icons_2 = data.daily[3].weather[0].icon
                      var secondDaySectionIicon = document.querySelector("#weather_icon_day3");

                      var imageApi_second = daily_day_icons_2 + '@2x.png';
                      var image_ulr_api_2 = imageUlr_daily + imageApi_second;
                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      secondDaySectionIicon.src = image_ulr_api_2;


                      /////end





                      ///4th day block 
                      ///gets the day
                      var daily_day = data.daily[4].dt;
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

                      var daily_day_temp_1 = data.daily[4].temp.day

                      var tempInforound_1 = Math.round(daily_day_temp_1);
                      //end

                      ///icons ulr
                      var daily_day_icons_2 = data.daily[4].weather[0].icon
                      var secondDaySectionIicon = document.querySelector("#weather_icon_day4");

                      var imageApi_second = daily_day_icons_2 + '@2x.png';
                      var image_ulr_api_2 = imageUlr_daily + imageApi_second;
                      ///end         


                      ////add the day
                      firstDaySection.textContent = currentDate;
                      ///adds the day temp
                      secondDayTemp.textContent = tempInforound_1;

                      ///adds the day image icons
                      secondDaySectionIicon.src = image_ulr_api_2;


                      /////end
                  })





          });
      } else {
          // Fallback for no geolocation
          geolocFail();
      }

  });
