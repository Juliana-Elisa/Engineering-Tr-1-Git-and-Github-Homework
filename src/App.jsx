import './App.css'
//we need to actually load the file, or the everything will just be plain text.


function App() {
  return (
    <div className="container">
    <h1 className="title">Yosemite National Park</h1>
    <img className="scenery-img" src="/scenery.jpeg" alt="A beautiful scenery" />
      <p className="description">
        A picture of Yosemite National Park's Half Dome, halfway through the 4 Mile Trail.
      </p>
    </div>
  )
}
// need to have class name as scenery-img because thats what app.css defines the style for.
// need to change {sceneryImg} to "/scenery.jpeg" since that is the real path to the image.
export default App