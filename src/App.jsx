import Header from "./components/Header";
import Section from "./components/Section";
import HelpfulResource from "./components/HelpfulResource";
import AboutMe from "./components/AboutMe";
import Footer from "./components/Footer";

function App() {
  const reactWithFreeCodeCamp =
    "https://www.youtube.com/watch?v=x4rFhThSX04&t=99s";
  const codeWithMosh =
    "https://members.codewithmosh.com/courses/enrolled/2037633";
  const geeksforgeeks =
    "https://www.geeksforgeeks.org/reactjs-introduction/?ref=roadmap";
  const react_dev_org = "https://react.dev/reference/react";
  return (
    <div className="app">
      <Header />
      <Section title="What is React?">
        <p>
          React is a JavaScript library for building interactive user interfaces
          (<abbr title="User Interface">UI</abbr>s) for web applications. As a
          declarative and component-based library, React allows developers to
          build reusable UI components, making code more organized and
          maintainable. It efficiently manages application state and utilizes a
          Virtual <abbr title="Document Object Model">DOM </abbr>
          approach to optimize rendering performance by minimizing direct
          manipulations of the actual{" "}
          <abbr title="Document Object Model">DOM</abbr>. This leads to fast and
          dynamic updates without requiring full page reloads. React is
          maintained by Meta (formerly Facebook) and a large community of
          developers.
        </p>
      </Section>
      <Section title="Benefits of React">
        <ul>
          <li>
            <strong>Reusable Components:</strong> React's component-based
            architecture allows developers to create reusable UI components,
            promoting code organization, maintainability, and efficiency.
          </li>
          <li>
            <strong>Declarative Programming:</strong> React's declarative
            approach simplifies development by letting you describe what the UI
            should look like, and React handles how to update the DOM.
          </li>
          <li>
            <strong>Efficient Rendering with Virtual DOM:</strong> React uses a
            Virtual DOM to minimize direct manipulations of the actual DOM,
            leading to optimized rendering performance and faster updates.
          </li>
          <li>
            <strong>Improved User Experience:</strong> The efficient rendering
            and dynamic updates provided by React result in a smooth and
            responsive user experience without full page reloads.
          </li>

          <li>
            <strong>Large and Active Community:</strong> Being maintained by
            Meta (formerly Facebook) and a large community of developers ensures
            ongoing support, resources, and a wealth of third-party libraries.
          </li>
        </ul>
      </Section>
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
        <HelpfulResource label="React Dev Ref" link={react_dev_org} />
      </Section>
      <AboutMe />
      <Footer/>
    </div>
  );
}

export default App;
