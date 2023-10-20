import { model } from 'mongoose';
import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLNonNull } from 'graphql';
import { SongType } from './songType'
import { LyricType } from './lyric_type';
const Lyric = model('lyric');
const Song = model('song');

const RootQueryType = new GraphQLObjectType({
  name: 'RootQueryType',
  fields: () => ({
    songs: {
      type: new GraphQLList(SongType),
      resolve() {
        return Song.find({});
      }
    },
    song: {
      type: SongType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parentValue, { id }) {
        return Song.findById(id);
      }
    },
    lyric: {
      type: LyricType,
      args: { id: { type: new GraphQLNonNull(GraphQLID) } },
      resolve(parnetValue, { id }) {
        return Lyric.findById(id);
      }
    }
  })
});

export { RootQueryType };
