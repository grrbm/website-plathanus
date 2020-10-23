<!-- TABLE OF CONTENTS -->
## Table of Contents

* [About the Project](#about-the-project)
  * [Built With](#built-with)
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contact](#contact)
* [Acknowledgements](#acknowledgements)



<!-- ABOUT THE PROJECT -->
## About The Project

[![Product Name Screen Shot][product-screenshot]](https://example.com)

This project is a straightforward chat application. It uses websockets for communication between server and clients, and updates the chat screen in real time.

### Built With
The project was built with the MERN stack for web development (MongoDB, Express, React.js, Node.js)
* [MongoDB](https://www.mongodb.com/)
* [Express](https://expressjs.com/)
* [React.js](https://reactjs.org/)
* [Node.js](https://nodejs.org/)


### Installing Docker Desktop (Windows)
The application is set up to run in a Docker environment.

1. Download Docker Desktop
 ```
https://docs.docker.com/docker-for-windows/install/
 ```
2. From the Docker Desktop menu, you can toggle which daemon (Linux or Windows) the Docker CLI talks to. Select Switch to Linux containers to use Linux containers (the default).

### Application Installation (Windows)
The application can be installed and tested in a few simple steps.

1. Clone the repo, and open the cloned repo's folder.
  ```sh
git clone https://github.com/grrbm/website-plathanus
  ```
2. Open 'backend' folder and install
  ```sh
  npm install
  ```
3. Open 'frontend' folder and install
  ```sh
  npm install
  ```
4. On the root folder of the project, run
  ```JS
  docker-compose up --build
  ```
5. When we see the following message on the console:




[![Product Name Screen Shot][thing]](https://example.com)



\n
You can go to your browser, type: 
  ```sh
localhost
  ```
and press enter. The app use the default port (80), so just "localhost" is enough. 

<!-- USAGE EXAMPLES -->
## Usage

Open Powershell, and run docker ps to see what Docker images are mounted

  ```sh
docker ps
  ```
[![Product Name Screen Shot][join-screenshot]](https://example.com)

As an admin, you have access to the Admin Area panel.

You can use this panel to filter the chat's messages by Date and Time, as well as by username. It's also possible to reverse the order the chat's messages appear, Newest or Oldest messages first.

[![Product Name Screen Shot][feature-screenshot]](https://example.com)


<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.



<!-- CONTACT -->
## Contact

Guilherme Reis - [LinkedIn](https://www.linkedin.com/in/guilherme-reis-1691b597/) - [Portfolio](https://guilhermereisrbm.netlify.app/) -  grrbm2@gmail.com

Project Link: [https://github.com/grrbm/chat-mern](https://github.com/grrbm/chat-mern)



<!-- ACKNOWLEDGEMENTS -->
## Acknowledgements
* [Socket.io](https://socket.io/)
* [JsonWebToken](https://www.npmjs.com/package/jsonwebtoken)
* [Mongoose](https://mongoosejs.com/)
* [Axios](https://github.com/axios/axios)
* [react-datetime](https://github.com/YouCanBookMe/react-datetime)
* [sweetalert2](https://sweetalert2.github.io/)
* [moment](https://momentjs.com/)





<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->
[contributors-shield]: https://img.shields.io/github/contributors/othneildrew/Best-README-Template.svg?style=flat-square
[contributors-url]: https://github.com/othneildrew/Best-README-Template/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/othneildrew/Best-README-Template.svg?style=flat-square
[forks-url]: https://github.com/othneildrew/Best-README-Template/network/members
[stars-shield]: https://img.shields.io/github/stars/othneildrew/Best-README-Template.svg?style=flat-square
[stars-url]: https://github.com/othneildrew/Best-README-Template/stargazers
[issues-shield]: https://img.shields.io/github/issues/othneildrew/Best-README-Template.svg?style=flat-square
[issues-url]: https://github.com/othneildrew/Best-README-Template/issues
[license-shield]: https://img.shields.io/github/license/othneildrew/Best-README-Template.svg?style=flat-square
[license-url]: https://github.com/othneildrew/Best-README-Template/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/othneildrew
[product-screenshot]: images/screenshot.png
[feature-screenshot]: images/filterby.png
[join-screenshot]: images/joinscreen.PNG
[thing]: images/client_1.PNG
