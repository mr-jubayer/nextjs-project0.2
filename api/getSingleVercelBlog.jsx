const getSingleVercelBlog = async (id) => {
  const res = await fetch(`https://api.vercel.app/blog/${id}`, {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return res.json();
};

export { getSingleVercelBlog };
