import config from '../store/config'
import status from '../store/status'

export default () => {
    return {
        urlPrefix: config.urlPrefix,
        sessionExpireTime: config.sessionExpireTime,
        sessionExpireKey: config.sessionExpireKey,
        sessionExpire: status.sessionExpire
    }
};
