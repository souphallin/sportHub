import React from "react";
import { useLocation } from "react-router-dom";
import NewsCompomentDetail from "../../components/newsComponent/NewsCompomentDetail"


export default function NewsDetailPage() {
  const location = useLocation();
  const newsItem = location.state;

  if (!newsItem) {
    return <div>No news item found.</div>;
  }

  return (
    <>
      <section className="flex justify-center items-center h-auto mx-auto px-10">
        <NewsCompomentDetail
          image={newsItem.thumbnail}
          title={newsItem.title}
          released_date={newsItem.updated_at}
          view={newsItem.view_count}
          body={newsItem.body}
        />
      </section>
    </>
  );
}
