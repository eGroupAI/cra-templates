import PropTypes from 'prop-types';

import { renderRoutes } from 'react-router-config';
import { compose } from 'redux';
import { withRouter } from 'react-router';
import { withCookies } from 'react-cookie';
import privateRoutes from 'private-routes';
import publicRoutes from 'public-routes';

interface RouterRootProps {
  allCookies: any;
}

const RouterRoot = ({ allCookies }: RouterRootProps) => {
  if (allCookies.hasLoginCookie) {
    return renderRoutes(privateRoutes);
  }

  return renderRoutes(publicRoutes);
};

RouterRoot.propTypes = {
  allCookies: PropTypes.object.isRequired
};

export default compose(withRouter, withCookies)(RouterRoot);
