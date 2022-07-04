# Booking UI App

This is the starter app for the [Pro Tailwind](https://protailwind.com) workshops.

There will be 4 half-day workshops (3-4 hours of content, not counting the breaks). Here are the topics for these:

**1. Tailwind CSS advanced gymnastics**: A series of CSS challenges where we rebuild (or complete/fix) certain interesting parts of the Booking UI App, such as the corner ribbon, caret cutoff with shadow, scroll list with fading mask, animated stripes background, etc. A workshop on advanced CSS techniques and how to approach them with Tailwind CSS.

**2. Traditional theming with Tailwind CSS**: In this workshop, we create multiple custom color themes, and implement them in the Booking UI App. We'll leverage CSS custom properties (CSS variables) and the Tailwind Plugin API to implement our theming strategy.

**3. Extracting reusable UI components with Tailwind CSS**: Throughout this workshop, we'll identify opportunities to create reusable components from elements of the existing Booking UI App. We'll look at to handle multiple style variants in a "Just-in-Time engine friendly" way, and create a little documentation website to showcase their different states and variants.

**4. Scaling up Tailwind CSS with a monorepo architecture**: In this workshop, we'll see how to consume the same Tailwind CSS powered UI components across multiple projects, without the need to publish packages on a registry. We'll move our Booking UI app (and a couple of other projects) to a monorepo setup, which will also host the UI packages that will be shared across all projects.

---

## About the Booking UI App

This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

## Getting Started

First, run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

You can start editing the page by modifying `pages/index.js`. The page auto-updates as you edit the file.

[API routes](https://nextjs.org/docs/api-routes/introduction) can be accessed on [http://localhost:3000/api/hello](http://localhost:3000/api/hello). This endpoint can be edited in `pages/api/hello.js`.

The `pages/api` directory is mapped to `/api/*`. Files in this directory are treated as [API routes](https://nextjs.org/docs/api-routes/introduction) instead of React pages.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js/) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/deployment) for more details.
