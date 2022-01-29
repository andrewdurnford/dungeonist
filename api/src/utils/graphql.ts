import { GraphQLResolveInfo } from 'graphql';
import { Ability, Alignment, Character, CharacterAbility, CharacterSkill, Skill, User } from '.prisma/client';
import { Context } from './context';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type Omit<T, K extends keyof T> = Pick<T, Exclude<keyof T, K>>;
export type RequireFields<T, K extends keyof T> = { [X in Exclude<keyof T, K>]?: T[X] } & { [P in K]-?: NonNullable<T[P]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type IAbility = {
  __typename?: 'Ability';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
  skills: Array<ISkill>;
};

export type IAlignment = {
  __typename?: 'Alignment';
  description: Scalars['String'];
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ICharacter = {
  __typename?: 'Character';
  abilities: Array<ICharacterAbility>;
  alignment?: Maybe<IAlignment>;
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
  skills: Array<ICharacterSkill>;
  traits?: Maybe<Scalars['String']>;
};

export type ICharacterAbility = {
  __typename?: 'CharacterAbility';
  id: Scalars['ID'];
  modifier: Scalars['Int'];
  /** flattened from ability.name */
  name: Scalars['String'];
  score: Scalars['Int'];
  /** related via skill.abilityId -> characterAbility.abilityId */
  skills: Array<ICharacterSkill>;
};

export type ICharacterSkill = {
  __typename?: 'CharacterSkill';
  /** related via skill.abilityId -> characterAbility.abilityId */
  ability: ICharacterAbility;
  id: Scalars['ID'];
  isProficient: Scalars['Boolean'];
  modifier: Scalars['Int'];
  /** flattened from skill.name */
  name: Scalars['String'];
};

export type ICreateCharacterInput = {
  /** range 1-20, default 1 */
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
};

export type ICreateCharacterPayload = {
  __typename?: 'CreateCharacterPayload';
  character: ICharacter;
};

export type ILoginInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ILoginPayload = {
  __typename?: 'LoginPayload';
  token: Scalars['String'];
  user: IUser;
};

export type IMutation = {
  __typename?: 'Mutation';
  createCharacter: ICreateCharacterPayload;
  login: ILoginPayload;
  signup: Scalars['Boolean'];
  updateCharacterDetails: ICharacter;
};


export type IMutationCreateCharacterArgs = {
  input: ICreateCharacterInput;
};


export type IMutationLoginArgs = {
  input: ILoginInput;
};


export type IMutationSignupArgs = {
  input: ISignupInput;
};


export type IMutationUpdateCharacterDetailsArgs = {
  input: IUpdateCharacterDetailsInput;
};

export type IQuery = {
  __typename?: 'Query';
  abilities: Array<IAbility>;
  ability?: Maybe<IAbility>;
  alignment?: Maybe<IAlignment>;
  alignments: Array<IAlignment>;
  character?: Maybe<ICharacter>;
  characters: Array<ICharacter>;
  me?: Maybe<IUser>;
  skill?: Maybe<ISkill>;
  skills: Array<ISkill>;
};


export type IQueryAbilityArgs = {
  id: Scalars['ID'];
};


export type IQueryAlignmentArgs = {
  id: Scalars['ID'];
};


export type IQueryCharacterArgs = {
  id: Scalars['ID'];
};


export type IQuerySkillArgs = {
  id: Scalars['ID'];
};

export type ISignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ISkill = {
  __typename?: 'Skill';
  ability: IAbility;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type IUpdateCharacterDetailsInput = {
  alignmentId?: InputMaybe<Scalars['ID']>;
  background?: InputMaybe<Scalars['String']>;
  bonds?: InputMaybe<Scalars['String']>;
  flaws?: InputMaybe<Scalars['String']>;
  id: Scalars['ID'];
  ideals?: InputMaybe<Scalars['String']>;
  /** range 1-20, default 1 */
  level?: InputMaybe<Scalars['Int']>;
  name?: InputMaybe<Scalars['String']>;
  traits?: InputMaybe<Scalars['String']>;
};

export type IUser = {
  __typename?: 'User';
  email: Scalars['String'];
  id: Scalars['ID'];
};



export type ResolverTypeWrapper<T> = Promise<T> | T;


export type ResolverWithResolve<TResult, TParent, TContext, TArgs> = {
  resolve: ResolverFn<TResult, TParent, TContext, TArgs>;
};
export type Resolver<TResult, TParent = {}, TContext = {}, TArgs = {}> = ResolverFn<TResult, TParent, TContext, TArgs> | ResolverWithResolve<TResult, TParent, TContext, TArgs>;

export type ResolverFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => Promise<TResult> | TResult;

export type SubscriptionSubscribeFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => AsyncIterable<TResult> | Promise<AsyncIterable<TResult>>;

export type SubscriptionResolveFn<TResult, TParent, TContext, TArgs> = (
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

export interface SubscriptionSubscriberObject<TResult, TKey extends string, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<{ [key in TKey]: TResult }, TParent, TContext, TArgs>;
  resolve?: SubscriptionResolveFn<TResult, { [key in TKey]: TResult }, TContext, TArgs>;
}

export interface SubscriptionResolverObject<TResult, TParent, TContext, TArgs> {
  subscribe: SubscriptionSubscribeFn<any, TParent, TContext, TArgs>;
  resolve: SubscriptionResolveFn<TResult, any, TContext, TArgs>;
}

export type SubscriptionObject<TResult, TKey extends string, TParent, TContext, TArgs> =
  | SubscriptionSubscriberObject<TResult, TKey, TParent, TContext, TArgs>
  | SubscriptionResolverObject<TResult, TParent, TContext, TArgs>;

export type SubscriptionResolver<TResult, TKey extends string, TParent = {}, TContext = {}, TArgs = {}> =
  | ((...args: any[]) => SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>)
  | SubscriptionObject<TResult, TKey, TParent, TContext, TArgs>;

export type TypeResolveFn<TTypes, TParent = {}, TContext = {}> = (
  parent: TParent,
  context: TContext,
  info: GraphQLResolveInfo
) => Maybe<TTypes> | Promise<Maybe<TTypes>>;

export type IsTypeOfResolverFn<T = {}, TContext = {}> = (obj: T, context: TContext, info: GraphQLResolveInfo) => boolean | Promise<boolean>;

export type NextResolverFn<T> = () => Promise<T>;

export type DirectiveResolverFn<TResult = {}, TParent = {}, TContext = {}, TArgs = {}> = (
  next: NextResolverFn<TResult>,
  parent: TParent,
  args: TArgs,
  context: TContext,
  info: GraphQLResolveInfo
) => TResult | Promise<TResult>;

/** Mapping between all available schema types and the resolvers types */
export type IResolversTypes = {
  Ability: ResolverTypeWrapper<Ability>;
  Alignment: ResolverTypeWrapper<Alignment>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Character: ResolverTypeWrapper<Character>;
  CharacterAbility: ResolverTypeWrapper<CharacterAbility>;
  CharacterSkill: ResolverTypeWrapper<CharacterSkill>;
  CreateCharacterInput: ICreateCharacterInput;
  CreateCharacterPayload: ResolverTypeWrapper<Omit<ICreateCharacterPayload, 'character'> & { character: IResolversTypes['Character'] }>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginInput: ILoginInput;
  LoginPayload: ResolverTypeWrapper<Omit<ILoginPayload, 'user'> & { user: IResolversTypes['User'] }>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  SignupInput: ISignupInput;
  Skill: ResolverTypeWrapper<Skill>;
  String: ResolverTypeWrapper<Scalars['String']>;
  UpdateCharacterDetailsInput: IUpdateCharacterDetailsInput;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Ability: Ability;
  Alignment: Alignment;
  Boolean: Scalars['Boolean'];
  Character: Character;
  CharacterAbility: CharacterAbility;
  CharacterSkill: CharacterSkill;
  CreateCharacterInput: ICreateCharacterInput;
  CreateCharacterPayload: Omit<ICreateCharacterPayload, 'character'> & { character: IResolversParentTypes['Character'] };
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LoginInput: ILoginInput;
  LoginPayload: Omit<ILoginPayload, 'user'> & { user: IResolversParentTypes['User'] };
  Mutation: {};
  Query: {};
  SignupInput: ISignupInput;
  Skill: Skill;
  String: Scalars['String'];
  UpdateCharacterDetailsInput: IUpdateCharacterDetailsInput;
  User: User;
};

export type IAbilityResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Ability'] = IResolversParentTypes['Ability']> = {
  description?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<Array<IResolversTypes['Skill']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAlignmentResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Alignment'] = IResolversParentTypes['Alignment']> = {
  description?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICharacterResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Character'] = IResolversParentTypes['Character']> = {
  abilities?: Resolver<Array<IResolversTypes['CharacterAbility']>, ParentType, ContextType>;
  alignment?: Resolver<Maybe<IResolversTypes['Alignment']>, ParentType, ContextType>;
  background?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  bonds?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  experience?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  flaws?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  ideals?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  inspiration?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<Array<IResolversTypes['CharacterSkill']>, ParentType, ContextType>;
  traits?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICharacterAbilityResolvers<ContextType = Context, ParentType extends IResolversParentTypes['CharacterAbility'] = IResolversParentTypes['CharacterAbility']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  modifier?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  score?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  skills?: Resolver<Array<IResolversTypes['CharacterSkill']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICharacterSkillResolvers<ContextType = Context, ParentType extends IResolversParentTypes['CharacterSkill'] = IResolversParentTypes['CharacterSkill']> = {
  ability?: Resolver<IResolversTypes['CharacterAbility'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  isProficient?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType>;
  modifier?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICreateCharacterPayloadResolvers<ContextType = Context, ParentType extends IResolversParentTypes['CreateCharacterPayload'] = IResolversParentTypes['CreateCharacterPayload']> = {
  character?: Resolver<IResolversTypes['Character'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ILoginPayloadResolvers<ContextType = Context, ParentType extends IResolversParentTypes['LoginPayload'] = IResolversParentTypes['LoginPayload']> = {
  token?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<IResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  createCharacter?: Resolver<IResolversTypes['CreateCharacterPayload'], ParentType, ContextType, RequireFields<IMutationCreateCharacterArgs, 'input'>>;
  login?: Resolver<IResolversTypes['LoginPayload'], ParentType, ContextType, RequireFields<IMutationLoginArgs, 'input'>>;
  signup?: Resolver<IResolversTypes['Boolean'], ParentType, ContextType, RequireFields<IMutationSignupArgs, 'input'>>;
  updateCharacterDetails?: Resolver<IResolversTypes['Character'], ParentType, ContextType, RequireFields<IMutationUpdateCharacterDetailsArgs, 'input'>>;
};

export type IQueryResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  abilities?: Resolver<Array<IResolversTypes['Ability']>, ParentType, ContextType>;
  ability?: Resolver<Maybe<IResolversTypes['Ability']>, ParentType, ContextType, RequireFields<IQueryAbilityArgs, 'id'>>;
  alignment?: Resolver<Maybe<IResolversTypes['Alignment']>, ParentType, ContextType, RequireFields<IQueryAlignmentArgs, 'id'>>;
  alignments?: Resolver<Array<IResolversTypes['Alignment']>, ParentType, ContextType>;
  character?: Resolver<Maybe<IResolversTypes['Character']>, ParentType, ContextType, RequireFields<IQueryCharacterArgs, 'id'>>;
  characters?: Resolver<Array<IResolversTypes['Character']>, ParentType, ContextType>;
  me?: Resolver<Maybe<IResolversTypes['User']>, ParentType, ContextType>;
  skill?: Resolver<Maybe<IResolversTypes['Skill']>, ParentType, ContextType, RequireFields<IQuerySkillArgs, 'id'>>;
  skills?: Resolver<Array<IResolversTypes['Skill']>, ParentType, ContextType>;
};

export type ISkillResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Skill'] = IResolversParentTypes['Skill']> = {
  ability?: Resolver<IResolversTypes['Ability'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IUserResolvers<ContextType = Context, ParentType extends IResolversParentTypes['User'] = IResolversParentTypes['User']> = {
  email?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IResolvers<ContextType = Context> = {
  Ability?: IAbilityResolvers<ContextType>;
  Alignment?: IAlignmentResolvers<ContextType>;
  Character?: ICharacterResolvers<ContextType>;
  CharacterAbility?: ICharacterAbilityResolvers<ContextType>;
  CharacterSkill?: ICharacterSkillResolvers<ContextType>;
  CreateCharacterPayload?: ICreateCharacterPayloadResolvers<ContextType>;
  LoginPayload?: ILoginPayloadResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  Skill?: ISkillResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
};


import gql from "graphql-tag";

export const typeDefs = gql`
type Ability {
  description: String!
  id: ID!
  name: String!
  skills: [Skill!]!
}

type Alignment {
  description: String!
  id: ID!
  name: String!
}

type Character {
  abilities: [CharacterAbility!]!
  alignment: Alignment
  background: String
  bonds: String

  """Range of 0 - 355000"""
  experience: Int!
  flaws: String
  id: ID!
  ideals: String
  inspiration: Int!

  """Range of 1 - 20"""
  level: Int!
  name: String!
  skills: [CharacterSkill!]!
  traits: String
}

type CharacterAbility {
  id: ID!
  modifier: Int!

  """flattened from ability.name"""
  name: String!
  score: Int!

  """related via skill.abilityId -> characterAbility.abilityId"""
  skills: [CharacterSkill!]!
}

type CharacterSkill {
  """related via skill.abilityId -> characterAbility.abilityId"""
  ability: CharacterAbility!
  id: ID!
  isProficient: Boolean!
  modifier: Int!

  """flattened from skill.name"""
  name: String!
}

input CreateCharacterInput {
  """range 1-20, default 1"""
  level: Int
  name: String
}

type CreateCharacterPayload {
  character: Character!
}

input LoginInput {
  email: String!
  password: String!
}

type LoginPayload {
  token: String!
  user: User!
}

type Mutation {
  createCharacter(input: CreateCharacterInput!): CreateCharacterPayload!
  login(input: LoginInput!): LoginPayload!
  signup(input: SignupInput!): Boolean!
  updateCharacterDetails(input: UpdateCharacterDetailsInput!): Character!
}

type Query {
  abilities: [Ability!]!
  ability(id: ID!): Ability
  alignment(id: ID!): Alignment
  alignments: [Alignment!]!
  character(id: ID!): Character
  characters: [Character!]!
  me: User
  skill(id: ID!): Skill
  skills: [Skill!]!
}

input SignupInput {
  email: String!
  password: String!
}

type Skill {
  ability: Ability!
  id: ID!
  name: String!
}

input UpdateCharacterDetailsInput {
  alignmentId: ID
  background: String
  bonds: String
  flaws: String
  id: ID!
  ideals: String

  """range 1-20, default 1"""
  level: Int
  name: String
  traits: String
}

type User {
  email: String!
  id: ID!
}
`;
