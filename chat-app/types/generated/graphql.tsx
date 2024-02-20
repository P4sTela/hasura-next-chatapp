import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

/** Boolean expression to compare columns of type "Int". All fields are combined with logical 'AND'. */
export type Int_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['Int']['input']>;
  _gt?: InputMaybe<Scalars['Int']['input']>;
  _gte?: InputMaybe<Scalars['Int']['input']>;
  _in?: InputMaybe<Array<Scalars['Int']['input']>>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  _lt?: InputMaybe<Scalars['Int']['input']>;
  _lte?: InputMaybe<Scalars['Int']['input']>;
  _neq?: InputMaybe<Scalars['Int']['input']>;
  _nin?: InputMaybe<Array<Scalars['Int']['input']>>;
};

/** Message */
export type Message = {
  __typename?: 'Message';
  content: Scalars['String']['output'];
  id: Scalars['Int']['output'];
  user: Scalars['String']['output'];
};

/** aggregated selection of "Message" */
export type Message_Aggregate = {
  __typename?: 'Message_aggregate';
  aggregate?: Maybe<Message_Aggregate_Fields>;
  nodes: Array<Message>;
};

/** aggregate fields of "Message" */
export type Message_Aggregate_Fields = {
  __typename?: 'Message_aggregate_fields';
  avg?: Maybe<Message_Avg_Fields>;
  count: Scalars['Int']['output'];
  max?: Maybe<Message_Max_Fields>;
  min?: Maybe<Message_Min_Fields>;
  stddev?: Maybe<Message_Stddev_Fields>;
  stddev_pop?: Maybe<Message_Stddev_Pop_Fields>;
  stddev_samp?: Maybe<Message_Stddev_Samp_Fields>;
  sum?: Maybe<Message_Sum_Fields>;
  var_pop?: Maybe<Message_Var_Pop_Fields>;
  var_samp?: Maybe<Message_Var_Samp_Fields>;
  variance?: Maybe<Message_Variance_Fields>;
};


/** aggregate fields of "Message" */
export type Message_Aggregate_FieldsCountArgs = {
  columns?: InputMaybe<Array<Message_Select_Column>>;
  distinct?: InputMaybe<Scalars['Boolean']['input']>;
};

