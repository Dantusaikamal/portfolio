import { PrivacyPolicy } from './PrivacyPolicy';

const sections = [
  {
    title: 'Data Storage',
    content: [
      'Glance does not require users to create an account.',
      'Glance does not operate a developer-controlled backend server for storing task data.',
      "The following information is stored locally on the user's device:",
      [
        'Tasks and task-related information.',
        'Lists and task organization data.',
        'App preferences such as theme and onboarding state.',
        'Reminder and notification configuration.',
        'Home-screen widget state and display information.',
      ],
      'Tasks are stored locally using an on-device database.',
    ],
  },
  {
    title: 'Notifications',
    content: [
      'Glance may request notification permission so that it can display task reminders selected by the user.',
      "Reminder scheduling and notification handling are performed locally on the user's device.",
      'Glance does not use notification permission for advertising or marketing messages.',
    ],
  },
  {
    title: 'Phone and Wear OS Synchronization',
    content: [
      "Glance can use the Wear OS Data Layer to synchronize supported task information between a user's paired Android phone and Wear OS watch.",
      'Glance does not operate its own cloud backend for this synchronization.',
      "The synchronization feature is used only to provide the Glance experience across the user's supported paired devices.",
    ],
  },
  {
    title: 'Data Collection and Sharing',
    content: [
      'Glance does not:',
      [
        'Require an account.',
        'Sell personal information.',
        'Sell task data.',
        'Share task data with advertisers.',
        'Use advertising SDKs.',
        'Use analytics services in this version.',
        'Upload task information to a developer-operated cloud service in this version.',
      ],
    ],
  },
  {
    title: 'External Links',
    content: [
      'The Glance About screen may contain links to external websites or services such as GitHub and LinkedIn.',
      'When users open these links, they leave Glance and interact with the external service through their browser or an installed application.',
      'Those external services operate under their own privacy policies and practices.',
    ],
  },
  {
    title: 'Permissions',
    content: [
      'Glance may use Android permissions necessary for features offered by the application, including:',
      [
        'Notification permission for local task reminders.',
        'Platform capabilities required for Android widgets.',
        'Wear OS-related platform capabilities for supported phone-watch functionality.',
      ],
      'Glance does not use these permissions to collect information for advertising or profiling.',
    ],
  },
  {
    title: 'Security',
    content: [
      "Because Glance stores its primary application data locally on the user's device, the security of that data also depends on Android's application sandbox, device security, and operating-system protections.",
      'Glance does not intentionally transmit task data to a developer-controlled server.',
    ],
  },
  {
    title: 'Data Retention and Deletion',
    content: [
      "Task information, preferences, reminder configuration, widget state, and other Glance application data are retained locally on the user's device for as long as needed to provide the application's functionality.",
      'Users can delete supported task information from within Glance.',
      "Users can also remove locally stored application data by clearing Glance's application data through Android settings or by uninstalling the application, subject to Android's own backup and restore behavior.",
      'Because Glance does not provide user accounts or maintain a developer-operated task database, there is no server-side Glance account or task database requiring a separate account deletion request.',
    ],
  },
  {
    title: "Children's Privacy",
    content: [
      'Glance is not designed specifically for children and does not knowingly collect personal information from children through a developer-operated backend.',
    ],
  },
  {
    title: 'Changes to This Privacy Policy',
    content: [
      "This Privacy Policy may be updated if Glance's features or data practices change.",
      'If features such as cloud backup, accounts, analytics, advertising, or developer-operated synchronization are added in the future, this policy will be updated as appropriate before those practices are introduced.',
    ],
  },
  {
    title: 'Contact',
    content: [
      'For privacy-related questions regarding Glance:',
      'Developer: Dantu Sai Kamal',
      'Email: dantusaikamal@gmail.com',
    ],
  },
];

export default function GlancePrivacyPolicy() {
  return (
    <PrivacyPolicy
      appName="Glance"
      description={[
        'Glance is a local-first task and productivity application designed to help users manage tasks, reminders, lists, and daily planning.',
      ]}
      sections={sections}
    />
  );
}

