import { VercelBlogs } from "@/components/blogs/VercelBlogs";
import { blogs as localBlogs } from "@/constant";
import { Geist, Roboto } from "next/font/google";
import Image from "next/image";
import { Suspense } from "react";

const roboto = Roboto({
  weight: "700",
  subsets: ["latin"],
});

export const metadata = {
  title: "All blogs",
  description: "project_2",
};

const BlogPage = async () => {
  return (
    <div>
      <h2 className={`text-4xl mt-5 ${roboto.className}`}>Latest Blogs</h2>
      <hr />
      <div className="my-5 flex gap-4">
        {localBlogs.map((blog) => (
          <div
            key={blog.id}
            className="bg-white shadow-md border rounded-2xl my-3 p-3"
          >
            <h2 className="mb-3"> {blog.title} </h2>

            <Image src={blog.image} alt={blog.title} />
          </div>
        ))}
      </div>
      <Suspense fallback={<h2>Loading...</h2>}>
        <VercelBlogs />
      </Suspense>
    </div>
  );
};

export default BlogPage;
