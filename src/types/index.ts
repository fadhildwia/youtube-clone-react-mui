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