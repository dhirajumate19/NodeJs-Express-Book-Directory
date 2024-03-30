export const createSuccessResponse = (data, message) => {
  return {
    data,
    meta: {
      message,
    },
  };
};

export const createErrorResponse = (status, error) => {
  return {
    status,
    message: {
      error,
    },
  };
};
