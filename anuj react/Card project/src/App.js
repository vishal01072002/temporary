import React, { useEffect, useState } from "react";
import {apiUrl,filterData} from "./data";
import Navbar from "./component/Navbar";
import Filter from "./component/Filter";
import Cards from "./component/Cards";
import { toast } from "react-toastify";
import Spinner from "./component/Spinner";

const App = () => {

  const [courses,setCourses] = useState(null);
  const [loading,setLoading] = useState(true);
  const [category,setCategory] = useState(filterData[0].title);

  async function fetchData()  {

    setLoading(true);

    try {
      let response = await fetch(apiUrl);
      let output = await response.json();
      setCourses(output.data);
    }
    catch(error) {
      toast.error("something wrong");
    }

    setLoading(false);
  }

  useEffect(() => {
    fetchData();
  },[]) 

  return (
    <div>

      <div>
        <Navbar/>
      </div>

      <div>
        <Filter filterData={filterData} category={category} setCategory={setCategory}/>
      </div>

      <div>
        {
          loading ? (<Spinner/>) : (<Cards courses={courses} category={category}/>)          
        }
      </div>

    </div>
  );
};

export default App;
