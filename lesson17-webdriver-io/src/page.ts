export default class Page {
    public open(path: string) {
        return browser.url(`https://stage-ferp.fi${path}`);
    }
}
