import { ApiEndpoint, IApiRequest, IApiEndpoint, IApiResponse } from "@rocket.chat/apps-engine/definition/api";
import { IModify, IPersistence, IRead, IHttp } from "@rocket.chat/apps-engine/definition/accessors";

export class WebhookEndpoint extends ApiEndpoint {
    public path = 'webhook';

    public async post(
        request: IApiRequest,
        endpoint: IApiEndpoint,
        read: IRead,
        modify: IModify,
        http: IHttp,
        persis: IPersistence,
    ): Promise<IApiResponse> {
        return this.success();
    }
}
