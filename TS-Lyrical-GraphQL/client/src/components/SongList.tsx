import { useQuery, gql } from "@apollo/client";

const getSongListTitles = gql`
  {
    songs {
      title
    }
  }
`;

const SongList = () => {
    // const { data, loading, error} = useQuery(getSongListTitles)
    // console.log(data);
    return (
        <div>testing</div>
    )
}

export { SongList }