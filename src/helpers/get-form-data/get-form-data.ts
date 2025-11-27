export const getFormData = (values: any) => {
  const formData = new FormData();

  Object.entries(values).forEach(([key, value]) => {
    const valueType = typeof value;
    formData.append(key, value as typeof valueType);
  });

  return formData;
};
