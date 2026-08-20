import { PrivacyPolicy } from './PrivacyPolicy';

const sections = [
  {
    title: 'Audio Library Access',
    content: [
      "Luma Music may request Android permission to access audio files stored on the user's device.",
      'Depending on the Android version, this may include permissions such as:',
      ['READ_MEDIA_AUDIO', 'READ_EXTERNAL_STORAGE on supported older Android versions'],
      'These permissions are used to discover, display, organize, and play audio files selected or stored by the user.',
      "Luma Music does not upload the user's music files to a developer-operated server.",
    ],
  },
  {
    title: 'Data Stored Locally',
    content: [
      "Luma Music may process and store information locally on the user's device, including:",
      [
        'Song titles.',
        'Artist information.',
        'Album information.',
        'Track duration.',
        'File or content identifiers required for playback.',
        'Favorites.',
        'Playlists.',
        'Queue information.',
        'App preferences.',
        'Cached music-library metadata.',
      ],
      "This information is used to provide the application's music-library and playback functionality.",
    ],
  },
  {
    title: 'Background Playback',
    content: [
      'Luma Music uses Android media playback capabilities so that music can continue while the application is in the background or while the device is locked.',
      'The application may use Android foreground-service and wake-lock functionality necessary for background media playback and media controls.',
      'These capabilities are not used for tracking or advertising.',
    ],
  },
  {
    title: 'Data Collection and Sharing',
    content: [
      'Luma Music does not currently:',
      [
        'Require an account.',
        "Upload the user's audio files.",
        'Sell personal information.',
        'Share music-library information with advertisers.',
        'Include advertising.',
        'Use analytics services.',
        'Provide third-party music streaming.',
        'Connect to Spotify, YouTube, or other online music services.',
        "Operate a developer-controlled backend for users' local music libraries.",
      ],
    ],
  },
  {
    title: 'Network Use',
    content: [
      'The core Luma Music functionality is designed for playing local audio files.',
      'This version does not require users to upload their music library to a Luma Music server.',
    ],
  },
  {
    title: 'Permissions',
    content: [
      'Luma Music may use Android permissions necessary to provide its features, including:',
      [
        'Audio/media read permissions for discovering local music.',
        'Foreground media playback permissions.',
        'Wake-lock functionality used during supported playback scenarios.',
      ],
      'Permissions are used only for application functionality and not for advertising or user profiling.',
    ],
  },
  {
    title: 'Security',
    content: [
      "Audio-library information and application preferences are primarily processed and stored locally on the user's device.",
      "Android's application sandbox, storage permissions, and operating-system protections help protect locally stored application data.",
      "Luma Music does not intentionally transmit the user's local audio files to a developer-operated server.",
    ],
  },
  {
    title: 'Data Retention and Deletion',
    content: [
      "Luma Music retains favorites, playlists, settings, cached library metadata, and related application information locally on the device for as long as necessary to provide the application's functionality.",
      'Users can modify or delete supported favorites and playlists from within the application.',
      "Users can remove locally stored Luma Music application data through Android's application settings or by uninstalling the application, subject to Android's own backup and restore behavior.",
      'Luma Music does not provide user accounts in this version, so there is no server-side Luma Music account requiring a separate deletion process.',
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Luma Music is not designed specifically for children and does not knowingly collect children's personal information through a developer-operated backend.",
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    content: [
      "This Privacy Policy may be updated if Luma Music's features or data practices change.",
      'If future versions introduce accounts, analytics, advertising, cloud synchronization, streaming integrations, or other network services, this policy will be updated as appropriate before those practices are introduced.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'For privacy-related questions regarding Luma Music:',
      'Developer: Dantu Sai Kamal',
      'Email: dantusaikamal@gmail.com',
    ],
  },
];

export default function LumaMusicPrivacyPolicy() {
  return (
    <PrivacyPolicy
      appName="Luma Music"
      description={[
        "Luma Music is a local-first Android music player designed to discover and play audio files stored on the user's device.",
      ]}
      sections={sections}
    />
  );
}

