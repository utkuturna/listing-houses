## Getting Started

You need to provide an API key to run it locally create a .env.local file in project root and provide API key as in example below
```bash
NEXT_PUBLIC_API_KEY=xxxexamplekeyzzz
```

First, run the development server:
```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Description

- This is a simple project list some houses with prices and address info and an image
- There are some pre-defined cities on homepage. I did not limit other cities you can change url to see results for other cities in the Netherlands.
- If there is no result for current city I show no result found return home page not a 404 page
- You can click on the item to see the details with id.
- If you enter wrong ID in the url you will get a 404 page.
- Other simple features to add in the future mentioned as a @todo comment

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
