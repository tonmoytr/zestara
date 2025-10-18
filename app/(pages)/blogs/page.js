import BlogsFeed from "@/app/components/blogs/BlogsFeeds";
import FindZestara from "@/app/components/blogs/FindZestara";
import InstaStrip from "@/app/components/blogs/InstaStrip";
import Navbar from "@/app/components/shared/Navbar";
import PageHeader from "@/app/components/shared/PageHeader";

export default function BlogsPage() {
  return (
    <>
      <Navbar />
      <main>
        <PageHeader
          title="Latest News"
          content="Stay updated with insightful articles on gourmet recipes, restaurant highlights & the art of fine dining."
          // bgWord defaults to title; no need to pass
          align="left"
          size="xl"
        />
        <BlogsFeed />
        <FindZestara />
        <InstaStrip />
      </main>
    </>
  );
}
