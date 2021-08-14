# LAB1 Poll Simulator <br />
live project : https://eclab1daiict.herokuapp.com/menu <br />
<br />
I have used nodejs for backend and HTML in frontend.<br />
UI is in just plain html not added css for clean UI because my main aim to implement 3 tire architecture.<br />
1)Presentation layer (View Folder)<br />
     (here ejs means embeded javascript)<br />
         &nbsp; &nbsp; &nbsp; &nbsp; &nbsp;  i)   Menu page -> menu.ejs<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ii)  Add Candidate -> Admin.ejs<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; iii) Result and Report -> report.ejs <br /> 
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; iv)  voting -> index.ejs <br />
2)Business Logic layer (Routers Folder)<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i) Business logic for Admin is inside in index.js<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; ii) Business logic for user is inside in user.js <br />  I
3)Data layer (Datalayer Folder)<br />
          &nbsp; &nbsp; &nbsp; &nbsp; &nbsp; i)data.js file containes logic of Data Access layer<br />



