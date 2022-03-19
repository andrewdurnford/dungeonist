import { GraphQLResolveInfo } from 'graphql';
import { Ability, AbilityScoreIncrease, Alignment, Character, CharacterAbility, CharacterClass, CharacterRace, CharacterSkill, Class, Race, Trait, Skill, User } from '.prisma/client';
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

export type IAbilityScoreIncrease = {
  __typename?: 'AbilityScoreIncrease';
  ability: IAbility;
  id: Scalars['ID'];
  increase: Scalars['Int'];
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
  classes: Array<ICharacterClass>;
  /** Range of 0 - 355000 */
  experience: Scalars['Int'];
  flaws?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  ideals?: Maybe<Scalars['String']>;
  inspiration: Scalars['Int'];
  /** Range of 1 - 20 */
  level: Scalars['Int'];
  name: Scalars['String'];
  race?: Maybe<ICharacterRace>;
  skills: Array<ICharacterSkill>;
  traits?: Maybe<Scalars['String']>;
};

export type ICharacterAbility = {
  __typename?: 'CharacterAbility';
  id: Scalars['ID'];
  modifier: Scalars['Int'];
  name: Scalars['String'];
  score: Scalars['Int'];
  skills: Array<ICharacterSkill>;
};

export type ICharacterClass = {
  __typename?: 'CharacterClass';
  id: Scalars['ID'];
  /** Range of 1 - 20 */
  level: Scalars['String'];
  name: Scalars['String'];
};

export type ICharacterCreateInput = {
  name?: InputMaybe<Scalars['String']>;
};

