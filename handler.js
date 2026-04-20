exports.hello = async (event) => {
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World! from Lambda local development",
    }),
  };
};
