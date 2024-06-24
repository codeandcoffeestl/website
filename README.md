# Website

Official Code and Coffee Website Development

## Frontend

---

### To get the frontend going:

`$cd client`

`$npm install`

---

Node Version: 18.13

React Version: 18.2

Vite Version: 5.1.3 https://vitejs.dev/

Typescript Version: ^5

- To Open Development Server
  `npm run dev`
- To Compile Project
  `npm run build`

Prettier - Code Formatter

PrimeReact Version: 10.5.1 https://primereact.org/

- Configured as a context in main.tsx
- Used a PrimeReact's lite TailwindCSS template - in assets/custom-theme
- Customized this theme in './assets/custom-theme/tailwind-custom/\_variables.scss' with our color palate:
  - PrimaryColor: "#4B2E17"
  - SecondaryColor: "#17A2B8"
  - WAccentColor: "#FAF9F6"
  - GAccentColor: "#D3D3D3"
  - OHighlightColor: "#FFA500"
  - YHighlightColor: "#FFD700"
- Add sass to be able to customize template

TailwindCSS Version: 3.4.1 - https://tailwindcss.com/docs/guides/vite

react-router-dom Version: 6.22.2 - https://www.npmjs.com/package/react-router-dom

Font Awesome Version: https://docs.fontawesome.com/
- icons Version: 6.5.1 - @fortawesome/free-brands-svg-icons
- react Version: 0.2.0 - @fortawesome/react-fontawesome
-react : @fortawesome/react-fontawesome

Google Maps Api: react-google-maps - https://visgl.github.io/react-google-maps/

## Backend

We are using a serverless backend build on AWS Lambdas build using ASP.NET 8.

I used an AWS Lambda Template to get started, a more detailed Readme is in the project directory.

---

### To be able to test the backend:

Make sure you have .NET 8 SDK installed

`$dotnet restore`

To test the lambda locally:

`$dotnet build`

`dotnet run`

To build lambda on AWS:

```
$cd "lambda/src/lambda"
$dotnet lambda deploy-serverless

```

---

# Packages

I added the following packages in order to use this lambda as a client in order to communicate with Meetup's API:

- GraphQL.Client 6.1.0
- GraphQL.Client,Serializer.Newtonsoft 6.1.0
