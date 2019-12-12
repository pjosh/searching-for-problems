import React from 'react';
import LevelTitle from 'components/LevelTitle';
import createBigArray from 'utils/createBigArray';
import styles from './styles.module.scss';

class Level1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    setInterval(this.updateCounter, 1000);
  }

  updateCounter = () => {
    const { counter } = this.state;

    if (!(counter % 3)) {
      createBigArray();
    }

    this.setState({
      counter: counter + 1
    });
  };

  render() {
    const { counter } = this.state;

    return (
      <div className={styles.container}>
        <LevelTitle level={1} />
        <div className={styles.counter}>{counter}</div>
      </div>
    );
  }
}

export default Level1;
