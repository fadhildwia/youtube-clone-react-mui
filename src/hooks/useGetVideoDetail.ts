import { useQuery, UseQueryOptions } from 'react-query';
import api from '../services/api';
import { VideoDetailResponse } from '../types';

const fetchGetVideoDetail = async ({
  id,
} : {
  id: string
}) => {
  const { data } = await api.get<VideoDetailResponse>(
    `videos?part=snippet&id=${id}`,
  );
  return data;
};

const useGetVideoDetail = ({
  id,
  options,
}: {
  id: string
  options?: UseQueryOptions<VideoDetailResponse>;
}) => {
  return useQuery({
    queryKey: ['VideoDetail', id],
    queryFn: () => fetchGetVideoDetail({ id }),
    ...options,
  });
};

export default useGetVideoDetail;
