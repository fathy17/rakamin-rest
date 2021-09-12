import React from 'react';
import { useParams } from 'react-router';
import ReactMarkdown from 'react-markdown';
import Moment from 'react-moment';

const article = {
  id: 1,
  title: "The internet's Own boy",
  description:
    'Follow the story of Aaron Swartz, the boy who could change the world',
  content:
    '# The Story of Aaron Swartz\n\nAaron Hillel Swartz (November 8, 1986 – January 11, 2013) was an American computer programmer, entrepreneur, writer, political organizer, and Internet hacktivist. He was involved in the development of the web feed format RSS, the Markdown publishing format, the organization Creative Commons, and the website framework web.py, and was a co-founder of the social news site [Reddit](https://reddit.com). He was given the title of co-founder of Reddit by Y Combinator owner [Paul Graham](https://en.wikipedia.org/wiki/Paul_Graham_(programmer)) after the formation of Not a Bug, Inc. (a merger of Swartz\'s project Infogami and Redbrick Solutions, a company run by Alexis Ohanian and Steve Huffman).\n\nSwartz\'s work also focused on civic awareness and activism. He helped launch the Progressive Change Campaign Committee in 2009 to learn more about effective online activism. In 2010, he became a research fellow at Harvard University\'s Safra Research Lab on Institutional Corruption, directed by Lawrence Lessig. He founded the online group Demand Progress, known for its campaign against the Stop Online Piracy Act.\n\n\n<iframe width="560" height="315" src="https://www.youtube.com/embed/PFQGjEJ9PEc" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>\n\n\nIn 2011, Swartz was arrested by Massachusetts Institute of Technology (MIT) police on state breaking-and-entering charges, after connecting a computer to the MIT network in an unmarked and unlocked closet, and setting it to download academic journal articles systematically from JSTOR using a guest user account issued to him by MIT. Federal prosecutors later charged him with two counts of wire fraud and eleven violations of the Computer Fraud and Abuse Act,[14] carrying a cumulative maximum penalty of $1 million in fines, 35 years in prison, asset forfeiture, restitution, and supervised release.\n\nSwartz declined a plea bargain under which he would have served six months in federal prison. Two days after the prosecution rejected a counter-offer by Swartz, he was found dead in his Brooklyn apartment, where he had hanged himself.\n\nIn 2013, Swartz was inducted posthumously into the [Internet Hall of Fame](https://www.internethalloffame.org//).',
  slug: 'the-internet-s-own-boy',
  category: {
    id: 5,
    name: 'story',
    slug: 'story',
    created_at: '2021-09-12T01:42:41.042Z',
    updated_at: '2021-09-12T01:42:41.042Z',
  },
  author: {
    id: 1,
    name: 'David Doe',
    email: 'daviddoe@strapi.io',
    created_at: '2021-09-12T01:42:41.730Z',
    updated_at: '2021-09-12T01:42:41.730Z',
    picture: {
      id: 2,
      name: 'daviddoe@strapi.io.jpg',
      alternativeText: null,
      caption: null,
      width: 2418,
      height: 2711,
      formats: {
        thumbnail: {
          name: 'thumbnail_daviddoe@strapi.io.jpg',
          hash: 'thumbnail_daviddoe_strapi_io_60ed43c821',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 139,
          height: 156,
          size: 4.37,
          path: null,
          url: '/uploads/thumbnail_daviddoe_strapi_io_60ed43c821.jpg',
        },
        large: {
          name: 'large_daviddoe@strapi.io.jpg',
          hash: 'large_daviddoe_strapi_io_60ed43c821',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 892,
          height: 1000,
          size: 74,
          path: null,
          url: '/uploads/large_daviddoe_strapi_io_60ed43c821.jpg',
        },
        medium: {
          name: 'medium_daviddoe@strapi.io.jpg',
          hash: 'medium_daviddoe_strapi_io_60ed43c821',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 669,
          height: 750,
          size: 44.52,
          path: null,
          url: '/uploads/medium_daviddoe_strapi_io_60ed43c821.jpg',
        },
        small: {
          name: 'small_daviddoe@strapi.io.jpg',
          hash: 'small_daviddoe_strapi_io_60ed43c821',
          ext: '.jpg',
          mime: 'image/jpeg',
          width: 446,
          height: 500,
          size: 22.69,
          path: null,
          url: '/uploads/small_daviddoe_strapi_io_60ed43c821.jpg',
        },
      },
      hash: 'daviddoe_strapi_io_60ed43c821',
      ext: '.jpg',
      mime: 'image/jpeg',
      size: 587.69,
      url: '/uploads/daviddoe_strapi_io_60ed43c821.jpg',
      previewUrl: null,
      provider: 'local',
      provider_metadata: null,
      created_at: '2021-09-12T01:42:42.164Z',
      updated_at: '2021-09-12T01:42:42.164Z',
    },
  },
  published_at: '2021-09-12T01:42:42.485Z',
  created_at: '2021-09-12T01:42:42.486Z',
  updated_at: '2021-09-12T01:42:42.495Z',
  image: {
    id: 5,
    name: 'the-internet-s-own-boy.jpg',
    alternativeText: null,
    caption: null,
    width: 1200,
    height: 707,
    formats: {
      thumbnail: {
        name: 'thumbnail_the-internet-s-own-boy.jpg',
        hash: 'thumbnail_the_internet_s_own_boy_59514aeffd',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 245,
        height: 144,
        size: 8.37,
        path: null,
        url: '/uploads/thumbnail_the_internet_s_own_boy_59514aeffd.jpg',
      },
      large: {
        name: 'large_the-internet-s-own-boy.jpg',
        hash: 'large_the_internet_s_own_boy_59514aeffd',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 1000,
        height: 589,
        size: 70.3,
        path: null,
        url: '/uploads/large_the_internet_s_own_boy_59514aeffd.jpg',
      },
      medium: {
        name: 'medium_the-internet-s-own-boy.jpg',
        hash: 'medium_the_internet_s_own_boy_59514aeffd',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 750,
        height: 442,
        size: 46.12,
        path: null,
        url: '/uploads/medium_the_internet_s_own_boy_59514aeffd.jpg',
      },
      small: {
        name: 'small_the-internet-s-own-boy.jpg',
        hash: 'small_the_internet_s_own_boy_59514aeffd',
        ext: '.jpg',
        mime: 'image/jpeg',
        width: 500,
        height: 295,
        size: 24.99,
        path: null,
        url: '/uploads/small_the_internet_s_own_boy_59514aeffd.jpg',
      },
    },
    hash: 'the_internet_s_own_boy_59514aeffd',
    ext: '.jpg',
    mime: 'image/jpeg',
    size: 91.55,
    url: '/uploads/the_internet_s_own_boy_59514aeffd.jpg',
    previewUrl: null,
    provider: 'local',
    provider_metadata: null,
    created_at: '2021-09-12T01:42:44.783Z',
    updated_at: '2021-09-12T01:42:44.783Z',
  },
};

const Article = () => {
  let { id } = useParams();
  const imageUrl = 'http://localhost:1337' + article.image.url;
  return (
    <div>
      <div
        id="banner"
        className="uk-height-medium uk-flex uk-flex-center uk-flex-middle uk-background-cover uk-light uk-padding uk-margin"
        data-src={imageUrl}
        data-srcset={imageUrl}
        data-uk-img
      >
        <h1>{article.title}</h1>
      </div>

      <div className="uk-section">
        <div className="uk-container uk-container-small">
          <ReactMarkdown>{article.content}</ReactMarkdown>
          <p>
            <Moment format="MMM Do YYYY">{article.published_at}</Moment>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Article;
