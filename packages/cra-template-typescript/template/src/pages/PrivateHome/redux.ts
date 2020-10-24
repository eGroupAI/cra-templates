import { createAction } from '@reduxjs/toolkit'
import { AxiosError } from 'axios'
import { Post } from 'entities'

export const fetchGetPosts = createAction('pages/home/fetchGetPosts')
export const fetchGetPostsRequest = createAction('pages/home/fetchGetPostsRequest')
export const fetchGetPostsSuccess = createAction<Post[]>('pages/home/fetchGetPostsSuccess')
export const fetchGetPostsFailure = createAction<AxiosError>('pages/home/fetchGetPostsFailure')

export const increment = createAction<number>('increment')
export const decrement = createAction<number>('decrement')
