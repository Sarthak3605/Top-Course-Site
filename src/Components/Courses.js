import Filtered from "./Filtered";
import Course from "./Course";
import { apiUrl, filterData } from "../pages/data";
import { useState, useEffect } from "react";
import { toast } from "react-hot-toast";
import Loading from "./Loading";

export default function Courses() {
  let [courses, setCourses] = useState(null);
  let [loading, setLoading] = useState(true);
  let [catog, setCatog] = useState(filterData[0].title);

  async function FetchData() {
    setLoading(true);
    try {
      const data = await fetch(apiUrl);
      const response = await data.json();
      setCourses(response.data);
    } catch (error) {
      toast.error("Error 404");
    }
    setLoading(false);
  }
  useEffect(() => {
    FetchData();
  }, []);

  return (
    <div className="min-h-screen flex flex-col ">
      <div className="bg-slate-100">
        <Filtered catog={catog} setCatog={setCatog} filterData={filterData} />
      </div>
      <div className="w-11/12 max-w-[1200px] mx-auto flex flex-wrap justify-center items-center min-h-[50vh]">
        {loading ? <Loading /> : <Course catog={catog} courses={courses} />}
      </div>
    </div>
  );
}
