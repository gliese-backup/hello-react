import React from "react";

const App = () => {
  console.log("Hey from App");
  return (
    <div style={{ display: "flex", flexWrap: "wrap", gap: "1rem" }}>
      <Card
        title="Flutter"
        description="Flutter is a UI toolkit for building natively compiled applications for mobile, web, and desktop from a single codebase."
        source="https://img.icons8.com/?size=100&id=7I3BjCqe9rjG&format=png"
      />
      <Card
        title="React Native"
        description="React Native is a framework for building native apps with React."
        source="https://img.icons8.com/?size=100&id=p57acgidi9bj&format=png"
      />
    </div>
  );
};

function Card({ title, description, source }) {
  //   console.log(props);

  //   const title = props.title;
  //   const description = props.description;

  //   const { title, description } = props;
  return (
    <div style={{ border: "1px solid black", padding: "20px", width: "200px" }}>
      <h4>{title}</h4>
      <img src={source} alt="Picture of the day" style={{ width: "100px" }} />
      <p>{description}</p>
    </div>
  );
}

export default App;
