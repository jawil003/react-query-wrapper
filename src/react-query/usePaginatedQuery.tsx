import {
  usePaginatedQuery,
  QueryOptions,
  QueryFunction,
  AnyQueryKey,
  PaginatedQueryResult
} from "react-query";
interface Props<TResult, TKey extends AnyQueryKey, TError = Error> {
  queryKey: TKey;
  queryFn: QueryFunction<TResult, TKey>;
  config?: QueryOptions<TResult, TError>;
  children: (query: PaginatedQueryResult<TResult, TError>) => any;
}

export const UsePaginatedQuery = <
  TResult,
  TKey extends AnyQueryKey,
  TError = Error
>({
  queryKey,
  queryFn,
  config,
  children
}: Props<TResult, TKey, TError>) => {
  const queryResult = usePaginatedQuery<TResult, TKey, TError>({
    queryKey,
    queryFn,
    config
  });

  return children(queryResult);
};
