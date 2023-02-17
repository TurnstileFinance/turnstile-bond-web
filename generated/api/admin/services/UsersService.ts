/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { PaginatedUserListDto } from '../models/PaginatedUserListDto';
import type { UserDto } from '../models/UserDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UsersService {
  /**
   * 내 정보 조회
   * @returns any
   * @throws ApiError
   */
  public static userControllerMe(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/me',
    });
  }

  /**
   * 페이지네이션 목록 조회
   * @param sort
   * @param filter
   * @param page
   * @param itemsPerPage
   * @returns PaginatedUserListDto
   * @throws ApiError
   */
  public static findAllUserWithPagination(
    sort?: string,
    filter?: string,
    page: number = 1,
    itemsPerPage: number = 30
  ): CancelablePromise<PaginatedUserListDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users',
      query: {
        sort: sort,
        filter: filter,
        page: page,
        itemsPerPage: itemsPerPage,
      },
    });
  }

  /**
   * ID로 단일 조회
   * @param id
   * @param filter
   * @returns UserDto
   * @throws ApiError
   */
  public static findOneUserById(
    id: number,
    filter?: string
  ): CancelablePromise<UserDto> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/{id}',
      path: {
        id: id,
      },
      query: {
        filter: filter,
      },
    });
  }
}
