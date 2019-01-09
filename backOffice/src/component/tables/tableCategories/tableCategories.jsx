/* eslint-disable no-underscore-dangle */
import React from 'react';
import PropTypes from 'prop-types';
import { graphql, compose } from 'react-apollo';
import { withRouter } from 'react-router-dom';
import { map, get } from 'lodash';
import { Button, Icon } from 'semantic-ui-react';
import ALL_CATEGORIES from '../../../graphql/category/getAllCategories';
import HeaderContent from '../../headerContent';
import withRemoveCategoryMutation from '../../../graphql/category/removeCategory/withRemoveCategoryMutation';
import withTabelWrapper from '../withTabelWrapper';

function TableCategories({
  data,
  removeCategoryMutation,
  history,
  className,
}) {
  const categories = get(data, 'getAllCategories.categories', []);
  const loading = get(data, 'loading', true);

  if (loading) return <Icon name="circle notched" loading />;
  return (
    <div className={className}>
      <HeaderContent length={categories.length} type="Category" />
      <section>
        <h1>Table Categories</h1>
        <div className="tbl-header">
          <table cellPadding="0" cellSpacing="0">
            <thead>
              <tr>
                <th>NAME</th>
                <th>LEVEL</th>
                <th>NUMBER OF SUBCATEGORIES</th>
                <th>NUMBER OF PRODUCTS</th>
                <th>ACTIONS</th>
              </tr>
            </thead>
          </table>
        </div>
        <div className="tbl-content">
          <table cellPadding="0" cellSpacing="0">
            <tbody>
              {map(categories, (cat, index) => (
                <tr key={index}>
                  <td>{cat.name}</td>
                  <td>{cat.level}</td>
                  <td>{cat.categoriesDetails.numberOfCategories}</td>
                  <td>{cat.productsDetails.numberOfProducts}</td>
                  <td>
                    <Button
                      color="red"
                      content="Remove"
                      icon="remove"
                      labelPosition="left"
                      onClick={() => removeCategoryMutation(cat._id)}
                    />
                    <Button
                      color="green"
                      content="Edit"
                      icon="edit"
                      labelPosition="left"
                      onClick={() => history.push(`/editCategory/${cat._id}`)}
                    />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
TableCategories.propTypes = {
  data: PropTypes.object,
  history: PropTypes.object,
  className: PropTypes.string,
  removeCategoryMutation: PropTypes.func,
};

export default compose(
  graphql(ALL_CATEGORIES),
  withRouter,
  withRemoveCategoryMutation,
  withTabelWrapper,
)(TableCategories);
