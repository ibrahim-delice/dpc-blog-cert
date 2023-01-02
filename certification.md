# Part 1: Github

What is a monorepo and what pros and cons does it have?

- Monorepo is (in short) a repository that holds every application and package in one place. Pros: clean arcitechture, package-splitting, reusability. Cons: can be a challenge getting used to, dependency-handling. slower type-checking.

What is a PR and what are the characteristics of a good PR you think?

- You want your code merged into the codebase - you'll need to create a PR. I do think that a simple PR (few changed lines), focused changes (not changing stuff that has _nothing_ to do with your own task), readable description of the PR is what makes it a good PR.

# Part 2: UI Components

Explain the different modes of building in NextJs, SSR, SSG, ISR etc + Explain the getStaticProps, getStaticPaths and getServerSideProps functions.

- SSR: execute on the server (best used with dynamic data) - getServerSideProps
- SSG: execute on build (best used for static sites) - getStaticProps
- ISR: regenerate page _after_ it has been built every N seconds. - getStaticProps - revalidate

Using a getServerSideProps function put specific requirements on the server that hosts the web app. Why?

- ?

In this task we solve this by creating a file called [id].tsx. What is an alternative way and when would you use that? There are two ways (at least) to do this. Either using the Link component or programmatically using the router. What are pros and cons of either? Bonus: What do you get automatically when using Link that you have to do manually using the router. (hint: it increases perceived performance)

- create a folder named [id] and have an index.tsx file that handles the logic for the dynamic page. this was I can create more nested routes for that specific page if needed (scalability).
- link = SEO friendy as it creates an `<a>` tag for crawlers to detect whereas router behaves like a standard window.location object and isn't SEO friendly.

# Part 4: Redux Toolkit

When do you need a global state manager like RTK?

- When you need a shared state. Does this justify the need RTK? No. You can create your own state management or use alternatives.

When do you not need it?

- When you don't need to share your state and you have a small application. There are too much configuration to even consider using Redux for smaller applications.

What could be used instead?

- Zustand, Recoil and trillions other libraries that can handle shared state (and probably much more) for you. You could also "just" implement a React Context that acts like a state management.

What is a 'slice' in RTK? And why is it a nice concept?

- slice is basically a method that combines reducer functions, action creators and action types. It's very simplified compared to the "old" ways of handling state slices with Redux.

# Part 5: RTK Query

What is RTK Query usued for?

- handling data fetching, caching and storing inside redux store.

Where does the 'wrapper' come from and what does it provide? What data does the context include?

- wrappers purpose is to support server side rendering with nextjs and hydration.

# Part 6: RTK Query

MSW intercept network requests, what are other ways to mock data? What is the main advantage of using MSW?

- creating your own dummy data (json) and use that to mock, or use libraries that handles the mocking of data for you.
- advantage of MSW is basically intercepting network request. this can be handy if your backend is not ready or you have no internet connection.
