import { useQuery, UseQueryOptions } from 'react-query';
import api from '../services/api';
import { SearchResponse } from '../types';

interface ChannelsParams {
  channelId: string;
  part?: string;
  maxResults: number;
  order?: string;
}

const fetchGetChannels = async ({
  channelId,
  part = 'snippet',
  maxResults,
  order = 'date'
} : ChannelsParams) => {
  const { data } = await api.get<SearchResponse>(
    `search?channelId=${channelId}&part=${part}&maxResults=${maxResults}&order=${order}`,
  );
  return data;
};

const useGetChannels = ({
  params,
  options,
}: {
  params: ChannelsParams
  options?: UseQueryOptions<SearchResponse>;
}) => {
  return useQuery({
    queryKey: ['Channels', params],
    queryFn: () => fetchGetChannels(params),
    ...options,
  });
};

export default useGetChannels;
