import Channel from '@kadira/storybook-channel';

class MockTransport {
    setHandler(handler) {
        this._handler = handler;
    }

    send(event) {
        event.from += '_alter_ego'; // We do this to not ignore events from ourselves.
        this._handler(event);
        return Promise.resolve(null);
    }
}

export default () => new Channel({ transport: new MockTransport() });
