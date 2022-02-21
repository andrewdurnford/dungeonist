import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Ability = {
  __typename?: 'Ability';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  skills: Array<Skill>;
};

export type AbilityScoreIncrease = {
  __typename?: 'AbilityScoreIncrease';
  ability: Ability;
  id: Scalars['ID'];
  increase: Scalars['Int'];
};

export type Alignment = {
  __typename?: 'Alignment';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Character = {
  __typename?: 'Character';
  abilities: Array<CharacterAbility>;
  alignment?: Maybe<Alignment>;
  background?: Maybe<Scalars['String']>;
  bonds?: Maybe<Scalars['String']>;
  /** Range of 0 - 355000 */
  experience: Scalars['Int'];
  flaws?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ideals?: Maybe<Scalars['String']>;
  inspiration: Scalars['Int'];
  /** Range of 1 - 20 */
  level: Scalars['Int'];
  name: Scalars['String'];
  race?: Maybe<CharacterRace>;
  skills: Array<CharacterSkill>;
  traits?: Maybe<Scalars['String']>;
};

export type CharacterAbility = {
  __typename?: 'CharacterAbility';
  id: Scalars['ID'];
  modifier: Scalars['Int'];
  name: Scalars['String'];
  score: Scalars['Int'];
  skills: Array<CharacterSkill>;
};

export type CharacterCreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type CharacterRace = {
  __typename?: 'CharacterRace';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type CharacterSkill = {
  __typename?: 'CharacterSkill';
  ability: CharacterAbility;
  id: Scalars['ID'];
  isProficient: Scalars['Boolean'];
  modifier: Scalars['Int'];
  name: Scalars['String'];
};

export type CharacterUpdateInput = {
  alignmentId?: InputMaybe<Scalars['ID']>;
  background?: InputMaybe<Scalars['String']>;
  bonds?: InputMaybe<Scalars['String']>;
  flaws?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ideals?: InputMaybe<Scalars['String']>;
  /** range 1-20, default 1 */
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  raceId?: InputMaybe<Scalars['ID']>;
  traits?: InputMaybe<Scalars['String']>;
};

export type LoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type LoginPayload = {
  __typename?: 'LoginPayload';
  token: Scalars['String'];
  user: User;
};

export type Mutation = {
  __typename?: 'Mutation';
  characterCreate: Character;
  characterUpdate: Character;
  login: LoginPayload;
  signup: SignupPayload;
};


export type MutationCharacterCreateArgs = {
  input: CharacterCreateInput;
};


export type MutationCharacterUpdateArgs = {
  input: CharacterUpdateInput;
};


export type MutationLoginArgs = {
  input: LoginInput;
};


export type MutationSignupArgs = {
  input: SignupInput;
};

export type Query = {
  __typename?: 'Query';
  abilities: Array<Ability>;
  ability?: Maybe<Ability>;
  alignment?: Maybe<Alignment>;
  alignments: Array<Alignment>;
  character?: Maybe<Character>;
  characters: Array<Character>;
  race?: Maybe<Race>;
  races: Array<Race>;
  skill?: Maybe<Skill>;
  skills: Array<Skill>;
  user?: Maybe<User>;
};


export type QueryAbilityArgs = {
  id: Scalars['ID'];
};


export type QueryAlignmentArgs = {
  id: Scalars['ID'];
};


export type QueryCharacterArgs = {
  id: Scalars['ID'];
};


export type QueryRaceArgs = {
  id: Scalars['ID'];
};


export type QuerySkillArgs = {
  id: Scalars['ID'];
};

export type Race = {
  __typename?: 'Race';
  abilityScoreIncreases: Array<AbilityScoreIncrease>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  languages?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['String']>;
  traits: Array<Trait>;
};

export type SignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type SignupPayload = {
  __typename?: 'SignupPayload';
  token: Scalars['String'];
  user: User;
};

export type Skill = {
  __typename?: 'Skill';
  ability: Ability;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type Trait = {
  __typename?: 'Trait';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type User = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
};

export type CharacterDetailsFragment = { __typename?: 'Character', id: string, name: string, level: number, experience: number, inspiration: number, background?: string | null | undefined, traits?: string | null | undefined, ideals?: string | null | undefined, bonds?: string | null | undefined, flaws?: string | null | undefined, alignment?: { __typename?: 'Alignment', id: string, name: string } | null | undefined, race?: { __typename?: 'CharacterRace', id: string, name: string } | null | undefined, abilities: Array<{ __typename?: 'CharacterAbility', id: string, name: string, score: number, modifier: number }>, skills: Array<{ __typename?: 'CharacterSkill', id: string, name: string, modifier: number, isProficient: boolean, ability: { __typename?: 'CharacterAbility', id: string, name: string } }> };

export type RaceDetailsFragment = { __typename?: 'Race', id: string, name: string, description?: string | null | undefined, age?: string | null | undefined, alignment?: string | null | undefined, size?: string | null | undefined, speed?: string | null | undefined, languages?: string | null | undefined, traits: Array<{ __typename?: 'Trait', id: string, name: string, description?: string | null | undefined }>, abilityScoreIncreases: Array<{ __typename?: 'AbilityScoreIncrease', id: string, increase: number, ability: { __typename?: 'Ability', id: string, name: string } }> };

export type CharacterCreateMutationVariables = Exact<{
  input: CharacterCreateInput;
}>;


export type CharacterCreateMutation = { __typename?: 'Mutation', characterCreate: { __typename?: 'Character', id: string, name: string } };

export type CharacterUpdateMutationVariables = Exact<{
  input: CharacterUpdateInput;
}>;


export type CharacterUpdateMutation = { __typename?: 'Mutation', characterUpdate: { __typename?: 'Character', id: string, name: string, level: number, experience: number, inspiration: number, background?: string | null | undefined, traits?: string | null | undefined, ideals?: string | null | undefined, bonds?: string | null | undefined, flaws?: string | null | undefined, alignment?: { __typename?: 'Alignment', id: string, name: string } | null | undefined, race?: { __typename?: 'CharacterRace', id: string, name: string } | null | undefined, abilities: Array<{ __typename?: 'CharacterAbility', id: string, name: string, score: number, modifier: number }>, skills: Array<{ __typename?: 'CharacterSkill', id: string, name: string, modifier: number, isProficient: boolean, ability: { __typename?: 'CharacterAbility', id: string, name: string } }> } };

export type LoginMutationVariables = Exact<{
  input: LoginInput;
}>;


export type LoginMutation = { __typename?: 'Mutation', login: { __typename?: 'LoginPayload', token: string, user: { __typename?: 'User', id: string, email: string } } };

export type SignupMutationVariables = Exact<{
  input: SignupInput;
}>;


export type SignupMutation = { __typename?: 'Mutation', signup: { __typename?: 'SignupPayload', token: string, user: { __typename?: 'User', id: string, email: string } } };

export type AlignmentsQueryVariables = Exact<{ [key: string]: never; }>;


export type AlignmentsQuery = { __typename?: 'Query', alignments: Array<{ __typename?: 'Alignment', id: string, name: string }> };

export type CharacterQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type CharacterQuery = { __typename?: 'Query', character?: { __typename?: 'Character', id: string, name: string, level: number, experience: number, inspiration: number, background?: string | null | undefined, traits?: string | null | undefined, ideals?: string | null | undefined, bonds?: string | null | undefined, flaws?: string | null | undefined, alignment?: { __typename?: 'Alignment', id: string, name: string } | null | undefined, race?: { __typename?: 'CharacterRace', id: string, name: string } | null | undefined, abilities: Array<{ __typename?: 'CharacterAbility', id: string, name: string, score: number, modifier: number }>, skills: Array<{ __typename?: 'CharacterSkill', id: string, name: string, modifier: number, isProficient: boolean, ability: { __typename?: 'CharacterAbility', id: string, name: string } }> } | null | undefined };

export type CharactersQueryVariables = Exact<{ [key: string]: never; }>;


export type CharactersQuery = { __typename?: 'Query', characters: Array<{ __typename?: 'Character', id: string, name: string }> };

export type RaceQueryVariables = Exact<{
  id: Scalars['ID'];
}>;


export type RaceQuery = { __typename?: 'Query', race?: { __typename?: 'Race', id: string, name: string, description?: string | null | undefined, age?: string | null | undefined, alignment?: string | null | undefined, size?: string | null | undefined, speed?: string | null | undefined, languages?: string | null | undefined, traits: Array<{ __typename?: 'Trait', id: string, name: string, description?: string | null | undefined }>, abilityScoreIncreases: Array<{ __typename?: 'AbilityScoreIncrease', id: string, increase: number, ability: { __typename?: 'Ability', id: string, name: string } }> } | null | undefined };

export type RacesQueryVariables = Exact<{ [key: string]: never; }>;


export type RacesQuery = { __typename?: 'Query', races: Array<{ __typename?: 'Race', id: string, name: string }> };

export type UserQueryVariables = Exact<{ [key: string]: never; }>;


export type UserQuery = { __typename?: 'Query', user?: { __typename?: 'User', id: string, email: string } | null | undefined };

export const CharacterDetailsFragmentDoc = gql`
    fragment CharacterDetails on Character {
  id
  name
  level
  experience
  inspiration
  background
  alignment {
    id
    name
  }
  traits
  ideals
  bonds
  flaws
  race {
    id
    name
  }
  abilities {
    id
    name
    score
    modifier
  }
  skills {
    id
    name
    modifier
    isProficient
    ability {
      id
      name
    }
  }
}
    `;
export const RaceDetailsFragmentDoc = gql`
    fragment RaceDetails on Race {
  id
  name
  description
  age
  alignment
  size
  speed
  languages
  traits {
    id
    name
    description
  }
  abilityScoreIncreases {
    id
    ability {
      id
      name
    }
    increase
  }
}
    `;
export const CharacterCreateDocument = gql`
    mutation CharacterCreate($input: CharacterCreateInput!) {
  characterCreate(input: $input) {
    id
    name
  }
}
    `;
export type CharacterCreateMutationFn = Apollo.MutationFunction<CharacterCreateMutation, CharacterCreateMutationVariables>;

/**
 * __useCharacterCreateMutation__
 *
 * To run a mutation, you first call `useCharacterCreateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCharacterCreateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [characterCreateMutation, { data, loading, error }] = useCharacterCreateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCharacterCreateMutation(baseOptions?: Apollo.MutationHookOptions<CharacterCreateMutation, CharacterCreateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CharacterCreateMutation, CharacterCreateMutationVariables>(CharacterCreateDocument, options);
      }
export type CharacterCreateMutationHookResult = ReturnType<typeof useCharacterCreateMutation>;
export type CharacterCreateMutationResult = Apollo.MutationResult<CharacterCreateMutation>;
export type CharacterCreateMutationOptions = Apollo.BaseMutationOptions<CharacterCreateMutation, CharacterCreateMutationVariables>;
export const CharacterUpdateDocument = gql`
    mutation CharacterUpdate($input: CharacterUpdateInput!) {
  characterUpdate(input: $input) {
    ...CharacterDetails
  }
}
    ${CharacterDetailsFragmentDoc}`;
export type CharacterUpdateMutationFn = Apollo.MutationFunction<CharacterUpdateMutation, CharacterUpdateMutationVariables>;

/**
 * __useCharacterUpdateMutation__
 *
 * To run a mutation, you first call `useCharacterUpdateMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useCharacterUpdateMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [characterUpdateMutation, { data, loading, error }] = useCharacterUpdateMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useCharacterUpdateMutation(baseOptions?: Apollo.MutationHookOptions<CharacterUpdateMutation, CharacterUpdateMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<CharacterUpdateMutation, CharacterUpdateMutationVariables>(CharacterUpdateDocument, options);
      }
export type CharacterUpdateMutationHookResult = ReturnType<typeof useCharacterUpdateMutation>;
export type CharacterUpdateMutationResult = Apollo.MutationResult<CharacterUpdateMutation>;
export type CharacterUpdateMutationOptions = Apollo.BaseMutationOptions<CharacterUpdateMutation, CharacterUpdateMutationVariables>;
export const LoginDocument = gql`
    mutation Login($input: LoginInput!) {
  login(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;
export type LoginMutationFn = Apollo.MutationFunction<LoginMutation, LoginMutationVariables>;

/**
 * __useLoginMutation__
 *
 * To run a mutation, you first call `useLoginMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useLoginMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [loginMutation, { data, loading, error }] = useLoginMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useLoginMutation(baseOptions?: Apollo.MutationHookOptions<LoginMutation, LoginMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, options);
      }
export type LoginMutationHookResult = ReturnType<typeof useLoginMutation>;
export type LoginMutationResult = Apollo.MutationResult<LoginMutation>;
export type LoginMutationOptions = Apollo.BaseMutationOptions<LoginMutation, LoginMutationVariables>;
export const SignupDocument = gql`
    mutation Signup($input: SignupInput!) {
  signup(input: $input) {
    token
    user {
      id
      email
    }
  }
}
    `;
export type SignupMutationFn = Apollo.MutationFunction<SignupMutation, SignupMutationVariables>;

/**
 * __useSignupMutation__
 *
 * To run a mutation, you first call `useSignupMutation` within a React component and pass it any options that fit your needs.
 * When your component renders, `useSignupMutation` returns a tuple that includes:
 * - A mutate function that you can call at any time to execute the mutation
 * - An object with fields that represent the current status of the mutation's execution
 *
 * @param baseOptions options that will be passed into the mutation, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options-2;
 *
 * @example
 * const [signupMutation, { data, loading, error }] = useSignupMutation({
 *   variables: {
 *      input: // value for 'input'
 *   },
 * });
 */
export function useSignupMutation(baseOptions?: Apollo.MutationHookOptions<SignupMutation, SignupMutationVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useMutation<SignupMutation, SignupMutationVariables>(SignupDocument, options);
      }
export type SignupMutationHookResult = ReturnType<typeof useSignupMutation>;
export type SignupMutationResult = Apollo.MutationResult<SignupMutation>;
export type SignupMutationOptions = Apollo.BaseMutationOptions<SignupMutation, SignupMutationVariables>;
export const AlignmentsDocument = gql`
    query Alignments {
  alignments {
    id
    name
  }
}
    `;

/**
 * __useAlignmentsQuery__
 *
 * To run a query within a React component, call `useAlignmentsQuery` and pass it any options that fit your needs.
 * When your component renders, `useAlignmentsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useAlignmentsQuery({
 *   variables: {
 *   },
 * });
 */
export function useAlignmentsQuery(baseOptions?: Apollo.QueryHookOptions<AlignmentsQuery, AlignmentsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<AlignmentsQuery, AlignmentsQueryVariables>(AlignmentsDocument, options);
      }
export function useAlignmentsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<AlignmentsQuery, AlignmentsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<AlignmentsQuery, AlignmentsQueryVariables>(AlignmentsDocument, options);
        }
export type AlignmentsQueryHookResult = ReturnType<typeof useAlignmentsQuery>;
export type AlignmentsLazyQueryHookResult = ReturnType<typeof useAlignmentsLazyQuery>;
export type AlignmentsQueryResult = Apollo.QueryResult<AlignmentsQuery, AlignmentsQueryVariables>;
export const CharacterDocument = gql`
    query Character($id: ID!) {
  character(id: $id) {
    ...CharacterDetails
  }
}
    ${CharacterDetailsFragmentDoc}`;

/**
 * __useCharacterQuery__
 *
 * To run a query within a React component, call `useCharacterQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharacterQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharacterQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useCharacterQuery(baseOptions: Apollo.QueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
      }
export function useCharacterLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharacterQuery, CharacterQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharacterQuery, CharacterQueryVariables>(CharacterDocument, options);
        }
export type CharacterQueryHookResult = ReturnType<typeof useCharacterQuery>;
export type CharacterLazyQueryHookResult = ReturnType<typeof useCharacterLazyQuery>;
export type CharacterQueryResult = Apollo.QueryResult<CharacterQuery, CharacterQueryVariables>;
export const CharactersDocument = gql`
    query Characters {
  characters {
    id
    name
  }
}
    `;

/**
 * __useCharactersQuery__
 *
 * To run a query within a React component, call `useCharactersQuery` and pass it any options that fit your needs.
 * When your component renders, `useCharactersQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useCharactersQuery({
 *   variables: {
 *   },
 * });
 */
export function useCharactersQuery(baseOptions?: Apollo.QueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
      }
export function useCharactersLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<CharactersQuery, CharactersQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<CharactersQuery, CharactersQueryVariables>(CharactersDocument, options);
        }
export type CharactersQueryHookResult = ReturnType<typeof useCharactersQuery>;
export type CharactersLazyQueryHookResult = ReturnType<typeof useCharactersLazyQuery>;
export type CharactersQueryResult = Apollo.QueryResult<CharactersQuery, CharactersQueryVariables>;
export const RaceDocument = gql`
    query Race($id: ID!) {
  race(id: $id) {
    ...RaceDetails
  }
}
    ${RaceDetailsFragmentDoc}`;

/**
 * __useRaceQuery__
 *
 * To run a query within a React component, call `useRaceQuery` and pass it any options that fit your needs.
 * When your component renders, `useRaceQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRaceQuery({
 *   variables: {
 *      id: // value for 'id'
 *   },
 * });
 */
export function useRaceQuery(baseOptions: Apollo.QueryHookOptions<RaceQuery, RaceQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RaceQuery, RaceQueryVariables>(RaceDocument, options);
      }
export function useRaceLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RaceQuery, RaceQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RaceQuery, RaceQueryVariables>(RaceDocument, options);
        }
