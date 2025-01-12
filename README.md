## Movie Search App (Sample Netflix Clone)
  A simple movie search app developed using React. Where you can log in using a username and password, you can see a list of movies on the home page and search for movies. 

  ## Features Used
  - **Forms** Login Form, Signup Form, Forget password. 
    Form validation - On blur and on submission form validation is applied. on Blur if the user enters an incorrect format an invalid message will show up. if the user submits the form without filling any field, the fields required message will show up.
    In the Login Form if the user enters the correct username and password the user will be redirected to the home page. otherwise, an error message will show up. Only Authenticated users can access the home page.
- **Movie List with Search Box**
    On the home page, movies are listed, and also you can search for movies.
- **Dark and Light Mode**
   A button to switch between dark and light mode.
  - **Logout**
- The logout button can be used to log out of the home page. if a user logs in, the user can't go back to the login page until he logs out.(Protected Router used)

- ## Technologies Used
- **React Router Dom** - To navigate between pages and for protected router
- **Custom Hooks** - Handling input fields, and managing local storage all this is performed using customs hooks
- **Context** -To manage state across components
-**Axios** - to make https request to fetch data from TMDB API
- **Tailwind CSS**- For styling and responsive user interface
- **Vite**- for bundling and serving app
-                   
  
  

  
