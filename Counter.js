function DisplayVisits() 
{   
 // How many visits so far?
  //   var numVisits = GetCookie("numVisits");
  //   if (numVisits) numVisits = parseInt(numVisits) + 1;
   //  else numVisits = 1; // the value for the new cookie

 // Show the number of visits
     //if (numVisits==1) document.write("This is your first visit.");
     //else document.write("You have visited this page " + numVisits + " times.");

     //var numVisits = document.getElementById("numVisits").value;
     //const temperature = document.getElementById("temperature").value;

     //get request equals database = 6
    //visitor = database + 1
    var PersonCount=1;
     const data = {PersonCount: PersonCount, PersonID: "123"};
     const xhr = new XMLHttpRequest();
    xhr.open('POST', 'https://fnapz1jy3a.execute-api.eu-west-1.amazonaws.com/PRD/aws_website_visitor_increment');
    xhr.onload = () => {
        console.log(xhr.response);
    };
    xhr.setRequestHeader("Content-Type", "application/json");
    xhr.send(JSON.stringify(data));

 // Set the cookie to expire 365 days from now
  //   var today = new Date();
    // today.setTime(today.getTime() + 365 /*days*/ * 24 /*hours*/ * 60 /*minutes*/ * 60 /*seconds*/ * 1000 /*milliseconds*/);
     //SetCookie("numVisits", numVisits, today);
    
    const pb = new XMLHttpRequest();
    pb.open('GET', 'https://fnapz1jy3a.execute-api.eu-west-1.amazonaws.com/PRD/aws_website_getVisitorCount');
    
    //document.getElementById('get-btn').innerHTML;
    pb.onload = () => {
         var obj = JSON.parse(pb.response);
         document.getElementById('siteIncrement').innerHTML = obj.PersonCount
    };
    //document.write("hello my name is");
    pb.send();
 }