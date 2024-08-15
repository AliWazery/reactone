// src/components/Home.js
import React from "react";

const Home = () => {
  const articles = [
    {
      title: "first",
      content:
        "This is the first article about the latest trends in technology.",
      imageUrl: "/path/to/image1.jpg",
      link: "https://example.com/article1",
    },
    {
      title: "second",
      content:
        "This is the second article focusing on the importance of design in user experience.",
    },
    {
      title: "third",
      content:
        "A comprehensive guide on how to start your career in web development.",
      imageUrl: "/path/to/image2.jpg",
      link: "https://example.com/article3",
    },
  ];

  return (
    <div style={styles.home}>
      <header style={styles.header}>
        <h1>Welcome to Our Blog</h1>
        <p>
          Your source for the latest in technology, design, and development.
        </p>
      </header>

      <section style={styles.articlesSection}>
        {articles.map((article, index) => (
          <div key={index} style={styles.article}>
            <h2>{article.content}</h2>
            {article.title === "first" && (
              <>
                <img
                  src={article.imageUrl}
                  alt="Article"
                  style={styles.image}
                />
                <a href={article.link} style={styles.link}>
                  Read more
                </a>
              </>
            )}
            {article.title === "second" && <p>{article.content}</p>}
            {article.title === "third" && (
              <>
                <img
                  src={article.imageUrl}
                  alt="Article"
                  style={styles.image}
                />
                <a href={article.link} style={styles.link}>
                  Read more
                </a>
              </>
            )}
          </div>
        ))}
      </section>
    </div>
  );
};

const styles = {
  home: {
    maxWidth: "1200px",
    margin: "0 auto",
    padding: "20px",
  },
  header: {
    textAlign: "center",
    marginBottom: "40px",
  },
  articlesSection: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "20px",
  },
  article: {
    backgroundColor: "#f9f9f9",
    padding: "20px",
    borderRadius: "8px",
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
  },
  image: {
    maxWidth: "100%",
    height: "auto",
    margin: "20px 0",
    borderRadius: "4px",
  },
  link: {
    display: "inline-block",
    marginTop: "10px",
    padding: "10px 20px",
    backgroundColor: "#007BFF",
    color: "#fff",
    borderRadius: "4px",
    textDecoration: "none",
  },
};

export default Home;
