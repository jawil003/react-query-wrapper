import {
  AnyQueryKey,
  useMutation,
  MutationFunction,
  MutationOptions,
  MutationResultPair
} from "react-query";
interface Props<TResult, TKey extends AnyQueryKey, Error> {
  mutationFn: MutationFunction<TResult, TKey, Error, unknown>;
  mutationOptions?: MutationOptions<TResult, TKey, Error, unknown>;
  children(result: MutationResultPair<TResult, TKey, Error>): any;
}

export const UseMutation = <TResult, TKey extends AnyQueryKey, Error>({
  mutationFn,
  mutationOptions,
  children
}: Props<TResult, TKey, Error>) => {
  const queryResult = useMutation<TResult, TKey, Error>(
    mutationFn,
    mutationOptions
  );

  return children(queryResult);
};
