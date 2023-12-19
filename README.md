# Movie Website

## Overview

This is a anime website built using **React, Vite, Redux Toolkit, Redux Saga**. The project aims to provide a user-friendly interface for users to explore and discover information about movies.

This is a React application built with Vite and TypeScript, aiming to provide a platform for anime enthusiasts to explore and discover their favorite shows. The project leverages **Redux** for state management, **Redux-Saga** for handling asynchronous actions, **SCSS** for styling, **Jest** for testing.

Styling is achieved using **SCSS** to enhance maintainability and provide a more structured approach to CSS. The styles are modularized and organized in the respective component folders.

The application uses **Redux** for state management. The state logic is divided into actions, reducers, and sagas to handle asynchronous operations. The Redux store is configured in **`redux/store.ts`**.

## **Table of Contents**

- [Installation](#installation)
- [Usage](#usage)
- [Features](#features)
- [Folder Structure](#folder-structure)
- [Testing](#testing) 
- [License](#license) 

## **Installation**

Make sure you have [Node.js](https://nodejs.org/) and [npm](https://www.npmjs.com/) installed on your machine.

```bash
# Clone the repository
git clone https://github.com/PhamSinh/ReactJs

# Change directory to the project folder
cd movie-website

# Install dependencies
npm install

```

## **Usage**

```bash
# Start the development server
npm run dev
```
Visit (http://localhost:5173) in your browser to see the application.

## **Features**
- **Browse Movies:** Explore a vast collection of movies titles.
- **Search Functionality:** Easily find specific anime titles.
- **Detailed Information:** View comprehensive details about each anime.
- **State Management:** Redux and Redux-Saga for efficient state management.
- **Styling:** SCSS for a modular and maintainable styling approach.
- **Testing:** Jest for unit testing to ensure code reliability.

## **Folder Structure**
The project structure is organized as follows:

```bash
project-root/
|-- src/
|   |-- components/
|   |-- layout/
|   |   |-- Layout/
|   |   |-- common/
|   |-- pages/
|   |-- services/
|   |-- saga/
|   |-- store/
|   |-- __test__/
|   |-- App.tsx
|-- public/
|-- .gitignore
|-- package.json
|-- tsconfig.json
|-- README.md
```

- `src`: Contains the source code of the application.
  - `components`: Reusable UI components.
  - `layout`: Individual pages or views.
  - `store`: Redux-related files (actions, reducers, sagas).
  - `models`: Define models.
  - `services`: Services to get data.
  - `data`: Mock data.
  - `__test__`: Unit tests using Jest.
- `public`: Static assets.

## **Testing**
Unit tests are written using Jest. You can run the tests with the following command:
```bash
npm run test
```
## **License**
This project is licensed under the SinhPV4.