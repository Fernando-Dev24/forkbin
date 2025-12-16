/**
 *
 * @param content
 * Function to validate that content fullfill mock API schema
 * METHOD > STATUS CODE > ENDPOINT > RESPONSE DATA
 */

const methods = ["GET", "POST", "PUT", "DELETE"];

export const validateApiSchema = (content: any) => {
  for (const method in content) {
    console.log(method);
  }

  /* Object.keys(content).forEach((key) => {
    // Validate that content includes a valid method
    if (!methods.includes(key))
      return {
        ok: false,
        message: `Method ${key} is not allowed`,
      };

    // Validate that method contains a status code (number)
    const method = content[key];
    Object.keys(method).forEach((status) => {
      if (isNaN(+status))
        return {
          ok: false,
          message: `Status code ${status} under method ${key} is not allowed`,
        };

      // Validate that endpoint is allowed
      Object.keys(content[key][status]).forEach((endpoint) => {
        if (!endpoint || !endpoint.startsWith("/"))
          return {
            ok: false,
            message: `Endpoint "${endpoint}" under method "${key}" and status code "${status}" does not start with "/" or it's an empty string`,
          };
      });
    });
  }); */
};
