export interface GenericObject<T> {}

export const createQuerySearch = <T>(search: Record<string, any | null>) => {
  let searchData = Object.entries(search);
  let querySearch: any = {};

  for (let i = 0; i < searchData.length; i++) {
    if (search[`${searchData[i][0]}`]) {
      querySearch[`${searchData[i][0]}`] = search[`${searchData[i][0]}`][0];
    }
  }
  return querySearch;
};
