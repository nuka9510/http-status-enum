import { Enum } from "@nuka9510/simple-enum";
export default class StatusType extends Enum {
    static #INFORMATION = new StatusType('INFORMATION');
    static #SUCCESSFUL = new StatusType('SUCCESSFUL');
    static #REDIRECTION = new StatusType('REDIRECTION');
    static #CLIENT_ERROR = new StatusType('CLIENT_ERROR');
    static #SERVER_ERROR = new StatusType('SERVER_ERROR');
    /**
     * 정보 응답
     */
    static get INFORMATION() { return StatusType.#INFORMATION; }
    /**
     * 성공 응답
     */
    static get SUCCESSFUL() { return StatusType.#SUCCESSFUL; }
    /**
     * 리다이렉션 메시지
     */
    static get REDIRECTION() { return StatusType.#REDIRECTION; }
    /**
     * 클라이언트 에러 응답
     */
    static get CLIENT_ERROR() { return StatusType.#CLIENT_ERROR; }
    /**
     * 서버 에러 응답
     */
    static get SERVER_ERROR() { return StatusType.#SERVER_ERROR; }
    #name;
    get name() { return this.#name; }
    constructor(value) {
        super(value);
        this.#name = value;
    }
}
