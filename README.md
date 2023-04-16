![Travlr Getaways logo](media/91988b4b14b9a5737ccf8b5cbac1a1ae.png)

Travlr Getaways

# **CS 465 Project Software Design Document**

Version 4.0

## Table of Contents

Contents

[**CS 465 Project Software Design Document**](#cs-465-project-software-design-document)

[Table of Contents](#table-of-contents)

[Document Revision History](#_Toc132509226)

[Executive Summary](#_Toc132509227)

[Design Constraints](#_Toc132509228)

[System Architecture View](#_Toc132509229)

[Component Diagram](#component-diagram)

[Sequence Diagram](#sequence-diagram)

[Class Diagram](#_Toc132509232)

[API Endpoints](#_Toc132509233)

[The User Interface](#_Toc132509234)

## [Document Revision History](#_heading=h.lnxbz9)

| Version | Date       | Author         | Comments                    |
|---------|------------|----------------|-----------------------------|
| 4.0     | 04/16/2023 | Douglas Bolden | Final Commit – MAJOR UPDATE |

## [Executive Summary](#_heading=h.35nkun2)

The framework that will be utilized for the creation of the Travlr Getaways website is known as the MEAN stack. This is an abbreviation that stands for MongoDB, Express.js, Angular.js, and Node.js. These four technologies allow the creation of the website while allowing JSON to be handled extremely efficiently. This in turn allows the developers to complete the job correctly, and in timely manner. The architecture of the MEAN stack is efficient.

-   The Web side of the architecture will be handled by Angular.js, which allows for elegant designs on webpages.
-   The Server side of the architecture will be handled by Node.js, which will utilize the Express.js framework.
-   The Database side of the architecture will be handled by MongoDB. This allows information to be pulled from a database, allowing the website to run at great speeds.

More specifically, Angular.js will pull information from Node.js (which pulls information from Express.js). Then Node.js will pull information from MongoDB and send this information back to Angular.js so that it may be displayed.

The customer-facing side of the application will allow users to view the trips that are online and book these getaways. This should be a relaxing experience, so I am going to implement a dark mode, as most websites need a dark mode to work with people who have sensitivities to light. The MPA (Multi-Page Application) is built utilizing Express.js and handlebars frameworks. The only downside is that it may take a few seconds to load the page, but the website will be extremely fast.

The administrator single-page application, or SPA, will be a SINGLE page with all the information from the website loaded onto it and ready to view from the server for each page. The SPA (Single Page Application) is built utilizing the Angular.js framework. This will make all pages much easier to edit and will allow the administrators access to adding/deleting new posts and information that becomes immediately available for all users, as they need it.

## [Design Constraints](#_heading=h.1ksv4uv)

The limitations of the website will include creativity for the actual website AND:

-   MongoDB:
    -   Maximum BSON document size Is 16 megabytes to prevent RAM overuse.
    -   Nested Depth of BSON documents is capped at 100. Each object or array is counted as a level. (If you hit this limit, you may be doing some extreme work.)
    -   Database names are NOT case-sensitive. It is common practice to name all databases with lowercase names AND without special characters. These names also need to be less than 64 characters in length.
    -   No duplicate field names.
    -   [FOR MORE INFORMATION, CLICK ME.](https://www.mongodb.com/docs/manual/reference/limits/)
-   Express.js
    -   We use express to render the website from a server standpoint. This is important for the delivery of content to your customers when the time arrives.
-   Angular.js
    -   Angular allows us to create the user interface that both the administrator and user will interact with. We will also need to have Handlebars installed. Handlebars allows us to work with the JavaScript to deliver dynamic content.
-   Node.js
    -   Node.js allows us to be scalable, so that we can bring in all the customers without issue, if it is combined with MongoDB.

## [System Architecture View](#_heading=h.44sinio)

### Component Diagram

![Please see the hyperlinked Word Document "CS 465 Full Stack Component Diagram Text Version" for alternative text. ](media/bdeca943802bc76c76daba613b26a021.png)

There are three main components: Client, Database, and Server. This is a diagram that describes the relationship between all of these components.

-   Client component contains four sub-components: **Client Session**, **Graphic Library**, **Traveler Portfolio**, and **Web Browser**.
    -   The Client component is where the action starts. The user starts up a **Web Browser** and loads into a **Client Session**. When the user starts the **Web Browser**, it allows the **Client Session** to send information to the **Authentication Server** to make sure that the user isn’t logged in via a connection to a port. After this has completed, the **Traveler Portfolio** would show up and allow the user to view all the information on the website. When the **Traveler Portfolio** starts up, it forces the **Graphic Library** to start up alongside of the main website.
        -   Continue in Database to see what happens next.
-   Database component contains one sub-component: **MongoDB**.
    -   After the website has been accessed via the **Traveler Portfolio**, the **MongoDB** component updates the website to reflect the changes in the **MongoDB** database. This is required for the website to function properly. Continue in Sever to see what happens next.
-   Server component contains four sub-components: **Authentication Server**, **Mongoose ODM**, **Server Session**, and **Traveler Database**.
    -   **MongoDB** is required for **Mongoose ODM** to work properly. **Mongoose ODM** is a way to work with schemas effectively and allows coding at much higher speeds. **Mongoose ODM** is required for the **Server Session** to work properly.  **Server Session** checks the user information against the current database of users and allows the user/admin to login. The information is sent along the **Server Session** to the **Authentication Server** to make sure that the user is an actual user. It sends this authentication information to the **Client Session** which then allows the process to start over.
-   All of this leads to a useful webpage that utilizes Handlebars and is a great example of the MEAN stack architecture.

### Sequence Diagram

![Sequence Diagram](media/b7a5786c2df6315b876e4e22d2c77734.png)

\<Describe the flow of logic in the web application based on the sequence diagram. Be sure to describe the interactions between the layers, or tiers, of the full stack application. It will be helpful to include significant processes such as Sign In, Trips, and Admin interactions when referring to the sequence diagram.\>

We start with an Actor (You). The actor gets on a computer and goes to <https://(websitelink).com/(website-page)>. After having done so, the Browser pulls a client-side view/template into the browser showing the actor what information is on the webpage. When the user clicks on anything that has an anchor tag attached to it, the controller that is handling the movement between pages invokes an HTTP Client that acts as a mediator between the client-side and server-side. The HTTP Client then sends a request for information from the controller of the API information for each page. Whichever page is called is processed and the request is then sent to a MongoDB Database. This database sends all the information requested back to the user and displays it for the user to see and waits for a new request to show information as it is requested.

## Class Diagram

![Diagram, schematic Description automatically generated](media/7b2bebd8faf39d3d554ee1a740c87f18.png)

There are 12 Classes to be Described:

1.  **Membership_Admin** is an aggregation of MemberAccount and has one or more itineraries.
    1.  Public boolean function creditpoints() returns an itinerary.
    2.  Public int function getpoints() returns an int, membernum, and a string, frequent_airline.
    3.  Public boolean function validate() returns an int, membernum, and a string, frequent_airline.
2.  **MemberAccount** inherited by TravelAgent and aggregated by Membership_Admin.
    1.  Public int variable membernumber.
    2.  Public string variable frequent_airline.
    3.  Public int variable memberstatus.
    4.  Public string variable memberclub.
3.  **Travel_Agent** inherits Member account and is realized by Itinerary, HotelBooking, FlightBooking and CruiseBooking.
    1.  Public int variable companionnum.
4.  **Itinerary** realizes Travel_Agent and is associated with Membership_Admin, where there must be 1 or more Membership_Admins. It also has associations with CruiseInfo, FlightInfo, HotelInfo, HotelBooking, FlightBooking and CruiseBooking.
    1.  Public Itinerary function BookPackage() returns an itinerary.
    2.  Public FlightInfo function BookFlight() returns an itinerary.
    3.  Public HotelInfo function BookHotel() returns an itinerary.
    4.  Public CruiseInfo function BookCruise() returns an itinerary.
5.  **CruiseBooking** realizes Travel_Agent and CruiseInfo. It is also associated with Itinerary where there can be 0 to many of either class, CruiseBooking or Itinerary.
    1.  Public CruiseInfo function getCruise() returns TravelerInfo and CruiseInfo.
6.  **FlightBooking** realizes Travel_Agent and FlightInfo. It is also associated with Itinerary where there can be 0 to many of either class, FlightBooking or Itinerary.
    1.  Public FlightInfo function getFlight() returns TravelerInfo and FlightInfo.
7.  **HotelBooking** realizes Travel_Agent and HotelInfo. It is also associated with Itinerary where there can be 0 to many of either class, HotelBooking or Itinerary.
    1.  Public HotelInfo function getHotel() returns TravelerInfo and HotelInfo.
8.  **CruiseInfo** is aggregated by TravellerInfo, inherits TripInfo, and is realized by Itinerary and CruiseBooking.
    1.  Public string variable name.
    2.  Public string variable cabintype.
    3.  Public float variable price.
9.  **FlightInfo** is aggregated by TravellerInfo, inherits TripInfo, and is realized by Itinerary and FlightBooking.
    1.  Public string variable name.
    2.  Public string variable seatclass.
    3.  Public float variable price.
10. **HotelInfo** is aggregated by TravellerInfo, inherits TripInfo, and is realized by Itinerary and HotelBooking.
    1.  Public string variable name.
    2.  Public int variable star.
    3.  Public string variable location.
    4.  Public int variable roomsrequested.
    5.  Public float variable price.
11. **TripInfo** is inherited by CruiseInfo, FlightInfo, and HotelInfo.
    1.  Public int starting_date.
    2.  Public int returning_date.
    3.  Public string origin.
    4.  Public string destination.
12. **TravellerInfo** aggregates CruiseInfo, FlightInfo, and HotelInfo.
    1.  Public float totalprice.
    2.  Public int totalmiles.
    3.  Public string stopover.

## [API](#_heading=h.2jxsxqh) Endpoints

| **Method** | **Purpose**                     | **URL**                            | **Notes**                                                                                |
|------------|---------------------------------|------------------------------------|------------------------------------------------------------------------------------------|
| **GET**    | Retrieve list of blogs          | /api/blogs                         | Returns all active blog posts                                                            |
| **GET**    | Retrieve list of ‘latest’ posts | /api/latest                        | Returns all active ‘latest’ posts                                                        |
| **GET**    | Retrieve list of meals          | /api/meals                         | Returns all active meals                                                                 |
| **GET**    | Retrieve list of news posts     | /api/news                          | Returns all active news posts                                                            |
| **GET**    | Retrieve list of rooms          | /api/rooms                         | Returns all active rooms                                                                 |
| **GET**    | Retrieve list of testimonials   | /api/testimonials                  | Returns all active testimonials                                                          |
| **GET**    | Retrieve list of trips          | /api/trips                         | Returns all active trips                                                                 |
| **GET**    | Retrieve single blog            | /api/blogs/:blogCode               | Returns single blog instance, identified by the title passed to the request URL          |
| **GET**    | Retrieve single ‘latest’ post   | /api/latest/:latestCode            | Returns single ‘latest’ post instance, identified by the title passed to the request URL |
| **GET**    | Retrieve single meal            | /api/meals/:mealCode               | Returns single meal instance, identified by the mealName passed to the request URL       |
| **GET**    | Retrieve single news post       | /api/news/:newsCode                | Returns single poster, identified by the posterName passed to the request URL            |
| **GET**    | Retrieve single room            | /api/rooms/:roomCode               | Returns single room instance, identified by the name passed to the request URL           |
| **GET**    | Retrieve single testimonial     | /api/testimonials/:testimonialCode | Returns single testimonial instance, identified by the person passed to the request URL  |
| **GET**    | Retrieve single trip            | /api/trips/:tripCode               | Returns single trip instance, identified by the code passed to the request URL           |
| **POST**   | Create single blog              | /api/blogs/                        | Creates single blog instance                                                             |
| **POST**   | Create single ‘latest’ post     | /api/latest/                       | Creates single ‘latest’ post instance                                                    |
| **POST**   | Create single meal              | /api/meals/                        | Creates single meal instance                                                             |
| **POST**   | Create single news post         | /api/news/                         | Creates single poster                                                                    |
| **POST**   | Create single room              | /api/rooms/                        | Creates single room instance                                                             |
| **POST**   | Create single testimonial       | /api/testimonials/                 | Creates single testimonial instance                                                      |
| **POST**   | Create single trip              | /api/trips/                        | Creates single trip instance                                                             |
| **PUT**    | Update single blog              | /api/blogs/:blogCode               | Updates single blog instance, identified by the title passed to the request URL          |
| **PUT**    | Update single ‘latest’ post     | /api/latest/:latestCode            | Updates single ‘latest’ post instance, identified by the title passed to the request URL |
| **PUT**    | Update single meal              | /api/meals/:mealCode               | Updates single meal instance, identified by the mealName passed to the request URL       |
| **PUT**    | Update single news post         | /api/news/:newsCode                | Updates single poster, identified by the posterName passed to the request URL            |
| **PUT**    | Update single room              | /api/rooms/:roomCode               | Updates single room instance, identified by the name passed to the request URL           |
| **PUT**    | Update single testimonial       | /api/testimonials/:testimonialCode | Updates single testimonial instance, identified by the person passed to the request URL  |
| **PUT**    | Update single trip              | /api/trips/:tripCode               | Updates single trip instance, identified by the code passed to the request URL           |
| **DELETE** | Delete single blog              | /api/blogs/:blogCode               | Deletes single blog instance, identified by the title passed to the request URL          |
| **DELETE** | Delete single ‘latest’ post     | /api/latest/:latestCode            | Deletes single ‘latest’ post instance, identified by the title passed to the request URL |
| **DELETE** | Delete single meal              | /api/meals/:mealCode               | Deletes single meal instance, identified by the mealName passed to the request URL       |
| **DELETE** | Delete single news post         | /api/news/:newsCode                | Deletes single poster, identified by the posterName passed to the request URL            |
| **DELETE** | Delete single room              | /api/rooms/:roomCode               | Deletes single room instance, identified by the name passed to the request URL           |
| **DELETE** | Delete single testimonial       | /api/testimonials/:testimonialCode | Deletes single testimonial instance, identified by the person passed to the request URL  |
| **DELETE** | Delete single trip              | /api/trips/:tripCode               | Deletes single trip instance, identified by the code passed to the request URL           |

## The User Interface

This is the UI:![](media/5d68e78e70f4bca354bb73041b35b2c1.png)

This is what is looks like when a trip is added:

![](media/62a5baf3c9443449fed0562a6d5a5f10.png)

This is the edit screen for a trip:

![](media/d784f80897f8e08d6139ff68f918e894.png)

This is the updated MPA screen with the trip added:

![](media/e228a9250f2b8d67b61c888d96b811cd.png)

Angular has a vastly different look when compared to the Express (Hyper-Text Markup Language) HTML customer-facing page, as the entire purpose of the Angular page is to view a Single-Page Application (SPA) while the Express HTML customer-facing page is a Multi-Page Application (MPA). In the MPA, all the information that is in the HTML portion of the website is in the form of Express, HTML, and Handlebars. These three frameworks create webpages that display what the customer sees. In the SPA, all the information that is in the HTML portion of the website is in the form of Angular and Cross-origin resource sharing (CORS). CORS “is an HTTP-header based mechanism that allows a server to indicate any origins (domain, scheme, or port) other than its own from which a browser should permit loading resources” (*Cross-origin resource sharing (CORS) - http: MDN* 2023). These two frameworks work together to make a webpage that shows only the trips on the website that allows someone to add and delete trips in the application without showing them anything else on the website. Angular uses the MVVM (Model-View-ViewModel) architecture. This allows the View to be passed to and from the ViewModel through databinding. The viewmodel is passed directly to the model, and the model sends back the logic and data asynchronously. Express uses the MVC (Model-View-Controller) architecture. In MVC, the model defines all data structures, is manipulated by the controller, and updates the view. The view (User Interface) is sometimes updated directly from the controller, receives updates from the model, and sends input to the controller. Finally, the controller, which obviously holds all control logic, manipulates the model, receives input from the user, and sometimes updates the view directly.

The SPA allows the user to see all the information that is available from the database while not showing any of the bloating information of the MPA. This allows the user to add and edit trips without seeing the rest of the webpage and adds the trip or edits the trip that is in the database. This is the same database that is connected to both the SPA and MPA. Some of the best advantages of the SPA is Client-side rendering, Dynamic Content, Modular Design, and a better-feeling mobile experience. This allows the user to feel more engaged and allows the developer to easily recognize and change parts of the SPA. The disadvantages of an SPA include longer initial loading times, Search Engine Optimization (SEO), and browser compatibility. SPAs support most browsers but are limited by aged browsers.

The process of testing the SPA database is simple. The first thing that you will need is an application known as Postman. When you are in Postman, create a new collection and then sequentially create a new request. In the ribbon at the top of this request window, you will need to input the location of the API that you are going to be testing. In this case, it is ‘http://localhost:3000/api/trips’. To the left of the ribbon, you will see a dropdown menu. Select GET to display all of the information that is currently on the database. Select POST to add a new trip passing in some trip information in the ‘body’ of the request.

![](media/36bb196907530ad4cbf14213320cfafe.png)

Select PUT to update a trip, you will need to update the link to reflect the trip that you want to update. In this case, it would be “http://localhost:3000/api/trips/TEST2”. Change the parameters of the body again to what you want, and it will be updated accordingly.

![](media/b1b77b3f8221316b76aeb465608ccecb.png)

When you try to GET the database information again, this will now be updated with what you passed in the body. You may get authentication errors, data validation errors, data retrieval errors, network errors, syntax errors, and possibly, though in our case not so much, connection errors. If you aren’t allowed to see the information on the database, you will get multiple errors. If you don’t type things in correctly, you will get multiple errors. All these errors can be fixed easily, however. Just make sure that what you are passing is formatted correctly.

References

Mozilla. (2023, April 6). *Cross-origin resource sharing (CORS) - http: MDN*. MDN. Retrieved April 10, 2023, from <https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS>
