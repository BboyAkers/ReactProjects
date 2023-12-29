import { useQuery, gql } from "@apollo/client";

const getSongListTitles = gql`
  {
    songs {
      title
    }
  }
`;

const SongList = () => {
    const { data} = useQuery(getSongListTitles);
    console.log(data);

    return (
        <div>testing</div>
    )
}

export { SongList }