/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class UserService {
  /**
   * 내 정보 조회
   * @returns any
   * @throws ApiError
   */
  public static userControllerMe(): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'GET',
      url: '/users/me',
    });
  }
}
