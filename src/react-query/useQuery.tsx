import {
  useQuery,
  QueryResult,
  QueryOptions,
  QueryFunction,
  AnyQueryKey
} from "react-query";
interface Props<TResult, TKey extends AnyQueryKey, TError = Error> {
  queryKey: TKey;
  queryFn: QueryFunction<TResult, TKey>;
  config?: QueryOptions<TResult, TError>;
  children: (query: QueryResult<TResult, TError>) => any;
}

export const UseQuery = <TResult, TKey extends AnyQueryKey, TError = Error>({
  queryKey,
  queryFn,
  config,
  children
}: Props<TResult, TKey, TError>) => {
  const queryResult = useQuery<TResult, TKey, TError>({
    queryKey,
    queryFn,
    config
  });

  return children(queryResult);
};
