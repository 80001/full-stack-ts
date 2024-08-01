import Query from './resolvers/Query';
import Db, { DbTweet, DbUser } from 'db';
import { Resolvers } from 'resolvers-types.generated';

export interface TwitterResolverContext {
  db: Db;
  dbTweetCache: Record<string, DbTweet>;
  dbTweetToFavoriteCountMap: Record<string, DbUser>;
  dbUserCashe: Record<string, number>;
}

const resolvers: Resolvers<TwitterResolverContext> = {
  Query,
};

export default resolvers;
