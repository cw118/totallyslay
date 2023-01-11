import RobotArm from './RobotArm';
import styles from '../../styles/Robot.module.css';
import Typewrite from '../Typewrite';

const Robot = ({ fr }) => {
  return (
    <div className={styles.pageWrapper}>
      <h3 className={styles.title}><Typewrite page={fr ? 'robotFr' : 'robot'} /></h3>
      <div className={styles.rowOne}>
        <RobotArm />
        <RobotArm />
        <RobotArm />
      </div>
      <div className={styles.rowTwo}>
        <div className={styles.container}>
          <div className={styles.rowTwoModels}>
            <RobotArm />
            <RobotArm />
          </div>
          <p>Choosing between 2 arm prototypes: Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim feugiat dolor in finibus. Phasellus nibh orci, vulputate vel magna id, mattis ullamcorper tellus. Morbi et luctus odio. Nunc ultrices consequat sem, vel volutpat mauris cursus vel. Mauris laoreet eros sit amet augue maximus, id sagittis tortor semper. Donec varius ipsum sed velit mattis pulvinar. Nam suscipit dolor sapien, eget pellentesque leo molestie id. Curabitur eleifend nisi a turpis volutpat eleifend. Quisque accumsan justo metus, a consequat libero suscipit vitae. Aenean quis lobortis eros. Nunc bibendum justo non ex semper, in vulputate quam porta. In dignissim dapibus lorem nec laoreet.</p>
        </div>
        <div className={styles.container}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim feugiat dolor in finibus. Phasellus nibh orci, vulputate vel magna id, mattis ullamcorper tellus. Morbi et luctus odio. Nunc ultrices consequat sem, vel volutpat mauris cursus vel. Mauris laoreet eros sit amet augue maximus, id sagittis tortor semper. Donec varius ipsum sed velit mattis pulvinar. Nam suscipit dolor sapien, eget pellentesque leo molestie id. Curabitur eleifend nisi a turpis volutpat eleifend. Quisque accumsan justo metus, a consequat libero suscipit vitae. Aenean quis lobortis eros. Nunc bibendum justo non ex semper, in vulputate quam porta. In dignissim dapibus lorem nec laoreet. Praesent hendrerit leo ut odio tincidunt aliquam. Duis ut elementum metus. Curabitur vulputate, lacus vel convallis congue, neque risus aliquam erat, nec eleifend neque metus ut ligula.</p>
        </div>
      </div>
      <div className={styles.rowThree}>
        <div className={styles.imageContainer}>
          <img src="/journal/post-images/cabbage.png" alt="Cabbage ball (temp photo)" />
          <img src="/journal/post-images/cabbage.png" alt="Cabbage ball (temp photo)" />
        </div>
        <div className={styles.container}>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim feugiat dolor in finibus. Phasellus nibh orci, vulputate vel magna id, mattis ullamcorper tellus. Morbi et luctus odio. Nunc ultrices consequat sem, vel volutpat mauris cursus vel. Mauris laoreet eros sit amet augue maximus, id sagittis tortor semper. Donec varius ipsum sed velit mattis pulvinar. Nam suscipit dolor sapien, eget pellentesque leo molestie id. Curabitur eleifend nisi a turpis volutpat eleifend. Quisque accumsan justo metus, a consequat libero suscipit vitae. Aenean quis lobortis eros. Nunc bibendum justo non ex semper, in vulputate quam porta. In dignissim dapibus lorem nec laoreet. Praesent hendrerit leo ut odio tincidunt aliquam. Duis ut elementum metus. Curabitur vulputate, lacus vel convallis congue, neque risus aliquam erat, nec eleifend neque metus ut ligula.</p>
        </div>
        <div className={styles.imageContainer}>
          <img src="/journal/post-images/cabbage.png" alt="Cabbage ball (temp photo)" />
          <img src="/journal/post-images/cabbage.png" alt="Cabbage ball (temp photo)" />
        </div>
      </div>
      <div className={styles.container}>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent dignissim feugiat dolor in finibus. Phasellus nibh orci, vulputate vel magna id, mattis ullamcorper tellus. Morbi et luctus odio. Nunc ultrices consequat sem, vel volutpat mauris cursus vel. Mauris laoreet eros sit amet augue maximus, id sagittis tortor semper. Donec varius ipsum sed velit mattis pulvinar. Nam suscipit dolor sapien, eget pellentesque leo molestie id. Curabitur eleifend nisi a turpis volutpat eleifend. Quisque accumsan justo metus, a consequat libero suscipit vitae. Aenean quis lobortis eros. Nunc bibendum justo non ex semper, in vulputate quam porta. In dignissim dapibus lorem nec laoreet. Praesent hendrerit leo ut odio tincidunt aliquam. Duis ut elementum metus. Curabitur vulputate, lacus vel convallis congue, neque risus aliquam erat, nec eleifend neque metus ut ligula.</p>
      </div>
    </div>
  )
}

export default Robot;