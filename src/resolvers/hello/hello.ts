import { Resolver, Query, Ctx, Arg } from 'type-graphql';
import Context from '../../types/Context';

@Resolver()
class HelloResolver {
  @Query(() => String)
  async greeting(@Ctx() context: Context, @Arg('text') text: string) {
    console.log(context);
    return `Hello ${text}!`;
  }
}

export default HelloResolver;