import {
    IAppAccessors,
    IConfigurationExtend,
    IEnvironmentRead,
    ILogger,
} from '@rocket.chat/apps-engine/definition/accessors';
import { ApiSecurity, ApiVisibility } from '@rocket.chat/apps-engine/definition/api';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { IAppInfo } from '@rocket.chat/apps-engine/definition/metadata';
import { WebhookEndpoint } from './endpoints/WebhookEndpoint';
import { UnsplashCommand } from './slashcommands/unsplash';

export class UnsplashIntegrationApp extends App {
    constructor(info: IAppInfo, logger: ILogger, accessors: IAppAccessors) {
        super(info, logger, accessors);
    }

    protected async extendConfiguration(configuration: IConfigurationExtend, environment: IEnvironmentRead): Promise<void> {

        await configuration.slashCommands.provideSlashCommand(new UnsplashCommand(this));
    }
}
