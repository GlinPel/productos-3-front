import Form from "./components/Form";

function App() {
  return (
    <div className="container mt-5">
      <div className="row mb-4">
        <div className="col-12">
          <h2>Product Manager</h2>
        </div>
      </div>
      <div className="row">
        <div className="col-12">
          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
