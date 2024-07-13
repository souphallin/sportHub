import React from "react";
import Hero from "../../assets/newsPage/HeroSectionNews.jpg";
import NewsComponent1 from "../../components/newsComponent/NewsComponent1";
import NewsComponent2 from "../../components/newsComponent/NewsComponent2";
import Carousel from "react-multi-carousel";
import { responsive } from "../../redux/newsData";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "react-multi-carousel/lib/styles.css";
import "../../index.css";

export default function News() {
  const [pNews, setPNews] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate(); // useNavigate hook

  //   Fetch Data

  useEffect(() => {
    setLoading(true);
    fetch("http://136.228.158.126:50003/api/contents/all_content/")
      .then((res) => res.json())
      .then((datas) => {
        // Assuming the data is an array of objects
        const filteredNews = datas.data.filter(
          (item) => item.content_type === "news"
        );
        setPNews(filteredNews);
        setLoading(false);
        // console.log(filteredNews);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }
  console.log("News Data:", pNews);

  // Sort the newsData array by release date in descending order
  const sortedRecentNews = pNews.sort(
    (a, b) => new Date(b.updated_at) - new Date(a.updated_at)
  );

  // handle news page detail
  const handleNewsDetail = (newsItem) => {
    navigate("/news-detail", { state: newsItem });
  };

  // map data for Component_2
  const recentNews = sortedRecentNews.slice(0, 6).map((item, index) => (
    <NewsComponent2
      key={index}
      image={item.thumbnail}
      title={item.title}
      released_date={item.updated_at}
      view={item.view_count}
      handleNewsDetail={() => handleNewsDetail(item)} // pass the handler
    />
  ));
  console.log("Recent News: ", recentNews);

  // map data for Component_1
  const topNews = sortedRecentNews.slice(6).map((item, index) => (
    <NewsComponent1
      key={index}
      image={item.thumbnail}
      title={item.title}
      released_date={item.updated_at}
      handleNewsDetail={() => handleNewsDetail(item)} // pass the handler
      className={index === 0 ? "xl:col-span-2 xl:row-span-2" : ""}
    />
  ));
  console.log("Top News: ", topNews);

  return (
    <>
      <header className="relative">
        <img
          className="object-cover h-[585px] w-full top-0 -z-30"
          src={Hero}
          alt="Background image description"
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            backgroundColor: "rgba(0, 0, 0, 0.4)",
          }}
        />
        <div className="w-10/12 mx-auto">
          <div className="absolute top-[430px] text-white font-extrabold">
            <div className="inline-block">
              <h1 className="text-[56px]">ព័ត៌មានកីឡាថ្មីៗ</h1>
            </div>
          </div>
        </div>
      </header>
      <section className="bg-[#F5f5f5]">
        <div className="News flex justify-center items-center flex-col gap-5 p-5 pb-20 w-11/12 mx-auto">
          {/* section 1: Top News */}
          <section className="w-full h-auto">
            <h2 className="text-center text-4xl text-[#172554] font-bold mt-20 mb-7 ">
              ព័ត៌មានល្បីៗ
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-6 w-full h-auto mx-auto">
              {topNews}
            </div>
          </section>

          {/* section 2: Recent News */}
          <section className="w-full h-auto">
            <h2 className="text-center text-4xl text-[#172554] font-bold m-7 ">
              ព័ត៌មានថ្មីៗ
            </h2>
            <div
              style={{
                paddingBottom: "30px",
                position: "relative",
              }}
            >
              <Carousel
                responsive={responsive}
                showDots={true}
                renderDotsOutside={true}
                swipeable={true}
              >
                {recentNews}
              </Carousel>
            </div>
          </section>
        </div>
      </section>
    </>
  );
}
