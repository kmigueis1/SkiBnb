# SkiBnB

  SkiBnb is a web application based on the popular website Airbnb. It utilizes React and Redux for the frontend of the application and Rails for the backend. It allows hosts to list their winter sport friendly homes for rent to the general public on a day to day basis. Users can search for and book homes as well as review their stays.


## Features

### Home Listings Index

  Home Listings are displayed with their image along with additional information on the main page such as the title of the listing, the price per day, the number of beds and baths, and their average review score in stars as well as the total number of existing reviews for the home. The index also contains a Google map that can be panned and will mark the locations of any available homes currently in the map view.

### Home Details

  The detailed home view displays a larger image of the home along with additional details about the listing including amenities.
  There is a booking widget appropriately positioned on the page and any existing reviews for the home are listed at the bottom of the page.

### Home Search

  The nav bar provides a search field where the user can search by address, city, country, or place of interest. The Google map will then pan to that location and show nearby available homes within the map view. The list of homes will dynamically filter to only show the homes with locations inside the boundaries of the map.

### Bookings

  The user can use the booking widget in the home details view to select a check-in and check-out date as well as a quantity of guests to create a booking for that home. Users cannot make overlapping bookings and must be logged in to use the widget.
  In the "my bookings" section of the user's profile, the user can view all of his/her past and current bookings along with any reviews they left on the home. They can choose to cancel a current booking and they can click a link on any completed bookings to arrive at a review form to submit a review. Multiple reviews for the same booking cannot be made. Any reviews created will also be displayed on the home's detail page.

### Reviews

  From the "my bookings" page in the user account profile, the user can click a link on an unreviewed booking to go to a review form. The review form allows the user to select a star rating that dynamically highlights the stars based on the chosen rating, and enter a review in the provided text area for submission.

### User Profile

  Once signed in, the user can click the user avatar icon on the right side of the nav bar to open a dropdown. The user can click on "Edit Profile" to access their edit profile page. From this page the user can update his/her profile information as well as load a profile picture. The new profile picture will appear in the avatar icon and also any reviews the user has left on any homes.
