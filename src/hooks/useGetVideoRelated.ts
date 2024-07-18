import { useQuery, UseQueryOptions } from 'react-query';
import api from '../services/api';
import { SearchResponse } from '../types';

const fetchGetVideoRelated = async ({
  id,
} : {
  id: string
}) => {
  const { data } = await api.get<SearchResponse>(
    `search?relatedToVideoId=${id}&part=id%2Csnippet&type=video&maxResults=50`,
  );
  return data;
};

const useGetVideoRelated = ({
  id,
  options,
}: {
  id: string
  options?: UseQueryOptions<SearchResponse>;
}) => {
  return useQuery({
    queryKey: ['VideoRelated', id],
    queryFn: () => fetchGetVideoRelated({ id }),
    ...options,
  });
};

export default useGetVideoRelated;
