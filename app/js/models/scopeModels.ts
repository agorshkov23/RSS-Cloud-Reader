/// <reference path="../typings/angular/angular.d.ts" />

namespace agorshkov23.models {
  export interface RssChannelScope extends angular.IScope {
    id: number;
    name: string;
    url: string;

    rssChannels: RssChannelModel[];

    add(id: number, name: string, url: string, active: boolean);
    edit(rssChannel: RssChannelModel);
  }
}