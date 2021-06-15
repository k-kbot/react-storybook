import path from 'path';
import initStoryshots from '@storybook/addon-storyshots';
import { imageSnapshot } from '@storybook/addon-storyshots-puppeteer';

const getMatchOptions = ({ context: { fileName } }) => {
  const snapshotPath = path.join('src/__imageSnapShots__');
  return { customSnapshotsDir: snapshotPath };
};

initStoryshots({
  test: imageSnapshot({
    getMatchOptions,
  }),
});
