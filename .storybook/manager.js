import { themes } from '@storybook/theming';
import { addons } from '@storybook/addons';

addons.setConfig({
  theme: {
    ...themes.dark,
    brandImage: 'https://Dantusaikamal.codes/icon.svg',
    brandTitle: 'Dantu Sai Kamal Components',
    brandUrl: 'https://Dantusaikamal.codes',
  },
});
