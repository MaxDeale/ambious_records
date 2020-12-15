window.onSpotifyWebPlaybackSDKReady = () => {
  const token =
    "BQC4YJe2RYG4kc-MZd3nwtRJejfH8Mb4pK9f4Ns61ByzRmTtJTXjf5D5R6B9ljpGwH-KFI_ASXm6J_Z410O0i5pslpe1AbUJZqUpSK2lSYFPjgA9qL4YdQbKCdCBLw7sOiMVebn0bDMCxuJH3i9SrwmVv6VXntvf5QayC1rrUXaQ5d_EmGtUfw0";
  const player = new Spotify.Player({
    name: "Web Playback SDK Quick Start Player",
    getOAuthToken: (cb) => {
      cb(token);
    },
  });

  // Error handling
  player.addListener("initialization_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("authentication_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("account_error", ({ message }) => {
    console.error(message);
  });
  player.addListener("playback_error", ({ message }) => {
    console.error(message);
  });

  // Playback status updates
  player.addListener("player_state_changed", (state) => {
    console.log(state);
  });

  // Ready
  player.addListener("ready", ({ device_id }) => {
    console.log("Ready with Device ID", device_id);
  });

  // Not Ready
  player.addListener("not_ready", ({ device_id }) => {
    console.log("Device ID has gone offline", device_id);
  });

  // Connect to the player!
  player.connect();
};
