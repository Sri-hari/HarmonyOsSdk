/*
 * Copyright (c) 2020 Huawei Device Co., Ltd.
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

export interface GetStorageOptions {
  /**
   * Content index.
   * For liteWearable and smartVision, the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
   */
  key: string;

  /**
   * Default value returned when the key does not exist.
   * If this parameter is not specified, an empty string is returned.
   */
  default?: string;

  /**
   * Called when the stored content is read successfully.
   */
  success?: (data: any) => void;

  /**
   * Called when the stored content fails to be read.
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

export interface SetStorageOptions {
  /**
   * Index of the stored content to be modified.
   * For liteWearable and smartVision, the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
   */
  key: string;

  /**
   * Target storage content. If the content is an empty string, the data item with the key as the index will be deleted.
   */
  value: string;

  /**
   * Called when the stored content is modified successfully.
   */
  success?: () => void;

  /**
   * Called when the stored content fails to be modified.
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

/**
 * @devices tv, phone, tablet, wearable, liteWearable, smartVision
 */
export interface ClearStorageOptions {
  /**
   * Called when the stored content is cleared successfully.
   */
  success?: () => void;

  /**
   * Called when the stored content fails to be cleared.
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

export interface DeleteStorageOptions {
  /**
   * Content index.
   * For liteWearable and smartVision, the value contains a maximum of 32 characters and cannot contain special characters such as \/"*+,:;<=>?[]|\x7F.
   */
  key: string;

  /**
   * Called when the stored content is deleted successfully.
   */
  success?: () => void;

  /**
   * Called when the stored content fails to be deleted.
   */
  fail?: (data: string, code: number) => void;

  /**
   * Called when the execution is completed.
   */
  complete?: () => void;
}

/**
 * @Syscap SysCap.ACE.UIEngine
 */
export default class Storage {
  /**
   * Reads the stored content.
   * @param options Options.
   */
  static get(options: GetStorageOptions): void;

  /**
   * Modifies the stored content.
   * @param options Options.
   */
  static set(options: SetStorageOptions): void;

  /**
   * Clears the stored content.
   * @param options Options.
   */
  static clear(options?: ClearStorageOptions): void;

  /**
   * Deletes the stored content.
   * @param options Options.
   */
  static delete(options: DeleteStorageOptions): void;
}
