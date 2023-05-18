const Blog = () => {
  return (
    <div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium text-white">
          What is an access token and refresh token? How do they work and where
          should we store them on the client-side?
        </div>
        <div className="collapse-content">
          <p>
            An access token is a credential that grants access to specific
            resources or services on a server. It is typically issued by an
            authentication server upon successful authentication and is used to
            authenticate subsequent API requests. <br />A refresh token is a
            long-lived credential that is used to obtain a new access token when
            the current one expires. It allows the client to obtain a new access
            token without requiring the user to reauthenticate. <br /> On the
            client-side, both the access token and refresh token should be
            securely stored. The access token is often stored in memory or a
            short-lived storage mechanism (e.g., browser session storage), while
            the refresh token should be stored in a more secure location, such
            as an HTTP-only cookie or secure storage (e.g., browser local
            storage or secure keychain on a mobile device).
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium text-white">
          Compare SQL and NoSQL databases?
        </div>
        <div className="collapse-content">
          <p>
            SQL databases are structured, relational databases that use
            Structured Query Language (SQL) for data manipulation and retrieval.
            They have predefined schemas, support ACID transactions, and are
            suitable for complex data relationships. They are a good choice for
            applications that require strong consistency and structured data.{" "}
            <br />
            NoSQL databases, on the other hand, are non-relational databases
            that do not require fixed schemas and typically use a variety of
            data models, such as key-value, document, columnar, or graph. They
            offer high scalability and flexibility, making them suitable for
            handling large amounts of unstructured or semi-structured data.
            NoSQL databases sacrifice some features like ACID transactions and
            complex joins in favor of horizontal scalability and eventual
            consistency. <br />
            In summary, SQL databases are well-suited for structured data and
            complex relationships, while NoSQL databases excel in handling large
            volumes of unstructured or semi-structured data with high
            scalability and flexibility.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box mb-5">
        <div className="collapse-title text-xl font-medium text-white">
          What is express js? What is Nest JS?
        </div>
        <div className="collapse-content">
          <p>
            Express.js is a minimalistic and flexible web application framework
            for Node.js. It provides a set of features and tools to build web
            applications and APIs quickly and easily. Express.js simplifies
            common web development tasks, such as routing, middleware handling,
            and request/response management. It is widely used and has a large
            ecosystem of plugins and extensions. <br />
            Nest.js is a progressive and opinionated Node.js framework for
            building efficient and scalable server-side applications. It
            combines elements from both object-oriented programming (OOP) and
            functional programming (FP) to create a modular and maintainable
            codebase. Nest.js leverages TypeScript and takes advantage of
            decorators and dependency injection to provide a structured and
            extensible architecture. It also offers features like built-in
            support for GraphQL, WebSocket communication, and microservices.
            Nest.js is known for its focus on developer productivity and code
            maintainability.
          </p>
        </div>
      </div>
      <div
        tabIndex={0}
        className="collapse collapse-open border border-base-300 bg-base-100 rounded-box">
        <div className="collapse-title text-xl font-medium text-white">
          What is MongoDB aggregate and how does it work?
        </div>
        <div className="collapse-content">
          <p></p>In MongoDB, the aggregate method is used to perform advanced
          data aggregation operations on a collection. It allows you to process
          and transform the data within the database using a pipeline of stages.
          Each stage applies a specific operation to the documents in the
          collection, such as filtering, grouping, sorting, and calculating
          aggregate values. <br />
          The aggregate method takes an array of stages as input, and each stage
          defines a specific operation to be performed on the documents. These
          stages can include operations like $match (filtering documents),
          $group (grouping documents), $sort (sorting documents), $project
          (specifying the fields to include/exclude), and many more. <br />
          The aggregation pipeline processes the documents sequentially through
          the stages, passing the output of one stage as input to the next. This
          allows for complex and flexible data transformations and calculations.{" "}
          <br />
          Overall, the aggregate method in MongoDB provides a powerful way to
          perform complex data aggregations and transformations on collections
          using a flexible and expressive pipeline approach.
        </div>
      </div>
    </div>
  );
};

export default Blog;
