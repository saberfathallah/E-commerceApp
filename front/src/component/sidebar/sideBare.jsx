/* eslint-disable jsx-a11y/label-has-for */
/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable no-underscore-dangle */

import React, { Component } from 'react';
import { withRouter, Link } from 'react-router-dom';
import { graphql } from 'react-apollo';
import { compose } from 'recompose';
import { map, get } from 'lodash';
import PropTypes from 'prop-types';
import { Menu, Icon } from 'semantic-ui-react';
import getAllcategories from '../../graphql/category/queries/getAllCategories';
import sideBareWrapper from './sideBareWrapper';

class SideBare extends Component {
  state = {
    open: false,
    nameCat: '',
    activeItem: '',
  };

  displaySubCategories(name) {
    this.setState({
      open: !this.state.open,
      nameCat: name,
    });
  }

  handleItemClick(cat) {
    this.setState({ activeItem: cat.name });
    this.props.history.push(`/category/${cat._id}`);
  }

  render() {
    const {
      data,
      className,
    } = this.props;
    const { open, nameCat, activeItem } = this.state;
    const allCategories = get(data, 'getAllCategories.categories', []);
    const loading = get(data, 'loading', true);

    const categories = map(allCategories, (c) => {
      const subCategories = get(c, 'categoriesDetails.categories.categories', []);
      return (
        <div key={c._id}>
          <div style={{ display: 'flex', alignItems: 'baseline' }}>
            <Menu.Item
              name={c.name}
              active={activeItem === c.name}
              onClick={() => this.handleItemClick(c)}
            />
            {subCategories.length !== 0 &&
            // eslint-disable-next-line jsx-a11y/click-events-have-key-events
            // eslint-disable-next-line jsx-a11y/no-static-element-interactions
            <i
              onClick={() => this.displaySubCategories(c.name)}
              className="angle right icon"
            >
            </i>
            }
          </div>
          {(open && nameCat === c.name) &&
          <div>
            {map(subCategories, (subCat) => (
              // eslint-disable-next-line jsx-a11y/anchor-is-valid
              <Link
                to={`/category/${subCat._id}`}
                style={{ marginLeft: '25px' }}
                key={subCat._id}
              >
                {subCat.name}
              </Link>))}
          </div>
          }
        </div>
      );
    });

    console.log('TCL: SideBare -> categories -> categories', categories);
    return (
      <div className={className}>
        <div className="card mb-3">
          <div className="card-header">
            <h3>Categories</h3>
          </div>
          {loading ?
            <Icon name="circle notched" loading /> :
            <ul className="list-group">
              {allCategories.map((cat) => (
                // eslint-disable-next-line jsx-a11y/label-has-for
                <li className="list-group-item">
                  <label onClick={() => this.handleItemClick(cat)} className="custom-checkbox text-capitalize"> {cat.name}
                  </label>
                </li>
              ))}
            </ul>}
        </div>

      </div>
    );
  }
}

SideBare.propTypes = {
  className: PropTypes.string,
  data: PropTypes.object,
  history: PropTypes.object,
};

export default compose(graphql(getAllcategories), sideBareWrapper, withRouter)(SideBare);
