# Invoicer

An open-source app to generate / share invoices and download as PDF.

## Features

1. Generate invoice
2. Download in PDF
3. Share invoice with clients using shareable link
4. Print invoice

## Limitations

1. Once an invoice is generated then there's no way to edit it, you have to create a new one in order to update any information. (we're actively working to overcome this limitation)

## Future Goals

1. Email invoice
2. Company Logo upload
3. Change Currency through Dropdown
4. Date / Number Fields support

## Project Setup

1. Install Mongo DB for your OS
2. Run `git clone <repo_url>`
3. Run `yarn install` or `npm install` in project directory
4. Run `yarn dev`

- If project ran successfully then it'll log all the routes configured in the app and status of mongo db connection.

## Tools and Technologies Used

- [Fusion.js - Uber's universal web apps framework](https://fusionjs.com/)
- [Mongo DB](https://www.mongodb.com/)
- [Puppeteer - Headless Chrome](https://github.com/GoogleChrome/puppeteer)
- [Material UI](https://material-ui.com/)
- [Formik](https://github.com/jaredpalmer/formik)
