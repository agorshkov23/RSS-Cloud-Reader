/// <reference path="../typings/angular/angular.d.ts" />

namespace agorshkov23.controllers {
  var app = angular.module("rssCloudReaderApp");
  app.controller("rssChannelController", ($scope: agorshkov23.models.RssChannelScope) => {
    $scope.rssChannels = repositories.RssChannelRepository.getLocalStorage().getAll();
    $scope.add = (id: number, name: string, url: string, active: boolean) => {
      const rssChannel: models.RssChannelModel = {
        id: id,
        name: name,
        url: url,
        active: active
      }
      repositories.RssChannelRepository.getLocalStorage().add(rssChannel);
      $scope.rssChannels = repositories.RssChannelRepository.getLocalStorage().getAll();
    };

    $scope.edit = (rssChannel: models.RssChannelModel) => {
      $scope.id = rssChannel.id;
      $scope.name = rssChannel.name;
      $scope.url = rssChannel.url;
    }

    return;
    $scope.rssChannels = [{
      name: "bash.im",
      url: "http://bash.im/rss/",
      active: true
    }, {
        name: "ithappens.me",
        url: "http://ithappens.me/rss",
        active: false
      }];

  });
}