const addIdToUrl = (search: string, id: string) => {
  let result = '';
  const queryArray = (search && search.split('?')[1].split('&')) || [];
  if (!queryArray.length) {
    result += `${id}=1`;
  }

  if (queryArray.length) {
    const currentItem = queryArray.map((item) => item.split('=')).find((item) => item[0] === id);

    if (currentItem) {
      result = queryArray
        .map((item) => {
          const [currentId, currentCount] = item.split('=');
          if (currentId === id) {
            return `${currentId}=${+currentCount + 1}`;
          }

          return item;
        })
        .join('&');
    } else {
      result += `${search.replace('?', '')}&${id}=1`;
    }
  }

  return `?${result}`;
};

export default addIdToUrl;
