/*
 * @Author: wanyuqing
 * @Date: 2021-02-25 17:08:12
 */

import { NOT_LOADED } from './apps.helper';
const APPS = [];

/**
 * 注册app
 * @param {string} appName 应用的名字
 * @param {Function | Promise} applicationOrLoadingFn Application | Promise<Application>
 * @param {(location) => boolean} activityFn app启动时匹配的路由地址
 * @param {object} customProps 参数
 */
export function registerApplication(appName, applicationOrLoadingFn, activityFn, customProps) {
  if (!appName || typeof appName !== 'string') {
    throw new Error('the app name must be a non-empty string');
  }
  if (getAppNames().indexOf(appName) !== -1) {
    throw new Error('There is already an app declared with name ' + appName);
  }
  if (typeof customProps !== 'object' || Array.isArray(customProps)) {
    throw new Error('the customProps must be a pure object');
  }

  if (!applicationOrLoadFunction) {
    throw new Error('the application or load function is required');
  }

  if (typeof activityWhen !== 'function') {
    throw new Error('the activityWhen must be a function');
  }

  if (typeof applicationOrLoadFunction !== 'function') {
    applicationOrLoadFunction = () => Promise.resolve(applicationOrLoadFunction);
  }

  APPS.push({
    name: appName,
    loadApp: applicationOrLoadFunction,
    activityWhen,
    customProps,
    status: NOT_LOADED,
    service: {},
  });
}
