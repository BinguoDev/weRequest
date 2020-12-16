import sessionManager from '../module/sessionManager'

export default (): Promise<object> => {
    return sessionManager.main()
}
