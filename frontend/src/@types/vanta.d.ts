declare module "vanta/dist/vanta.net.min.js" {
    const NET: (opts: any) => { destroy: () => void }
    export = NET;
}