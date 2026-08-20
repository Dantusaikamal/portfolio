import { PrivacyPolicy } from './PrivacyPolicy';

const sections = [
  {
    title: 'Data Stored Locally',
    content: [
      "Aeris may store the following information locally on the user's device:",
      [
        'Game settings.',
        'Audio preferences.',
        'Gameplay preferences.',
        'Difficulty preferences.',
        'Statistics.',
        'High scores.',
        'Other application state required to provide the game experience.',
      ],
      "This information is used only to operate and personalize the game on the user's device.",
    ],
  },
  {
    title: 'Data Collection and Sharing',
    content: [
      'Aeris does not currently:',
      [
        'Require a user account.',
        'Operate a developer-controlled gameplay backend.',
        'Sell personal information.',
        'Share gameplay information with advertisers.',
        'Contain advertising.',
        'Use analytics services.',
        'Upload high scores or gameplay statistics to a developer-controlled cloud service.',
        'Use personal information for profiling or targeted advertising.',
      ],
    ],
  },
  {
    title: 'Network and Cloud Services',
    content: [
      'The core Aeris game experience does not require a developer-operated cloud account or game server.',
      'Gameplay preferences, statistics, and scores are stored locally in this release.',
    ],
  },
  {
    title: 'Permissions',
    content: [
      'Aeris does not require sensitive Android permissions for its core gameplay experience.',
      'Any standard platform capabilities used by the application are used only to provide the game experience and are not used for advertising or user profiling.',
    ],
  },
  {
    title: 'Audio',
    content: [
      'Aeris contains game and ambient audio functionality.',
      "Audio preferences may be stored locally on the user's device.",
      'Aeris does not use microphone access for gameplay in this version.',
    ],
  },
  {
    title: 'Security',
    content: [
      "Aeris application data is primarily stored locally on the user's device and benefits from Android's application sandbox and device security protections.",
      'Aeris does not intentionally transmit local gameplay statistics or high scores to a developer-controlled server in this release.',
    ],
  },
  {
    title: 'Data Retention and Deletion',
    content: [
      'Aeris retains game preferences, settings, statistics, and high scores locally for as long as needed to provide the game experience.',
      "Users can remove locally stored Aeris application data by clearing the application's data through Android settings or by uninstalling the application, subject to Android's own backup and restore behavior.",
      'Because Aeris does not provide user accounts or maintain a developer-operated gameplay database in this release, there is no server-side Aeris account requiring a separate deletion request.',
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      "Aeris is not designed specifically for children and does not knowingly collect children's personal information through a developer-operated backend.",
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    content: [
      "This Privacy Policy may be updated if Aeris's functionality or data practices change.",
      'If analytics, advertising, online accounts, cloud saves, multiplayer functionality, or other online services are introduced in the future, this Privacy Policy will be updated as appropriate before those practices are introduced.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'For privacy-related questions regarding Aeris:',
      'Developer: Dantu Sai Kamal',
      'Email: dantusaikamal@gmail.com',
    ],
  },
];

export default function AerisPrivacyPolicy() {
  return (
    <PrivacyPolicy
      appName="Aeris"
      description={[
        'Aeris is an atmospheric mobile flight game designed for casual play, relaxation, and score-based gameplay.',
        'Aeris is designed as a local-first application and does not require users to create an account.',
      ]}
      sections={sections}
    />
  );
}

