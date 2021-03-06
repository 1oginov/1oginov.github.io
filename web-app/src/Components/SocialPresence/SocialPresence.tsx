import * as React from 'react';

import { Link } from 'Components/Link';
import { SOCIAL_PRESENCE_DRIVE2_TITLE } from 'Constants';
import { SocialPresenceItem } from 'Data/Interfaces/SocialPresenceItem';

interface Props {
  items: SocialPresenceItem[];
}

export const SocialPresence: React.FunctionComponent<Props> = ({ items }: Props) => (
  <ul>
    {items.map((item, index) => {
      let content;

      if (item.title === SOCIAL_PRESENCE_DRIVE2_TITLE) {
        content = (
          <>
            <Link href={item.url}>{item.title}</Link>
            {' '}
            &mdash; my Toyota Chaser GX71 blog, originally
            {' '}
            <Link href={item.url2 as string}>in Russian</Link>
          </>
        );
      } else {
        content = (
          <Link href={item.url}>{item.title}</Link>
        );
      }

      return (
        // eslint-disable-next-line react/no-array-index-key
        <li key={index}>
          {content}
        </li>
      );
    })}
  </ul>
);
