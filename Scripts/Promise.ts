class Promise {

    private _resolve = false;
    private _handler: { (): void }

    public resolve() {
        this._resolve = true;
        if (this._handler) {
            this._handler();
            delete this._handler;
        }
    }

    public done(handler: { (): void }) {
        if (this._resolve) {
            handler();
        }
        else {
            this._handler = handler;
        }
    }

}

export =Promise