export type ICharacterRace = {
  __typename?: 'CharacterRace';
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ICharacterSkill = {
  __typename?: 'CharacterSkill';
  ability: ICharacterAbility;
  id: Scalars['ID'];
  isProficient: Scalars['Boolean'];
  modifier: Scalars['Int'];
  name: Scalars['String'];
};

export type ICharacterUpdateInput = {
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

export type IClass = {
  __typename?: 'Class';
  id: Scalars['ID'];
  name: Scalars['String'];
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
  characterCreate: ICharacter;
  characterUpdate: ICharacter;
  login: ILoginPayload;
  signup: ISignupPayload;
};


export type IMutationCharacterCreateArgs = {
  input: ICharacterCreateInput;
};


export type IMutationCharacterUpdateArgs = {
  input: ICharacterUpdateInput;
};


export type IMutationLoginArgs = {
  input: ILoginInput;
};


export type IMutationSignupArgs = {
  input: ISignupInput;
};

export type IQuery = {
  __typename?: 'Query';
  abilities: Array<IAbility>;
  ability?: Maybe<IAbility>;
  alignment?: Maybe<IAlignment>;
  alignments: Array<IAlignment>;
  character?: Maybe<ICharacter>;
  characters: Array<ICharacter>;
  class?: Maybe<IClass>;
  classes: Array<IClass>;
  race?: Maybe<IRace>;
  races: Array<IRace>;
  skill?: Maybe<ISkill>;
  skills: Array<ISkill>;
  user?: Maybe<IUser>;
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


export type IQueryClassArgs = {
  id: Scalars['ID'];
};


export type IQueryRaceArgs = {
  id: Scalars['ID'];
};


export type IQuerySkillArgs = {
  id: Scalars['ID'];
};

export type IRace = {
  __typename?: 'Race';
  abilityScoreIncreases: Array<IAbilityScoreIncrease>;
  age?: Maybe<Scalars['String']>;
  alignment?: Maybe<Scalars['String']>;
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  languages?: Maybe<Scalars['String']>;
  name: Scalars['String'];
  size?: Maybe<Scalars['String']>;
  speed?: Maybe<Scalars['String']>;
  traits: Array<ITrait>;
};

export type ISignupInput = {
  email: Scalars['String'];
  password: Scalars['String'];
};

export type ISignupPayload = {
  __typename?: 'SignupPayload';
  token: Scalars['String'];
  user: IUser;
};

export type ISkill = {
  __typename?: 'Skill';
  ability: IAbility;
  id: Scalars['ID'];
  name: Scalars['String'];
};

export type ITrait = {
  __typename?: 'Trait';
  description?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  name: Scalars['String'];
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
  AbilityScoreIncrease: ResolverTypeWrapper<AbilityScoreIncrease>;
  Alignment: ResolverTypeWrapper<Alignment>;
  Boolean: ResolverTypeWrapper<Scalars['Boolean']>;
  Character: ResolverTypeWrapper<Character>;
  CharacterAbility: ResolverTypeWrapper<CharacterAbility>;
  CharacterClass: ResolverTypeWrapper<CharacterClass>;
  CharacterCreateInput: ICharacterCreateInput;
  CharacterRace: ResolverTypeWrapper<CharacterRace>;
  CharacterSkill: ResolverTypeWrapper<CharacterSkill>;
  CharacterUpdateInput: ICharacterUpdateInput;
  Class: ResolverTypeWrapper<Class>;
  ID: ResolverTypeWrapper<Scalars['ID']>;
  Int: ResolverTypeWrapper<Scalars['Int']>;
  LoginInput: ILoginInput;
  LoginPayload: ResolverTypeWrapper<Omit<ILoginPayload, 'user'> & { user: IResolversTypes['User'] }>;
  Mutation: ResolverTypeWrapper<{}>;
  Query: ResolverTypeWrapper<{}>;
  Race: ResolverTypeWrapper<Race>;
  SignupInput: ISignupInput;
  SignupPayload: ResolverTypeWrapper<Omit<ISignupPayload, 'user'> & { user: IResolversTypes['User'] }>;
  Skill: ResolverTypeWrapper<Skill>;
  String: ResolverTypeWrapper<Scalars['String']>;
  Trait: ResolverTypeWrapper<Trait>;
  User: ResolverTypeWrapper<User>;
};

/** Mapping between all available schema types and the resolvers parents */
export type IResolversParentTypes = {
  Ability: Ability;
  AbilityScoreIncrease: AbilityScoreIncrease;
  Alignment: Alignment;
  Boolean: Scalars['Boolean'];
  Character: Character;
  CharacterAbility: CharacterAbility;
  CharacterClass: CharacterClass;
  CharacterCreateInput: ICharacterCreateInput;
  CharacterRace: CharacterRace;
  CharacterSkill: CharacterSkill;
  CharacterUpdateInput: ICharacterUpdateInput;
  Class: Class;
  ID: Scalars['ID'];
  Int: Scalars['Int'];
  LoginInput: ILoginInput;
  LoginPayload: Omit<ILoginPayload, 'user'> & { user: IResolversParentTypes['User'] };
  Mutation: {};
  Query: {};
  Race: Race;
  SignupInput: ISignupInput;
  SignupPayload: Omit<ISignupPayload, 'user'> & { user: IResolversParentTypes['User'] };
  Skill: Skill;
  String: Scalars['String'];
  Trait: Trait;
  User: User;
};

export type IAbilityResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Ability'] = IResolversParentTypes['Ability']> = {
  description?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  skills?: Resolver<Array<IResolversTypes['Skill']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IAbilityScoreIncreaseResolvers<ContextType = Context, ParentType extends IResolversParentTypes['AbilityScoreIncrease'] = IResolversParentTypes['AbilityScoreIncrease']> = {
  ability?: Resolver<IResolversTypes['Ability'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  increase?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
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
  classes?: Resolver<Array<IResolversTypes['CharacterClass']>, ParentType, ContextType>;
  experience?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  flaws?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  ideals?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  inspiration?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  level?: Resolver<IResolversTypes['Int'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  race?: Resolver<Maybe<IResolversTypes['CharacterRace']>, ParentType, ContextType>;
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

export type ICharacterClassResolvers<ContextType = Context, ParentType extends IResolversParentTypes['CharacterClass'] = IResolversParentTypes['CharacterClass']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  level?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ICharacterRaceResolvers<ContextType = Context, ParentType extends IResolversParentTypes['CharacterRace'] = IResolversParentTypes['CharacterRace']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
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

export type IClassResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Class'] = IResolversParentTypes['Class']> = {
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ILoginPayloadResolvers<ContextType = Context, ParentType extends IResolversParentTypes['LoginPayload'] = IResolversParentTypes['LoginPayload']> = {
  token?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<IResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type IMutationResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Mutation'] = IResolversParentTypes['Mutation']> = {
  characterCreate?: Resolver<IResolversTypes['Character'], ParentType, ContextType, RequireFields<IMutationCharacterCreateArgs, 'input'>>;
  characterUpdate?: Resolver<IResolversTypes['Character'], ParentType, ContextType, RequireFields<IMutationCharacterUpdateArgs, 'input'>>;
  login?: Resolver<IResolversTypes['LoginPayload'], ParentType, ContextType, RequireFields<IMutationLoginArgs, 'input'>>;
  signup?: Resolver<IResolversTypes['SignupPayload'], ParentType, ContextType, RequireFields<IMutationSignupArgs, 'input'>>;
};

export type IQueryResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Query'] = IResolversParentTypes['Query']> = {
  abilities?: Resolver<Array<IResolversTypes['Ability']>, ParentType, ContextType>;
  ability?: Resolver<Maybe<IResolversTypes['Ability']>, ParentType, ContextType, RequireFields<IQueryAbilityArgs, 'id'>>;
  alignment?: Resolver<Maybe<IResolversTypes['Alignment']>, ParentType, ContextType, RequireFields<IQueryAlignmentArgs, 'id'>>;
  alignments?: Resolver<Array<IResolversTypes['Alignment']>, ParentType, ContextType>;
  character?: Resolver<Maybe<IResolversTypes['Character']>, ParentType, ContextType, RequireFields<IQueryCharacterArgs, 'id'>>;
  characters?: Resolver<Array<IResolversTypes['Character']>, ParentType, ContextType>;
  class?: Resolver<Maybe<IResolversTypes['Class']>, ParentType, ContextType, RequireFields<IQueryClassArgs, 'id'>>;
  classes?: Resolver<Array<IResolversTypes['Class']>, ParentType, ContextType>;
  race?: Resolver<Maybe<IResolversTypes['Race']>, ParentType, ContextType, RequireFields<IQueryRaceArgs, 'id'>>;
  races?: Resolver<Array<IResolversTypes['Race']>, ParentType, ContextType>;
  skill?: Resolver<Maybe<IResolversTypes['Skill']>, ParentType, ContextType, RequireFields<IQuerySkillArgs, 'id'>>;
  skills?: Resolver<Array<IResolversTypes['Skill']>, ParentType, ContextType>;
  user?: Resolver<Maybe<IResolversTypes['User']>, ParentType, ContextType>;
};

export type IRaceResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Race'] = IResolversParentTypes['Race']> = {
  abilityScoreIncreases?: Resolver<Array<IResolversTypes['AbilityScoreIncrease']>, ParentType, ContextType>;
  age?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  alignment?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  languages?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  size?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  speed?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
  traits?: Resolver<Array<IResolversTypes['Trait']>, ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ISignupPayloadResolvers<ContextType = Context, ParentType extends IResolversParentTypes['SignupPayload'] = IResolversParentTypes['SignupPayload']> = {
  token?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  user?: Resolver<IResolversTypes['User'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ISkillResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Skill'] = IResolversParentTypes['Skill']> = {
  ability?: Resolver<IResolversTypes['Ability'], ParentType, ContextType>;
  id?: Resolver<IResolversTypes['ID'], ParentType, ContextType>;
  name?: Resolver<IResolversTypes['String'], ParentType, ContextType>;
  __isTypeOf?: IsTypeOfResolverFn<ParentType, ContextType>;
};

export type ITraitResolvers<ContextType = Context, ParentType extends IResolversParentTypes['Trait'] = IResolversParentTypes['Trait']> = {
  description?: Resolver<Maybe<IResolversTypes['String']>, ParentType, ContextType>;
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
  AbilityScoreIncrease?: IAbilityScoreIncreaseResolvers<ContextType>;
  Alignment?: IAlignmentResolvers<ContextType>;
  Character?: ICharacterResolvers<ContextType>;
  CharacterAbility?: ICharacterAbilityResolvers<ContextType>;
  CharacterClass?: ICharacterClassResolvers<ContextType>;
  CharacterRace?: ICharacterRaceResolvers<ContextType>;
  CharacterSkill?: ICharacterSkillResolvers<ContextType>;
  Class?: IClassResolvers<ContextType>;
  LoginPayload?: ILoginPayloadResolvers<ContextType>;
  Mutation?: IMutationResolvers<ContextType>;
  Query?: IQueryResolvers<ContextType>;
  Race?: IRaceResolvers<ContextType>;
  SignupPayload?: ISignupPayloadResolvers<ContextType>;
  Skill?: ISkillResolvers<ContextType>;
  Trait?: ITraitResolvers<ContextType>;
  User?: IUserResolvers<ContextType>;
};

