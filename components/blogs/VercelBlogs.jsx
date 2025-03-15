import { getVercelBlogs } from "@/api";
import { SearchBar } from "@/constant";
import Link from "next/link";

const VercelBlogs = async () => {
  const blogs = await getVercelBlogs();

  return (
    <div className="mt-20">
      <h2 className="text-2xl mb-5">Vercel Blogs</h2>

      <SearchBar />
      <div>
        {blogs.map((blog) => (
          <div key={blog.id} className="my-2 border p-3 rounded-2xl">
            <h2> {blog.title} </h2>
            <Link href={`/blog/${blog.id}`}>
              <button className="bg-black p-2 rounded text-white  my-2 cursor-pointer">
                Details
              </button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { VercelBlogs };
