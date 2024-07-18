import { Typography, Box } from "@mui/material";
import { useParams } from "react-router-dom";
import { Videos } from "../components";
import useGetSearch from "../hooks/useGetSearch";

const SearchFeed: React.FC = () => {
  const { searchTerm } = useParams();

  const { data: dataSearch } = useGetSearch({
    params: {
      q: searchTerm as string,
      maxResults: 50
    },
    options: {
      enabled: !!searchTerm
    }
  });

  return (
    <Box p={2} minHeight="95vh">
      <Typography variant="h4" fontWeight={900}  color="white" mb={3} ml={{ sm: "100px"}}>
        Search Results for <span style={{ color: "#FC1503" }}>{searchTerm}</span> videos
      </Typography>
      <Box p={2} display="flex" sx={{ mx: { sm: '100px' } }}>
        <Videos videos={dataSearch?.items || []} />
      </Box>
    </Box>
  );
};

export default SearchFeed;