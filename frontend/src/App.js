import { useEffect } from "react";
import axios from "axios";

function App() {
  useEffect(() => {
    loadData();
  }, [])

  const loadData = async() => {
    const response = await axios.get("http://localhost:8000/job-posts")
    console.log(response.data)
  }

  return (
    <div className="foo">
      Hi
    </div>
  )
}

export default App;
