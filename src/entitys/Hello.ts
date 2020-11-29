import { Field, ObjectType } from "type-graphql";

@ObjectType({ description: 'The hello world model.' })
class Event {
    @Field()
    text: string;
}

export default Event;