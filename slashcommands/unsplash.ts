import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { ISlashCommand } from '@rocket.chat/apps-engine/definition/slashcommands/ISlashCommand';

export class UnsplashCommand implements ISlashCommand {
    public command: 'unsplash';
    public i18nParamsExample: 'Unsplash-search-term';
    public i18nDescription: 'Unsplash-command-description';
    public providesPreview: false;

    constructor(private readonly app: App) {}

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {
        const message = await modify.getCreator().startMessage();
        const sender = await read.getUserReader().getById('rocket.cat');
        const room = context.getRoom();

        if (!room) {
            throw new Error('No room is configured for this');
        }

        const usernameAlias = await read.getEnvironmentReader().getSettings().getById('unsplash-user-alias');

        message
            .setSender(sender)
            .setUsernameAlias(usernameAlias.value)
            .setGroupable(false)
            .setRoom(room)
            .setText('Unsplash call recieved');

        modify.getNotifier().notifyRoom(room, message.getMessage());
    }
}
