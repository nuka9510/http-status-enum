import { Enum } from "@nuka9510/simple-enum";
export default class StatusType extends Enum<string> {
    #private;
    /**
     * 정보 응답
     */
    static get INFORMATION(): StatusType;
    /**
     * 성공 응답
     */
    static get SUCCESSFUL(): StatusType;
    /**
     * 리다이렉션 메시지
     */
    static get REDIRECTION(): StatusType;
    /**
     * 클라이언트 에러 응답
     */
    static get CLIENT_ERROR(): StatusType;
    /**
     * 서버 에러 응답
     */
    static get SERVER_ERROR(): StatusType;
    get name(): string;
    constructor(value: string);
}
