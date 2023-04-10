import React from "react";

const Blog = () => {
  return (
    <div className="my-container py-8">
      <div className="py-3">
        <h1 className="pb-2 text-xl font-medium">
          1. When should use context API?
        </h1>
        <p className="text-lg text-gray-600">
          Context API is a feature in React that allows share data or between
          components without pass props down manually at every level of the
          component tree.
          <br />
          To use Context API, first create a context object using the
          createContext() method. This context object is then used to provide
          data to any component, using the Provider component. The data can be
          accessed by any component using the useContext() hook.
          <br />
          Context API is useful when multiple components that need access to the
          same data , especially when these components are nested deep in the
          component tree. It helps to simplify the code and avoid the need to
          pass props down manually at every level, which can be time-consuming
          and error-prone.
        </p>
      </div>
      <div className="py-3">
        <h1 className="pb-2 text-xl font-medium">2. What is a custom hook?</h1>
        <p className="text-lg text-gray-600">
          Custom hooks in React provide a way to share hooks combined way with
          functionality between components. Created by combining one or more of
          the built-in React hooks, such as useState, useEffect, and useContext.{" "}
          Custom hooks can be used to solve a wide range of problems, such as
          managing state, making API requests, handling form inputs, or
          subscribing to events.
          <br /> Using custom hooks can make components more focused and easier
          to reason about by removing the implementation details of complex
          functionality. When using a custom hook, get access to the state or
          functionality provided by the hook without having to worry about how
          it works. Overall, custom hooks are a powerful feature of React that
          can help you write more modular and maintainable code.
        </p>
      </div>
      <div className="py-3">
        <h1 className="pb-2 text-xl font-medium">3. What is useRef?</h1>
        <p className="text-lg text-gray-600">
          useRef is a hook in React that allows to create a mutable object with
          an initial value. The object persists for the entire lifetime of the
          component and can be used to store a reference to a DOM element or a
          value that needs to persist between renders. Also use useRef to access
          the previous state or props values inside a useEffect hook. One common
          use case is to access a DOM element directly in the component without
          the need to search the DOM each time the component re-renders, which
          can improve performance and simplify the code.
        </p>
      </div>
      <div className="py-3">
        <h1 className="pb-2 text-xl font-medium">4. What is useMemo?</h1>
        <p className="text-lg text-gray-600">
          useMemo is a built-in hook in React that memoizes the result of a
          function call and returns the cached value if the inputs to the
          function have not changed. This can improve the performance of
          application by avoiding unnecessary re-computations of expensive or
          complex functions. useMemo is particularly useful when have a function
          that takes a long time to compute or is computationally expensive, and
          want to avoid re-computing it every time the component re-renders. The
          hook returns the cached value if the dependencies have not changed, or
          the result of the function if the dependencies have changed.UseMemo is
          a useful hook in React that allows to memoize the result of a function
          and improve the performance of application by reducing unnecessary
          re-computations.
        </p>
      </div>
    </div>
  );
};

export default Blog;
