import React from 'react';
import {listTagsByLetters} from '@docusaurus/theme-common';
import styles from './styles.module.css';
import BlogTag from '@site/src/components/standard/blog/BlogTag';
function TagLetterEntryItem({letterEntry}) {
  return (
    <article>
      <h2>{letterEntry.letter}</h2>
      <ul className="padding--none">
        {letterEntry.tags.map((tag) => (
          <li key={tag.permalink} className={styles.tag}>
              <BlogTag tag={tag} key={tag.permalink} showCount="true"/>
          </li>
        ))}
      </ul>
      <hr />
    </article>
  );
}
export default function TagsListByLetter({tags}) {
  const letterList = listTagsByLetters(tags);
  return (
    <section className="margin-vert--lg">
      {letterList.map((letterEntry) => (
        <TagLetterEntryItem
          key={letterEntry.letter}
          letterEntry={letterEntry}
        />
      ))}
    </section>
  );
}
