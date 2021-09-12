import React from 'react';
import { Link } from 'react-router-dom';
import { categories } from '../data';

const Nav = () => {
  return (
    <div>
      <div>
        <nav className="uk-navbar-container" data-uk-navbar>
          <div className="uk-navbar-left">
            <ul className="uk-navbar-nav">
              <li>
                <Link to="/">Strapi Blog</Link>
              </li>
            </ul>
          </div>

          <div className="uk-navbar-right">
            <ul className="uk-navbar-nav">
              {categories?.map((category, i) => {
                return (
                  <li key={category.id}>
                    <Link
                      to={`/category/${category.slug}`}
                      className="uk-link-reset"
                    >
                      {category.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Nav;
