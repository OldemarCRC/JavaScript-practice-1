const date_time = new Date();
        document.getElementById("date-time").innerHTML = date_time;
        let year = date_time.getFullYear(); //getFullYear() method
        document.getElementById("year").innerHTML = year;
        const month = ["January","February","March","April","May","June","July","August","September","October","November","December"];
        let name = month[date_time.getMonth()]; // getMonth() method
        document.getElementById("m").innerHTML = name;
        let date = date_time.getDate(); //getDate() method
        document.getElementById("date").innerHTML = date;
        let hour = date_time.getHours(); //getHours() method
        document.getElementById("h").innerHTML = hour;
        let minutes = date_time.getMinutes(); //getMinutes() method
        document.getElementById("min").innerHTML = minutes;
        
        function checkAge() {
          var age = document.getElementById("age").value;
          if (age >= 18) {
            document.getElementById("message").innerHTML = "You are an adult";
          } else {
            document.getElementById("message").innerHTML = "You are underage";
          }
        }
        function checkMacdonalds() {
          var age = document.getElementById("age").value;
          if (age >= 16 && age <=25) {
              document.getElementById("macmessage").innerHTML = "You can work with us";
          } else {
              document.getElementById("macmessage").innerHTML = "Sorry! You can't work with us";
          }
        }
        function checkLetter() {
          var letter = document.getElementById("letter").value;;
          var msg = "";
          switch (letter) {
            case "n":
              msg = "Oldemar";
              document.getElementById("my_name").innerHTML = "My name is " + msg;
              break;
            default:
              msg = "Variable n was not assigned";
              document.getElementById("my_name").innerHTML = msg;
              break;
            }
        }