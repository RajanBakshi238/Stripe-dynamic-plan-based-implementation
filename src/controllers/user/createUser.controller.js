export const createUser = (request, response) => {
  try {
    return response.json({});
  } catch (error) {
    return response.status(500).json({
      error: {
        messsage: "Something went wrong",
        error: error,
      },
    });
  }
};

export default createUser;
