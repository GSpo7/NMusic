import { useIsFocused } from "@react-navigation/native";
import type {
  DefaultOptions,
  UseMutationResult,
  UseQueryResult,
} from "@tanstack/react-query";
import { QueryClient, useQuery } from "@tanstack/react-query";

import { queries as q } from "~/queries/keyStore";

const queryConfig: DefaultOptions = {
  queries: {
    networkMode: "always",
    staleTime: Infinity,
    gcTime: 2.5 * 60 * 1000,
  },
  mutations: {
    networkMode: "always",
  },
};

// Create TanStack Query client.
export const queryClient = new QueryClient({ defaultOptions: queryConfig });

/*
  Getting `select` to work with TypeScript:
    - https://stackoverflow.com/a/75788655
*/

/** Prevent "double" submissions w/ `mutation.mutate()`. */
export function mutateGuard<TData, TError, TVariables, TContext>(
  mutation: UseMutationResult<TData, TError, TVariables, TContext>,
  ...args: Parameters<typeof mutation.mutate>
) {
  if (!mutation.isPending) mutation.mutate(...args);
}

/** Prevent "double" submissions w/ `mutation.mutateAsync()`. */
export async function mutateGuardAsync<TData, TError, TVariables, TContext>(
  mutation: UseMutationResult<TData, TError, TVariables, TContext>,
  ...args: Parameters<typeof mutation.mutate>
) {
  if (!mutation.isPending) await mutation.mutateAsync(...args);
}

/**
 * Helper for invalidating all queries except the "Latest Release" query
 * as that shouldn't ever change in the given app session.
 */
export function clearAllQueries(client: QueryClient = queryClient) {
  client.invalidateQueries({
    // Typically, `false` is never the results when comparing 2 arrays with
    // the "same" content unless they point to the same reference.
    predicate: ({ queryKey }) => queryKey !== q.settings.releaseNote.queryKey,
  });
}

/** Extracts the type of the `data` returned from `useQuery`. */
export type ExtractQueryData<T extends () => UseQueryResult<any>> = NonNullable<
  ReturnType<T>["data"]
>;

/** `useQuery`, but it only refetches when the screen is in focus. */
// @ts-expect-error - Type conflict.
export const useFocusedQuery: typeof useQuery = (options) => {
  const isFocused = useIsFocused();
  return useQuery({ subscribed: isFocused, ...options });
};
