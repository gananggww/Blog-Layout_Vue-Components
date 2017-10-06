# Blog-Layout_Vue-Components

## Blog v0.1

### Feature

1. Login facebook
2. Management admin articles (create, delete, read)
3. Everyone can to be admin  (public blog)
4. Share Facebook (updated ASAP)
5. Everyone can read this blog page
6. Filter article (admin and public)

***

### Tool Usage

1. Facebook Login using fb npm
4. Backend Framework using **Node.js**
8. TDD (Test Driven Development) API Using **Mocha** and **Chai** (updated ASAP)
2. Authentication and authorisation using **jsonwebtoken** npm
3. Database using **mongodb** and **mongoose** as ODM
5. Comunication server and client using cors and ajax axios npm
6. Front-end Framework using **Vue.js** (**Vue-cli**, **Router**, **Components**)
7. Management state in client using **Vuex** (**Actions**, **Mutations**, **Getters**, **State**)
8. Facebook login front-end using vue-facebook-signin-button npm
9. UI Framework using **Semantic UI**

***

### Usage

#### server:

1. cd server/
2. npm install
3. nodemon app.js

#### client:

1. cd client/
2. npm install/
3. npm run dev

***

### Server Endpoint

|Endpoint     | Method | Access|
|-------------|:-------------:|----------------|
|`/self`      | GET           | Admin          |
|`/`          | GET           | Public         |
|`/:id`       | GET           | Public         |
|`/`          | POST          | Admin          |
|`/all`       | DELETE        | Admin          |

***

### Deployment Google Cloud Platform

1. Client in **Google Cloud Storage**
2. Server in **Compute Engine**
3. Open http://blog.ganang.xyz (updated ASAP)
