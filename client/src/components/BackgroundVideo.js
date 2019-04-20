import React from "react";

export default function BackgroundVideo() {
  return (
    <video id="player" autoPlay muted loop>
      <source
        src="https://media.giphy.com/media/uBxP06JlaB7VCIaYXm/giphy.mp4"
        type="video/mp4"
      />
    </video>
  );
}
