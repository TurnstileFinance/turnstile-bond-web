/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { LoginWithEmailDto } from '../models/LoginWithEmailDto';
import type { SignUpDto } from '../models/SignUpDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class AuthService {
  /**
   * 로그인
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public static authControllerLoginByEmail(
    requestBody: LoginWithEmailDto
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/login',
      body: requestBody,
      mediaType: 'application/json',
    });
  }

  /**
   * 회원가입
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public static authControllerSignup(
    requestBody: SignUpDto
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/auth/signup',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
