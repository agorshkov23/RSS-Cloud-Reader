
namespace agorshkov23.repositories {
  export interface RssChannelRepository {
    getAll(): models.RssChannelModel[];
    add(rssChannel: models.RssChannelModel);
  }

  export class RssChannelRepository {
    static getLocalStorage() {
      return new LocalStorageRssChannelRepository() as RssChannelRepository;
    }
  }

  class LocalStorageRssChannelRepository implements RssChannelRepository {
    constructor() {
    }

    getAll() {
      const json = localStorage.getItem("rssChannels");
      return (JSON.parse(json) || []) as models.RssChannelModel[];
    }

    add(rssChannel: models.RssChannelModel) {
      const channels = this.getAll();
      if (rssChannel.id) {
        for (let i = 0; i < channels.length; i++) {
          if (channels[i] && channels[i].id === rssChannel.id) {
            channels[i] = rssChannel;
            break;
          }
        }
      }
      else {
        let maxId = 0;
        for (let i = 0; i < channels.length; i++) {
          if (channels[i]) {
            maxId = Math.max(maxId, channels[i].id);
          }
        }
        rssChannel.id = maxId + 1;
        channels.push(rssChannel);
      }
      const json = JSON.stringify(channels);
      localStorage.setItem("rssChannels", json);
    }
  }
}