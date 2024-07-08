export class ListHelpers {

    public static mapToList(options: string | undefined) {
        if(!options) return;
        return options.split(', ').filter(f => f !== " " || f.length !== 0);
    }
}
