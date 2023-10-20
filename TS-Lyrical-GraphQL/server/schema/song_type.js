import { model } from "mongoose";
import { LyricType } from './lyric_type';
import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } from 'graphql';

const Song = model('song');

const SongType = new GraphQLObjectType({
  name:  'SongType',
  fields: () => ({
    id: { type: GraphQLID },
    title: { type: GraphQLString },
    lyrics: {
      type: new GraphQLList(LyricType),
      resolve(parentValue) {
        return Song.findLyrics(parentValue.id);
      }
    }
  })
});

export { SongType };
  