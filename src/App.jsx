import Header from "./components/Header";
import HelpfulResource from "./components/HelpfulResource";
import Section from "./components/Section";


export default function App() {
  const reactWithFreeCodeCamp = "https://www.youtube.com/watch?v=x4rFhThSX04&t=99s";
  const codeWithMosh = "https://members.codewithmosh.com/courses/enrolled/2037633";
  const geeksforgeeks = "https://www.geeksforgeeks.org/reactjs-introduction/?ref=roadmap";
  return (
    <>
      {/* <div className="app">Hello Atlas</div> */}

      {/* Render Components */}
      <Header />
      <div className="app">

        {/* Section 1: What is React? */}
        <Section title="What is React?">
          <p>React is a JavaScript library for building user interfaces (<abbr title="User interfaces">UIs</abbr>).
            It allows developers to create reusable UI components, manage the state of
            applications efficiently, and update the DOM dynamically without
            reloading the entire page each time. React is maintained by Meta (formerly
            Facebook) and a community of developers.
          </p>
        </Section>

        {/* Section 2: Benefits of React  */}
        <Section title="Benefits of React">
          <ul>
            <li>Reusable components enhance code reusability and maintainability.</li>
            <li>Efficient rendering using the Virtual DOM improves perfermance.</li>
            <li>Flexibility in integrating with other libraries and frameworks.</li>
            <li>Large ecosystem and community support with many libraries and tools.</li>
            <li>Easy to learn for developers familiar with JavaScript.</li>
          </ul>
        </Section>

        {/* Section 3: Helpful Resources  */}
        <Section title="Helpful resources">
          <HelpfulResource
            label="Learn React JS Full Beginner's Tutorial with freeCodeCamp.org"
            link={reactWithFreeCodeCamp}
          />
          <HelpfulResource
            label="React 18 for Beginners with Mosh Hamadeni"
            link={codeWithMosh}
          />
          <HelpfulResource
            label="ReactJs with Geeks for Geeks"
            link={geeksforgeeks}
          />
        </Section>
      </div>
    </>
  );
}
