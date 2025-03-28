export default class Page {
    protected open(path: string) {
        return browser.url(`https://stage-ferp.fi${path}`);
    }
}
