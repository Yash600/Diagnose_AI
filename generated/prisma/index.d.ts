
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Project
 * 
 */
export type Project = $Result.DefaultSelection<Prisma.$ProjectPayload>
/**
 * Model UserToProject
 * 
 */
export type UserToProject = $Result.DefaultSelection<Prisma.$UserToProjectPayload>
/**
 * Model SourceCodeEmbedding
 * 
 */
export type SourceCodeEmbedding = $Result.DefaultSelection<Prisma.$SourceCodeEmbeddingPayload>
/**
 * Model Meeting
 * 
 */
export type Meeting = $Result.DefaultSelection<Prisma.$MeetingPayload>
/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model RazorpayTransaction
 * 
 */
export type RazorpayTransaction = $Result.DefaultSelection<Prisma.$RazorpayTransactionPayload>
/**
 * Model Question
 * 
 */
export type Question = $Result.DefaultSelection<Prisma.$QuestionPayload>
/**
 * Model Commit
 * 
 */
export type Commit = $Result.DefaultSelection<Prisma.$CommitPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const MeetingStatus: {
  PROCESSING: 'PROCESSING',
  COMPLETED: 'COMPLETED'
};

export type MeetingStatus = (typeof MeetingStatus)[keyof typeof MeetingStatus]

}

export type MeetingStatus = $Enums.MeetingStatus

