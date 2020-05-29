import {ServiceType} from "./servicetype";

export default class ServiceTypeState {
  ServiceTypes: Array<ServiceType>;
  ServiceTypeError: Error;
}

export const initializeState = (): ServiceTypeState => {
  return { ServiceTypes: Array<ServiceType>(), ServiceTypeError: null };
};
