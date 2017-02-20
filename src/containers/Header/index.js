// @flow

import React, {
  Component,
  PropTypes,
} from 'react';
import {
  StyleSheet,
} from 'aphrodite/no-important';
import Header from 'components/Header';
import connect from './connect';

type Props = {
  onSubmit: Function,
  searchQuery: string,
  searchTerm: string,
  searchUser: Function,
};

export class HeaderContainer extends Component {

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
    searchQuery: PropTypes.string.isRequired,
    searchTerm: PropTypes.string.isRequired,
    searchUser: PropTypes.func.isRequired,
  };

  static defaultProps = {
    searchTerm: '',
  };

  constructor(props: Props) {
    super(props);
    this.handleSearchUser(props.searchQuery);
  }

  componentWillReceiveProps(nextProps: Props) {
    if (nextProps.searchQuery !== this.props.searchQuery) {
      this.handleSearchUser(nextProps.searchQuery);
    }
  }

  handleSearchUser(searchQuery: string): void {
    if (!searchQuery) {return;}
    this.props.searchUser(searchQuery);
  }

  render() {
    const {
      onSubmit,
      searchTerm,
    } = this.props;

    return (
      <div>
        <Header
          onSubmit={onSubmit}
          searchTerm={searchTerm}
        />
      </div>
    );
  }

}

const styles = StyleSheet.create({

});

export default connect(HeaderContainer);
