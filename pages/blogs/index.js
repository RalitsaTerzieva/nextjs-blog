

function BlogPage() {
    
    const blogPosts = [
      { id: 1, title: 'The Art of Web Development', content: "In this blog post, we'll explore the creative and technical aspects of web development. From designing beautiful user interfaces to writing efficient code, we'll uncover the artistry behind building modern websites." },
      {
        id: 2,
        title: "Mastering JavaScript: A Comprehensive Guide",
        content:
          "JavaScript is the backbone of modern web development. In this post, we'll dive deep into JavaScript concepts, best practices, and tips to help you become a JavaScript master.",
      },
      {
        id: 3,
        title: "React vs. Vue: Choosing the Right Framework",
        content:
          "React and Vue are two popular JavaScript frameworks for building user interfaces. We'll compare their features, strengths, and weaknesses to help you decide which one is the best fit for your next project.",
      },
      {
        id: 4,
        title: "Optimizing Website Performance for Better User Experience",
        content:
          "Slow-loading websites can deter users and harm your SEO. Learn how to optimize website performance by implementing techniques like code splitting, lazy loading, and image optimization.",
      },
      {
        id: 5,
        title: "A Beginner's Guide to Server-Side Rendering with Next.js",
        content:
          "Next.js is a powerful framework for server-side rendering in React applications. This beginner-friendly guide will walk you through the basics and demonstrate how to build SSR-enabled pages.",
      },
      {
        id: 6,
        title: "Creating a Blog with Next.js and Markdown",
        content:
          "In this tutorial, we'll build a fully functional blog using Next.js and Markdown. You'll learn how to set up dynamic routes, parse Markdown files, and create a seamless reading experience.",
      },
    ];
  
    return (
      <div>
        <h1>Blog</h1>
        <ul>
          {blogPosts.map((post) => (
            <li key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.content}</p>
            </li>
          ))}
        </ul>
      </div>
    );
  }
  
  export default BlogPage;
  