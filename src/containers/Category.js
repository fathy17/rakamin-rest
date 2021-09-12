import React from 'react';
import { useParams } from 'react-router';
import Articles from '../components/Articles';

const category = {
  id: 1,
  name: 'news',
  slug: 'news',
  created_at: '2021-09-12T01:42:40.454Z',
  updated_at: '2021-09-12T01:42:40.454Z',
  articles: [
    {
      id: 2,
      title: "What's inside a Black Hole",
      description: 'Maybe the answer is in this article, or not...',
      content: "Well, we don't know yet...",
      slug: 'what-s-inside-a-black-hole',
      category: 1,
      author: 2,
      published_at: '2021-09-12T01:42:42.486Z',
      created_at: '2021-09-12T01:42:42.617Z',
      updated_at: '2021-09-12T01:42:42.626Z',
      image: {
        id: 4,
        name: 'what-s-inside-a-black-hole.jpg',
        alternativeText: null,
        caption: null,
        width: 800,
        height: 466,
        formats: {
          thumbnail: {
            name: 'thumbnail_what-s-inside-a-black-hole.jpg',
            hash: 'thumbnail_what_s_inside_a_black_hole_6ee72b58b8',
            ext: '.jpg',
            mime: 'image/jpeg',
            width: 245,
            height: 143,
            size: 1.74,
            path: null,
            url: '/uploads/thumbnail_what_s_inside_a_black_hole_6ee72b58b8.jpg',
          },
          medium: {
            name: 'medium_what-s-inside-a-black-hole.jpg',
            hash: 'medium_what_s_inside_a_black_hole_6ee72b58b8',
            ext: '.jpg',
            mime: 'image/jpeg',
            width: 750,
            height: 437,
            size: 7.13,
            path: null,
            url: '/uploads/medium_what_s_inside_a_black_hole_6ee72b58b8.jpg',
          },
          small: {
            name: 'small_what-s-inside-a-black-hole.jpg',
            hash: 'small_what_s_inside_a_black_hole_6ee72b58b8',
            ext: '.jpg',
            mime: 'image/jpeg',
            width: 500,
            height: 291,
            size: 4.08,
            path: null,
            url: '/uploads/small_what_s_inside_a_black_hole_6ee72b58b8.jpg',
          },
        },
        hash: 'what_s_inside_a_black_hole_6ee72b58b8',
        ext: '.jpg',
        mime: 'image/jpeg',
        size: 7.5,
        url: '/uploads/what_s_inside_a_black_hole_6ee72b58b8.jpg',
        previewUrl: null,
        provider: 'local',
        provider_metadata: null,
        created_at: '2021-09-12T01:42:44.644Z',
        updated_at: '2021-09-12T01:42:44.644Z',
      },
    },
  ],
};

const Category = () => {
  let { id } = useParams();

  return (
    <div>
      <div className="uk-section">
        <div className="uk-container uk-container-large">
          <h1>{category.name}</h1>
          <Articles articles={category.articles} />
        </div>
      </div>
    </div>
  );
};

export default Category;
