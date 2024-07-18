import { useQuery, UseQueryOptions } from 'react-query';
import api from '../services/api';
import { ChannelDetailResponse } from '../types';

const fetchGetChannel = async ({
  id,
} : {
  id: string
}) => {
  const { data } = await api.get<ChannelDetailResponse>(
    `channels?part=snippet&id=${id}`,
  );
  return data;
};

const useGetChannel = ({
  id,
  options,
}: {
  id: string
  options?: UseQueryOptions<ChannelDetailResponse>;
}) => {
  return useQuery({
    queryKey: ['Channel', id],
    queryFn: () => fetchGetChannel({ id }),
    ...options,
  });
};

export default useGetChannel;
