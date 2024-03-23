import { model } from "mongoose";
import { LyricType } from './lyric_type.js';
import { GraphQLObjectType, GraphQLList, GraphQLID, GraphQLString } from 'graphql';
import { Song } from "../models/song.js";

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
  