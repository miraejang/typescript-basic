{
  // Omit Type
  /**
   * 기존의 type에서 원하는 속성과 value를 빼고 사용할 수 있음
   */

  type Video = {
    id: string;
    title: string;
    url: string;
    data: string;
  };
  type VideoMetadata = Omit<Video, 'url' | 'data' | 'hi'>;

  function getVideo(id: string): Video {
    return {
      id,
      title: 'video',
      url: 'https://..',
      data: 'byte-data..',
    };
  }
  function getVideoMetadata(id: string): VideoMetadata {
    return {
      id,
      title: 'title',
    };
  }
}
