//File: App.tsx located in src/ directory

function App() {
  return (
    <div style={{ backgroundColor: "black", color: "white" }}>
      <h1>This is main componenet (App.tsx)</h1>
      {/* container 1: header */}
      <div className="m-6 bg-green-600">
        <h1>Web Development Course</h1>
        <p>
          In this course, you will learn about React, Next, Nest, Express and
          mongoDB
        </p>
      </div>
      {/* container 2: header */}
      <div className="m-6 bg-blue-600">
        <h1>Nav Bar</h1>
        <p>This is navbar container</p>
      </div>
      {/* container 3: Home Page */}
      <div className="m-6 bg-teal-600">
        <h1>Home page</h1>
        <p>This is home page container</p>
      </div>
      {/* container 4: Registration */}
      <div className="m-6 bg-yellow-600">
        <h1>Registration</h1>
        <p>This is Registration container</p>
      </div>
      {/* container 5: Login */}
      <div className="m-6 bg-gray-600">
        <h1>Login</h1>
        <p>This is Login container</p>
      </div>
      {/* container 6: Diary */}
      <div className="m-6 bg-red-600">
        <h1>Diary</h1>
        <p>This is Diary container</p>
      </div>
      {/* container 7: Footer */}
      <div className="m-6 bg-purple-600">
        <h1>Footer</h1>
        <p>This is Footer container</p>
      </div>
    </div>
  );
}

export default App;
