/* istanbul ignore file */
/* tslint:disable */
/* eslint-disable */
import type { CreatePresignedPostDto } from '../models/CreatePresignedPostDto';

import type { CancelablePromise } from '../core/CancelablePromise';
import { OpenAPI } from '../core/OpenAPI';
import { request as __request } from '../core/request';

export class FilesService {
  /**
   * 파일 업로드 주소 생성
   * @param requestBody
   * @returns any
   * @throws ApiError
   */
  public static fileControllerCreatePresignedPost(
    requestBody: CreatePresignedPostDto
  ): CancelablePromise<any> {
    return __request(OpenAPI, {
      method: 'POST',
      url: '/files',
      body: requestBody,
      mediaType: 'application/json',
    });
  }
}
