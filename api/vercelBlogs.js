const getVercelBlogs = async () => {
  const res = await fetch("https://api.vercel.app/blog", {
    method: "GET",
    headers: {
      "content-type": "application/json",
    },
  });

  return res.json();
};

export { getVercelBlogs };
