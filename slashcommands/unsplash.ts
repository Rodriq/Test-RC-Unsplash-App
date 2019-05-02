import { IHttp, IModify, IPersistence, IRead } from '@rocket.chat/apps-engine/definition/accessors';
import { App } from '@rocket.chat/apps-engine/definition/App';
import { ISlashCommandPreview, SlashCommandContext } from '@rocket.chat/apps-engine/definition/slashcommands';
import { ISlashCommand } from '@rocket.chat/apps-engine/definition/slashcommands/ISlashCommand';

export class UnsplashCommand implements ISlashCommand {
    public command: string;
    public i18nParamsExample: string;
    public i18nDescription: string;
    // public permission?: string | undefined;
    public providesPreview: boolean;

    constructor(private readonly app: App) {
        this.command = 'unsplash';
        this.i18nParamsExample = 'Unsplash-search-term';
        this.i18nDescription = 'Unsplash-command-description';
        this.providesPreview = true;
    }

    public async executor(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<void> {

        console.log('Your unplash slash command is working');
    }

    public previewer(context: SlashCommandContext, read: IRead, modify: IModify, http: IHttp, persis: IPersistence): Promise<ISlashCommandPreview> {
        const baseURL: string = 'https://api.unsplash.com';
        let word: any = context.getArguments();
        console.log(word);
        // console.log('-------------------------');
        console.log(`${baseURL}/search/photos?query=${word}`);

        http.get(`${baseURL}/search/photos?query=${word}`, {
            params: {
                client_id: 'to be added',
            },
        });
        return this.success();
    }
    public success(): Promise<ISlashCommandPreview> {
        throw new Error('Method not implemented.');
    }

}
