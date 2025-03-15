import { getVercelBlogs } from "@/api";
import { getSingleVercelBlog } from "@/api/getSingleVercelBlog";
import blogStyle from "../blog.module.css";

const generateMetadata = async ({ params }) => {
  const { slug } = params;

  const blog = await getSingleVercelBlog(slug);

  console.log(blog);

  return {
    title: blog.author,
    description: blog.title,
  };
};

const BlogDetails = async ({ params }) => {
  const { slug } = await params;
  const blog = await getSingleVercelBlog(slug);

  return (
    <div className={blogStyle.detailsCard}>
      <h2> Name: {blog.author} </h2>
      <p> {blog.content} </p>
    </div>
  );
};

const generateStaticParams = async () => {
  const vercelBlogs = await getVercelBlogs();

  return vercelBlogs.map((blog) => ({
    id: blog.id,
  }));
};

export default BlogDetails;
export { generateStaticParams, generateMetadata };
