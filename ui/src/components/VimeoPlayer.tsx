import ReactPlayer from 'react-player';

interface VimeoPlayerProps {
  url: string;
}

const VimeoPlayer = ({ url }: VimeoPlayerProps) => {
  return (
    <div className="md:max-w-[800px] md:w-[75%] w-full h-[30vh] md:h-[45vh] my-2">
      <ReactPlayer
        src={url}
        width="100%"
        height="100%"
        style={{
          overflow: 'hidden',
        }}
        controls
        config={{
          vimeo: {
            controls: true,
            airplay: false,
            byline: false,
            dnt: false,
            interactive_markers: false,
            title: false,
            audio_tracks: false,
            chapters: false,
            chromecast: false,
            keyboard: false,
            play_button_position: 'center',
            vimeo_logo: false,
            pip: false,
            speed: false,
            volume: true,
            transparent: true,
          },
        }}
      />
    </div>
  );
};

export default VimeoPlayer;
