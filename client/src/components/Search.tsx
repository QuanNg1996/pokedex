import { TextField } from '@mui/material';

interface SearchProps {
  setFilterValue: (e: string) => void;
}

const Search = ({ setFilterValue }: SearchProps) : JSX.Element => {
  return (
    <TextField
      onChange={(e) => setFilterValue(e.target.value)}
      placeholder="Find Pokemon" 
      sx={{ display: "flex", alignItems: "center", my: 4 }}
    />
  )
}

export default Search;