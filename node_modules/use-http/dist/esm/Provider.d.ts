import React from 'react';
import { FetchProviderProps } from './types';
export declare const Provider: ({ url, options, graphql, children }: FetchProviderProps) => React.ReactElement<any, string | ((props: any) => React.ReactElement<any, string | any | (new (props: any) => React.Component<any, any, any>)> | null) | (new (props: any) => React.Component<any, any, any>)>;