export type RaceQueryHookResult = ReturnType<typeof useRaceQuery>;
export type RaceLazyQueryHookResult = ReturnType<typeof useRaceLazyQuery>;
export type RaceQueryResult = Apollo.QueryResult<RaceQuery, RaceQueryVariables>;
export const RacesDocument = gql`
    query Races {
  races {
    id
    name
  }
}
    `;

/**
 * __useRacesQuery__
 *
 * To run a query within a React component, call `useRacesQuery` and pass it any options that fit your needs.
 * When your component renders, `useRacesQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useRacesQuery({
 *   variables: {
 *   },
 * });
 */
export function useRacesQuery(baseOptions?: Apollo.QueryHookOptions<RacesQuery, RacesQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<RacesQuery, RacesQueryVariables>(RacesDocument, options);
      }
export function useRacesLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<RacesQuery, RacesQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<RacesQuery, RacesQueryVariables>(RacesDocument, options);
        }
export type RacesQueryHookResult = ReturnType<typeof useRacesQuery>;
export type RacesLazyQueryHookResult = ReturnType<typeof useRacesLazyQuery>;
export type RacesQueryResult = Apollo.QueryResult<RacesQuery, RacesQueryVariables>;
export const UserDocument = gql`
    query User {
  user {
    id
    email
  }
}
    `;

/**
 * __useUserQuery__
 *
 * To run a query within a React component, call `useUserQuery` and pass it any options that fit your needs.
 * When your component renders, `useUserQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = useUserQuery({
 *   variables: {
 *   },
 * });
 */
export function useUserQuery(baseOptions?: Apollo.QueryHookOptions<UserQuery, UserQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<UserQuery, UserQueryVariables>(UserDocument, options);
      }
export function useUserLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<UserQuery, UserQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<UserQuery, UserQueryVariables>(UserDocument, options);
        }
export type UserQueryHookResult = ReturnType<typeof useUserQuery>;
export type UserLazyQueryHookResult = ReturnType<typeof useUserLazyQuery>;
export type UserQueryResult = Apollo.QueryResult<UserQuery, UserQueryVariables>;