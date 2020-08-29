import {
  useInfiniteQuery,
  InfiniteQueryFunction,
  AnyQueryKey,
  InfiniteQueryResult,
  InfiniteQueryKey,
  InfiniteQueryOptions
} from "react-query";
interface Props<TResult, TKey extends AnyQueryKey, TError = Error> {
  queryKey: InfiniteQueryKey<TKey>;
  queryFn: InfiniteQueryFunction<TResult, TKey, TError>;
  config?: InfiniteQueryOptions<TResult, TError>;
  children: (query: InfiniteQueryResult<TResult, TError>) => any;
}

export const UseInfiniteQuery = <
  TResult,
  TKey extends AnyQueryKey,
  TError = Error
>({
  queryKey,
  queryFn,
  config,
  children
}: Props<TResult, TKey, TError>) => {
  const queryResult = useInfiniteQuery<TResult, TKey, TError>({
    queryKey,
    queryFn,
    config
  });

  return children(queryResult);
};