export const MeetingStatus: typeof $Enums.MeetingStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  const U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.project`: Exposes CRUD operations for the **Project** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Projects
    * const projects = await prisma.project.findMany()
    * ```
    */
  get project(): Prisma.ProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.userToProject`: Exposes CRUD operations for the **UserToProject** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more UserToProjects
    * const userToProjects = await prisma.userToProject.findMany()
    * ```
    */
  get userToProject(): Prisma.UserToProjectDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.sourceCodeEmbedding`: Exposes CRUD operations for the **SourceCodeEmbedding** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more SourceCodeEmbeddings
    * const sourceCodeEmbeddings = await prisma.sourceCodeEmbedding.findMany()
    * ```
    */
  get sourceCodeEmbedding(): Prisma.SourceCodeEmbeddingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.meeting`: Exposes CRUD operations for the **Meeting** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Meetings
    * const meetings = await prisma.meeting.findMany()
    * ```
    */
  get meeting(): Prisma.MeetingDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.razorpayTransaction`: Exposes CRUD operations for the **RazorpayTransaction** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more RazorpayTransactions
    * const razorpayTransactions = await prisma.razorpayTransaction.findMany()
    * ```
    */
  get razorpayTransaction(): Prisma.RazorpayTransactionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.question`: Exposes CRUD operations for the **Question** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Questions
    * const questions = await prisma.question.findMany()
    * ```
    */
  get question(): Prisma.QuestionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.commit`: Exposes CRUD operations for the **Commit** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Commits
    * const commits = await prisma.commit.findMany()
    * ```
    */
  get commit(): Prisma.CommitDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.19.3
   * Query Engine version: c2990dca591cba766e3b7ef5d9e8a84796e47ab7
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import Bytes = runtime.Bytes
  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    User: 'User',
    Project: 'Project',
    UserToProject: 'UserToProject',
    SourceCodeEmbedding: 'SourceCodeEmbedding',
    Meeting: 'Meeting',
    Issue: 'Issue',
    RazorpayTransaction: 'RazorpayTransaction',
    Question: 'Question',
    Commit: 'Commit'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "user" | "project" | "userToProject" | "sourceCodeEmbedding" | "meeting" | "issue" | "razorpayTransaction" | "question" | "commit"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Project: {
        payload: Prisma.$ProjectPayload<ExtArgs>
        fields: Prisma.ProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findFirst: {
            args: Prisma.ProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          findMany: {
            args: Prisma.ProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          create: {
            args: Prisma.ProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          createMany: {
            args: Prisma.ProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          delete: {
            args: Prisma.ProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          update: {
            args: Prisma.ProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          deleteMany: {
            args: Prisma.ProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>[]
          }
          upsert: {
            args: Prisma.ProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProjectPayload>
          }
          aggregate: {
            args: Prisma.ProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProject>
          }
          groupBy: {
            args: Prisma.ProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProjectCountArgs<ExtArgs>
            result: $Utils.Optional<ProjectCountAggregateOutputType> | number
          }
        }
      }
      UserToProject: {
        payload: Prisma.$UserToProjectPayload<ExtArgs>
        fields: Prisma.UserToProjectFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserToProjectFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserToProjectFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>
          }
          findFirst: {
            args: Prisma.UserToProjectFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserToProjectFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>
          }
          findMany: {
            args: Prisma.UserToProjectFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>[]
          }
          create: {
            args: Prisma.UserToProjectCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>
          }
          createMany: {
            args: Prisma.UserToProjectCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserToProjectCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>[]
          }
          delete: {
            args: Prisma.UserToProjectDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>
          }
          update: {
            args: Prisma.UserToProjectUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>
          }
          deleteMany: {
            args: Prisma.UserToProjectDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserToProjectUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserToProjectUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>[]
          }
          upsert: {
            args: Prisma.UserToProjectUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserToProjectPayload>
          }
          aggregate: {
            args: Prisma.UserToProjectAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUserToProject>
          }
          groupBy: {
            args: Prisma.UserToProjectGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserToProjectGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserToProjectCountArgs<ExtArgs>
            result: $Utils.Optional<UserToProjectCountAggregateOutputType> | number
          }
        }
      }
      SourceCodeEmbedding: {
        payload: Prisma.$SourceCodeEmbeddingPayload<ExtArgs>
        fields: Prisma.SourceCodeEmbeddingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SourceCodeEmbeddingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SourceCodeEmbeddingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>
          }
          findFirst: {
            args: Prisma.SourceCodeEmbeddingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SourceCodeEmbeddingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>
          }
          findMany: {
            args: Prisma.SourceCodeEmbeddingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>[]
          }
          create: {
            args: Prisma.SourceCodeEmbeddingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>
          }
          createMany: {
            args: Prisma.SourceCodeEmbeddingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SourceCodeEmbeddingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>[]
          }
          delete: {
            args: Prisma.SourceCodeEmbeddingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>
          }
          update: {
            args: Prisma.SourceCodeEmbeddingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>
          }
          deleteMany: {
            args: Prisma.SourceCodeEmbeddingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SourceCodeEmbeddingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SourceCodeEmbeddingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>[]
          }
          upsert: {
            args: Prisma.SourceCodeEmbeddingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SourceCodeEmbeddingPayload>
          }
          aggregate: {
            args: Prisma.SourceCodeEmbeddingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSourceCodeEmbedding>
          }
          groupBy: {
            args: Prisma.SourceCodeEmbeddingGroupByArgs<ExtArgs>
            result: $Utils.Optional<SourceCodeEmbeddingGroupByOutputType>[]
          }
          count: {
            args: Prisma.SourceCodeEmbeddingCountArgs<ExtArgs>
            result: $Utils.Optional<SourceCodeEmbeddingCountAggregateOutputType> | number
          }
        }
      }
      Meeting: {
        payload: Prisma.$MeetingPayload<ExtArgs>
        fields: Prisma.MeetingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MeetingFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MeetingFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findFirst: {
            args: Prisma.MeetingFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MeetingFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          findMany: {
            args: Prisma.MeetingFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          create: {
            args: Prisma.MeetingCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          createMany: {
            args: Prisma.MeetingCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MeetingCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          delete: {
            args: Prisma.MeetingDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          update: {
            args: Prisma.MeetingUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          deleteMany: {
            args: Prisma.MeetingDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MeetingUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MeetingUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>[]
          }
          upsert: {
            args: Prisma.MeetingUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MeetingPayload>
          }
          aggregate: {
            args: Prisma.MeetingAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMeeting>
          }
          groupBy: {
            args: Prisma.MeetingGroupByArgs<ExtArgs>
            result: $Utils.Optional<MeetingGroupByOutputType>[]
          }
          count: {
            args: Prisma.MeetingCountArgs<ExtArgs>
            result: $Utils.Optional<MeetingCountAggregateOutputType> | number
          }
        }
      }
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.IssueCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.IssueUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      RazorpayTransaction: {
        payload: Prisma.$RazorpayTransactionPayload<ExtArgs>
        fields: Prisma.RazorpayTransactionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RazorpayTransactionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RazorpayTransactionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>
          }
          findFirst: {
            args: Prisma.RazorpayTransactionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RazorpayTransactionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>
          }
          findMany: {
            args: Prisma.RazorpayTransactionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>[]
          }
          create: {
            args: Prisma.RazorpayTransactionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>
          }
          createMany: {
            args: Prisma.RazorpayTransactionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.RazorpayTransactionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>[]
          }
          delete: {
            args: Prisma.RazorpayTransactionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>
          }
          update: {
            args: Prisma.RazorpayTransactionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>
          }
          deleteMany: {
            args: Prisma.RazorpayTransactionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.RazorpayTransactionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.RazorpayTransactionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>[]
          }
          upsert: {
            args: Prisma.RazorpayTransactionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$RazorpayTransactionPayload>
          }
          aggregate: {
            args: Prisma.RazorpayTransactionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateRazorpayTransaction>
          }
          groupBy: {
            args: Prisma.RazorpayTransactionGroupByArgs<ExtArgs>
            result: $Utils.Optional<RazorpayTransactionGroupByOutputType>[]
          }
          count: {
            args: Prisma.RazorpayTransactionCountArgs<ExtArgs>
            result: $Utils.Optional<RazorpayTransactionCountAggregateOutputType> | number
          }
        }
      }
      Question: {
        payload: Prisma.$QuestionPayload<ExtArgs>
        fields: Prisma.QuestionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.QuestionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.QuestionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findFirst: {
            args: Prisma.QuestionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.QuestionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          findMany: {
            args: Prisma.QuestionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          create: {
            args: Prisma.QuestionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          createMany: {
            args: Prisma.QuestionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.QuestionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          delete: {
            args: Prisma.QuestionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          update: {
            args: Prisma.QuestionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          deleteMany: {
            args: Prisma.QuestionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.QuestionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.QuestionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>[]
          }
          upsert: {
            args: Prisma.QuestionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$QuestionPayload>
          }
          aggregate: {
            args: Prisma.QuestionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateQuestion>
          }
          groupBy: {
            args: Prisma.QuestionGroupByArgs<ExtArgs>
            result: $Utils.Optional<QuestionGroupByOutputType>[]
          }
          count: {
            args: Prisma.QuestionCountArgs<ExtArgs>
            result: $Utils.Optional<QuestionCountAggregateOutputType> | number
          }
        }
      }
      Commit: {
        payload: Prisma.$CommitPayload<ExtArgs>
        fields: Prisma.CommitFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CommitFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CommitFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          findFirst: {
            args: Prisma.CommitFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CommitFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          findMany: {
            args: Prisma.CommitFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>[]
          }
          create: {
            args: Prisma.CommitCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          createMany: {
            args: Prisma.CommitCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.CommitCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>[]
          }
          delete: {
            args: Prisma.CommitDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          update: {
            args: Prisma.CommitUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          deleteMany: {
            args: Prisma.CommitDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.CommitUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.CommitUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>[]
          }
          upsert: {
            args: Prisma.CommitUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$CommitPayload>
          }
          aggregate: {
            args: Prisma.CommitAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateCommit>
          }
          groupBy: {
            args: Prisma.CommitGroupByArgs<ExtArgs>
            result: $Utils.Optional<CommitGroupByOutputType>[]
          }
          count: {
            args: Prisma.CommitCountArgs<ExtArgs>
            result: $Utils.Optional<CommitCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Shorthand for `emit: 'stdout'`
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events only
     * log: [
     *   { emit: 'event', level: 'query' },
     *   { emit: 'event', level: 'info' },
     *   { emit: 'event', level: 'warn' }
     *   { emit: 'event', level: 'error' }
     * ]
     * 
     * / Emit as events and log to stdout
     * og: [
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * 
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    user?: UserOmit
    project?: ProjectOmit
    userToProject?: UserToProjectOmit
    sourceCodeEmbedding?: SourceCodeEmbeddingOmit
    meeting?: MeetingOmit
    issue?: IssueOmit
    razorpayTransaction?: RazorpayTransactionOmit
    question?: QuestionOmit
    commit?: CommitOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type CheckIsLogLevel<T> = T extends LogLevel ? T : never;

  export type GetLogType<T> = CheckIsLogLevel<
    T extends LogDefinition ? T['level'] : T
  >;

  export type GetEvents<T extends any[]> = T extends Array<LogLevel | LogDefinition>
    ? GetLogType<T[number]>
    : never;

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    userToProjects: number
    questionAsked: number
    RazorpayTransactions: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userToProjects?: boolean | UserCountOutputTypeCountUserToProjectsArgs
    questionAsked?: boolean | UserCountOutputTypeCountQuestionAskedArgs
    RazorpayTransactions?: boolean | UserCountOutputTypeCountRazorpayTransactionsArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUserToProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToProjectWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountQuestionAskedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRazorpayTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RazorpayTransactionWhereInput
  }


  /**
   * Count Type ProjectCountOutputType
   */

  export type ProjectCountOutputType = {
    userToProjects: number
    commits: number
    sourceCodeEmbeddings: number
    savedQuestions: number
    meetings: number
  }

  export type ProjectCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userToProjects?: boolean | ProjectCountOutputTypeCountUserToProjectsArgs
    commits?: boolean | ProjectCountOutputTypeCountCommitsArgs
    sourceCodeEmbeddings?: boolean | ProjectCountOutputTypeCountSourceCodeEmbeddingsArgs
    savedQuestions?: boolean | ProjectCountOutputTypeCountSavedQuestionsArgs
    meetings?: boolean | ProjectCountOutputTypeCountMeetingsArgs
  }

  // Custom InputTypes
  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProjectCountOutputType
     */
    select?: ProjectCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountUserToProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToProjectWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountCommitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSourceCodeEmbeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceCodeEmbeddingWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountSavedQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
  }

  /**
   * ProjectCountOutputType without action
   */
  export type ProjectCountOutputTypeCountMeetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
  }


  /**
   * Count Type MeetingCountOutputType
   */

  export type MeetingCountOutputType = {
    issues: number
  }

  export type MeetingCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    issues?: boolean | MeetingCountOutputTypeCountIssuesArgs
  }

  // Custom InputTypes
  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MeetingCountOutputType
     */
    select?: MeetingCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * MeetingCountOutputType without action
   */
  export type MeetingCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }


  /**
   * Models
   */

  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserAvgAggregateOutputType = {
    credits: number | null
  }

  export type UserSumAggregateOutputType = {
    credits: number | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    credits: number | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    firstName: string | null
    lastName: string | null
    email: string | null
    password: string | null
    credits: number | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    imageUrl: number
    firstName: number
    lastName: number
    email: number
    password: number
    credits: number
    _all: number
  }


  export type UserAvgAggregateInputType = {
    credits?: true
  }

  export type UserSumAggregateInputType = {
    credits?: true
  }

  export type UserMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    credits?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    credits?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    firstName?: true
    lastName?: true
    email?: true
    password?: true
    credits?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: UserAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: UserSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _avg?: UserAvgAggregateInputType
    _sum?: UserSumAggregateInputType
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    imageUrl: string | null
    firstName: string | null
    lastName: string | null
    email: string
    password: string | null
    credits: number
    _count: UserCountAggregateOutputType | null
    _avg: UserAvgAggregateOutputType | null
    _sum: UserSumAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
    userToProjects?: boolean | User$userToProjectsArgs<ExtArgs>
    questionAsked?: boolean | User$questionAskedArgs<ExtArgs>
    RazorpayTransactions?: boolean | User$RazorpayTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    firstName?: boolean
    lastName?: boolean
    email?: boolean
    password?: boolean
    credits?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "imageUrl" | "firstName" | "lastName" | "email" | "password" | "credits", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userToProjects?: boolean | User$userToProjectsArgs<ExtArgs>
    questionAsked?: boolean | User$questionAskedArgs<ExtArgs>
    RazorpayTransactions?: boolean | User$RazorpayTransactionsArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      userToProjects: Prisma.$UserToProjectPayload<ExtArgs>[]
      questionAsked: Prisma.$QuestionPayload<ExtArgs>[]
      RazorpayTransactions: Prisma.$RazorpayTransactionPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      imageUrl: string | null
      firstName: string | null
      lastName: string | null
      email: string
      password: string | null
      credits: number
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userToProjects<T extends User$userToProjectsArgs<ExtArgs> = {}>(args?: Subset<T, User$userToProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    questionAsked<T extends User$questionAskedArgs<ExtArgs> = {}>(args?: Subset<T, User$questionAskedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    RazorpayTransactions<T extends User$RazorpayTransactionsArgs<ExtArgs> = {}>(args?: Subset<T, User$RazorpayTransactionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly firstName: FieldRef<"User", 'String'>
    readonly lastName: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly credits: FieldRef<"User", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }

  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }

  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.userToProjects
   */
  export type User$userToProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    where?: UserToProjectWhereInput
    orderBy?: UserToProjectOrderByWithRelationInput | UserToProjectOrderByWithRelationInput[]
    cursor?: UserToProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToProjectScalarFieldEnum | UserToProjectScalarFieldEnum[]
  }

  /**
   * User.questionAsked
   */
  export type User$questionAskedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * User.RazorpayTransactions
   */
  export type User$RazorpayTransactionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    where?: RazorpayTransactionWhereInput
    orderBy?: RazorpayTransactionOrderByWithRelationInput | RazorpayTransactionOrderByWithRelationInput[]
    cursor?: RazorpayTransactionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RazorpayTransactionScalarFieldEnum | RazorpayTransactionScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Project
   */

  export type AggregateProject = {
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  export type ProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    githubUrl: string | null
    deletedAt: Date | null
  }

  export type ProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    githubUrl: string | null
    deletedAt: Date | null
  }

  export type ProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    githubUrl: number
    deletedAt: number
    _all: number
  }


  export type ProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    githubUrl?: true
    deletedAt?: true
  }

  export type ProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    githubUrl?: true
    deletedAt?: true
  }

  export type ProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    githubUrl?: true
    deletedAt?: true
    _all?: true
  }

  export type ProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Project to aggregate.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Projects
    **/
    _count?: true | ProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProjectMaxAggregateInputType
  }

  export type GetProjectAggregateType<T extends ProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProject[P]>
      : GetScalarType<T[P], AggregateProject[P]>
  }




  export type ProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProjectWhereInput
    orderBy?: ProjectOrderByWithAggregationInput | ProjectOrderByWithAggregationInput[]
    by: ProjectScalarFieldEnum[] | ProjectScalarFieldEnum
    having?: ProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProjectCountAggregateInputType | true
    _min?: ProjectMinAggregateInputType
    _max?: ProjectMaxAggregateInputType
  }

  export type ProjectGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    githubUrl: string
    deletedAt: Date | null
    _count: ProjectCountAggregateOutputType | null
    _min: ProjectMinAggregateOutputType | null
    _max: ProjectMaxAggregateOutputType | null
  }

  type GetProjectGroupByPayload<T extends ProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProjectGroupByOutputType[P]>
            : GetScalarType<T[P], ProjectGroupByOutputType[P]>
        }
      >
    >


  export type ProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    githubUrl?: boolean
    deletedAt?: boolean
    userToProjects?: boolean | Project$userToProjectsArgs<ExtArgs>
    commits?: boolean | Project$commitsArgs<ExtArgs>
    sourceCodeEmbeddings?: boolean | Project$sourceCodeEmbeddingsArgs<ExtArgs>
    savedQuestions?: boolean | Project$savedQuestionsArgs<ExtArgs>
    meetings?: boolean | Project$meetingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    githubUrl?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    githubUrl?: boolean
    deletedAt?: boolean
  }, ExtArgs["result"]["project"]>

  export type ProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    githubUrl?: boolean
    deletedAt?: boolean
  }

  export type ProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "githubUrl" | "deletedAt", ExtArgs["result"]["project"]>
  export type ProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    userToProjects?: boolean | Project$userToProjectsArgs<ExtArgs>
    commits?: boolean | Project$commitsArgs<ExtArgs>
    sourceCodeEmbeddings?: boolean | Project$sourceCodeEmbeddingsArgs<ExtArgs>
    savedQuestions?: boolean | Project$savedQuestionsArgs<ExtArgs>
    meetings?: boolean | Project$meetingsArgs<ExtArgs>
    _count?: boolean | ProjectCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Project"
    objects: {
      userToProjects: Prisma.$UserToProjectPayload<ExtArgs>[]
      commits: Prisma.$CommitPayload<ExtArgs>[]
      sourceCodeEmbeddings: Prisma.$SourceCodeEmbeddingPayload<ExtArgs>[]
      savedQuestions: Prisma.$QuestionPayload<ExtArgs>[]
      meetings: Prisma.$MeetingPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      githubUrl: string
      deletedAt: Date | null
    }, ExtArgs["result"]["project"]>
    composites: {}
  }

  type ProjectGetPayload<S extends boolean | null | undefined | ProjectDefaultArgs> = $Result.GetResult<Prisma.$ProjectPayload, S>

  type ProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProjectCountAggregateInputType | true
    }

  export interface ProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Project'], meta: { name: 'Project' } }
    /**
     * Find zero or one Project that matches the filter.
     * @param {ProjectFindUniqueArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProjectFindUniqueArgs>(args: SelectSubset<T, ProjectFindUniqueArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Project that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProjectFindUniqueOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, ProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProjectFindFirstArgs>(args?: SelectSubset<T, ProjectFindFirstArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Project that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindFirstOrThrowArgs} args - Arguments to find a Project
     * @example
     * // Get one Project
     * const project = await prisma.project.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, ProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Projects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Projects
     * const projects = await prisma.project.findMany()
     * 
     * // Get first 10 Projects
     * const projects = await prisma.project.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const projectWithIdOnly = await prisma.project.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProjectFindManyArgs>(args?: SelectSubset<T, ProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Project.
     * @param {ProjectCreateArgs} args - Arguments to create a Project.
     * @example
     * // Create one Project
     * const Project = await prisma.project.create({
     *   data: {
     *     // ... data to create a Project
     *   }
     * })
     * 
     */
    create<T extends ProjectCreateArgs>(args: SelectSubset<T, ProjectCreateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Projects.
     * @param {ProjectCreateManyArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProjectCreateManyArgs>(args?: SelectSubset<T, ProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Projects and returns the data saved in the database.
     * @param {ProjectCreateManyAndReturnArgs} args - Arguments to create many Projects.
     * @example
     * // Create many Projects
     * const project = await prisma.project.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, ProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Project.
     * @param {ProjectDeleteArgs} args - Arguments to delete one Project.
     * @example
     * // Delete one Project
     * const Project = await prisma.project.delete({
     *   where: {
     *     // ... filter to delete one Project
     *   }
     * })
     * 
     */
    delete<T extends ProjectDeleteArgs>(args: SelectSubset<T, ProjectDeleteArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Project.
     * @param {ProjectUpdateArgs} args - Arguments to update one Project.
     * @example
     * // Update one Project
     * const project = await prisma.project.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProjectUpdateArgs>(args: SelectSubset<T, ProjectUpdateArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Projects.
     * @param {ProjectDeleteManyArgs} args - Arguments to filter Projects to delete.
     * @example
     * // Delete a few Projects
     * const { count } = await prisma.project.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProjectDeleteManyArgs>(args?: SelectSubset<T, ProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProjectUpdateManyArgs>(args: SelectSubset<T, ProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Projects and returns the data updated in the database.
     * @param {ProjectUpdateManyAndReturnArgs} args - Arguments to update many Projects.
     * @example
     * // Update many Projects
     * const project = await prisma.project.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Projects and only return the `id`
     * const projectWithIdOnly = await prisma.project.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, ProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Project.
     * @param {ProjectUpsertArgs} args - Arguments to update or create a Project.
     * @example
     * // Update or create a Project
     * const project = await prisma.project.upsert({
     *   create: {
     *     // ... data to create a Project
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Project we want to update
     *   }
     * })
     */
    upsert<T extends ProjectUpsertArgs>(args: SelectSubset<T, ProjectUpsertArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Projects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectCountArgs} args - Arguments to filter Projects to count.
     * @example
     * // Count the number of Projects
     * const count = await prisma.project.count({
     *   where: {
     *     // ... the filter for the Projects we want to count
     *   }
     * })
    **/
    count<T extends ProjectCountArgs>(
      args?: Subset<T, ProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProjectAggregateArgs>(args: Subset<T, ProjectAggregateArgs>): Prisma.PrismaPromise<GetProjectAggregateType<T>>

    /**
     * Group by Project.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProjectGroupByArgs['orderBy'] }
        : { orderBy?: ProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Project model
   */
  readonly fields: ProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Project.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    userToProjects<T extends Project$userToProjectsArgs<ExtArgs> = {}>(args?: Subset<T, Project$userToProjectsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    commits<T extends Project$commitsArgs<ExtArgs> = {}>(args?: Subset<T, Project$commitsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    sourceCodeEmbeddings<T extends Project$sourceCodeEmbeddingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$sourceCodeEmbeddingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    savedQuestions<T extends Project$savedQuestionsArgs<ExtArgs> = {}>(args?: Subset<T, Project$savedQuestionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    meetings<T extends Project$meetingsArgs<ExtArgs> = {}>(args?: Subset<T, Project$meetingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Project model
   */
  interface ProjectFieldRefs {
    readonly id: FieldRef<"Project", 'String'>
    readonly createdAt: FieldRef<"Project", 'DateTime'>
    readonly updatedAt: FieldRef<"Project", 'DateTime'>
    readonly name: FieldRef<"Project", 'String'>
    readonly githubUrl: FieldRef<"Project", 'String'>
    readonly deletedAt: FieldRef<"Project", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Project findUnique
   */
  export type ProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findUniqueOrThrow
   */
  export type ProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project findFirst
   */
  export type ProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findFirstOrThrow
   */
  export type ProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Project to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Projects.
     */
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project findMany
   */
  export type ProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter, which Projects to fetch.
     */
    where?: ProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Projects to fetch.
     */
    orderBy?: ProjectOrderByWithRelationInput | ProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Projects.
     */
    cursor?: ProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Projects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Projects.
     */
    skip?: number
    distinct?: ProjectScalarFieldEnum | ProjectScalarFieldEnum[]
  }

  /**
   * Project create
   */
  export type ProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a Project.
     */
    data: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
  }

  /**
   * Project createMany
   */
  export type ProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project createManyAndReturn
   */
  export type ProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to create many Projects.
     */
    data: ProjectCreateManyInput | ProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Project update
   */
  export type ProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a Project.
     */
    data: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
    /**
     * Choose, which Project to update.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project updateMany
   */
  export type ProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project updateManyAndReturn
   */
  export type ProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * The data used to update Projects.
     */
    data: XOR<ProjectUpdateManyMutationInput, ProjectUncheckedUpdateManyInput>
    /**
     * Filter which Projects to update
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to update.
     */
    limit?: number
  }

  /**
   * Project upsert
   */
  export type ProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the Project to update in case it exists.
     */
    where: ProjectWhereUniqueInput
    /**
     * In case the Project found by the `where` argument doesn't exist, create a new Project with this data.
     */
    create: XOR<ProjectCreateInput, ProjectUncheckedCreateInput>
    /**
     * In case the Project was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProjectUpdateInput, ProjectUncheckedUpdateInput>
  }

  /**
   * Project delete
   */
  export type ProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
    /**
     * Filter which Project to delete.
     */
    where: ProjectWhereUniqueInput
  }

  /**
   * Project deleteMany
   */
  export type ProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Projects to delete
     */
    where?: ProjectWhereInput
    /**
     * Limit how many Projects to delete.
     */
    limit?: number
  }

  /**
   * Project.userToProjects
   */
  export type Project$userToProjectsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    where?: UserToProjectWhereInput
    orderBy?: UserToProjectOrderByWithRelationInput | UserToProjectOrderByWithRelationInput[]
    cursor?: UserToProjectWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserToProjectScalarFieldEnum | UserToProjectScalarFieldEnum[]
  }

  /**
   * Project.commits
   */
  export type Project$commitsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    where?: CommitWhereInput
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    cursor?: CommitWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Project.sourceCodeEmbeddings
   */
  export type Project$sourceCodeEmbeddingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    where?: SourceCodeEmbeddingWhereInput
    orderBy?: SourceCodeEmbeddingOrderByWithRelationInput | SourceCodeEmbeddingOrderByWithRelationInput[]
    cursor?: SourceCodeEmbeddingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SourceCodeEmbeddingScalarFieldEnum | SourceCodeEmbeddingScalarFieldEnum[]
  }

  /**
   * Project.savedQuestions
   */
  export type Project$savedQuestionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    cursor?: QuestionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Project.meetings
   */
  export type Project$meetingsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    cursor?: MeetingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Project without action
   */
  export type ProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Project
     */
    select?: ProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Project
     */
    omit?: ProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProjectInclude<ExtArgs> | null
  }


  /**
   * Model UserToProject
   */

  export type AggregateUserToProject = {
    _count: UserToProjectCountAggregateOutputType | null
    _min: UserToProjectMinAggregateOutputType | null
    _max: UserToProjectMaxAggregateOutputType | null
  }

  export type UserToProjectMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectId: string | null
  }

  export type UserToProjectMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    projectId: string | null
  }

  export type UserToProjectCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    projectId: number
    _all: number
  }


  export type UserToProjectMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
  }

  export type UserToProjectMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
  }

  export type UserToProjectCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    projectId?: true
    _all?: true
  }

  export type UserToProjectAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToProject to aggregate.
     */
    where?: UserToProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToProjects to fetch.
     */
    orderBy?: UserToProjectOrderByWithRelationInput | UserToProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserToProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned UserToProjects
    **/
    _count?: true | UserToProjectCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserToProjectMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserToProjectMaxAggregateInputType
  }

  export type GetUserToProjectAggregateType<T extends UserToProjectAggregateArgs> = {
        [P in keyof T & keyof AggregateUserToProject]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUserToProject[P]>
      : GetScalarType<T[P], AggregateUserToProject[P]>
  }




  export type UserToProjectGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserToProjectWhereInput
    orderBy?: UserToProjectOrderByWithAggregationInput | UserToProjectOrderByWithAggregationInput[]
    by: UserToProjectScalarFieldEnum[] | UserToProjectScalarFieldEnum
    having?: UserToProjectScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserToProjectCountAggregateInputType | true
    _min?: UserToProjectMinAggregateInputType
    _max?: UserToProjectMaxAggregateInputType
  }

  export type UserToProjectGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    projectId: string
    _count: UserToProjectCountAggregateOutputType | null
    _min: UserToProjectMinAggregateOutputType | null
    _max: UserToProjectMaxAggregateOutputType | null
  }

  type GetUserToProjectGroupByPayload<T extends UserToProjectGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserToProjectGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserToProjectGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserToProjectGroupByOutputType[P]>
            : GetScalarType<T[P], UserToProjectGroupByOutputType[P]>
        }
      >
    >


  export type UserToProjectSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToProject"]>

  export type UserToProjectSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToProject"]>

  export type UserToProjectSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["userToProject"]>

  export type UserToProjectSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    projectId?: boolean
  }

  export type UserToProjectOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "projectId", ExtArgs["result"]["userToProject"]>
  export type UserToProjectInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UserToProjectIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type UserToProjectIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $UserToProjectPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "UserToProject"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      projectId: string
    }, ExtArgs["result"]["userToProject"]>
    composites: {}
  }

  type UserToProjectGetPayload<S extends boolean | null | undefined | UserToProjectDefaultArgs> = $Result.GetResult<Prisma.$UserToProjectPayload, S>

  type UserToProjectCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserToProjectFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserToProjectCountAggregateInputType | true
    }

  export interface UserToProjectDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['UserToProject'], meta: { name: 'UserToProject' } }
    /**
     * Find zero or one UserToProject that matches the filter.
     * @param {UserToProjectFindUniqueArgs} args - Arguments to find a UserToProject
     * @example
     * // Get one UserToProject
     * const userToProject = await prisma.userToProject.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends UserToProjectFindUniqueArgs>(args: SelectSubset<T, UserToProjectFindUniqueArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one UserToProject that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserToProjectFindUniqueOrThrowArgs} args - Arguments to find a UserToProject
     * @example
     * // Get one UserToProject
     * const userToProject = await prisma.userToProject.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserToProjectFindUniqueOrThrowArgs>(args: SelectSubset<T, UserToProjectFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToProject that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectFindFirstArgs} args - Arguments to find a UserToProject
     * @example
     * // Get one UserToProject
     * const userToProject = await prisma.userToProject.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends UserToProjectFindFirstArgs>(args?: SelectSubset<T, UserToProjectFindFirstArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first UserToProject that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectFindFirstOrThrowArgs} args - Arguments to find a UserToProject
     * @example
     * // Get one UserToProject
     * const userToProject = await prisma.userToProject.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends UserToProjectFindFirstOrThrowArgs>(args?: SelectSubset<T, UserToProjectFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more UserToProjects that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all UserToProjects
     * const userToProjects = await prisma.userToProject.findMany()
     * 
     * // Get first 10 UserToProjects
     * const userToProjects = await prisma.userToProject.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userToProjectWithIdOnly = await prisma.userToProject.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends UserToProjectFindManyArgs>(args?: SelectSubset<T, UserToProjectFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a UserToProject.
     * @param {UserToProjectCreateArgs} args - Arguments to create a UserToProject.
     * @example
     * // Create one UserToProject
     * const UserToProject = await prisma.userToProject.create({
     *   data: {
     *     // ... data to create a UserToProject
     *   }
     * })
     * 
     */
    create<T extends UserToProjectCreateArgs>(args: SelectSubset<T, UserToProjectCreateArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many UserToProjects.
     * @param {UserToProjectCreateManyArgs} args - Arguments to create many UserToProjects.
     * @example
     * // Create many UserToProjects
     * const userToProject = await prisma.userToProject.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserToProjectCreateManyArgs>(args?: SelectSubset<T, UserToProjectCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many UserToProjects and returns the data saved in the database.
     * @param {UserToProjectCreateManyAndReturnArgs} args - Arguments to create many UserToProjects.
     * @example
     * // Create many UserToProjects
     * const userToProject = await prisma.userToProject.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many UserToProjects and only return the `id`
     * const userToProjectWithIdOnly = await prisma.userToProject.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserToProjectCreateManyAndReturnArgs>(args?: SelectSubset<T, UserToProjectCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a UserToProject.
     * @param {UserToProjectDeleteArgs} args - Arguments to delete one UserToProject.
     * @example
     * // Delete one UserToProject
     * const UserToProject = await prisma.userToProject.delete({
     *   where: {
     *     // ... filter to delete one UserToProject
     *   }
     * })
     * 
     */
    delete<T extends UserToProjectDeleteArgs>(args: SelectSubset<T, UserToProjectDeleteArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one UserToProject.
     * @param {UserToProjectUpdateArgs} args - Arguments to update one UserToProject.
     * @example
     * // Update one UserToProject
     * const userToProject = await prisma.userToProject.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends UserToProjectUpdateArgs>(args: SelectSubset<T, UserToProjectUpdateArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more UserToProjects.
     * @param {UserToProjectDeleteManyArgs} args - Arguments to filter UserToProjects to delete.
     * @example
     * // Delete a few UserToProjects
     * const { count } = await prisma.userToProject.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends UserToProjectDeleteManyArgs>(args?: SelectSubset<T, UserToProjectDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserToProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many UserToProjects
     * const userToProject = await prisma.userToProject.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends UserToProjectUpdateManyArgs>(args: SelectSubset<T, UserToProjectUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more UserToProjects and returns the data updated in the database.
     * @param {UserToProjectUpdateManyAndReturnArgs} args - Arguments to update many UserToProjects.
     * @example
     * // Update many UserToProjects
     * const userToProject = await prisma.userToProject.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more UserToProjects and only return the `id`
     * const userToProjectWithIdOnly = await prisma.userToProject.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends UserToProjectUpdateManyAndReturnArgs>(args: SelectSubset<T, UserToProjectUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one UserToProject.
     * @param {UserToProjectUpsertArgs} args - Arguments to update or create a UserToProject.
     * @example
     * // Update or create a UserToProject
     * const userToProject = await prisma.userToProject.upsert({
     *   create: {
     *     // ... data to create a UserToProject
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the UserToProject we want to update
     *   }
     * })
     */
    upsert<T extends UserToProjectUpsertArgs>(args: SelectSubset<T, UserToProjectUpsertArgs<ExtArgs>>): Prisma__UserToProjectClient<$Result.GetResult<Prisma.$UserToProjectPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of UserToProjects.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectCountArgs} args - Arguments to filter UserToProjects to count.
     * @example
     * // Count the number of UserToProjects
     * const count = await prisma.userToProject.count({
     *   where: {
     *     // ... the filter for the UserToProjects we want to count
     *   }
     * })
    **/
    count<T extends UserToProjectCountArgs>(
      args?: Subset<T, UserToProjectCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserToProjectCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a UserToProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends UserToProjectAggregateArgs>(args: Subset<T, UserToProjectAggregateArgs>): Prisma.PrismaPromise<GetUserToProjectAggregateType<T>>

    /**
     * Group by UserToProject.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserToProjectGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends UserToProjectGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserToProjectGroupByArgs['orderBy'] }
        : { orderBy?: UserToProjectGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, UserToProjectGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserToProjectGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the UserToProject model
   */
  readonly fields: UserToProjectFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for UserToProject.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserToProjectClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the UserToProject model
   */
  interface UserToProjectFieldRefs {
    readonly id: FieldRef<"UserToProject", 'String'>
    readonly createdAt: FieldRef<"UserToProject", 'DateTime'>
    readonly updatedAt: FieldRef<"UserToProject", 'DateTime'>
    readonly userId: FieldRef<"UserToProject", 'String'>
    readonly projectId: FieldRef<"UserToProject", 'String'>
  }
    

  // Custom InputTypes
  /**
   * UserToProject findUnique
   */
  export type UserToProjectFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserToProject to fetch.
     */
    where: UserToProjectWhereUniqueInput
  }

  /**
   * UserToProject findUniqueOrThrow
   */
  export type UserToProjectFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserToProject to fetch.
     */
    where: UserToProjectWhereUniqueInput
  }

  /**
   * UserToProject findFirst
   */
  export type UserToProjectFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserToProject to fetch.
     */
    where?: UserToProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToProjects to fetch.
     */
    orderBy?: UserToProjectOrderByWithRelationInput | UserToProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToProjects.
     */
    cursor?: UserToProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToProjects.
     */
    distinct?: UserToProjectScalarFieldEnum | UserToProjectScalarFieldEnum[]
  }

  /**
   * UserToProject findFirstOrThrow
   */
  export type UserToProjectFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserToProject to fetch.
     */
    where?: UserToProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToProjects to fetch.
     */
    orderBy?: UserToProjectOrderByWithRelationInput | UserToProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for UserToProjects.
     */
    cursor?: UserToProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToProjects.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of UserToProjects.
     */
    distinct?: UserToProjectScalarFieldEnum | UserToProjectScalarFieldEnum[]
  }

  /**
   * UserToProject findMany
   */
  export type UserToProjectFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * Filter, which UserToProjects to fetch.
     */
    where?: UserToProjectWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of UserToProjects to fetch.
     */
    orderBy?: UserToProjectOrderByWithRelationInput | UserToProjectOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing UserToProjects.
     */
    cursor?: UserToProjectWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` UserToProjects from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` UserToProjects.
     */
    skip?: number
    distinct?: UserToProjectScalarFieldEnum | UserToProjectScalarFieldEnum[]
  }

  /**
   * UserToProject create
   */
  export type UserToProjectCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * The data needed to create a UserToProject.
     */
    data: XOR<UserToProjectCreateInput, UserToProjectUncheckedCreateInput>
  }

  /**
   * UserToProject createMany
   */
  export type UserToProjectCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many UserToProjects.
     */
    data: UserToProjectCreateManyInput | UserToProjectCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * UserToProject createManyAndReturn
   */
  export type UserToProjectCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * The data used to create many UserToProjects.
     */
    data: UserToProjectCreateManyInput | UserToProjectCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToProject update
   */
  export type UserToProjectUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * The data needed to update a UserToProject.
     */
    data: XOR<UserToProjectUpdateInput, UserToProjectUncheckedUpdateInput>
    /**
     * Choose, which UserToProject to update.
     */
    where: UserToProjectWhereUniqueInput
  }

  /**
   * UserToProject updateMany
   */
  export type UserToProjectUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update UserToProjects.
     */
    data: XOR<UserToProjectUpdateManyMutationInput, UserToProjectUncheckedUpdateManyInput>
    /**
     * Filter which UserToProjects to update
     */
    where?: UserToProjectWhereInput
    /**
     * Limit how many UserToProjects to update.
     */
    limit?: number
  }

  /**
   * UserToProject updateManyAndReturn
   */
  export type UserToProjectUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * The data used to update UserToProjects.
     */
    data: XOR<UserToProjectUpdateManyMutationInput, UserToProjectUncheckedUpdateManyInput>
    /**
     * Filter which UserToProjects to update
     */
    where?: UserToProjectWhereInput
    /**
     * Limit how many UserToProjects to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * UserToProject upsert
   */
  export type UserToProjectUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * The filter to search for the UserToProject to update in case it exists.
     */
    where: UserToProjectWhereUniqueInput
    /**
     * In case the UserToProject found by the `where` argument doesn't exist, create a new UserToProject with this data.
     */
    create: XOR<UserToProjectCreateInput, UserToProjectUncheckedCreateInput>
    /**
     * In case the UserToProject was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserToProjectUpdateInput, UserToProjectUncheckedUpdateInput>
  }

  /**
   * UserToProject delete
   */
  export type UserToProjectDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
    /**
     * Filter which UserToProject to delete.
     */
    where: UserToProjectWhereUniqueInput
  }

  /**
   * UserToProject deleteMany
   */
  export type UserToProjectDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which UserToProjects to delete
     */
    where?: UserToProjectWhereInput
    /**
     * Limit how many UserToProjects to delete.
     */
    limit?: number
  }

  /**
   * UserToProject without action
   */
  export type UserToProjectDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserToProject
     */
    select?: UserToProjectSelect<ExtArgs> | null
    /**
     * Omit specific fields from the UserToProject
     */
    omit?: UserToProjectOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserToProjectInclude<ExtArgs> | null
  }


  /**
   * Model SourceCodeEmbedding
   */

  export type AggregateSourceCodeEmbedding = {
    _count: SourceCodeEmbeddingCountAggregateOutputType | null
    _min: SourceCodeEmbeddingMinAggregateOutputType | null
    _max: SourceCodeEmbeddingMaxAggregateOutputType | null
  }

  export type SourceCodeEmbeddingMinAggregateOutputType = {
    id: string | null
    sourceCode: string | null
    fileName: string | null
    summary: string | null
    projectId: string | null
  }

  export type SourceCodeEmbeddingMaxAggregateOutputType = {
    id: string | null
    sourceCode: string | null
    fileName: string | null
    summary: string | null
    projectId: string | null
  }

  export type SourceCodeEmbeddingCountAggregateOutputType = {
    id: number
    sourceCode: number
    fileName: number
    summary: number
    projectId: number
    _all: number
  }


  export type SourceCodeEmbeddingMinAggregateInputType = {
    id?: true
    sourceCode?: true
    fileName?: true
    summary?: true
    projectId?: true
  }

  export type SourceCodeEmbeddingMaxAggregateInputType = {
    id?: true
    sourceCode?: true
    fileName?: true
    summary?: true
    projectId?: true
  }

  export type SourceCodeEmbeddingCountAggregateInputType = {
    id?: true
    sourceCode?: true
    fileName?: true
    summary?: true
    projectId?: true
    _all?: true
  }

  export type SourceCodeEmbeddingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceCodeEmbedding to aggregate.
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceCodeEmbeddings to fetch.
     */
    orderBy?: SourceCodeEmbeddingOrderByWithRelationInput | SourceCodeEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SourceCodeEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceCodeEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceCodeEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned SourceCodeEmbeddings
    **/
    _count?: true | SourceCodeEmbeddingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SourceCodeEmbeddingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SourceCodeEmbeddingMaxAggregateInputType
  }

  export type GetSourceCodeEmbeddingAggregateType<T extends SourceCodeEmbeddingAggregateArgs> = {
        [P in keyof T & keyof AggregateSourceCodeEmbedding]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSourceCodeEmbedding[P]>
      : GetScalarType<T[P], AggregateSourceCodeEmbedding[P]>
  }




  export type SourceCodeEmbeddingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SourceCodeEmbeddingWhereInput
    orderBy?: SourceCodeEmbeddingOrderByWithAggregationInput | SourceCodeEmbeddingOrderByWithAggregationInput[]
    by: SourceCodeEmbeddingScalarFieldEnum[] | SourceCodeEmbeddingScalarFieldEnum
    having?: SourceCodeEmbeddingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SourceCodeEmbeddingCountAggregateInputType | true
    _min?: SourceCodeEmbeddingMinAggregateInputType
    _max?: SourceCodeEmbeddingMaxAggregateInputType
  }

  export type SourceCodeEmbeddingGroupByOutputType = {
    id: string
    sourceCode: string
    fileName: string
    summary: string
    projectId: string
    _count: SourceCodeEmbeddingCountAggregateOutputType | null
    _min: SourceCodeEmbeddingMinAggregateOutputType | null
    _max: SourceCodeEmbeddingMaxAggregateOutputType | null
  }

  type GetSourceCodeEmbeddingGroupByPayload<T extends SourceCodeEmbeddingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SourceCodeEmbeddingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SourceCodeEmbeddingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SourceCodeEmbeddingGroupByOutputType[P]>
            : GetScalarType<T[P], SourceCodeEmbeddingGroupByOutputType[P]>
        }
      >
    >


  export type SourceCodeEmbeddingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    fileName?: boolean
    summary?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceCodeEmbedding"]>

  export type SourceCodeEmbeddingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    fileName?: boolean
    summary?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceCodeEmbedding"]>

  export type SourceCodeEmbeddingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sourceCode?: boolean
    fileName?: boolean
    summary?: boolean
    projectId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["sourceCodeEmbedding"]>

  export type SourceCodeEmbeddingSelectScalar = {
    id?: boolean
    sourceCode?: boolean
    fileName?: boolean
    summary?: boolean
    projectId?: boolean
  }

  export type SourceCodeEmbeddingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "sourceCode" | "fileName" | "summary" | "projectId", ExtArgs["result"]["sourceCodeEmbedding"]>
  export type SourceCodeEmbeddingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SourceCodeEmbeddingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type SourceCodeEmbeddingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $SourceCodeEmbeddingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "SourceCodeEmbedding"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      sourceCode: string
      fileName: string
      summary: string
      projectId: string
    }, ExtArgs["result"]["sourceCodeEmbedding"]>
    composites: {}
  }

  type SourceCodeEmbeddingGetPayload<S extends boolean | null | undefined | SourceCodeEmbeddingDefaultArgs> = $Result.GetResult<Prisma.$SourceCodeEmbeddingPayload, S>

  type SourceCodeEmbeddingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SourceCodeEmbeddingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SourceCodeEmbeddingCountAggregateInputType | true
    }

  export interface SourceCodeEmbeddingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['SourceCodeEmbedding'], meta: { name: 'SourceCodeEmbedding' } }
    /**
     * Find zero or one SourceCodeEmbedding that matches the filter.
     * @param {SourceCodeEmbeddingFindUniqueArgs} args - Arguments to find a SourceCodeEmbedding
     * @example
     * // Get one SourceCodeEmbedding
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SourceCodeEmbeddingFindUniqueArgs>(args: SelectSubset<T, SourceCodeEmbeddingFindUniqueArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one SourceCodeEmbedding that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SourceCodeEmbeddingFindUniqueOrThrowArgs} args - Arguments to find a SourceCodeEmbedding
     * @example
     * // Get one SourceCodeEmbedding
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SourceCodeEmbeddingFindUniqueOrThrowArgs>(args: SelectSubset<T, SourceCodeEmbeddingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceCodeEmbedding that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingFindFirstArgs} args - Arguments to find a SourceCodeEmbedding
     * @example
     * // Get one SourceCodeEmbedding
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SourceCodeEmbeddingFindFirstArgs>(args?: SelectSubset<T, SourceCodeEmbeddingFindFirstArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first SourceCodeEmbedding that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingFindFirstOrThrowArgs} args - Arguments to find a SourceCodeEmbedding
     * @example
     * // Get one SourceCodeEmbedding
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SourceCodeEmbeddingFindFirstOrThrowArgs>(args?: SelectSubset<T, SourceCodeEmbeddingFindFirstOrThrowArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more SourceCodeEmbeddings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all SourceCodeEmbeddings
     * const sourceCodeEmbeddings = await prisma.sourceCodeEmbedding.findMany()
     * 
     * // Get first 10 SourceCodeEmbeddings
     * const sourceCodeEmbeddings = await prisma.sourceCodeEmbedding.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sourceCodeEmbeddingWithIdOnly = await prisma.sourceCodeEmbedding.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SourceCodeEmbeddingFindManyArgs>(args?: SelectSubset<T, SourceCodeEmbeddingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a SourceCodeEmbedding.
     * @param {SourceCodeEmbeddingCreateArgs} args - Arguments to create a SourceCodeEmbedding.
     * @example
     * // Create one SourceCodeEmbedding
     * const SourceCodeEmbedding = await prisma.sourceCodeEmbedding.create({
     *   data: {
     *     // ... data to create a SourceCodeEmbedding
     *   }
     * })
     * 
     */
    create<T extends SourceCodeEmbeddingCreateArgs>(args: SelectSubset<T, SourceCodeEmbeddingCreateArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many SourceCodeEmbeddings.
     * @param {SourceCodeEmbeddingCreateManyArgs} args - Arguments to create many SourceCodeEmbeddings.
     * @example
     * // Create many SourceCodeEmbeddings
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SourceCodeEmbeddingCreateManyArgs>(args?: SelectSubset<T, SourceCodeEmbeddingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many SourceCodeEmbeddings and returns the data saved in the database.
     * @param {SourceCodeEmbeddingCreateManyAndReturnArgs} args - Arguments to create many SourceCodeEmbeddings.
     * @example
     * // Create many SourceCodeEmbeddings
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many SourceCodeEmbeddings and only return the `id`
     * const sourceCodeEmbeddingWithIdOnly = await prisma.sourceCodeEmbedding.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SourceCodeEmbeddingCreateManyAndReturnArgs>(args?: SelectSubset<T, SourceCodeEmbeddingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a SourceCodeEmbedding.
     * @param {SourceCodeEmbeddingDeleteArgs} args - Arguments to delete one SourceCodeEmbedding.
     * @example
     * // Delete one SourceCodeEmbedding
     * const SourceCodeEmbedding = await prisma.sourceCodeEmbedding.delete({
     *   where: {
     *     // ... filter to delete one SourceCodeEmbedding
     *   }
     * })
     * 
     */
    delete<T extends SourceCodeEmbeddingDeleteArgs>(args: SelectSubset<T, SourceCodeEmbeddingDeleteArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one SourceCodeEmbedding.
     * @param {SourceCodeEmbeddingUpdateArgs} args - Arguments to update one SourceCodeEmbedding.
     * @example
     * // Update one SourceCodeEmbedding
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SourceCodeEmbeddingUpdateArgs>(args: SelectSubset<T, SourceCodeEmbeddingUpdateArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more SourceCodeEmbeddings.
     * @param {SourceCodeEmbeddingDeleteManyArgs} args - Arguments to filter SourceCodeEmbeddings to delete.
     * @example
     * // Delete a few SourceCodeEmbeddings
     * const { count } = await prisma.sourceCodeEmbedding.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SourceCodeEmbeddingDeleteManyArgs>(args?: SelectSubset<T, SourceCodeEmbeddingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceCodeEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many SourceCodeEmbeddings
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SourceCodeEmbeddingUpdateManyArgs>(args: SelectSubset<T, SourceCodeEmbeddingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more SourceCodeEmbeddings and returns the data updated in the database.
     * @param {SourceCodeEmbeddingUpdateManyAndReturnArgs} args - Arguments to update many SourceCodeEmbeddings.
     * @example
     * // Update many SourceCodeEmbeddings
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more SourceCodeEmbeddings and only return the `id`
     * const sourceCodeEmbeddingWithIdOnly = await prisma.sourceCodeEmbedding.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SourceCodeEmbeddingUpdateManyAndReturnArgs>(args: SelectSubset<T, SourceCodeEmbeddingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one SourceCodeEmbedding.
     * @param {SourceCodeEmbeddingUpsertArgs} args - Arguments to update or create a SourceCodeEmbedding.
     * @example
     * // Update or create a SourceCodeEmbedding
     * const sourceCodeEmbedding = await prisma.sourceCodeEmbedding.upsert({
     *   create: {
     *     // ... data to create a SourceCodeEmbedding
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the SourceCodeEmbedding we want to update
     *   }
     * })
     */
    upsert<T extends SourceCodeEmbeddingUpsertArgs>(args: SelectSubset<T, SourceCodeEmbeddingUpsertArgs<ExtArgs>>): Prisma__SourceCodeEmbeddingClient<$Result.GetResult<Prisma.$SourceCodeEmbeddingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of SourceCodeEmbeddings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingCountArgs} args - Arguments to filter SourceCodeEmbeddings to count.
     * @example
     * // Count the number of SourceCodeEmbeddings
     * const count = await prisma.sourceCodeEmbedding.count({
     *   where: {
     *     // ... the filter for the SourceCodeEmbeddings we want to count
     *   }
     * })
    **/
    count<T extends SourceCodeEmbeddingCountArgs>(
      args?: Subset<T, SourceCodeEmbeddingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SourceCodeEmbeddingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a SourceCodeEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SourceCodeEmbeddingAggregateArgs>(args: Subset<T, SourceCodeEmbeddingAggregateArgs>): Prisma.PrismaPromise<GetSourceCodeEmbeddingAggregateType<T>>

    /**
     * Group by SourceCodeEmbedding.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SourceCodeEmbeddingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SourceCodeEmbeddingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SourceCodeEmbeddingGroupByArgs['orderBy'] }
        : { orderBy?: SourceCodeEmbeddingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SourceCodeEmbeddingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSourceCodeEmbeddingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the SourceCodeEmbedding model
   */
  readonly fields: SourceCodeEmbeddingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for SourceCodeEmbedding.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SourceCodeEmbeddingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the SourceCodeEmbedding model
   */
  interface SourceCodeEmbeddingFieldRefs {
    readonly id: FieldRef<"SourceCodeEmbedding", 'String'>
    readonly sourceCode: FieldRef<"SourceCodeEmbedding", 'String'>
    readonly fileName: FieldRef<"SourceCodeEmbedding", 'String'>
    readonly summary: FieldRef<"SourceCodeEmbedding", 'String'>
    readonly projectId: FieldRef<"SourceCodeEmbedding", 'String'>
  }
    

  // Custom InputTypes
  /**
   * SourceCodeEmbedding findUnique
   */
  export type SourceCodeEmbeddingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SourceCodeEmbedding to fetch.
     */
    where: SourceCodeEmbeddingWhereUniqueInput
  }

  /**
   * SourceCodeEmbedding findUniqueOrThrow
   */
  export type SourceCodeEmbeddingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SourceCodeEmbedding to fetch.
     */
    where: SourceCodeEmbeddingWhereUniqueInput
  }

  /**
   * SourceCodeEmbedding findFirst
   */
  export type SourceCodeEmbeddingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SourceCodeEmbedding to fetch.
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceCodeEmbeddings to fetch.
     */
    orderBy?: SourceCodeEmbeddingOrderByWithRelationInput | SourceCodeEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceCodeEmbeddings.
     */
    cursor?: SourceCodeEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceCodeEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceCodeEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceCodeEmbeddings.
     */
    distinct?: SourceCodeEmbeddingScalarFieldEnum | SourceCodeEmbeddingScalarFieldEnum[]
  }

  /**
   * SourceCodeEmbedding findFirstOrThrow
   */
  export type SourceCodeEmbeddingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SourceCodeEmbedding to fetch.
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceCodeEmbeddings to fetch.
     */
    orderBy?: SourceCodeEmbeddingOrderByWithRelationInput | SourceCodeEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for SourceCodeEmbeddings.
     */
    cursor?: SourceCodeEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceCodeEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceCodeEmbeddings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of SourceCodeEmbeddings.
     */
    distinct?: SourceCodeEmbeddingScalarFieldEnum | SourceCodeEmbeddingScalarFieldEnum[]
  }

  /**
   * SourceCodeEmbedding findMany
   */
  export type SourceCodeEmbeddingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * Filter, which SourceCodeEmbeddings to fetch.
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of SourceCodeEmbeddings to fetch.
     */
    orderBy?: SourceCodeEmbeddingOrderByWithRelationInput | SourceCodeEmbeddingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing SourceCodeEmbeddings.
     */
    cursor?: SourceCodeEmbeddingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` SourceCodeEmbeddings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` SourceCodeEmbeddings.
     */
    skip?: number
    distinct?: SourceCodeEmbeddingScalarFieldEnum | SourceCodeEmbeddingScalarFieldEnum[]
  }

  /**
   * SourceCodeEmbedding create
   */
  export type SourceCodeEmbeddingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to create a SourceCodeEmbedding.
     */
    data: XOR<SourceCodeEmbeddingCreateInput, SourceCodeEmbeddingUncheckedCreateInput>
  }

  /**
   * SourceCodeEmbedding createMany
   */
  export type SourceCodeEmbeddingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many SourceCodeEmbeddings.
     */
    data: SourceCodeEmbeddingCreateManyInput | SourceCodeEmbeddingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * SourceCodeEmbedding createManyAndReturn
   */
  export type SourceCodeEmbeddingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to create many SourceCodeEmbeddings.
     */
    data: SourceCodeEmbeddingCreateManyInput | SourceCodeEmbeddingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceCodeEmbedding update
   */
  export type SourceCodeEmbeddingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * The data needed to update a SourceCodeEmbedding.
     */
    data: XOR<SourceCodeEmbeddingUpdateInput, SourceCodeEmbeddingUncheckedUpdateInput>
    /**
     * Choose, which SourceCodeEmbedding to update.
     */
    where: SourceCodeEmbeddingWhereUniqueInput
  }

  /**
   * SourceCodeEmbedding updateMany
   */
  export type SourceCodeEmbeddingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update SourceCodeEmbeddings.
     */
    data: XOR<SourceCodeEmbeddingUpdateManyMutationInput, SourceCodeEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which SourceCodeEmbeddings to update
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * Limit how many SourceCodeEmbeddings to update.
     */
    limit?: number
  }

  /**
   * SourceCodeEmbedding updateManyAndReturn
   */
  export type SourceCodeEmbeddingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * The data used to update SourceCodeEmbeddings.
     */
    data: XOR<SourceCodeEmbeddingUpdateManyMutationInput, SourceCodeEmbeddingUncheckedUpdateManyInput>
    /**
     * Filter which SourceCodeEmbeddings to update
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * Limit how many SourceCodeEmbeddings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * SourceCodeEmbedding upsert
   */
  export type SourceCodeEmbeddingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * The filter to search for the SourceCodeEmbedding to update in case it exists.
     */
    where: SourceCodeEmbeddingWhereUniqueInput
    /**
     * In case the SourceCodeEmbedding found by the `where` argument doesn't exist, create a new SourceCodeEmbedding with this data.
     */
    create: XOR<SourceCodeEmbeddingCreateInput, SourceCodeEmbeddingUncheckedCreateInput>
    /**
     * In case the SourceCodeEmbedding was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SourceCodeEmbeddingUpdateInput, SourceCodeEmbeddingUncheckedUpdateInput>
  }

  /**
   * SourceCodeEmbedding delete
   */
  export type SourceCodeEmbeddingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
    /**
     * Filter which SourceCodeEmbedding to delete.
     */
    where: SourceCodeEmbeddingWhereUniqueInput
  }

  /**
   * SourceCodeEmbedding deleteMany
   */
  export type SourceCodeEmbeddingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which SourceCodeEmbeddings to delete
     */
    where?: SourceCodeEmbeddingWhereInput
    /**
     * Limit how many SourceCodeEmbeddings to delete.
     */
    limit?: number
  }

  /**
   * SourceCodeEmbedding without action
   */
  export type SourceCodeEmbeddingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the SourceCodeEmbedding
     */
    select?: SourceCodeEmbeddingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the SourceCodeEmbedding
     */
    omit?: SourceCodeEmbeddingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SourceCodeEmbeddingInclude<ExtArgs> | null
  }


  /**
   * Model Meeting
   */

  export type AggregateMeeting = {
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  export type MeetingMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    meetingUrl: string | null
    projectId: string | null
    status: $Enums.MeetingStatus | null
  }

  export type MeetingMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    meetingUrl: string | null
    projectId: string | null
    status: $Enums.MeetingStatus | null
  }

  export type MeetingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    meetingUrl: number
    projectId: number
    status: number
    _all: number
  }


  export type MeetingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    meetingUrl?: true
    projectId?: true
    status?: true
  }

  export type MeetingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    meetingUrl?: true
    projectId?: true
    status?: true
  }

  export type MeetingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    meetingUrl?: true
    projectId?: true
    status?: true
    _all?: true
  }

  export type MeetingAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meeting to aggregate.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Meetings
    **/
    _count?: true | MeetingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MeetingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MeetingMaxAggregateInputType
  }

  export type GetMeetingAggregateType<T extends MeetingAggregateArgs> = {
        [P in keyof T & keyof AggregateMeeting]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMeeting[P]>
      : GetScalarType<T[P], AggregateMeeting[P]>
  }




  export type MeetingGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MeetingWhereInput
    orderBy?: MeetingOrderByWithAggregationInput | MeetingOrderByWithAggregationInput[]
    by: MeetingScalarFieldEnum[] | MeetingScalarFieldEnum
    having?: MeetingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MeetingCountAggregateInputType | true
    _min?: MeetingMinAggregateInputType
    _max?: MeetingMaxAggregateInputType
  }

  export type MeetingGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    name: string
    meetingUrl: string
    projectId: string
    status: $Enums.MeetingStatus
    _count: MeetingCountAggregateOutputType | null
    _min: MeetingMinAggregateOutputType | null
    _max: MeetingMaxAggregateOutputType | null
  }

  type GetMeetingGroupByPayload<T extends MeetingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MeetingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MeetingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MeetingGroupByOutputType[P]>
            : GetScalarType<T[P], MeetingGroupByOutputType[P]>
        }
      >
    >


  export type MeetingSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    meetingUrl?: boolean
    projectId?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    issues?: boolean | Meeting$issuesArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    meetingUrl?: boolean
    projectId?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    meetingUrl?: boolean
    projectId?: boolean
    status?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["meeting"]>

  export type MeetingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    meetingUrl?: boolean
    projectId?: boolean
    status?: boolean
  }

  export type MeetingOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "name" | "meetingUrl" | "projectId" | "status", ExtArgs["result"]["meeting"]>
  export type MeetingInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    issues?: boolean | Meeting$issuesArgs<ExtArgs>
    _count?: boolean | MeetingCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type MeetingIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $MeetingPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Meeting"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      issues: Prisma.$IssuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      name: string
      meetingUrl: string
      projectId: string
      status: $Enums.MeetingStatus
    }, ExtArgs["result"]["meeting"]>
    composites: {}
  }

  type MeetingGetPayload<S extends boolean | null | undefined | MeetingDefaultArgs> = $Result.GetResult<Prisma.$MeetingPayload, S>

  type MeetingCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MeetingFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MeetingCountAggregateInputType | true
    }

  export interface MeetingDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Meeting'], meta: { name: 'Meeting' } }
    /**
     * Find zero or one Meeting that matches the filter.
     * @param {MeetingFindUniqueArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MeetingFindUniqueArgs>(args: SelectSubset<T, MeetingFindUniqueArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Meeting that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MeetingFindUniqueOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MeetingFindUniqueOrThrowArgs>(args: SelectSubset<T, MeetingFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MeetingFindFirstArgs>(args?: SelectSubset<T, MeetingFindFirstArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Meeting that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindFirstOrThrowArgs} args - Arguments to find a Meeting
     * @example
     * // Get one Meeting
     * const meeting = await prisma.meeting.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MeetingFindFirstOrThrowArgs>(args?: SelectSubset<T, MeetingFindFirstOrThrowArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Meetings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Meetings
     * const meetings = await prisma.meeting.findMany()
     * 
     * // Get first 10 Meetings
     * const meetings = await prisma.meeting.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const meetingWithIdOnly = await prisma.meeting.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MeetingFindManyArgs>(args?: SelectSubset<T, MeetingFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Meeting.
     * @param {MeetingCreateArgs} args - Arguments to create a Meeting.
     * @example
     * // Create one Meeting
     * const Meeting = await prisma.meeting.create({
     *   data: {
     *     // ... data to create a Meeting
     *   }
     * })
     * 
     */
    create<T extends MeetingCreateArgs>(args: SelectSubset<T, MeetingCreateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Meetings.
     * @param {MeetingCreateManyArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MeetingCreateManyArgs>(args?: SelectSubset<T, MeetingCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Meetings and returns the data saved in the database.
     * @param {MeetingCreateManyAndReturnArgs} args - Arguments to create many Meetings.
     * @example
     * // Create many Meetings
     * const meeting = await prisma.meeting.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MeetingCreateManyAndReturnArgs>(args?: SelectSubset<T, MeetingCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Meeting.
     * @param {MeetingDeleteArgs} args - Arguments to delete one Meeting.
     * @example
     * // Delete one Meeting
     * const Meeting = await prisma.meeting.delete({
     *   where: {
     *     // ... filter to delete one Meeting
     *   }
     * })
     * 
     */
    delete<T extends MeetingDeleteArgs>(args: SelectSubset<T, MeetingDeleteArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Meeting.
     * @param {MeetingUpdateArgs} args - Arguments to update one Meeting.
     * @example
     * // Update one Meeting
     * const meeting = await prisma.meeting.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MeetingUpdateArgs>(args: SelectSubset<T, MeetingUpdateArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Meetings.
     * @param {MeetingDeleteManyArgs} args - Arguments to filter Meetings to delete.
     * @example
     * // Delete a few Meetings
     * const { count } = await prisma.meeting.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MeetingDeleteManyArgs>(args?: SelectSubset<T, MeetingDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MeetingUpdateManyArgs>(args: SelectSubset<T, MeetingUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Meetings and returns the data updated in the database.
     * @param {MeetingUpdateManyAndReturnArgs} args - Arguments to update many Meetings.
     * @example
     * // Update many Meetings
     * const meeting = await prisma.meeting.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Meetings and only return the `id`
     * const meetingWithIdOnly = await prisma.meeting.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MeetingUpdateManyAndReturnArgs>(args: SelectSubset<T, MeetingUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Meeting.
     * @param {MeetingUpsertArgs} args - Arguments to update or create a Meeting.
     * @example
     * // Update or create a Meeting
     * const meeting = await prisma.meeting.upsert({
     *   create: {
     *     // ... data to create a Meeting
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Meeting we want to update
     *   }
     * })
     */
    upsert<T extends MeetingUpsertArgs>(args: SelectSubset<T, MeetingUpsertArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Meetings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingCountArgs} args - Arguments to filter Meetings to count.
     * @example
     * // Count the number of Meetings
     * const count = await prisma.meeting.count({
     *   where: {
     *     // ... the filter for the Meetings we want to count
     *   }
     * })
    **/
    count<T extends MeetingCountArgs>(
      args?: Subset<T, MeetingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MeetingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MeetingAggregateArgs>(args: Subset<T, MeetingAggregateArgs>): Prisma.PrismaPromise<GetMeetingAggregateType<T>>

    /**
     * Group by Meeting.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MeetingGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MeetingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MeetingGroupByArgs['orderBy'] }
        : { orderBy?: MeetingGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MeetingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMeetingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Meeting model
   */
  readonly fields: MeetingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Meeting.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MeetingClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    issues<T extends Meeting$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Meeting$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Meeting model
   */
  interface MeetingFieldRefs {
    readonly id: FieldRef<"Meeting", 'String'>
    readonly createdAt: FieldRef<"Meeting", 'DateTime'>
    readonly updatedAt: FieldRef<"Meeting", 'DateTime'>
    readonly name: FieldRef<"Meeting", 'String'>
    readonly meetingUrl: FieldRef<"Meeting", 'String'>
    readonly projectId: FieldRef<"Meeting", 'String'>
    readonly status: FieldRef<"Meeting", 'MeetingStatus'>
  }
    

  // Custom InputTypes
  /**
   * Meeting findUnique
   */
  export type MeetingFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findUniqueOrThrow
   */
  export type MeetingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting findFirst
   */
  export type MeetingFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findFirstOrThrow
   */
  export type MeetingFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meeting to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Meetings.
     */
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting findMany
   */
  export type MeetingFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter, which Meetings to fetch.
     */
    where?: MeetingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Meetings to fetch.
     */
    orderBy?: MeetingOrderByWithRelationInput | MeetingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Meetings.
     */
    cursor?: MeetingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Meetings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Meetings.
     */
    skip?: number
    distinct?: MeetingScalarFieldEnum | MeetingScalarFieldEnum[]
  }

  /**
   * Meeting create
   */
  export type MeetingCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to create a Meeting.
     */
    data: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
  }

  /**
   * Meeting createMany
   */
  export type MeetingCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Meeting createManyAndReturn
   */
  export type MeetingCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to create many Meetings.
     */
    data: MeetingCreateManyInput | MeetingCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting update
   */
  export type MeetingUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The data needed to update a Meeting.
     */
    data: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
    /**
     * Choose, which Meeting to update.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting updateMany
   */
  export type MeetingUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
  }

  /**
   * Meeting updateManyAndReturn
   */
  export type MeetingUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * The data used to update Meetings.
     */
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyInput>
    /**
     * Filter which Meetings to update
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Meeting upsert
   */
  export type MeetingUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * The filter to search for the Meeting to update in case it exists.
     */
    where: MeetingWhereUniqueInput
    /**
     * In case the Meeting found by the `where` argument doesn't exist, create a new Meeting with this data.
     */
    create: XOR<MeetingCreateInput, MeetingUncheckedCreateInput>
    /**
     * In case the Meeting was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MeetingUpdateInput, MeetingUncheckedUpdateInput>
  }

  /**
   * Meeting delete
   */
  export type MeetingDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
    /**
     * Filter which Meeting to delete.
     */
    where: MeetingWhereUniqueInput
  }

  /**
   * Meeting deleteMany
   */
  export type MeetingDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Meetings to delete
     */
    where?: MeetingWhereInput
    /**
     * Limit how many Meetings to delete.
     */
    limit?: number
  }

  /**
   * Meeting.issues
   */
  export type Meeting$issuesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Meeting without action
   */
  export type MeetingDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Meeting
     */
    select?: MeetingSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Meeting
     */
    omit?: MeetingOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MeetingInclude<ExtArgs> | null
  }


  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    start: string | null
    end: string | null
    gist: string | null
    headline: string | null
    summary: string | null
    meetingId: string | null
  }

  export type IssueMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    start: string | null
    end: string | null
    gist: string | null
    headline: string | null
    summary: string | null
    meetingId: string | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    start: number
    end: number
    gist: number
    headline: number
    summary: number
    meetingId: number
    _all: number
  }


  export type IssueMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    start?: true
    end?: true
    gist?: true
    headline?: true
    summary?: true
    meetingId?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    start?: true
    end?: true
    gist?: true
    headline?: true
    summary?: true
    meetingId?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    start?: true
    end?: true
    gist?: true
    headline?: true
    summary?: true
    meetingId?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    start: string
    end: string
    gist: string
    headline: string
    summary: string
    meetingId: string
    _count: IssueCountAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    start?: boolean
    end?: boolean
    gist?: boolean
    headline?: boolean
    summary?: boolean
    meetingId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    start?: boolean
    end?: boolean
    gist?: boolean
    headline?: boolean
    summary?: boolean
    meetingId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    start?: boolean
    end?: boolean
    gist?: boolean
    headline?: boolean
    summary?: boolean
    meetingId?: boolean
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    start?: boolean
    end?: boolean
    gist?: boolean
    headline?: boolean
    summary?: boolean
    meetingId?: boolean
  }

  export type IssueOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "start" | "end" | "gist" | "headline" | "summary" | "meetingId", ExtArgs["result"]["issue"]>
  export type IssueInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }
  export type IssueIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }
  export type IssueIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    meeting?: boolean | MeetingDefaultArgs<ExtArgs>
  }

  export type $IssuePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      meeting: Prisma.$MeetingPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      start: string
      end: string
      gist: string
      headline: string
      summary: string
      meetingId: string
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }

  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<IssueFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends IssueFindUniqueArgs>(args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Issue that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs>(args: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends IssueFindFirstArgs>(args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs>(args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends IssueFindManyArgs>(args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
     */
    create<T extends IssueCreateArgs>(args: SelectSubset<T, IssueCreateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Issues.
     * @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends IssueCreateManyArgs>(args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Issues and returns the data saved in the database.
     * @param {IssueCreateManyAndReturnArgs} args - Arguments to create many Issues.
     * @example
     * // Create many Issues
     * const issue = await prisma.issue.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends IssueCreateManyAndReturnArgs>(args?: SelectSubset<T, IssueCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
     */
    delete<T extends IssueDeleteArgs>(args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends IssueUpdateArgs>(args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends IssueDeleteManyArgs>(args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends IssueUpdateManyArgs>(args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues and returns the data updated in the database.
     * @param {IssueUpdateManyAndReturnArgs} args - Arguments to update many Issues.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Issues and only return the `id`
     * const issueWithIdOnly = await prisma.issue.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends IssueUpdateManyAndReturnArgs>(args: SelectSubset<T, IssueUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
     */
    upsert<T extends IssueUpsertArgs>(args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    meeting<T extends MeetingDefaultArgs<ExtArgs> = {}>(args?: Subset<T, MeetingDefaultArgs<ExtArgs>>): Prisma__MeetingClient<$Result.GetResult<Prisma.$MeetingPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Issue model
   */
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'String'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
    readonly start: FieldRef<"Issue", 'String'>
    readonly end: FieldRef<"Issue", 'String'>
    readonly gist: FieldRef<"Issue", 'String'>
    readonly headline: FieldRef<"Issue", 'String'>
    readonly summary: FieldRef<"Issue", 'String'>
    readonly meetingId: FieldRef<"Issue", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }

  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }

  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Issue createManyAndReturn
   */
  export type IssueCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
  }

  /**
   * Issue updateManyAndReturn
   */
  export type IssueUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }

  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }

  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
    /**
     * Limit how many Issues to delete.
     */
    limit?: number
  }

  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Issue
     */
    omit?: IssueOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: IssueInclude<ExtArgs> | null
  }


  /**
   * Model RazorpayTransaction
   */

  export type AggregateRazorpayTransaction = {
    _count: RazorpayTransactionCountAggregateOutputType | null
    _avg: RazorpayTransactionAvgAggregateOutputType | null
    _sum: RazorpayTransactionSumAggregateOutputType | null
    _min: RazorpayTransactionMinAggregateOutputType | null
    _max: RazorpayTransactionMaxAggregateOutputType | null
  }

  export type RazorpayTransactionAvgAggregateOutputType = {
    credits: number | null
  }

  export type RazorpayTransactionSumAggregateOutputType = {
    credits: number | null
  }

  export type RazorpayTransactionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    credits: number | null
  }

  export type RazorpayTransactionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    userId: string | null
    credits: number | null
  }

  export type RazorpayTransactionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    userId: number
    credits: number
    _all: number
  }


  export type RazorpayTransactionAvgAggregateInputType = {
    credits?: true
  }

  export type RazorpayTransactionSumAggregateInputType = {
    credits?: true
  }

  export type RazorpayTransactionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    credits?: true
  }

  export type RazorpayTransactionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    credits?: true
  }

  export type RazorpayTransactionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    userId?: true
    credits?: true
    _all?: true
  }

  export type RazorpayTransactionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RazorpayTransaction to aggregate.
     */
    where?: RazorpayTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RazorpayTransactions to fetch.
     */
    orderBy?: RazorpayTransactionOrderByWithRelationInput | RazorpayTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RazorpayTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RazorpayTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RazorpayTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned RazorpayTransactions
    **/
    _count?: true | RazorpayTransactionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RazorpayTransactionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RazorpayTransactionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RazorpayTransactionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RazorpayTransactionMaxAggregateInputType
  }

  export type GetRazorpayTransactionAggregateType<T extends RazorpayTransactionAggregateArgs> = {
        [P in keyof T & keyof AggregateRazorpayTransaction]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRazorpayTransaction[P]>
      : GetScalarType<T[P], AggregateRazorpayTransaction[P]>
  }




  export type RazorpayTransactionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: RazorpayTransactionWhereInput
    orderBy?: RazorpayTransactionOrderByWithAggregationInput | RazorpayTransactionOrderByWithAggregationInput[]
    by: RazorpayTransactionScalarFieldEnum[] | RazorpayTransactionScalarFieldEnum
    having?: RazorpayTransactionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RazorpayTransactionCountAggregateInputType | true
    _avg?: RazorpayTransactionAvgAggregateInputType
    _sum?: RazorpayTransactionSumAggregateInputType
    _min?: RazorpayTransactionMinAggregateInputType
    _max?: RazorpayTransactionMaxAggregateInputType
  }

  export type RazorpayTransactionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    userId: string
    credits: number
    _count: RazorpayTransactionCountAggregateOutputType | null
    _avg: RazorpayTransactionAvgAggregateOutputType | null
    _sum: RazorpayTransactionSumAggregateOutputType | null
    _min: RazorpayTransactionMinAggregateOutputType | null
    _max: RazorpayTransactionMaxAggregateOutputType | null
  }

  type GetRazorpayTransactionGroupByPayload<T extends RazorpayTransactionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RazorpayTransactionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RazorpayTransactionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RazorpayTransactionGroupByOutputType[P]>
            : GetScalarType<T[P], RazorpayTransactionGroupByOutputType[P]>
        }
      >
    >


  export type RazorpayTransactionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    credits?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["razorpayTransaction"]>

  export type RazorpayTransactionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    credits?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["razorpayTransaction"]>

  export type RazorpayTransactionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    credits?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["razorpayTransaction"]>

  export type RazorpayTransactionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    userId?: boolean
    credits?: boolean
  }

  export type RazorpayTransactionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "userId" | "credits", ExtArgs["result"]["razorpayTransaction"]>
  export type RazorpayTransactionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RazorpayTransactionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type RazorpayTransactionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $RazorpayTransactionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "RazorpayTransaction"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      userId: string
      credits: number
    }, ExtArgs["result"]["razorpayTransaction"]>
    composites: {}
  }

  type RazorpayTransactionGetPayload<S extends boolean | null | undefined | RazorpayTransactionDefaultArgs> = $Result.GetResult<Prisma.$RazorpayTransactionPayload, S>

  type RazorpayTransactionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<RazorpayTransactionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: RazorpayTransactionCountAggregateInputType | true
    }

  export interface RazorpayTransactionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['RazorpayTransaction'], meta: { name: 'RazorpayTransaction' } }
    /**
     * Find zero or one RazorpayTransaction that matches the filter.
     * @param {RazorpayTransactionFindUniqueArgs} args - Arguments to find a RazorpayTransaction
     * @example
     * // Get one RazorpayTransaction
     * const razorpayTransaction = await prisma.razorpayTransaction.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends RazorpayTransactionFindUniqueArgs>(args: SelectSubset<T, RazorpayTransactionFindUniqueArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one RazorpayTransaction that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {RazorpayTransactionFindUniqueOrThrowArgs} args - Arguments to find a RazorpayTransaction
     * @example
     * // Get one RazorpayTransaction
     * const razorpayTransaction = await prisma.razorpayTransaction.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends RazorpayTransactionFindUniqueOrThrowArgs>(args: SelectSubset<T, RazorpayTransactionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RazorpayTransaction that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionFindFirstArgs} args - Arguments to find a RazorpayTransaction
     * @example
     * // Get one RazorpayTransaction
     * const razorpayTransaction = await prisma.razorpayTransaction.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends RazorpayTransactionFindFirstArgs>(args?: SelectSubset<T, RazorpayTransactionFindFirstArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first RazorpayTransaction that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionFindFirstOrThrowArgs} args - Arguments to find a RazorpayTransaction
     * @example
     * // Get one RazorpayTransaction
     * const razorpayTransaction = await prisma.razorpayTransaction.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends RazorpayTransactionFindFirstOrThrowArgs>(args?: SelectSubset<T, RazorpayTransactionFindFirstOrThrowArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more RazorpayTransactions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all RazorpayTransactions
     * const razorpayTransactions = await prisma.razorpayTransaction.findMany()
     * 
     * // Get first 10 RazorpayTransactions
     * const razorpayTransactions = await prisma.razorpayTransaction.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const razorpayTransactionWithIdOnly = await prisma.razorpayTransaction.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends RazorpayTransactionFindManyArgs>(args?: SelectSubset<T, RazorpayTransactionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a RazorpayTransaction.
     * @param {RazorpayTransactionCreateArgs} args - Arguments to create a RazorpayTransaction.
     * @example
     * // Create one RazorpayTransaction
     * const RazorpayTransaction = await prisma.razorpayTransaction.create({
     *   data: {
     *     // ... data to create a RazorpayTransaction
     *   }
     * })
     * 
     */
    create<T extends RazorpayTransactionCreateArgs>(args: SelectSubset<T, RazorpayTransactionCreateArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many RazorpayTransactions.
     * @param {RazorpayTransactionCreateManyArgs} args - Arguments to create many RazorpayTransactions.
     * @example
     * // Create many RazorpayTransactions
     * const razorpayTransaction = await prisma.razorpayTransaction.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends RazorpayTransactionCreateManyArgs>(args?: SelectSubset<T, RazorpayTransactionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many RazorpayTransactions and returns the data saved in the database.
     * @param {RazorpayTransactionCreateManyAndReturnArgs} args - Arguments to create many RazorpayTransactions.
     * @example
     * // Create many RazorpayTransactions
     * const razorpayTransaction = await prisma.razorpayTransaction.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many RazorpayTransactions and only return the `id`
     * const razorpayTransactionWithIdOnly = await prisma.razorpayTransaction.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends RazorpayTransactionCreateManyAndReturnArgs>(args?: SelectSubset<T, RazorpayTransactionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a RazorpayTransaction.
     * @param {RazorpayTransactionDeleteArgs} args - Arguments to delete one RazorpayTransaction.
     * @example
     * // Delete one RazorpayTransaction
     * const RazorpayTransaction = await prisma.razorpayTransaction.delete({
     *   where: {
     *     // ... filter to delete one RazorpayTransaction
     *   }
     * })
     * 
     */
    delete<T extends RazorpayTransactionDeleteArgs>(args: SelectSubset<T, RazorpayTransactionDeleteArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one RazorpayTransaction.
     * @param {RazorpayTransactionUpdateArgs} args - Arguments to update one RazorpayTransaction.
     * @example
     * // Update one RazorpayTransaction
     * const razorpayTransaction = await prisma.razorpayTransaction.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends RazorpayTransactionUpdateArgs>(args: SelectSubset<T, RazorpayTransactionUpdateArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more RazorpayTransactions.
     * @param {RazorpayTransactionDeleteManyArgs} args - Arguments to filter RazorpayTransactions to delete.
     * @example
     * // Delete a few RazorpayTransactions
     * const { count } = await prisma.razorpayTransaction.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends RazorpayTransactionDeleteManyArgs>(args?: SelectSubset<T, RazorpayTransactionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RazorpayTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many RazorpayTransactions
     * const razorpayTransaction = await prisma.razorpayTransaction.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends RazorpayTransactionUpdateManyArgs>(args: SelectSubset<T, RazorpayTransactionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more RazorpayTransactions and returns the data updated in the database.
     * @param {RazorpayTransactionUpdateManyAndReturnArgs} args - Arguments to update many RazorpayTransactions.
     * @example
     * // Update many RazorpayTransactions
     * const razorpayTransaction = await prisma.razorpayTransaction.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more RazorpayTransactions and only return the `id`
     * const razorpayTransactionWithIdOnly = await prisma.razorpayTransaction.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends RazorpayTransactionUpdateManyAndReturnArgs>(args: SelectSubset<T, RazorpayTransactionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one RazorpayTransaction.
     * @param {RazorpayTransactionUpsertArgs} args - Arguments to update or create a RazorpayTransaction.
     * @example
     * // Update or create a RazorpayTransaction
     * const razorpayTransaction = await prisma.razorpayTransaction.upsert({
     *   create: {
     *     // ... data to create a RazorpayTransaction
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the RazorpayTransaction we want to update
     *   }
     * })
     */
    upsert<T extends RazorpayTransactionUpsertArgs>(args: SelectSubset<T, RazorpayTransactionUpsertArgs<ExtArgs>>): Prisma__RazorpayTransactionClient<$Result.GetResult<Prisma.$RazorpayTransactionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of RazorpayTransactions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionCountArgs} args - Arguments to filter RazorpayTransactions to count.
     * @example
     * // Count the number of RazorpayTransactions
     * const count = await prisma.razorpayTransaction.count({
     *   where: {
     *     // ... the filter for the RazorpayTransactions we want to count
     *   }
     * })
    **/
    count<T extends RazorpayTransactionCountArgs>(
      args?: Subset<T, RazorpayTransactionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RazorpayTransactionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a RazorpayTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends RazorpayTransactionAggregateArgs>(args: Subset<T, RazorpayTransactionAggregateArgs>): Prisma.PrismaPromise<GetRazorpayTransactionAggregateType<T>>

    /**
     * Group by RazorpayTransaction.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RazorpayTransactionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends RazorpayTransactionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RazorpayTransactionGroupByArgs['orderBy'] }
        : { orderBy?: RazorpayTransactionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, RazorpayTransactionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRazorpayTransactionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the RazorpayTransaction model
   */
  readonly fields: RazorpayTransactionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for RazorpayTransaction.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RazorpayTransactionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the RazorpayTransaction model
   */
  interface RazorpayTransactionFieldRefs {
    readonly id: FieldRef<"RazorpayTransaction", 'String'>
    readonly createdAt: FieldRef<"RazorpayTransaction", 'DateTime'>
    readonly updatedAt: FieldRef<"RazorpayTransaction", 'DateTime'>
    readonly userId: FieldRef<"RazorpayTransaction", 'String'>
    readonly credits: FieldRef<"RazorpayTransaction", 'Int'>
  }
    

  // Custom InputTypes
  /**
   * RazorpayTransaction findUnique
   */
  export type RazorpayTransactionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RazorpayTransaction to fetch.
     */
    where: RazorpayTransactionWhereUniqueInput
  }

  /**
   * RazorpayTransaction findUniqueOrThrow
   */
  export type RazorpayTransactionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RazorpayTransaction to fetch.
     */
    where: RazorpayTransactionWhereUniqueInput
  }

  /**
   * RazorpayTransaction findFirst
   */
  export type RazorpayTransactionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RazorpayTransaction to fetch.
     */
    where?: RazorpayTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RazorpayTransactions to fetch.
     */
    orderBy?: RazorpayTransactionOrderByWithRelationInput | RazorpayTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RazorpayTransactions.
     */
    cursor?: RazorpayTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RazorpayTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RazorpayTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RazorpayTransactions.
     */
    distinct?: RazorpayTransactionScalarFieldEnum | RazorpayTransactionScalarFieldEnum[]
  }

  /**
   * RazorpayTransaction findFirstOrThrow
   */
  export type RazorpayTransactionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RazorpayTransaction to fetch.
     */
    where?: RazorpayTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RazorpayTransactions to fetch.
     */
    orderBy?: RazorpayTransactionOrderByWithRelationInput | RazorpayTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for RazorpayTransactions.
     */
    cursor?: RazorpayTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RazorpayTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RazorpayTransactions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of RazorpayTransactions.
     */
    distinct?: RazorpayTransactionScalarFieldEnum | RazorpayTransactionScalarFieldEnum[]
  }

  /**
   * RazorpayTransaction findMany
   */
  export type RazorpayTransactionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * Filter, which RazorpayTransactions to fetch.
     */
    where?: RazorpayTransactionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of RazorpayTransactions to fetch.
     */
    orderBy?: RazorpayTransactionOrderByWithRelationInput | RazorpayTransactionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing RazorpayTransactions.
     */
    cursor?: RazorpayTransactionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` RazorpayTransactions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` RazorpayTransactions.
     */
    skip?: number
    distinct?: RazorpayTransactionScalarFieldEnum | RazorpayTransactionScalarFieldEnum[]
  }

  /**
   * RazorpayTransaction create
   */
  export type RazorpayTransactionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * The data needed to create a RazorpayTransaction.
     */
    data: XOR<RazorpayTransactionCreateInput, RazorpayTransactionUncheckedCreateInput>
  }

  /**
   * RazorpayTransaction createMany
   */
  export type RazorpayTransactionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many RazorpayTransactions.
     */
    data: RazorpayTransactionCreateManyInput | RazorpayTransactionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * RazorpayTransaction createManyAndReturn
   */
  export type RazorpayTransactionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * The data used to create many RazorpayTransactions.
     */
    data: RazorpayTransactionCreateManyInput | RazorpayTransactionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * RazorpayTransaction update
   */
  export type RazorpayTransactionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * The data needed to update a RazorpayTransaction.
     */
    data: XOR<RazorpayTransactionUpdateInput, RazorpayTransactionUncheckedUpdateInput>
    /**
     * Choose, which RazorpayTransaction to update.
     */
    where: RazorpayTransactionWhereUniqueInput
  }

  /**
   * RazorpayTransaction updateMany
   */
  export type RazorpayTransactionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update RazorpayTransactions.
     */
    data: XOR<RazorpayTransactionUpdateManyMutationInput, RazorpayTransactionUncheckedUpdateManyInput>
    /**
     * Filter which RazorpayTransactions to update
     */
    where?: RazorpayTransactionWhereInput
    /**
     * Limit how many RazorpayTransactions to update.
     */
    limit?: number
  }

  /**
   * RazorpayTransaction updateManyAndReturn
   */
  export type RazorpayTransactionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * The data used to update RazorpayTransactions.
     */
    data: XOR<RazorpayTransactionUpdateManyMutationInput, RazorpayTransactionUncheckedUpdateManyInput>
    /**
     * Filter which RazorpayTransactions to update
     */
    where?: RazorpayTransactionWhereInput
    /**
     * Limit how many RazorpayTransactions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * RazorpayTransaction upsert
   */
  export type RazorpayTransactionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * The filter to search for the RazorpayTransaction to update in case it exists.
     */
    where: RazorpayTransactionWhereUniqueInput
    /**
     * In case the RazorpayTransaction found by the `where` argument doesn't exist, create a new RazorpayTransaction with this data.
     */
    create: XOR<RazorpayTransactionCreateInput, RazorpayTransactionUncheckedCreateInput>
    /**
     * In case the RazorpayTransaction was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RazorpayTransactionUpdateInput, RazorpayTransactionUncheckedUpdateInput>
  }

  /**
   * RazorpayTransaction delete
   */
  export type RazorpayTransactionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
    /**
     * Filter which RazorpayTransaction to delete.
     */
    where: RazorpayTransactionWhereUniqueInput
  }

  /**
   * RazorpayTransaction deleteMany
   */
  export type RazorpayTransactionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which RazorpayTransactions to delete
     */
    where?: RazorpayTransactionWhereInput
    /**
     * Limit how many RazorpayTransactions to delete.
     */
    limit?: number
  }

  /**
   * RazorpayTransaction without action
   */
  export type RazorpayTransactionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the RazorpayTransaction
     */
    select?: RazorpayTransactionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the RazorpayTransaction
     */
    omit?: RazorpayTransactionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: RazorpayTransactionInclude<ExtArgs> | null
  }


  /**
   * Model Question
   */

  export type AggregateQuestion = {
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  export type QuestionMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    question: string | null
    answer: string | null
    projectId: string | null
    userId: string | null
  }

  export type QuestionMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    question: string | null
    answer: string | null
    projectId: string | null
    userId: string | null
  }

  export type QuestionCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    question: number
    answer: number
    fileReferences: number
    projectId: number
    userId: number
    _all: number
  }


  export type QuestionMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    question?: true
    answer?: true
    projectId?: true
    userId?: true
  }

  export type QuestionMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    question?: true
    answer?: true
    projectId?: true
    userId?: true
  }

  export type QuestionCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    question?: true
    answer?: true
    fileReferences?: true
    projectId?: true
    userId?: true
    _all?: true
  }

  export type QuestionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Question to aggregate.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Questions
    **/
    _count?: true | QuestionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: QuestionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: QuestionMaxAggregateInputType
  }

  export type GetQuestionAggregateType<T extends QuestionAggregateArgs> = {
        [P in keyof T & keyof AggregateQuestion]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateQuestion[P]>
      : GetScalarType<T[P], AggregateQuestion[P]>
  }




  export type QuestionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: QuestionWhereInput
    orderBy?: QuestionOrderByWithAggregationInput | QuestionOrderByWithAggregationInput[]
    by: QuestionScalarFieldEnum[] | QuestionScalarFieldEnum
    having?: QuestionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: QuestionCountAggregateInputType | true
    _min?: QuestionMinAggregateInputType
    _max?: QuestionMaxAggregateInputType
  }

  export type QuestionGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    question: string
    answer: string
    fileReferences: JsonValue | null
    projectId: string
    userId: string
    _count: QuestionCountAggregateOutputType | null
    _min: QuestionMinAggregateOutputType | null
    _max: QuestionMaxAggregateOutputType | null
  }

  type GetQuestionGroupByPayload<T extends QuestionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<QuestionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof QuestionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], QuestionGroupByOutputType[P]>
            : GetScalarType<T[P], QuestionGroupByOutputType[P]>
        }
      >
    >


  export type QuestionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    answer?: boolean
    fileReferences?: boolean
    projectId?: boolean
    userId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    answer?: boolean
    fileReferences?: boolean
    projectId?: boolean
    userId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    answer?: boolean
    fileReferences?: boolean
    projectId?: boolean
    userId?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["question"]>

  export type QuestionSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    question?: boolean
    answer?: boolean
    fileReferences?: boolean
    projectId?: boolean
    userId?: boolean
  }

  export type QuestionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "question" | "answer" | "fileReferences" | "projectId" | "userId", ExtArgs["result"]["question"]>
  export type QuestionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }
  export type QuestionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }

  export type $QuestionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Question"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      question: string
      answer: string
      fileReferences: Prisma.JsonValue | null
      projectId: string
      userId: string
    }, ExtArgs["result"]["question"]>
    composites: {}
  }

  type QuestionGetPayload<S extends boolean | null | undefined | QuestionDefaultArgs> = $Result.GetResult<Prisma.$QuestionPayload, S>

  type QuestionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<QuestionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: QuestionCountAggregateInputType | true
    }

  export interface QuestionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Question'], meta: { name: 'Question' } }
    /**
     * Find zero or one Question that matches the filter.
     * @param {QuestionFindUniqueArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends QuestionFindUniqueArgs>(args: SelectSubset<T, QuestionFindUniqueArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Question that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {QuestionFindUniqueOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends QuestionFindUniqueOrThrowArgs>(args: SelectSubset<T, QuestionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends QuestionFindFirstArgs>(args?: SelectSubset<T, QuestionFindFirstArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Question that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindFirstOrThrowArgs} args - Arguments to find a Question
     * @example
     * // Get one Question
     * const question = await prisma.question.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends QuestionFindFirstOrThrowArgs>(args?: SelectSubset<T, QuestionFindFirstOrThrowArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Questions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Questions
     * const questions = await prisma.question.findMany()
     * 
     * // Get first 10 Questions
     * const questions = await prisma.question.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const questionWithIdOnly = await prisma.question.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends QuestionFindManyArgs>(args?: SelectSubset<T, QuestionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Question.
     * @param {QuestionCreateArgs} args - Arguments to create a Question.
     * @example
     * // Create one Question
     * const Question = await prisma.question.create({
     *   data: {
     *     // ... data to create a Question
     *   }
     * })
     * 
     */
    create<T extends QuestionCreateArgs>(args: SelectSubset<T, QuestionCreateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Questions.
     * @param {QuestionCreateManyArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends QuestionCreateManyArgs>(args?: SelectSubset<T, QuestionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Questions and returns the data saved in the database.
     * @param {QuestionCreateManyAndReturnArgs} args - Arguments to create many Questions.
     * @example
     * // Create many Questions
     * const question = await prisma.question.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends QuestionCreateManyAndReturnArgs>(args?: SelectSubset<T, QuestionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Question.
     * @param {QuestionDeleteArgs} args - Arguments to delete one Question.
     * @example
     * // Delete one Question
     * const Question = await prisma.question.delete({
     *   where: {
     *     // ... filter to delete one Question
     *   }
     * })
     * 
     */
    delete<T extends QuestionDeleteArgs>(args: SelectSubset<T, QuestionDeleteArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Question.
     * @param {QuestionUpdateArgs} args - Arguments to update one Question.
     * @example
     * // Update one Question
     * const question = await prisma.question.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends QuestionUpdateArgs>(args: SelectSubset<T, QuestionUpdateArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Questions.
     * @param {QuestionDeleteManyArgs} args - Arguments to filter Questions to delete.
     * @example
     * // Delete a few Questions
     * const { count } = await prisma.question.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends QuestionDeleteManyArgs>(args?: SelectSubset<T, QuestionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends QuestionUpdateManyArgs>(args: SelectSubset<T, QuestionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Questions and returns the data updated in the database.
     * @param {QuestionUpdateManyAndReturnArgs} args - Arguments to update many Questions.
     * @example
     * // Update many Questions
     * const question = await prisma.question.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Questions and only return the `id`
     * const questionWithIdOnly = await prisma.question.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends QuestionUpdateManyAndReturnArgs>(args: SelectSubset<T, QuestionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Question.
     * @param {QuestionUpsertArgs} args - Arguments to update or create a Question.
     * @example
     * // Update or create a Question
     * const question = await prisma.question.upsert({
     *   create: {
     *     // ... data to create a Question
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Question we want to update
     *   }
     * })
     */
    upsert<T extends QuestionUpsertArgs>(args: SelectSubset<T, QuestionUpsertArgs<ExtArgs>>): Prisma__QuestionClient<$Result.GetResult<Prisma.$QuestionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Questions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionCountArgs} args - Arguments to filter Questions to count.
     * @example
     * // Count the number of Questions
     * const count = await prisma.question.count({
     *   where: {
     *     // ... the filter for the Questions we want to count
     *   }
     * })
    **/
    count<T extends QuestionCountArgs>(
      args?: Subset<T, QuestionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], QuestionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends QuestionAggregateArgs>(args: Subset<T, QuestionAggregateArgs>): Prisma.PrismaPromise<GetQuestionAggregateType<T>>

    /**
     * Group by Question.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {QuestionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends QuestionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: QuestionGroupByArgs['orderBy'] }
        : { orderBy?: QuestionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, QuestionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetQuestionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Question model
   */
  readonly fields: QuestionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Question.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__QuestionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Question model
   */
  interface QuestionFieldRefs {
    readonly id: FieldRef<"Question", 'String'>
    readonly createdAt: FieldRef<"Question", 'DateTime'>
    readonly updatedAt: FieldRef<"Question", 'DateTime'>
    readonly question: FieldRef<"Question", 'String'>
    readonly answer: FieldRef<"Question", 'String'>
    readonly fileReferences: FieldRef<"Question", 'Json'>
    readonly projectId: FieldRef<"Question", 'String'>
    readonly userId: FieldRef<"Question", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Question findUnique
   */
  export type QuestionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findUniqueOrThrow
   */
  export type QuestionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question findFirst
   */
  export type QuestionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findFirstOrThrow
   */
  export type QuestionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Question to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Questions.
     */
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question findMany
   */
  export type QuestionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter, which Questions to fetch.
     */
    where?: QuestionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Questions to fetch.
     */
    orderBy?: QuestionOrderByWithRelationInput | QuestionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Questions.
     */
    cursor?: QuestionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Questions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Questions.
     */
    skip?: number
    distinct?: QuestionScalarFieldEnum | QuestionScalarFieldEnum[]
  }

  /**
   * Question create
   */
  export type QuestionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to create a Question.
     */
    data: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
  }

  /**
   * Question createMany
   */
  export type QuestionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Question createManyAndReturn
   */
  export type QuestionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to create many Questions.
     */
    data: QuestionCreateManyInput | QuestionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question update
   */
  export type QuestionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The data needed to update a Question.
     */
    data: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
    /**
     * Choose, which Question to update.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question updateMany
   */
  export type QuestionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
  }

  /**
   * Question updateManyAndReturn
   */
  export type QuestionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * The data used to update Questions.
     */
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyInput>
    /**
     * Filter which Questions to update
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Question upsert
   */
  export type QuestionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * The filter to search for the Question to update in case it exists.
     */
    where: QuestionWhereUniqueInput
    /**
     * In case the Question found by the `where` argument doesn't exist, create a new Question with this data.
     */
    create: XOR<QuestionCreateInput, QuestionUncheckedCreateInput>
    /**
     * In case the Question was found with the provided `where` argument, update it with this data.
     */
    update: XOR<QuestionUpdateInput, QuestionUncheckedUpdateInput>
  }

  /**
   * Question delete
   */
  export type QuestionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
    /**
     * Filter which Question to delete.
     */
    where: QuestionWhereUniqueInput
  }

  /**
   * Question deleteMany
   */
  export type QuestionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Questions to delete
     */
    where?: QuestionWhereInput
    /**
     * Limit how many Questions to delete.
     */
    limit?: number
  }

  /**
   * Question without action
   */
  export type QuestionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Question
     */
    select?: QuestionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Question
     */
    omit?: QuestionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: QuestionInclude<ExtArgs> | null
  }


  /**
   * Model Commit
   */

  export type AggregateCommit = {
    _count: CommitCountAggregateOutputType | null
    _min: CommitMinAggregateOutputType | null
    _max: CommitMaxAggregateOutputType | null
  }

  export type CommitMinAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    commitMessage: string | null
    commitHash: string | null
    commitAuthorName: string | null
    commitAuthorAvatar: string | null
    commitDate: Date | null
    summary: string | null
  }

  export type CommitMaxAggregateOutputType = {
    id: string | null
    createdAt: Date | null
    updatedAt: Date | null
    projectId: string | null
    commitMessage: string | null
    commitHash: string | null
    commitAuthorName: string | null
    commitAuthorAvatar: string | null
    commitDate: Date | null
    summary: string | null
  }

  export type CommitCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    projectId: number
    commitMessage: number
    commitHash: number
    commitAuthorName: number
    commitAuthorAvatar: number
    commitDate: number
    summary: number
    _all: number
  }


  export type CommitMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    commitMessage?: true
    commitHash?: true
    commitAuthorName?: true
    commitAuthorAvatar?: true
    commitDate?: true
    summary?: true
  }

  export type CommitMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    commitMessage?: true
    commitHash?: true
    commitAuthorName?: true
    commitAuthorAvatar?: true
    commitDate?: true
    summary?: true
  }

  export type CommitCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    projectId?: true
    commitMessage?: true
    commitHash?: true
    commitAuthorName?: true
    commitAuthorAvatar?: true
    commitDate?: true
    summary?: true
    _all?: true
  }

  export type CommitAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commit to aggregate.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Commits
    **/
    _count?: true | CommitCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CommitMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CommitMaxAggregateInputType
  }

  export type GetCommitAggregateType<T extends CommitAggregateArgs> = {
        [P in keyof T & keyof AggregateCommit]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCommit[P]>
      : GetScalarType<T[P], AggregateCommit[P]>
  }




  export type CommitGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: CommitWhereInput
    orderBy?: CommitOrderByWithAggregationInput | CommitOrderByWithAggregationInput[]
    by: CommitScalarFieldEnum[] | CommitScalarFieldEnum
    having?: CommitScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CommitCountAggregateInputType | true
    _min?: CommitMinAggregateInputType
    _max?: CommitMaxAggregateInputType
  }

  export type CommitGroupByOutputType = {
    id: string
    createdAt: Date
    updatedAt: Date
    projectId: string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date
    summary: string
    _count: CommitCountAggregateOutputType | null
    _min: CommitMinAggregateOutputType | null
    _max: CommitMaxAggregateOutputType | null
  }

  type GetCommitGroupByPayload<T extends CommitGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CommitGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CommitGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CommitGroupByOutputType[P]>
            : GetScalarType<T[P], CommitGroupByOutputType[P]>
        }
      >
    >


  export type CommitSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    commitMessage?: boolean
    commitHash?: boolean
    commitAuthorName?: boolean
    commitAuthorAvatar?: boolean
    commitDate?: boolean
    summary?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commit"]>

  export type CommitSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    commitMessage?: boolean
    commitHash?: boolean
    commitAuthorName?: boolean
    commitAuthorAvatar?: boolean
    commitDate?: boolean
    summary?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commit"]>

  export type CommitSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    commitMessage?: boolean
    commitHash?: boolean
    commitAuthorName?: boolean
    commitAuthorAvatar?: boolean
    commitDate?: boolean
    summary?: boolean
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["commit"]>

  export type CommitSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    projectId?: boolean
    commitMessage?: boolean
    commitHash?: boolean
    commitAuthorName?: boolean
    commitAuthorAvatar?: boolean
    commitDate?: boolean
    summary?: boolean
  }

  export type CommitOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "createdAt" | "updatedAt" | "projectId" | "commitMessage" | "commitHash" | "commitAuthorName" | "commitAuthorAvatar" | "commitDate" | "summary", ExtArgs["result"]["commit"]>
  export type CommitInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CommitIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }
  export type CommitIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    project?: boolean | ProjectDefaultArgs<ExtArgs>
  }

  export type $CommitPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Commit"
    objects: {
      project: Prisma.$ProjectPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      createdAt: Date
      updatedAt: Date
      projectId: string
      commitMessage: string
      commitHash: string
      commitAuthorName: string
      commitAuthorAvatar: string
      commitDate: Date
      summary: string
    }, ExtArgs["result"]["commit"]>
    composites: {}
  }

  type CommitGetPayload<S extends boolean | null | undefined | CommitDefaultArgs> = $Result.GetResult<Prisma.$CommitPayload, S>

  type CommitCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<CommitFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: CommitCountAggregateInputType | true
    }

  export interface CommitDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Commit'], meta: { name: 'Commit' } }
    /**
     * Find zero or one Commit that matches the filter.
     * @param {CommitFindUniqueArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends CommitFindUniqueArgs>(args: SelectSubset<T, CommitFindUniqueArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Commit that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {CommitFindUniqueOrThrowArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends CommitFindUniqueOrThrowArgs>(args: SelectSubset<T, CommitFindUniqueOrThrowArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commit that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitFindFirstArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends CommitFindFirstArgs>(args?: SelectSubset<T, CommitFindFirstArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Commit that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitFindFirstOrThrowArgs} args - Arguments to find a Commit
     * @example
     * // Get one Commit
     * const commit = await prisma.commit.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends CommitFindFirstOrThrowArgs>(args?: SelectSubset<T, CommitFindFirstOrThrowArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Commits that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Commits
     * const commits = await prisma.commit.findMany()
     * 
     * // Get first 10 Commits
     * const commits = await prisma.commit.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const commitWithIdOnly = await prisma.commit.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends CommitFindManyArgs>(args?: SelectSubset<T, CommitFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Commit.
     * @param {CommitCreateArgs} args - Arguments to create a Commit.
     * @example
     * // Create one Commit
     * const Commit = await prisma.commit.create({
     *   data: {
     *     // ... data to create a Commit
     *   }
     * })
     * 
     */
    create<T extends CommitCreateArgs>(args: SelectSubset<T, CommitCreateArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Commits.
     * @param {CommitCreateManyArgs} args - Arguments to create many Commits.
     * @example
     * // Create many Commits
     * const commit = await prisma.commit.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends CommitCreateManyArgs>(args?: SelectSubset<T, CommitCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Commits and returns the data saved in the database.
     * @param {CommitCreateManyAndReturnArgs} args - Arguments to create many Commits.
     * @example
     * // Create many Commits
     * const commit = await prisma.commit.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Commits and only return the `id`
     * const commitWithIdOnly = await prisma.commit.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends CommitCreateManyAndReturnArgs>(args?: SelectSubset<T, CommitCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Commit.
     * @param {CommitDeleteArgs} args - Arguments to delete one Commit.
     * @example
     * // Delete one Commit
     * const Commit = await prisma.commit.delete({
     *   where: {
     *     // ... filter to delete one Commit
     *   }
     * })
     * 
     */
    delete<T extends CommitDeleteArgs>(args: SelectSubset<T, CommitDeleteArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Commit.
     * @param {CommitUpdateArgs} args - Arguments to update one Commit.
     * @example
     * // Update one Commit
     * const commit = await prisma.commit.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends CommitUpdateArgs>(args: SelectSubset<T, CommitUpdateArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Commits.
     * @param {CommitDeleteManyArgs} args - Arguments to filter Commits to delete.
     * @example
     * // Delete a few Commits
     * const { count } = await prisma.commit.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends CommitDeleteManyArgs>(args?: SelectSubset<T, CommitDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Commits
     * const commit = await prisma.commit.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends CommitUpdateManyArgs>(args: SelectSubset<T, CommitUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Commits and returns the data updated in the database.
     * @param {CommitUpdateManyAndReturnArgs} args - Arguments to update many Commits.
     * @example
     * // Update many Commits
     * const commit = await prisma.commit.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Commits and only return the `id`
     * const commitWithIdOnly = await prisma.commit.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends CommitUpdateManyAndReturnArgs>(args: SelectSubset<T, CommitUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Commit.
     * @param {CommitUpsertArgs} args - Arguments to update or create a Commit.
     * @example
     * // Update or create a Commit
     * const commit = await prisma.commit.upsert({
     *   create: {
     *     // ... data to create a Commit
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Commit we want to update
     *   }
     * })
     */
    upsert<T extends CommitUpsertArgs>(args: SelectSubset<T, CommitUpsertArgs<ExtArgs>>): Prisma__CommitClient<$Result.GetResult<Prisma.$CommitPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Commits.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitCountArgs} args - Arguments to filter Commits to count.
     * @example
     * // Count the number of Commits
     * const count = await prisma.commit.count({
     *   where: {
     *     // ... the filter for the Commits we want to count
     *   }
     * })
    **/
    count<T extends CommitCountArgs>(
      args?: Subset<T, CommitCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CommitCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Commit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends CommitAggregateArgs>(args: Subset<T, CommitAggregateArgs>): Prisma.PrismaPromise<GetCommitAggregateType<T>>

    /**
     * Group by Commit.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CommitGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends CommitGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CommitGroupByArgs['orderBy'] }
        : { orderBy?: CommitGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, CommitGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCommitGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Commit model
   */
  readonly fields: CommitFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Commit.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CommitClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    project<T extends ProjectDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProjectDefaultArgs<ExtArgs>>): Prisma__ProjectClient<$Result.GetResult<Prisma.$ProjectPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Commit model
   */
  interface CommitFieldRefs {
    readonly id: FieldRef<"Commit", 'String'>
    readonly createdAt: FieldRef<"Commit", 'DateTime'>
    readonly updatedAt: FieldRef<"Commit", 'DateTime'>
    readonly projectId: FieldRef<"Commit", 'String'>
    readonly commitMessage: FieldRef<"Commit", 'String'>
    readonly commitHash: FieldRef<"Commit", 'String'>
    readonly commitAuthorName: FieldRef<"Commit", 'String'>
    readonly commitAuthorAvatar: FieldRef<"Commit", 'String'>
    readonly commitDate: FieldRef<"Commit", 'DateTime'>
    readonly summary: FieldRef<"Commit", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Commit findUnique
   */
  export type CommitFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit findUniqueOrThrow
   */
  export type CommitFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit findFirst
   */
  export type CommitFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commits.
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commits.
     */
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Commit findFirstOrThrow
   */
  export type CommitFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commit to fetch.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Commits.
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Commits.
     */
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Commit findMany
   */
  export type CommitFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter, which Commits to fetch.
     */
    where?: CommitWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Commits to fetch.
     */
    orderBy?: CommitOrderByWithRelationInput | CommitOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Commits.
     */
    cursor?: CommitWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Commits from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Commits.
     */
    skip?: number
    distinct?: CommitScalarFieldEnum | CommitScalarFieldEnum[]
  }

  /**
   * Commit create
   */
  export type CommitCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * The data needed to create a Commit.
     */
    data: XOR<CommitCreateInput, CommitUncheckedCreateInput>
  }

  /**
   * Commit createMany
   */
  export type CommitCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Commits.
     */
    data: CommitCreateManyInput | CommitCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Commit createManyAndReturn
   */
  export type CommitCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * The data used to create many Commits.
     */
    data: CommitCreateManyInput | CommitCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commit update
   */
  export type CommitUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * The data needed to update a Commit.
     */
    data: XOR<CommitUpdateInput, CommitUncheckedUpdateInput>
    /**
     * Choose, which Commit to update.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit updateMany
   */
  export type CommitUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Commits.
     */
    data: XOR<CommitUpdateManyMutationInput, CommitUncheckedUpdateManyInput>
    /**
     * Filter which Commits to update
     */
    where?: CommitWhereInput
    /**
     * Limit how many Commits to update.
     */
    limit?: number
  }

  /**
   * Commit updateManyAndReturn
   */
  export type CommitUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * The data used to update Commits.
     */
    data: XOR<CommitUpdateManyMutationInput, CommitUncheckedUpdateManyInput>
    /**
     * Filter which Commits to update
     */
    where?: CommitWhereInput
    /**
     * Limit how many Commits to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Commit upsert
   */
  export type CommitUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * The filter to search for the Commit to update in case it exists.
     */
    where: CommitWhereUniqueInput
    /**
     * In case the Commit found by the `where` argument doesn't exist, create a new Commit with this data.
     */
    create: XOR<CommitCreateInput, CommitUncheckedCreateInput>
    /**
     * In case the Commit was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CommitUpdateInput, CommitUncheckedUpdateInput>
  }

  /**
   * Commit delete
   */
  export type CommitDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
    /**
     * Filter which Commit to delete.
     */
    where: CommitWhereUniqueInput
  }

  /**
   * Commit deleteMany
   */
  export type CommitDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Commits to delete
     */
    where?: CommitWhereInput
    /**
     * Limit how many Commits to delete.
     */
    limit?: number
  }

  /**
   * Commit without action
   */
  export type CommitDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Commit
     */
    select?: CommitSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Commit
     */
    omit?: CommitOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: CommitInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const UserScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageUrl: 'imageUrl',
    firstName: 'firstName',
    lastName: 'lastName',
    email: 'email',
    password: 'password',
    credits: 'credits'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const ProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    githubUrl: 'githubUrl',
    deletedAt: 'deletedAt'
  };

  export type ProjectScalarFieldEnum = (typeof ProjectScalarFieldEnum)[keyof typeof ProjectScalarFieldEnum]


  export const UserToProjectScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    projectId: 'projectId'
  };

  export type UserToProjectScalarFieldEnum = (typeof UserToProjectScalarFieldEnum)[keyof typeof UserToProjectScalarFieldEnum]


  export const SourceCodeEmbeddingScalarFieldEnum: {
    id: 'id',
    sourceCode: 'sourceCode',
    fileName: 'fileName',
    summary: 'summary',
    projectId: 'projectId'
  };

  export type SourceCodeEmbeddingScalarFieldEnum = (typeof SourceCodeEmbeddingScalarFieldEnum)[keyof typeof SourceCodeEmbeddingScalarFieldEnum]


  export const MeetingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    meetingUrl: 'meetingUrl',
    projectId: 'projectId',
    status: 'status'
  };

  export type MeetingScalarFieldEnum = (typeof MeetingScalarFieldEnum)[keyof typeof MeetingScalarFieldEnum]


  export const IssueScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    start: 'start',
    end: 'end',
    gist: 'gist',
    headline: 'headline',
    summary: 'summary',
    meetingId: 'meetingId'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const RazorpayTransactionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    userId: 'userId',
    credits: 'credits'
  };

  export type RazorpayTransactionScalarFieldEnum = (typeof RazorpayTransactionScalarFieldEnum)[keyof typeof RazorpayTransactionScalarFieldEnum]


  export const QuestionScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    question: 'question',
    answer: 'answer',
    fileReferences: 'fileReferences',
    projectId: 'projectId',
    userId: 'userId'
  };

  export type QuestionScalarFieldEnum = (typeof QuestionScalarFieldEnum)[keyof typeof QuestionScalarFieldEnum]


  export const CommitScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    projectId: 'projectId',
    commitMessage: 'commitMessage',
    commitHash: 'commitHash',
    commitAuthorName: 'commitAuthorName',
    commitAuthorAvatar: 'commitAuthorAvatar',
    commitDate: 'commitDate',
    summary: 'summary'
  };

  export type CommitScalarFieldEnum = (typeof CommitScalarFieldEnum)[keyof typeof CommitScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const NullableJsonNullValueInput: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull
  };

  export type NullableJsonNullValueInput = (typeof NullableJsonNullValueInput)[keyof typeof NullableJsonNullValueInput]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  export const JsonNullValueFilter: {
    DbNull: typeof DbNull,
    JsonNull: typeof JsonNull,
    AnyNull: typeof AnyNull
  };

  export type JsonNullValueFilter = (typeof JsonNullValueFilter)[keyof typeof JsonNullValueFilter]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'MeetingStatus'
   */
  export type EnumMeetingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingStatus'>
    


  /**
   * Reference to a field of type 'MeetingStatus[]'
   */
  export type ListEnumMeetingStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'MeetingStatus[]'>
    


  /**
   * Reference to a field of type 'Json'
   */
  export type JsonFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Json'>
    


  /**
   * Reference to a field of type 'QueryMode'
   */
  export type EnumQueryModeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'QueryMode'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    email?: StringFilter<"User"> | string
    password?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    userToProjects?: UserToProjectListRelationFilter
    questionAsked?: QuestionListRelationFilter
    RazorpayTransactions?: RazorpayTransactionListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    credits?: SortOrder
    userToProjects?: UserToProjectOrderByRelationAggregateInput
    questionAsked?: QuestionOrderByRelationAggregateInput
    RazorpayTransactions?: RazorpayTransactionOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringNullableFilter<"User"> | string | null
    firstName?: StringNullableFilter<"User"> | string | null
    lastName?: StringNullableFilter<"User"> | string | null
    password?: StringNullableFilter<"User"> | string | null
    credits?: IntFilter<"User"> | number
    userToProjects?: UserToProjectListRelationFilter
    questionAsked?: QuestionListRelationFilter
    RazorpayTransactions?: RazorpayTransactionListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrderInput | SortOrder
    firstName?: SortOrderInput | SortOrder
    lastName?: SortOrderInput | SortOrder
    email?: SortOrder
    password?: SortOrderInput | SortOrder
    credits?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _avg?: UserAvgOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
    _sum?: UserSumOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    imageUrl?: StringNullableWithAggregatesFilter<"User"> | string | null
    firstName?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastName?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringNullableWithAggregatesFilter<"User"> | string | null
    credits?: IntWithAggregatesFilter<"User"> | number
  }

  export type ProjectWhereInput = {
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    id?: StringFilter<"Project"> | string
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    githubUrl?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    userToProjects?: UserToProjectListRelationFilter
    commits?: CommitListRelationFilter
    sourceCodeEmbeddings?: SourceCodeEmbeddingListRelationFilter
    savedQuestions?: QuestionListRelationFilter
    meetings?: MeetingListRelationFilter
  }

  export type ProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    githubUrl?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    userToProjects?: UserToProjectOrderByRelationAggregateInput
    commits?: CommitOrderByRelationAggregateInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingOrderByRelationAggregateInput
    savedQuestions?: QuestionOrderByRelationAggregateInput
    meetings?: MeetingOrderByRelationAggregateInput
  }

  export type ProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ProjectWhereInput | ProjectWhereInput[]
    OR?: ProjectWhereInput[]
    NOT?: ProjectWhereInput | ProjectWhereInput[]
    createdAt?: DateTimeFilter<"Project"> | Date | string
    updatedAt?: DateTimeFilter<"Project"> | Date | string
    name?: StringFilter<"Project"> | string
    githubUrl?: StringFilter<"Project"> | string
    deletedAt?: DateTimeNullableFilter<"Project"> | Date | string | null
    userToProjects?: UserToProjectListRelationFilter
    commits?: CommitListRelationFilter
    sourceCodeEmbeddings?: SourceCodeEmbeddingListRelationFilter
    savedQuestions?: QuestionListRelationFilter
    meetings?: MeetingListRelationFilter
  }, "id">

  export type ProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    githubUrl?: SortOrder
    deletedAt?: SortOrderInput | SortOrder
    _count?: ProjectCountOrderByAggregateInput
    _max?: ProjectMaxOrderByAggregateInput
    _min?: ProjectMinOrderByAggregateInput
  }

  export type ProjectScalarWhereWithAggregatesInput = {
    AND?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    OR?: ProjectScalarWhereWithAggregatesInput[]
    NOT?: ProjectScalarWhereWithAggregatesInput | ProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Project"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Project"> | Date | string
    name?: StringWithAggregatesFilter<"Project"> | string
    githubUrl?: StringWithAggregatesFilter<"Project"> | string
    deletedAt?: DateTimeNullableWithAggregatesFilter<"Project"> | Date | string | null
  }

  export type UserToProjectWhereInput = {
    AND?: UserToProjectWhereInput | UserToProjectWhereInput[]
    OR?: UserToProjectWhereInput[]
    NOT?: UserToProjectWhereInput | UserToProjectWhereInput[]
    id?: StringFilter<"UserToProject"> | string
    createdAt?: DateTimeFilter<"UserToProject"> | Date | string
    updatedAt?: DateTimeFilter<"UserToProject"> | Date | string
    userId?: StringFilter<"UserToProject"> | string
    projectId?: StringFilter<"UserToProject"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type UserToProjectOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    user?: UserOrderByWithRelationInput
    project?: ProjectOrderByWithRelationInput
  }

  export type UserToProjectWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    userId_projectId?: UserToProjectUserIdProjectIdCompoundUniqueInput
    AND?: UserToProjectWhereInput | UserToProjectWhereInput[]
    OR?: UserToProjectWhereInput[]
    NOT?: UserToProjectWhereInput | UserToProjectWhereInput[]
    createdAt?: DateTimeFilter<"UserToProject"> | Date | string
    updatedAt?: DateTimeFilter<"UserToProject"> | Date | string
    userId?: StringFilter<"UserToProject"> | string
    projectId?: StringFilter<"UserToProject"> | string
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id" | "userId_projectId">

  export type UserToProjectOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
    _count?: UserToProjectCountOrderByAggregateInput
    _max?: UserToProjectMaxOrderByAggregateInput
    _min?: UserToProjectMinOrderByAggregateInput
  }

  export type UserToProjectScalarWhereWithAggregatesInput = {
    AND?: UserToProjectScalarWhereWithAggregatesInput | UserToProjectScalarWhereWithAggregatesInput[]
    OR?: UserToProjectScalarWhereWithAggregatesInput[]
    NOT?: UserToProjectScalarWhereWithAggregatesInput | UserToProjectScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"UserToProject"> | string
    createdAt?: DateTimeWithAggregatesFilter<"UserToProject"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"UserToProject"> | Date | string
    userId?: StringWithAggregatesFilter<"UserToProject"> | string
    projectId?: StringWithAggregatesFilter<"UserToProject"> | string
  }

  export type SourceCodeEmbeddingWhereInput = {
    AND?: SourceCodeEmbeddingWhereInput | SourceCodeEmbeddingWhereInput[]
    OR?: SourceCodeEmbeddingWhereInput[]
    NOT?: SourceCodeEmbeddingWhereInput | SourceCodeEmbeddingWhereInput[]
    id?: StringFilter<"SourceCodeEmbedding"> | string
    sourceCode?: StringFilter<"SourceCodeEmbedding"> | string
    fileName?: StringFilter<"SourceCodeEmbedding"> | string
    summary?: StringFilter<"SourceCodeEmbedding"> | string
    projectId?: StringFilter<"SourceCodeEmbedding"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type SourceCodeEmbeddingOrderByWithRelationInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    fileName?: SortOrder
    summary?: SortOrder
    projectId?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type SourceCodeEmbeddingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SourceCodeEmbeddingWhereInput | SourceCodeEmbeddingWhereInput[]
    OR?: SourceCodeEmbeddingWhereInput[]
    NOT?: SourceCodeEmbeddingWhereInput | SourceCodeEmbeddingWhereInput[]
    sourceCode?: StringFilter<"SourceCodeEmbedding"> | string
    fileName?: StringFilter<"SourceCodeEmbedding"> | string
    summary?: StringFilter<"SourceCodeEmbedding"> | string
    projectId?: StringFilter<"SourceCodeEmbedding"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type SourceCodeEmbeddingOrderByWithAggregationInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    fileName?: SortOrder
    summary?: SortOrder
    projectId?: SortOrder
    _count?: SourceCodeEmbeddingCountOrderByAggregateInput
    _max?: SourceCodeEmbeddingMaxOrderByAggregateInput
    _min?: SourceCodeEmbeddingMinOrderByAggregateInput
  }

  export type SourceCodeEmbeddingScalarWhereWithAggregatesInput = {
    AND?: SourceCodeEmbeddingScalarWhereWithAggregatesInput | SourceCodeEmbeddingScalarWhereWithAggregatesInput[]
    OR?: SourceCodeEmbeddingScalarWhereWithAggregatesInput[]
    NOT?: SourceCodeEmbeddingScalarWhereWithAggregatesInput | SourceCodeEmbeddingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"SourceCodeEmbedding"> | string
    sourceCode?: StringWithAggregatesFilter<"SourceCodeEmbedding"> | string
    fileName?: StringWithAggregatesFilter<"SourceCodeEmbedding"> | string
    summary?: StringWithAggregatesFilter<"SourceCodeEmbedding"> | string
    projectId?: StringWithAggregatesFilter<"SourceCodeEmbedding"> | string
  }

  export type MeetingWhereInput = {
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    id?: StringFilter<"Meeting"> | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    name?: StringFilter<"Meeting"> | string
    meetingUrl?: StringFilter<"Meeting"> | string
    projectId?: StringFilter<"Meeting"> | string
    status?: EnumMeetingStatusFilter<"Meeting"> | $Enums.MeetingStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    issues?: IssueListRelationFilter
  }

  export type MeetingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    meetingUrl?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    project?: ProjectOrderByWithRelationInput
    issues?: IssueOrderByRelationAggregateInput
  }

  export type MeetingWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MeetingWhereInput | MeetingWhereInput[]
    OR?: MeetingWhereInput[]
    NOT?: MeetingWhereInput | MeetingWhereInput[]
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    name?: StringFilter<"Meeting"> | string
    meetingUrl?: StringFilter<"Meeting"> | string
    projectId?: StringFilter<"Meeting"> | string
    status?: EnumMeetingStatusFilter<"Meeting"> | $Enums.MeetingStatus
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    issues?: IssueListRelationFilter
  }, "id">

  export type MeetingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    meetingUrl?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
    _count?: MeetingCountOrderByAggregateInput
    _max?: MeetingMaxOrderByAggregateInput
    _min?: MeetingMinOrderByAggregateInput
  }

  export type MeetingScalarWhereWithAggregatesInput = {
    AND?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    OR?: MeetingScalarWhereWithAggregatesInput[]
    NOT?: MeetingScalarWhereWithAggregatesInput | MeetingScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Meeting"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Meeting"> | Date | string
    name?: StringWithAggregatesFilter<"Meeting"> | string
    meetingUrl?: StringWithAggregatesFilter<"Meeting"> | string
    projectId?: StringWithAggregatesFilter<"Meeting"> | string
    status?: EnumMeetingStatusWithAggregatesFilter<"Meeting"> | $Enums.MeetingStatus
  }

  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: StringFilter<"Issue"> | string
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    start?: StringFilter<"Issue"> | string
    end?: StringFilter<"Issue"> | string
    gist?: StringFilter<"Issue"> | string
    headline?: StringFilter<"Issue"> | string
    summary?: StringFilter<"Issue"> | string
    meetingId?: StringFilter<"Issue"> | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    gist?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    meetingId?: SortOrder
    meeting?: MeetingOrderByWithRelationInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    start?: StringFilter<"Issue"> | string
    end?: StringFilter<"Issue"> | string
    gist?: StringFilter<"Issue"> | string
    headline?: StringFilter<"Issue"> | string
    summary?: StringFilter<"Issue"> | string
    meetingId?: StringFilter<"Issue"> | string
    meeting?: XOR<MeetingScalarRelationFilter, MeetingWhereInput>
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    gist?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    meetingId?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Issue"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    start?: StringWithAggregatesFilter<"Issue"> | string
    end?: StringWithAggregatesFilter<"Issue"> | string
    gist?: StringWithAggregatesFilter<"Issue"> | string
    headline?: StringWithAggregatesFilter<"Issue"> | string
    summary?: StringWithAggregatesFilter<"Issue"> | string
    meetingId?: StringWithAggregatesFilter<"Issue"> | string
  }

  export type RazorpayTransactionWhereInput = {
    AND?: RazorpayTransactionWhereInput | RazorpayTransactionWhereInput[]
    OR?: RazorpayTransactionWhereInput[]
    NOT?: RazorpayTransactionWhereInput | RazorpayTransactionWhereInput[]
    id?: StringFilter<"RazorpayTransaction"> | string
    createdAt?: DateTimeFilter<"RazorpayTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"RazorpayTransaction"> | Date | string
    userId?: StringFilter<"RazorpayTransaction"> | string
    credits?: IntFilter<"RazorpayTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type RazorpayTransactionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type RazorpayTransactionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: RazorpayTransactionWhereInput | RazorpayTransactionWhereInput[]
    OR?: RazorpayTransactionWhereInput[]
    NOT?: RazorpayTransactionWhereInput | RazorpayTransactionWhereInput[]
    createdAt?: DateTimeFilter<"RazorpayTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"RazorpayTransaction"> | Date | string
    userId?: StringFilter<"RazorpayTransaction"> | string
    credits?: IntFilter<"RazorpayTransaction"> | number
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type RazorpayTransactionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
    _count?: RazorpayTransactionCountOrderByAggregateInput
    _avg?: RazorpayTransactionAvgOrderByAggregateInput
    _max?: RazorpayTransactionMaxOrderByAggregateInput
    _min?: RazorpayTransactionMinOrderByAggregateInput
    _sum?: RazorpayTransactionSumOrderByAggregateInput
  }

  export type RazorpayTransactionScalarWhereWithAggregatesInput = {
    AND?: RazorpayTransactionScalarWhereWithAggregatesInput | RazorpayTransactionScalarWhereWithAggregatesInput[]
    OR?: RazorpayTransactionScalarWhereWithAggregatesInput[]
    NOT?: RazorpayTransactionScalarWhereWithAggregatesInput | RazorpayTransactionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"RazorpayTransaction"> | string
    createdAt?: DateTimeWithAggregatesFilter<"RazorpayTransaction"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"RazorpayTransaction"> | Date | string
    userId?: StringWithAggregatesFilter<"RazorpayTransaction"> | string
    credits?: IntWithAggregatesFilter<"RazorpayTransaction"> | number
  }

  export type QuestionWhereInput = {
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    id?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    question?: StringFilter<"Question"> | string
    answer?: StringFilter<"Question"> | string
    fileReferences?: JsonNullableFilter<"Question">
    projectId?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }

  export type QuestionOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    fileReferences?: SortOrderInput | SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    project?: ProjectOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type QuestionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: QuestionWhereInput | QuestionWhereInput[]
    OR?: QuestionWhereInput[]
    NOT?: QuestionWhereInput | QuestionWhereInput[]
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    question?: StringFilter<"Question"> | string
    answer?: StringFilter<"Question"> | string
    fileReferences?: JsonNullableFilter<"Question">
    projectId?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
  }, "id">

  export type QuestionOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    fileReferences?: SortOrderInput | SortOrder
    projectId?: SortOrder
    userId?: SortOrder
    _count?: QuestionCountOrderByAggregateInput
    _max?: QuestionMaxOrderByAggregateInput
    _min?: QuestionMinOrderByAggregateInput
  }

  export type QuestionScalarWhereWithAggregatesInput = {
    AND?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    OR?: QuestionScalarWhereWithAggregatesInput[]
    NOT?: QuestionScalarWhereWithAggregatesInput | QuestionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Question"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Question"> | Date | string
    question?: StringWithAggregatesFilter<"Question"> | string
    answer?: StringWithAggregatesFilter<"Question"> | string
    fileReferences?: JsonNullableWithAggregatesFilter<"Question">
    projectId?: StringWithAggregatesFilter<"Question"> | string
    userId?: StringWithAggregatesFilter<"Question"> | string
  }

  export type CommitWhereInput = {
    AND?: CommitWhereInput | CommitWhereInput[]
    OR?: CommitWhereInput[]
    NOT?: CommitWhereInput | CommitWhereInput[]
    id?: StringFilter<"Commit"> | string
    createdAt?: DateTimeFilter<"Commit"> | Date | string
    updatedAt?: DateTimeFilter<"Commit"> | Date | string
    projectId?: StringFilter<"Commit"> | string
    commitMessage?: StringFilter<"Commit"> | string
    commitHash?: StringFilter<"Commit"> | string
    commitAuthorName?: StringFilter<"Commit"> | string
    commitAuthorAvatar?: StringFilter<"Commit"> | string
    commitDate?: DateTimeFilter<"Commit"> | Date | string
    summary?: StringFilter<"Commit"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }

  export type CommitOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    commitMessage?: SortOrder
    commitHash?: SortOrder
    commitAuthorName?: SortOrder
    commitAuthorAvatar?: SortOrder
    commitDate?: SortOrder
    summary?: SortOrder
    project?: ProjectOrderByWithRelationInput
  }

  export type CommitWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: CommitWhereInput | CommitWhereInput[]
    OR?: CommitWhereInput[]
    NOT?: CommitWhereInput | CommitWhereInput[]
    createdAt?: DateTimeFilter<"Commit"> | Date | string
    updatedAt?: DateTimeFilter<"Commit"> | Date | string
    projectId?: StringFilter<"Commit"> | string
    commitMessage?: StringFilter<"Commit"> | string
    commitHash?: StringFilter<"Commit"> | string
    commitAuthorName?: StringFilter<"Commit"> | string
    commitAuthorAvatar?: StringFilter<"Commit"> | string
    commitDate?: DateTimeFilter<"Commit"> | Date | string
    summary?: StringFilter<"Commit"> | string
    project?: XOR<ProjectScalarRelationFilter, ProjectWhereInput>
  }, "id">

  export type CommitOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    commitMessage?: SortOrder
    commitHash?: SortOrder
    commitAuthorName?: SortOrder
    commitAuthorAvatar?: SortOrder
    commitDate?: SortOrder
    summary?: SortOrder
    _count?: CommitCountOrderByAggregateInput
    _max?: CommitMaxOrderByAggregateInput
    _min?: CommitMinOrderByAggregateInput
  }

  export type CommitScalarWhereWithAggregatesInput = {
    AND?: CommitScalarWhereWithAggregatesInput | CommitScalarWhereWithAggregatesInput[]
    OR?: CommitScalarWhereWithAggregatesInput[]
    NOT?: CommitScalarWhereWithAggregatesInput | CommitScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Commit"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Commit"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Commit"> | Date | string
    projectId?: StringWithAggregatesFilter<"Commit"> | string
    commitMessage?: StringWithAggregatesFilter<"Commit"> | string
    commitHash?: StringWithAggregatesFilter<"Commit"> | string
    commitAuthorName?: StringWithAggregatesFilter<"Commit"> | string
    commitAuthorAvatar?: StringWithAggregatesFilter<"Commit"> | string
    commitDate?: DateTimeWithAggregatesFilter<"Commit"> | Date | string
    summary?: StringWithAggregatesFilter<"Commit"> | string
  }

  export type UserCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    userToProjects?: UserToProjectCreateNestedManyWithoutUserInput
    questionAsked?: QuestionCreateNestedManyWithoutUserInput
    RazorpayTransactions?: RazorpayTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutUserInput
    questionAsked?: QuestionUncheckedCreateNestedManyWithoutUserInput
    RazorpayTransactions?: RazorpayTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    userToProjects?: UserToProjectUpdateManyWithoutUserNestedInput
    questionAsked?: QuestionUpdateManyWithoutUserNestedInput
    RazorpayTransactions?: RazorpayTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutUserNestedInput
    questionAsked?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    RazorpayTransactions?: RazorpayTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type ProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectCreateNestedManyWithoutProjectInput
    commits?: CommitCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionCreateNestedManyWithoutProjectInput
    meetings?: MeetingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutProjectInput
    commits?: CommitUncheckedCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionUncheckedCreateNestedManyWithoutProjectInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUpdateManyWithoutProjectNestedInput
    commits?: CommitUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutProjectNestedInput
    commits?: CommitUncheckedUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUncheckedUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
  }

  export type ProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserToProjectCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserToProjectsInput
    project: ProjectCreateNestedOneWithoutUserToProjectsInput
  }

  export type UserToProjectUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId: string
  }

  export type UserToProjectUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserToProjectsNestedInput
    project?: ProjectUpdateOneRequiredWithoutUserToProjectsNestedInput
  }

  export type UserToProjectUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UserToProjectCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    projectId: string
  }

  export type UserToProjectUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserToProjectUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCodeEmbeddingCreateInput = {
    id?: string
    sourceCode: string
    fileName: string
    summary: string
    project: ProjectCreateNestedOneWithoutSourceCodeEmbeddingsInput
  }

  export type SourceCodeEmbeddingUncheckedCreateInput = {
    id?: string
    sourceCode: string
    fileName: string
    summary: string
    projectId: string
  }

  export type SourceCodeEmbeddingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutSourceCodeEmbeddingsNestedInput
  }

  export type SourceCodeEmbeddingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCodeEmbeddingCreateManyInput = {
    id?: string
    sourceCode: string
    fileName: string
    summary: string
    projectId: string
  }

  export type SourceCodeEmbeddingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCodeEmbeddingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    status?: $Enums.MeetingStatus
    project: ProjectCreateNestedOneWithoutMeetingsInput
    issues?: IssueCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    projectId: string
    status?: $Enums.MeetingStatus
    issues?: IssueUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
    issues?: IssueUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    issues?: IssueUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    projectId: string
    status?: $Enums.MeetingStatus
  }

  export type MeetingUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
  }

  export type MeetingUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
  }

  export type IssueCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    start: string
    end: string
    gist: string
    headline: string
    summary: string
    meeting: MeetingCreateNestedOneWithoutIssuesInput
  }

  export type IssueUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    start: string
    end: string
    gist: string
    headline: string
    summary: string
    meetingId: string
  }

  export type IssueUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    meeting?: MeetingUpdateOneRequiredWithoutIssuesNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type IssueCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    start: string
    end: string
    gist: string
    headline: string
    summary: string
    meetingId: string
  }

  export type IssueUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
    meetingId?: StringFieldUpdateOperationsInput | string
  }

  export type RazorpayTransactionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credits: number
    user: UserCreateNestedOneWithoutRazorpayTransactionsInput
  }

  export type RazorpayTransactionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    credits: number
  }

  export type RazorpayTransactionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRazorpayTransactionsNestedInput
  }

  export type RazorpayTransactionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type RazorpayTransactionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
    credits: number
  }

  export type RazorpayTransactionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type RazorpayTransactionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type QuestionCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    project: ProjectCreateNestedOneWithoutSavedQuestionsInput
    user: UserCreateNestedOneWithoutQuestionAskedInput
  }

  export type QuestionUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
    userId: string
  }

  export type QuestionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    project?: ProjectUpdateOneRequiredWithoutSavedQuestionsNestedInput
    user?: UserUpdateOneRequiredWithoutQuestionAskedNestedInput
  }

  export type QuestionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
    userId: string
  }

  export type QuestionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
  }

  export type QuestionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommitCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date | string
    summary: string
    project: ProjectCreateNestedOneWithoutCommitsInput
  }

  export type CommitUncheckedCreateInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date | string
    summary: string
  }

  export type CommitUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
    project?: ProjectUpdateOneRequiredWithoutCommitsNestedInput
  }

  export type CommitUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type CommitCreateManyInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date | string
    summary: string
  }

  export type CommitUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type CommitUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type UserToProjectListRelationFilter = {
    every?: UserToProjectWhereInput
    some?: UserToProjectWhereInput
    none?: UserToProjectWhereInput
  }

  export type QuestionListRelationFilter = {
    every?: QuestionWhereInput
    some?: QuestionWhereInput
    none?: QuestionWhereInput
  }

  export type RazorpayTransactionListRelationFilter = {
    every?: RazorpayTransactionWhereInput
    some?: RazorpayTransactionWhereInput
    none?: RazorpayTransactionWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type UserToProjectOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type QuestionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RazorpayTransactionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
  }

  export type UserAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    firstName?: SortOrder
    lastName?: SortOrder
    email?: SortOrder
    password?: SortOrder
    credits?: SortOrder
  }

  export type UserSumOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type CommitListRelationFilter = {
    every?: CommitWhereInput
    some?: CommitWhereInput
    none?: CommitWhereInput
  }

  export type SourceCodeEmbeddingListRelationFilter = {
    every?: SourceCodeEmbeddingWhereInput
    some?: SourceCodeEmbeddingWhereInput
    none?: SourceCodeEmbeddingWhereInput
  }

  export type MeetingListRelationFilter = {
    every?: MeetingWhereInput
    some?: MeetingWhereInput
    none?: MeetingWhereInput
  }

  export type CommitOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SourceCodeEmbeddingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    githubUrl?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    githubUrl?: SortOrder
    deletedAt?: SortOrder
  }

  export type ProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    githubUrl?: SortOrder
    deletedAt?: SortOrder
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type ProjectScalarRelationFilter = {
    is?: ProjectWhereInput
    isNot?: ProjectWhereInput
  }

  export type UserToProjectUserIdProjectIdCompoundUniqueInput = {
    userId: string
    projectId: string
  }

  export type UserToProjectCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type UserToProjectMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type UserToProjectMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    projectId?: SortOrder
  }

  export type SourceCodeEmbeddingCountOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    fileName?: SortOrder
    summary?: SortOrder
    projectId?: SortOrder
  }

  export type SourceCodeEmbeddingMaxOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    fileName?: SortOrder
    summary?: SortOrder
    projectId?: SortOrder
  }

  export type SourceCodeEmbeddingMinOrderByAggregateInput = {
    id?: SortOrder
    sourceCode?: SortOrder
    fileName?: SortOrder
    summary?: SortOrder
    projectId?: SortOrder
  }

  export type EnumMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingStatusFilter<$PrismaModel> | $Enums.MeetingStatus
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MeetingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    meetingUrl?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
  }

  export type MeetingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    meetingUrl?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
  }

  export type MeetingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    meetingUrl?: SortOrder
    projectId?: SortOrder
    status?: SortOrder
  }

  export type EnumMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumMeetingStatusFilter<$PrismaModel>
  }

  export type MeetingScalarRelationFilter = {
    is?: MeetingWhereInput
    isNot?: MeetingWhereInput
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    gist?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    meetingId?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    gist?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    meetingId?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    start?: SortOrder
    end?: SortOrder
    gist?: SortOrder
    headline?: SortOrder
    summary?: SortOrder
    meetingId?: SortOrder
  }

  export type RazorpayTransactionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
  }

  export type RazorpayTransactionAvgOrderByAggregateInput = {
    credits?: SortOrder
  }

  export type RazorpayTransactionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
  }

  export type RazorpayTransactionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    userId?: SortOrder
    credits?: SortOrder
  }

  export type RazorpayTransactionSumOrderByAggregateInput = {
    credits?: SortOrder
  }
  export type JsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type QuestionCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    fileReferences?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type QuestionMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }

  export type QuestionMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    question?: SortOrder
    answer?: SortOrder
    projectId?: SortOrder
    userId?: SortOrder
  }
  export type JsonNullableWithAggregatesFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, Exclude<keyof Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>,
        Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<JsonNullableWithAggregatesFilterBase<$PrismaModel>>, 'path'>>

  export type JsonNullableWithAggregatesFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedJsonNullableFilter<$PrismaModel>
    _max?: NestedJsonNullableFilter<$PrismaModel>
  }

  export type CommitCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    commitMessage?: SortOrder
    commitHash?: SortOrder
    commitAuthorName?: SortOrder
    commitAuthorAvatar?: SortOrder
    commitDate?: SortOrder
    summary?: SortOrder
  }

  export type CommitMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    commitMessage?: SortOrder
    commitHash?: SortOrder
    commitAuthorName?: SortOrder
    commitAuthorAvatar?: SortOrder
    commitDate?: SortOrder
    summary?: SortOrder
  }

  export type CommitMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    projectId?: SortOrder
    commitMessage?: SortOrder
    commitHash?: SortOrder
    commitAuthorName?: SortOrder
    commitAuthorAvatar?: SortOrder
    commitDate?: SortOrder
    summary?: SortOrder
  }

  export type UserToProjectCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToProjectCreateWithoutUserInput, UserToProjectUncheckedCreateWithoutUserInput> | UserToProjectCreateWithoutUserInput[] | UserToProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutUserInput | UserToProjectCreateOrConnectWithoutUserInput[]
    createMany?: UserToProjectCreateManyUserInputEnvelope
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type RazorpayTransactionCreateNestedManyWithoutUserInput = {
    create?: XOR<RazorpayTransactionCreateWithoutUserInput, RazorpayTransactionUncheckedCreateWithoutUserInput> | RazorpayTransactionCreateWithoutUserInput[] | RazorpayTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RazorpayTransactionCreateOrConnectWithoutUserInput | RazorpayTransactionCreateOrConnectWithoutUserInput[]
    createMany?: RazorpayTransactionCreateManyUserInputEnvelope
    connect?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
  }

  export type UserToProjectUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<UserToProjectCreateWithoutUserInput, UserToProjectUncheckedCreateWithoutUserInput> | UserToProjectCreateWithoutUserInput[] | UserToProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutUserInput | UserToProjectCreateOrConnectWithoutUserInput[]
    createMany?: UserToProjectCreateManyUserInputEnvelope
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type RazorpayTransactionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RazorpayTransactionCreateWithoutUserInput, RazorpayTransactionUncheckedCreateWithoutUserInput> | RazorpayTransactionCreateWithoutUserInput[] | RazorpayTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RazorpayTransactionCreateOrConnectWithoutUserInput | RazorpayTransactionCreateOrConnectWithoutUserInput[]
    createMany?: RazorpayTransactionCreateManyUserInputEnvelope
    connect?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserToProjectUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToProjectCreateWithoutUserInput, UserToProjectUncheckedCreateWithoutUserInput> | UserToProjectCreateWithoutUserInput[] | UserToProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutUserInput | UserToProjectCreateOrConnectWithoutUserInput[]
    upsert?: UserToProjectUpsertWithWhereUniqueWithoutUserInput | UserToProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToProjectCreateManyUserInputEnvelope
    set?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    disconnect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    delete?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    update?: UserToProjectUpdateWithWhereUniqueWithoutUserInput | UserToProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToProjectUpdateManyWithWhereWithoutUserInput | UserToProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToProjectScalarWhereInput | UserToProjectScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type RazorpayTransactionUpdateManyWithoutUserNestedInput = {
    create?: XOR<RazorpayTransactionCreateWithoutUserInput, RazorpayTransactionUncheckedCreateWithoutUserInput> | RazorpayTransactionCreateWithoutUserInput[] | RazorpayTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RazorpayTransactionCreateOrConnectWithoutUserInput | RazorpayTransactionCreateOrConnectWithoutUserInput[]
    upsert?: RazorpayTransactionUpsertWithWhereUniqueWithoutUserInput | RazorpayTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RazorpayTransactionCreateManyUserInputEnvelope
    set?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    disconnect?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    delete?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    connect?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    update?: RazorpayTransactionUpdateWithWhereUniqueWithoutUserInput | RazorpayTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RazorpayTransactionUpdateManyWithWhereWithoutUserInput | RazorpayTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RazorpayTransactionScalarWhereInput | RazorpayTransactionScalarWhereInput[]
  }

  export type UserToProjectUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<UserToProjectCreateWithoutUserInput, UserToProjectUncheckedCreateWithoutUserInput> | UserToProjectCreateWithoutUserInput[] | UserToProjectUncheckedCreateWithoutUserInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutUserInput | UserToProjectCreateOrConnectWithoutUserInput[]
    upsert?: UserToProjectUpsertWithWhereUniqueWithoutUserInput | UserToProjectUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: UserToProjectCreateManyUserInputEnvelope
    set?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    disconnect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    delete?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    update?: UserToProjectUpdateWithWhereUniqueWithoutUserInput | UserToProjectUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: UserToProjectUpdateManyWithWhereWithoutUserInput | UserToProjectUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: UserToProjectScalarWhereInput | UserToProjectScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput> | QuestionCreateWithoutUserInput[] | QuestionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutUserInput | QuestionCreateOrConnectWithoutUserInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutUserInput | QuestionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: QuestionCreateManyUserInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutUserInput | QuestionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutUserInput | QuestionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type RazorpayTransactionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RazorpayTransactionCreateWithoutUserInput, RazorpayTransactionUncheckedCreateWithoutUserInput> | RazorpayTransactionCreateWithoutUserInput[] | RazorpayTransactionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RazorpayTransactionCreateOrConnectWithoutUserInput | RazorpayTransactionCreateOrConnectWithoutUserInput[]
    upsert?: RazorpayTransactionUpsertWithWhereUniqueWithoutUserInput | RazorpayTransactionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RazorpayTransactionCreateManyUserInputEnvelope
    set?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    disconnect?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    delete?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    connect?: RazorpayTransactionWhereUniqueInput | RazorpayTransactionWhereUniqueInput[]
    update?: RazorpayTransactionUpdateWithWhereUniqueWithoutUserInput | RazorpayTransactionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RazorpayTransactionUpdateManyWithWhereWithoutUserInput | RazorpayTransactionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RazorpayTransactionScalarWhereInput | RazorpayTransactionScalarWhereInput[]
  }

  export type UserToProjectCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserToProjectCreateWithoutProjectInput, UserToProjectUncheckedCreateWithoutProjectInput> | UserToProjectCreateWithoutProjectInput[] | UserToProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutProjectInput | UserToProjectCreateOrConnectWithoutProjectInput[]
    createMany?: UserToProjectCreateManyProjectInputEnvelope
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
  }

  export type CommitCreateNestedManyWithoutProjectInput = {
    create?: XOR<CommitCreateWithoutProjectInput, CommitUncheckedCreateWithoutProjectInput> | CommitCreateWithoutProjectInput[] | CommitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutProjectInput | CommitCreateOrConnectWithoutProjectInput[]
    createMany?: CommitCreateManyProjectInputEnvelope
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
  }

  export type SourceCodeEmbeddingCreateNestedManyWithoutProjectInput = {
    create?: XOR<SourceCodeEmbeddingCreateWithoutProjectInput, SourceCodeEmbeddingUncheckedCreateWithoutProjectInput> | SourceCodeEmbeddingCreateWithoutProjectInput[] | SourceCodeEmbeddingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SourceCodeEmbeddingCreateOrConnectWithoutProjectInput | SourceCodeEmbeddingCreateOrConnectWithoutProjectInput[]
    createMany?: SourceCodeEmbeddingCreateManyProjectInputEnvelope
    connect?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
  }

  export type QuestionCreateNestedManyWithoutProjectInput = {
    create?: XOR<QuestionCreateWithoutProjectInput, QuestionUncheckedCreateWithoutProjectInput> | QuestionCreateWithoutProjectInput[] | QuestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput | QuestionCreateOrConnectWithoutProjectInput[]
    createMany?: QuestionCreateManyProjectInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MeetingCreateNestedManyWithoutProjectInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type UserToProjectUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<UserToProjectCreateWithoutProjectInput, UserToProjectUncheckedCreateWithoutProjectInput> | UserToProjectCreateWithoutProjectInput[] | UserToProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutProjectInput | UserToProjectCreateOrConnectWithoutProjectInput[]
    createMany?: UserToProjectCreateManyProjectInputEnvelope
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
  }

  export type CommitUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<CommitCreateWithoutProjectInput, CommitUncheckedCreateWithoutProjectInput> | CommitCreateWithoutProjectInput[] | CommitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutProjectInput | CommitCreateOrConnectWithoutProjectInput[]
    createMany?: CommitCreateManyProjectInputEnvelope
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
  }

  export type SourceCodeEmbeddingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<SourceCodeEmbeddingCreateWithoutProjectInput, SourceCodeEmbeddingUncheckedCreateWithoutProjectInput> | SourceCodeEmbeddingCreateWithoutProjectInput[] | SourceCodeEmbeddingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SourceCodeEmbeddingCreateOrConnectWithoutProjectInput | SourceCodeEmbeddingCreateOrConnectWithoutProjectInput[]
    createMany?: SourceCodeEmbeddingCreateManyProjectInputEnvelope
    connect?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
  }

  export type QuestionUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<QuestionCreateWithoutProjectInput, QuestionUncheckedCreateWithoutProjectInput> | QuestionCreateWithoutProjectInput[] | QuestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput | QuestionCreateOrConnectWithoutProjectInput[]
    createMany?: QuestionCreateManyProjectInputEnvelope
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
  }

  export type MeetingUncheckedCreateNestedManyWithoutProjectInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type UserToProjectUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserToProjectCreateWithoutProjectInput, UserToProjectUncheckedCreateWithoutProjectInput> | UserToProjectCreateWithoutProjectInput[] | UserToProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutProjectInput | UserToProjectCreateOrConnectWithoutProjectInput[]
    upsert?: UserToProjectUpsertWithWhereUniqueWithoutProjectInput | UserToProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserToProjectCreateManyProjectInputEnvelope
    set?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    disconnect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    delete?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    update?: UserToProjectUpdateWithWhereUniqueWithoutProjectInput | UserToProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserToProjectUpdateManyWithWhereWithoutProjectInput | UserToProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserToProjectScalarWhereInput | UserToProjectScalarWhereInput[]
  }

  export type CommitUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CommitCreateWithoutProjectInput, CommitUncheckedCreateWithoutProjectInput> | CommitCreateWithoutProjectInput[] | CommitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutProjectInput | CommitCreateOrConnectWithoutProjectInput[]
    upsert?: CommitUpsertWithWhereUniqueWithoutProjectInput | CommitUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CommitCreateManyProjectInputEnvelope
    set?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    disconnect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    delete?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    update?: CommitUpdateWithWhereUniqueWithoutProjectInput | CommitUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CommitUpdateManyWithWhereWithoutProjectInput | CommitUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CommitScalarWhereInput | CommitScalarWhereInput[]
  }

  export type SourceCodeEmbeddingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SourceCodeEmbeddingCreateWithoutProjectInput, SourceCodeEmbeddingUncheckedCreateWithoutProjectInput> | SourceCodeEmbeddingCreateWithoutProjectInput[] | SourceCodeEmbeddingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SourceCodeEmbeddingCreateOrConnectWithoutProjectInput | SourceCodeEmbeddingCreateOrConnectWithoutProjectInput[]
    upsert?: SourceCodeEmbeddingUpsertWithWhereUniqueWithoutProjectInput | SourceCodeEmbeddingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SourceCodeEmbeddingCreateManyProjectInputEnvelope
    set?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    disconnect?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    delete?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    connect?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    update?: SourceCodeEmbeddingUpdateWithWhereUniqueWithoutProjectInput | SourceCodeEmbeddingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SourceCodeEmbeddingUpdateManyWithWhereWithoutProjectInput | SourceCodeEmbeddingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SourceCodeEmbeddingScalarWhereInput | SourceCodeEmbeddingScalarWhereInput[]
  }

  export type QuestionUpdateManyWithoutProjectNestedInput = {
    create?: XOR<QuestionCreateWithoutProjectInput, QuestionUncheckedCreateWithoutProjectInput> | QuestionCreateWithoutProjectInput[] | QuestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput | QuestionCreateOrConnectWithoutProjectInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutProjectInput | QuestionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: QuestionCreateManyProjectInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutProjectInput | QuestionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutProjectInput | QuestionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MeetingUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutProjectInput | MeetingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutProjectInput | MeetingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutProjectInput | MeetingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type UserToProjectUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<UserToProjectCreateWithoutProjectInput, UserToProjectUncheckedCreateWithoutProjectInput> | UserToProjectCreateWithoutProjectInput[] | UserToProjectUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: UserToProjectCreateOrConnectWithoutProjectInput | UserToProjectCreateOrConnectWithoutProjectInput[]
    upsert?: UserToProjectUpsertWithWhereUniqueWithoutProjectInput | UserToProjectUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: UserToProjectCreateManyProjectInputEnvelope
    set?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    disconnect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    delete?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    connect?: UserToProjectWhereUniqueInput | UserToProjectWhereUniqueInput[]
    update?: UserToProjectUpdateWithWhereUniqueWithoutProjectInput | UserToProjectUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: UserToProjectUpdateManyWithWhereWithoutProjectInput | UserToProjectUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: UserToProjectScalarWhereInput | UserToProjectScalarWhereInput[]
  }

  export type CommitUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<CommitCreateWithoutProjectInput, CommitUncheckedCreateWithoutProjectInput> | CommitCreateWithoutProjectInput[] | CommitUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: CommitCreateOrConnectWithoutProjectInput | CommitCreateOrConnectWithoutProjectInput[]
    upsert?: CommitUpsertWithWhereUniqueWithoutProjectInput | CommitUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: CommitCreateManyProjectInputEnvelope
    set?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    disconnect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    delete?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    connect?: CommitWhereUniqueInput | CommitWhereUniqueInput[]
    update?: CommitUpdateWithWhereUniqueWithoutProjectInput | CommitUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: CommitUpdateManyWithWhereWithoutProjectInput | CommitUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: CommitScalarWhereInput | CommitScalarWhereInput[]
  }

  export type SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<SourceCodeEmbeddingCreateWithoutProjectInput, SourceCodeEmbeddingUncheckedCreateWithoutProjectInput> | SourceCodeEmbeddingCreateWithoutProjectInput[] | SourceCodeEmbeddingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: SourceCodeEmbeddingCreateOrConnectWithoutProjectInput | SourceCodeEmbeddingCreateOrConnectWithoutProjectInput[]
    upsert?: SourceCodeEmbeddingUpsertWithWhereUniqueWithoutProjectInput | SourceCodeEmbeddingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: SourceCodeEmbeddingCreateManyProjectInputEnvelope
    set?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    disconnect?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    delete?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    connect?: SourceCodeEmbeddingWhereUniqueInput | SourceCodeEmbeddingWhereUniqueInput[]
    update?: SourceCodeEmbeddingUpdateWithWhereUniqueWithoutProjectInput | SourceCodeEmbeddingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: SourceCodeEmbeddingUpdateManyWithWhereWithoutProjectInput | SourceCodeEmbeddingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: SourceCodeEmbeddingScalarWhereInput | SourceCodeEmbeddingScalarWhereInput[]
  }

  export type QuestionUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<QuestionCreateWithoutProjectInput, QuestionUncheckedCreateWithoutProjectInput> | QuestionCreateWithoutProjectInput[] | QuestionUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: QuestionCreateOrConnectWithoutProjectInput | QuestionCreateOrConnectWithoutProjectInput[]
    upsert?: QuestionUpsertWithWhereUniqueWithoutProjectInput | QuestionUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: QuestionCreateManyProjectInputEnvelope
    set?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    disconnect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    delete?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    connect?: QuestionWhereUniqueInput | QuestionWhereUniqueInput[]
    update?: QuestionUpdateWithWhereUniqueWithoutProjectInput | QuestionUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: QuestionUpdateManyWithWhereWithoutProjectInput | QuestionUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
  }

  export type MeetingUncheckedUpdateManyWithoutProjectNestedInput = {
    create?: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput> | MeetingCreateWithoutProjectInput[] | MeetingUncheckedCreateWithoutProjectInput[]
    connectOrCreate?: MeetingCreateOrConnectWithoutProjectInput | MeetingCreateOrConnectWithoutProjectInput[]
    upsert?: MeetingUpsertWithWhereUniqueWithoutProjectInput | MeetingUpsertWithWhereUniqueWithoutProjectInput[]
    createMany?: MeetingCreateManyProjectInputEnvelope
    set?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    disconnect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    delete?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    connect?: MeetingWhereUniqueInput | MeetingWhereUniqueInput[]
    update?: MeetingUpdateWithWhereUniqueWithoutProjectInput | MeetingUpdateWithWhereUniqueWithoutProjectInput[]
    updateMany?: MeetingUpdateManyWithWhereWithoutProjectInput | MeetingUpdateManyWithWhereWithoutProjectInput[]
    deleteMany?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutUserToProjectsInput = {
    create?: XOR<UserCreateWithoutUserToProjectsInput, UserUncheckedCreateWithoutUserToProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserToProjectsInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectCreateNestedOneWithoutUserToProjectsInput = {
    create?: XOR<ProjectCreateWithoutUserToProjectsInput, ProjectUncheckedCreateWithoutUserToProjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserToProjectsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutUserToProjectsNestedInput = {
    create?: XOR<UserCreateWithoutUserToProjectsInput, UserUncheckedCreateWithoutUserToProjectsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUserToProjectsInput
    upsert?: UserUpsertWithoutUserToProjectsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUserToProjectsInput, UserUpdateWithoutUserToProjectsInput>, UserUncheckedUpdateWithoutUserToProjectsInput>
  }

  export type ProjectUpdateOneRequiredWithoutUserToProjectsNestedInput = {
    create?: XOR<ProjectCreateWithoutUserToProjectsInput, ProjectUncheckedCreateWithoutUserToProjectsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutUserToProjectsInput
    upsert?: ProjectUpsertWithoutUserToProjectsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutUserToProjectsInput, ProjectUpdateWithoutUserToProjectsInput>, ProjectUncheckedUpdateWithoutUserToProjectsInput>
  }

  export type ProjectCreateNestedOneWithoutSourceCodeEmbeddingsInput = {
    create?: XOR<ProjectCreateWithoutSourceCodeEmbeddingsInput, ProjectUncheckedCreateWithoutSourceCodeEmbeddingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSourceCodeEmbeddingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutSourceCodeEmbeddingsNestedInput = {
    create?: XOR<ProjectCreateWithoutSourceCodeEmbeddingsInput, ProjectUncheckedCreateWithoutSourceCodeEmbeddingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSourceCodeEmbeddingsInput
    upsert?: ProjectUpsertWithoutSourceCodeEmbeddingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSourceCodeEmbeddingsInput, ProjectUpdateWithoutSourceCodeEmbeddingsInput>, ProjectUncheckedUpdateWithoutSourceCodeEmbeddingsInput>
  }

  export type ProjectCreateNestedOneWithoutMeetingsInput = {
    create?: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMeetingsInput
    connect?: ProjectWhereUniqueInput
  }

  export type IssueCreateNestedManyWithoutMeetingInput = {
    create?: XOR<IssueCreateWithoutMeetingInput, IssueUncheckedCreateWithoutMeetingInput> | IssueCreateWithoutMeetingInput[] | IssueUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutMeetingInput | IssueCreateOrConnectWithoutMeetingInput[]
    createMany?: IssueCreateManyMeetingInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutMeetingInput = {
    create?: XOR<IssueCreateWithoutMeetingInput, IssueUncheckedCreateWithoutMeetingInput> | IssueCreateWithoutMeetingInput[] | IssueUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutMeetingInput | IssueCreateOrConnectWithoutMeetingInput[]
    createMany?: IssueCreateManyMeetingInputEnvelope
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type EnumMeetingStatusFieldUpdateOperationsInput = {
    set?: $Enums.MeetingStatus
  }

  export type ProjectUpdateOneRequiredWithoutMeetingsNestedInput = {
    create?: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutMeetingsInput
    upsert?: ProjectUpsertWithoutMeetingsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutMeetingsInput, ProjectUpdateWithoutMeetingsInput>, ProjectUncheckedUpdateWithoutMeetingsInput>
  }

  export type IssueUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<IssueCreateWithoutMeetingInput, IssueUncheckedCreateWithoutMeetingInput> | IssueCreateWithoutMeetingInput[] | IssueUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutMeetingInput | IssueCreateOrConnectWithoutMeetingInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutMeetingInput | IssueUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: IssueCreateManyMeetingInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutMeetingInput | IssueUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutMeetingInput | IssueUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutMeetingNestedInput = {
    create?: XOR<IssueCreateWithoutMeetingInput, IssueUncheckedCreateWithoutMeetingInput> | IssueCreateWithoutMeetingInput[] | IssueUncheckedCreateWithoutMeetingInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutMeetingInput | IssueCreateOrConnectWithoutMeetingInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutMeetingInput | IssueUpsertWithWhereUniqueWithoutMeetingInput[]
    createMany?: IssueCreateManyMeetingInputEnvelope
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutMeetingInput | IssueUpdateWithWhereUniqueWithoutMeetingInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutMeetingInput | IssueUpdateManyWithWhereWithoutMeetingInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type MeetingCreateNestedOneWithoutIssuesInput = {
    create?: XOR<MeetingCreateWithoutIssuesInput, MeetingUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutIssuesInput
    connect?: MeetingWhereUniqueInput
  }

  export type MeetingUpdateOneRequiredWithoutIssuesNestedInput = {
    create?: XOR<MeetingCreateWithoutIssuesInput, MeetingUncheckedCreateWithoutIssuesInput>
    connectOrCreate?: MeetingCreateOrConnectWithoutIssuesInput
    upsert?: MeetingUpsertWithoutIssuesInput
    connect?: MeetingWhereUniqueInput
    update?: XOR<XOR<MeetingUpdateToOneWithWhereWithoutIssuesInput, MeetingUpdateWithoutIssuesInput>, MeetingUncheckedUpdateWithoutIssuesInput>
  }

  export type UserCreateNestedOneWithoutRazorpayTransactionsInput = {
    create?: XOR<UserCreateWithoutRazorpayTransactionsInput, UserUncheckedCreateWithoutRazorpayTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRazorpayTransactionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutRazorpayTransactionsNestedInput = {
    create?: XOR<UserCreateWithoutRazorpayTransactionsInput, UserUncheckedCreateWithoutRazorpayTransactionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRazorpayTransactionsInput
    upsert?: UserUpsertWithoutRazorpayTransactionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRazorpayTransactionsInput, UserUpdateWithoutRazorpayTransactionsInput>, UserUncheckedUpdateWithoutRazorpayTransactionsInput>
  }

  export type ProjectCreateNestedOneWithoutSavedQuestionsInput = {
    create?: XOR<ProjectCreateWithoutSavedQuestionsInput, ProjectUncheckedCreateWithoutSavedQuestionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSavedQuestionsInput
    connect?: ProjectWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutQuestionAskedInput = {
    create?: XOR<UserCreateWithoutQuestionAskedInput, UserUncheckedCreateWithoutQuestionAskedInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionAskedInput
    connect?: UserWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutSavedQuestionsNestedInput = {
    create?: XOR<ProjectCreateWithoutSavedQuestionsInput, ProjectUncheckedCreateWithoutSavedQuestionsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutSavedQuestionsInput
    upsert?: ProjectUpsertWithoutSavedQuestionsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutSavedQuestionsInput, ProjectUpdateWithoutSavedQuestionsInput>, ProjectUncheckedUpdateWithoutSavedQuestionsInput>
  }

  export type UserUpdateOneRequiredWithoutQuestionAskedNestedInput = {
    create?: XOR<UserCreateWithoutQuestionAskedInput, UserUncheckedCreateWithoutQuestionAskedInput>
    connectOrCreate?: UserCreateOrConnectWithoutQuestionAskedInput
    upsert?: UserUpsertWithoutQuestionAskedInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutQuestionAskedInput, UserUpdateWithoutQuestionAskedInput>, UserUncheckedUpdateWithoutQuestionAskedInput>
  }

  export type ProjectCreateNestedOneWithoutCommitsInput = {
    create?: XOR<ProjectCreateWithoutCommitsInput, ProjectUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommitsInput
    connect?: ProjectWhereUniqueInput
  }

  export type ProjectUpdateOneRequiredWithoutCommitsNestedInput = {
    create?: XOR<ProjectCreateWithoutCommitsInput, ProjectUncheckedCreateWithoutCommitsInput>
    connectOrCreate?: ProjectCreateOrConnectWithoutCommitsInput
    upsert?: ProjectUpsertWithoutCommitsInput
    connect?: ProjectWhereUniqueInput
    update?: XOR<XOR<ProjectUpdateToOneWithWhereWithoutCommitsInput, ProjectUpdateWithoutCommitsInput>, ProjectUncheckedUpdateWithoutCommitsInput>
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumMeetingStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingStatusFilter<$PrismaModel> | $Enums.MeetingStatus
  }

  export type NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.MeetingStatus | EnumMeetingStatusFieldRefInput<$PrismaModel>
    in?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.MeetingStatus[] | ListEnumMeetingStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumMeetingStatusWithAggregatesFilter<$PrismaModel> | $Enums.MeetingStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumMeetingStatusFilter<$PrismaModel>
    _max?: NestedEnumMeetingStatusFilter<$PrismaModel>
  }
  export type NestedJsonNullableFilter<$PrismaModel = never> =
    | PatchUndefined<
        Either<Required<NestedJsonNullableFilterBase<$PrismaModel>>, Exclude<keyof Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>,
        Required<NestedJsonNullableFilterBase<$PrismaModel>>
      >
    | OptionalFlat<Omit<Required<NestedJsonNullableFilterBase<$PrismaModel>>, 'path'>>

  export type NestedJsonNullableFilterBase<$PrismaModel = never> = {
    equals?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
    path?: string[]
    mode?: QueryMode | EnumQueryModeFieldRefInput<$PrismaModel>
    string_contains?: string | StringFieldRefInput<$PrismaModel>
    string_starts_with?: string | StringFieldRefInput<$PrismaModel>
    string_ends_with?: string | StringFieldRefInput<$PrismaModel>
    array_starts_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_ends_with?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    array_contains?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | null
    lt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    lte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gt?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    gte?: InputJsonValue | JsonFieldRefInput<$PrismaModel>
    not?: InputJsonValue | JsonFieldRefInput<$PrismaModel> | JsonNullValueFilter
  }

  export type UserToProjectCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    project: ProjectCreateNestedOneWithoutUserToProjectsInput
  }

  export type UserToProjectUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type UserToProjectCreateOrConnectWithoutUserInput = {
    where: UserToProjectWhereUniqueInput
    create: XOR<UserToProjectCreateWithoutUserInput, UserToProjectUncheckedCreateWithoutUserInput>
  }

  export type UserToProjectCreateManyUserInputEnvelope = {
    data: UserToProjectCreateManyUserInput | UserToProjectCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    project: ProjectCreateNestedOneWithoutSavedQuestionsInput
  }

  export type QuestionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
  }

  export type QuestionCreateOrConnectWithoutUserInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionCreateManyUserInputEnvelope = {
    data: QuestionCreateManyUserInput | QuestionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RazorpayTransactionCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credits: number
  }

  export type RazorpayTransactionUncheckedCreateWithoutUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credits: number
  }

  export type RazorpayTransactionCreateOrConnectWithoutUserInput = {
    where: RazorpayTransactionWhereUniqueInput
    create: XOR<RazorpayTransactionCreateWithoutUserInput, RazorpayTransactionUncheckedCreateWithoutUserInput>
  }

  export type RazorpayTransactionCreateManyUserInputEnvelope = {
    data: RazorpayTransactionCreateManyUserInput | RazorpayTransactionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserToProjectUpsertWithWhereUniqueWithoutUserInput = {
    where: UserToProjectWhereUniqueInput
    update: XOR<UserToProjectUpdateWithoutUserInput, UserToProjectUncheckedUpdateWithoutUserInput>
    create: XOR<UserToProjectCreateWithoutUserInput, UserToProjectUncheckedCreateWithoutUserInput>
  }

  export type UserToProjectUpdateWithWhereUniqueWithoutUserInput = {
    where: UserToProjectWhereUniqueInput
    data: XOR<UserToProjectUpdateWithoutUserInput, UserToProjectUncheckedUpdateWithoutUserInput>
  }

  export type UserToProjectUpdateManyWithWhereWithoutUserInput = {
    where: UserToProjectScalarWhereInput
    data: XOR<UserToProjectUpdateManyMutationInput, UserToProjectUncheckedUpdateManyWithoutUserInput>
  }

  export type UserToProjectScalarWhereInput = {
    AND?: UserToProjectScalarWhereInput | UserToProjectScalarWhereInput[]
    OR?: UserToProjectScalarWhereInput[]
    NOT?: UserToProjectScalarWhereInput | UserToProjectScalarWhereInput[]
    id?: StringFilter<"UserToProject"> | string
    createdAt?: DateTimeFilter<"UserToProject"> | Date | string
    updatedAt?: DateTimeFilter<"UserToProject"> | Date | string
    userId?: StringFilter<"UserToProject"> | string
    projectId?: StringFilter<"UserToProject"> | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
    create: XOR<QuestionCreateWithoutUserInput, QuestionUncheckedCreateWithoutUserInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutUserInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutUserInput, QuestionUncheckedUpdateWithoutUserInput>
  }

  export type QuestionUpdateManyWithWhereWithoutUserInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutUserInput>
  }

  export type QuestionScalarWhereInput = {
    AND?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    OR?: QuestionScalarWhereInput[]
    NOT?: QuestionScalarWhereInput | QuestionScalarWhereInput[]
    id?: StringFilter<"Question"> | string
    createdAt?: DateTimeFilter<"Question"> | Date | string
    updatedAt?: DateTimeFilter<"Question"> | Date | string
    question?: StringFilter<"Question"> | string
    answer?: StringFilter<"Question"> | string
    fileReferences?: JsonNullableFilter<"Question">
    projectId?: StringFilter<"Question"> | string
    userId?: StringFilter<"Question"> | string
  }

  export type RazorpayTransactionUpsertWithWhereUniqueWithoutUserInput = {
    where: RazorpayTransactionWhereUniqueInput
    update: XOR<RazorpayTransactionUpdateWithoutUserInput, RazorpayTransactionUncheckedUpdateWithoutUserInput>
    create: XOR<RazorpayTransactionCreateWithoutUserInput, RazorpayTransactionUncheckedCreateWithoutUserInput>
  }

  export type RazorpayTransactionUpdateWithWhereUniqueWithoutUserInput = {
    where: RazorpayTransactionWhereUniqueInput
    data: XOR<RazorpayTransactionUpdateWithoutUserInput, RazorpayTransactionUncheckedUpdateWithoutUserInput>
  }

  export type RazorpayTransactionUpdateManyWithWhereWithoutUserInput = {
    where: RazorpayTransactionScalarWhereInput
    data: XOR<RazorpayTransactionUpdateManyMutationInput, RazorpayTransactionUncheckedUpdateManyWithoutUserInput>
  }

  export type RazorpayTransactionScalarWhereInput = {
    AND?: RazorpayTransactionScalarWhereInput | RazorpayTransactionScalarWhereInput[]
    OR?: RazorpayTransactionScalarWhereInput[]
    NOT?: RazorpayTransactionScalarWhereInput | RazorpayTransactionScalarWhereInput[]
    id?: StringFilter<"RazorpayTransaction"> | string
    createdAt?: DateTimeFilter<"RazorpayTransaction"> | Date | string
    updatedAt?: DateTimeFilter<"RazorpayTransaction"> | Date | string
    userId?: StringFilter<"RazorpayTransaction"> | string
    credits?: IntFilter<"RazorpayTransaction"> | number
  }

  export type UserToProjectCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    user: UserCreateNestedOneWithoutUserToProjectsInput
  }

  export type UserToProjectUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type UserToProjectCreateOrConnectWithoutProjectInput = {
    where: UserToProjectWhereUniqueInput
    create: XOR<UserToProjectCreateWithoutProjectInput, UserToProjectUncheckedCreateWithoutProjectInput>
  }

  export type UserToProjectCreateManyProjectInputEnvelope = {
    data: UserToProjectCreateManyProjectInput | UserToProjectCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type CommitCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date | string
    summary: string
  }

  export type CommitUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date | string
    summary: string
  }

  export type CommitCreateOrConnectWithoutProjectInput = {
    where: CommitWhereUniqueInput
    create: XOR<CommitCreateWithoutProjectInput, CommitUncheckedCreateWithoutProjectInput>
  }

  export type CommitCreateManyProjectInputEnvelope = {
    data: CommitCreateManyProjectInput | CommitCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type SourceCodeEmbeddingCreateWithoutProjectInput = {
    id?: string
    sourceCode: string
    fileName: string
    summary: string
  }

  export type SourceCodeEmbeddingUncheckedCreateWithoutProjectInput = {
    id?: string
    sourceCode: string
    fileName: string
    summary: string
  }

  export type SourceCodeEmbeddingCreateOrConnectWithoutProjectInput = {
    where: SourceCodeEmbeddingWhereUniqueInput
    create: XOR<SourceCodeEmbeddingCreateWithoutProjectInput, SourceCodeEmbeddingUncheckedCreateWithoutProjectInput>
  }

  export type SourceCodeEmbeddingCreateManyProjectInputEnvelope = {
    data: SourceCodeEmbeddingCreateManyProjectInput | SourceCodeEmbeddingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type QuestionCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    user: UserCreateNestedOneWithoutQuestionAskedInput
  }

  export type QuestionUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    userId: string
  }

  export type QuestionCreateOrConnectWithoutProjectInput = {
    where: QuestionWhereUniqueInput
    create: XOR<QuestionCreateWithoutProjectInput, QuestionUncheckedCreateWithoutProjectInput>
  }

  export type QuestionCreateManyProjectInputEnvelope = {
    data: QuestionCreateManyProjectInput | QuestionCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type MeetingCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    status?: $Enums.MeetingStatus
    issues?: IssueCreateNestedManyWithoutMeetingInput
  }

  export type MeetingUncheckedCreateWithoutProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    status?: $Enums.MeetingStatus
    issues?: IssueUncheckedCreateNestedManyWithoutMeetingInput
  }

  export type MeetingCreateOrConnectWithoutProjectInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput>
  }

  export type MeetingCreateManyProjectInputEnvelope = {
    data: MeetingCreateManyProjectInput | MeetingCreateManyProjectInput[]
    skipDuplicates?: boolean
  }

  export type UserToProjectUpsertWithWhereUniqueWithoutProjectInput = {
    where: UserToProjectWhereUniqueInput
    update: XOR<UserToProjectUpdateWithoutProjectInput, UserToProjectUncheckedUpdateWithoutProjectInput>
    create: XOR<UserToProjectCreateWithoutProjectInput, UserToProjectUncheckedCreateWithoutProjectInput>
  }

  export type UserToProjectUpdateWithWhereUniqueWithoutProjectInput = {
    where: UserToProjectWhereUniqueInput
    data: XOR<UserToProjectUpdateWithoutProjectInput, UserToProjectUncheckedUpdateWithoutProjectInput>
  }

  export type UserToProjectUpdateManyWithWhereWithoutProjectInput = {
    where: UserToProjectScalarWhereInput
    data: XOR<UserToProjectUpdateManyMutationInput, UserToProjectUncheckedUpdateManyWithoutProjectInput>
  }

  export type CommitUpsertWithWhereUniqueWithoutProjectInput = {
    where: CommitWhereUniqueInput
    update: XOR<CommitUpdateWithoutProjectInput, CommitUncheckedUpdateWithoutProjectInput>
    create: XOR<CommitCreateWithoutProjectInput, CommitUncheckedCreateWithoutProjectInput>
  }

  export type CommitUpdateWithWhereUniqueWithoutProjectInput = {
    where: CommitWhereUniqueInput
    data: XOR<CommitUpdateWithoutProjectInput, CommitUncheckedUpdateWithoutProjectInput>
  }

  export type CommitUpdateManyWithWhereWithoutProjectInput = {
    where: CommitScalarWhereInput
    data: XOR<CommitUpdateManyMutationInput, CommitUncheckedUpdateManyWithoutProjectInput>
  }

  export type CommitScalarWhereInput = {
    AND?: CommitScalarWhereInput | CommitScalarWhereInput[]
    OR?: CommitScalarWhereInput[]
    NOT?: CommitScalarWhereInput | CommitScalarWhereInput[]
    id?: StringFilter<"Commit"> | string
    createdAt?: DateTimeFilter<"Commit"> | Date | string
    updatedAt?: DateTimeFilter<"Commit"> | Date | string
    projectId?: StringFilter<"Commit"> | string
    commitMessage?: StringFilter<"Commit"> | string
    commitHash?: StringFilter<"Commit"> | string
    commitAuthorName?: StringFilter<"Commit"> | string
    commitAuthorAvatar?: StringFilter<"Commit"> | string
    commitDate?: DateTimeFilter<"Commit"> | Date | string
    summary?: StringFilter<"Commit"> | string
  }

  export type SourceCodeEmbeddingUpsertWithWhereUniqueWithoutProjectInput = {
    where: SourceCodeEmbeddingWhereUniqueInput
    update: XOR<SourceCodeEmbeddingUpdateWithoutProjectInput, SourceCodeEmbeddingUncheckedUpdateWithoutProjectInput>
    create: XOR<SourceCodeEmbeddingCreateWithoutProjectInput, SourceCodeEmbeddingUncheckedCreateWithoutProjectInput>
  }

  export type SourceCodeEmbeddingUpdateWithWhereUniqueWithoutProjectInput = {
    where: SourceCodeEmbeddingWhereUniqueInput
    data: XOR<SourceCodeEmbeddingUpdateWithoutProjectInput, SourceCodeEmbeddingUncheckedUpdateWithoutProjectInput>
  }

  export type SourceCodeEmbeddingUpdateManyWithWhereWithoutProjectInput = {
    where: SourceCodeEmbeddingScalarWhereInput
    data: XOR<SourceCodeEmbeddingUpdateManyMutationInput, SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectInput>
  }

  export type SourceCodeEmbeddingScalarWhereInput = {
    AND?: SourceCodeEmbeddingScalarWhereInput | SourceCodeEmbeddingScalarWhereInput[]
    OR?: SourceCodeEmbeddingScalarWhereInput[]
    NOT?: SourceCodeEmbeddingScalarWhereInput | SourceCodeEmbeddingScalarWhereInput[]
    id?: StringFilter<"SourceCodeEmbedding"> | string
    sourceCode?: StringFilter<"SourceCodeEmbedding"> | string
    fileName?: StringFilter<"SourceCodeEmbedding"> | string
    summary?: StringFilter<"SourceCodeEmbedding"> | string
    projectId?: StringFilter<"SourceCodeEmbedding"> | string
  }

  export type QuestionUpsertWithWhereUniqueWithoutProjectInput = {
    where: QuestionWhereUniqueInput
    update: XOR<QuestionUpdateWithoutProjectInput, QuestionUncheckedUpdateWithoutProjectInput>
    create: XOR<QuestionCreateWithoutProjectInput, QuestionUncheckedCreateWithoutProjectInput>
  }

  export type QuestionUpdateWithWhereUniqueWithoutProjectInput = {
    where: QuestionWhereUniqueInput
    data: XOR<QuestionUpdateWithoutProjectInput, QuestionUncheckedUpdateWithoutProjectInput>
  }

  export type QuestionUpdateManyWithWhereWithoutProjectInput = {
    where: QuestionScalarWhereInput
    data: XOR<QuestionUpdateManyMutationInput, QuestionUncheckedUpdateManyWithoutProjectInput>
  }

  export type MeetingUpsertWithWhereUniqueWithoutProjectInput = {
    where: MeetingWhereUniqueInput
    update: XOR<MeetingUpdateWithoutProjectInput, MeetingUncheckedUpdateWithoutProjectInput>
    create: XOR<MeetingCreateWithoutProjectInput, MeetingUncheckedCreateWithoutProjectInput>
  }

  export type MeetingUpdateWithWhereUniqueWithoutProjectInput = {
    where: MeetingWhereUniqueInput
    data: XOR<MeetingUpdateWithoutProjectInput, MeetingUncheckedUpdateWithoutProjectInput>
  }

  export type MeetingUpdateManyWithWhereWithoutProjectInput = {
    where: MeetingScalarWhereInput
    data: XOR<MeetingUpdateManyMutationInput, MeetingUncheckedUpdateManyWithoutProjectInput>
  }

  export type MeetingScalarWhereInput = {
    AND?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    OR?: MeetingScalarWhereInput[]
    NOT?: MeetingScalarWhereInput | MeetingScalarWhereInput[]
    id?: StringFilter<"Meeting"> | string
    createdAt?: DateTimeFilter<"Meeting"> | Date | string
    updatedAt?: DateTimeFilter<"Meeting"> | Date | string
    name?: StringFilter<"Meeting"> | string
    meetingUrl?: StringFilter<"Meeting"> | string
    projectId?: StringFilter<"Meeting"> | string
    status?: EnumMeetingStatusFilter<"Meeting"> | $Enums.MeetingStatus
  }

  export type UserCreateWithoutUserToProjectsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    questionAsked?: QuestionCreateNestedManyWithoutUserInput
    RazorpayTransactions?: RazorpayTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutUserToProjectsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    questionAsked?: QuestionUncheckedCreateNestedManyWithoutUserInput
    RazorpayTransactions?: RazorpayTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutUserToProjectsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUserToProjectsInput, UserUncheckedCreateWithoutUserToProjectsInput>
  }

  export type ProjectCreateWithoutUserToProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    commits?: CommitCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionCreateNestedManyWithoutProjectInput
    meetings?: MeetingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutUserToProjectsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    commits?: CommitUncheckedCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionUncheckedCreateNestedManyWithoutProjectInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutUserToProjectsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutUserToProjectsInput, ProjectUncheckedCreateWithoutUserToProjectsInput>
  }

  export type UserUpsertWithoutUserToProjectsInput = {
    update: XOR<UserUpdateWithoutUserToProjectsInput, UserUncheckedUpdateWithoutUserToProjectsInput>
    create: XOR<UserCreateWithoutUserToProjectsInput, UserUncheckedCreateWithoutUserToProjectsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUserToProjectsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUserToProjectsInput, UserUncheckedUpdateWithoutUserToProjectsInput>
  }

  export type UserUpdateWithoutUserToProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    questionAsked?: QuestionUpdateManyWithoutUserNestedInput
    RazorpayTransactions?: RazorpayTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutUserToProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    questionAsked?: QuestionUncheckedUpdateManyWithoutUserNestedInput
    RazorpayTransactions?: RazorpayTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectUpsertWithoutUserToProjectsInput = {
    update: XOR<ProjectUpdateWithoutUserToProjectsInput, ProjectUncheckedUpdateWithoutUserToProjectsInput>
    create: XOR<ProjectCreateWithoutUserToProjectsInput, ProjectUncheckedCreateWithoutUserToProjectsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutUserToProjectsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutUserToProjectsInput, ProjectUncheckedUpdateWithoutUserToProjectsInput>
  }

  export type ProjectUpdateWithoutUserToProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commits?: CommitUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutUserToProjectsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    commits?: CommitUncheckedUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUncheckedUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutSourceCodeEmbeddingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectCreateNestedManyWithoutProjectInput
    commits?: CommitCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionCreateNestedManyWithoutProjectInput
    meetings?: MeetingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSourceCodeEmbeddingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutProjectInput
    commits?: CommitUncheckedCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionUncheckedCreateNestedManyWithoutProjectInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSourceCodeEmbeddingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSourceCodeEmbeddingsInput, ProjectUncheckedCreateWithoutSourceCodeEmbeddingsInput>
  }

  export type ProjectUpsertWithoutSourceCodeEmbeddingsInput = {
    update: XOR<ProjectUpdateWithoutSourceCodeEmbeddingsInput, ProjectUncheckedUpdateWithoutSourceCodeEmbeddingsInput>
    create: XOR<ProjectCreateWithoutSourceCodeEmbeddingsInput, ProjectUncheckedCreateWithoutSourceCodeEmbeddingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSourceCodeEmbeddingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSourceCodeEmbeddingsInput, ProjectUncheckedUpdateWithoutSourceCodeEmbeddingsInput>
  }

  export type ProjectUpdateWithoutSourceCodeEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUpdateManyWithoutProjectNestedInput
    commits?: CommitUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSourceCodeEmbeddingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutProjectNestedInput
    commits?: CommitUncheckedUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUncheckedUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type ProjectCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectCreateNestedManyWithoutProjectInput
    commits?: CommitCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutMeetingsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutProjectInput
    commits?: CommitUncheckedCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutMeetingsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
  }

  export type IssueCreateWithoutMeetingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    start: string
    end: string
    gist: string
    headline: string
    summary: string
  }

  export type IssueUncheckedCreateWithoutMeetingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    start: string
    end: string
    gist: string
    headline: string
    summary: string
  }

  export type IssueCreateOrConnectWithoutMeetingInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutMeetingInput, IssueUncheckedCreateWithoutMeetingInput>
  }

  export type IssueCreateManyMeetingInputEnvelope = {
    data: IssueCreateManyMeetingInput | IssueCreateManyMeetingInput[]
    skipDuplicates?: boolean
  }

  export type ProjectUpsertWithoutMeetingsInput = {
    update: XOR<ProjectUpdateWithoutMeetingsInput, ProjectUncheckedUpdateWithoutMeetingsInput>
    create: XOR<ProjectCreateWithoutMeetingsInput, ProjectUncheckedCreateWithoutMeetingsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutMeetingsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutMeetingsInput, ProjectUncheckedUpdateWithoutMeetingsInput>
  }

  export type ProjectUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUpdateManyWithoutProjectNestedInput
    commits?: CommitUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutMeetingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutProjectNestedInput
    commits?: CommitUncheckedUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type IssueUpsertWithWhereUniqueWithoutMeetingInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutMeetingInput, IssueUncheckedUpdateWithoutMeetingInput>
    create: XOR<IssueCreateWithoutMeetingInput, IssueUncheckedCreateWithoutMeetingInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutMeetingInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutMeetingInput, IssueUncheckedUpdateWithoutMeetingInput>
  }

  export type IssueUpdateManyWithWhereWithoutMeetingInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutMeetingInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: StringFilter<"Issue"> | string
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    start?: StringFilter<"Issue"> | string
    end?: StringFilter<"Issue"> | string
    gist?: StringFilter<"Issue"> | string
    headline?: StringFilter<"Issue"> | string
    summary?: StringFilter<"Issue"> | string
    meetingId?: StringFilter<"Issue"> | string
  }

  export type MeetingCreateWithoutIssuesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    status?: $Enums.MeetingStatus
    project: ProjectCreateNestedOneWithoutMeetingsInput
  }

  export type MeetingUncheckedCreateWithoutIssuesInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    projectId: string
    status?: $Enums.MeetingStatus
  }

  export type MeetingCreateOrConnectWithoutIssuesInput = {
    where: MeetingWhereUniqueInput
    create: XOR<MeetingCreateWithoutIssuesInput, MeetingUncheckedCreateWithoutIssuesInput>
  }

  export type MeetingUpsertWithoutIssuesInput = {
    update: XOR<MeetingUpdateWithoutIssuesInput, MeetingUncheckedUpdateWithoutIssuesInput>
    create: XOR<MeetingCreateWithoutIssuesInput, MeetingUncheckedCreateWithoutIssuesInput>
    where?: MeetingWhereInput
  }

  export type MeetingUpdateToOneWithWhereWithoutIssuesInput = {
    where?: MeetingWhereInput
    data: XOR<MeetingUpdateWithoutIssuesInput, MeetingUncheckedUpdateWithoutIssuesInput>
  }

  export type MeetingUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    project?: ProjectUpdateOneRequiredWithoutMeetingsNestedInput
  }

  export type MeetingUncheckedUpdateWithoutIssuesInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    projectId?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
  }

  export type UserCreateWithoutRazorpayTransactionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    userToProjects?: UserToProjectCreateNestedManyWithoutUserInput
    questionAsked?: QuestionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRazorpayTransactionsInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutUserInput
    questionAsked?: QuestionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRazorpayTransactionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRazorpayTransactionsInput, UserUncheckedCreateWithoutRazorpayTransactionsInput>
  }

  export type UserUpsertWithoutRazorpayTransactionsInput = {
    update: XOR<UserUpdateWithoutRazorpayTransactionsInput, UserUncheckedUpdateWithoutRazorpayTransactionsInput>
    create: XOR<UserCreateWithoutRazorpayTransactionsInput, UserUncheckedCreateWithoutRazorpayTransactionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRazorpayTransactionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRazorpayTransactionsInput, UserUncheckedUpdateWithoutRazorpayTransactionsInput>
  }

  export type UserUpdateWithoutRazorpayTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    userToProjects?: UserToProjectUpdateManyWithoutUserNestedInput
    questionAsked?: QuestionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRazorpayTransactionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutUserNestedInput
    questionAsked?: QuestionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutSavedQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectCreateNestedManyWithoutProjectInput
    commits?: CommitCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingCreateNestedManyWithoutProjectInput
    meetings?: MeetingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutSavedQuestionsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutProjectInput
    commits?: CommitUncheckedCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedCreateNestedManyWithoutProjectInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutSavedQuestionsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutSavedQuestionsInput, ProjectUncheckedCreateWithoutSavedQuestionsInput>
  }

  export type UserCreateWithoutQuestionAskedInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    userToProjects?: UserToProjectCreateNestedManyWithoutUserInput
    RazorpayTransactions?: RazorpayTransactionCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutQuestionAskedInput = {
    id: string
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl?: string | null
    firstName?: string | null
    lastName?: string | null
    email: string
    password?: string | null
    credits?: number
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutUserInput
    RazorpayTransactions?: RazorpayTransactionUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutQuestionAskedInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutQuestionAskedInput, UserUncheckedCreateWithoutQuestionAskedInput>
  }

  export type ProjectUpsertWithoutSavedQuestionsInput = {
    update: XOR<ProjectUpdateWithoutSavedQuestionsInput, ProjectUncheckedUpdateWithoutSavedQuestionsInput>
    create: XOR<ProjectCreateWithoutSavedQuestionsInput, ProjectUncheckedCreateWithoutSavedQuestionsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutSavedQuestionsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutSavedQuestionsInput, ProjectUncheckedUpdateWithoutSavedQuestionsInput>
  }

  export type ProjectUpdateWithoutSavedQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUpdateManyWithoutProjectNestedInput
    commits?: CommitUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutSavedQuestionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutProjectNestedInput
    commits?: CommitUncheckedUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserUpsertWithoutQuestionAskedInput = {
    update: XOR<UserUpdateWithoutQuestionAskedInput, UserUncheckedUpdateWithoutQuestionAskedInput>
    create: XOR<UserCreateWithoutQuestionAskedInput, UserUncheckedCreateWithoutQuestionAskedInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutQuestionAskedInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutQuestionAskedInput, UserUncheckedUpdateWithoutQuestionAskedInput>
  }

  export type UserUpdateWithoutQuestionAskedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    userToProjects?: UserToProjectUpdateManyWithoutUserNestedInput
    RazorpayTransactions?: RazorpayTransactionUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutQuestionAskedInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: NullableStringFieldUpdateOperationsInput | string | null
    firstName?: NullableStringFieldUpdateOperationsInput | string | null
    lastName?: NullableStringFieldUpdateOperationsInput | string | null
    email?: StringFieldUpdateOperationsInput | string
    password?: NullableStringFieldUpdateOperationsInput | string | null
    credits?: IntFieldUpdateOperationsInput | number
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutUserNestedInput
    RazorpayTransactions?: RazorpayTransactionUncheckedUpdateManyWithoutUserNestedInput
  }

  export type ProjectCreateWithoutCommitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionCreateNestedManyWithoutProjectInput
    meetings?: MeetingCreateNestedManyWithoutProjectInput
  }

  export type ProjectUncheckedCreateWithoutCommitsInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    githubUrl: string
    deletedAt?: Date | string | null
    userToProjects?: UserToProjectUncheckedCreateNestedManyWithoutProjectInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedCreateNestedManyWithoutProjectInput
    savedQuestions?: QuestionUncheckedCreateNestedManyWithoutProjectInput
    meetings?: MeetingUncheckedCreateNestedManyWithoutProjectInput
  }

  export type ProjectCreateOrConnectWithoutCommitsInput = {
    where: ProjectWhereUniqueInput
    create: XOR<ProjectCreateWithoutCommitsInput, ProjectUncheckedCreateWithoutCommitsInput>
  }

  export type ProjectUpsertWithoutCommitsInput = {
    update: XOR<ProjectUpdateWithoutCommitsInput, ProjectUncheckedUpdateWithoutCommitsInput>
    create: XOR<ProjectCreateWithoutCommitsInput, ProjectUncheckedCreateWithoutCommitsInput>
    where?: ProjectWhereInput
  }

  export type ProjectUpdateToOneWithWhereWithoutCommitsInput = {
    where?: ProjectWhereInput
    data: XOR<ProjectUpdateWithoutCommitsInput, ProjectUncheckedUpdateWithoutCommitsInput>
  }

  export type ProjectUpdateWithoutCommitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUpdateManyWithoutProjectNestedInput
  }

  export type ProjectUncheckedUpdateWithoutCommitsInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    githubUrl?: StringFieldUpdateOperationsInput | string
    deletedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    userToProjects?: UserToProjectUncheckedUpdateManyWithoutProjectNestedInput
    sourceCodeEmbeddings?: SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectNestedInput
    savedQuestions?: QuestionUncheckedUpdateManyWithoutProjectNestedInput
    meetings?: MeetingUncheckedUpdateManyWithoutProjectNestedInput
  }

  export type UserToProjectCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    projectId: string
  }

  export type QuestionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId: string
  }

  export type RazorpayTransactionCreateManyUserInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    credits: number
  }

  export type UserToProjectUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    project?: ProjectUpdateOneRequiredWithoutUserToProjectsNestedInput
  }

  export type UserToProjectUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type UserToProjectUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    project?: ProjectUpdateOneRequiredWithoutSavedQuestionsNestedInput
  }

  export type QuestionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    projectId?: StringFieldUpdateOperationsInput | string
  }

  export type RazorpayTransactionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type RazorpayTransactionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type RazorpayTransactionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    credits?: IntFieldUpdateOperationsInput | number
  }

  export type UserToProjectCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    userId: string
  }

  export type CommitCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    commitMessage: string
    commitHash: string
    commitAuthorName: string
    commitAuthorAvatar: string
    commitDate: Date | string
    summary: string
  }

  export type SourceCodeEmbeddingCreateManyProjectInput = {
    id?: string
    sourceCode: string
    fileName: string
    summary: string
  }

  export type QuestionCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    question: string
    answer: string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    userId: string
  }

  export type MeetingCreateManyProjectInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    name: string
    meetingUrl: string
    status?: $Enums.MeetingStatus
  }

  export type UserToProjectUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutUserToProjectsNestedInput
  }

  export type UserToProjectUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type UserToProjectUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type CommitUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type CommitUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type CommitUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    commitMessage?: StringFieldUpdateOperationsInput | string
    commitHash?: StringFieldUpdateOperationsInput | string
    commitAuthorName?: StringFieldUpdateOperationsInput | string
    commitAuthorAvatar?: StringFieldUpdateOperationsInput | string
    commitDate?: DateTimeFieldUpdateOperationsInput | Date | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCodeEmbeddingUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCodeEmbeddingUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type SourceCodeEmbeddingUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    sourceCode?: StringFieldUpdateOperationsInput | string
    fileName?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    user?: UserUpdateOneRequiredWithoutQuestionAskedNestedInput
  }

  export type QuestionUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type QuestionUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    question?: StringFieldUpdateOperationsInput | string
    answer?: StringFieldUpdateOperationsInput | string
    fileReferences?: NullableJsonNullValueInput | InputJsonValue
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type MeetingUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    issues?: IssueUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
    issues?: IssueUncheckedUpdateManyWithoutMeetingNestedInput
  }

  export type MeetingUncheckedUpdateManyWithoutProjectInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    meetingUrl?: StringFieldUpdateOperationsInput | string
    status?: EnumMeetingStatusFieldUpdateOperationsInput | $Enums.MeetingStatus
  }

  export type IssueCreateManyMeetingInput = {
    id?: string
    createdAt?: Date | string
    updatedAt?: Date | string
    start: string
    end: string
    gist: string
    headline: string
    summary: string
  }

  export type IssueUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type IssueUncheckedUpdateWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }

  export type IssueUncheckedUpdateManyWithoutMeetingInput = {
    id?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    start?: StringFieldUpdateOperationsInput | string
    end?: StringFieldUpdateOperationsInput | string
    gist?: StringFieldUpdateOperationsInput | string
    headline?: StringFieldUpdateOperationsInput | string
    summary?: StringFieldUpdateOperationsInput | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}