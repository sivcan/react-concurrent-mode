import { unstable_createResource } from 'react-cache';

export const createResource = (cb) => {
  const resource = unstable_createResource(cb);

  return {
    read (dataObject) {
      // Need to stringify the object, so that the benefit of react-cache
      // is taken into account
      return resource.read(JSON.stringify(dataObject));
    }
  }
}