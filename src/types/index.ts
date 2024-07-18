export interface ItemsInterface {
  kind: string
  id: {
    kind: string
    videoId: string
  }
  snippet: {
      publishedAt: string
      channelId: string
      title: string
      description: string
      thumbnails: {
          default: {
              url: string
              width: number
              height: number
          },
          medium: {
              url: string
              width: number
              height: number
          },
          high: {
              url: string
              width: number
              height: number
          }
      },
      channelTitle: string
      liveBroadcastContent: string
      publishTime: string
  }
}

export interface SearchResponse {
  kind: string
  nextPageToken: string
  regionCode: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Array<ItemsInterface>
}

export interface ItemChannelInterface {
  kind: string
  id: string
  snippet: {
      title: string
      description: string
      customUrl: string
      publishedAt: string
      thumbnails: {
          default: {
              url: string
              width: number
              height: number
          },
          medium: {
              url: string
              width: number
              height: number
          },
          high: {
              url: string
              width: number
              height: number
          }
      },
      localized: {
          title: string
          description: string
      },
      country: string
  },
  contentDetails: {
      relatedPlaylists: {
          likes: string
          uploads: string
      }
  },
  statistics: {
      viewCount: string
      subscriberCount: string
      hiddenSubscriberCount: boolean
      videoCount: string
  },
  brandingSettings: {
      channel: {
          title: string
          description: string
          keywords: string
          unsubscribedTrailer: string
          country: string
      },
      image: {
          bannerExternalUrl: string
      }
  }
}

export interface ChannelDetailResponse {
  kind: string
  pageInfo: {
    totalResults: number
    resultsPerPage: number
  }
  items: Array<ItemChannelInterface>
}