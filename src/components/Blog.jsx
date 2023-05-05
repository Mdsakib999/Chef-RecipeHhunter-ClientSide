import React from "react";
import Login from "./Login";

const Blog = () => {
  return (
    <div>
      <h1 className="font-bold text-4xl text-center">Welcome To Our Blog</h1>
      <div className=" mt-10 w-[80%] mx-auto rounded-md">
        <div className="bg-slate-100 p-5 my-5 rounded-md">
          <p className="font-bold">
            Q:1- Tell us the differences between uncontrolled and controlled
            components.
          </p>

          <p className="bg-white p-3 rounded-md mt-4">
            Ans: Uncontrolled components are those that have no restrictions or
            guidelines on how they can be used or modified. Controlled
            components are those that are managed and maintained by a central
            authority, such as a software development team or an open-source
            community. Developers can freely use and modify uncontrolled
            components in their applications, without any limitations or
            restrictions on the behavior or functionality of the component.
            Developers who use controlled components must follow specific
            guidelines and standards set by the central authority, so that the
            component functions properly and maintains compatibility with other
            system components. Uncontrolled components offer greater flexibility
            and freedom to developers, allowing them to customize and modify
            components to suit their specific needs. The main advantage of using
            controlled components on the other hand is that they provide a high
            level of consistency and reliability in software development, as all
            developers follow the same guidelines and standards when working
            with components.
          </p>
        </div>
        <div className="bg-slate-100 p-5 my-5 rounded-md">
          <p className="font-bold">
            Q:2- How to validate React props using PropTypes
          </p>

          <p className="bg-white p-3 rounded-md mt-4">
            Ans: PropTypes is a utility in React that allows you to validate the
            props passed to a component. It helps specify the expected type of
            each prop and whether it's required or not. To use PropTypes, we
            define component and add a propTypes object to it, containing a key
            for each prop we expect to receive and the value should be the
            expected type of that prop. If a prop is not passed to the
            component, or if it's passed as a value that is not of the expected
            type, a warning will be logged to the console. Using PropTypes can
            help catch errors early and make components more robust and
            maintainable. There are many other types that PropTypes can
            validate, including numbers, booleans, arrays, objects, and even
            custom types. Using PropTypes to validate props can help catch
            errors early and make components more robust and maintainable.
          </p>
        </div>
        <div className="bg-slate-100 p-5 my-5 rounded-md">
          <p className="font-bold">
            Q:3- Tell us the difference between nodejs and express js.
          </p>

          <p className="bg-white p-3 rounded-md mt-4">
            Ans: Node.js is a server-side JavaScript runtime environment that
            allows developers to run JavaScript on the server-side. Express.js,
            on the other hand, is a web application framework built on top of
            Node.js. Node.js comes with a set of built-in modules that allow
            developers to perform various tasks such as file I/O, networking,
            and more. It provides a way to run JavaScript code outside of a web
            browser, meaning developers can build server-side applications using
            JavaScript. Express.js provides a robust set of HTTP utilities and
            middleware, which allow developers to easily create and manage web
            applications. It provides a set of features and tools that make it
            easier for developers to build web applications and APIs. Node.js is
            the underlying technology that allows JavaScript to run server-side,
            while Express.js is a framework built on top of Node.js that
            provides a set of features and tools for building web applications
            and APIs.
          </p>
        </div>
        <div className="bg-slate-100 p-5 my-5 rounded-md">
          <p className="font-bold">
            Q:4- What is a custom hook, and why will you create a custom hook?
          </p>

          <p className="bg-white p-3 rounded-md mt-4">
            Ans: A custom hook is a function in React that allows reusing code
            that contains stateful logic, fetching data from an API across
            multiple components. By creating a custom hook, one can extract
            logic from one component and reuse it in another component, avoiding
            code duplication. Custom hooks use the use prefix in their name and
            can use other React hooks inside them. The advantage of using a
            custom hook in React is that it allows you to extract reusable logic
            from your components and encapsulate it in a separate function. By
            creating a custom hook, you can avoid duplicating code across
            multiple components that use similar logic. This can make your code
            more concise and reduce the amount of boilerplate code you need to
            write. In short, We can use a custom hook in React to Code reuse and
            modularity, Easier to read and maintain code, Reduced code
            duplication and boilerplate, Improved performance and optimization.
            Custom hooks can also improve the performance of application by
            allowing you to optimize the logic in a single place. This can
            reduce the number of network requests made by application and
            improve its overall performance.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
