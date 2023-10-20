import { model } from "mongoose";
import { GraphQLObjectType, GraphQLID, GraphQLInt, GraphQLString } from 'graphql';
import { SongType } from './songType';

const Lyric = model('lyric');

const LyricType = new GraphQLObjectType({
    name:  'LyricType',
    fields: () => ({
      id: { type: GraphQLID },
      likes: { type: GraphQLInt },
      content: { type: GraphQLString },
      song: {
        type: SongType,
        resolve(parentValue) {
          return Lyric.findById(parentValue).populate('song')
            .then(lyric => {
              console.log(lyric)
              return lyric.song
            });
        }
      }
    })
  });

  
  export { LyricType };