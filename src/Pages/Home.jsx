import React, { useContext } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Search } from "../components/Search";
import { SearchContext } from "../context/SearchContext";

export function Home() {
  const { searchList } = useContext(SearchContext);
  console.log("searchlist", searchList);
  return (
    <>
      <Header />
      <Search />
      <div className="flex justify-center items-center sm:px-[70px] sm:py-[25px] lg:px-[156px] lg:py-[52px]">
      <div className="grid sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 ">
          {searchList.map((data) => (
            <div key={data.id}  className="w-[180px] h-[240px]  my-14 object-contain">
              <img
                src={`https://image.tmdb.org/t/p/w500/${data.backdrop_path}`}
                className="w-[160px] h-[240px]"
              />
              <p>{data.title}</p>
            </div>
          ))}
        </div>
      </div>
        
      
      <Footer />
    </>
  );
}
