import { useQuery, UseQueryOptions } from 'react-query';
import api from '../services/api';
import { SearchResponse } from '../types';

interface SearchParams {
  q: string;
  part?: string;
  maxResults: number;
  order?: string;
}

const fetchGetSearch = async ({
  q,
  part = 'snippet',
  maxResults,
  order = 'date'
} : SearchParams) => {
  const { data } = await api.get<SearchResponse>(
    `search?q=${q}&part=${part}&maxResults=${maxResults}&order=${order}`,
  );
  return data;
};

const useGetSearch = ({
  params,
  options,
}: {
  params: SearchParams
  options?: UseQueryOptions<SearchResponse>;
}) => {
  return useQuery({
    queryKey: ['Search', params],
    queryFn: () => fetchGetSearch(params),
    ...options,
  });
};

export default useGetSearch;
