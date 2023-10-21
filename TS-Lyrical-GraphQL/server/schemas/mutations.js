import { model } from 'mongoose';
import { GraphQLObjectType, GraphQLID, GraphQLString } from 'graphql';
import { SongType } from './song_type.js'
import { LyricType } from './lyric_type.js';
const Lyric = model('lyric');
const Song = model('song');

const mutations = new GraphQLObjectType({
  name: 'Mutation',
  fields: {
    addSong: {
      type: SongType,
      args: {
        title: { type: GraphQLString }
      },
      resolve(parentValue, { title }) {
        return new Song({ title }).save();
      }
    },
    addLyricToSong: {
      type: SongType,
      args: {
        content: { type: GraphQLString },
        songId: { type: GraphQLID }
      },
      resolve(parentValue, { content, songId }) {
        return Song.addLyric(songId, content);
      }
    },
    likeLyric: {
      type: LyricType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Lyric.like(id);
      }
    },
    deleteSong: {
      type: SongType,
      args: { id: { type: GraphQLID } },
      resolve(parentValue, { id }) {
        return Song.findByIdAndRemove(id);
      }
    }
  }
});

export { mutations };