/** aggregate avg on columns */
export type Message_Avg_Fields = {
  __typename?: 'Message_avg_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to filter rows from the table "Message". All fields are combined with a logical 'AND'. */
export type Message_Bool_Exp = {
  _and?: InputMaybe<Array<Message_Bool_Exp>>;
  _not?: InputMaybe<Message_Bool_Exp>;
  _or?: InputMaybe<Array<Message_Bool_Exp>>;
  content?: InputMaybe<String_Comparison_Exp>;
  id?: InputMaybe<Int_Comparison_Exp>;
  user?: InputMaybe<String_Comparison_Exp>;
};

/** unique or primary key constraints on table "Message" */
export enum Message_Constraint {
  /** unique or primary key constraint on columns "id" */
  MessagePkey = 'Message_pkey'
}

/** input type for incrementing numeric columns in table "Message" */
export type Message_Inc_Input = {
  id?: InputMaybe<Scalars['Int']['input']>;
};

/** input type for inserting data into table "Message" */
export type Message_Insert_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate max on columns */
export type Message_Max_Fields = {
  __typename?: 'Message_max_fields';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** aggregate min on columns */
export type Message_Min_Fields = {
  __typename?: 'Message_min_fields';
  content?: Maybe<Scalars['String']['output']>;
  id?: Maybe<Scalars['Int']['output']>;
  user?: Maybe<Scalars['String']['output']>;
};

/** response of any mutation on the table "Message" */
export type Message_Mutation_Response = {
  __typename?: 'Message_mutation_response';
  /** number of rows affected by the mutation */
  affected_rows: Scalars['Int']['output'];
  /** data from the rows affected by the mutation */
  returning: Array<Message>;
};

/** on_conflict condition type for table "Message" */
export type Message_On_Conflict = {
  constraint: Message_Constraint;
  update_columns?: Array<Message_Update_Column>;
  where?: InputMaybe<Message_Bool_Exp>;
};

/** Ordering options when selecting data from "Message". */
export type Message_Order_By = {
  content?: InputMaybe<Order_By>;
  id?: InputMaybe<Order_By>;
  user?: InputMaybe<Order_By>;
};

/** primary key columns input for table: Message */
export type Message_Pk_Columns_Input = {
  id: Scalars['Int']['input'];
};

/** select columns of table "Message" */
export enum Message_Select_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  User = 'user'
}

/** input type for updating data in table "Message" */
export type Message_Set_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate stddev on columns */
export type Message_Stddev_Fields = {
  __typename?: 'Message_stddev_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_pop on columns */
export type Message_Stddev_Pop_Fields = {
  __typename?: 'Message_stddev_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate stddev_samp on columns */
export type Message_Stddev_Samp_Fields = {
  __typename?: 'Message_stddev_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Streaming cursor of the table "Message" */
export type Message_Stream_Cursor_Input = {
  /** Stream column input with initial value */
  initial_value: Message_Stream_Cursor_Value_Input;
  /** cursor ordering */
  ordering?: InputMaybe<Cursor_Ordering>;
};

/** Initial value of the column from where the streaming should start */
export type Message_Stream_Cursor_Value_Input = {
  content?: InputMaybe<Scalars['String']['input']>;
  id?: InputMaybe<Scalars['Int']['input']>;
  user?: InputMaybe<Scalars['String']['input']>;
};

/** aggregate sum on columns */
export type Message_Sum_Fields = {
  __typename?: 'Message_sum_fields';
  id?: Maybe<Scalars['Int']['output']>;
};

/** update columns of table "Message" */
export enum Message_Update_Column {
  /** column name */
  Content = 'content',
  /** column name */
  Id = 'id',
  /** column name */
  User = 'user'
}

export type Message_Updates = {
  /** increments the numeric columns with given value of the filtered values */
  _inc?: InputMaybe<Message_Inc_Input>;
  /** sets the columns of the filtered rows to the given values */
  _set?: InputMaybe<Message_Set_Input>;
  /** filter the rows which have to be updated */
  where: Message_Bool_Exp;
};

/** aggregate var_pop on columns */
export type Message_Var_Pop_Fields = {
  __typename?: 'Message_var_pop_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate var_samp on columns */
export type Message_Var_Samp_Fields = {
  __typename?: 'Message_var_samp_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** aggregate variance on columns */
export type Message_Variance_Fields = {
  __typename?: 'Message_variance_fields';
  id?: Maybe<Scalars['Float']['output']>;
};

/** Boolean expression to compare columns of type "String". All fields are combined with logical 'AND'. */
export type String_Comparison_Exp = {
  _eq?: InputMaybe<Scalars['String']['input']>;
  _gt?: InputMaybe<Scalars['String']['input']>;
  _gte?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given case-insensitive pattern */
  _ilike?: InputMaybe<Scalars['String']['input']>;
  _in?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column match the given POSIX regular expression, case insensitive */
  _iregex?: InputMaybe<Scalars['String']['input']>;
  _is_null?: InputMaybe<Scalars['Boolean']['input']>;
  /** does the column match the given pattern */
  _like?: InputMaybe<Scalars['String']['input']>;
  _lt?: InputMaybe<Scalars['String']['input']>;
  _lte?: InputMaybe<Scalars['String']['input']>;
  _neq?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given case-insensitive pattern */
  _nilike?: InputMaybe<Scalars['String']['input']>;
  _nin?: InputMaybe<Array<Scalars['String']['input']>>;
  /** does the column NOT match the given POSIX regular expression, case insensitive */
  _niregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given pattern */
  _nlike?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given POSIX regular expression, case sensitive */
  _nregex?: InputMaybe<Scalars['String']['input']>;
  /** does the column NOT match the given SQL regular expression */
  _nsimilar?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given POSIX regular expression, case sensitive */
  _regex?: InputMaybe<Scalars['String']['input']>;
  /** does the column match the given SQL regular expression */
  _similar?: InputMaybe<Scalars['String']['input']>;
};

/** ordering argument of a cursor */
export enum Cursor_Ordering {
  /** ascending ordering of the cursor */
  Asc = 'ASC',
  /** descending ordering of the cursor */
  Desc = 'DESC'
}

/** mutation root */
export type Mutation_Root = {
  __typename?: 'mutation_root';
  /** delete data from the table: "Message" */
  delete_Message?: Maybe<Message_Mutation_Response>;
  /** delete single row from the table: "Message" */
  delete_Message_by_pk?: Maybe<Message>;
  /** insert data into the table: "Message" */
  insert_Message?: Maybe<Message_Mutation_Response>;
  /** insert a single row into the table: "Message" */
  insert_Message_one?: Maybe<Message>;
  /** update data of the table: "Message" */
  update_Message?: Maybe<Message_Mutation_Response>;
  /** update single row of the table: "Message" */
  update_Message_by_pk?: Maybe<Message>;
  /** update multiples rows of table: "Message" */
  update_Message_many?: Maybe<Array<Maybe<Message_Mutation_Response>>>;
};


/** mutation root */
export type Mutation_RootDelete_MessageArgs = {
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootDelete_Message_By_PkArgs = {
  id: Scalars['Int']['input'];
};


/** mutation root */
export type Mutation_RootInsert_MessageArgs = {
  objects: Array<Message_Insert_Input>;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootInsert_Message_OneArgs = {
  object: Message_Insert_Input;
  on_conflict?: InputMaybe<Message_On_Conflict>;
};


/** mutation root */
export type Mutation_RootUpdate_MessageArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  where: Message_Bool_Exp;
};


/** mutation root */
export type Mutation_RootUpdate_Message_By_PkArgs = {
  _inc?: InputMaybe<Message_Inc_Input>;
  _set?: InputMaybe<Message_Set_Input>;
  pk_columns: Message_Pk_Columns_Input;
};


/** mutation root */
export type Mutation_RootUpdate_Message_ManyArgs = {
  updates: Array<Message_Updates>;
};

/** column ordering options */
export enum Order_By {
  /** in ascending order, nulls last */
  Asc = 'asc',
  /** in ascending order, nulls first */
  AscNullsFirst = 'asc_nulls_first',
  /** in ascending order, nulls last */
  AscNullsLast = 'asc_nulls_last',
  /** in descending order, nulls first */
  Desc = 'desc',
  /** in descending order, nulls first */
  DescNullsFirst = 'desc_nulls_first',
  /** in descending order, nulls last */
  DescNullsLast = 'desc_nulls_last'
}

export type Query_Root = {
  __typename?: 'query_root';
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
};


export type Query_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Query_RootMessage_By_PkArgs = {
  id: Scalars['Int']['input'];
};

export type Subscription_Root = {
  __typename?: 'subscription_root';
  /** fetch data from the table: "Message" */
  Message: Array<Message>;
  /** fetch aggregated fields from the table: "Message" */
  Message_aggregate: Message_Aggregate;
  /** fetch data from the table: "Message" using primary key columns */
  Message_by_pk?: Maybe<Message>;
  /** fetch data from the table in a streaming manner: "Message" */
  Message_stream: Array<Message>;
};


export type Subscription_RootMessageArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_AggregateArgs = {
  distinct_on?: InputMaybe<Array<Message_Select_Column>>;
  limit?: InputMaybe<Scalars['Int']['input']>;
  offset?: InputMaybe<Scalars['Int']['input']>;
  order_by?: InputMaybe<Array<Message_Order_By>>;
  where?: InputMaybe<Message_Bool_Exp>;
};


export type Subscription_RootMessage_By_PkArgs = {
  id: Scalars['Int']['input'];
};


export type Subscription_RootMessage_StreamArgs = {
  batch_size: Scalars['Int']['input'];
  cursor: Array<InputMaybe<Message_Stream_Cursor_Input>>;
  where?: InputMaybe<Message_Bool_Exp>;
};

export type GetMessagesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetMessagesQuery = { __typename?: 'query_root', Message: Array<{ __typename?: 'Message', id: number, user: string, content: string }> };

export type PostMessageMutationVariables = Exact<{
  user: Scalars['String']['input'];
  content: Scalars['String']['input'];
}>;


export type PostMessageMutation = { __typename?: 'mutation_root', insert_Message_one?: { __typename?: 'Message', id: number, user: string, content: string } | null };


export const GetMessagesDocument = gql`
    query GetMessages {
  Message {
    id
    user
    content
  }
}
    `;

/**
 * __useGetMessagesQuery__
 *
 * To run a query within a React component, call `useGetMessagesQuery` and pass it any options that fit your needs.
 * When your component renders, `useGetMessagesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useGetMessagesQuery({
 *   variables: {
 *   },
 * });
 */
export function useGetMessagesQuery(baseOptions?: Apollo.QueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
      }
export function useGetMessagesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export function useGetMessagesSuspenseQuery(baseOptions?: Apollo.SuspenseQueryHookOptions<GetMessagesQuery, GetMessagesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useSuspenseQuery<GetMessagesQuery, GetMessagesQueryVariables>(GetMessagesDocument, options);
        }
export type GetMessagesQueryHookResult = ReturnType<typeof useGetMessagesQuery>;
export type GetMessagesLazyQueryHookResult = ReturnType<typeof useGetMessagesLazyQuery>;
export type GetMessagesSuspenseQueryHookResult = ReturnType<typeof useGetMessagesSuspenseQuery>;
export type GetMessagesQueryResult = Apollo.QueryResult<GetMessagesQuery, GetMessagesQueryVariables>;
export const PostMessageDocument = gql`
    mutation PostMessage($user: String!, $content: String!) {
  insert_Message_one(object: {user: $user, content: $content}) {
    id
    user
    content
  }
}
    `;
export type PostMessageMutationFn = Apollo.MutationFunction<PostMessageMutation, PostMessageMutationVariables>;

/**
 * __usePostMessageMutation__
 *
 * To run a mutation, you first call `usePostMessageMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `usePostMessageMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [postMessageMutation, { data, loading, error }] = usePostMessageMutation({
 *   variables: {
 *      user: // value for 'user'
 *      content: // value for 'content'
 *   },
 * });
 */
export function usePostMessageMutation(baseOptions?: Apollo.MutationHookOptions<PostMessageMutation, PostMessageMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<PostMessageMutation, PostMessageMutationVariables>(PostMessageDocument, options);
      }
export type PostMessageMutationHookResult = ReturnType<typeof usePostMessageMutation>;
export type PostMessageMutationResult = Apollo.MutationResult<PostMessageMutation>;
export type PostMessageMutationOptions = Apollo.BaseMutationOptions<PostMessageMutation, PostMessageMutationVariables>;